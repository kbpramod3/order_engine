import pino from "pino";
import fs from "fs";
import path from "path";

export function workerLogger(workerName: string) {
  const logDir = path.join(process.cwd(), "logs");
  const isDev = process.env.NODE_ENV !== "production";

  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
  }

  return pino({
    level: isDev ? "debug" : "info",
    base: { worker: workerName },
    transport: isDev
      ? {
      targets: [
        {
          target: "pino-pretty",
          options: {
            colorize: true,
            translateTime: "HH:MM:ss",
          },
        },
        {
          target: "pino/file",
          options: {
            destination: `logs/${workerName}.log`,
          },
        },
      ],
    } : undefined,
  });
}


export const apiLogger = workerLogger("api");
export const orderLogger = workerLogger("order-worker");
export const streamLogger = workerLogger("stream-worker");
export const dbLogger = workerLogger("db");
export const limitLogger = workerLogger("limit-worker");
export const sniperLogger = workerLogger("sniper-worker");
export const logger = apiLogger;