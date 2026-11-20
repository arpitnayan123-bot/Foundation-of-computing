import { describe, expect, test } from "bun:test";
import {
  STM_LECTURES,
  STM_TITLES,
  STM_MODULES,
  STM_ALL_CHAPTER_IDS,
  STM_RESERVED_BOOKMARK,
  STM_RESERVED_CARD,
  lectureOfChapter,
  lectureById,
} from "./lectures";
import { STM_EXAM_BANKS, STM_EXAM_GROUPS, STM_TOTAL_QUESTIONS, type StmExamQuestion } from "./questions";
import { STM_CORPUS, type CorpusBlock } from "./corpus";
import { mathTokens } from "./stm-math";

/* ============================================================
   STM registry gates — the shelf 05 rebuild brief's checks, run
   before any commit can claim the rebuild.
   ============================================================ */

const corpusText = JSON.stringify(STM_CORPUS);

function flat(blocks: CorpusBlock[]): string[] {
  return blocks.map((b) => b.s);
}

describe("the 33-lecture sequence", () => {
  test("33 lectures contiguous L1→L33, ascending, no gaps", () => {
    expect(STM_LECTURES.length).toBe(33);
    expect(STM_LECTURES.map((l) => l.n)).toEqual(Array.from({ length: 33 }, (_, i) => i + 1));
    expect(STM_LECTURES.map((l) => l.id)).toEqual(Array.from({ length: 33 }, (_, i) => `l${i + 1}`));
  });

  test("33 byte-exact official titles — including the deliberate L01/L03 duplicate", () => {
    expect(STM_TITLES.length).toBe(33);
    expect(STM_TITLES[0]).toBe("Introduction to Statistics for Managers");
    expect(STM_TITLES[2]).toBe("Introduction to Statistics for Managers");
    expect(STM_TITLES[0]).toBe(STM_LECTURES[0].title);
    expect(STM_TITLES[2]).toBe(STM_LECTURES[2].title);
    for (let i = 0; i < 33; i++) {
      if (i === 27) continue; // the reserved lecture carries no title
      expect(STM_LECTURES[i].title).toBe(STM_TITLES[i]);
    }
  });

  test("the L01/L03 duplicate is real: same title, utterly different lectures", () => {
    const l1 = STM_LECTURES[0];
    const l3 = STM_LECTURES[2];
    expect(l1.title).toBe(l3.title);
    expect(l1.chapters.map((c) => c.id)).not.toEqual(l3.chapters.map((c) => c.id));
    expect(l3.blurb).toContain("Silvastov");
    expect(l3.blurb).toContain("Administrative");
    expect(l1.chapters.some((c) => c.id === "data-anatomy-scales")).toBe(true);
    expect(l3.chapters.map((c) => c.id)).toEqual(["course-administration", "ai-policy", "course-concepts-tools"]);
  });
});

describe("the reserved lecture L28", () => {
  const l28 = STM_LECTURES[27];
  test("keeps its number, ships blank, bookmarked and untitled", () => {
    expect(l28.n).toBe(28);
    expect(l28.id).toBe("l28");
    expect(l28.code).toBe("L28");
    expect(l28.title).toBeNull();
    expect(l28.chapters).toEqual([]);
  });
  test("carries the compendium's own removal card, never a generic fallback", () => {
    expect(STM_RESERVED_BOOKMARK).toBe("Reserved — removed from the official course sequence");
    expect(l28.blurb).toBe(STM_RESERVED_CARD);
    expect(STM_RESERVED_CARD).toContain("intentionally blank");
    expect(STM_RESERVED_CARD).toContain("numbering is preserved");
    const serialized = JSON.stringify(STM_LECTURES);
    expect(serialized).not.toContain("Statistics for Managers — Lecture 28");
    expect(serialized).not.toContain("Removed Lecture");
  });
  test("L28 contributes no corpus and no chapter anywhere", () => {
    expect(corpusText).not.toContain("l28 reserved content");
    expect(STM_ALL_CHAPTER_IDS.length).toBeLessThan(70);
    expect(lectureOfChapter("l28")).toBeNull();
  });
});

describe("the six modules", () => {
  test("exactly six modules with the brief's boundaries", () => {
    expect(STM_MODULES.length).toBe(6);
    expect(STM_MODULES.map((m) => m.range)).toEqual([
      [1, 4], [5, 8], [9, 11], [12, 16], [17, 26], [27, 33],
    ]);
    expect(STM_MODULES[0].label).toBe("Module 1 · Data & Displays");
    expect(STM_MODULES[5].label).toBe("Module 6 · Hypothesis Testing");
  });
  test("every lecture sits in the module its number falls in; none in a sixth module", () => {
    for (const l of STM_LECTURES) {
      const mod = STM_MODULES.find((m) => l.n >= m.range[0] && l.n <= m.range[1]);
      expect(mod).toBeDefined();
      expect(l.group).toBe(mod!.id);
      expect(l.groupLabel).toBe(mod!.label);
    }
    expect(JSON.stringify(STM_MODULES)).not.toContain("Module 7");
  });
  test("sidebar order — chapters ascend by lecture number by construction", () => {
    let lastN = 0;
    for (const l of STM_LECTURES) {
      for (const c of l.chapters) {
        expect(l.n).toBeGreaterThanOrEqual(lastN);
      }
      lastN = l.n;
    }
    // the group items themselves come from STM_LECTURES in registry order
    for (const m of STM_MODULES) {
      const nums = STM_LECTURES.filter((l) => l.group === m.id).map((l) => l.n);
      expect(nums).toEqual([...nums].sort((a, b) => a - b));
    }
  });
});

