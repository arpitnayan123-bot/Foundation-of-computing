"use client";

/* FA exam window — theme + engine shared (see notes/ExamEngine.tsx
   and notes/exam-themes.ts). The emerald sigil marks shelf 03. */

import { FA_EXAM_BANKS, type FaExamGroup } from "./questions";
import { ExamEngine } from "../notes/ExamEngine";
import { FA_EXAM_THEME } from "../notes/exam-themes";

export { FA_EXAM_THEME };

export function FaExamWindow({ group, onClose }: { group: FaExamGroup; onClose: () => void }) {
  return <ExamEngine theme={FA_EXAM_THEME} bank={FA_EXAM_BANKS[group]} draftId={group} onClose={onClose} />;
}
