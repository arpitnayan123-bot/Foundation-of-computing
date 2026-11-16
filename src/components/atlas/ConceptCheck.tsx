"use client";

/* ============================================================
   TEAL CONCEPT CHECK — MIT's 20-minute rule, on the READ step.

   MIT's TEAL classroom doubled learning gains by never letting
   more than ~20 minutes pass without a concept question. The
   cockpit's READ move now carries the same insurance: one
   multiple-choice check, pulled from the very bank the shelf's
   exam windows use, seeded deterministically from the chapter
   id — the same chapter always checks the same concept until
   the plan rebuilds.

   Every answer grades straight into the shelf's SM-2 schedule
   (5 / 2, the exam contract) and a miss files itself into the
   Mistake Ledger (错题本) automatically — the flywheel spins.
   ============================================================ */

import { useEffect, useState } from "react";
import { CircleHelp, Check, X } from "lucide-react";
import { gradeQuestion } from "@/lib/sm2";
import { captureMiss } from "@/lib/mistakes";
import type { EngineQuestion } from "@/components/notes/ExamEngine";

interface CheckQuestion {
  id: string;
  q: string;
  options: string[];
  answer: number;
  explain?: string;
}

/** deterministic 32-bit string hash → stable pick per chapter */
function hashOf(text: string): number {
  let h = 2166136261;
  for (let i = 0; i < text.length; i += 1) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

/* one dynamic chunk per shelf — the banks stay out of the
   cockpit's main bundle until a READ step asks for its check */
const BANK_LOADERS: Record<string, () => Promise<EngineQuestion[]>> = {
  foc: () =>
    import("@/components/notes/questions").then((m) => Object.values(m.EXAM_BANKS).flatMap((b) => b.questions)),
  atb: () =>
    import("@/components/atb/questions").then((m) => Object.values(m.ATB_EXAM_BANKS).flatMap((b) => b.questions)),
  fa: () => import("@/components/fa/questions").then((m) => Object.values(m.FA_EXAM_BANKS).flatMap((b) => b.questions)),
  ebh: () =>
    import("@/components/ebh/questions").then((m) => Object.values(m.EBH_EXAM_BANKS).flatMap((b) => b.questions)),
  stm: () =>
    import("@/components/stm/questions").then((m) => Object.values(m.STM_EXAM_BANKS).flatMap((b) => b.questions)),
  mktg: () =>
    import("@/components/mktg/questions").then((m) => Object.values(m.MKTG_EXAM_BANKS).flatMap((b) => b.questions)),
};

export function ConceptCheck({ subject, section, accent }: { subject: string; section: string; accent: string }) {
  const [question, setQuestion] = useState<CheckQuestion | null>(null);
  const [chosen, setChosen] = useState<number | null>(null);

  useEffect(() => {
    let alive = true;
    const loader = BANK_LOADERS[subject];
    if (!loader) return;
    loader()
      .then((questions) => {
        if (!alive) return;
        const mcqs = questions.filter(
          (q) => q.type === "mcq" && Array.isArray(q.options) && q.options.length > 1 && typeof q.answer === "number"
        );
        if (mcqs.length === 0) return;
        const pick = mcqs[hashOf(`${subject}:${section}`) % mcqs.length];
        setQuestion({
          id: pick.id,
          q: pick.q,
          options: (pick.options ?? []).slice(0, 4),
          answer: pick.answer ?? 0,
          explain: pick.explain,
        });
      })
      .catch(() => {
        /* the check is a bonus, never a blocker */
      });
    return () => {
      alive = false;
    };
  }, [subject, section]);

  if (!question) return null;

  const answered = chosen !== null;
  const correct = answered && chosen === question.answer;

  const pickOption = (i: number) => {
    if (answered) return;
    setChosen(i);
    const ok = i === question.answer;
    gradeQuestion(subject, question.id, ok ? 5 : 2);
    if (!ok) {
      captureMiss(subject, question.id, {
        q: question.q,
        options: question.options,
        answer: question.options[question.answer] ?? "",
      });
      try {
        window.dispatchEvent(new CustomEvent("atlas:mistakes-changed"));
      } catch {
        /* local store already updated */
      }
    }
  };

  return (
    <div
      className="mt-3 rounded-xl border p-3.5"
      style={{ borderColor: `${accent}33`, background: `${accent}0a` }}
      aria-label="Concept check"
    >
      <p className="flex items-center gap-1.5 font-mono text-[.56rem] font-bold uppercase tracking-[.18em]" style={{ color: accent }}>
        <CircleHelp className="h-3.5 w-3.5" aria-hidden />
        concept check · before you leave the page
      </p>
      <p className="mt-2 text-[.82rem] font-bold leading-snug text-[#f0e2c8]">{question.q}</p>
      <div className="mt-2.5 grid gap-1.5">
        {question.options.map((opt, i) => {
          const isPicked = chosen === i;
          const isAnswer = i === question.answer;
          const show = answered && (isPicked || isAnswer);
          return (
            <button
              key={i}
              type="button"
              disabled={answered}
              onClick={() => pickOption(i)}
              className="flex items-start gap-2 rounded-lg border px-3 py-2 text-left text-[.76rem] leading-snug transition disabled:cursor-default"
              style={
                show
                  ? isAnswer
                    ? { borderColor: "rgba(169,201,119,.55)", background: "rgba(169,201,119,.12)", color: "#d9efb9" }
                    : { borderColor: "rgba(228,103,74,.55)", background: "rgba(228,103,74,.12)", color: "#f3b8a8" }
                  : { borderColor: "rgba(255,255,255,.1)", color: "#e9d7bf" }
              }
            >
              <span className="mt-0.5 font-mono text-[.56rem] font-bold text-[#8d7b63]">{i + 1}</span>
              <span className="min-w-0 flex-1">{opt}</span>
              {show && isAnswer ? <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#a9c977]" aria-hidden /> : null}
              {show && isPicked && !isAnswer ? <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#e4674a]" aria-hidden /> : null}
            </button>
          );
        })}
      </div>
      {answered ? (
        <p className="mt-2.5 text-[.72rem] leading-relaxed text-[#a89a86]" role="status">
          {correct ? (
            <>
              <span className="font-mono font-bold uppercase tracking-[.14em] text-[#a9c977]">clean · </span>
              graded onto the schedule — this card comes back later and stronger.
            </>
          ) : (
            <>
              {question.explain ? (
                <>
                  <span className="font-mono font-bold uppercase tracking-[.14em] text-[#e4674a]">why · </span>
                  {question.explain}{" "}
                </>
              ) : null}
              <span className="font-mono font-bold uppercase tracking-[.14em] text-[#e4674a]">filed · </span>
              this miss is in the 错题本 now — the re-solve comes due tomorrow.
            </>
          )}
        </p>
      ) : null}
    </div>
  );
}
