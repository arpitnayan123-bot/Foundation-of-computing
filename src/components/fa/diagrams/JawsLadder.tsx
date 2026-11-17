"use client";

/* ============================================================
   FA DIAGRAM 3 — the ₹73,000 → ₹69,700 reconciliation ladder
   (section cashflow-methods, L25).

   Jaws Photo Plus, indirect method. Each rung animates in with
   its delta, its running total and the reason the sign is what
   it is — but the learner PREDICTS the sign first. The classic
   failure (treating the payables decrease as an add-back) is
   reproduced on demand: flip the last rung wrong and the ladder
   shows exactly where 77,300 comes from, flagged as the L25
   print error, before landing on the corrected ₹69,700.

   Trap A resolution: the ladder runs on the L25 amounts with
   the ₹3,800 decrease DEDUCTED — the only combination that
   reaches the printed ₹69,700 — and the source discrepancy is
   footnoted, never silently fudged.
   ============================================================ */

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Banknote, Check, Equal, Minus, Plus, RotateCcw } from "lucide-react";
import { FA_RED, FaDiagramShell, FaSourceNote, fmtINR, useFaStatic } from "./kit";
import { JAWS_CORRECT_TOTAL, JAWS_RUNGS, JAWS_WRONG_AP_TOTAL, type JawsRung } from "./calcs";