describe("the 67 chapters", () => {
  test("at least 42 chapters; every non-reserved lecture holds at least one", () => {
    expect(STM_ALL_CHAPTER_IDS.length).toBeGreaterThanOrEqual(42);
    for (const l of STM_LECTURES) {
      if (l.n === 28) continue;
      expect(l.chapters.length).toBeGreaterThanOrEqual(1);
    }
  });
  test("chapter ids are unique and every one resolves", () => {
    const ids = STM_ALL_CHAPTER_IDS;
    expect(new Set(ids).size).toBe(ids.length);
    for (const id of ids) {
      expect(lectureOfChapter(id)).not.toBeNull();
      expect(STM_CORPUS[id]).toBeDefined();
    }
  });
  test("L03 is the largest band-C blind spot and is now fully built", () => {
    const l3 = lectureById("l3")!;
    expect(l3.chapters.length).toBe(3);
    expect(flat(STM_CORPUS["course-administration"]).join(" ")).toContain("Silvastov");
    expect(flat(STM_CORPUS["ai-policy"]).join(" ")).toContain("candidature cancellation");
    expect(flat(STM_CORPUS["course-administration"]).join(" ")).toContain("cran.r-project.org");
    expect(flat(STM_CORPUS["course-administration"]).join(" ")).toContain("rstudio.com");
  });
});

describe("the corpus — sole authority, byte-identical", () => {
  test("the zero-hit evidence words now return hits", () => {
    for (const term of ["Quality Associates", "one-tailed", "critical value", "p-value", "sample size", "60 marks", "scientific", "non-programmable", "RANDBETWEEN"]) {
      expect(corpusText.toLowerCase()).toContain(term.toLowerCase());
    }
  });
  test("the control terms never left", () => {
    for (const term of ["Type I", "Poisson", "Marrian", "Metropolitan", "RAND BETWEEN"]) {
      expect(corpusText).toContain(term);
    }
  });
  test("the gated spellings render verbatim: Marrian, Silvastov, GIG", () => {
    expect(corpusText).toContain("Marrian");
    expect(corpusText).toContain("Silvastov");
    expect(corpusText).toContain("GIG (Go Great Indian Grains Ltd.)");
    expect(corpusText).not.toContain("Srivastav");
  });
  test("p̂ everywhere the sample proportion appears — never p̄", () => {
    expect(corpusText).toContain("p̂");
    expect(corpusText).not.toContain("p̄");
  });
  test("the four assessment blocks survive in their own lectures", () => {
    const l03 = flat(STM_CORPUS["course-administration"]).join(" ");
    expect(l03).toContain("Three quizzes");
    expect(l03).toContain("best two scores counted");
    const l13 = flat(STM_CORPUS["quiz-checkpoint"]).join(" ");
    expect(l13).toContain("20 marks");
    expect(l13).toContain("15-20 minutes");
    const l23 = flat(STM_CORPUS["randbetween-lab"]).join(" ") + " " + flat(STM_CORPUS["se-shrink"]).join(" ");
    expect(l23).toContain("Diwali");
    const l33 = flat(STM_CORPUS["exam-brief"]).join(" ");
    expect(l33).toContain("60 marks");
    expect(l33).toContain("2 hours");
    expect(l33).toContain("Chapters 1-9");
  });
});

