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

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CONFESSION, "utf8");
