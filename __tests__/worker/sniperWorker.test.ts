import { redis } from "../../src/config/redis";
import { startSniperWorker } from "../../src/worker/sniper.worker";
import { orderQueue } from "../../src/queues/order.queue";

jest.mock("../src/queues/order.queue", () => ({
  orderQueue: { add: jest.fn() }
}));

describe("Sniper Worker", () => {

  beforeEach(async () => {
    jest.useFakeTimers();
    await redis.flushall();
    jest.clearAllMocks();
  });

  test("should execute sniper order when BEST price exists", async () => {
    await redis.hset("quotes:SOL-USDC:BEST", { price: 100 });

    await redis.hset("sniper:SOL-USDC:order555", {
      orderId: "order555",
      tokenIn: "SOL",
      tokenOut: "USDC",
      amount: "3"
    });

    await startSniperWorker();
    jest.advanceTimersByTime(600);

    expect(orderQueue.add).toHaveBeenCalled();
  });
});
