"use client";

/* ============================================================
   TEST MY KNOWLEDGE — THE ONE EXAM ENGINE.

   All five shelves (FoC / ATB / FA / EBH / STM) used to carry a
   550-line clone of this window each. Every difference between
   them was pure presentation — colors, labels, copy — so the
   engine now takes an `ExamTheme` and a plain bank object, and
   each shelf ships a ~70-line wrapper that only declares its
   theme. Logic (drafts, drift-proof clock, focus trap, scoring)
   lives here and is shared.

   Question shape is structural, not nominal: any bank whose
   questions carry { id, type, q, options?, answer?, code?,
   answerText?, solution?, explain? } plugs straight in.
   ============================================================ */

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  PenLine,
  ListChecks,
  RotateCcw,
  Trophy,
  Timer,
  GraduationCap,
  Check,
  Eye,
  Printer,
} from "lucide-react";
import {
  clearExamDraft,
  draftHasWork,
  examDraftKey,
  flushExamDraft,
  loadExamDraft,
  saveExamDraft,
  useDialogA11y,
} from "./exam-runtime";
import { gradeQuestion } from "@/lib/sm2";
import { logAttempt } from "@/lib/ledger";
import { captureMiss } from "@/lib/mistakes";

/** File a wrong answer into the Mistake Ledger (错题本) with the
 *  question, its choices and the correct answer — the notebook
 *  the reader re-solves from. */
function fileMiss(q: EngineQuestion, subject: string): void {
  captureMiss(subject, q.srcId ?? q.id, {
    q: q.q,
    options: q.options,
    answer:
      typeof q.answer === "number" && q.options
        ? (q.options[q.answer] ?? "")
        : (q.answerText ?? q.solution ?? ""),
  });
}

/* ---------------- theme contract ---------------- */

export interface ExamTypeMeta {
  label: string;
  color: string;
  bg: string;
}

export interface ExamTier {
  t: string;
  c: string;
}

export interface ExamTheme {
  /** draft namespace, e.g. "foc" — must stay stable per subject */
  key: string;
  /** extra class on the shell for shelf-specific CSS, e.g. "stm-exam" */
  rootClass?: string;
  /** full-screen backdrop gradient */
  pageBg: string;
  /** header band gradient */
  headerBg: string;
  /** pen-line sigil gradient */
  sigil: string;
  /** bright text on the dark header */
  titleOnDark: string;
  /** muted subtitle on the dark header */
  subOnDark: string;
  /** pill text on the dark header */
  chipOnDark: string;
  /** bottom bar border color */
  footerBorder: string;
  /** bottom bar background (alpha allowed) */
  footerBg: string;
  /** bottom-bar hint sentence */
  footerNote: string;
  /** label above the textarea */
  paperLabel: string;
  /** placeholder for write-the-output questions */
  outputPlaceholder: string;
  /** per-question-type chip colors + labels, in display order */
  typeMeta: Record<string, ExamTypeMeta>;
  /** result-report verdict tiers */
  tiers: {
    topper: ExamTier;
    solid: ExamTier;
    getting: ExamTier;
    restart: ExamTier;
  };
}

/* ---------------- structural bank contract ---------------- */

export interface EngineQuestion {
  id: string;
  type: string;
  q: string;
  code?: string;
  options?: string[];
  answer?: number;
  answerText?: string;
  solution?: string;
  explain?: string;
  /** schedule this question grades into when it differs from theme.key
   *  (cross-shelf review sessions mix subjects in one paper) */
  subject?: string;
  /** the question's id in its own subject's schedule, when `id` was
   *  namespaced to stay unique inside a mixed bank */
  srcId?: string;
}

export interface EngineBank {
  title: string;
  subtitle: string;
  questions: EngineQuestion[];
}

type QStatus = "unattempted" | "correct" | "wrong" | "revealed";
interface QState {
  chosen?: number;
  typed?: string;
  revealed?: boolean;
  status: QStatus;
}

