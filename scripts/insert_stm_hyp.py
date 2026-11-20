#!/usr/bin/env python3
"""Insert the 23-question Module 6 extension into the HYP bank of
src/components/stm/questions.ts (ids renumbered h1..h23)."""
import re

PATH = "/home/z/my-project/src/components/stm/questions.ts"
EXT = "/home/z/my-project/scripts/stm_hyp_extension.txt"

src = open(PATH, encoding="utf-8").read()
ext = open(EXT, encoding="utf-8").read().strip()

# renumber h3..h25 → h1..h23
def renumber(mm):
    return f'id: "h{int(mm.group(1)) - 2}",'
ext = re.sub(r'id: "h(\d+)",', renumber, ext)

# insert before the closing of the HYP array
m = re.search(r"const HYP: StmExamQuestion\[\] = \[(.*?)\n\];", src, re.S, )
if not m:
    # the HYP array was written without the \n]; on its own line — find it flexibly
    m2 = re.search(r"const HYP: StmExamQuestion\[\] = \[", src)
    close = src.index("\n];", m2.end())
    src = src[: m2.end()] + src[m2.end() : close].rstrip("\n") + ",\n" + ext + src[close:]
else:
    seed = m.group(1)
    new_body = seed.rstrip("\n") + ",\n" + ext + "\n];"
    src = src[: m.start()] + "const HYP: StmExamQuestion[] = [" + new_body + src[m.end():]

open(PATH, "w", encoding="utf-8").write(src)
# report
ids = re.findall(r'id: "h(\d+)"', src)
print(f"HYP now carries {len(ids)} questions: h{min(map(int,ids))}..h{max(map(int,ids))}")
total = sum(b.count('id: "') for b in re.findall(r"const (\w+): StmExamQuestion\[\] = \[(.*?)\n\];", src, re.S))
print(f"TOTAL questions on the shelf: {total}")