describe("the nine source conflicts — both sides render, nothing reconciles", () => {
  const allBlocks: string[] = Object.values(STM_CORPUS).flatMap(flat);
  const all = allBlocks.join(" \n ");
  test("1 · Chebyshev's 75/89/94 (L06) stands against L12's 68.26/95.45/99.72", () => {
    expect(all).toContain("At least 75%");
    expect(all).toContain("68.26%");
  });
  test("2 · L22's z-road stands against L24's switch to t", () => {
    expect(flat(STM_CORPUS["confidence-dial"]).join(" ")).toContain("z(α/2)");
    expect(flat(STM_CORPUS["t-distribution"]).join(" ")).toContain("employed for interval estimation");
  });
  test("3 · the Marrian spelling stands (deck's own, never corrected)", () => {
    expect(all).toContain("Marrian Dairies");
  });
  test("4 · L06's rounded empirical rule stands against L12's precise one", () => {
    expect(flat(STM_CORPUS["shape-boxplot"]).join(" ")).toContain("99.7%");
    expect(flat(STM_CORPUS["normal-standard"]).join(" ")).toContain("99.72%");
  });
  test("5 · L27's error framing stands against L29's re-teaching", () => {
    expect(flat(STM_CORPUS["tails-errors"]).join(" ")).toContain("Type I Error");
    expect(flat(STM_CORPUS["error-control"]).join(" ")).toContain("False Positive");
  });
  test("6 · the standard-error symbol variance: σₓ (L21) and σ_x̄ (L19/L23); p and p̂ SEs", () => {
    expect(flat(STM_CORPUS["sample-size-power"]).join(" ")).toContain("σₓ");
    expect(flat(STM_CORPUS["sampling-distribution"]).join(" ")).toContain("σ_x̄");
    expect(flat(STM_CORPUS["se-shrink"]).join(" ")).toContain("σ_p̂");
    expect(flat(STM_CORPUS["confidence-dial"]).join(" ")).toContain("√36");
  });
  test("7 · L26's stated margin 7,076 stands beside its own σ = 24,849 inputs", () => {
    const l26 = flat(STM_CORPUS["metropolitan-interval"]).join(" ");
    expect(l26).toContain("7,076");
    expect(l26).toContain("24,849");
  });
  test("8 · L22's 50-store narrative stands beside the n = 36 arithmetic", () => {
    expect(flat(STM_CORPUS["interval-known"]).join(" ")).toContain("50 stores");
    expect(flat(STM_CORPUS["confidence-dial"]).join(" ")).toContain("√36");
  });
  test("9 · L19's FPC rule stands beside L23's plain σ/√n lab on a finite 2,500", () => {
    expect(flat(STM_CORPUS["sampling-distribution"]).join(" ")).toContain("(N-n)/(N-1)");
    expect(flat(STM_CORPUS["randbetween-lab"]).join(" ")).toContain("2,500");
  });
});

describe("the exam banks", () => {
  test("six module banks, ascending ids, at least 85 questions total", () => {
    expect(STM_EXAM_GROUPS).toEqual(["m1", "m2", "m3", "m4", "m5", "m6"]);
    expect(STM_TOTAL_QUESTIONS).toBeGreaterThanOrEqual(85);
  });
  test("every question carries an answer index or a model answer", () => {
    for (const g of STM_EXAM_GROUPS) {
      for (const q of STM_EXAM_BANKS[g].questions as StmExamQuestion[]) {
        if (q.type === "mcq") {
          expect(q.answer).toBeDefined();
          expect(q.options?.length).toBeGreaterThanOrEqual(2);
        } else {
          expect(q.answerText).toBeDefined();
        }
        expect(q.explain).toBeDefined();
      }
    }
  });
  test("Module 6 exists and is no longer empty", () => {
    const m6 = STM_EXAM_BANKS["m6"].questions;
    expect(m6.length).toBeGreaterThanOrEqual(20);
    expect(m6.some((q) => q.q.includes("Metro EMS"))).toBe(true);
    expect(m6.some((q) => q.q.includes("Quality Associates") || JSON.stringify(m6).includes("control limits"))).toBe(true);
  });
  test("the 62 legacy questions survive by id", () => {
    const all = STM_EXAM_GROUPS.flatMap((g) => STM_EXAM_BANKS[g].questions.map((q) => q.id));
    for (const legacy of ["d1", "d10", "m1", "p1", "k1", "c1", "c11", "f1", "f14"]) {
      expect(all).toContain(legacy);
    }
    expect(all.length).toBeGreaterThanOrEqual(85);
    expect(new Set(all).size).toBe(all.length);
  });
});

describe("the maths markup law", () => {
  test("σ_x̄ tokenises into base + subscript", () => {
    const toks = mathTokens("σ_x̄ = σ/√n");
    const sub = toks.find((t) => t.k === "sub");
    expect(sub).toBeDefined();
    expect(sub && "base" in sub && sub.base).toBe("σ");
    expect(sub && "sub" in sub && sub.sub).toBe("x̄");
  });
  test("z of alpha over two becomes a subscript, not ASCII", () => {
    const toks = mathTokens("x̄ ± z(α/2) · σ/√n");
    const sub = toks.find((t) => t.k === "sub");
    expect(sub && "sub" in sub && sub.sub).toBe("α/2");
    expect(sub && "base" in sub && sub.base).toMatch(/[zZ]/);
  });
  test("radicals become sqrt tokens with their body", () => {
    const toks = mathTokens("p̂ ± z(α/2) × √[p̂(1−p̂)/n]");
    const sqrt = toks.find((t) => t.k === "sqrt");
    expect(sqrt).toBeDefined();
    expect(sqrt && "body" in sqrt && sqrt.body).toBe("p̂(1−p̂)/n");
  });
  test("plain prose passes through untouched; p̄ can never be produced", () => {
    const toks = mathTokens("the sample proportion p̂ estimates the population proportion p");
    const joined = toks.map((t) => (t.k === "t" ? t.s : t.k === "m" ? t.s : t.k === "sqrt" ? `√${t.body}` : `${t.base}_${t.sub}`)).join("");
    expect(joined).toContain("p̂");
    expect(joined).not.toContain("p̄");
  });
});
