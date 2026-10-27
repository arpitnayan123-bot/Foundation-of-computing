"use client";

/* ============================================================
   QUIZ 2 — the exam theme.

   The war room's own skin for the shared ExamEngine: the same
   parchment-on-ink paper every shelf writes on, but the sigil
   and the ink run exam-red — this window is a rehearsal for a
   real deadline, not a stroll through the notes.
   ============================================================ */

import type { ExamTheme } from "../notes/ExamEngine";

export const QUIZ2_EXAM_THEME: ExamTheme = {
  key: "quiz2",
  rootClass: "quiz2-exam",
  pageBg: "linear-gradient(180deg,#f7eedf 0%,#f3e7d3 100%)",
  headerBg: "linear-gradient(160deg,#2b1b10,#402818)",
  sigil: "linear-gradient(135deg,#ef4444,#b91c1c)",
  titleOnDark: "#ffe9c9",
  subOnDark: "#c9a97e",
  chipOnDark: "#f0e2c8",
  footerBorder: "#e5d3b6",
  footerBg: "rgba(250,243,230,0.9)",
  footerNote: "Mock mode: the real quiz has 40–60 questions. Answer, check, read the model — then retake.",
  paperLabel: "Write it on paper first — then type your attempt to compare",
  outputPlaceholder: "e.g. 62.0, or True",
  typeMeta: {
    mcq: { label: "Multiple choice", color: "#8a4508", bg: "#f9e8d2" },
    output: { label: "Write the output", color: "#7c2d12", bg: "#fdeadd" },
    short: { label: "Short answer", color: "#4d3319", bg: "#f3e8d2" },
  },
  tiers: {
    topper: { t: "Topper tier — walk into Quiz 2 like you wrote the paper.", c: "#44621d" },
    solid: { t: "Solid. Rewrite the missed answers by hand and you are there.", c: "#8a5a06" },
    getting: { t: "Getting there — hit the sliver notes for the misses, then retake.", c: "#b45309" },
    restart: { t: "Read the sliver's lectures once more, then retake — you will crush it.", c: "#8c2f2f" },
  },
};
