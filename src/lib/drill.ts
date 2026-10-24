/* ============================================================
   QUICK DRILL — a low-friction practice sampler.

   Exam windows are formal (timers, full banks, pen & paper);
   spaced review only fires when cards are already due. The
   drill sits between the two: it grabs a small mixed handful
   of questions — due cards first, then the shaky ones, then
   fresh questions the schedule has never seen — so practice
   can start cold, in one click, from the ledger or ⌘K.

   Selection is weighted, never exhaustive (the schedule and
   the exam windows stay the source of truth):

     1. due      — most overdue cards, capped at 8
     2. shaky    — fragile cards pulled forward (low easiness
                   or a miss on the last grade), capped at 4
     3. new      — unseen questions, shuffled (seeds the SM-2
                   schedule instead of waiting for an exam)
     4. fill     — random seen-healthy cards to top the dozen

   AI-forged cards (lib/custom-cards.ts) join the same tiers —
   due customs, then shaky customs, then fresh customs ride
   ahead of the bank picks inside each tier, so a deck forged
   from tonight's chapter shows up in the very next drill.

   Banks are dynamically imported here (one chunk per shelf),
   so the ledger chunk stays light until a drill actually
   starts. Cross-shelf picks namespace ids ("stm:f3") exactly
   like the mixed review sessions, so grading lands on the
   right shelf's schedule.
   ============================================================ */

import type { EngineQuestion } from "@/components/notes/ExamEngine";
import { loadSm2, type Sm2Card } from "./sm2";
import { customToQuestion, listCustomCards } from "./custom-cards";

/** why a card made the cut — shown as a small tag on the card */
export type DrillReason = "due" | "shaky" | "new" | "fill";

export interface DrillCard extends EngineQuestion {
  /** shelf this card grades into (set for cross-shelf picks) */
  subject?: string;
  /** the card's id in its own shelf's schedule */
  srcId?: string;
  reason: DrillReason;
}

export interface DrillSession {
  cards: DrillCard[];
  /** how many made the cut (≤ DRILL_MAX) */
  picked: number;
  counts: Record<DrillReason, number>;
  /** shelves that contributed at least one card */
  shelves: number;
}

/** the whole session is one handful — a drill, not an exam */
export const DRILL_MAX = 12;
const DUE_CAP = 8;
const SHAKY_CAP = 4;

/** each shelf's bank map, one dynamic chunk per subject
 *  (mirrors the loader table in ReviewWindow / question-lookup) */
const BANK_LOADERS: Record<
  string,
  () => Promise<Record<string, { title: string; subtitle: string; questions: EngineQuestion[] }>>
> = {
  foc: () => import("@/components/notes/questions").then((m) => m.EXAM_BANKS),
  atb: () => import("@/components/atb/questions").then((m) => m.ATB_EXAM_BANKS),
  fa: () => import("@/components/fa/questions").then((m) => m.FA_EXAM_BANKS),
  ebh: () => import("@/components/ebh/questions").then((m) => m.EBH_EXAM_BANKS),
  stm: () => import("@/components/stm/questions").then((m) => m.STM_EXAM_BANKS),
};

/** easiness below which a card counts as shaky (same fragile line as sm2.ts) */
const FRAGILE_EF = 2.1;

function shuffled<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** a card is shaky when its last grade was a miss or its easiness sank */
function isShaky(card: Sm2Card): boolean {
  return (card.reps === 0 && card.interval === 0) || card.ef < FRAGILE_EF;
}

interface Candidate {
  q: EngineQuestion;
  /** shelf the question belongs to */
  sid: string;
  card?: Sm2Card;
  cls: 0 | 1 | 2 | 3; // 0 due · 1 shaky · 2 unseen · 3 seen-healthy
}

/** classify one card row by the same rules the banks use */
function classify(card: Sm2Card | undefined, now: number): Candidate["cls"] {
  if (!card || card.last <= 0) return 2;
  if (card.due <= now) return 0;
  if (isShaky(card)) return 1;
  return 3;
}

/** the forged-card candidates for this drill (shelf-filtered),
 *  classified against the same schedule the banks read */
function customCandidates(subject: string, isAll: boolean, store: ReturnType<typeof loadSm2>, now: number): Candidate[] {
  const out: Candidate[] = [];
  for (const c of listCustomCards()) {
    if (!isAll && c.shelfId !== subject) continue;
    const card = store[c.shelfId]?.[c.id];
    out.push({ q: customToQuestion(c), sid: c.shelfId, card, cls: classify(card, now) });
  }
  return out;
}

