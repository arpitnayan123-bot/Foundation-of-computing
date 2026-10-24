"use client";

/* ATB exam window — theme + engine shared (see notes/ExamEngine.tsx
   and notes/exam-themes.ts). ATB is a no-code course: mcq | output | short. */

import { ATB_EXAM_BANKS, type AtbExamGroup } from "./questions";
import { ExamEngine } from "../notes/ExamEngine";
import { ATB_EXAM_THEME } from "../notes/exam-themes";

export { ATB_EXAM_THEME };

export function AtbExamWindow({ group, onClose }: { group: AtbExamGroup; onClose: () => void }) {
  return <ExamEngine theme={ATB_EXAM_THEME} bank={ATB_EXAM_BANKS[group]} draftId={group} onClose={onClose} />;
}
