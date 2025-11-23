import { sleep } from "../src/utils/sleep";

describe("Utils", () => {
  test("sleep should delay execution", async () => {
    const before = Date.now();
    await sleep(100);
    const after = Date.now();

    expect(after - before).toBeGreaterThanOrEqual(100);
  });
});
