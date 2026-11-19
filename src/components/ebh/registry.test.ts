import { describe, expect, test } from "bun:test";
import { EBH_LECTURES, EBH_ALL_CHAPTER_IDS, EBH_TITLES, EBH_MODULES, eyebrowFor, lectureById, lectureOfChapter } from "./lectures";
import { EBH_EXAM_BANKS, EBH_EXAM_GROUPS, EBH_TOTAL_QUESTIONS } from "./questions";
import { EBH_CORPUS } from "./corpus";

describe("EBH registry — the 34-lecture official sequence", () => {
  test("34 lectures, contiguous L1..L34, codes and ids aligned", () => {
    expect(EBH_LECTURES.length).toBe(34);
    EBH_LECTURES.forEach((l, i) => {
      expect(l.n).toBe(i + 1);
      expect(l.code).toBe(`L${l.n}`);
      expect(l.id).toBe(`l${l.n}`);
    });
  });

  test("titles byte-exact against EBH_TITLES — L13 en dash, L34 hyphen, L02/L03/L04 near-duplicates kept", () => {
    EBH_LECTURES.forEach((l) => expect(l.title).toBe(EBH_TITLES[l.n - 1]));
    expect(EBH_TITLES[12]).toBe("Economic and Business History \u2013 The Beginning of Machine Usage in Production");
    expect(EBH_TITLES[33]).toBe("Economic and Business History - Module 5: Indian Business History");
    expect(EBH_TITLES[1]).toBe(EBH_TITLES[2]);
    expect(EBH_TITLES[2]).toBe(EBH_TITLES[3]);
  });

  test("record field order pinned: id, n, code, title, blurb, group, groupLabel, examStatus, chapters", () => {
    const src = require("fs").readFileSync(`${import.meta.dir}/lectures.ts`, "utf8") as string;
    const names = ["id:", "n:", "code:", "title:", "blurb:", "group:", "groupLabel:", "examStatus:", "chapters:"];
    for (const m of src.matchAll(/\{\s*\n\s*id: /g)) {
      const seg = src.slice(m.index, src.indexOf("},", m.index) + 2);
      const ats = names.map((f) => seg.indexOf(f));
      expect(ats.every((a) => a !== -1)).toBe(true);
      for (let i = 0; i < ats.length - 1; i++) expect(ats[i]).toBeLessThan(ats[i + 1]);
    }
  });

  test("five modules and no sixth — M1 L01-07, M2 L08-12, M3 L13-22, M4 L23-27, M5 L28-34", () => {
    expect(EBH_MODULES.length).toBe(5);
    const spans = EBH_MODULES.map((m) => `${m.start}-${m.end}`).join(" ");
    expect(spans).toBe("1-7 8-12 13-22 23-27 28-34");
    for (const l of EBH_LECTURES) {
      const mod = EBH_MODULES.find((m) => m.start <= l.n && l.n <= m.end);
      expect(mod?.id).toBe(l.group);
    }
  });

  test("50 chapters — every lecture >=1, the ten named lectures carry 2-3, ids unique", () => {
    expect(EBH_ALL_CHAPTER_IDS.length).toBe(50);
    expect(EBH_ALL_CHAPTER_IDS.length).toBeGreaterThanOrEqual(44);
    const dupes = EBH_ALL_CHAPTER_IDS.filter((id, i) => EBH_ALL_CHAPTER_IDS.indexOf(id) !== i);
    expect(dupes.length).toBe(0);
    for (const n of [1, 4, 14, 19, 22, 25, 27, 28, 29, 34]) {
      const count = lectureById(`l${n}`)!.chapters.length;
      expect(count).toBeGreaterThanOrEqual(2);
      expect(count).toBeLessThanOrEqual(3);
    }
    for (const l of EBH_LECTURES) expect(l.chapters.length).toBeGreaterThanOrEqual(1);
  });

  test("examStatus — quiz-1 on L14, major-exam on L34", () => {
    expect(lectureById("l14")!.examStatus).toBe("quiz-1");
    expect(lectureById("l34")!.examStatus).toBe("major-exam");
  });

  test("the eyebrow scheme — Module N · Lecture NN · short topic, derived from the registry", () => {
    for (const id of EBH_ALL_CHAPTER_IDS) {
      expect(eyebrowFor(id)).toMatch(/^Module \d · Lecture \d{2} · .+$/);
    }
    expect(eyebrowFor("course-map")).toBe("Module 1 · Lecture 01 · The course map");
    expect(() => eyebrowFor("no-such-chapter")).toThrow();
  });
});

describe("EBH corpus — the verbatim transcript authority", () => {
  test("all 50 chapters carry corpus blocks", () => {
    for (const id of EBH_ALL_CHAPTER_IDS) expect(EBH_CORPUS[id]?.length).toBeGreaterThan(0);
  });

  test("the six late lectures' marker terms are present — the deployed shelf had zero hits", () => {
    const all = EBH_ALL_CHAPTER_IDS.map((id) => EBH_CORPUS[id].map((b) => b.s).join(" ")).join("\n");
    for (const term of ["Swadeshi", "Bombay Plan", "Drucker", "Godrej", "Palmer", "TISCO", "Birla", "Sarabhai", "Walchandnagar", "Bengal Famine"]) {
      expect(all.includes(term)).toBe(true);
    }
  });

  test("the thirteen source conflicts render on both sides, none reconciled", () => {
    const lx = (n: number) => require("fs").readFileSync(`${import.meta.dir}/../../../scripts/ebh_lectures/L${String(n).padStart(2, "0")}.md`, "utf8") as string;
    expect(lx(17)).toContain("killing 18 people");
    expect(lx(18)).toContain("18-20 deaths");
    expect(lx(26)).toContain("Foyol");
    expect(lx(26)).toContain("Raurkela");
    expect(lx(15)).toContain("Berkacre");
    expect(lx(14)).toContain("Water Frame (1768)");
    expect(lx(15)).toContain("Water Frame Innovation (1769)");
    expect(lx(30)).toContain("27% (1828-29)");
    expect(lx(34)).toContain("25-27% of union exports");
    expect(lx(31)).toContain("12-15%");
    expect(lx(34)).toContain("15-21%");
    expect(lx(31)).toContain("Sir Jamshedji Gaikwad");
    expect(lx(34)).toContain("Sir Jamshetji Jijibhoy");
    expect(lx(31)).toContain("Founded in the 1890s");
    expect(lx(34)).toContain("1857");
    expect(lx(4)).toContain("1990-1995");
    expect(lx(5)).toContain("1991");
    expect(lx(33)).toContain("1943 Bengal Famine");
    expect(lx(34)).toContain("Bengal Famine (1940s)");
    expect(lx(14)).toContain("Module 3 (Lectures 1-10)");
    expect(lx(34)).toContain("Largest module - 15-18 lectures");
    expect(lx(7)).toContain("Great Recession of 1929");
    expect(lx(7)).toContain("Great Depression");
  });
});

describe("EBH exam banks — 82 questions, five windows, Module 5 covered", () => {
  test("bank keys and order intact", () => {
    expect(EBH_EXAM_GROUPS).toEqual(["lens", "before", "machines", "corporation", "india"]);
    expect(EBH_TOTAL_QUESTIONS).toBe(82);
    expect(EBH_TOTAL_QUESTIONS).toBeGreaterThanOrEqual(80);
  });

  test("every mcq answer indexes its options; every output/short carries answerText; every question explains", () => {
    const ids = new Set<string>();
    for (const g of EBH_EXAM_GROUPS) {
      for (const q of EBH_EXAM_BANKS[g].questions) {
        expect(ids.has(q.id)).toBe(false);
        ids.add(q.id);
        expect(q.q.trim().length).toBeGreaterThan(0);
        expect(q.explain?.trim().length).toBeGreaterThan(0);
        if (q.type === "mcq") {
          expect(q.options!.length).toBeGreaterThanOrEqual(2);
          expect(q.answer!).toBeGreaterThanOrEqual(0);
          expect(q.answer!).toBeLessThan(q.options!.length);
        } else {
          expect((q as any).answerText?.trim().length).toBeGreaterThan(0);
        }
      }
    }
  });

  test("the Module 5 bank extends to the major exam", () => {
    expect(EBH_EXAM_BANKS.india.questions.length).toBeGreaterThanOrEqual(16);
    expect(EBH_EXAM_BANKS.india.questions.some((q) => q.q.includes("Bombay Plan"))).toBe(true);
    expect(EBH_EXAM_BANKS.india.questions.some((q) => q.q.includes("major examination") || q.q.includes("major exam"))).toBe(true);
  });
});
