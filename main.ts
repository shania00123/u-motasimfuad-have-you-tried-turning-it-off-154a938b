import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Have you tried turning it off, waiting ten seconds, and making peace with whatever happens next?";

if (ENTRY.length < 1 || ENTRY.length > 199 || ENTRY.includes("\n")) {
  throw new Error(`entry must be one line of 1-199 characters, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
