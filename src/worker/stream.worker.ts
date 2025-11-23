import { redis } from "../config/redis";
import { MockDexRouter } from "../services/dexRouter";
import { sleep } from "../utils/sleep";
import { streamLogger } from "../utils/logger";

const router = new MockDexRouter();

const PAIRS = [
  { tokenIn: "SOL", tokenOut: "USDC" },
  { tokenIn: "BONK", tokenOut: "USDC" },
  { tokenIn: "NEW", tokenOut: "USDC" },
];

async function streamQuotes() {
  while (true) {
    for (const pair of PAIRS) {
      const { tokenIn, tokenOut } = pair;

      const ray = await router.getRaydiumQuote({ tokenIn, tokenOut, amount: 1 });
      const met = await router.getMeteoraQuote({ tokenIn, tokenOut, amount: 1 });

      await redis.hset(`quotes:${tokenIn}-${tokenOut}:RAYDIUM`, {
        price: ray.price,
        fee: ray.fee,
        timestamp: Date.now()
      });

      await redis.hset(`quotes:${tokenIn}-${tokenOut}:METEORA`, {
        price: met.price,
        fee: met.fee,
        timestamp: Date.now()
      });

      const rayNet = ray.price - ray.fee;
      const metNet = met.price - met.fee;

      const best = rayNet >= metNet
        ? { dex: "RAYDIUM", price: rayNet }
        : { dex: "METEORA", price: metNet };

      await redis.hset(`quotes:${tokenIn}-${tokenOut}:BEST`, {
        dex: best.dex,
        price: best.price.toString(),
        timestamp: Date.now(),
      });

      streamLogger.info(`📡 Updated quotes for ${tokenIn}-${tokenOut}`);
    }

    await sleep(500);
  }
}

streamQuotes();
streamLogger.info("🚀 Quote Stream Worker running...");
