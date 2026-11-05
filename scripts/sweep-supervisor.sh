#!/usr/bin/env bash
# The sweep supervisor — bun's fetch occasionally wedges against the
# dev server's recompiling routes; cache hits re-verify instantly, so
# a restart-and-continue loop is the honest way to finish the sweep.
cd /home/z/my-project
for i in 1 2 3 4 5 6 7 8 9 10; do
  echo "=== sweep attempt $i ==="
  timeout 240 node scripts/radio-sweep.node.js
  rc=$?
  if [ $rc -eq 0 ]; then echo "=== sweep COMPLETE ==="; exit 0; fi
  echo "=== attempt $i ended rc=$rc — restarting (cache makes replays cheap) ==="
  sleep 2
done
echo "=== sweep did not finish in 8 attempts ==="
exit 1
