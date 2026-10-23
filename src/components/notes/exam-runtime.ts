"use client";

/* ============================================================
   Shared exam-window runtime — used by all five shelf engines
   (FoC / ATB / FA / EBH / STM). Three responsibilities:

   1. DRAFT PERSISTENCE — the exam's answers, question pointer
      and clock are continuously mirrored to sessionStorage.
      A refresh, a browser-back, or an accidental Escape no
      longer destroys typed work; reopening the same window in
      the same tab restores the attempt exactly where it was.

   2. DRIFT-PROOF CLOCK — elapsed time is derived from
      Date.now() against a stored start epoch, never by
      counting setInterval ticks (browsers throttle background
      tabs to ≥1 tick/minute, which silently under-reports).

   3. DIALOG A11Y — focus is moved into the modal on mount,
      Tab is trapped inside while it is open, and focus returns
      to the element that opened it on close.
   ============================================================ */

import { useEffect, useRef } from "react";

/* ---------------- 1. draft persistence ---------------- */

export interface ExamDraft {
  /** current question pointer */
  idx: number;
  /** per-question state (QState-shaped; opaque here on purpose) */
  states: Record<string, unknown>;
  /** seconds already accumulated before this boot (retake → 0) */
  base: number;
  /** epoch ms of the current run's start */
  startedAt: number;
}

const DRAFT_PREFIX = "atlas-exam-draft:";

export function examDraftKey(subject: string, group: string): string {
  return `${DRAFT_PREFIX}${subject}:${group}`;
}

/** true when at least one question carries real work worth keeping */
export function draftHasWork(states: Record<string, unknown>): boolean {
  for (const s of Object.values(states)) {
    if (!s || typeof s !== "object") continue;
    const st = s as { status?: string; typed?: string; chosen?: number; revealed?: boolean };
    if (st.status === "correct" || st.status === "wrong" || st.revealed) return true;
    if (typeof st.typed === "string" && st.typed.trim().length > 0) return true;
  }
  return false;
}

export function loadExamDraft(key: string): ExamDraft | null {
  try {
    const raw = window.sessionStorage.getItem(key);
    if (!raw) return null;
    const d = JSON.parse(raw) as ExamDraft;
    if (
      typeof d?.idx !== "number" ||
      typeof d?.base !== "number" ||
      typeof d?.startedAt !== "number" ||
      !d.states ||
      typeof d.states !== "object"
    ) {
      return null;
    }
    return d;
  } catch {
    return null; // corrupted draft → fresh start
  }
}

let draftTimer: number | null = null;
let draftPending: { key: string; draft: ExamDraft } | null = null;

/** debounced (400 ms) — typing in a textarea must not spam storage */
export function saveExamDraft(key: string, draft: ExamDraft): void {
  draftPending = { key, draft };
  if (draftTimer !== null) return;
  draftTimer = window.setTimeout(() => {
    draftTimer = null;
    const p = draftPending;
    draftPending = null;
    if (!p) return;
    try {
      window.sessionStorage.setItem(p.key, JSON.stringify(p.draft));
    } catch {
      /* storage blocked — the exam still works, just without drafts */
    }
  }, 400);
}

/** flush immediately (used when the window closes / finishes) */
export function flushExamDraft(): void {
  if (draftTimer !== null) {
    window.clearTimeout(draftTimer);
    draftTimer = null;
  }
  const p = draftPending;
  draftPending = null;
  if (!p) return;
  try {
    window.sessionStorage.setItem(p.key, JSON.stringify(p.draft));
  } catch {
    /* ignore */
  }
}

export function clearExamDraft(key: string): void {
  draftPending = null;
  try {
    window.sessionStorage.removeItem(key);
  } catch {
    /* ignore */
  }
}

/* ---------------- 3. dialog a11y ---------------- */

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Attach the returned ref to the modal's root element (give it
 * tabIndex={-1}). While `active` is true: focus moves inside on
 * open, Tab is trapped, and on close focus returns to the
 * element that opened the modal. Escape-to-close stays the
 * caller's job.
 */
export function useDialogA11y<T extends HTMLElement>(active: boolean) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!active) return;
    const el = ref.current;
    if (!el) return;
    const opener =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;

    el.focus({ preventScroll: true });

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const focusables = Array.from(el.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (n) => n.offsetParent !== null || n === document.activeElement
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && (active === el || active === first)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    el.addEventListener("keydown", onKey);
    return () => {
      el.removeEventListener("keydown", onKey);
      opener?.focus({ preventScroll: true });
    };
  }, [active]);

  return ref;
}
