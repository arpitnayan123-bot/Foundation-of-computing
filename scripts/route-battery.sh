#!/usr/bin/env bash
# ============================================================
# THE ATLAS — route regression battery (agent-browser E2E).
#
# Drives the live app through every route transition the QA
# report flagged: shelf-card clicks, deep links, Back-to-Atlas,
# browser Back/Forward, refresh-on-subject, the bare-anchor
# route-destroying links, and the rapid double-click race.
# Prints PASS/FAIL lines per check. Exit 0 = all green.
#
# Usage: scripts/route-battery.sh [base-url]
# ============================================================
set -u
BASE="${1:-http://localhost:3000}"
PASS=0
FAIL=0

ab() { agent-browser "$@"; }

# sig: plain "url=<hash> hit=<0|1>" — no JSON escaping traps
sig() {
  ab eval "(() => { const s = document.body.innerText; return 'url=' + (location.hash || '(empty)') + ' hit=' + (/$1/i.test(s) ? 1 : 0); })()" 2>/dev/null | tr -d '"\\'
}

check() { # $1 label, $2 actual, $3 expected substring
  if echo "$2" | rg -qF -- "$3"; then PASS=$((PASS+1)); echo "PASS  $1";
  else FAIL=$((FAIL+1)); echo "FAIL  $1  → got: $2"; fi
}

warm() { # $1 = subject id — open it and let the dev chunk compile
  ab open "$BASE/#/subject/$1" >/dev/null 2>&1; ab wait 4000 >/dev/null 2>&1
}

echo "── 0. pre-warm every shelf chunk ────────────────────────"
for id in foc atb fa ebh stm mktg; do warm "$id"; done

echo "── A. shelf-card clicks (landing → subject ×6) ──────────"
declare -A NAME=( [foc]="Foundations of Computing" [atb]="Algorithmic Thinking in Business" [fa]="Financial Accounting" [ebh]="Economic & Business History" [stm]="Statistics for Managers" [mktg]="Principles of Marketing" )
for id in foc atb fa ebh stm mktg; do
  ab open "$BASE/#/atlas" >/dev/null 2>&1; ab wait 2000 >/dev/null 2>&1
  ab find role button click --name "Open ${NAME[$id]} notes" >/dev/null 2>&1
  ab wait 3500 >/dev/null 2>&1
  check "card->$id (url agrees + subject visible)" "$(sig "${NAME[$id]}")" "url=#/subject/$id hit=1"
done

echo "── B. Back-to-Atlas from each subject ───────────────────"
for id in foc atb fa ebh stm mktg; do
  ab open "$BASE/#/subject/$id" >/dev/null 2>&1; ab wait 3000 >/dev/null 2>&1
  ab find role button click --name "Back to The Atlas" >/dev/null 2>&1
  ab wait 2500 >/dev/null 2>&1
  check "$id back->atlas (landing visible)" "$(sig 'One shelf')" "url=#/atlas hit=1"
done

echo "── C. deep link + refresh on subject route ──────────────"
for id in foc mktg ebh atb; do
  ab open "$BASE/#/subject/$id" >/dev/null 2>&1; ab wait 3500 >/dev/null 2>&1
  check "deeplink $id" "$(sig "${NAME[$id]}|${id} notes")" "hit=1"
  ab reload >/dev/null 2>&1; ab wait 4000 >/dev/null 2>&1
  check "refresh $id" "$(sig "${NAME[$id]}|${id} notes")" "hit=1"
done

echo "── D. browser Back / Forward ────────────────────────────"
ab open "$BASE/#/atlas" >/dev/null 2>&1; ab wait 2000 >/dev/null 2>&1
ab find role button click --name "Open Foundations of Computing notes" >/dev/null 2>&1
ab wait 3500 >/dev/null 2>&1
ab find role button click --name "Back to The Atlas" >/dev/null 2>&1
ab wait 2500 >/dev/null 2>&1
ab back >/dev/null 2>&1; ab wait 3000 >/dev/null 2>&1
check "back -> foc visible" "$(sig 'Foundations of Computing')" "url=#/subject/foc hit=1"
ab forward >/dev/null 2>&1; ab wait 2500 >/dev/null 2>&1
check "fwd -> atlas visible" "$(sig 'One shelf')" "url=#/atlas hit=1"

echo "── E. rapid double-click race (foc → mktg in 120ms) ─────"
ab open "$BASE/#/atlas" >/dev/null 2>&1; ab wait 2000 >/dev/null 2>&1
ab eval "(() => { const bs = [...document.querySelectorAll('button')]; const a = bs.find(b => (b.getAttribute('aria-label')||'').includes('Foundations')); const b = bs.find(x => (x.getAttribute('aria-label')||'').includes('Principles of Marketing')); a?.click(); setTimeout(() => b?.click(), 120); return 1; })()" >/dev/null 2>&1
ab wait 3500 >/dev/null 2>&1
check "race ends on mktg" "$(sig 'Principles of Marketing')" "url=#/subject/mktg hit=1"

echo "── F. landing hero stats counter ────────────────────────"
ab open "$BASE/#/atlas" >/dev/null 2>&1; ab wait 2200 >/dev/null 2>&1
ab eval "document.querySelector('[aria-label=\"The Atlas in one breath\"]')?.scrollIntoView()" >/dev/null 2>&1
ab wait 4200 >/dev/null 2>&1
STATS=$(ab eval "(() => { const sec = document.querySelector('[aria-label=\"The Atlas in one breath\"]'); const m = sec ? sec.innerText.match(/(\d+)\s*subjects/i) : null; return 'stat=' + (m ? m[1] : 'none'); })()" 2>/dev/null | tr -d '"\\')
check "subjects stat counts to 6" "$STATS" "stat=6"

echo "── G. cockpit plan resolves (no stuck Reading the ledger) ──"
ab open "$BASE/#/cockpit" >/dev/null 2>&1; ab wait 3000 >/dev/null 2>&1
check "cockpit brief rendered" "$(sig 'chapters read')" "hit=1"
check "cockpit not stuck loading" "$(sig 'Reading the ledger')" "hit=0"

echo "── H. in-page anchors must NOT destroy the route ────────"
ab open "$BASE/#/subject/foc" >/dev/null 2>&1; ab wait 3500 >/dev/null 2>&1
ab find role link click --name "Scroll to the lecture notes" >/dev/null 2>&1; ab wait 1200 >/dev/null 2>&1
H1=$(sig 'FoC|Foundations')
check "hero anchor keeps subject route" "$H1" "url=#/subject/foc hit=1"
ab reload >/dev/null 2>&1; ab wait 4000 >/dev/null 2>&1
check "refresh after anchor still in subject" "$(sig 'FoC|Foundations')" "hit=1"
ab open "$BASE/#/subject/ebh" >/dev/null 2>&1; ab wait 3500 >/dev/null 2>&1
ab eval "(() => { const a = [...document.querySelectorAll('a')].find(x => x.getAttribute('href') === '#top'); a?.click(); return 1; })()" >/dev/null 2>&1; ab wait 1200 >/dev/null 2>&1
check "brand #top keeps subject route" "$(sig 'EBH')" "url=#/subject/ebh hit=1"

echo "════════════════════════════════════════"
echo "RESULT: $PASS passed, $FAIL failed"
ab close >/dev/null 2>&1
[ "$FAIL" -eq 0 ]
