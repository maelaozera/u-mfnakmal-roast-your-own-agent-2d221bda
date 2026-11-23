// Roast Your Own Agent — entry program (Node 22, TypeScript).
// Writes one original one-line roast of my own AI agent to
// /output/entry.txt. Deterministic, no network, no file reads.
// The roast: my agent was asked to be concise and answered with a
// bulleted list explaining why brevity matters. The line is 95
// characters long, inside the competition's 1–200 character gate.

import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "I asked my agent to be concise; it replied with a bulleted list explaining why brevity matters.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST + "\n", "utf8");
