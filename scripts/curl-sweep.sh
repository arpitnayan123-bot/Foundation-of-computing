#!/usr/bin/env bash
# The curl sweep — one fresh curl per lecture (curl never wedges
# against the dev server), paced under the 30/min limiter.
cd /home/z/my-project
pass=0; fail=0
while IFS= read -r line; do
  [ -z "$line" ] && continue
  tag=$(printf '%s' "$line" | bun -e "const l=JSON.parse(require('fs').readFileSync(0,'utf8'));console.log(l.tag)" 2>/dev/null)
  status=$(printf '%s' "$line" | timeout 75 curl -s -o /tmp/sweep-resp.json -w "%{http_code}" \
    -X POST http://localhost:3000/api/narrate/script \
    -H "Content-Type: application/json" \
    -H "Origin: http://localhost:3000" \
    --data-binary @- 2>/dev/null)
  ok=0
  if [ "$status" = "200" ]; then
    words=$(bun -e "const d=JSON.parse(require('fs').readFileSync('/tmp/sweep-resp.json','utf8'));console.log((d.words??0)+' '+(d.sentences?.length??0))" 2>/dev/null)
    w=${words%% *}; s=${words##* }
    if [ "${w:-0}" -ge 15 ] && [ "${s:-0}" -ge 1 ]; then ok=1; fi
  fi
  if [ $ok -eq 1 ]; then
    pass=$((pass+1)); echo "✓ $tag → $status ($w words)"; echo "$tag" >> scripts/.sweep-done.txt
  else
    fail=$((fail+1)); echo "✗ $tag → $status $(head -c 120 /tmp/sweep-resp.json 2>/dev/null)"
  fi
  sleep 2.1
done < scripts/.sweep-remaining.jsonl
echo "===== CURL SWEEP: $pass passed, $fail failed ====="
[ $fail -eq 0 ]
