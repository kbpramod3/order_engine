import { createQueue } from "../config/bullmq";

export const orderQueue = createQueue("order-execution");