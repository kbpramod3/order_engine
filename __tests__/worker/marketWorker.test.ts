import { orderProcessor } from "../../src/worker/order.worker";
import { prisma } from "../../src/config/db";
import { redis } from "../../src/config/redis";

jest.mock("../src/services/dexRouter", () => {
  return {
    MockDexRouter: jest.fn().mockImplementation(() => ({
      getRaydiumQuote: jest.fn().mockResolvedValue({ price: 100, fee: 0 }),
      getMeteoraQuote: jest.fn().mockResolvedValue({ price: 95, fee: 0 }),
      executeSwap: jest.fn().mockResolvedValue({
        executedPrice: 100,
        txHash: "mock_hash",
      }),
    })),
  };
});

beforeEach(async () => {
  await prisma.order.deleteMany();
  await redis.flushall();
});

test("worker should complete a market order", async () => {
  const order = await prisma.order.create({
    data: {
      id: "orderTest",
      type: "market",
      tokenIn: "SOL",
      tokenOut: "USDC",
      amount: 1,
      status: "pending",
    },
  });

  const result = await orderProcessor({
    data: {
      orderId: order.id,
      tokenIn: "SOL",
      tokenOut: "USDC",
      amount: 1
    }
  } as any);

  expect(result.orderId).toBe("orderTest");
  expect(result.executedPrice).toBeDefined();
  expect(result.txHash).toBe("mock_hash");
});
