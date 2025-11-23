import { redis } from "../config/redis";
import { orderQueue } from "../queues/order.queue";
import { limitLogger } from "../utils/logger";

async function getAllPairs() {
  const keys = await redis.keys("limit:*");
  const pairs = new Set<string>();

  keys.forEach(k => {
    const pair = k.split(":")[1];
    pairs.add(pair);
  });

  return [...pairs];
}

async function getBucketsForPair(pair: string) {
  return redis.keys(`limit_bucket:${pair}:*`);
}

export async function startLimitWorker() {
  limitLogger.info("🚀 Limit Worker Started");

  setInterval(async () => {
    const pairs = await getAllPairs();
    if (pairs.length === 0) return;

    for (const pair of pairs) {
      const best = await redis.hgetall(`quotes:${pair}:BEST`);
      if (!best) continue;

      const currentPrice = best.price ? Number(best.price) :  null;

      const buckets = await getBucketsForPair(pair);

      for (const bucketKey of buckets) {
        const limitPrice = Number(bucketKey.split(":")[2]);

        const [tokenIn] = pair.split("-");

        let shouldTrigger = false;

        if (currentPrice && limitPrice && currentPrice > limitPrice) {
          continue;
        }

        const orderIds = await redis.smembers(bucketKey);
        if (orderIds.length === 0) continue;

        limitLogger.info(`🎯 Triggered limit bucket ${bucketKey} at price ${currentPrice}`);

        for (const orderId of orderIds) {
          const orderKey = `limit:${pair}:${orderId}`;
          const orderData = await redis.hgetall(orderKey);

          if (Object.keys(orderData).length === 0) continue;

          await orderQueue.add("execute-order", {
            orderId,
            tokenIn: orderData.tokenIn,
            tokenOut: orderData.tokenOut,
            amount: Number(orderData.amount)
          }, {
            jobId: orderId,
            attempts: 3,
            backoff: { type: "exponential", delay: 500, jitter: 0.1 }
          });

          await redis.del(orderKey);
        }

        await redis.del(bucketKey);
      }
    }
  }, 300);
}


startLimitWorker();