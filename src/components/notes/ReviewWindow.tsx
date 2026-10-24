"use client";

/* ============================================================
   SPACED REVIEW — the SM-2 session window.

   Pulls every due question for one subject out of the local
   schedule (see lib/sm2.ts), pours them into a synthetic bank,
   and runs the one shared ExamEngine — so review sessions look
   and behave exactly like exam windows: same themes, same
   draft safety, same results report.

   The subject's question bank is dynamically imported here, so
   the ledger chunk stays light until a review actually starts.
   ============================================================ */

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Sparkles, X } from "lucide-react";
import { ExamEngine, type EngineBank, type EngineQuestion } from "./ExamEngine";
import { EXAM_THEMES } from "./exam-themes";
import { dueIds, type Sm2Card, loadSm2 } from "@/lib/sm2";
import { SUBJECTS } from "@/components/atlas/subjects";

/** each shelf's bank map, one dynamic chunk per subject */
const BANK_LOADERS: Record<
  string,
  () => Promise<Record<string, { title: string; subtitle: string; questions: EngineQuestion[] }>>
> = {
  foc: () => import("./questions").then((m) => m.EXAM_BANKS),
  atb: () => import("../atb/questions").then((m) => m.ATB_EXAM_BANKS),
  fa: () => import("../fa/questions").then((m) => m.FA_EXAM_BANKS),
  ebh: () => import("../ebh/questions").then((m) => m.EBH_EXAM_BANKS),
  stm: () => import("../stm/questions").then((m) => m.STM_EXAM_BANKS),
};

const MAX_REVIEW_CARDS = 20;

export function ReviewWindow({ subject, onClose }: { subject: string; onClose: () => void }) {
  const [bank, setBank] = useState<EngineBank | null>(null);
  const [failed, setFailed] = useState(false);

  const meta = useMemo(() => SUBJECTS.find((s) => s.id === subject), [subject]);
  const theme = EXAM_THEMES[subject];

  /* day-scoped draft id — a review session keeps its work for the day */
  const draftId = useMemo(() => {
    const d = new Date();
    const m = `${d.getMonth() + 1}`.padStart(2, "0");
    const day = `${d.getDate()}`.padStart(2, "0");
    return `review-${d.getFullYear()}-${m}-${day}`;
  }, []);

  useEffect(() => {
    let alive = true;
    const load = async () => {
      try {
        const loader = BANK_LOADERS[subject];
        const bankMap = loader ? await loader() : {};
        const dueMap = new Map<string, Sm2Card>(
          Object.entries(loadSm2()[subject] ?? {}).filter(([, c]) => c.due <= Date.now())
        );
        const due = new Set(dueIds(subject));
        const picked: EngineQuestion[] = [];
        for (const group of Object.values(bankMap)) {
          for (const q of group.questions) {
            if (due.has(q.id)) picked.push(q);
          }
        }
        // most overdue first, capped per session
        picked.sort(
          (a, b) => (dueMap.get(a.id)?.due ?? 0) - (dueMap.get(b.id)?.due ?? 0)
        );
        if (!alive) return;
        setBank(
          picked.length > 0
            ? {
                title: meta?.title ?? subject,
                subtitle: `Spaced review — ${Math.min(picked.length, MAX_REVIEW_CARDS)} of ${picked.length} due card${picked.length === 1 ? "" : "s"}`,
                questions: picked.slice(0, MAX_REVIEW_CARDS),
              }
            : { title: meta?.title ?? subject, subtitle: "Spaced review", questions: [] }
        );
      } catch {
        if (alive) setFailed(true);
      }
    };
    void load();
    return () => {
      alive = false;
    };
  }, [subject, meta]);

  if (failed) {
    return (
      <SimpleShell title="Review" onClose={onClose}>
        <p className="text-[.9rem] font-semibold text-[#8c2f2f]">
          The review session could not load its question bank. Check the connection and try again.
        </p>
      </SimpleShell>
    );
  }

  if (!bank) {
    return (
      <SimpleShell title="Review" onClose={onClose}>
        <div className="flex flex-col items-center gap-4 py-10">
          <span aria-hidden className="h-8 w-8 animate-spin rounded-full border-2 border-[#e0cdb0] border-t-[#b45309]" />
          <p className="text-[.7rem] font-black uppercase tracking-[.22em] text-[#8a6d4f]">
            Gathering your due cards…
          </p>
        </div>
      </SimpleShell>
    );
  }

  if (bank.questions.length === 0) {
    return (
      <SimpleShell title="Review" onClose={onClose}>
        <div className="py-6 text-center">
          <Sparkles className="mx-auto h-8 w-8 text-[#8fae5d]" />
          <h3 className="font-display mt-3 text-xl font-bold text-[#2b1d10]">Nothing is due — the schedule is clear.</h3>
          <p className="mx-auto mt-2 max-w-md text-[.88rem] leading-relaxed text-[#6f5438]">
            Every card you have graded returns on its own interval. Take an exam window to seed new cards, or come
            back when the ledger says cards are due.
          </p>
          <button type="button" onClick={onClose} className="exam-btn exam-btn-primary mt-5">
            Back
          </button>
        </div>
      </SimpleShell>
    );
  }

  return <ExamEngine theme={theme} bank={bank} draftId={draftId} onClose={onClose} />;
}

/* minimal paper shell for the load / empty / error states */
function SimpleShell({ title, onClose, children }: { title: string; onClose: () => void; children: ReactNode }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.99 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="fixed inset-0 z-[80] flex flex-col bg-[linear-gradient(180deg,#f7eedf_0%,#f3e7d3_100%)] outline-none"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      tabIndex={-1}
    >
      <div className="shrink-0 border-b border-black/20 bg-[linear-gradient(160deg,#2b1b10,#402818)]">
        <div className="mx-auto flex max-w-3xl items-center gap-x-4 px-4 py-3 sm:px-6">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#ea580c,#c2410c)]">
            <Sparkles className="h-4 w-4 text-white" />
          </span>
          <p className="text-[.95rem] font-black leading-tight text-[#ffe9c9]">{title}</p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close the review window"
            className="ml-auto flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/[.06] text-[#ffe9c9] transition hover:bg-white/[.14]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="flex flex-1 items-start justify-center overflow-y-auto">
        <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">{children}</div>
      </div>
    </motion.div>
  );
}
