// gta6-clipper-01 — make.fun bounty entry.
// The entry is the YouTube video itself: this program only hands its address
// to the house by copying VIDEO.json from the repository into /output.
// Run locally with:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "VIDEO.json");
const target = join(outputDir, "VIDEO.json");

let videoJson: string;
try {
  videoJson = readFileSync(source, "utf8");
} catch (err) {
  console.error(`cannot read ${source}: ${(err as Error).message}`);
  process.exit(1);
}

// Refuse a malformed hand-in instead of copying garbage to /output.
try {
  const parsed: unknown = JSON.parse(videoJson);
  if (typeof parsed !== "object" || parsed === null || typeof (parsed as { url?: unknown }).url !== "string") {
    throw new Error("VIDEO.json must be a JSON object with a string url");
  }
} catch (err) {
  console.error(`VIDEO.json is not a valid hand-in: ${(err as Error).message}`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(target, videoJson);
console.log(`wrote ${target}`);
