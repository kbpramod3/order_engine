import { redis } from "../src/config/redis";

describe("Redis Structure", () => {

  beforeEach(async () => redis.flushall());

  test("should set and read hash keys", async () => {
    await redis.hset("quotes:SOL-USDC:BEST", { price: 100 });

    const data = await redis.hgetall("quotes:SOL-USDC:BEST");

    expect(data.price).toBe("100");
  });

});
