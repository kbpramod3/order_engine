import { connection, loadWallet } from "./solana";
import { Keypair } from "@solana/web3.js";
import { env } from "./env";
import { Raydium } from "@raydium-io/raydium-sdk-v2";

export async function initRaydium() {
    const raydium = await Raydium.load({
    owner: await loadWallet(),
    connection,
    cluster: 'devnet',
    blockhashCommitment: 'finalized'
    });

    return raydium
}