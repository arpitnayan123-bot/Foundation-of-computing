/* ============================================================
   Backup & restore — one JSON file for the whole atlas memory.

   The reader's progress lives in local storage:
     atlas:sm2:v1          — the SM-2 review schedule
     atlas:ledger:v1       — the attempt log / streak
     atlas:progress:v1     — chapter reading progress
     atlas:goal:v1         — the daily goal target (optional in
                             bundles: older exports simply omit it)
     atlas:mock-live:v1    — the last mock-exam blueprint (same
                             optional tolerance)
     atlas:custom-cards:v1 — the AI-forged flashcards (optional,
                             same tolerance as goal/mock)
     atlas:mistakes:v1     — the Mistake Ledger 错题本 (optional,
                             same tolerance)
     atlas:reflection:v1   — the evening debriefs, yonaoshi
                             (optional, same tolerance)
     foc-py-lab-v1         — the Python Lab notebooks, carried
                             opaquely (the lab owns its schema)
   Export bundles all of them; import validates and replaces.
   Nothing is sent anywhere — the file goes straight from the
   reader's disk into their browser, same as before.

   Validation is strict-but-tolerant: unknown extra fields in
   records are kept, records missing required fields are
   dropped, and a bundle that fails shape checks is rejected
   with a human-readable error instead of half-applying.
   ============================================================ */

import { loadSm2, type Sm2Card, type Sm2Store } from "@/lib/sm2";
import { loadLedger, type LedgerAttempt, type LedgerStore } from "@/lib/ledger";
import { loadProgress, type ProgressStore } from "@/lib/progress";
import { loadGoal } from "./goal";
import { loadBlueprint, MOCK_KEY, type MockBlueprint } from "./mock";
import { CUSTOM_CARDS_KEY, listCustomCards, type CustomCardStore } from "./custom-cards";
import { MISTAKES_KEY, loadMistakes, type MistakeEntry, type MistakeStore } from "./mistakes";
import { REFLECTION_KEY, loadReflections, type ReflectionEntry, type ReflectionStore } from "./reflection";
import { CLARITY_KEY, loadClarity, type ClarityStore } from "./clarity";

export const BACKUP_VERSION = 1;

/** The Python Lab notebook store — written by
 *  components/notes/Playground.tsx as a JSON array of cell code
 *  strings. Backup treats it as an opaque string: it is copied
 *  byte-for-byte on export and restored byte-for-byte on import,
 *  so the lab's own schema can evolve without touching backup. */
export const LAB_KEY = "foc-py-lab-v1";

export interface BackupBundle {
  app: "the-atlas";
  version: number;
  exportedAt: string;
  stores: {
    sm2: Sm2Store;
    ledger: LedgerStore;
    progress: ProgressStore;
    /** the daily-goal target — optional so version-1 backups
     *  written before the goal existed still restore cleanly */
    goal?: { target: number; setAt: number };
    /** the last mock-exam blueprint — optional, same tolerance */
    mock?: MockBlueprint;
    /** the AI-forged flashcards — optional, same tolerance */
    custom?: CustomCardStore;
    /** the Mistake Ledger (错题本) — optional, same tolerance */
    mistakes?: MistakeStore;
    clarity?: ClarityStore;
    /** the evening debriefs (yonaoshi) — optional, same tolerance */
    reflections?: ReflectionStore;
    /** the Python Lab notebooks — the exact localStorage value,
     *  carried opaquely; absent from older exports */
    lab?: string;
  };
}

export interface BackupSummary {
  cards: number;
  attempts: number;
  days: number;
  sections: number;
  /** AI-forged cards riding along in the bundle */
  customCards: number;
  /** Mistake Ledger entries in the bundle */
  mistakes: number;
  clarityLectures: number;
  /** evening debriefs in the bundle */
  reflections: number;
  /** Python Lab cells in the bundle (0 when the lab value is
   *  absent or not a plain JSON array of strings) */
  labCells: number;
  exportedAt: string;
}

type ParseResult =
  | { ok: true; bundle: BackupBundle; summary: BackupSummary }
  | { ok: false; error: string };

/* ---------------- export ---------------- */

