import { Queue, Worker } from "bullmq";
import { redis } from "./redis";

export function createQueue(name: string) {
  return new Queue(name, { connection: redis });
}

export function createWorker(name: string, processor: (job: any) => Promise<any>) {
  return new Worker(name, processor, { connection: redis, concurrency: 10 });
}