"use client";

/* ============================================================
   QUICK DRILL — instant-feedback practice, one card at a time.

   The third way to practice, next to the exam windows (formal,
   timed, full banks) and spaced review (due cards only). A
   drill needs no schedule and no formality: it opens cold,
   deals a mixed handful from lib/drill.ts, and grades every
   answer the moment you give it.

     · MCQ        — tap an option, know instantly (SM-2: 5 / 2)
     · everything else — think, reveal the model answer, then
       self-check honestly (SM-2: 3 / 1, same contract as the
       exam engine's self-check)

   Each answer writes straight into the shelf's SM-2 schedule,
   and finishing appends one ledger row per shelf answered —
   so a drill counts toward the streak, the daily goal and the
   heatmap exactly like any other window. No timer, no drafts:
   a drill is quick by definition.

   Cross-shelf decks carry subject/srcId on every card (the
   same convention as mixed review sessions) so grades land on
   the right shelf's schedule.
   ============================================================ */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Check, Eye, GraduationCap, RotateCcw, Trophy, X, Zap } from "lucide-react";
import { buildDrill, deckSummary, reasonLabel, type DrillCard, type DrillSession } from "@/lib/drill";
import { gradeQuestion } from "@/lib/sm2";
import { logAttempt } from "@/lib/ledger";
import { captureMiss } from "@/lib/mistakes";
import { SUBJECTS } from "@/components/atlas/subjects";
import { useDialogA11y } from "./exam-runtime";

/* paper-styled labels per question type (drills are neutral — one deck, one look) */
const TYPE_LABEL: Record<string, string> = {
  mcq: "Pick an answer",
  output: "Write the output",
  short: "Recall the answer",
  code: "Write the code",
};

const REASON_STYLE: Record<DrillCard["reason"], { bg: string; color: string }> = {
  due: { bg: "#fdeecd", color: "#92400e" },
  shaky: { bg: "#fdeaea", color: "#8c2f2f" },
  new: { bg: "#eef4dd", color: "#44621d" },
  fill: { bg: "#f3e8d2", color: "#6f5438" },
};

interface CardGrade {
  status: "correct" | "wrong";
  chosen?: number;
}

