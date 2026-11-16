/* ============================================================
   CUSTOM CARDS — flashcards the reader forged with AI.

   The Card Forge (components/atlas/CardForge.tsx) sends one
   chapter's notes to /api/generate-cards, the reader accepts
   or rejects the drafts, and the accepted cards land here —
   localStorage "atlas:custom-cards:v1". From this store they
   flow into the SM-2 schedule, Quick Drill, spaced review,
   the ledger and the backup file exactly like bank questions;
   mock exams stay bank-only.

   ids are namespaced "custom:<uuid>" so they can never collide
   with a bank question id, and every card carries the shelf it
   was forged for, so grades and ledger rows land on the right
   shelf's schedule.

   Storage: same contract as the other atlas stores — a strict
   read, a guarded write, and on failure the store silently
   degrades to session-only (an in-memory list keeps the
   current tab working).
   ============================================================ */

import type { EngineQuestion } from "@/components/notes/ExamEngine";

export const CUSTOM_CARDS_KEY = "atlas:custom-cards:v1";
/** the forge is a supplement, not a syllabus — keep the newest 500 */
export const MAX_CUSTOM_CARDS = 500;

export interface CustomCard {
  id: string;
  /** shelf the card grades into, e.g. "foc" */
  shelfId: string;
  /** the chapter it was forged from (the section's DOM id) */
  chapterKey: string;
  q: string;
  a: string;
  createdAt: number;
  source: "ai";
}

export interface CustomCardStore {
  cards: CustomCard[];
}

/* session-only fallback — private mode / quota keeps the tab alive */
let memory: CustomCardStore | null = null;

function validCard(c: unknown): c is CustomCard {
  if (typeof c !== "object" || c === null || Array.isArray(c)) return false;
  const o = c as Record<string, unknown>;
  return (
    typeof o.id === "string" &&
    o.id.startsWith("custom:") &&
    typeof o.shelfId === "string" &&
    typeof o.chapterKey === "string" &&
    typeof o.q === "string" &&
    typeof o.a === "string" &&
    typeof o.createdAt === "number" &&
    Number.isFinite(o.createdAt)
  );
}

/** Read the store, dropping any record that lost its shape.
 *  A genuinely absent key reads as empty — the in-memory copy
 *  only rescues the session when localStorage itself throws
 *  (private mode / quota), so "erase everything" stays honest. */
export function listCustomCards(): CustomCard[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(CUSTOM_CARDS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Partial<CustomCardStore>;
    if (!parsed || !Array.isArray(parsed.cards)) return [];
    return parsed.cards.filter(validCard);
  } catch {
    /* localStorage broken — the forge degrades to session-only */
    return memory?.cards ?? [];
  }
}

function saveCards(cards: CustomCard[]): void {
  memory = { cards };
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(CUSTOM_CARDS_KEY, JSON.stringify({ cards }));
  } catch {
    /* private mode / quota — the forge degrades to session-only */
  }
}

function makeId(): string {
  try {
    if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
      return `custom:${crypto.randomUUID()}`;
    }
  } catch {
    /* fall through to the manual stamp */
  }
  return `custom:${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

/** Accept forged drafts: stamp ids + timestamps, cap the deck,
 *  persist. Returns the accepted cards as stored. */
export function addCustomCards(
  drafts: Array<{ shelfId: string; chapterKey: string; q: string; a: string }>
): CustomCard[] {
  const stamped: CustomCard[] = drafts
    .filter((d) => d.q.trim() && d.a.trim())
    .map((d) => ({
      id: makeId(),
      shelfId: d.shelfId,
      chapterKey: d.chapterKey,
      q: d.q.trim(),
      a: d.a.trim(),
      createdAt: Date.now(),
      source: "ai",
    }));
  if (stamped.length === 0) return [];
  const kept = [...listCustomCards(), ...stamped].slice(-MAX_CUSTOM_CARDS);
  saveCards(kept);
  return stamped;
}

/** Delete one forged card (id as stored, "custom:…"). */
export function removeCustomCard(id: string): void {
  saveCards(listCustomCards().filter((c) => c.id !== id));
}

/** How many forged cards exist in total. */
export function countCustomCards(): number {
  return listCustomCards().length;
}

/** Forged-card count per shelf — the ledger adds these to the
 *  bank totals so mastery never reads above 100%. */
export function countCustomCardsByShelf(): Record<string, number> {
  const out: Record<string, number> = {};
  for (const c of listCustomCards()) out[c.shelfId] = (out[c.shelfId] ?? 0) + 1;
  return out;
}

/** A forged card is a plain Q→A self-check — the same reveal
 *  shape the drill uses for "write the output" questions. */
export function customToQuestion(c: CustomCard): EngineQuestion {
  return { id: c.id, type: "short", q: c.q, answerText: c.a };
}
