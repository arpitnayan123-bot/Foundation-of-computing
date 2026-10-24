"use client";

/* ============================================================
   STM exam window — a thin theme declaration over the one
   shared ExamEngine (see notes/ExamEngine.tsx). The violet
   sigil marks shelf 05, Statistics for Managers; "output"
   questions are computed values, so the paper label and the
   chrome drift violet.
   ============================================================ */

import { STM_EXAM_BANKS, type StmExamGroup } from "./questions";
import { ExamEngine, type ExamTheme } from "../notes/ExamEngine";

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

export function StmExamWindow({ group, onClose }: { group: StmExamGroup; onClose: () => void }) {
  return <ExamEngine theme={STM_EXAM_THEME} bank={STM_EXAM_BANKS[group]} draftId={group} onClose={onClose} />;
}
