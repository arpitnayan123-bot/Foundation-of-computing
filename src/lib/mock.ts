/* ============================================================
   MOCK EXAM — compose your own paper.

   The formal instrument, next to the fixed exam windows (one
   per shelf, full bank) and the casual ones (drill, review).
   The reader picks the shelves, the length, the clock and the
   question style; this module draws a fresh, balanced paper
   from the real banks and hands it to the one ExamEngine.

   Composition rules:
     · every selected shelf contributes in round-robin turns —
       a 3-shelf 15-question paper interleaves 5 from each, so
       the paper never reads as one shelf followed by another
     · questions are shuffled within each shelf first
     · ids are ALWAYS namespaced ("foc:f3", the review/drill
       convention) so grades land on the right shelf's schedule
     · if the shelves run out (type filters, small banks) the
       paper is honest about the shortfall in its subtitle

   Durability: the composed paper's ids live in localStorage
   ("atlas:mock-live:v1") while it is in progress, stamped with the
   time of the last write — so a reload OR a fully closed tab no
   longer kills the paper. Reopening the window rebuilds the exact
   same composition from those ids and the ExamEngine draft (keyed
   "mock") restores every answer and the honest clock whenever the
   browser session kept it. On load the record is reconciled:
   finished sittings (flagged when the engine reaches the report)
   and papers older than a day are swept instead of resurrected.

   The last blueprint is remembered in localStorage
   ("atlas:mock:v1") so the composer opens the way you left it.
   ============================================================ */

import type { EngineBank, EngineQuestion } from "@/components/notes/ExamEngine";
import { QUESTION_COUNTS } from "./question-counts";

/* ---------------- blueprint ---------------- */

export type MockTypes = "both" | "mcq" | "written";

export interface MockBlueprint {
  /** shelf ids that contribute questions (≥ 1) */
  shelves: string[];
  /** how many questions the paper should carry (5..60) */
  total: number;
  /** minutes on the clock — 0 means untimed */
  minutes: number;
  /** which question styles may appear */
  types: MockTypes;
}

export const MOCK_KEY = "atlas:mock:v1";

/** the length ladder (questions) and the clock ladder (minutes) */
export const MOCK_LENGTHS = [5, 10, 15, 20, 25, 30, 40, 50, 60] as const;
export const MOCK_CLOCKS = [0, 10, 15, 20, 30, 45, 60, 90, 120] as const;

const KNOWN_SHELVES = new Set(["foc", "atb", "fa", "ebh", "stm"]);
const KNOWN_TYPES = new Set<MockTypes>(["both", "mcq", "written"]);

export const DEFAULT_BLUEPRINT: MockBlueprint = {
  shelves: ["foc", "atb", "fa", "ebh", "stm"],
  total: 15,
  minutes: 30,
  types: "both",
};

function clampBlueprint(bp: Partial<MockBlueprint>): MockBlueprint {
  const shelves = Array.isArray(bp.shelves)
    ? bp.shelves.filter((s): s is string => typeof s === "string" && KNOWN_SHELVES.has(s))
    : [];
  const types = typeof bp.types === "string" && KNOWN_TYPES.has(bp.types as MockTypes) ? (bp.types as MockTypes) : DEFAULT_BLUEPRINT.types;
  const minutes = typeof bp.minutes === "number" && Number.isFinite(bp.minutes) ? Math.max(0, Math.min(240, Math.round(bp.minutes))) : DEFAULT_BLUEPRINT.minutes;
  const total = typeof bp.total === "number" && Number.isFinite(bp.total) ? Math.max(5, Math.min(60, Math.round(bp.total))) : DEFAULT_BLUEPRINT.total;
  return {
    shelves: shelves.length > 0 ? shelves : [...DEFAULT_BLUEPRINT.shelves],
    total,
    minutes,
    types,
  };
}

export function loadBlueprint(): MockBlueprint {
  if (typeof window === "undefined") return { ...DEFAULT_BLUEPRINT };
  try {
    const raw = window.localStorage.getItem(MOCK_KEY);
    if (!raw) return { ...DEFAULT_BLUEPRINT };
    return clampBlueprint(JSON.parse(raw) as Partial<MockBlueprint>);
  } catch {
    return { ...DEFAULT_BLUEPRINT };
  }
}

