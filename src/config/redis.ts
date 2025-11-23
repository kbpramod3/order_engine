import { Redis } from "ioredis";
import { env } from "./env";
import { logger } from "../utils/logger";

let retryCount = 0;
const MAX_RETRIES = 10;

export const redis = new Redis(env.REDIS_URL, {
  maxRetriesPerRequest: null,

  retryStrategy(times: number) {
    retryCount = times;

    logger.error(`❌ Redis retry attempt ${retryCount}`);

    if (retryCount >= MAX_RETRIES) {
      logger.error(`❌ Redis failed after ${MAX_RETRIES} attempts. Exiting...`);
      process.exit(1);
    }

    return Math.min(times * 200, 2000);
  }
});

redis.on("connect", () => {
  retryCount = 0;
  logger.info("✅ Redis connected");
});

redis.on("error", (err) => {
  logger.error(`❌ Redis connection error: ${err.message}`);
});