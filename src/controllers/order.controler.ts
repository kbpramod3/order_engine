import { FastifyInstance } from "fastify";
import { prisma } from "../config/db";
import { orderQueue } from "../queues/order.queue";
import { OrderInput } from "../types";
import {  createSniperOrder } from "../services/Sniperorder";
import { createLimitOrder } from "../services/Limitorder";
import { logger } from "../utils/logger";

export default async function orderRoutes(app: FastifyInstance) {

  app.post("/execute", async (req, reply) => {
    try {
      const body = req.body as OrderInput;

      const { tokenIn, tokenOut, amount, type, limitPrice} = body;

      const order = await prisma.order.create({
        data: {
          type: type ?? "market",
          tokenIn,
          tokenOut,
          amount,
          status: "pending",
          limitPrice: limitPrice ?? null,
        },
      });

      const orderId = order.id;
      const orderType = order.type;

      if (orderType === "limit") {
        createLimitOrder({...order, limitPrice: limitPrice! , amount : amount });
      } else if (orderType === "sniper") {
        await createSniperOrder({ ...order, amount : amount });
      } else {

      await orderQueue.add("execute-order", {
        orderId,
        tokenIn,
        tokenOut,
        amount,
      }, {
        jobId: orderId,
        attempts: 3,
        backoff: { type: "exponential", delay: 500, jitter: 0.1 }
      });
    }
      logger.info(`Order submitted: ${orderId} of type ${orderType}`);
      return reply.send({ 
        orderId
      });
    } catch (err : any) {
      logger.error("Order submission error", err);
      return reply.send(
        JSON.stringify({ status: "failed", error: err.message })
      );
    }
  });
}
