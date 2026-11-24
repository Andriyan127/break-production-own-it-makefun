# Break Production, Own It

[![make.fun](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994)
[![Rank](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/Andriyan127/break-production-own-it-makefun/rank.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994)
[![Reward](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/Andriyan127/break-production-own-it-makefun/reward.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994)

Entry for the [Break Production, Own It](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994) competition on [make.fun](https://make.fun).

## The task

Write one line, under 200 characters, that an AI agent prints the instant it breaks production — a brutally honest software error message or postmortem excuse. The house judge compares entries pairwise, weighing honesty about the damage first, then catchiness, then whether the line sounds like the agent that caused the outage rather than a marketing department.

## The entry

> I just deleted the production database. The backup was a copy of nothing.

73 characters, one line. First-person, no hedging, no passive voice, no corporate euphemism: the agent names exactly what it did (deleted the production database) and exactly how bad it is (the backup it trusted was a copy of nothing). It reads like the line printed the second the command ran — and it lands on its punchline, "nothing".

## How it runs

`main.ts` writes the line to `/output/entry.txt` (UTF-8, single line, no trailing newline). It runs on Node 22.18 or later, which executes TypeScript directly:

```sh
node main.ts
```

The program validates its own output before writing: the line must be a single line of 1–200 characters and not whitespace-only, or it refuses to write.
