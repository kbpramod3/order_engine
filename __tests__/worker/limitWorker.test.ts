import { redis } from "../../src/config/redis";
import { startLimitWorker } from "../../src/worker/limit.worker";
import { orderQueue } from "../../src/queues/order.queue";

jest.mock("../src/queues/order.queue", () => ({
  orderQueue: { add: jest.fn() }
}));

describe("Limit Worker", () => {

  beforeEach(async () => {
    jest.useFakeTimers();
    await redis.flushall();
  });

  test("should trigger limit bucket when price <= limitPrice", async () => {
    await redis.hset("quotes:SOL-USDC:BEST", { price: 100 });
    await redis.sadd("limit_bucket:SOL-USDC:105", "order123");
    await redis.hset("limit:SOL-USDC:order123", {
      orderId: "order123",
      tokenIn: "SOL",
      tokenOut: "USDC",
      amount: "1"
    });

    await startLimitWorker();

    jest.advanceTimersByTime(600);

    expect(orderQueue.add).toHaveBeenCalled();
  });
});