function fmt(sec: number) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function ExamEngine({
  theme,
  bank,
  draftId,
  onClose,
  minutes,
  onFinished,
}: {
  theme: ExamTheme;
  bank: EngineBank;
  /** stable per-window id (the exam group) — namespaces the draft */
  draftId: string;
  onClose: () => void;
  /** minutes on the clock — when set, the header counts DOWN and the
   *  paper finishes itself at zero (mock exams). Absent = the classic
   *  stopwatch, exactly as the shelf windows have always run. */
  minutes?: number;
  /** fired once when the sitting reaches the report — the mock window
   *  uses it to retire its durable live-paper record (lib/mock.ts) */
  onFinished?: () => void;
}) {
  const qs = bank.questions;
  const limitSec =
    typeof minutes === "number" && Number.isFinite(minutes) && minutes > 0 ? Math.round(minutes * 60) : null;

  /* ---- draft restore: a refresh or an accidental Escape keeps your work ---- */
  const DRAFT_KEY = examDraftKey(theme.key, draftId);
  const draft = useMemo(() => loadExamDraft(DRAFT_KEY), [DRAFT_KEY]);
  const restored = useMemo(() => {
    if (!draft) return null;
    let n = 0;
    for (const s of Object.values(draft.states)) {
      const st = s as QState | undefined;
      if (st && (st.status === "correct" || st.status === "wrong" || st.revealed)) n += 1;
    }
    return n > 0 ? n : null;
  }, [draft]);

  const [idx, setIdx] = useState(() => Math.min(Math.max(draft?.idx ?? 0, 0), qs.length - 1));
  const [states, setStates] = useState<Record<string, QState>>(() => {
    const fresh: Record<string, QState> = Object.fromEntries(
      bank.questions.map((q) => [q.id, { status: "unattempted" as QStatus }])
    );
    if (draft) {
      for (const q of bank.questions) {
        const d = draft.states[q.id] as QState | undefined;
        if (d && typeof d.status === "string") fresh[q.id] = d;
      }
    }
    return fresh;
  });
  const [finished, setFinished] = useState(false);
  /* drift-proof clock: seconds = base + (now − startedAt), derived from the
     wall clock — never tick-counted, so background-tab throttling can't
     silently under-report the elapsed time. Survives refresh via the draft. */
  const [clock, setClock] = useState(() => ({
    base: draft?.base ?? 0,
    startedAt: draft?.startedAt ?? Date.now(),
  }));
  const [now, setNow] = useState(() => Date.now());
  const seconds = Math.max(0, Math.floor(clock.base + (now - clock.startedAt) / 1000));
  /* the countdown — derived from the same drift-proof clock, so a
     background tab or a reload can never buy the paper extra time */
  const remaining = limitSec != null ? Math.max(0, limitSec - seconds) : null;
  const bodyRef = useRef<HTMLDivElement>(null);
  /* one ledger row per attempt-cycle — "back to questions" then finishing
     again must not double-log; retake() re-arms it */
  const loggedRef = useRef(false);

  /* scroll lock (the timer below stops ticking on the results view) */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (finished) return;
    const t = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(t);
  }, [finished]);

  /* draft autosave — debounced inside saveExamDraft, flushed on close/finish */
  useEffect(() => {
    if (finished) return;
    if (draftHasWork(states as Record<string, unknown>)) {
      saveExamDraft(DRAFT_KEY, {
        idx,
        states: states as Record<string, unknown>,
        base: clock.base,
        startedAt: clock.startedAt,
      });
    }
  }, [states, idx, clock, finished, DRAFT_KEY]);

  /* the bell — a timed paper finishes itself when the clock runs out.
     Declared AFTER the autosave effect on purpose: on the commit where
     the bell fires, finish() flushes + clears the draft AFTER any
     autosave this render scheduled, so nothing can resurrect it. */
  useEffect(() => {
    if (limitSec == null || finished) return;
    if (seconds >= limitSec) finish();
  }, [seconds, limitSec, finished]);

  const closeWindow = useCallback(() => {
    flushExamDraft(); // the attempt is kept — reopening this window restores it
    onClose();
  }, [onClose]);

  /** freeze the clock, clear the draft, log the attempt, show the report */
  function finish() {
    flushExamDraft();
    clearExamDraft(DRAFT_KEY);
    onFinished?.(); // a finished sitting must not be resurrected by the durable record
    setClock({ base: seconds, startedAt: Date.now() });
    setFinished(true);
    if (!loggedRef.current) {
      loggedRef.current = true;
      /* one row per subject: single-shelf windows log exactly one row
         (subject = theme.key, unchanged behaviour); mixed review sessions
         split into per-shelf rows so each shelf's accuracy stays true */
      const groups = new Map<string, { c: number; t: number }>();
      for (const qq of qs) {
        const s = states[qq.id]?.status;
        if (s !== "correct" && s !== "wrong") continue;
        const subj = qq.subject ?? theme.key;
        const g = groups.get(subj) ?? { c: 0, t: 0 };
        g.t += 1;
        if (s === "correct") g.c += 1;
        groups.set(subj, g);
      }
      const answered = groups.size > 0;
      const rows: { subject: string; correct: number; total: number }[] = answered
        ? [...groups.entries()].map(([subject, g]) => ({ subject, correct: g.c, total: g.t }))
        : [{ subject: theme.key, correct: score.correct, total: score.total }];
      for (const r of rows) {
        logAttempt({
          subject: r.subject,
          group: draftId,
          title: bank.title,
          correct: r.correct,
          total: r.total,
          pct: Math.round((r.correct / Math.max(1, r.total)) * 100),
          seconds,
        });
      }
    }
  }

  const q = qs[idx];
  const st = states[q.id];

  /* keyboard flow — ←/→ move, keys 1–4 answer the MCQ on stage,
     ↵ advances (next question, or the report on the last one).
     Typing surfaces keep their keys: textareas, the ⌘K search
     input, and focused buttons (where ↵ already means "press"). */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target;
      const inTextarea = t instanceof HTMLTextAreaElement;
      if (e.key === "Escape" && !inTextarea) closeWindow();
      if (finished || inTextarea || e.isComposing || e.metaKey || e.ctrlKey || e.altKey) return;
      if (t instanceof HTMLInputElement) return; // palette search etc.
      if (e.key === "ArrowRight") {
        setIdx((i) => Math.min(i + 1, qs.length - 1));
      } else if (e.key === "ArrowLeft") {
        setIdx((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        if (e.repeat) return;
        if (t instanceof HTMLButtonElement || t instanceof HTMLAnchorElement || t instanceof HTMLSelectElement) return;
        if (idx < qs.length - 1) go(idx + 1);
        else finish();
      } else if (!e.repeat) {
        // keys 1–4 pick an option — same contract as clicking the row
        const n = Number(e.key);
        if (!Number.isInteger(n) || n < 1 || n > 4) return;
        if (q.type !== "mcq" || st.status === "correct" || st.status === "wrong") return;
        if (n <= (q.options?.length ?? 0)) chooseMCQ(n - 1);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [finished, closeWindow, qs.length, idx, q, st]);

  const patch = (id: string, p: Partial<QState>) =>
    setStates((prev) => ({ ...prev, [id]: { ...prev[id], ...p } }));

  /* scoring — byType rows follow the theme's declared type order */
  const typeKeys = useMemo(() => Object.keys(theme.typeMeta), [theme]);
  const score = useMemo(() => {
    let correct = 0;
    let wrong = 0;
    let answered = 0;
    const byType: Record<string, { c: number; t: number }> = {};
    for (const t of typeKeys) byType[t] = { c: 0, t: 0 };
    for (const qq of qs) {
      const row = (byType[qq.type] ??= { c: 0, t: 0 });
      row.t += 1;
      const s = states[qq.id]?.status ?? "unattempted";
      if (s === "correct" || s === "wrong") answered += 1;
      if (s === "correct") {
        correct += 1;
        row.c += 1;
      }
      if (s === "wrong") wrong += 1;
    }
    return { correct, wrong, answered, byType, total: qs.length };
  }, [states, qs, typeKeys]);

  const pct = Math.round((score.correct / score.total) * 100);
  const verdict =
    pct >= 85 ? theme.tiers.topper : pct >= 60 ? theme.tiers.solid : pct >= 35 ? theme.tiers.getting : theme.tiers.restart;

  function chooseMCQ(i: number) {
    if (st.status === "correct" || st.status === "wrong") return;
    const ok = i === q.answer;
    patch(q.id, {
      chosen: i,
      revealed: true,
      status: ok ? "correct" : "wrong",
    });
    // SM-2: first-try MCQ answers are trusted fully (5), misses reset the card (2)
    // — routed to the question's own shelf in mixed review sessions
    gradeQuestion(q.subject ?? theme.key, q.srcId ?? q.id, ok ? 5 : 2);
    if (!ok) fileMiss(q, q.subject ?? theme.key);
  }

  function selfCheck(ok: boolean) {
    patch(q.id, { status: ok ? "correct" : "wrong" });
    // SM-2: the model answer was visible — grade honestly but trust less
    gradeQuestion(q.subject ?? theme.key, q.srcId ?? q.id, ok ? 3 : 1);
    if (!ok) fileMiss(q, q.subject ?? theme.key);
  }

  function retake() {
    setStates(Object.fromEntries(qs.map((qq) => [qq.id, { status: "unattempted" as QStatus }])));
    setIdx(0);
    setClock({ base: 0, startedAt: Date.now() });
    setNow(Date.now());
    setFinished(false);
    loggedRef.current = false; // a retake is a new, honest attempt
    clearExamDraft(DRAFT_KEY);
    bodyRef.current?.scrollTo({ top: 0 });
  }

  function go(i: number) {
    setIdx(i);
    bodyRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ---------------- results view ---------------- */
  if (finished) {
    const mcqMeta = theme.typeMeta.mcq ?? Object.values(theme.typeMeta)[0];
    return (
      <ExamShell
        theme={theme}
        bank={bank}
        score={score}
        seconds={seconds}
        onClose={closeWindow}
        restoredCount={restored}
        onExit={() => setFinished(false)}
        scrollRef={bodyRef}
        remaining={remaining}
      >
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <div className="exam-result-card">
            <div className="exam-score-ring" style={{ borderColor: pct >= 60 ? "#8fae5d" : "#e0a45e" }}>
              <span className="exam-score-num">{pct}%</span>
              <span className="exam-score-sub">
                {score.correct} / {score.total}
              </span>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-[#2b1d10]">Result report</h3>
              <p className="mt-1 text-[.95rem] font-semibold" style={{ color: verdict.c }} role="status">
                {verdict.t}
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-[.72rem] font-bold">
                <span className="exam-chip" style={{ background: "#eef4dd", color: "#44621d" }}>✓ {score.correct} correct</span>
                <span className="exam-chip" style={{ background: "#fdecec", color: "#8c2f2f" }}>✗ {score.wrong} wrong</span>
                <span className="exam-chip" style={{ background: "#f3e8d2", color: "#6f5438" }}>• {score.total - score.answered} unattempted</span>
                <span className="exam-chip" style={{ background: mcqMeta.bg, color: mcqMeta.color }}>
                  <Timer className="mr-1 inline h-3 w-3" />
                  {fmt(seconds)}
                </span>
              </div>
            </div>
          </div>

          {/* per-type breakdown */}
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {typeKeys.map((t) => {
              const meta = theme.typeMeta[t];
              const d = score.byType[t];
              if (!meta || !d) return null;
              return (
                <div key={t} className="flex items-center justify-between rounded-xl border border-[#e8dcc0] bg-[#fffdf9] px-4 py-3">
                  <span className="text-[.8rem] font-bold" style={{ color: meta.color }}>
                    {meta.label}
                  </span>
                  <span className="text-[.8rem] font-extrabold text-[#2b1d10]">
                    {d.c} / {d.t}
                  </span>
                </div>
              );
            })}
          </div>

          {/* review the misses */}
          {score.correct < score.total ? (
            <div className="mt-6">
              <p className="exam-eyebrow">
                <Printer className="h-3.5 w-3.5" />
                Review &amp; rewrite these by hand
              </p>
              <div className="mt-3 grid gap-3">
                {qs.map((qq) => {
                  const s = states[qq.id]?.status ?? "unattempted";
                  if (s === "correct") return null;
                  const model =
                    qq.type === "mcq"
                      ? (qq.options?.[qq.answer ?? 0] ?? "")
                      : qq.answerText ?? qq.solution ?? "";
                  return (
                    <div key={qq.id} className="rounded-xl border border-[#e8dcc0] bg-[#fffdf9] p-4">
                      <p className="text-[.88rem] font-bold leading-snug text-[#2b1d10]">{qq.q}</p>
                      {qq.code ? <pre className="exam-code mt-2">{qq.code}</pre> : null}
                      <p className="mt-2 text-[.82rem] leading-relaxed" style={{ color: s === "wrong" ? "#8c2f2f" : "#6f5438" }}>
                        <strong>{s === "wrong" ? "Missed —" : "Unattempted —"}</strong>{" "}
                        <span className="whitespace-pre-wrap font-mono text-[.78rem] text-[#2f2013]">{model}</span>
                      </p>
                      {qq.explain ? <p className="mt-1 text-[.78rem] leading-relaxed text-[#6f5438]">{qq.explain}</p> : null}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <button type="button" onClick={retake} className="exam-btn exam-btn-primary">
              <RotateCcw className="h-4 w-4" />
              Retake this test
            </button>
            <button type="button" onClick={() => setFinished(false)} className="exam-btn">
              <ListChecks className="h-4 w-4" />
              Back to questions
            </button>
          </div>
        </motion.div>
      </ExamShell>
    );
  }

  /* ---------------- question view ---------------- */
  const meta = theme.typeMeta[q.type] ?? theme.typeMeta.mcq ?? Object.values(theme.typeMeta)[0];
  const mcqLocked = st.status === "correct" || st.status === "wrong";

  return (
    <ExamShell
      theme={theme}
      bank={bank}
      score={score}
      seconds={seconds}
      onClose={closeWindow}
      restoredCount={restored}
      onExit={() => finish()}
      scrollRef={bodyRef}
      remaining={remaining}
    >
      <motion.div key={q.id} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.22, ease: "easeOut" }}>
        {/* type chip + counter */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="exam-type-chip" style={{ color: meta.color, background: meta.bg }}>
            {meta.label}
          </span>
          <span className="text-[.72rem] font-extrabold uppercase tracking-[.16em] text-[#8a6d4f]">
            Question {idx + 1} of {qs.length}
          </span>
        </div>

        {/* question */}
        <h3 className="font-display mt-3 text-xl font-bold leading-snug text-[#2b1d10] md:text-[1.35rem]">{q.q}</h3>

        {q.code ? <pre className="exam-code mt-4">{q.code}</pre> : null}

        {/* answer area */}
        {q.type === "mcq" ? (
          <div className="mt-4 grid gap-2">
            {q.options?.map((opt, i) => {
              const isAnswer = i === q.answer;
              const chosen = st.chosen === i;
              let cls = "exam-opt";
              if (mcqLocked && isAnswer) cls += " exam-opt-correct";
              else if (mcqLocked && chosen) cls += " exam-opt-wrong";
              return (
                <button key={i} type="button" disabled={mcqLocked} onClick={() => chooseMCQ(i)} className={cls}>
                  <span className="exam-opt-letter">{String.fromCharCode(65 + i)}</span>
                  <span className="font-mono text-[.86rem]">{opt}</span>
                  {mcqLocked && isAnswer ? <Check className="ml-auto h-4 w-4" /> : null}
                </button>
              );
            })}
          </div>
        ) : (
          <div className="mt-4">
            <label htmlFor={`ta-${q.id}`} className="text-[.74rem] font-bold uppercase tracking-[.14em] text-[#8a6d4f]">
              {theme.paperLabel}
            </label>
            <textarea
              id={`ta-${q.id}`}
              value={st.typed ?? ""}
              onChange={(e) => patch(q.id, { typed: e.target.value })}
              spellCheck={false}
              rows={q.type === "short" ? 4 : 6}
              placeholder={q.type === "output" ? theme.outputPlaceholder : q.type === "code" ? "# write your program here…" : "your answer…"}
              className="exam-ta"
            />
            {!st.revealed ? (
              <button type="button" onClick={() => patch(q.id, { revealed: true })} className="exam-btn mt-2">
                <Eye className="h-4 w-4" />
                Reveal the model answer
              </button>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3"
                role="status"
              >
                <div className="exam-answer">
                  <p className="exam-eyebrow">
                    <GraduationCap className="h-3.5 w-3.5" />
                    Model answer
                  </p>
                  {q.solution ? <pre className="exam-code mt-2">{q.solution}</pre> : null}
                  {q.answerText ? (
                    <p className={`mt-2 whitespace-pre-wrap font-mono text-[.82rem] leading-relaxed text-[#2f2013] ${q.solution ? "text-[.78rem]" : ""}`}>
                      {q.answerText}
                    </p>
                  ) : null}
                  {q.explain ? <p className="mt-2 text-[.82rem] leading-relaxed text-[#6f5438]">{q.explain}</p> : null}
                </div>
                {st.status !== "correct" && st.status !== "wrong" ? (
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="text-[.74rem] font-bold uppercase tracking-[.12em] text-[#8a6d4f]">Self-check:</span>
                    <button type="button" onClick={() => selfCheck(true)} className="exam-btn" style={{ color: "#44621d" }}>
                      <Check className="h-4 w-4" /> I got it
                    </button>
                    <button type="button" onClick={() => selfCheck(false)} className="exam-btn" style={{ color: "#8c2f2f" }}>
                      <X className="h-4 w-4" /> Not yet
                    </button>
                  </div>
                ) : null}
              </motion.div>
            )}
          </div>
        )}

        {/* MCQ explanation */}
        {q.type === "mcq" && mcqLocked && q.explain ? (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="exam-answer mt-3" role="status">
            <p className="text-[.88rem] font-bold" style={{ color: st.status === "correct" ? "#44621d" : "#8c2f2f" }}>
              {st.status === "correct" ? "Correct." : "Not quite."}
            </p>
            <p className="mt-1 text-[.85rem] leading-relaxed text-[#2f2013]">{q.explain}</p>
          </motion.div>
        ) : null}

        {/* navigator */}
        <div className="exam-nav">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
            <p className="exam-eyebrow">
              <ListChecks className="h-3.5 w-3.5" />
              Jump to a question
            </p>
            <p className="hidden items-center gap-2.5 text-[.58rem] font-bold uppercase tracking-[.1em] text-[#8a6d4f] sm:flex" aria-hidden>
              <span>
                <kbd className="exam-kbd">1–4</kbd> answer
              </span>
              <span>
                <kbd className="exam-kbd">↵</kbd> next
              </span>
              <span>
                <kbd className="exam-kbd">←→</kbd> move
              </span>
            </p>
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {qs.map((qq, i) => {
              const s = states[qq.id]?.status ?? "unattempted";
              const cls =
                i === idx
                  ? "exam-dot exam-dot-current"
                  : s === "correct"
                  ? "exam-dot exam-dot-ok"
                  : s === "wrong"
                  ? "exam-dot exam-dot-bad"
                  : s === "revealed"
                  ? "exam-dot exam-dot-rev"
                  : "exam-dot";
              return (
                <button key={qq.id} type="button" onClick={() => go(i)} className={cls} aria-label={`Go to question ${i + 1}`}>
                  {i + 1}
                </button>
              );
            })}
          </div>
        </div>

        {/* prev / next */}
        <div className="mt-6 flex items-center justify-between pb-2">
          <button type="button" onClick={() => go(Math.max(0, idx - 1))} disabled={idx === 0} className="exam-btn">
            <ChevronLeft className="h-4 w-4" />
            Prev
          </button>
          {idx < qs.length - 1 ? (
            <button type="button" onClick={() => go(idx + 1)} className="exam-btn exam-btn-primary">
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          ) : (
            <button type="button" onClick={() => finish()} className="exam-btn exam-btn-primary">
              <Trophy className="h-4 w-4" />
              Finish &amp; see score
            </button>
          )}
        </div>
      </motion.div>
    </ExamShell>
  );
}

/* ---------------- shared shell (header + footer) ---------------- */
function ExamShell({
  theme,
  bank,
  score,
  seconds,
  children,
  onClose,
  onExit,
  scrollRef,
  restoredCount,
  remaining,
}: {
  theme: ExamTheme;
  bank: EngineBank;
  score: { correct: number; total: number; answered: number };
  seconds: number;
  children: React.ReactNode;
  onClose: () => void;
  onExit: () => void;
  scrollRef: React.RefObject<HTMLDivElement | null>;
  restoredCount?: number | null;
  /** minutes left on a timed paper — null/undefined = stopwatch mode */
  remaining?: number | null;
}) {
  const shellRef = useDialogA11y<HTMLDivElement>(true);
  return (
    <motion.div
      ref={shellRef}
      tabIndex={-1}
      initial={{ opacity: 0, scale: 0.99 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`fixed inset-0 z-[80] flex flex-col outline-none ${theme.rootClass ?? ""}`}
      style={{ background: theme.pageBg }}
      role="dialog"
      aria-modal="true"
      aria-label={`Test my knowledge — ${bank.title}`}
    >
      {/* header */}
      <div className="shrink-0 border-b border-black/20" style={{ background: theme.headerBg }}>
        <div className="mx-auto flex max-w-3xl flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3 sm:px-6">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl" style={{ background: theme.sigil }}>
            <PenLine className="h-4.5 w-4.5 text-white" />
          </span>
          <div className="min-w-0">
            <p className="text-[.95rem] font-black leading-tight" style={{ color: theme.titleOnDark }}>Test my knowledge — {bank.title}</p>
            <p className="text-[.68rem] leading-tight" style={{ color: theme.subOnDark }}>{bank.subtitle} · pen-paper practice</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <span
              className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[.06] px-2.5 py-1 text-[.62rem] font-extrabold uppercase tracking-[.12em]"
              style={
                remaining != null && remaining <= 60
                  ? { color: "#ffd9d0", background: "rgba(140,47,47,.5)", borderColor: "rgba(255,180,160,.35)" }
                  : { color: theme.chipOnDark }
              }
              title={remaining != null ? "Time left — the paper finishes itself at zero" : "Time spent"}
            >
              <Timer className="h-3 w-3" />
              {remaining != null ? `${fmt(remaining)} left` : fmt(seconds)}
            </span>
            <span className="rounded-full border border-white/15 bg-white/[.06] px-2.5 py-1 text-[.62rem] font-extrabold uppercase tracking-[.12em]" style={{ color: theme.chipOnDark }}>
              ✓ {score.correct}/{score.total}
            </span>
            {restoredCount ? (
              <span
                className="rounded-full border border-white/15 bg-white/[.06] px-2.5 py-1 text-[.62rem] font-extrabold uppercase tracking-[.12em]"
                style={{ color: theme.chipOnDark }}
                title="Saved attempt restored — this window keeps your work for the whole tab session"
              >
                ↺ restored
              </span>
            ) : null}
            <button type="button" onClick={onClose} aria-label="Close the exam window" className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/[.06] transition hover:bg-white/[.14]" style={{ color: theme.titleOnDark }}>
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* body */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">{children}</div>
      </div>

      {/* bottom bar */}
      <div className="shrink-0 border-t" style={{ borderColor: theme.footerBorder, background: theme.footerBg }}>
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
          <p className="hidden text-[.68rem] font-semibold text-[#8a6d4f] sm:block">
            {theme.footerNote}
          </p>
          <button type="button" onClick={onExit} className="exam-btn ml-auto">
            <Trophy className="h-4 w-4" />
            Finish &amp; see score
          </button>
        </div>
      </div>
    </motion.div>
  );
}
