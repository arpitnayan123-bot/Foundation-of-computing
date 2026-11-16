"use client";

/* STM exam window — theme + engine shared (see notes/ExamEngine.tsx
   and notes/exam-themes.ts). The violet sigil marks shelf 05. */

import { STM_EXAM_BANKS, type StmExamGroup } from "./questions";
import { ExamEngine } from "../notes/ExamEngine";
import { STM_EXAM_THEME } from "../notes/exam-themes";

export { STM_EXAM_THEME };

export function StmExamWindow({ group, onClose }: { group: StmExamGroup; onClose: () => void }) {
  return <ExamEngine theme={STM_EXAM_THEME} bank={STM_EXAM_BANKS[group]} draftId={group} onClose={onClose} />;
}
