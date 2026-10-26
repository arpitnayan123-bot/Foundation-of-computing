#!/usr/bin/env python3
"""Merge the remote (multi-session) worklog with this sandbox session's entries.

- Keeps origin/main's worklog verbatim as the base.
- Appends this session's entries (Tasks 1..6) renumbered to continue the
  global sequence (13..18), plus a new 19-fa-push entry.
- Cross-references inside entries are left untouched.
"""
import subprocess
import sys

BASE = "/home/z/my-project"

remote = subprocess.run(
    ["git", "show", "origin/main:worklog.md"],
    capture_output=True, text=True, check=True, cwd=BASE,
).stdout

mine = subprocess.run(
    ["git", "show", "ff4d3ec:worklog.md"],
    capture_output=True, text=True, check=True, cwd=BASE,
).stdout

# Drop the local "# Worklog" header line
lines = mine.splitlines()
if lines and lines[0].strip().startswith("# Worklog"):
    lines = lines[1:]
body = "\n".join(lines).strip()

# Renumber this session's task IDs to continue the remote sequence
renumber = {
    "Task ID: 1": "Task ID: 13-clone-preview (session rebuild)",
    "Task ID: 2": "Task ID: 14-stm-rebuild (session rebuild)",
    "Task ID: 3": "Task ID: 15-stm-remap (session rebuild)",
    "Task ID: 4-prep": "Task ID: 16-fa-prep (session rebuild)",
    "Task ID: 5-map": "Task ID: 17-fa-map (session rebuild)",
    "Task ID: 6-build": "Task ID: 18-fa-build (session rebuild)",
}
# Replace shortest keys first: single-digit IDs cannot survive as prefixes
# of the multi-digit replacements, so no later pattern can re-match them
for old in sorted(renumber, key=len):
    body = body.replace(old, renumber[old])

push_entry = """
---
Task ID: 19-fa-push
Agent: main (Z.ai)
Task: Commit the session's entire verified build to github.com/arpitnayan123-bot/Foundation-of-computing as the user (Arpit Nayan <arpitnayan123@gmail.com>), in small granular commits.

Work Log:
- Fetched origin/main (74e8b7b) and re-anchored the sandbox's final tree onto it — the repo's own history is preserved, nothing force-pushed
- Restored environment drift that was never part of the work: mode-only config churn (components.json, next.config.ts, postcss.config.mjs, tailwind.config.ts, examples, Caddyfile), runtime logs (dev.log, .zscripts/*), package-lock.json and .zscripts/mktg-spec.md
- Merged this worklog with the remote's multi-session record (this section) instead of overwriting it
- Crafted granular commits: deps (minisearch + @vercel/analytics), eslint ignores, STM reconciliation, FA 29-lecture map, FA parts 5-11, FA shell + existing-section surgery, FA exam banks, derived data (index/counts/corpus/topics), db snapshot, verification screenshots + lecture extracts, source lecture decks, tool-results sweep, README, this log
- Pushed main to origin as a fast-forward; every commit authored Arpit Nayan <arpitnayan123@gmail.com>

Stage Summary:
- Repo HEAD now mirrors the verified app: 6/6 shelves live, 171 chapters, 372 questions, 35 exam windows
- FA shelf ships the full 29-lecture deck (33 sections, 72 questions, 7 windows); STM ships the verified 27-lecture build (31 sections, 62 questions, 6 windows)
"""

separator = """

---

> Session continuation — the full pipeline (clone -> STM -> FA) was rebuilt and
> re-verified end-to-end in a fresh sandbox. Entries below are renumbered to
> continue the sequence above.
"""

merged = remote.rstrip("\n") + separator + "\n" + body + "\n" + push_entry

with open(f"{BASE}/worklog.md", "w", encoding="utf-8") as f:
    f.write(merged)

print("worklog merged:", len(merged.splitlines()), "lines")