export function DrillWindow({
  subject,
  onClose,
}: {
  /** subject id, or "all" for the whole atlas */
  subject: string;
  onClose: () => void;
}) {
  const [session, setSession] = useState<DrillSession | null>(null);
  const [failed, setFailed] = useState(false);
  const [idx, setIdx] = useState(0);
  const [graded, setGraded] = useState<Record<string, CardGrade>>({});
  /* reveal is separate from grading — peeking must never mark a card */
  const [revealed, setRevealed] = useState<Record<string, true>>({});
  const [finished, setFinished] = useState(false);
  const startedRef = useRef(Date.now());
  const loggedRef = useRef(false);

  const isAll = subject === "all";
  const meta = useMemo(() => SUBJECTS.find((s) => s.id === subject), [subject]);
  const label = isAll ? "the whole atlas" : meta?.short ?? subject;
  const shellRef = useDialogA11y<HTMLDivElement>(true);
  /* deal a fresh deck */
  const deal = useCallback(() => {
    let alive = true;
    setSession(null);
    setFailed(false);
    setIdx(0);
    setGraded({});
    setRevealed({});
    setFinished(false);
    startedRef.current = Date.now();
    loggedRef.current = false;
    void buildDrill(subject)
      .then((s) => {
        if (alive) setSession(s);
      })
      .catch(() => {
        if (alive) setFailed(true);
      });
    return () => {
      alive = false;
    };
  }, [subject]);

  useEffect(() => deal(), [deal]);

  /* scroll lock */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const card: DrillCard | undefined = session?.cards[idx];
  const grade: CardGrade | undefined = card ? graded[card.id] : undefined;
  const correctCount = useMemo(() => Object.values(graded).filter((g) => g.status === "correct").length, [graded]);
  const answeredCount = Object.keys(graded).length;

  const answerMCQ = useCallback(
    (i: number) => {
      if (!card || graded[card.id]) return;
      const ok = i === card.answer;
      setGraded((prev) => ({ ...prev, [card.id]: { status: ok ? "correct" : "wrong", chosen: i } }));
      // first-try MCQ answers are trusted fully (5); misses reset the card (2)
      gradeQuestion(card.subject ?? subject, card.srcId ?? card.id, ok ? 5 : 2);
      if (!ok)
        captureMiss(card.subject ?? subject, card.srcId ?? card.id, {
          q: card.q,
          options: card.options,
          answer: typeof card.answer === "number" && card.options ? (card.options[card.answer] ?? "") : (card.answerText ?? card.solution ?? ""),
        });
    },
    [card, graded, subject]
  );

  const reveal = useCallback(() => {
    if (!card) return;
    setRevealed((prev) => (prev[card.id] ? prev : { ...prev, [card.id]: true }));
  }, [card]);

  const selfCheck = useCallback(
    (ok: boolean) => {
      if (!card || graded[card.id]) return;
      setGraded((prev) => ({ ...prev, [card.id]: { status: ok ? "correct" : "wrong" } }));
      // the model answer was visible — grade honestly but trust less
      gradeQuestion(card.subject ?? subject, card.srcId ?? card.id, ok ? 3 : 1);
      if (!ok)
        captureMiss(card.subject ?? subject, card.srcId ?? card.id, {
          q: card.q,
          options: card.options,
          answer: typeof card.answer === "number" && card.options ? (card.options[card.answer] ?? "") : (card.answerText ?? card.solution ?? ""),
        });
    },
    [card, graded, subject]
  );

  const finish = useCallback(() => {
    setFinished((f) => {
      if (f || loggedRef.current) return f;
      loggedRef.current = true;
      const seconds = Math.max(0, Math.round((Date.now() - startedRef.current) / 1000));
      const cards = session?.cards ?? [];
      const groups = new Map<string, { c: number; t: number }>();
      for (const c of cards) {
        const g = graded[c.id];
        if (!g) continue;
        const subj = c.subject ?? subject;
        const row = groups.get(subj) ?? { c: 0, t: 0 };
        row.t += 1;
        if (g.status === "correct") row.c += 1;
        groups.set(subj, row);
      }
      for (const [subj, row] of groups) {
        logAttempt({
          subject: subj,
          group: "drill",
          title: isAll ? "Quick drill — the whole atlas" : `Quick drill — ${meta?.short ?? subject}`,
          correct: row.c,
          total: row.t,
          pct: Math.round((row.c / Math.max(1, row.t)) * 100),
          seconds,
        });
      }
      return true;
    });
  }, [graded, session, subject, isAll, meta]);

  const advance = useCallback(() => {
    if (!session) return;
    if (idx < session.cards.length - 1) setIdx(idx + 1);
    else finish();
  }, [session, idx, finish]);

  /* keyboard flow — 1–4 answer an MCQ, ↵ reveals / advances / finishes,
     Escape closes. Focused buttons keep their own Enter ("press"). */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target;
      if (e.key === "Escape" && !(t instanceof HTMLTextAreaElement)) {
        onClose();
        return;
      }
      if (finished || !card || e.isComposing || e.metaKey || e.ctrlKey || e.altKey) return;
      if (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) return;
      if (t instanceof HTMLButtonElement || t instanceof HTMLAnchorElement || t instanceof HTMLSelectElement) return;
      if (e.key === "Enter") {
        if (e.repeat) return;
        const isMcq = card.type === "mcq";
        const isGraded = Boolean(graded[card.id]);
        if (!isMcq && !isGraded) {
          reveal();
        } else if (isGraded) {
          advance();
        }
        return;
      }
      if (e.repeat) return;
      const n = Number(e.key);
      if (!Number.isInteger(n) || n < 1 || n > 4) return;
      if (card.type !== "mcq" || graded[card.id]) return;
      if (n <= (card.options?.length ?? 0)) answerMCQ(n - 1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [finished, card, graded, answerMCQ, reveal, advance, onClose]);

  /* ---------------- non-deck states ---------------- */

  if (failed) {
    return (
      <DrillShell label={label} onClose={onClose} shellRef={shellRef}>
        <p className="text-[.9rem] font-semibold text-[#8c2f2f]">
          The drill could not load its question bank. Check the connection and try again.
        </p>
      </DrillShell>
    );
  }

  if (!session) {
    return (
      <DrillShell label={label} onClose={onClose} shellRef={shellRef}>
        <div className="flex flex-col items-center gap-4 py-10">
          <span aria-hidden className="h-8 w-8 animate-spin rounded-full border-2 border-[#e0cdb0] border-t-[#b45309]" />
          <p className="text-[.7rem] font-black uppercase tracking-[.22em] text-[#8a6d4f]">Shuffling the deck…</p>
        </div>
      </DrillShell>
    );
  }

  if (session.cards.length === 0) {
    return (
      <DrillShell label={label} onClose={onClose} shellRef={shellRef}>
        <div className="py-6 text-center">
          <Zap className="mx-auto h-8 w-8 text-[#b45309]" />
          <h3 className="font-display mt-3 text-xl font-bold text-[#2b1d10]">Nothing to drill — the banks are empty.</h3>
          <button type="button" onClick={onClose} className="exam-btn exam-btn-primary mt-5">
            Back
          </button>
        </div>
      </DrillShell>
    );
  }

  /* ---------------- results view ---------------- */

  if (finished) {
    const total = session.cards.length;
    const pct = Math.round((correctCount / Math.max(1, answeredCount)) * 100);
    const rows = new Map<string, { c: number; t: number }>();
    for (const c of session.cards) {
      const g = graded[c.id];
      if (!g) continue;
      const subj = c.subject ?? subject;
      const row = rows.get(subj) ?? { c: 0, t: 0 };
      row.t += 1;
      if (g.status === "correct") row.c += 1;
      rows.set(subj, row);
    }
    return (
      <DrillShell label={label} onClose={onClose} shellRef={shellRef}>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <div className="exam-result-card">
            <div className="exam-score-ring" style={{ borderColor: pct >= 60 ? "#8fae5d" : "#e0a45e" }}>
              <span className="exam-score-num">{answeredCount === 0 ? "—" : `${pct}%`}</span>
              <span className="exam-score-sub">
                {correctCount} / {answeredCount || total}
              </span>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-[#2b1d10]">Drill report</h3>
              <p className="mt-1 text-[.95rem] font-semibold" style={{ color: pct >= 60 ? "#44621d" : "#8a4508" }} role="status">
                {answeredCount === 0
                  ? "No answers given — the deck dealt itself out."
                  : pct >= 85
                    ? "Sharp — the schedule felt that."
                    : pct >= 60
                      ? "Solid work — the misses will come back around."
                      : "Planted — every miss is now scheduled to return."}
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-[.72rem] font-bold">
                <span className="exam-chip" style={{ background: "#eef4dd", color: "#44621d" }}>✓ {correctCount} got it</span>
                <span className="exam-chip" style={{ background: "#fdecec", color: "#8c2f2f" }}>✗ {answeredCount - correctCount} missed</span>
                <span className="exam-chip" style={{ background: "#f3e8d2", color: "#6f5438" }}>{deckSummary(session.counts)}</span>
              </div>
            </div>
          </div>

          {/* per-shelf split (cross-shelf decks) */}
          {rows.size > 1 ? (
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {[...rows.entries()].map(([sid, row]) => {
                const s = SUBJECTS.find((x) => x.id === sid);
                return (
                  <div key={sid} className="flex items-center justify-between rounded-xl border border-[#e8dcc0] bg-[#fffdf9] px-4 py-3">
                    <span className="flex items-center gap-2 text-[.8rem] font-bold" style={{ color: s?.accent ?? "#6f5438" }}>
                      {s ? <s.icon className="h-3.5 w-3.5" /> : null}
                      {s?.short ?? sid}
                    </span>
                    <span className="text-[.8rem] font-extrabold text-[#2b1d10]">
                      {row.c} / {row.t}
                    </span>
                  </div>
                );
              })}
            </div>
          ) : null}

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <button type="button" onClick={deal} className="exam-btn exam-btn-primary">
              <RotateCcw className="h-4 w-4" />
              Deal another dozen
            </button>
            <button type="button" onClick={onClose} className="exam-btn">
              Done
            </button>
          </div>
        </motion.div>
      </DrillShell>
    );
  }

  /* ---------------- card view ---------------- */

  const typeLabel = TYPE_LABEL[card!.type] ?? "Answer";
  const reason = REASON_STYLE[card!.reason];
  const cardSubject = isAll ? SUBJECTS.find((s) => s.id === card!.subject) : undefined;
  const isMcq = card!.type === "mcq";
  const isGraded = Boolean(grade);
  const isRevealed = Boolean(revealed[card!.id]);
  const last = idx === session.cards.length - 1;

  return (
    <DrillShell label={label} onClose={onClose} shellRef={shellRef} counter={`${idx + 1} / ${session.cards.length}`} correct={correctCount}>
      <motion.div key={card!.id} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.22, ease: "easeOut" }}>
        {/* tags: type · reason · shelf */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="exam-type-chip" style={{ color: "#92400e", background: "#fdeecd" }}>
            {typeLabel}
          </span>
          <span className="rounded-full px-2.5 py-1 text-[.62rem] font-extrabold uppercase tracking-[.12em]" style={{ background: reason.bg, color: reason.color }}>
            {reasonLabel(card!.reason)}
          </span>
          {cardSubject ? (
            <span
              className="rounded-full px-2.5 py-1 text-[.62rem] font-extrabold uppercase tracking-[.12em]"
              style={{ background: `${cardSubject.accent}1a`, color: cardSubject.accent }}
            >
              {cardSubject.short}
            </span>
          ) : null}
          <span className="text-[.72rem] font-extrabold uppercase tracking-[.16em] text-[#8a6d4f]">
            Card {idx + 1} of {session.cards.length}
          </span>
        </div>

        {/* question */}
        <h3 className="font-display mt-3 text-xl font-bold leading-snug text-[#2b1d10] md:text-[1.35rem]">{card!.q}</h3>

        {card!.code ? <pre className="exam-code mt-4">{card!.code}</pre> : null}

        {/* answer area */}
        {isMcq ? (
          <div className="mt-4 grid gap-2">
            {card!.options?.map((opt, i) => {
              const isAnswer = i === card!.answer;
              const chosen = grade?.chosen === i;
              let cls = "exam-opt";
              if (isGraded && isAnswer) cls += " exam-opt-correct";
              else if (isGraded && chosen) cls += " exam-opt-wrong";
              return (
                <button key={i} type="button" disabled={isGraded} onClick={() => answerMCQ(i)} className={cls}>
                  <span className="exam-opt-letter">{String.fromCharCode(65 + i)}</span>
                  <span className="font-mono text-[.86rem]">{opt}</span>
                  {isGraded && isAnswer ? <Check className="ml-auto h-4 w-4" /> : null}
                </button>
              );
            })}
          </div>
        ) : !isRevealed ? (
          <div className="mt-4">
            <button type="button" onClick={reveal} className="exam-btn">
              <Eye className="h-4 w-4" />
              Show the model answer
            </button>
            <p className="mt-2 text-[.78rem] leading-relaxed text-[#8a6d4f]">
              Say the answer out loud or scribble it — then check yourself honestly.
            </p>
          </div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-3" role="status">
            <div className="exam-answer">
              <p className="exam-eyebrow">
                <GraduationCap className="h-3.5 w-3.5" />
                Model answer
              </p>
              {card!.solution ? <pre className="exam-code mt-2">{card!.solution}</pre> : null}
              {card!.answerText ? (
                <p className={`mt-2 whitespace-pre-wrap font-mono leading-relaxed text-[#2f2013] ${card!.solution ? "text-[.78rem]" : "text-[.82rem]"}`}>
                  {card!.answerText}
                </p>
              ) : null}
              {card!.explain ? <p className="mt-2 text-[.82rem] leading-relaxed text-[#6f5438]">{card!.explain}</p> : null}
            </div>
            {!isGraded ? (
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

        {/* instant verdict for MCQs */}
        {isMcq && isGraded && card!.explain ? (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="exam-answer mt-3" role="status">
            <p className="text-[.88rem] font-bold" style={{ color: grade!.status === "correct" ? "#44621d" : "#8c2f2f" }}>
              {grade!.status === "correct" ? "Correct." : "Not quite."}
            </p>
            <p className="mt-1 text-[.85rem] leading-relaxed text-[#2f2013]">{card!.explain}</p>
          </motion.div>
        ) : null}

        {/* deck ribbon — read-only progress (no jumping back in a drill) */}
        <div className="exam-nav">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
            <p className="exam-eyebrow">
              <Zap className="h-3.5 w-3.5" />
              {deckSummary(session.counts)} — {answeredCount} graded
            </p>
            <p className="hidden items-center gap-2.5 text-[.58rem] font-bold uppercase tracking-[.1em] text-[#8a6d4f] sm:flex" aria-hidden>
              {isMcq ? (
                <span>
                  <kbd className="exam-kbd">1–4</kbd> answer
                </span>
              ) : null}
              <span>
                <kbd className="exam-kbd">↵</kbd> {isMcq ? "next" : "reveal"}
              </span>
              <span>
                <kbd className="exam-kbd">esc</kbd> close
              </span>
            </p>
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5" role="img" aria-label={`Deck progress: ${answeredCount} of ${session.cards.length} graded`}>
            {session.cards.map((c, i) => {
              const g = graded[c.id];
              const cls =
                i === idx
                  ? "exam-dot exam-dot-current"
                  : g?.status === "correct"
                    ? "exam-dot exam-dot-ok"
                    : g?.status === "wrong"
                      ? "exam-dot exam-dot-bad"
                      : "exam-dot";
              return <span key={c.id} className={cls} aria-hidden>{i + 1}</span>;
            })}
          </div>
        </div>

        {/* next / finish — only after grading the card on stage */}
        <div className="mt-6 flex items-center justify-end pb-2">
          {!isGraded ? (
            <p className="mr-auto text-[.78rem] font-semibold text-[#8a6d4f]">
              {isMcq ? "Pick an answer to continue." : "Reveal, then self-check to continue."}
            </p>
          ) : null}
          <button type="button" onClick={advance} disabled={!isGraded} className="exam-btn exam-btn-primary">
            {last ? (
              <>
                <Trophy className="h-4 w-4" />
                Finish the drill
              </>
            ) : (
              <>
                Next card
                <Zap className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </motion.div>
    </DrillShell>
  );
}

/* ---------------- shared shell ---------------- */

function DrillShell({
  label,
  counter,
  correct,
  onClose,
  shellRef,
  children,
}: {
  label: string;
  counter?: string;
  correct?: number;
  onClose: () => void;
  shellRef: React.RefObject<HTMLDivElement | null>;
  children: React.ReactNode;
}) {
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
      aria-label={`Quick drill — ${label}`}
    >
      <div className="shrink-0 border-b border-black/20 bg-[linear-gradient(160deg,#2b1b10,#402818)]">
        <div className="mx-auto flex max-w-3xl items-center gap-x-4 px-4 py-3 sm:px-6">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#ea580c,#c2410c)]">
            <Zap className="h-4 w-4 text-white" />
          </span>
          <p className="text-[.95rem] font-black leading-tight text-[#ffe9c9]">Quick drill — {label}</p>
          <div className="ml-auto flex items-center gap-2">
            {counter ? (
              <span className="rounded-full border border-white/15 bg-white/[.06] px-2.5 py-1 text-[.62rem] font-extrabold uppercase tracking-[.12em] text-[#ffe9c9]">
                {counter}
              </span>
            ) : null}
            {typeof correct === "number" ? (
              <span className="rounded-full border border-white/15 bg-white/[.06] px-2.5 py-1 text-[.62rem] font-extrabold uppercase tracking-[.12em] text-[#ffe9c9]">
                ✓ {correct}
              </span>
            ) : null}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close the drill"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/[.06] text-[#ffe9c9] transition hover:bg-white/[.14]"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-start justify-center overflow-y-auto">
        <div className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6">{children}</div>
      </div>
    </motion.div>
  );
}