export function saveBlueprint(bp: MockBlueprint): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(MOCK_KEY, JSON.stringify(bp));
  } catch {
    /* private mode / quota — the composer just stops remembering */
  }
}

/** how many questions the selected shelves can actually supply
 *  (headline totals — the real draw happens against the banks) */
export function availableFor(shelves: string[]): number {
  return shelves.reduce((n, sid) => n + (QUESTION_COUNTS[sid as keyof typeof QUESTION_COUNTS] ?? 0), 0);
}

/* ---------------- the live paper (resume support) ---------------- */

export interface MockLiveSession {
  /** namespaced ids, in paper order — the exact composition */
  ids: string[];
  title: string;
  subtitle: string;
  /** minutes the paper was composed with (0 = untimed) */
  minutes: number;
  /** epoch ms of the last write — drives the 24h reconciliation */
  savedAt: number;
  /** set when the sitting reaches the report — such papers are
   *  swept on load, never resurrected */
  finished?: boolean;
}

export const MOCK_LIVE_KEY = "atlas:mock-live:v1";

/** a durable live paper older than a day is dead weight — sweep it.
 *  (localStorage survives tab closes, so unlike the old
 *  sessionStorage record, stale entries would otherwise linger.) */
const LIVE_MAX_AGE_MS = 24 * 60 * 60 * 1000;

export function loadLiveSession(): MockLiveSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(MOCK_LIVE_KEY);
    if (!raw) return null;
    const discard = () => {
      try {
        window.localStorage.removeItem(MOCK_LIVE_KEY);
      } catch {
        /* ignore */
      }
    };
    let parsed: Partial<MockLiveSession>;
    try {
      parsed = JSON.parse(raw) as Partial<MockLiveSession>;
    } catch {
      discard();
      return null;
    }
    if (
      !Array.isArray(parsed.ids) ||
      parsed.ids.some((id) => typeof id !== "string") ||
      parsed.ids.length === 0 ||
      typeof parsed.title !== "string" ||
      typeof parsed.subtitle !== "string"
    ) {
      discard();
      return null;
    }
    /* reconcile: already-finished sittings and papers older than
       24h are discarded, not resumed */
    if (
      parsed.finished === true ||
      typeof parsed.savedAt !== "number" ||
      !Number.isFinite(parsed.savedAt) ||
      Date.now() - parsed.savedAt > LIVE_MAX_AGE_MS
    ) {
      discard();
      return null;
    }
    return {
      ids: parsed.ids as string[],
      title: parsed.title,
      subtitle: parsed.subtitle,
      minutes: typeof parsed.minutes === "number" && Number.isFinite(parsed.minutes) ? Math.max(0, Math.min(240, Math.round(parsed.minutes))) : 0,
      savedAt: parsed.savedAt,
    };
  } catch {
    return null;
  }
}

export function saveLiveSession(session: Omit<MockLiveSession, "savedAt" | "finished">): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(
      MOCK_LIVE_KEY,
      JSON.stringify({ ...session, savedAt: Date.now() })
    );
  } catch {
    /* private mode / quota — the paper simply cannot survive a reload */
  }
}

/** the sitting reached the report — flag the durable record so the
 *  next load sweeps it (a finished paper is never resurrected) */
export function markLiveSessionFinished(): void {
  if (typeof window === "undefined") return;
  try {
    const raw = window.localStorage.getItem(MOCK_LIVE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw) as Partial<MockLiveSession>;
    if (!parsed || typeof parsed !== "object") return;
    window.localStorage.setItem(MOCK_LIVE_KEY, JSON.stringify({ ...parsed, finished: true }));
  } catch {
    /* ignore */
  }
}

/* ---------------- the banks (one dynamic chunk per shelf) ---------------- */

type BankMap = Record<string, { title: string; subtitle: string; questions: EngineQuestion[] }>;

const BANK_LOADERS: Record<string, () => Promise<BankMap>> = {
  foc: () => import("@/components/notes/questions").then((m) => m.EXAM_BANKS),
  atb: () => import("@/components/atb/questions").then((m) => m.ATB_EXAM_BANKS),
  fa: () => import("@/components/fa/questions").then((m) => m.FA_EXAM_BANKS),
  ebh: () => import("@/components/ebh/questions").then((m) => m.EBH_EXAM_BANKS),
  stm: () => import("@/components/stm/questions").then((m) => m.STM_EXAM_BANKS),
};

