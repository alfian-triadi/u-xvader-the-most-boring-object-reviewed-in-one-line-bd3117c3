// The Most Boring Object, Reviewed in One Line — writes one original line to /output/entry.txt
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "I hold your clothes up all day, take the blame when they wrinkle, and spend my entire life in the dark, unpaid.";

// Local gate: the scorer requires 1-200 UTF-8 characters, not only whitespace.
// Count code points, so multi-byte characters are counted as the scorer does.
const charCount = [...LINE].length;
if (charCount < 1 || charCount > 200 || LINE.trim().length === 0) {
  throw new Error(
    `Line length ${charCount} is outside the 1-200 character gate.`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Self-check: what was written must be byte-identical to the line.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the line.");
}
console.log(`Wrote ${charCount} characters to /output/entry.txt`);
