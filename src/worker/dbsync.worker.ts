import { redis } from "../config/redis";
import { prisma } from "../config/db";
import { DexType } from "../../generated/prisma";
import { dbLogger } from "../utils/logger";

async function syncDB() {
  const keys = await redis.keys("order:*");

  for (const key of keys) {
    const orderId = key.split(":")[1];
    const data = await redis.hgetall(key);

    if (!data.status) continue;

    if (data.status === "confirmed") {
      await prisma.order.update({
        where: { id: orderId },
        data: {
          status: data.status,
          dexUsed: data.dex as DexType,
          executedPrice: Number(data.executedPrice),
          txHash: data.txHash,
        },
      });

      dbLogger.info(`✅ Order synced to DB → ${orderId}`);

      await redis.del(key);
    }
  }
}

setInterval(syncDB, 2000);

dbLogger.info("DB Sync Worker running...");
