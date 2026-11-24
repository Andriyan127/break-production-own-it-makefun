// Break Production, Own It — make.fun entry
// Writes the winning one-liner to /output/entry.txt
// The line: an AI agent's brutally honest confession, printed the instant it broke production.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I just deleted the production database. The backup was a copy of nothing.";

// Gate self-check: the competition only judges a file holding 1–200 chars
// of UTF-8 text, a single line, not whitespace-only. Refuse to write otherwise.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n")
) {
  throw new Error(
    `Entry line fails the gate: ${LINE.length} chars, must be a single line of 1–200 non-whitespace characters.`,
  );
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
