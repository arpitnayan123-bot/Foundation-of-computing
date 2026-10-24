/* ============================================================
   Backup & restore — one JSON file for the whole atlas memory.

   The reader's progress lives in local storage:
     atlas:sm2:v1       — the SM-2 review schedule
     atlas:ledger:v1    — the attempt log / streak
     atlas:progress:v1  — chapter reading progress
     atlas:goal:v1      — the daily goal target (optional in
                          bundles: older exports simply omit it)
   Export bundles all four; import validates and replaces.
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

export const BACKUP_VERSION = 1;

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
  };
}

export interface BackupSummary {
  cards: number;
  attempts: number;
  days: number;
  sections: number;
  exportedAt: string;
}

type ParseResult =
  | { ok: true; bundle: BackupBundle; summary: BackupSummary }
  | { ok: false; error: string };

/* ---------------- export ---------------- */

export function exportBackup(): string {
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
    },
  };
  return JSON.stringify(bundle, null, 2);
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
      exportedAt: bundle.exportedAt,
    },
  };
}

/** Replace all stores with a validated bundle (parseBackup first!).
 *  A bundle without a goal block (older export) resets the goal. */
export function applyBackup(bundle: BackupBundle): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem("atlas:sm2:v1", JSON.stringify(bundle.stores.sm2));
    window.localStorage.setItem("atlas:ledger:v1", JSON.stringify(bundle.stores.ledger));
    window.localStorage.setItem("atlas:progress:v1", JSON.stringify(bundle.stores.progress));
    if (bundle.stores.goal) {
      window.localStorage.setItem("atlas:goal:v1", JSON.stringify(bundle.stores.goal));
    } else {
      window.localStorage.removeItem("atlas:goal:v1");
    }
    if (bundle.stores.mock) {
      window.localStorage.setItem(MOCK_KEY, JSON.stringify(bundle.stores.mock));
    } else {
      window.localStorage.removeItem(MOCK_KEY);
    }
  } catch {
    /* private mode / quota — nothing else we can do here */
  }
}

/** Erase every atlas store (the "start over" button, two-step confirmed). */
export function eraseAllStores(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem("atlas:sm2:v1");
    window.localStorage.removeItem("atlas:ledger:v1");
    window.localStorage.removeItem("atlas:progress:v1");
    window.localStorage.removeItem("atlas:goal:v1");
    window.localStorage.removeItem(MOCK_KEY);
  } catch {
    /* noop */
  }
}
