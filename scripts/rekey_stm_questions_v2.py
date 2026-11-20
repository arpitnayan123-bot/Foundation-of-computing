#!/usr/bin/env python3
"""Re-key the STM question banks to the rebuilt modules (m1..m6) with safe
string splicing — no re.sub with string replacements (that processed the
code strings' \n escapes and broke the TS). Run once on a clean git file."""
import re

PATH = "/home/z/my-project/src/components/stm/questions.ts"
src = open(PATH, encoding="utf-8").read()

# 1. the group type
src = src.replace(
  'export type StmExamGroup = "displays" | "measures" | "probability" | "discrete" | "continuous" | "inference";',
  'export type StmExamGroup = "m1" | "m2" | "m3" | "m4" | "m5" | "m6";')

def body_of(name):
    m = re.search(r"const " + name + r": StmExamQuestion\[\] = \[", src)
    close = src.index("\n];", m.end())
    return src[m.end():close].rstrip("\n")

discrete_body = body_of("DISCRETE").strip()
continuous_body = body_of("CONTINUOUS").strip()
inf_raw = body_of("INFERENCE")

marks = [mm.start() for mm in re.finditer(r'(?=  \{\n    id: "f)', inf_raw)]
assert len(marks) == 14, len(marks)
objs = [inf_raw[marks[i]:(marks[i + 1] if i + 1 < len(marks) else len(inf_raw))] for i in range(len(marks))]
hyp_ids = {"f11", "f12"}
sampling = [o.strip().rstrip(",").strip() for o in objs if re.search(r'id: "(f\d+)"', o).group(1) not in hyp_ids]
hyp = [o.strip().rstrip(",").strip() for o in objs if re.search(r'id: "(f\d+)"', o).group(1) in hyp_ids]
assert len(sampling) == 12 and len(hyp) == 2, (len(sampling), len(hyp))

# splice: DISCRETE..CONTINUOUS block → DISTS + SAMPLING + HYP-seed
d_start = src.index("const DISCRETE: StmExamQuestion")
c_close = src.index("\n];", src.index("const CONTINUOUS: StmExamQuestion"))
block_old = src[d_start: c_close + 3]
new_arrays = (
  "const DISTS: StmExamQuestion[] = [\n" + discrete_body + "\n\n" + continuous_body + "\n];\n\n"
  + "const SAMPLING: StmExamQuestion[] = [\n" + ",\n".join(sampling) + "\n];\n\n"
  + "const HYP: StmExamQuestion[] = [\n" + ",\n".join(hyp) + "\n];"
)
src = src.replace(block_old, new_arrays)

# registry splice
reg_open = src.index("export const STM_EXAM_BANKS: Record<StmExamGroup, StmExamBank> = {")
reg_close = src.index("};", src.index("questions: INFERENCE"))
registry = """export const STM_EXAM_BANKS: Record<StmExamGroup, StmExamBank> = {
  m1: {
    group: "m1",
    title: "Module 1 · Data & Displays",
    subtitle: "L01-L04 — what data is, where it comes from, and how to show it",
    topics: "Scales · sources · analytics · frequency tables · charts · Simpson's paradox",
    questions: DISPLAYS,
  },
  m2: {
    group: "m2",
    title: "Module 2 · Numerical Measures",
    subtitle: "L05-L08 — the laboratory of location, spread, and the box plot",
    topics: "Mean · median · mode · percentiles · variance · CV · Chebyshev · box plots",
    questions: MEASURES,
  },
  m3: {
    group: "m3",
    title: "Module 3 · Probability",
    subtitle: "L09-L11 — counting, events, the laws, and Bayes' revision",
    topics: "Sample space · counting rules · addition & multiplication · Bayes · E(X)",
    questions: PROBABILITY,
  },
  m4: {
    group: "m4",
    title: "Module 4 · Distributions",
    subtitle: "L12-L16 — uniform, normal, exponential, the checkpoint, and the QC case",
    topics: "Uniform · z-tables · reorder points · the demand-mix machine · binomial shutdown",
    questions: DISTS,
  },
  m5: {
    group: "m5",
    title: "Module 5 · Sampling & Estimation",
    subtitle: "L17-L26 — sampling distributions, the CLT, and confidence intervals",
    topics: "σ/√n & CLT · sampling designs · Marrian Dairies · z & t intervals · proportions",
    questions: SAMPLING,
  },
  m6: {
    group: "m6",
    title: "Module 6 · Hypothesis Testing",
    subtitle: "L27-L33 — the framework, the two errors, both roads, and Quality Associates",
    topics: "H₀ vs Hₐ · Type I & II · p-value & critical value · two tails · SPC · the brief",
    questions: HYP,
  },
};"""
src = src[:reg_open] + registry + src[reg_close + 2:]

open(PATH, "w", encoding="utf-8").write(src)
print("re-keyed OK — banks now m1..m6, 62 questions preserved")
