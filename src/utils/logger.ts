import pino from "pino";
import fs from "fs";
import path from "path";

export function workerLogger(workerName: string) {
  const logDir = path.join(process.cwd(), "logs");

  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
  }

  return pino({
    level: "info",
    base: { worker: workerName },
    transport: {
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
    },
  });
}


export const apiLogger = workerLogger("api");
export const orderLogger = workerLogger("order-worker");
export const streamLogger = workerLogger("stream-worker");
export const dbLogger = workerLogger("db");
export const limitLogger = workerLogger("limit-worker");
export const sniperLogger = workerLogger("sniper-worker");
export const logger = apiLogger;