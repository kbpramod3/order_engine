import { Worker, Job } from "bullmq";
import { redis } from "../config/redis";
import { MockDexRouter } from "../services/dexRouter";
import { dlqQueue } from "../queues/dlq.queue";
import { DexQuote } from "../types";
import { DexType } from "../../generated/prisma";
import { orderLogger } from "../utils/logger";

const router = new MockDexRouter();

export async function orderProcessor(job: Job){
      const { orderId, tokenIn, tokenOut, amount } = job.data;

    job.updateProgress({ stage: "routing" });
    await redis.hset(`order:${orderId}`, { status: "routing" });

    const rayRaw = await redis.hgetall(`quotes:${tokenIn}-${tokenOut}:RAYDIUM`);
    const metRaw = await redis.hgetall(`quotes:${tokenIn}-${tokenOut}:METEORA`);

    let ray: DexQuote;
    let met: DexQuote;

    const isRayValid = rayRaw.price && rayRaw.timestamp &&
      (Date.now() - Number(rayRaw.timestamp) <= 2000);

    const isMetValid = metRaw.price && metRaw.timestamp &&
      (Date.now() - Number(metRaw.timestamp) <= 2000);

    if (isRayValid && isMetValid) {
      ray = {
        dex: DexType.RAYDIUM,
        price: Number(rayRaw.price),
        fee: Number(rayRaw.fee),
      };

      met = {
        dex: DexType.METEORA,
        price: Number(metRaw.price),
        fee: Number(metRaw.fee),
      };
    } else {
      const fallbackRay = await router.getRaydiumQuote({ tokenIn, tokenOut, amount });
      const fallbackMet = await router.getMeteoraQuote({ tokenIn, tokenOut, amount });

      ray = fallbackRay;
      met = fallbackMet;
    }

    const best = ray.price > met.price ? ray : met;

    job.updateProgress({ stage: "building" });
    await redis.hset(`order:${orderId}`, { status: "building" });
    await router.buildTransaction();

    job.updateProgress({ stage: "submitted" });
    await redis.hset(`order:${orderId}`, { status: "submitted" });
    await router.submitTransaction();

    const exec = await router.executeSwap(best);

    await redis.hset(`order:${orderId}`, {
      status: "confirmed",
      dex: best.dex,
      executedPrice: exec.executedPrice,
      txHash: exec.txHash,
    });

    job.updateProgress({ stage: "confirmed" });

    return {
      orderId,
      dex: best.dex,
      executedPrice: exec.executedPrice,
      txHash: exec.txHash,
    };
}

export const orderWorker = new Worker(
  "order-execution",
  orderProcessor,
  {
    connection: redis,
    concurrency: 10,
    maxStartedAttempts: 3,
    lockDuration: 60000,
    stalledInterval: 30000
  }
);

orderWorker.on("completed", (job) => {
  orderLogger.info(`completed ${job.id}`);
});

orderWorker.on("failed", async (job, err) => {
  orderLogger.info(`failed ${job?.id} with ${err.message}`);
  if (job && job.attemptsMade >= 3) {
    await dlqQueue.add("order-dead", {
      orderId: job.data.orderId,
      reason: err.message,
      data: job.data
    });
  }
});
