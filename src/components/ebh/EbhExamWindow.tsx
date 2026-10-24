"use client";

/* EBH exam window — theme + engine shared (see notes/ExamEngine.tsx
   and notes/exam-themes.ts). The gold sigil marks shelf 04; "output"
   questions recall years and terms rather than compute values. */

import { EBH_EXAM_BANKS, type EbhExamGroup } from "./questions";
import { ExamEngine } from "../notes/ExamEngine";
import { EBH_EXAM_THEME } from "../notes/exam-themes";

export { EBH_EXAM_THEME };

export function EbhExamWindow({ group, onClose }: { group: EbhExamGroup; onClose: () => void }) {
  return <ExamEngine theme={EBH_EXAM_THEME} bank={EBH_EXAM_BANKS[group]} draftId={group} onClose={onClose} />;
}
