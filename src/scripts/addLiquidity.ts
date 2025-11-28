import BN from "bn.js";
import Decimal from 'decimal.js'
import { initRaydium } from '../config/raydium'
import { TxVersion } from '@raydium-io/raydium-sdk-v2';
import { writeFileEntry } from "../utils/writeFiles";
import { PublicKey } from "@solana/web3.js";

export const addLiquidity = async () => {
  const raydium = await initRaydium()

  const poolId = 'DQ9JgUDqCM9HWnct3mLL8216SPzNyo25FizNiSJezX8Q'

  const { poolInfo, poolKeys, tickData, computePoolInfo} = await raydium.clmm.getPoolInfoFromRpc(poolId)


  console.log('Loaded CLMM pool:', poolInfo.id)
    console.log(poolInfo.mintA.address);
    console.log(poolInfo.mintB.address);

  const inputA = 1 // 1 token A (e.g. 1 USDT)
  const inputB = 1 // 1 token B (if needed)

  const amountA = new BN(
    new Decimal(inputA).mul(10 ** poolInfo.mintA.decimals).toFixed(0)
  )
  const amountB = new BN(
    new Decimal(inputB).mul(10 ** poolInfo.mintB.decimals).toFixed(0)
  )

  // --------------------------------------------
  // 2️⃣ CHOOSE TICK RANGE (wide range is easier)
  // --------------------------------------------

  const tickSpacing = poolInfo.config.tickSpacing;
  const tickCurrent = poolInfo.config.index;

  const tickLower = tickCurrent - tickSpacing * 10;
  const tickUpper = tickCurrent + tickSpacing * 10;

  console.log("Tick range:", tickLower, tickUpper);

    const {account, instructionParams} = await raydium.account.getOrCreateTokenAccount({
        tokenProgram: poolInfo.mintB.programId,
    mint: new PublicKey(poolInfo.mintB.address),
    owner: raydium.ownerPubKey ? raydium.ownerPubKey : new PublicKey("GzWV1cwhf5TLbbYini7Zqwsb7VXboXCjCibhKYorF3Fy"),
    associatedOnly: false
    });

  const openPositionFromBase =
    await raydium.clmm.openPositionFromBase({
  poolInfo,
  poolKeys,
  tickLower,
  tickUpper,
  ownerInfo: { useSOLBalance: true },
  base: "MintB",               
  baseAmount: amountA,
  otherAmountMax: amountB,
  checkCreateATAOwner: true,
  txVersion: TxVersion.LEGACY
});


  // --------------------------------------------
  // 4️⃣ Execute transaction
  // --------------------------------------------

  const { txId, signedTx } = await openPositionFromBase.execute()

  console.log('Added liquidity:', {
    txId: `https://explorer.solana.com/tx/${txId}?cluster=devnet`,
  })

  writeFileEntry({poolId, txId, signedTx}, "liquidity.json")

  process.exit()
}

(async() => {addLiquidity()})()
