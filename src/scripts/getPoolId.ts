import {
  Connection,
  PublicKey,
  clusterApiUrl,
  ParsedTransactionWithMeta,
} from "@solana/web3.js";
import { DEVNET_PROGRAM_ID } from "@raydium-io/raydium-sdk-v2";
import { writePoolEntry } from "../utils/writePools";

const RAYDIUM_CLMM_PROGRAM_ID = new PublicKey(
  "ECJ5fzw6zCiiZBBA7uVnhkYciEhndv2yYRLq6YYt9dB4"
);

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

export async function getRaydiumClmmPoolIdFromSignature(
  signature: string
): Promise<PublicKey[]> {
  const tx = (await connection.getTransaction(signature, {
    maxSupportedTransactionVersion: 0,
  })) as ParsedTransactionWithMeta | null;

  if (!tx) {
    throw new Error("Transaction not found");
  }

  const message: any = tx.transaction.message;

  // Handle both legacy and v0 messages
  const accountKeys: PublicKey[] =
    "staticAccountKeys" in message
      ? message.staticAccountKeys
      : message.accountKeys;


  const compiledInstructions =
    message.compiledInstructions ?? message.instructions;

  if (!compiledInstructions || compiledInstructions.length === 0) {
    throw new Error("No instructions in transaction");
  }

  // Find the Raydium CLMM initialize pool instruction
  const clmmIx = compiledInstructions.find((ix: any) => {
    const programId = accountKeys[ix.programIdIndex];
    return programId.equals(DEVNET_PROGRAM_ID.CLMM_PROGRAM_ID);
  });

  if (!clmmIx) {
    throw new Error("No Raydium CLMM instruction found in this transaction");
  }

  // By Raydium CLMM design, the first account of InitializePool is the pool PDA
  const poolAccountIndex = clmmIx.accountKeyIndexes[0];
  const poolPubkey = accountKeys;


  writePoolEntry({
    signature: signature,
    poolId: poolPubkey,
    });

  return poolPubkey;
}

(async () => {
  const sig =
    "3v34kBzRquuD1Un6dUPkRajMiLwhaxRNeu1qP2CFS5qYAiP8c2Kjsb6MQB6yzZ19mSVrgQ7Tyf2SMqxh71uwRx8H";

  const poolId = await getRaydiumClmmPoolIdFromSignature(sig);
  console.log("CLMM Pool ID:", poolId);
})();
