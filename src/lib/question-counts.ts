/* ============================================================
   Question-bank totals, as plain literals.

   The source of truth is each subject's questions.ts (its
   TOTAL_*_QUESTIONS constant is derived from the real array).
   Those constants are NOT imported here on purpose: every bank
   holds hundreds of question objects, and the Atlas landing card
   only needs the headline numbers. Importing the banks here
   would pull ~250 KB of exam data into the landing bundle.

   If you add questions to a bank, bump its number below so the
   shelf card stays honest (the exam window itself always reads
   the real bank, so gameplay is never affected).
   ============================================================ */

export const QUESTION_COUNTS = {
  foc: 120,
  atb: 30,
  fa: 40,
  ebh: 40,
  stm: 40,
} as const;

export type QuestionCountSubject = keyof typeof QUESTION_COUNTS;