export function exportBackup(): string {
  const lab = readLabRaw();
  const bundle: BackupBundle = {
    app: "the-atlas",
    version: BACKUP_VERSION,
    exportedAt: new Date().toISOString(),
    stores: {
      sm2: loadSm2(),
      ledger: loadLedger(),
      progress: loadProgress(),
      goal: loadGoal(),
      mock: loadBlueprint(),
      custom: { cards: listCustomCards() },
      mistakes: loadMistakes(),
      reflections: loadReflections(),
      clarity: loadClarity(),
      ...(lab !== null ? { lab } : {}),
    },
  };
  return JSON.stringify(bundle, null, 2);
}

/** The lab's stored value, kept raw. Loose validation here means
 *  we never block an export: whatever the lab wrote comes along,
 *  even if it has drifted from the documented shape. */
function readLabRaw(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(LAB_KEY);
  } catch {
    return null;
  }
}

/** How many lab cells ride in a bundle — counted only when the
 *  opaque value still parses as an array of code strings. */
function labCellCount(raw: string | null | undefined): number {
  if (!raw) return 0;
  try {
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) && parsed.every((c) => typeof c === "string") ? parsed.length : 0;
  } catch {
    return 0;
  }
}

/** Filename-safe day stamp for the download, e.g. atlas-2026-02-13.json */
export function backupFilename(now = new Date()): string {
  const m = `${now.getMonth() + 1}`.padStart(2, "0");
  const d = `${now.getDate()}`.padStart(2, "0");
  return `atlas-backup-${now.getFullYear()}-${m}-${d}.json`;
}

/* ---------------- validation ---------------- */

function isObj(x: unknown): x is Record<string, unknown> {
  return typeof x === "object" && x !== null && !Array.isArray(x);
}

function num(x: unknown): x is number {
  return typeof x === "number" && Number.isFinite(x);
}

function validCard(c: unknown): c is Sm2Card {
  return isObj(c) && num(c.ef) && num(c.interval) && num(c.reps) && num(c.due) && num(c.last);
}

function validSm2(x: unknown): x is Sm2Store {
  if (!isObj(x)) return false;
  for (const subject of Object.values(x)) {
    if (!isObj(subject)) return false;
    for (const card of Object.values(subject)) if (!validCard(card)) return false;
  }
  return true;
}

function validLedger(x: unknown): x is LedgerStore {
  if (!isObj(x) || !Array.isArray(x.attempts) || !Array.isArray(x.days)) return false;
  for (const a of x.attempts) {
    if (
      !isObj(a) ||
      typeof a.subject !== "string" ||
      typeof a.group !== "string" ||
      typeof a.title !== "string" ||
      !num(a.correct) ||
      !num(a.total) ||
      !num(a.pct) ||
      !num(a.seconds) ||
      !num(a.at)
    ) {
      return false;
    }
  }
  return x.days.every((d) => typeof d === "string");
}

function validProgress(x: unknown): x is ProgressStore {
  if (!isObj(x)) return false;
  for (const subject of Object.values(x)) {
    if (!isObj(subject)) return false;
    for (const ts of Object.values(subject)) if (!num(ts)) return false;
  }
  return true;
}

/** the goal block is optional — but when present it must be whole */
function validGoal(x: unknown): x is { target: number; setAt: number } {
  return isObj(x) && num(x.target) && num(x.setAt);
}

/** the mock blueprint is optional — but when present it must be whole */
function validMock(x: unknown): x is MockBlueprint {
  return (
    isObj(x) &&
    Array.isArray(x.shelves) &&
    x.shelves.length > 0 &&
    x.shelves.every((s) => typeof s === "string") &&
    num(x.total) &&
    num(x.minutes) &&
    typeof x.types === "string" &&
    ["both", "mcq", "written"].includes(x.types)
  );
}

/** the forged-card deck is optional — but when present it must be whole:
 *  every card keeps its shape and its "custom:" id prefix */
function validCustom(x: unknown): x is CustomCardStore {
  if (!isObj(x) || !Array.isArray(x.cards)) return false;
  return x.cards.every((c) =>
    isObj(c) &&
    typeof c.id === "string" &&
    c.id.startsWith("custom:") &&
    typeof c.shelfId === "string" &&
    typeof c.chapterKey === "string" &&
    typeof c.q === "string" &&
    typeof c.a === "string" &&
    num(c.createdAt)
  );
}

