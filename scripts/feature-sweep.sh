#!/usr/bin/env bash
# ============================================================
# THE ATLAS — app-wide feature sweep (agent-browser E2E).
# JS probes live in scripts/qa-mobile/p-*.js to keep shell
# quoting sane. Prints PASS/FAIL per feature. Exit 0 = green.
# ============================================================
set -u
BASE="${1:-http://localhost:3000}"
Q=scripts/qa-mobile
PASS=0; FAIL=0
ab() { agent-browser "$@"; }

ck() { # label expected actual
  if [ "$3" = "$2" ]; then PASS=$((PASS+1)); echo "PASS  $1";
  else FAIL=$((FAIL+1)); echo "FAIL  $1 (want $2, got $3)"; fi
}
ev() { # eval-with-retry — headless transitions can eat one eval
  local out="" i
  for i in 1 2 3; do
    out=$(ab eval "$1" 2>/dev/null | tr -d '"\')
    [ -n "$out" ] && { echo "$out"; return; }
    ab wait 600 >/dev/null 2>&1
  done
  echo "ERR"
}
txt() { # pattern → inject + test via p-hasre.js
  ab eval "window.__pat = $(python3 -c 'import json,sys; print(json.dumps(sys.argv[1]))' "$1")" >/dev/null 2>&1
  ab eval "$(cat $Q/p-hasre.js)" 2>/dev/null | tr -d '"\\'
}

ab set viewport 1280 900 >/dev/null 2>&1

echo "── 1. command palette (⌘K) ─────────────────────────────"
ab open "$BASE/#/atlas" >/dev/null 2>&1; ab wait 2500 >/dev/null 2>&1
ab press Control+k >/dev/null 2>&1
ab wait 900 >/dev/null 2>&1
ck "palette opens on ⌘K" 1 "$(ab eval "$(cat $Q/p-dialog.js)" 2>/dev/null | tr -d '"\\')"
ab type "Bayes" >/dev/null 2>&1; ab wait 1000 >/dev/null 2>&1
ck "palette search returns results" 1 "$(ab eval "$(cat $Q/p-dialog-text.js)" 2>/dev/null | tr -d '"\\')"
ab press Escape >/dev/null 2>&1; ab wait 700 >/dev/null 2>&1
ck "palette closes on Escape" 0 "$(ab eval "$(cat $Q/p-dialog.js)" 2>/dev/null | tr -d '"\\')"

echo "── 2. open signals — 8 live cards ──────────────────────"
ab open "$BASE/#/atlas" >/dev/null 2>&1; ab wait 2500 >/dev/null 2>&1
ab eval "window.scrollTo(0, document.body.scrollHeight * .7)" >/dev/null 2>&1
ab wait 4000 >/dev/null 2>&1
SIGNALS=$(ab eval "$(cat $Q/p-signals.js)" 2>/dev/null | tr -d '"\\')
echo "  (signal brands found: $SIGNALS)"
ck "open signals brands present" "8/8" "$SIGNALS"

echo "── 3. cockpit panels ───────────────────────────────────"
ab open "$BASE/#/cockpit" >/dev/null 2>&1; ab wait 3200 >/dev/null 2>&1
STEPS=$(ab eval "$(cat $Q/p-steps.js)" 2>/dev/null | tr -d '"\\')
echo "  (plan <ol> rows: $STEPS)"
ck "flight plan steps render" 1 "$([ "${STEPS:-0}" -ge 3 ] && echo 1 || echo 0)"
ck "defend panel present" 1 "$(txt 'defend')"
ck "case strike panel present" 1 "$(txt 'case')"
ck "ask panel present" 1 "$(txt 'ask the atlas')"

echo "── 4. ledger windows ───────────────────────────────────"
ab open "$BASE/#/ledger" >/dev/null 2>&1; ab wait 3200 >/dev/null 2>&1
ck "ledger stat strip" 1 "$(txt 'streak')"
ck "mastery section" 1 "$(txt 'mastery')"
ck "card forge reachable" 1 "$(txt 'forge')"
ck "mistake ledger reachable" 1 "$(txt 'mistake|错题本')"

echo "── 5. mock exam window ─────────────────────────────────"
ab eval "(() => { sessionStorage.setItem('atlas:mock-open', '1'); location.reload(); return 1; })()" >/dev/null 2>&1
ab wait 3800 >/dev/null 2>&1
ck "mock window opens via handoff" 1 "$(txt 'mock|exam')"

echo "── 6. python lab (FoC) ─────────────────────────────────"
ab open "$BASE/#/subject/foc" >/dev/null 2>&1; ab wait 4200 >/dev/null 2>&1
ab find role button click --name "Open the Python Lab" >/dev/null 2>&1; ab wait 2600 >/dev/null 2>&1
ck "lab window opens" 1 "$(txt 'python lab')"

echo "── 7. print control ────────────────────────────────────"
ab open "$BASE/#/subject/foc" >/dev/null 2>&1; ab wait 3800 >/dev/null 2>&1
ck "print control present" 1 "$(ab eval "$(cat $Q/p-print.js)" 2>/dev/null | tr -d '"\\')"

echo "════════════════════════════════════════"
echo "RESULT: $PASS passed, $FAIL failed"
ab close >/dev/null 2>&1
[ "$FAIL" -eq 0 ]
