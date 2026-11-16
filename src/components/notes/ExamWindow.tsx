"use client";

/* FoC exam window — theme + engine shared (see notes/ExamEngine.tsx
   and notes/exam-themes.ts). FoC is the only shelf with "write the
   code" questions, which is why its theme has a fourth type row.

   The optional `mockBank` runs the official Lecture-34 preset — the
   60-mark end-term mock (20 short × 2m + 5 output × 4m) — through the
   same engine, the same draft safety and the same results report. */

import { EXAM_BANKS, type ExamGroup } from "./questions";
import { ExamEngine, type EngineBank } from "./ExamEngine";
import { FOC_EXAM_THEME } from "./exam-themes";

export { FOC_EXAM_THEME };

export function ExamWindow({
  group,
  onClose,
  mockBank,
}: {
  group: ExamGroup;
  onClose: () => void;
  mockBank?: EngineBank;
}) {
  return (
    <ExamEngine
      theme={FOC_EXAM_THEME}
      bank={mockBank ?? EXAM_BANKS[group]}
      draftId={mockBank ? "foc-endterm" : group}
      onClose={onClose}
    />
  );
}