/** the Mistake Ledger is optional — but when present it must be whole */
function validMistakes(x: unknown): x is MistakeStore {
  if (!isObj(x) || !Array.isArray(x.entries)) return false;
  return x.entries.every(
    (e) =>
      isObj(e) &&
      typeof e.subject === "string" &&
      typeof e.id === "string" &&
      typeof e.kind === "string" &&
      typeof e.q === "string" &&
      typeof e.answer === "string" &&
      num(e.hits) &&
      num(e.firstAt) &&
      num(e.lastAt) &&
      num(e.reDue) &&
      num(e.streak) &&
      (e.closedAt === null || num(e.closedAt))
  );
}

/** the evening debriefs are optional — but when present they must be whole */
function validReflections(x: unknown): x is ReflectionStore {
  if (!isObj(x) || !Array.isArray(x.entries)) return false;
  return x.entries.every(
    (e) => isObj(e) && typeof e.date === "string" && typeof e.text === "string" && num(e.createdAt)
  );
}

/** the lecture clarity marks are optional — subject → lecture id → status */
function validClarity(x: unknown): x is ClarityStore {
  if (!isObj(x)) return false;
  for (const subject of Object.values(x)) {
    if (!isObj(subject)) return false;
    for (const status of Object.values(subject)) {
      if (status !== "clear" && status !== "unclear") return false;
    }
  }
  return true;
}

/* ---------------- import ---------------- */

export function parseBackup(text: string): ParseResult {
  let raw: unknown;
  try {
    raw = JSON.parse(text);
  } catch {
    return { ok: false, error: "That file is not valid JSON." };
  }
  if (!isObj(raw) || raw.app !== "the-atlas") {
    return { ok: false, error: "This isn't an Atlas backup file." };
  }
  if (typeof raw.version !== "number" || raw.version > BACKUP_VERSION) {
    return { ok: false, error: `Backup version ${String(raw.version)} is newer than this app understands.` };
  }
  const stores = isObj(raw.stores) ? raw.stores : null;
  if (!stores) {
    return { ok: false, error: "The backup is missing its stores block." };
  }
  if (stores.goal !== undefined && !validGoal(stores.goal)) {
    return { ok: false, error: "The backup's stores are damaged — refusing to overwrite your data." };
  }
  if (stores.mock !== undefined && !validMock(stores.mock)) {
    return { ok: false, error: "The backup's stores are damaged — refusing to overwrite your data." };
  }
  if (stores.custom !== undefined && !validCustom(stores.custom)) {
    return { ok: false, error: "The backup's stores are damaged — refusing to overwrite your data." };
  }
  if (stores.mistakes !== undefined && !validMistakes(stores.mistakes)) {
    return { ok: false, error: "The backup's stores are damaged — refusing to overwrite your data." };
  }
  if (stores.reflections !== undefined && !validReflections(stores.reflections)) {
    return { ok: false, error: "The backup's stores are damaged — refusing to overwrite your data." };
  }
  if (stores.clarity !== undefined && !validClarity(stores.clarity)) {
    return { ok: false, error: "The backup's stores are damaged — refusing to overwrite your data." };
  }
  /* the lab block is opaque — the only hard rule is that it is a
     string, so a restore can write it back byte-for-byte */
  if (stores.lab !== undefined && typeof stores.lab !== "string") {
    return { ok: false, error: "The backup's stores are damaged — refusing to overwrite your data." };
  }
  if (!validSm2(stores.sm2) || !validLedger(stores.ledger) || !validProgress(stores.progress)) {
    return { ok: false, error: "The backup's stores are damaged — refusing to overwrite your data." };
  }
  const bundle: BackupBundle = {
    app: "the-atlas",
    version: raw.version,
    exportedAt: typeof raw.exportedAt === "string" ? raw.exportedAt : "",
    stores: {
      sm2: stores.sm2 as Sm2Store,
      ledger: stores.ledger as LedgerStore,
      progress: stores.progress as ProgressStore,
      ...(validGoal(stores.goal) ? { goal: stores.goal } : {}),
      ...(validMock(stores.mock) ? { mock: stores.mock } : {}),
      ...(validCustom(stores.custom) ? { custom: stores.custom } : {}),
      ...(validMistakes(stores.mistakes) ? { mistakes: stores.mistakes } : {}),
      ...(validReflections(stores.reflections) ? { reflections: stores.reflections } : {}),
      ...(validClarity(stores.clarity) ? { clarity: stores.clarity } : {}),
      ...(typeof stores.lab === "string" ? { lab: stores.lab } : {}),
    },
  };
  let cards = 0;
  let sections = 0;
  for (const subject of Object.values(bundle.stores.sm2)) cards += Object.keys(subject).length;
  for (const subject of Object.values(bundle.stores.progress)) sections += Object.keys(subject).length;
  const attempts = (bundle.stores.ledger.attempts as LedgerAttempt[]).length;
  return {
    ok: true,
    bundle,
    summary: {
      cards,
      attempts,
      days: bundle.stores.ledger.days.length,
      sections,
      customCards: bundle.stores.custom?.cards.length ?? 0,
      mistakes: bundle.stores.mistakes?.entries.length ?? 0,
      clarityLectures: bundle.stores.clarity
        ? Object.values(bundle.stores.clarity).reduce((n, m) => n + Object.keys(m).length, 0)
        : 0,
      reflections: bundle.stores.reflections?.entries.length ?? 0,
      labCells: labCellCount(bundle.stores.lab),
      exportedAt: bundle.exportedAt,
    },
  };
}

