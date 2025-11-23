import { PrismaClient } from "../../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { env } from "./env";
import { logger } from "../utils/logger";

const adapter = new PrismaPg({
  connectionString: env.DATABASE_URL,
});

export const prisma = new PrismaClient({ adapter });

export async function testDbConnection() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    logger.info("✅ PostgreSQL connected successfully");
  } catch (err) {
    logger.error("❌ Failed to connect to PostgreSQL");
  }
}