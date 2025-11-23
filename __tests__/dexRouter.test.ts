import { MockDexRouter } from "../src/services/dexRouter";
import { DexType } from "../generated/prisma";

describe("DEX Router", () => {
  const router = new MockDexRouter();

  test("Raydium quote should return price in expected range", async () => {
    const q = await router.getRaydiumQuote({ tokenIn: "SOL", tokenOut: "USDC", amount: 1 });

    expect(q.price).toBeGreaterThan(100);
    expect(q.price).toBeLessThan(105);
  });

  test("Meteora quote should return price in expected range", async () => {
    const q = await router.getMeteoraQuote({ tokenIn: "SOL", tokenOut: "USDC", amount: 1 });

    expect(q.price).toBeGreaterThan(100);
    expect(q.price).toBeLessThan(103);
  });

  test("pickBestDex selects higher price", () => {
    const ray = { dex: DexType.RAYDIUM, price: 105, fee: 0.003 };
    const met = { dex: DexType.METEORA, price: 102, fee: 0.002 };

    const best = router.pickBestDex(ray, met);
    expect(best).toEqual(ray);
  });

  test("executeSwap returns txHash and executedPrice", async () => {
    const result = await router.executeSwap({ dex: "RAYDIUM", price: 101.23, fee: 0.003 });

    expect(result.txHash).toMatch(/mock_/);
    expect(result.executedPrice).toBe(101.23);
  });
});
