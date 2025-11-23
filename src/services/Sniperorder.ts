import { redis } from "../config/redis";

export async function createSniperOrder(order: {
    id: string;
  tokenIn: string;
  tokenOut: string;
  amount: number;
}) {
    const orderId = order.id;
  const pair = `${order.tokenIn}-${order.tokenOut}`;
  const orderKey = `sniper:${pair}:${orderId}`;

  await redis.hset(orderKey, {
    orderId,
    tokenIn: order.tokenIn,
    tokenOut: order.tokenOut,
    amount: order.amount,
    status: "waiting",
    timestamp: Date.now()
  });

  return orderId;
}
