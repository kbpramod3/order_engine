import { FastifyInstance } from "fastify";
import { WebSocketManager } from "../ws/websocketManager";
import { logger } from "../utils/logger";

export default async function websocketRoutes(app: FastifyInstance) {
  app.get("/:orderId", { websocket: true }, (connection, req) => {
    const { orderId } = req.params as { orderId: string };

    WebSocketManager.register(orderId, connection);
    WebSocketManager.send(orderId, { status: "pending" });
    logger.info(`WS connected for order ${orderId}`);

    connection.on("close", () => {
      WebSocketManager.unregister(orderId);
      logger.info(`WS closed for ${orderId}`);
    });
  });
}
