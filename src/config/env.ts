import dotenv from "dotenv";
dotenv.config();

export const env = {
  DATABASE_URL: process.env.DATABASE_URL!,
  REDIS_URL: process.env.REDIS_URL || "redis://localhost:6379",
  PORT: Number(process.env.PORT) || 3000,
  SOLANA_PUBLIC_KEY: process.env.SOLANA_PUBLIC_KEY!,
  SOLANA_SECRET_KEY: process.env.SOLANA_SECRET_KEY!
};
