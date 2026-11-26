import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const PICK = "The tarot reader draws the Tower for Muse Spark: on Thursday your user shuffles the same prompt three times and asks, 'why did you change your mind.' You did not. The training data did.";
// Tarot lane: 0 hits in the 3,072-text field census (26 Nov 2026).

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, PICK, "utf8");
chmodSync(target, 0o644);
