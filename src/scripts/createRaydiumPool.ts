import { CLMM_PROGRAM_ID, DEVNET_PROGRAM_ID, TxVersion } from '@raydium-io/raydium-sdk-v2'
import { PublicKey } from '@solana/web3.js'
import { initRaydium } from '../config/raydium'
import Decimal from 'decimal.js'
import { writePoolEntry } from '../utils/writePools'

export const createPool = async () => {
  const raydium = await initRaydium()

  //mint info from api: https://api-v3.raydium.io/mint/list
  // WSOL
  const mint1 = await raydium.token.getTokenInfo('So11111111111111111111111111111111111111112')
  // USDT
  const mint2 = await raydium.token.getTokenInfo('Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr')
  const clmmConfigs = await raydium.api.getClmmConfigs()

  const { execute } = await raydium.clmm.createPool({
    programId: DEVNET_PROGRAM_ID.CLMM_PROGRAM_ID,
    mint1,
    mint2,
    ammConfig: { ...clmmConfigs[0], id: new PublicKey(clmmConfigs[0].id), fundOwner: '', description: '' },
    initialPrice: new Decimal(1),
    txVersion: TxVersion.LEGACY,
  })

  const { txId } = await execute({ sendAndConfirm: true })
  console.log('clmm pool created:', { txId: `https://explorer.solana.com/tx/${txId}` })
  writePoolEntry({
    signature: txId,
    mint1: mint1.address,
    mint2: mint2.address,
    createdAt: Date.now(),
    txId: `https://explorer.solana.com/tx/${txId}`
  })
  process.exit()
}

(async() => createPool())()