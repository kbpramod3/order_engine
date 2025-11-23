import Fastify from "fastify";
import websocketPlugin from "@fastify/websocket";
import cors from "@fastify/cors";
import "./queues/order.events";
import orderRoutes from "./controllers/order.controler";
import websocketRoutes from "./routes/ws.route";

const isDev = process.env.NODE_ENV !== "production";

export const appLogger = isDev ? {
  transport: {
    targets: [
      {
        target: "pino-pretty",
        options: {
          colorize: true,
          translateTime: "SYS:standard"
        }
      }
    ]
  }
} : true;


export const buildApp = async () => {
  const app = Fastify({ logger: appLogger });

  app.get("/", async () => {
    return { status: "API is running" };
  });

  await app.register(cors, {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  });

  await app.register(websocketPlugin);

  await app.register(orderRoutes, { prefix: "/api/orders" });
  await app.register(websocketRoutes, { prefix: "/ws" });

  return app;
};
