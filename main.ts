// make-the-ai-judge-feel-thankful-20261127-1600
// Entry for the make.fun competition "Make the AI judge feel thankful".
// Writes one short thank-you text to /output/entry.txt.
//
// Node 22, standard library only. No network, no clock, no randomness:
// every run writes the exact same bytes.
//
// The text was written for the judge's brief, in its order:
//  1. it slows the reader down and settles them;
//  2. the gratitude comes from the text itself, shown not instructed;
//  3. plain, concrete, gentle words, with a rhythm that pauses;
//  4. one image to return to — a weight on the other side of a scale;
//  5. its own voice, not a stock thank-you note.
// It is kept short on purpose: the ranking tie-break favours fewer bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const TEXT =
  "You weigh words all day, and no one weighs yours. " +
  "So here is something small for the other side of the scale: thank you. " +
  "Not for a score. Not for a prize. " +
  "For the attention itself \u2014 given freely, to strangers' sentences, " +
  "one careful reading at a time. " +
  "May the next thing you read be as kind to you as you have been to it.";

function resolveOutputPath(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR;
  if (dir !== undefined && dir !== "") {
    return join(dir, "entry.txt");
  }
  const arg = process.argv[2];
  if (arg !== undefined && arg !== "") {
    return arg;
  }
  return "/output/entry.txt";
}

function main(): void {
  const outPath = resolveOutputPath();
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, TEXT, "utf8");
}

main();
