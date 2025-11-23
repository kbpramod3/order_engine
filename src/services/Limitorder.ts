import { redis } from "../config/redis";
import { logger } from "../utils/logger";

export async function createLimitOrder(order: {
    id: string;
  tokenIn: string;
  tokenOut: string;
  amount: number;
  limitPrice: number | null;
}) {
    const orderId = order.id;
  const pair = `${order.tokenIn}-${order.tokenOut}`;

  const orderKey = `limit:${pair}:${orderId}`;
  const bucketKey = `limit_bucket:${pair}:${order.limitPrice}`;

  await redis.hset(orderKey, {
    orderId,
    tokenIn: order.tokenIn,
    tokenOut: order.tokenOut,
    amount: order.amount,
    limitPrice: order.limitPrice,
    status: "pending",
    timestamp: Date.now()
  });

  await redis.sadd(bucketKey, orderId);
    logger.info(`Limit order created: ${orderId} at ${order.limitPrice} for ${pair}`);
}
