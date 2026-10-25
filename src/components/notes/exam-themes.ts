"use client";

/* ============================================================
   THE FIVE EXAM THEMES — one per shelf, zero question data.

   These live apart from the wrappers on purpose: the ledger
   view and the spaced-review window theme themselves from here
   WITHOUT importing any subject's question bank (~250 KB).
   Each wrapper re-exports its theme for compatibility.
   ============================================================ */

import type { ExamTheme } from "./ExamEngine";

/* ---------------- shelf 01 — Foundations of Computing ---------------- */
export const FOC_EXAM_THEME: ExamTheme = {
  key: "foc",
  pageBg: "linear-gradient(180deg,#f7eedf 0%,#f3e7d3 100%)",
  headerBg: "linear-gradient(160deg,#2b1b10,#402818)",
  sigil: "linear-gradient(135deg,#ea580c,#c2410c)",
  titleOnDark: "#ffe9c9",
  subOnDark: "#c9a97e",
  chipOnDark: "#f0e2c8",
  footerBorder: "#e5d3b6",
  footerBg: "rgba(250,243,230,0.9)",
  footerNote: "Exam mode: write on real paper first — then check. That is exactly how the end-term works.",
  paperLabel: "Write it on paper first — then type your attempt to compare",
  outputPlaceholder: "e.g. 14 49 3 1",
  typeMeta: {
    mcq: { label: "Multiple choice", color: "#8a4508", bg: "#f9e8d2" },
    output: { label: "Write the output", color: "#7c2d12", bg: "#fdeadd" },
    short: { label: "Short answer", color: "#4d3319", bg: "#f3e8d2" },
    code: { label: "Write the code", color: "#1f4715", bg: "#eaf2d8" },
  },
  tiers: {
    topper: { t: "Topper tier — you are pen-paper ready.", c: "#44621d" },
    solid: { t: "Solid. Rewrite the missed answers by hand and you are there.", c: "#8a5a06" },
    getting: { t: "Getting there — go back to the notes for the misses, then retake.", c: "#b45309" },
    restart: { t: "Read the chapter notes once more, then retake — you will crush it.", c: "#8c2f2f" },
  },
};

/* ---------------- shelf 02 — Algorithmic Thinking in Business ---------------- */
export const ATB_EXAM_THEME: ExamTheme = {
  key: "atb",
  pageBg: "linear-gradient(180deg,#f7eedf 0%,#f3e7d3 100%)",
  headerBg: "linear-gradient(160deg,#2b1b10,#402818)",
  sigil: "linear-gradient(135deg,#ea580c,#c2410c)",
  titleOnDark: "#ffe9c9",
  subOnDark: "#c9a97e",
  chipOnDark: "#f0e2c8",
  footerBorder: "#e5d3b6",
  footerBg: "rgba(250,243,230,0.9)",
  footerNote: "Exam mode: write on real paper first — then check. That is exactly how the end-term works.",
  paperLabel: "Write it on paper first — then type your attempt to compare",
  outputPlaceholder: "e.g. 62.0 then FIRST CLASS",
  typeMeta: {
    mcq: { label: "Multiple choice", color: "#8a4508", bg: "#f9e8d2" },
    output: { label: "Write the output", color: "#7c2d12", bg: "#fdeadd" },
    short: { label: "Short answer", color: "#4d3319", bg: "#f3e8d2" },
  },
  tiers: {
    topper: { t: "Topper tier — you are pen-paper ready.", c: "#44621d" },
    solid: { t: "Solid. Rewrite the missed answers by hand and you are there.", c: "#8a5a06" },
    getting: { t: "Getting there — go back to the notes for the misses, then retake.", c: "#b45309" },
    restart: { t: "Read the chapter notes once more, then retake — you will crush it.", c: "#8c2f2f" },
  },
};

/* ---------------- shelf 03 — Financial Accounting ---------------- */
export const FA_EXAM_THEME: ExamTheme = {
  key: "fa",
  rootClass: "fa-exam",
  pageBg: "linear-gradient(180deg,#f7eedf 0%,#f3e7d3 100%)",
  headerBg: "linear-gradient(160deg,#2b1b10,#402818)",
  sigil: "linear-gradient(135deg,#10b981,#047857)",
  titleOnDark: "#ffe9c9",
  subOnDark: "#c9a97e",
  chipOnDark: "#f0e2c8",
  footerBorder: "#e5d3b6",
  footerBg: "rgba(250,243,230,0.9)",
  footerNote: "Exam mode: write on real paper first — then check. That is exactly how the end-term works.",
  paperLabel: "Write it on paper first — then type your attempt to compare",
  outputPlaceholder: "e.g. 62.0 then FIRST CLASS",
  typeMeta: {
    mcq: { label: "Multiple choice", color: "#8a4508", bg: "#f9e8d2" },
    output: { label: "Write the output", color: "#7c2d12", bg: "#fdeadd" },
    short: { label: "Short answer", color: "#4d3319", bg: "#f3e8d2" },
  },
  tiers: {
    topper: { t: "Topper tier — you are pen-paper ready.", c: "#44621d" },
    solid: { t: "Solid. Rewrite the missed answers by hand and you are there.", c: "#8a5a06" },
    getting: { t: "Getting there — go back to the notes for the misses, then retake.", c: "#b45309" },
    restart: { t: "Read the chapter notes once more, then retake — you will crush it.", c: "#8c2f2f" },
  },
};

