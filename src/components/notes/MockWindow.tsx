"use client";

/* ============================================================
   MOCK EXAM — compose your own paper, then sit it.

   Stage 1 (compose): pick the shelves, the length, the clock
   and the question style. The blueprint is remembered
   (localStorage, via lib/mock.ts) so the composer opens the
   way you left it.

   Stage 2 (run): the composed paper goes straight into the one
   ExamEngine — same draft safety, same keyboard flow, same
   results report as every shelf window, plus a real countdown
   when the clock is set (the bell finishes the paper at zero).

   Resume: the composed paper's ids live in localStorage (durable —
   they survive reloads and closed tabs, then expire after a day or
   at the report). If the tab reloads mid-paper, reopening this
   window rebuilds the exact same paper and the engine's draft
   restores every answer and the honest clock. Finishing (or
   starting a fresh paper) clears that path.

   Ledger: the engine logs one row per shelf answered, group
   "mock", so mock sittings count toward the streak, the daily
   goal, the heatmap and the achievements exactly like exams.
   ============================================================ */

import { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Check,
  ChevronLeft,
  ClipboardList,
  Clock,
  FileText,
  Layers,
  Minus,
  Play,
  Plus,
  ScrollText,
  X,
  type LucideIcon,
} from "lucide-react";
import { ExamEngine, type EngineBank } from "./ExamEngine";
import { MOCK_EXAM_THEME } from "./exam-themes";
import { useDialogA11y, examDraftKey, clearExamDraft } from "./exam-runtime";
import { LIVE_SUBJECTS, type Subject } from "@/components/atlas/subjects";
import { QUESTION_COUNTS } from "@/lib/question-counts";
import {
  MOCK_CLOCKS,
  MOCK_LENGTHS,
  availableFor,
  buildMock,
  loadBlueprint,
  loadLiveSession,
  markLiveSessionFinished,
  rebuildMock,
  saveBlueprint,
  saveLiveSession,
  type MockBlueprint,
  type MockTypes,
} from "@/lib/mock";

const DRAFT_ID = "mock";
const DRAFT_KEY = examDraftKey(MOCK_EXAM_THEME.key, DRAFT_ID);

type Stage =
  | { kind: "compose" }
  | { kind: "loading" }
  | { kind: "run"; bank: EngineBank; minutes?: number }
  | { kind: "failed" };

export function MockWindow({ onClose }: { onClose: () => void }) {
  const [stage, setStage] = useState<Stage>({ kind: "compose" });
  const shellRef = useDialogA11y<HTMLDivElement>(true);

  /* resume check — run once at mount: a durable live paper
     (localStorage — it survives reloads AND closed tabs; see
     lib/mock.ts for the reconciliation rules) rebuilds the exact
     composition. When the engine draft carried work in this
     session, ExamEngine restores every answer and the honest
     clock on top; otherwise the same paper waits on a fresh one. */
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const live = loadLiveSession();
      if (!live || live.ids.length === 0) return;
      setStage({ kind: "loading" });
      rebuildMock(live.ids)
        .then((questions) => {
          if (questions.length > 0) {
            setStage({
              kind: "run",
              bank: { title: live.title, subtitle: live.subtitle, questions },
              minutes: live.minutes > 0 ? live.minutes : undefined,
            });
          } else {
            setStage({ kind: "compose" }); // the banks changed under the paper — compose anew
          }
        })
        .catch(() => setStage({ kind: "compose" }));
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  if (stage.kind === "run") {
    return (
      <ExamEngine
        theme={MOCK_EXAM_THEME}
        bank={stage.bank}
        draftId={DRAFT_ID}
        minutes={stage.minutes}
        onClose={onClose}
        onFinished={markLiveSessionFinished}
      />
    );
  }

  return (
    <MockShell onClose={onClose} shellRef={shellRef}>
      {stage.kind === "loading" ? (
        <div className="flex flex-col items-center gap-4 py-10">
          <span aria-hidden className="h-8 w-8 animate-spin rounded-full border-2 border-[#e0cdb0] border-t-[#b45309]" />
          <p className="text-[.7rem] font-black uppercase tracking-[.22em] text-[#8a6d4f]">Setting the paper…</p>
        </div>
      ) : stage.kind === "failed" ? (
        <div className="py-6 text-center">
          <AlertTriangle className="mx-auto h-8 w-8 text-[#8c2f2f]" />
          <h3 className="font-display mt-3 text-xl font-bold text-[#2b1d10]">The paper could not be set.</h3>
          <p className="mx-auto mt-2 max-w-md text-[.88rem] leading-relaxed text-[#6f5438]">
            The question banks failed to load. Check the connection and try again.
          </p>
          <button type="button" onClick={onClose} className="exam-btn exam-btn-primary mt-5">
            Back
          </button>
        </div>
      ) : (
        <Composer onStart={(bank, minutes) => setStage({ kind: "run", bank, minutes: minutes > 0 ? minutes : undefined })} />
      )}
    </MockShell>
  );
}

