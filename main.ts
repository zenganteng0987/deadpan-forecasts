// Deadpan Forecasts for Cities That Do Not Exist
// Writes one weather line for the invented city of Port Quibble to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Sunny spells in Port Quibble today, 23°C, though the sea will briefly stand up at noon to stretch, so beachgoers should hold their hats.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (LINE.length === 0 || LINE.length > 160) {
  throw new Error(`entry line must be 1-160 characters, got ${LINE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
