#!/usr/bin/env bash
# ============================================================
# THE ATLAS — responsive sweep (agent-browser E2E).
# Widths: 320 360 390 430 768 1024 1440 × pages:
# atlas / foc / mktg / cockpit / ledger.
# Checks per page: no horizontal overflow, header controls
# inside the viewport. Screenshots at 320/390/1440.
# ============================================================
set -u
BASE="${1:-http://localhost:3000}"
Q=scripts/qa-mobile
PASS=0; FAIL=0
ab() { agent-browser "$@"; }

OVERFLOW_JS='(() => { const d = document.documentElement; const over = d.scrollWidth - window.innerWidth; const bad = []; if (over > 1) { for (const el of document.querySelectorAll("nav *, header *")) { const r = el.getBoundingClientRect(); if (r.width > 0 && (r.right > window.innerWidth + 1)) { bad.push((el.getAttribute("aria-label") || el.tagName) + "@" + Math.round(r.right)); if (bad.length > 4) break; } } } return JSON.stringify({w: window.innerWidth, sw: d.scrollWidth, over, bad}); })()'

for W in 320 360 390 430 768 1024 1440; do
  ab set viewport "$W" 860 >/dev/null 2>&1
  for P in "#/atlas" "#/subject/foc" "#/subject/mktg" "#/cockpit" "#/ledger"; do
    ab open "$BASE/$P" >/dev/null 2>&1
    ab wait 3000 >/dev/null 2>&1
    OUT=$(ab eval "$OVERFLOW_JS" 2>/dev/null)
    OK=$(echo "$OUT" | python3 -c 'import sys,json; d=json.loads(json.loads(sys.stdin.read())); print(1 if d.get("over",1) <= 1 else 0)' 2>/dev/null || echo ERR)
    TAG="$P@$W"
    if [ "$OK" = "1" ]; then PASS=$((PASS+1)); echo "PASS  $TAG";
    else FAIL=$((FAIL+1)); echo "FAIL  $TAG → $OUT"; fi
  done
  case "$W" in
    320) ab open "$BASE/#/atlas" >/dev/null 2>&1; ab wait 2200 >/dev/null 2>&1; ab screenshot $Q/sweep-atlas-320.png >/dev/null 2>&1;
         ab open "$BASE/#/subject/foc" >/dev/null 2>&1; ab wait 3000 >/dev/null 2>&1; ab screenshot $Q/sweep-foc-320.png >/dev/null 2>&1;;
    390) ab open "$BASE/#/atlas" >/dev/null 2>&1; ab wait 2200 >/dev/null 2>&1; ab screenshot $Q/sweep-atlas-390.png >/dev/null 2>&1;;
    1440) ab open "$BASE/#/atlas" >/dev/null 2>&1; ab wait 2200 >/dev/null 2>&1; ab screenshot $Q/sweep-atlas-1440.png >/dev/null 2>&1;
         ab open "$BASE/#/cockpit" >/dev/null 2>&1; ab wait 3000 >/dev/null 2>&1; ab screenshot $Q/sweep-cockpit-1440.png >/dev/null 2>&1;;
  esac
done
echo "════════════════════════════════════════"
echo "RESULT: $PASS passed, $FAIL failed"
ab close >/dev/null 2>&1
[ "$FAIL" -eq 0 ]