/* ---------------- shelf 04 — Economic & Business History ---------------- */
export const EBH_EXAM_THEME: ExamTheme = {
  key: "ebh",
  rootClass: "ebh-exam",
  pageBg: "linear-gradient(180deg,#f7eedf 0%,#f3e7d3 100%)",
  headerBg: "linear-gradient(160deg,#2b1b10,#402818)",
  sigil: "linear-gradient(135deg,#eab308,#a16207)",
  titleOnDark: "#ffe9c9",
  subOnDark: "#c9a97e",
  chipOnDark: "#f0e2c8",
  footerBorder: "#e5d3b6",
  footerBg: "rgba(250,243,230,0.9)",
  footerNote: "Exam mode: write on real paper first — then check. That is exactly how the end-term works.",
  paperLabel: "Write it on paper first — then type your attempt to compare",
  outputPlaceholder: "e.g. 1771, or Cromford Mill",
  typeMeta: {
    mcq: { label: "Multiple choice", color: "#8a4508", bg: "#f9e8d2" },
    output: { label: "Recall the year / term", color: "#7c2d12", bg: "#fdeadd" },
    short: { label: "Short answer", color: "#4d3319", bg: "#f3e8d2" },
  },
  tiers: {
    topper: { t: "Topper tier — the whole syllabus argues your side now.", c: "#44621d" },
    solid: { t: "Solid. Rewrite the missed answers by hand and you are there.", c: "#8a5a06" },
    getting: { t: "Getting there — go back to the notes for the misses, then retake.", c: "#b45309" },
    restart: { t: "Read the chapter notes once more, then retake — you will crush it.", c: "#8c2f2f" },
  },
};

/* ---------------- shelf 05 — Statistics for Managers ---------------- */
export const STM_EXAM_THEME: ExamTheme = {
  key: "stm",
  rootClass: "stm-exam",
  pageBg: "linear-gradient(180deg,#f4f0fd 0%,#eee8fb 100%)",
  headerBg: "linear-gradient(160deg,#241238,#3a2354)",
  sigil: "linear-gradient(135deg,#8b5cf6,#6d28d9)",
  titleOnDark: "#efe6ff",
  subOnDark: "#b7a3dc",
  chipOnDark: "#e8ddfa",
  footerBorder: "#ddd2f2",
  footerBg: "rgba(248,245,254,0.9)",
  footerNote: "Exam mode: compute on real paper first — then check. Practising in the exact format you will write in is the whole point.",
  paperLabel: "Compute it on paper first — then type your attempt to compare",
  outputPlaceholder: "e.g. 590.80, or 0.243",
  typeMeta: {
    mcq: { label: "Multiple choice", color: "#4c1d95", bg: "#ede9fe" },
    output: { label: "Compute the value", color: "#5b21b6", bg: "#e9e2fb" },
    short: { label: "Short answer", color: "#5f4b12", bg: "#f3ecd2" },
  },
  tiers: {
    topper: { t: "Topper tier — the whole syllabus computes your side now.", c: "#44621d" },
    solid: { t: "Solid. Redo the missed computations by hand and you are there.", c: "#6d28d9" },
    getting: { t: "Getting there — go back to the notes for the misses, then retake.", c: "#b45309" },
    restart: { t: "Read the chapter notes once more, then retake — you will crush it.", c: "#8c2f2f" },
  },
};

export const EXAM_THEMES: Record<string, ExamTheme> = {
  foc: FOC_EXAM_THEME,
  atb: ATB_EXAM_THEME,
  fa: FA_EXAM_THEME,
  ebh: EBH_EXAM_THEME,
  stm: STM_EXAM_THEME,
};

/* ---------------- the whole atlas — cross-shelf spaced review ----------------
   A neutral paper for "review everything" sessions: mixed questions from
   all five shelves pass through, so the chrome stays bookish rather than
   wearing one shelf's livery. Grading still routes to each question's own
   schedule via the per-question `subject` field (see ExamEngine). */
