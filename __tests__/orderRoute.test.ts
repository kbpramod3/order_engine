import fastify from "fastify";
import orderRoutes from "../src/controllers/order.controler";

describe("POST /api/orders/execute", () => {
  const app = fastify();
  app.register(orderRoutes, { prefix: "/api/orders" });

  test("should create market order", async () => {
    const response = await app.inject({
      method: "POST",
      url: "/api/orders/execute",
      payload: {
        tokenIn: "SOL",
        tokenOut: "USDC",
        amount: 1,
        type: "market"
      }
    });

    expect(response.statusCode).toBe(200);

    const json = JSON.parse(response.body);
    expect(json.orderId).toBeDefined();
  });
});
