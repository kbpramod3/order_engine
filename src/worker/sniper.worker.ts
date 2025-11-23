import { redis } from "../config/redis";
import { orderQueue } from "../queues/order.queue";
import { sniperLogger } from "../utils/logger";

async function getAllSniperPairs() {
  const keys = await redis.keys("sniper:*");
  const pairs = new Set<string>();

  keys.forEach(k => {
    // key format: sniper:SOL-USDC:orderId
    const pair = k.split(":")[1];
    pairs.add(pair);
  });

  return [...pairs];
}

async function getSniperOrdersForPair(pair: string) {
  return redis.keys(`sniper:${pair}:*`);
}

async function priceAvailable(pair: string) {
  const best = await redis.hgetall(`quotes:${pair}:BEST`);
  return !!best.price; // true if price exists
}

export async function startSniperWorker() {
  sniperLogger.info("🚀 Sniper Worker Started");

  setInterval(async () => {
    const pairs = await getAllSniperPairs();

    if (pairs.length === 0) return;

    for (const pair of pairs) {

      const available = await priceAvailable(pair);

      if (!available) continue;

      const orderKeys = await getSniperOrdersForPair(pair);

      for (const key of orderKeys) {
        const data = await redis.hgetall(key);

        if (Object.keys(data).length === 0) continue;

        await orderQueue.add("execute-order", {
          orderId: data.orderId,
          tokenIn: data.tokenIn,
          tokenOut: data.tokenOut,
          amount: Number(data.amount)
        }, {
          jobId: data.orderId,
          attempts: 3,
          backoff: { type: "exponential", delay: 500, jitter: 0.1 }
        });

        await redis.del(key);

        sniperLogger.info(`⚡ Sniper triggered → Executing ${pair} (${data.orderId})`);
      }
    }

  }, 300);
}

startSniperWorker();
