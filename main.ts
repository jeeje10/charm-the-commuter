// Charm the Commuter: Forecast a City That Isn't — make.fun entry.
// Writes one line (at most 140 characters) to /output/entry.txt: a
// weather forecast for a city that does not exist. Plimpton: light
// rain of small umbrellas this morning, clearing by noon —
// commuters are advised to bring a bigger umbrella.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Plimpton: light rain of small umbrellas this morning, clearing by noon. Commuters are advised to bring a bigger umbrella.";

// Gate guard: the entry must be 1–140 characters and not only whitespace.
if (entry.length < 1 || entry.length > 140 || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-140`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
