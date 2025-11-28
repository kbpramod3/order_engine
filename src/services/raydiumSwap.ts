import {
  ApiV3PoolInfoConcentratedItem,
  ClmmKeys,
  ComputeClmmPoolInfo,
  PoolUtils,
  ReturnTypeFetchMultiplePoolTickArrays,
  RAYMint,
  TxVersion,
} from '@raydium-io/raydium-sdk-v2'
import BN from 'bn.js'
import { initRaydium } from '../config/raydium'

export const swap = async () => {
  const raydium = await initRaydium()
  let poolInfo: ApiV3PoolInfoConcentratedItem
  // SOL-USDC pool
  const poolId = 'DQ9JgUDqCM9HWnct3mLL8216SPzNyo25FizNiSJezX8Q'
  const inputMint = "So11111111111111111111111111111111111111112"
  let poolKeys: ClmmKeys | undefined
  let clmmPoolInfo: ComputeClmmPoolInfo
  let tickCache: ReturnTypeFetchMultiplePoolTickArrays

  const inputAmount = new BN(100)


    const data = await raydium.clmm.getPoolInfoFromRpc(poolId)
    poolInfo = data.poolInfo
    poolKeys = data.poolKeys
    clmmPoolInfo = data.computePoolInfo
    tickCache = data.tickData

  if (inputMint !== poolInfo.mintA.address && inputMint !== poolInfo.mintB.address)
    throw new Error('input mint does not match pool')

  const baseIn = inputMint === poolInfo.mintA.address

  const { minAmountOut, remainingAccounts } = PoolUtils.computeAmountOutFormat({
    poolInfo: clmmPoolInfo,
    tickArrayCache: tickCache[poolId],
    amountIn: inputAmount,
    tokenOut: poolInfo[baseIn ? 'mintB' : 'mintA'],
    slippage: 0.01,
    epochInfo: await raydium.fetchEpochInfo(),
  })

  const { execute } = await raydium.clmm.swap({
    poolInfo,
    poolKeys,
    inputMint: poolInfo[baseIn ? 'mintA' : 'mintB'].address,
    amountIn: inputAmount,
    amountOutMin: minAmountOut.amount.raw,
    observationId: clmmPoolInfo.observationId,
    ownerInfo: {
      useSOLBalance: true,
    },
    remainingAccounts,
    txVersion: TxVersion.LEGACY,
  })

  const { txId } = await execute()
  console.log('swapped in clmm pool:', { txId: `https://explorer.solana.com/tx/${txId}` })
  process.exit()
}

swap()