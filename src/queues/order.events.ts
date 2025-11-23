import { QueueEvents } from "bullmq";
import { redis } from "../config/redis";
import { WebSocketManager } from "../ws/websocketManager";
import { logger } from "../utils/logger";

logger.info("🔥 QueueEvents FILE LOADED");

const events = new QueueEvents("order-execution", {
  connection: redis,
  autorun: true,
});

events.on("progress", ({ jobId, data }) => {
  const payload = data as { stage?: string };

  if (payload.stage) {
    WebSocketManager.send(jobId, { status: payload.stage });
  }
});

events.on("completed", ({ jobId, returnvalue }) => {
  logger.info(`EVENT COMPLETED ${jobId}`);
  WebSocketManager.send(jobId, {
    status: "confirmed",
    returnvalue,
  });
});

events.on("failed", ({ jobId, failedReason }) => {
  logger.info(`EVENT FAILED ${failedReason}`);
  WebSocketManager.send(jobId, {
    status: "failed",
    error: failedReason,
  });
});