function shuffled<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function plural(n: number, one: string, many: string): string {
  return `${n} ${n === 1 ? one : many}`;
}

/* ---------------- compose ---------------- */

export interface MockPaper {
  bank: EngineBank;
  /** namespaced ids, paper order — persisted for resume */
  ids: string[];
  requested: number;
  composed: number;
}

/** Draw one fresh paper from the real banks. */
export async function buildMock(bp: MockBlueprint): Promise<MockPaper> {
  const shelves = bp.shelves.filter((sid) => BANK_LOADERS[sid]);
  const maps = await Promise.all(shelves.map(async (sid) => [sid, await BANK_LOADERS[sid]()] as const));

  /* per-shelf pools, shuffled, filtered by the style rule */
  const queues: [string, EngineQuestion[]][] = maps.map(([sid, bankMap]) => {
    const pool: EngineQuestion[] = [];
    for (const group of Object.values(bankMap)) {
      for (const q of group.questions) {
        if (bp.types === "mcq" && q.type !== "mcq") continue;
        if (bp.types === "written" && q.type === "mcq") continue;
        pool.push(q);
      }
    }
    return [sid, shuffled(pool)];
  });

  /* round-robin interleave — one turn per shelf per round, so a
     mixed paper reads mixed instead of shelf-by-shelf */
  const picked: { q: EngineQuestion; sid: string }[] = [];
  let remaining = bp.total;
  while (remaining > 0) {
    let progressed = false;
    for (const [sid, qs] of queues) {
      if (remaining <= 0) break;
      const q = qs.shift();
      if (q) {
        picked.push({ q, sid });
        remaining -= 1;
        progressed = true;
      }
    }
    if (!progressed) break;
  }

  const questions: EngineQuestion[] = picked.map(({ q, sid }) => ({
    ...q,
    id: `${sid}:${q.id}`,
    srcId: q.id,
    subject: sid,
  }));
  const ids = questions.map((q) => q.id);
  const composed = questions.length;
  const shelfCount = new Set(picked.map((p) => p.sid)).size;

  const title = `Mock exam — ${plural(composed, "question", "questions")} · ${plural(shelfCount, "shelf", "shelves")}`;
  let subtitle = bp.minutes > 0 ? `${bp.minutes} minutes on the clock` : "untimed — take the time you need";
  if (composed < bp.total) subtitle += ` · asked for ${bp.total}, the banks had ${composed}`;

  return {
    bank: { title, subtitle, questions },
    ids,
    requested: bp.total,
    composed,
  };
}

/** Rebuild an exact paper from its namespaced ids (resume path).
 *  Missing questions (a bank that changed under a running paper)
 *  are skipped; an empty result tells the caller to recompose. */
export async function rebuildMock(ids: string[]): Promise<EngineQuestion[]> {
  /* group by shelf prefix — ids are "<sid>:<qid>", split at the first colon */
  const byShelf = new Map<string, Set<string>>();
  for (const id of ids) {
    const cut = id.indexOf(":");
    if (cut <= 0) continue;
    const sid = id.slice(0, cut);
    const qid = id.slice(cut + 1);
    const set = byShelf.get(sid) ?? new Set<string>();
    set.add(qid);
    byShelf.set(sid, set);
  }

  const maps = await Promise.all(
    [...byShelf.keys()].filter((sid) => BANK_LOADERS[sid]).map(async (sid) => [sid, await BANK_LOADERS[sid]()] as const)
  );
  const index = new Map<string, EngineQuestion>();
  for (const [sid, bankMap] of maps) {
    const want = byShelf.get(sid);
    if (!want) continue;
    for (const group of Object.values(bankMap)) {
      for (const q of group.questions) {
        if (want.has(q.id)) index.set(`${sid}:${q.id}`, q);
      }
    }
  }

  const out: EngineQuestion[] = [];
  for (const id of ids) {
    const q = index.get(id);
    if (q) out.push({ ...q, id, srcId: id.slice(id.indexOf(":") + 1), subject: id.slice(0, id.indexOf(":")) });
  }
  return out;
}
