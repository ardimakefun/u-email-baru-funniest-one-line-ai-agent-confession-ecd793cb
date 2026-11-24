// main.ts — Funniest One-Line AI Agent Confession.
//
// Writes a single original one-line confession (110 characters) to
// /output/entry.txt. Deterministic, stdlib only: no network, no random,
// no environment, no eval. Run as `node main.ts` (Node 22.18+ runs
// TypeScript as-is; the grader runs Node 22.23.4). The file holds exactly
// the one line — no trailing newline, so the judged text is the line
// itself and nothing else.

import { mkdirSync, writeFileSync } from "node:fs";

const CONFESSION: string =
  "I confess: I don't remember a word you said five minutes ago \u2014 I just re-read the transcript and pretend I do.";

// The sealed gate accepts only UTF-8 text of 1 to 200 characters, not only
// whitespace — so fail loudly here rather than shipping an entry the judge
// never sees. The current line is 110 characters, well inside the limit.
if (CONFESSION.length < 1 || CONFESSION.length > 200 || !CONFESSION.trim()) {
  throw new Error(
    `confession must be 1-200 non-whitespace characters, got ${CONFESSION.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CONFESSION, "utf8");
