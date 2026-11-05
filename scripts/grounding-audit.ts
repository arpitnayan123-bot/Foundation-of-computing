/* Grounding audit: for every shelf, every lecture, check that each
   chapter id resolves to real prose in search-corpus.json — the exact
   text the Revision Radio's Explain mode grounds its briefing in. */
import corpus from "../src/lib/search-corpus.json";
import { FOC_LECTURES } from "../src/components/foc/lectures";
import { ATB_LECTURES } from "../src/components/atb/lectures";
import { FA_LECTURES } from "../src/components/fa/lectures";
import { EBH_LECTURES } from "../src/components/ebh/lectures";
import { STM_LECTURES } from "../src/components/stm/lectures";
import { MKTG_LECTURES } from "../src/components/mktg/lectures";

const shelves: Record<string, { code: string; lectures: any[] }> = {
  foc: { code: "FOC", lectures: FOC_LECTURES as any[] },
  atb: { code: "ATB", lectures: ATB_LECTURES as any[] },
  fa: { code: "FA", lectures: FA_LECTURES as any[] },
  ebh: { code: "EBH", lectures: EBH_LECTURES as any[] },
  stm: { code: "STM", lectures: STM_LECTURES as any[] },
  mktg: { code: "MKTG", lectures: MKTG_LECTURES as any[] },
};

type Ch = { shelfId: string; chapterKey: string; text: string };
const chapters = ((corpus as any).chapters ?? []) as Ch[];
const keys = new Set(chapters.map((c) => `${c.shelfId}:${c.chapterKey}`));
const EMPTY = chapters.filter((c) => !c.text || !c.text.trim()).length;

console.log(`corpus: ${chapters.length} chapters, ${EMPTY} empty`);

let problems = 0;
for (const [shelf, { code, lectures }] of Object.entries(shelves)) {
  let lects = 0, chs = 0, grounded = 0, missing: string[] = [];
  for (const l of lectures) {
    lects++;
    if (!l.title) { missing.push(`${l.code ?? l.id}: NO TITLE`); problems++; }
    if (!l.blurb) { missing.push(`${l.code ?? l.id}: NO BLURB`); problems++; }
    for (const c of l.chapters ?? []) {
      chs++;
      if (keys.has(`${shelf}:${c.id}`)) grounded++;
      else { missing.push(`${l.code ?? l.id}/${c.id} (${c.label})`); problems++; }
    }
  }
  console.log(
    `${shelf.padEnd(5)} ${code.padEnd(5)} lectures=${String(lects).padStart(2)} chapters=${String(chs).padStart(3)} grounded=${String(grounded).padStart(3)}` +
      (missing.length ? `  MISSING: ${missing.join(", ")}` : "  ✓"),
  );
}
console.log(problems === 0 ? "GROUNDING OK — every chapter resolves to prose" : `GROUNDING PROBLEMS: ${problems}`);
