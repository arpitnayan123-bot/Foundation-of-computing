/* ============================================================
   Section totals per subject — the static twin of the chapter
   menus inside each subject app.

   The reading-progress hook, the ledger, and the landing badges
   all need a section TOTAL without importing a subject app
   chunk (those are 100s of KB of animated notes). The numbers
   here mirror the flat chapter lists in FocApp / AtbApp /
   FaApp / EbhApp / StmApp / MktgApp — 17 + 28 + 16 + 31 + 16 + 53 = 161.
   ============================================================ */

export const SECTION_COUNTS: Record<string, number> = {
  foc: 17,
  atb: 28,
  fa: 16,
  ebh: 31,
  stm: 16,
  mktg: 53,
};

export const TOTAL_SECTIONS = Object.values(SECTION_COUNTS).reduce((n, x) => n + x, 0);
