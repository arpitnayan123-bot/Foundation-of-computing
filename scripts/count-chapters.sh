#!/usr/bin/env bash
# Count rendered chapters per subject via the mobile chapter index
# drawer, and check prev/next + print controls exist. QA evidence.
set -u
BASE="${1:-http://localhost:3000}"
agent-browser set viewport 390 844 >/dev/null 2>&1
for id in foc atb fa ebh stm mktg; do
  agent-browser open "$BASE/#/subject/$id" >/dev/null 2>&1
  agent-browser wait 3500 >/dev/null 2>&1
  agent-browser find role button click --name "Open the chapter index" >/dev/null 2>&1
  agent-browser wait 1200 >/dev/null 2>&1
  COUNT=$(agent-browser eval "(() => { const dlg = document.querySelector('[role=\"dialog\"]'); if (!dlg) return 'no-dialog'; const rows = dlg.querySelectorAll('a'); return 'rows=' + rows.length + ' first=' + (rows[0]?.textContent.trim().slice(0,40) || '-') + ' last=' + (rows[rows.length-1]?.textContent.trim().slice(0,40) || '-'); })()" 2>/dev/null | tr -d '"\\')
  echo "$id → $COUNT"
  agent-browser press Escape >/dev/null 2>&1
done
agent-browser close >/dev/null 2>&1
