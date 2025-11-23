import { DexType, OrderType } from "../../generated/prisma";

export interface OrderInput {
  tokenIn: string;
  tokenOut: string;
  amount: number;
  type: OrderType;
  limitPrice?: number;
}

export interface OrderExec {
  tokenIn: string;
  tokenOut: string;
  amount: number;
}

export interface DexQuote {
    dex: DexType;
    price: number;
    fee: number;
}