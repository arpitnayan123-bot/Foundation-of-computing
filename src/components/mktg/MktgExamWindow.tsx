"use client";

/* MKTG exam window — theme + engine shared (see notes/ExamEngine.tsx
   and notes/exam-themes.ts). Principles of Marketing: mcq | output | short. */

import { MKTG_EXAM_BANKS, type MktgExamGroup } from "./questions";
import { ExamEngine } from "../notes/ExamEngine";
import { MKTG_EXAM_THEME } from "../notes/exam-themes";

export { MKTG_EXAM_THEME };

export function MktgExamWindow({ group, onClose }: { group: MktgExamGroup; onClose: () => void }) {
  return <ExamEngine theme={MKTG_EXAM_THEME} bank={MKTG_EXAM_BANKS[group]} draftId={group} onClose={onClose} />;
}