export const REVIEW_ALL_THEME: ExamTheme = {
  key: "review",
  pageBg: "linear-gradient(180deg,#f7eedf 0%,#f3e7d3 100%)",
  headerBg: "linear-gradient(160deg,#241608,#402818)",
  sigil: "linear-gradient(135deg,#f59e0b,#c2410c)",
  titleOnDark: "#ffe9c9",
  subOnDark: "#c9a97e",
  chipOnDark: "#f0e2c8",
  footerBorder: "#e5d3b6",
  footerBg: "rgba(250,243,230,0.9)",
  footerNote: "Exam mode: write on real paper first — then check. Mixed shelves, one sitting.",
  paperLabel: "Write it on paper first — then type your attempt to compare",
  outputPlaceholder: "Your answer…",
  typeMeta: {
    mcq: { label: "Multiple choice", color: "#8a4508", bg: "#f9e8d2" },
    output: { label: "Write the output", color: "#7c2d12", bg: "#fdeadd" },
    short: { label: "Short answer", color: "#4d3319", bg: "#f3e8d2" },
    code: { label: "Write the code", color: "#1f4715", bg: "#eaf2d8" },
  },
  tiers: {
    topper: { t: "Topper tier — every shelf argues your side now.", c: "#44621d" },
    solid: { t: "Solid. Rewrite the missed answers by hand and you are there.", c: "#8a5a06" },
    getting: { t: "Getting there — go back to the notes for the misses, then retake.", c: "#b45309" },
    restart: { t: "Read the chapter notes once more, then retake — you will crush it.", c: "#8c2f2f" },
  },
};

/* ---------------- the mock exam — the reader's own paper ----------------
   Composed in MockWindow from any shelves, any length, any clock.
   Same neutral bookish chrome as the review paper (the paper cannot
   wear one shelf's livery when it mixes five), but with its own exam
   voice: the clock is the examiner here. The `key` namespaces drafts
   and the ledger group ("mock"). */
export const MOCK_EXAM_THEME: ExamTheme = {
  key: "mock",
  pageBg: "linear-gradient(180deg,#f7eedf 0%,#f3e7d3 100%)",
  headerBg: "linear-gradient(160deg,#1f1207,#3a2413)",
  sigil: "linear-gradient(135deg,#fbbf24,#b45309)",
  titleOnDark: "#ffe9c9",
  subOnDark: "#c9a97e",
  chipOnDark: "#f0e2c8",
  footerBorder: "#e5d3b6",
  footerBg: "rgba(250,243,230,0.9)",
  footerNote: "Mock exam: your rules, real conditions — attempt everything before the bell, then read the report.",
  paperLabel: "Write it on paper first — then type your attempt to compare",
  outputPlaceholder: "Your answer…",
  typeMeta: {
    mcq: { label: "Multiple choice", color: "#8a4508", bg: "#f9e8d2" },
    output: { label: "Write the output", color: "#7c2d12", bg: "#fdeadd" },
    short: { label: "Short answer", color: "#4d3319", bg: "#f3e8d2" },
    code: { label: "Write the code", color: "#1f4715", bg: "#eaf2d8" },
  },
  tiers: {
    topper: { t: "Topper tier — walk into the real hall with this confidence.", c: "#44621d" },
    solid: { t: "Solid. Rewrite the missed answers by hand and you are there.", c: "#8a5a06" },
    getting: { t: "Getting there — the report below names exactly what to revise.", c: "#b45309" },
    restart: { t: "A hard paper — go back to the notes, then compose another one.", c: "#8c2f2f" },
  },
};
/** shelf 06 header — deep lagoon */
const LAGOON_HEADER = "linear-gradient(160deg,#0c2124,#143236)";


/* ---------------- shelf 06 — Principles of Marketing ---------------- */
export const MKTG_EXAM_THEME: ExamTheme = {
  key: "mktg",
  pageBg: "linear-gradient(180deg,#f4f7f4 0%,#eef3ee 100%)",
  headerBg: LAGOON_HEADER,
  sigil: "linear-gradient(135deg,#14b8a6,#0f766e)",
  titleOnDark: "#e9f2ee",
  subOnDark: "#9fc4ba",
  chipOnDark: "#cfe6df",
  footerBorder: "#dbeae5",
  footerBg: "rgba(248,250,247,0.9)",
  footerNote: "Exam mode: write on real paper first — then check. That is exactly how the end-term works.",
  paperLabel: "Write it on paper first — then type your attempt to compare",
  outputPlaceholder: "e.g. revenue 9,600 · cost 5,600 · profit 4,000",
  typeMeta: {
    mcq: { label: "Multiple choice", color: "#0f5f58", bg: "#e2f1ec" },
    output: { label: "Write the numbers", color: "#7a5a14", bg: "#f7efdc" },
    short: { label: "Short answer", color: "#28423c", bg: "#eaf1ec" },
  },
  tiers: {
    topper: { t: "Topper tier — you are pen-paper ready.", c: "#3f6b2e" },
    solid: { t: "Solid. Rewrite the missed answers by hand and you are there.", c: "#8a6414" },
    getting: { t: "Getting there — go back to the notes for the misses, then retake.", c: "#a97d2c" },
    restart: { t: "Read the chapter notes once more, then retake — you will crush it.", c: "#8c2f3f" },
  },
};
