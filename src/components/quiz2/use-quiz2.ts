"use client";

/* ============================================================
   QUIZ 2 — the war room runtime.

   1. useCountdown — a drift-proof ticker toward a target epoch,
      splitting the gap into days / hours / minutes / seconds.
   2. Sliver readiness — a localStorage set of "done" slivers,
      persisted per subject so the checklist survives reloads.
   3. Mock stats — best score & attempts per subject, read from
      the shared attempt ledger (the ExamEngine logs every
      finished window with subject "quiz2" and group
      "quiz2-<subject>-<window>").
   ============================================================ */

import { useCallback, useEffect, useState } from "react";
import { loadLedger } from "@/lib/ledger";
import { nextQuizStart, quizStartMs, type Quiz2Subject } from "./quiz2-data";

/* ---------------- 1. the countdown ---------------- */

export interface CountdownParts {
  days: number;
  hours: number;
  mins: number;
  secs: number;
  /** the deadline has passed */
  done: boolean;
}

const EMPTY: CountdownParts = { days: 0, hours: 0, mins: 0, secs: 0, done: true };

function splitGap(ms: number): CountdownParts {
  if (ms <= 0) return { days: 0, hours: 0, mins: 0, secs: 0, done: true };
  const total = Math.floor(ms / 1000);
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    mins: Math.floor((total % 3600) / 60),
    secs: total % 60,
    done: false,
  };
}

/** Tick toward one paper's official START (not the day's midnight).
 *  Derives the gap from Date.now() each second — never by counting
 *  ticks — so a throttled background tab cannot silently drift the
 *  clock. First read is rAF-deferred: keeps the first paint
 *  hydration-stable. */
export function useCountdownMs(targetMs: number): CountdownParts {
  const [parts, setParts] = useState<CountdownParts>(() => EMPTY);

  useEffect(() => {
    const tick = () => setParts(splitGap(targetMs - Date.now()));
    const raf = requestAnimationFrame(tick);
    const t = window.setInterval(tick, 1000);
    return () => {
      cancelAnimationFrame(raf);
      window.clearInterval(t);
    };
  }, [targetMs]);

  return parts;
}

/** countdown to one subject's official start */
export function useSubjectCountdown(subject: Quiz2Subject): CountdownParts {
  return useCountdownMs(quizStartMs(subject.dateISO, subject.startMin));
}

/** the hero clock: always aimed at the NEXT paper that hasn't
 *  started yet (Sat FoC 4:45 → ATB 5:25 → FA 6:00, then Sun EBH
 *  12:00). When every window has opened, target is null. */
export function useNextQuizCountdown(): { parts: CountdownParts; target: Quiz2Subject | null } {
  const [state, setState] = useState<{ parts: CountdownParts; target: Quiz2Subject | null }>({
    parts: EMPTY,
    target: null,
  });

  useEffect(() => {
    const tick = () => {
      const next = nextQuizStart();
      if (!next) {
        setState({ parts: EMPTY, target: null });
      } else {
        setState({ parts: splitGap(next.ms - Date.now()), target: next.subject });
      }
    };
    const raf = requestAnimationFrame(tick);
    const t = window.setInterval(tick, 1000);
    return () => {
      cancelAnimationFrame(raf);
      window.clearInterval(t);
    };
  }, []);

  return state;
}

/* ---------------- 2. sliver readiness ---------------- */

const SLIVER_KEY = "atlas:quiz2:slivers:v1";

type SliverMap = Record<string, boolean>; // "<subjectId>:<sliverId>" → done

function loadSlivers(): SliverMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(SLIVER_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as SliverMap;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

export function useSliverProgress() {
  const [map, setMap] = useState<SliverMap>(() => ({}));

  useEffect(() => {
    /* rAF-deferred read — the same pattern the landing's GoalChip uses
       to stay hydration-stable on the server-rendered Atlas */
    const raf = requestAnimationFrame(() => setMap(loadSlivers()));
    return () => cancelAnimationFrame(raf);
  }, []);

  const isDone = useCallback(
    (subjectId: string, sliverId: string) => map[`${subjectId}:${sliverId}`] === true,
    [map]
  );

  const toggle = useCallback((subjectId: string, sliverId: string) => {
    setMap((prev) => {
      const key = `${subjectId}:${sliverId}`;
      const next = { ...prev, [key]: !prev[key] };
      try {
        window.localStorage.setItem(SLIVER_KEY, JSON.stringify(next));
      } catch {
        /* storage blocked — the checklist still works for this session */
      }
      return next;
    });
  }, []);

  /** how many of this subject's slivers are ticked */
  const doneCount = useCallback(
    (subject: Quiz2Subject) => subject.slivers.filter((s) => map[`${subject.id}:${s.id}`] === true).length,
    [map]
  );

  return { isDone, toggle, doneCount };
}

/* ---------------- 3. mock stats from the ledger ---------------- */

export interface Quiz2Stats {
  attempts: number;
  bestPct: number;
  lastPct: number | null;
}

const QUIZ2_STATS: Quiz2Stats = { attempts: 0, bestPct: 0, lastPct: null };

/** Best score & attempt count for one subject's mock windows —
 *  the ExamEngine files every finished paper into the shared
 *  ledger under subject "quiz2", group "quiz2-<subjectId>-…".
 *  `epoch` re-reads the ledger when it changes (the app bumps
 *  it whenever an exam window closes, so a just-finished mock
 *  shows up immediately). */
export function useMockStats(subjectId: string, epoch = 0): Quiz2Stats {
  const [stats, setStats] = useState<Quiz2Stats>(QUIZ2_STATS);

  useEffect(() => {
    /* rAF-deferred read — hydration-stable, and the ledger only
       exists in this tab's localStorage anyway */
    const raf = requestAnimationFrame(() => {
      try {
        const store = loadLedger();
        const prefix = `quiz2-${subjectId}`;
        const rows = store.attempts.filter((a) => a.subject === "quiz2" && a.group.startsWith(prefix));
        if (rows.length === 0) {
          setStats(QUIZ2_STATS);
          return;
        }
        const bestPct = Math.max(...rows.map((r) => r.pct));
        const last = rows.reduce((a, b) => (b.at > a.at ? b : a));
        setStats({ attempts: rows.length, bestPct, lastPct: last.pct });
      } catch {
        setStats(QUIZ2_STATS);
      }
    });
    return () => cancelAnimationFrame(raf);
  }, [subjectId, epoch]);

  return stats;
}

/* ---------------- formatting helpers ---------------- */

export function pad2(n: number): string {
  return String(n).padStart(2, "0");
}
