"use client";

/* FoC exam window — theme + engine shared (see notes/ExamEngine.tsx
   and notes/exam-themes.ts). FoC is the only shelf with "write the
   code" questions, which is why its theme has a fourth type row. */

import { EXAM_BANKS, type ExamGroup } from "./questions";
import { ExamEngine } from "./ExamEngine";
import { FOC_EXAM_THEME } from "./exam-themes";

export { FOC_EXAM_THEME };

export function ExamWindow({ group, onClose }: { group: ExamGroup; onClose: () => void }) {
  return <ExamEngine theme={FOC_EXAM_THEME} bank={EXAM_BANKS[group]} draftId={group} onClose={onClose} />;
}
