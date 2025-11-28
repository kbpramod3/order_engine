import fs from "fs";
import path from "path";

const POOLS_FILE = path.join(process.cwd(), "onchain/pools.json");

export function readPools() {
  if (!fs.existsSync(POOLS_FILE)) {
    return [];
  }

  try {
    const data = fs.readFileSync(POOLS_FILE, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading pools.json:", err);
    return [];
  }
}

export function writePoolEntry(entry: any) {
  let pools = readPools();

  const existingIndex = pools.findIndex(
    (p: any) => p.poolId === entry.poolId || p.signature === entry.signature
  );

  if (existingIndex !== -1) {
    pools[existingIndex] = { ...pools[existingIndex], ...entry };
  } else {
    pools.push(entry);
  }

  fs.writeFileSync(POOLS_FILE, JSON.stringify(pools, null, 2));
  console.log("Updated pools.json ✔");
}
