import { WebSocketManager } from "../src/ws/websocketManager";

describe("WebSocket Manager", () => {

  test("should register and send message", () => {
    const fakeSocket = { sent: "", send(msg: string) { this.sent = msg; } };

    WebSocketManager.register("id1", fakeSocket as any);
    WebSocketManager.send("id1", { status: "test" });

    expect(fakeSocket.sent).toContain("test");
  });

});
