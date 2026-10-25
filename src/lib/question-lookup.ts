/* ============================================================
   Question lookup — a lazy id → question-text index over all
   five banks, built on demand.

   The ledger's "trouble spots" panel needs the wording of the
   questions the schedule keeps failing — but the banks are
   ~250KB of exam data that must never ride along with the
   ledger chunk. This module dynamic-imports each bank map the
   first time weak cards exist, memoizes the promise, and
   forgets nothing afterwards (module-lifetime cache).

   AI-forged cards (lib/custom-cards.ts) are scheduled in the
   same SM-2 store, so they join the index too — a weak forged
   card can name its question like any bank card.
   ============================================================ */

import { listCustomCards } from "@/lib/custom-cards";

type LookupBank = Record<string, { questions: { id: string; q: string }[] }>;

/** bank loaders in the same order as the Promise.all below */
const SUBJECT_ORDER = ["foc", "atb", "fa", "ebh", "stm"] as const;

let indexPromise: Promise<Map<string, string>> | null = null;

/** `${subject}:${questionId}` → question text, for every bank in the atlas. */
export function loadQuestionIndex(): Promise<Map<string, string>> {
  indexPromise ??= Promise.all([
    import("@/components/notes/questions").then((m) => m.EXAM_BANKS),
    import("@/components/atb/questions").then((m) => m.ATB_EXAM_BANKS),
    import("@/components/fa/questions").then((m) => m.FA_EXAM_BANKS),
    import("@/components/ebh/questions").then((m) => m.EBH_EXAM_BANKS),
    import("@/components/stm/questions").then((m) => m.STM_EXAM_BANKS),
  ]).then((maps) => {
    const idx = new Map<string, string>();
    (maps as unknown as LookupBank[]).forEach((map, i) => {
      const subject = SUBJECT_ORDER[i];
      for (const group of Object.values(map)) {
        for (const q of group.questions) idx.set(`${subject}:${q.id}`, q.q);
      }
    });
    for (const c of listCustomCards()) idx.set(`${c.shelfId}:${c.id}`, c.q);
    return idx;
  });
  return indexPromise;
}
