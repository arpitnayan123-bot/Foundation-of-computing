import { describe, expect, test } from "bun:test";

/* ============================================================
   MKTG rebuild assertions — the hard gates for the 40-lecture
   rebuild, checked on every test run rather than by eyeball.
   ============================================================ */

import {
  MKTG_ALL_CHAPTER_IDS,
  MKTG_DEFAULT_LECTURE,
  MKTG_LECTURES,
  MKTG_PART_BANKS,
  MKTG_PARTS,
  lectureById,
  lectureOfChapter,
  partOfLecture,
} from "@/components/mktg/lectures";
import { MKTG_EXAM_BANKS, MKTG_EXAM_GROUPS, MKTG_TOTAL_QUESTIONS, type MktgExamGroup } from "@/components/mktg/questions";

const OFFICIAL_TITLES: Record<number, string> = {
  1: "Introduction to Marketing: Understanding Customers, Markets, Brands and Value",
  2: "Introduction to Marketing: Understanding Customer Value and Business Success",
  3: "Understanding Marketing: Definitions, Concepts, and Application",
  4: "Introduction to Marketing and Understanding Consumer Behavior",
  5: "Understanding Customer Perceived Value",
  6: "Marketing Environment and Exchange Systems",
  7: "Fundamental Concepts in Customer Perceived Value and Marketing Exchange",
  8: "Expectation Gap, Satisfaction, and Loyalty in Marketing",
  9: "Understanding Customer Satisfaction and Loyalty: Key Concepts and Financial Impact",
  10: "Understanding Existing State, Desired State, and Consumer Decision-Making in Marketing",
  11: "Segmentation, Targeting, and Positioning (STP): Fundamentals and Market Strategy",
  12: "Behavioral and Benefit-Based Market Segmentation",
  13: "Segmentation and Targeting in Real-World Marketing: The Tupo Case Study",
  14: "Targeting and Positioning in Marketing Strategy",
  15: "Understanding Positioning Strategy in Marketing",
  16: "Segmentation, Targeting, Positioning, and Micro-Marketing in Modern Marketing",
  17: "Points of Differentiation (POD) and Points of Parity (POP) in Marketing Strategy",
  18: "Understanding Consumer Behavior: Perception, Opinion Formation, and Purchase Decisions",
  19: "Overview of Consumer Buying Decision Process",
  20: "Consumer Behavior: Understanding Purchase Decisions and Consumer Journey",
  21: "Overview of Consumer Decision-Making Journey and Integrated Behavior Framework",
  22: "The Decision Journey — Consolidated",
  23: "Understanding Theories of Motivation in Consumer Behavior",
  24: "Understanding Perception in Consumer Behavior",
  25: "Understanding Perception and Gestalt Principles in Marketing",
  26: "Understanding Consumer Behavior: Motivation, Perception, and Brand Humanization",
  27: "Understanding Humanizing a Brand Through Product Attributes and Human Characteristics",
  28: "Understanding Cognitive Biases in Consumer Decision-Making",
  29: "Product and Product Strategy",
  30: "Overview of Product Concepts and Portfolio Management",
  31: "Product Portfolio, Mix, and Strategy Fundamentals",
  32: "Deepening into Product Strategy: Line Extensions and Market Stretching",
  33: "Market Stretch and Product Portfolio Strategy",
  34: "Understanding Product Narratives and Brand Humanization",
  35: "Overview of Product Strategy and Co-Branding",
  36: "Pricing Strategy: Frameworks, Psychology, and Implementation",
  37: "Common Pricing Strategies and Their Execution",
  38: "Principles of Marketing and Marketing Communications",
  39: "Lecture 39",
  40: "Final Class: Three C's in Marketing Communication and Examination Guidelines",
};

