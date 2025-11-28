import { Connection, Keypair, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
import * as fs from "fs";
import * as path from "path";
import { env } from "./env";

interface WalletData {
    publicKey: string;
    secretKey: number[];
}

export const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const WALLET_PATH = path.join(process.cwd(), "devnet-wallet.json");

export const publicKey = new PublicKey(env.SOLANA_PUBLIC_KEY)

export async function register(): Promise<Keypair> {
        const wallet = Keypair.generate();
        
        const data: WalletData = {
            publicKey: wallet.publicKey.toBase58(),
            secretKey: Array.from(wallet.secretKey),
        };

        fs.writeFileSync(WALLET_PATH, JSON.stringify(data, null, 2));
        console.log(`✅ New wallet registered and saved to ${WALLET_PATH}`);
        
        return wallet;
    }

export async function loadWallet(): Promise<Keypair | undefined> {
        if (!fs.existsSync(WALLET_PATH)) {
            console.log(`❌ Wallet file not found at ${WALLET_PATH}`);
            return undefined;
        }

        try {
            const fileContent = fs.readFileSync(WALLET_PATH, "utf-8");
            const data: WalletData = JSON.parse(fileContent);

            const secretKeyUint8 = Uint8Array.from(data.secretKey);
            
            const wallet = Keypair.fromSecretKey(secretKeyUint8);

            console.log(`✅ Wallet loaded: ${wallet.publicKey.toBase58()}`);
            return wallet;

        } catch (error) {
            console.error("❌ Failed to load keypair from file:", error);
            return undefined;
        }
    }

export async function airdrop(wallet: Keypair, SOL: number): Promise<number> {
        console.log(`💰 Requesting ${SOL} SOL airdrop...`);
        
        const airdropSig = await connection.requestAirdrop(
            wallet.publicKey, 
            SOL * LAMPORTS_PER_SOL
        );

        //const { blockhash, lastValidBlockHeight } = await this.connection.getLatestBlockhash();
        await connection.confirmTransaction(
            airdropSig, 
            'finalized'
        );

        const balanceLamports = await connection.getBalance(wallet.publicKey);
        const balanceSOL = balanceLamports / LAMPORTS_PER_SOL;

        console.log(`✅ Airdrop successful. New Balance: ${balanceSOL} SOL`);

        return balanceSOL;
    }


export async function getBalance(publicKey: PublicKey): Promise<number> {
        const balanceLamports = await connection.getBalance(publicKey);
        return balanceLamports / LAMPORTS_PER_SOL;
    }
