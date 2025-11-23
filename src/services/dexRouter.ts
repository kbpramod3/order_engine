import { sleep } from "../utils/sleep";
import { OrderExec, DexQuote } from "../types";
import { DexType } from "../../generated/prisma";

export class MockDexRouter {
  async getRaydiumQuote({ tokenIn, tokenOut, amount }: OrderExec) {
    await sleep(200 + Math.random() * 200);
    return {
      dex: DexType.RAYDIUM,
      price: 100 * (1 + (Math.random() * 0.05)),
      fee: 0.003,
    };
  }

  async getMeteoraQuote({ tokenIn, tokenOut, amount }: OrderExec) {
    await sleep(200 + Math.random() * 200);
    return {
      dex: DexType.METEORA,
      price: 100 * (1 + (Math.random() * 0.03)),
      fee: 0.002,
    };
  }

  pickBestDex(ray: DexQuote, met: DexQuote) {
    return ray.price > met.price ? ray : met;
  }

  async buildTransaction() {
    await sleep(500 + Math.random() * 300);
    return { message: "tx-built" };
  }

  async submitTransaction() {
    await sleep(500 + Math.random() * 300);
    return { signature: "mock_sig_" + Math.random().toString(36).slice(2) };
  }

  async executeSwap(bestDex: DexQuote) {
    await this.buildTransaction();
    await this.submitTransaction();
    await sleep(1000 + Math.random() * 500);

    return {
      txHash: "mock_" + Math.random().toString(36).slice(2),
      executedPrice: bestDex.price,
    };
  }
}
