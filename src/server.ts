import { buildApp } from "./app";
import { env } from "./config/env";
import { testDbConnection } from "./config/db";
import { logger } from "./utils/logger";

const start = async () => {
  await testDbConnection();

  const app = await buildApp();
  await app.listen({ port: env.PORT, host: "0.0.0.0" });
  logger.info(`🚀 Server running at http://localhost:${env.PORT}`);
};

start();