export function FaJawsLadder() {
  const [nextIdx, setNextIdx] = useState(1); // rung 0 (net income) is always shown
  const [preds, setPreds] = useState<Partial<Record<JawsRung["key"], "+" | "-">>>({});
  const statik = useFaStatic();

  const revealed = (i: number) => statik || i < nextIdx;
  const asking = (i: number) => !statik && i === nextIdx;
  const complete = statik || nextIdx >= JAWS_RUNGS.length;

  // running total over revealed rungs, CORRECT signs only — it always lands on 69,700
  const running = JAWS_RUNGS.slice(0, statik ? JAWS_RUNGS.length : nextIdx).reduce((n, r) => {
    if (r.sign === "=") return n + r.amt;
    return r.sign === "+" ? n + r.amt : n - r.amt;
  }, 0);

  const predict = (key: JawsRung["key"], sign: "+" | "-") => {
    setPreds((p) => ({ ...p, [key]: sign }));
    setNextIdx((i) => Math.min(i + 1, JAWS_RUNGS.length));
  };

  const reset = () => {
    setNextIdx(1);
    setPreds({});
  };

  return (
    <FaDiagramShell
      icon={<Banknote className="h-4 w-4" style={{ color: "#047857" }} />}
      title="Jaws Photo Plus — the reconciliation ladder"
      sub="predict the sign before each rung reveals"
      footer={
        <FaSourceNote>
          <b>Source note.</b> L25 states a ₹3,800 decrease in accounts payable but adds it; L29 states ₹6,000 with a
          deduction. Neither reconciles to ₹69,700 as printed. The ladder above deducts the ₹3,800 decrease — the only
          combination that reaches ₹69,700.
        </FaSourceNote>
      }
    >
      <div className="px-4 py-5 sm:px-6">
        <ol className="grid gap-2" role="list" aria-label="The indirect-method reconciliation, rung by rung">
          {JAWS_RUNGS.map((r, i) => {
            const isStart = r.sign === "=";
            const isResult = i === JAWS_RUNGS.length - 1;
            const shown = revealed(i);
            const pred = preds[r.key];
            const wasWrong = pred !== undefined && !isStart && pred !== r.sign;
            const apFlip = r.key === "ap" && pred === "+";
            const before = JAWS_RUNGS.slice(0, i).reduce(
              (n, x) => (x.sign === "=" ? n + x.amt : x.sign === "+" ? n + x.amt : n - x.amt),
              0
            );
            return (
              <li
                key={r.key}
                role="listitem"
                aria-label={`Rung ${i}: ${r.label}, adjustment ${isStart ? "starting figure" : `${r.sign === "+" ? "add" : "deduct"} ₹${fmtINR(r.amt)}`}`}
                className={shown || asking(i) ? "" : "hidden"}
              >
                <AnimatePresence initial={false}>
                  <motion.div
                    initial={statik ? false : { opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={statik ? { duration: 0 } : { duration: 0.32 }}
                    className={`rounded-xl border px-4 py-2.5 ${
                      isResult
                        ? "border-[#059669] bg-[#ecfdf5]"
                        : isStart
                        ? "border-[#c7e5d6] bg-white"
                        : "border-[#e4f1ea] bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg font-mono text-[.9rem] font-black text-white"
                        style={{
                          background: isResult
                            ? "linear-gradient(135deg,#10b981,#047857)"
                            : isStart
                            ? "#5c7a6b"
                            : r.sign === "-"
                            ? FA_RED
                            : "#059669",
                        }}
                        aria-hidden
                      >
                        {isStart ? <Equal className="h-3.5 w-3.5" /> : r.sign === "+" ? <Plus className="h-3.5 w-3.5" /> : <Minus className="h-3.5 w-3.5" />}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[.86rem] font-extrabold text-[#3e2c1d]">{r.label}</span>
                        {shown ? (
                          <span className="block text-[.68rem] leading-snug text-muted-warm">{r.why}</span>
                        ) : null}
                      </span>
                      {shown ? (
                        <span className="text-right font-mono">
                          <span className={`block text-[.9rem] font-black ${isResult ? "text-[#065f46]" : "text-[#3e2c1d]"}`}>
                            {isStart ? `₹${fmtINR(r.amt)}` : `${r.sign === "+" ? "+" : "−"}₹${fmtINR(r.amt)}`}
                          </span>
                          <span className="block text-[.62rem] font-bold text-[#8a6b45]">running ₹{fmtINR(isResult ? JAWS_CORRECT_TOTAL : running)}</span>
                        </span>
                      ) : null}
                    </div>

                    {/* predict the sign — the reveal gate */}
                    {asking(i) ? (
                      <div className="mt-2.5 rounded-lg border border-[#e3c98f] bg-[#fbf4e4] px-3 py-2">
                        <p className="text-[.72rem] font-bold text-[#8a5a10]">
                          Your call — does this adjustment <b>add cash back</b> or <b>take cash out</b>?
                        </p>
                        <div className="mt-1.5 flex gap-2">
                          <button
                            type="button"
                            onClick={() => predict(r.key, "+")}
                            className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-[.74rem] font-extrabold text-white"
                            style={{ background: "#059669" }}
                            aria-label={`Predict: add ₹${fmtINR(r.amt)} back`}
                          >
                            <Plus className="h-3.5 w-3.5" /> Add it back
                          </button>
                          <button
                            type="button"
                            onClick={() => predict(r.key, "-")}
                            className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-[.74rem] font-extrabold text-white"
                            style={{ background: FA_RED }}
                            aria-label={`Predict: deduct ₹${fmtINR(r.amt)}`}
                          >
                            <Minus className="h-3.5 w-3.5" /> Take it out
                          </button>
                        </div>
                      </div>
                    ) : null}

                    {/* wrong prediction — specific correction, and the L25 reproduction on the AP rung */}
                    {shown && wasWrong ? (
                      <motion.div
                        initial={statik ? false : { opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={statik ? { duration: 0 } : { duration: 0.25 }}
                        className="mt-2 overflow-hidden rounded-lg border px-3 py-2 text-[.74rem] font-semibold leading-relaxed"
                        style={{ borderColor: "#e8a896", background: "#fbeae5", color: FA_RED }}
                      >
                        <span className="flex items-start gap-1.5">
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
                          <span>
                            You called it {pred === "+" ? "an add-back" : "a deduction"} — the correct sign is{" "}
                            <b>{r.sign === "+" ? "+" : "−"}</b>: {r.why.toLowerCase()}
                          </span>
                        </span>
                        {apFlip ? (
                          <span className="mt-1 block">
                            Flip it and the ladder reads 73,000 + 7,000 − 2,500 − 4,000{" "}
                            <b>+3,800 = ₹{fmtINR(JAWS_WRONG_AP_TOTAL)}</b> — that is the L25 sign error, reproduced.
                          </span>
                        ) : null}
                      </motion.div>
                    ) : null}
                  </motion.div>
                </AnimatePresence>
              </li>
            );
          })}
        </ol>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-[.92rem] font-black" style={{ color: complete ? "#065f46" : "#7d9a8b" }}>
            {complete ? (
              <>Net cash from operating activities = ₹{fmtINR(JAWS_CORRECT_TOTAL)} ✓</>
            ) : (
              <>Running total: ₹{fmtINR(running)}</>
            )}
          </p>
          {complete ? (
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#e4f1ea] bg-white px-3 py-1.5 text-[.74rem] font-bold text-[#3e2c1d]"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Predict again
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setNextIdx(JAWS_RUNGS.length)}
              className="rounded-lg px-3 py-1.5 text-[.74rem] font-bold text-white"
              style={{ background: "linear-gradient(135deg,#10b981,#047857)" }}
            >
              Reveal all →
            </button>
          )}
        </div>

        <p className="mt-3 text-[.78rem] leading-relaxed text-muted-warm">
          Read the fourth step twice: an <b>increase</b> in receivables means sales were booked but cash never arrived —
          profit up, cash down. A <b>decrease</b> in payables means old bills were settled — cash left, profit untouched.
        </p>
      </div>
    </FaDiagramShell>
  );
}
