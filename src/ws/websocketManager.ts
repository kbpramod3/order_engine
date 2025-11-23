import { logger } from "../utils/logger";

export class WebSocketManager {
  private static connections = new Map<string, any>();

  static register(orderId: string, socket: any) {
    this.connections.set(orderId, socket);
    logger.info(`websocket opened ${this.connections.size}`);
  }

  static send(orderId: string, payload: any) {
    const ws = this.connections.get(orderId);
    if (ws) ws.send(JSON.stringify(payload));
  }

  static unregister(orderId: string) {
    this.connections.delete(orderId);
  }
}