describe("MKTG registry — the 40-lecture rebuild", () => {
  test("exactly 40 registry entries, ids l1..l40, strictly ascending", () => {
    expect(MKTG_LECTURES.length).toBe(40);
    MKTG_LECTURES.forEach((l, i) => {
      expect(l.id).toBe(`l${i + 1}`);
      expect(l.n).toBe(i + 1);
      expect(l.code).toBe(`L${String(i + 1).padStart(2, "0")}`);
    });
    for (let i = 1; i < MKTG_LECTURES.length; i++) {
      expect(MKTG_LECTURES[i - 1].n! < MKTG_LECTURES[i].n!).toBeTrue();
    }
  });

  test("every lecture carries its official title verbatim", () => {
    for (const l of MKTG_LECTURES) {
      expect(l.title).toBe(OFFICIAL_TITLES[l.n!]);
    }
  });

  test("registry ids of lectures 1–28 are the preserved ones", () => {
    for (let n = 1; n <= 28; n++) {
      expect(lectureById(`l${n}`)).not.toBeNull();
    }
  });

  test("L22 and L39 are reserved — numbered, positioned, never content-bearing", () => {
    const l22 = lectureById("l22")!;
    const l39 = lectureById("l39")!;
    expect(l22.reserved).toBe(true);
    expect(l39.reserved).toBe(true);
    expect(l22.n).toBe(22);
    expect(l39.n).toBe(39);
    expect(l22.title).toBe("The Decision Journey — Consolidated");
    expect(l39.title).toBe("Lecture 39");
    for (const l of [l22, l39]) {
      expect(l.chapters.length).toBe(1);
      expect(l.chapters[0].id.startsWith("reserved-")).toBeTrue();
    }
    // every non-reserved lecture carries real chapters
    for (const l of MKTG_LECTURES) {
      if (!l.reserved) expect(l.chapters.length).toBeGreaterThan(0);
    }
  });

  test("chapter ids are unique and resolve back to exactly one lecture", () => {
    const set = new Set(MKTG_ALL_CHAPTER_IDS);
    expect(set.size).toBe(MKTG_ALL_CHAPTER_IDS.length);
    for (const id of MKTG_ALL_CHAPTER_IDS) {
      expect(lectureOfChapter(id)?.id).not.toBeNull();
    }
    expect(lectureOfChapter("recap22")).toBeNull(); // the old honest recap is retired
  });

  test("six teaching arcs partition lectures 1–40 with reserved inside their arc", () => {
    expect(MKTG_PARTS.length).toBe(6);
    let cursor = 1;
    for (const p of MKTG_PARTS) {
      expect(p.from).toBe(cursor);
      cursor = p.to + 1;
    }
    expect(MKTG_PARTS[5].to).toBe(40);
    expect(partOfLecture(22)?.id).toBe("part3"); // reserved L22 sits in Part III
    expect(partOfLecture(39)?.id).toBe("part6"); // reserved L39 sits in Part VI
    expect(partOfLecture(1)?.id).toBe("part1");
    expect(partOfLecture(40)?.id).toBe("part6");
    const covered = new Set<number>();
    for (const p of MKTG_PARTS) {
      for (let n = p.from; n <= p.to; n++) covered.add(n);
    }
    expect(covered.size).toBe(40);
  });

  test("ten exam banks: the eight existing keys intact + product + practice, six questions each", () => {
    const expectedKeys: MktgExamGroup[] = [
      "foundations", "concepts", "value", "loyalty", "stp",
      "positioning", "consumer", "psychology", "product", "practice",
    ];
    expect(MKTG_EXAM_GROUPS).toEqual(expectedKeys);
    for (const g of MKTG_EXAM_GROUPS) {
      expect(MKTG_EXAM_BANKS[g].questions.length).toBe(6);
    }
    expect(MKTG_TOTAL_QUESTIONS).toBe(60);
    const ids = MKTG_EXAM_GROUPS.flatMap((g) => MKTG_EXAM_BANKS[g].questions.map((q) => q.id));
    expect(new Set(ids).size).toBe(ids.length);
  });

  test("part → bank map covers all ten banks exactly once", () => {
    const all = Object.values(MKTG_PART_BANKS).flat();
    expect(all.length).toBe(10);
    expect(new Set(all).size).toBe(10);
    for (const bankId of MKTG_EXAM_GROUPS) {
      expect(all).toContain(bankId);
    }
  });

  test("the default lecture is L01", () => {
    expect(MKTG_DEFAULT_LECTURE).toBe("l1");
  });
});