/* ---------------- stage 1 — the composer ---------------- */

function Composer({ onStart }: { onStart: (bank: EngineBank, minutes: number) => void }) {
  const [bp, setBp] = useState<MockBlueprint>(() => loadBlueprint());
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);

  const available = useMemo(() => availableFor(bp.shelves), [bp.shelves]);
  /* the ladder value the reader can actually have — a shelf switch
     snaps the length down honestly instead of over-promising */
  const maxLadder = useMemo(() => MOCK_LENGTHS.filter((n) => n <= Math.max(available, 5)), [available]);
  const total = Math.min(bp.total, maxLadder[maxLadder.length - 1] ?? 5);

  const patch = (p: Partial<MockBlueprint>) => setBp((cur) => ({ ...cur, ...p }));

  const toggleShelf = (sid: string) =>
    setBp((cur) => {
      const has = cur.shelves.includes(sid);
      const shelves = has ? cur.shelves.filter((s) => s !== sid) : [...cur.shelves, sid];
      return { ...cur, shelves: shelves.length > 0 ? shelves : cur.shelves };
    });

  const stepTotal = (dir: 1 | -1) =>
    setBp((cur) => {
      const i = maxLadder.findIndex((n) => n >= Math.min(cur.total, maxLadder[maxLadder.length - 1] ?? 5));
      const at = Math.max(0, Math.min(maxLadder.length - 1, (i === -1 ? 0 : i) + dir));
      return { ...cur, total: maxLadder[at] };
    });

  const stepClock = (dir: 1 | -1) =>
    setBp((cur) => {
      const i = MOCK_CLOCKS.indexOf(cur.minutes as (typeof MOCK_CLOCKS)[number]);
      const at = Math.max(0, Math.min(MOCK_CLOCKS.length - 1, (i === -1 ? 0 : i) + dir));
      return { ...cur, minutes: MOCK_CLOCKS[at] };
    });

  const start = useCallback(async () => {
    setBusy(true);
    setFailed(false);
    const plan: MockBlueprint = { ...bp, total };
    try {
      const paper = await buildMock(plan);
      /* a fresh paper starts with a clean slate — any stale draft from an
         abandoned composition must not bleed into it */
      clearExamDraft(DRAFT_KEY);
      saveBlueprint(plan);
      saveLiveSession({ ids: paper.ids, title: paper.bank.title, subtitle: paper.bank.subtitle, minutes: plan.minutes });
      onStart(paper.bank, plan.minutes);
    } catch {
      setFailed(true);
      setBusy(false);
    }
  }, [bp, total, onStart]);

  return (
    <div>
      <div className="rounded-2xl border border-[#e8dcc0] bg-[#fffdf9] p-5 sm:p-6">
        <p className="exam-eyebrow">
          <ClipboardList className="h-3.5 w-3.5" />
          Compose the paper
        </p>
        <h3 className="font-display mt-1 text-xl font-bold text-[#2b1d10]">Your rules — the clock is the examiner</h3>
        <p className="mt-1.5 text-[.85rem] leading-relaxed text-[#6f5438]">
          Questions come from the real banks, interleaved across the shelves you pick. Every answer grades into that
          shelf&apos;s schedule and the report splits per shelf — a mock sitting counts exactly like an exam.
        </p>

        {/* shelves */}
        <div className="mt-5">
          <p className="text-[.72rem] font-black uppercase tracking-[.16em] text-[#8a6d4f]">Shelves on the paper</p>
          <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Pick the shelves the mock draws from">
            {LIVE_SUBJECTS.map((s: Subject) => {
              const on = bp.shelves.includes(s.id);
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => toggleShelf(s.id)}
                  aria-pressed={on}
                  className="flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-[.72rem] font-extrabold transition"
                  style={
                    on
                      ? { borderColor: `${s.accent}88`, background: `${s.accent}1a`, color: "#2b1d10" }
                      : { borderColor: "#e0d2b8", background: "#fffdf9", color: "#8a6d4f" }
                  }
                >
                  <s.icon className="h-3.5 w-3.5" style={{ color: on ? s.accent : "#a08a68" }} />
                  {s.short}
                  {on ? <Check className="h-3 w-3" style={{ color: s.accent }} /> : null}
                </button>
              );
            })}
          </div>
          <p className="mt-2 font-mono text-[.62rem] uppercase tracking-[.14em] text-[#8a6d4f]">
            {available} question{available === 1 ? "" : "s"} available on {bp.shelves.length === 1 ? "this shelf" : "these shelves"}
          </p>
        </div>

        {/* length + clock */}
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <Stepper
            icon={FileText}
            label="Length"
            value={`${total} question${total === 1 ? "" : "s"}`}
            onDown={() => stepTotal(-1)}
            onUp={() => stepTotal(1)}
            downDisabled={total <= MOCK_LENGTHS[0]}
            upDisabled={total >= (maxLadder[maxLadder.length - 1] ?? 5)}
          />
          <Stepper
            icon={Clock}
            label="The clock"
            value={bp.minutes > 0 ? `${bp.minutes} minutes` : "untimed"}
            onDown={() => stepClock(-1)}
            onUp={() => stepClock(1)}
            downDisabled={bp.minutes <= MOCK_CLOCKS[0]}
            upDisabled={bp.minutes >= MOCK_CLOCKS[MOCK_CLOCKS.length - 1]}
          />
        </div>

        {/* question style */}
        <div className="mt-5">
          <p className="text-[.72rem] font-black uppercase tracking-[.16em] text-[#8a6d4f]">Question style</p>
          <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Pick which question styles may appear">
            {(
              [
                ["both", "Everything mixed"],
                ["mcq", "Multiple choice only"],
                ["written", "Written answers only"],
              ] as [MockTypes, string][]
            ).map(([value, label]) => {
              const on = bp.types === value;
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => patch({ types: value })}
                  aria-pressed={on}
                  className="rounded-full border px-3.5 py-2 text-[.72rem] font-extrabold transition"
                  style={
                    on
                      ? { borderColor: "#b4530988", background: "#f9e8d2", color: "#2b1d10" }
                      : { borderColor: "#e0d2b8", background: "#fffdf9", color: "#8a6d4f" }
                  }
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {failed ? (
          <p className="mt-4 rounded-xl border border-[#e4b8b8] bg-[#fdecec] px-4 py-3 text-[.82rem] font-semibold text-[#8c2f2f]" role="alert">
            The banks failed to load — check the connection and try again.
          </p>
        ) : null}

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button type="button" onClick={() => void start()} disabled={busy} className="exam-btn exam-btn-primary">
            <Play className="h-4 w-4" />
            {busy ? "Setting the paper…" : "Start the paper"}
          </button>
          <span className="font-mono text-[.62rem] uppercase tracking-[.14em] text-[#8a6d4f]">
            {bp.minutes > 0 ? `the bell finishes the paper at ${bp.minutes}:00` : "no bell — the stopwatch keeps the time"}
          </span>
        </div>
      </div>

      <p className="mt-4 flex items-start gap-2 px-1 text-[.78rem] leading-relaxed text-[#8a6d4f]">
        <Layers className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
        Mid-paper reload — even a closed tab? Reopen this window: the same paper comes back, with your answers whenever the session kept them.
      </p>
    </div>
  );
}

