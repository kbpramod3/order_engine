import fs from "fs";
import path from "path";

function POOLS_FILE(filename: string) {return path.join(process.cwd(), `onchain/${filename}`);}

export function readPools(filename : string) {
  if (!fs.existsSync(POOLS_FILE(filename))) {
    return [];
  }

  try {
    const data = fs.readFileSync(POOLS_FILE(filename), "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading pools.json:", err);
    return [];
  }
}

export function writeFileEntry(entry: any, filename: string) {
  let pools = readPools(filename);

    pools.push(entry);

  fs.writeFileSync(POOLS_FILE(filename), JSON.stringify(pools, null, 2));
  console.log(`Updated ${filename}`);
}