/** Build one drill handful for a subject id, or "all" for the whole atlas. */
export async function buildDrill(subject: string, now = Date.now()): Promise<DrillSession> {
  const isAll = subject === "all";
  const store = loadSm2();
  const customs = customCandidates(subject, isAll, store, now);

  /* load the shelf (or every shelf) */
  const maps: [string, Record<string, { title: string; subtitle: string; questions: EngineQuestion[] }>][] = [];
  if (isAll) {
    await Promise.all(
      Object.entries(BANK_LOADERS).map(async ([sid, loader]) => {
        maps.push([sid, await loader()]);
      })
    );
  } else {
    const loader = BANK_LOADERS[subject];
    maps.push([subject, loader ? await loader() : {}]);
  }

  /* classify every question on every contributing shelf */
  const candidates: Candidate[] = [];
  let shelves = 0;
  for (const [sid, bankMap] of maps) {
    const rows = store[sid] ?? {};
    let contributed = false;
    for (const group of Object.values(bankMap)) {
      for (const q of group.questions) {
        const card = rows[q.id];
        const cls = classify(card, now);
        candidates.push({ q, sid, card, cls });
        contributed = true;
      }
    }
    if (contributed) shelves += 1;
  }

  /* forged cards ride ahead of the bank picks inside every tier:
     due customs first (most overdue first), then shaky customs,
     then fresh customs — the bank logic fills whatever is left */
  const byDue = (a: Candidate, b: Candidate) => (a.card?.due ?? 0) - (b.card?.due ?? 0);
  const byEf = (a: Candidate, b: Candidate) => (a.card?.ef ?? 2.5) - (b.card?.ef ?? 2.5);
  const due = [...customs.filter((c) => c.cls === 0).sort(byDue), ...candidates.filter((c) => c.cls === 0).sort(byDue)].slice(0, DUE_CAP);
  /* fragile cards pulled forward, weakest easiness first — but never
     crowd out every due card: at most SHAKY_CAP of them */
  const shakyPicked = [...customs.filter((c) => c.cls === 1).sort(byEf), ...candidates.filter((c) => c.cls === 1).sort(byEf)].slice(0, SHAKY_CAP);
  const unseen = shuffled(customs.filter((c) => c.cls === 2)).concat(shuffled(candidates.filter((c) => c.cls === 2)));
  const healthy = shuffled(customs.filter((c) => c.cls === 3)).concat(shuffled(candidates.filter((c) => c.cls === 3)));

  const rest = DRILL_MAX - due.length - shakyPicked.length;
  const unseenPicked = unseen.slice(0, Math.max(0, rest));
  const restAfterNew = DRILL_MAX - due.length - shakyPicked.length - unseenPicked.length;
  const fillPicked = restAfterNew > 0 ? healthy.slice(0, restAfterNew) : [];

  /* interleave: due, then shaky, then new, then fill — a varied deck
     beats a sorted one (all-due streaks feel like a second exam) */
  const deck: DrillCard[] = [];
  const push = (list: Candidate[], reason: DrillReason, isAllShelves: boolean) => {
    for (const c of list) {
      deck.push(
        isAllShelves
          ? { ...c.q, id: `${c.sid}:${c.q.id}`, srcId: c.q.id, subject: c.sid, reason }
          : { ...c.q, reason }
      );
    }
  };
  push(due, "due", isAll);
  push(shakyPicked, "shaky", isAll);
  push(unseenPicked, "new", isAll);
  push(fillPicked, "fill", isAll);

  return {
    cards: deck.slice(0, DRILL_MAX),
    picked: Math.min(deck.length, DRILL_MAX),
    counts: {
      due: due.length,
      shaky: shakyPicked.length,
      new: unseenPicked.length,
      fill: fillPicked.length,
    },
    shelves,
  };
}

/** short human note for the deck composition, e.g. "3 due · 2 tricky · 7 new" */
export function deckSummary(counts: Record<DrillReason, number>): string {
  const parts: string[] = [];
  if (counts.due > 0) parts.push(`${counts.due} due`);
  if (counts.shaky > 0) parts.push(`${counts.shaky} tricky`);
  if (counts.new > 0) parts.push(`${counts.new} new`);
  if (counts.fill > 0) parts.push(`${counts.fill} mixed`);
  return parts.join(" · ");
}

/** label on the reason tag */
export function reasonLabel(r: DrillReason): string {
  return r === "due" ? "due card" : r === "shaky" ? "tricky card" : r === "new" ? "new card" : "mixed in";
}