/* ---------------- a labelled − / value / + stepper ---------------- */

function Stepper({
  icon: Icon,
  label,
  value,
  onDown,
  onUp,
  downDisabled,
  upDisabled,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  onDown: () => void;
  onUp: () => void;
  downDisabled: boolean;
  upDisabled: boolean;
}) {
  return (
    <div className="rounded-xl border border-[#e8dcc0] bg-[#fffdf9] px-4 py-3">
      <p className="flex items-center gap-1.5 text-[.68rem] font-black uppercase tracking-[.16em] text-[#8a6d4f]">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </p>
      <div className="mt-2 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={onDown}
          disabled={downDisabled}
          aria-label={`Lower ${label.toLowerCase()}`}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#e0d2b8] bg-white text-[#6f5438] transition hover:bg-[#f6efe2] disabled:opacity-40"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="font-display text-[1.05rem] font-black text-[#2b1d10]">{value}</span>
        <button
          type="button"
          onClick={onUp}
          disabled={upDisabled}
          aria-label={`Raise ${label.toLowerCase()}`}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#e0d2b8] bg-white text-[#6f5438] transition hover:bg-[#f6efe2] disabled:opacity-40"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

/* ---------------- the paper shell for compose / loading / failed ---------------- */

function MockShell({
  children,
  onClose,
  shellRef,
}: {
  children: React.ReactNode;
  onClose: () => void;
  shellRef: React.RefObject<HTMLDivElement | null>;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  /* Escape closes the composer — same contract as the exam windows
     (the run stage replaces this shell and wires its own Escape) */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape" || e.isComposing || e.metaKey || e.ctrlKey || e.altKey) return;
      const t = e.target;
      if (t instanceof HTMLTextAreaElement || t instanceof HTMLInputElement) return;
      onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);
  return (
    <motion.div
      ref={shellRef}
      tabIndex={-1}
      initial={{ opacity: 0, scale: 0.99 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="fixed inset-0 z-[80] flex flex-col bg-[linear-gradient(180deg,#f7eedf_0%,#f3e7d3_100%)] outline-none"
      role="dialog"
      aria-modal="true"
      aria-label="Mock exam — compose your paper"
    >
      <div className="shrink-0 border-b border-black/20 bg-[linear-gradient(160deg,#1f1207,#3a2413)]">
        <div className="mx-auto flex max-w-3xl items-center gap-x-4 px-4 py-3 sm:px-6">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#fbbf24,#b45309)]">
            <ScrollText className="h-4 w-4 text-white" />
          </span>
          <div className="min-w-0">
            <p className="text-[.95rem] font-black leading-tight text-[#ffe9c9]">Mock exam</p>
            <p className="text-[.68rem] leading-tight text-[#c9a97e]">compose the paper · sit it under the clock</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close the mock exam window"
            className="ml-auto flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/[.06] text-[#ffe9c9] transition hover:bg-white/[.14]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="flex flex-1 items-start justify-center overflow-y-auto">
        <div className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 sm:py-10">{children}</div>
      </div>
      {/* a quiet way back from the composer — the engine has its own chrome */}
      <div className="shrink-0 border-t border-[#e5d3b6] bg-[rgba(250,243,230,0.9)]">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
          <p className="hidden text-[.68rem] font-semibold text-[#8a6d4f] sm:block">
            Nothing is logged until you sit the paper — composing is free.
          </p>
          <button type="button" onClick={onClose} className="exam-btn ml-auto">
            <ChevronLeft className="h-4 w-4" />
            Back to the ledger
          </button>
        </div>
      </div>
    </motion.div>
  );
}
