#!/bin/bash
# ============================================================
# THE VERIFICATION SUPERVISOR — waits out the platform quota
# nap (429), then runs the compose sweep and the Tara
# listen-sweep, paced and resume-safe.
# ============================================================
cd /home/z/my-project
echo "$(date +%T) supervisor up — probing the studio's quota..."

for i in $(seq 1 60); do
  OUT=$(timeout 45 bun -e "
import ZAI from 'z-ai-web-dev-sdk';
try {
  const zai = await ZAI.create();
  const c = await zai.chat.completions.create({ messages: [{ role:'user', content:'Say READY.' }] });
  console.log('MODEL OK');
} catch (e) { console.log('MODEL 429'); }
" 2>/dev/null | tail -1)
  if [ "$OUT" = "MODEL OK" ]; then
    echo "$(date +%T) quota recovered (probe $i) — starting sweeps"
    break
  fi
  echo "$(date +%T) probe $i: still napping — 150s more"
  sleep 150
done

rm -f scripts/.sweep-done.txt scripts/.tara-listen-done.txt
echo "$(date +%T) === COMPOSE SWEEP START ==="
bun scripts/radio-sweep.ts > scripts/sweep-run.log 2>&1
echo "$(date +%T) === COMPOSE SWEEP DONE (exit $?) ==="

echo "$(date +%T) === LISTEN SWEEP START ==="
bun scripts/tara-listen-sweep.mjs > scripts/listen-run.log 2>&1
echo "$(date +%T) === LISTEN SWEEP DONE (exit $?) ==="
echo "$(date +%T) supervisor finished"