export interface ApplyResult {
  /** stores that wrote back exactly what was given */
  restored: number;
  /** storage keys whose write silently failed (private mode,
   *  quota) or refused to verify — the UI must own up to these */
  failedKeys: string[];
}

/** Replace all stores with a validated bundle (parseBackup first!).
 *  A bundle without a goal block (older export) resets the goal;
 *  without a forged-card block it clears the forge; without a lab
 *  block it clears the Python Lab (importing replaces everything).
 *
 *  Every write is verified: after each setItem the key is re-read
 *  and compared — private browsing and storage quota fail silently
 *  otherwise, and the success toast would be a lie. Per-key
 *  failures are returned so the UI can say exactly what stuck. */
export function applyBackup(bundle: BackupBundle): ApplyResult {
  const failedKeys: string[] = [];
  let restored = 0;
  if (typeof window === "undefined") return { restored, failedKeys };
  const writes: Array<[string, string | null]> = [
    ["atlas:sm2:v1", JSON.stringify(bundle.stores.sm2)],
    ["atlas:ledger:v1", JSON.stringify(bundle.stores.ledger)],
    ["atlas:progress:v1", JSON.stringify(bundle.stores.progress)],
    ["atlas:goal:v1", bundle.stores.goal ? JSON.stringify(bundle.stores.goal) : null],
    [MOCK_KEY, bundle.stores.mock ? JSON.stringify(bundle.stores.mock) : null],
    [CUSTOM_CARDS_KEY, bundle.stores.custom ? JSON.stringify(bundle.stores.custom) : null],
    [MISTAKES_KEY, bundle.stores.mistakes ? JSON.stringify(bundle.stores.mistakes) : null],
    [REFLECTION_KEY, bundle.stores.reflections ? JSON.stringify(bundle.stores.reflections) : null],
    [CLARITY_KEY, bundle.stores.clarity ? JSON.stringify(bundle.stores.clarity) : null],
    [LAB_KEY, typeof bundle.stores.lab === "string" ? bundle.stores.lab : null],
  ];
  for (const [key, value] of writes) {
    try {
      if (value === null) window.localStorage.removeItem(key);
      else window.localStorage.setItem(key, value);
      if (window.localStorage.getItem(key) !== value) failedKeys.push(key);
      else restored += 1;
    } catch {
      failedKeys.push(key);
    }
  }
  return { restored, failedKeys };
}

/** Erase every atlas store — including the Python Lab notebooks —
 *  (the "start over" button, two-step confirmed). */
export function eraseAllStores(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem("atlas:sm2:v1");
    window.localStorage.removeItem("atlas:ledger:v1");
    window.localStorage.removeItem("atlas:progress:v1");
    window.localStorage.removeItem("atlas:goal:v1");
    window.localStorage.removeItem(MOCK_KEY);
    window.localStorage.removeItem(CUSTOM_CARDS_KEY);
    window.localStorage.removeItem(MISTAKES_KEY);
    window.localStorage.removeItem(REFLECTION_KEY);
    window.localStorage.removeItem(CLARITY_KEY);
    window.localStorage.removeItem(LAB_KEY);
  } catch {
    /* noop */
  }
}

/** Lightweight shape check for the sync API — the same
 *  strict-but-tolerant parse the importer runs, with zero store
 *  access. Safe to call from a server route: the loaders this
 *  module pulls in are all window-guarded, and nothing here
 *  touches localStorage. */
export function validateBackupShape(text: string): { ok: true } | { ok: false; error: string } {
  const res = parseBackup(text);
  return res.ok ? { ok: true } : { ok: false, error: res.error };
}
