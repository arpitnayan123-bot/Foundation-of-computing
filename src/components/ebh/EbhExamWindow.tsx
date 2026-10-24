"use client";

/* ============================================================
   EBH exam window — a thin theme declaration over the one
   shared ExamEngine (see notes/ExamEngine.tsx). The gold sigil
   marks shelf 04, Economic & Business History; its "output"
   questions recall years and terms rather than compute values.
   ============================================================ */

import { EBH_EXAM_BANKS, type EbhExamGroup } from "./questions";
import { ExamEngine, type ExamTheme } from "../notes/ExamEngine";

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

export function EbhExamWindow({ group, onClose }: { group: EbhExamGroup; onClose: () => void }) {
  return <ExamEngine theme={EBH_EXAM_THEME} bank={EBH_EXAM_BANKS[group]} draftId={group} onClose={onClose} />;
}
