import { redis } from "../src/config/redis";

module.exports = async () => {
  await redis.quit();
};
