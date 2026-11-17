"use client";

/* ============================================================
   FA DIAGRAM 1 — total vs balance trial-balance splitter
   (section trial-balance, L13).

   Two methods, one ledger, rendered as a mini workbench of four
   accounts (Cash, Capital, Purchases, Sales). Total method shows
   both gross sides of every account; balance method collapses
   each account to its single net figure. A live footer states
   what each format can and cannot feed.

   Second panel — "Agrees ≠ accurate": four error types that a
   perfectly agreeing trial balance sails straight past, each
   toggleable, plus the one it does catch (posting one side —
   the suspense case). L13's exact framing line anchors both.
   ============================================================ */

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownRight, Scale, Split } from "lucide-react";
import { FA_RED, FaBadge, FaDiagramShell, FaSeg, fmtINR, useFaStatic } from "./kit";
import { TB_ACCOUNTS } from "./calcs";

type MethodId = "total" | "balance";

interface ErrorCard {
  t: string;
  ex: string;
  effect: string;
}

/** the four that a perfectly agreeing TB cannot see (L13/L15) */
const ERROR_CARDS: ErrorCard[] = [
  {
    t: "Error of principle",
    ex: "capital expenditure booked as revenue expense",
    effect: "TB still agrees — both sides equally affected; only the classification is wrong.",
  },
  {
    t: "Compensating error",
    ex: "two errors that cancel",
    effect: "TB still agrees — one understatement offsets one overstatement.",
  },
  {
    t: "Error of omission",
    ex: "transaction entirely unrecorded",
    effect: "TB still agrees — nothing was posted to either side.",
  },
  {
    t: "Error of commission",
    ex: "wrong account, correct sides",
    effect: "TB still agrees — a complete debit-credit pair landed in the wrong account.",
  },
];

export function FaTbSplitter() {
  const [method, setMethod] = useState<MethodId>("total");
  const [openCard, setOpenCard] = useState<number | null>(null);
  const statik = useFaStatic();

  return (
    <FaDiagramShell
      icon={<Scale className="h-4 w-4" style={{ color: "#047857" }} />}
      title="One ledger, two legitimate drawings"
      sub="flip the whole workbench between methods"
    >
      <div className="px-4 py-5 sm:px-6">
        <div className="rounded-xl border border-[#e4f1ea] bg-white p-1">
          <FaSeg
            ariaLabel="Trial balance method"
            options={[
              { id: "total" as MethodId, label: "Total method" },
              { id: "balance" as MethodId, label: "Balance method" },
            ]}
            value={method}
            onChange={setMethod}
            className="grid-cols-2"
          />
        </div>

        {/* the four-account workbench */}
        <ul className="mt-4 grid gap-2" role="list" aria-label="Four ledger accounts, drawn by the selected method">
          {TB_ACCOUNTS.map((a, i) => {
            const showGross = method === "total";
            return (
              <li key={a.name} role="listitem">
                <motion.div
                  initial={false}
                  animate={{}}
                  className="rounded-xl border border-[#e4f1ea] bg-white p-3"
                  aria-label={
                    showGross
                      ? `${a.name}: debit total ₹${fmtINR(a.drGross)}, credit total ₹${fmtINR(a.crGross)}`
                      : `${a.name}: net balance ₹${fmtINR(a.net)} on the ${a.netSide === "dr" ? "debit" : "credit"} side`
                  }
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="text-[.88rem] font-extrabold text-[#3e2c1d]">{a.name}</span>
                    <span className="text-[.66rem] font-semibold text-muted-warm">{a.note}</span>
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {/* debit side */}
                    <div
                      className="rounded-lg border px-3 py-2"
                      style={{
                        borderColor: a.netSide === "dr" && !showGross ? "#a9dcc4" : "#eef3ef",
                        background: a.netSide === "dr" && !showGross ? "#ecfdf5" : "#f7faf8",
                      }}
                    >
                      <p className="text-[.58rem] font-black uppercase tracking-[.14em] text-[#8a6b45]">Debit</p>
                      <AnimatePresence initial={false} mode="wait">
                        <motion.p
                          key={`${a.name}-${method}-dr`}
                          initial={statik ? false : { opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={statik ? undefined : { opacity: 0, y: -6 }}
                          transition={statik ? { duration: 0 } : { duration: 0.18 }}
                          className="font-mono text-[.86rem] font-black text-[#3e2c1d]"
                        >
                          {showGross
                            ? a.drGross > 0
                              ? `₹${fmtINR(a.drGross)}`
                              : "—"
                            : a.netSide === "dr"
                            ? `₹${fmtINR(a.net)}`
                            : "—"}
                        </motion.p>
                      </AnimatePresence>
                    </div>
                    {/* credit side */}
                    <div
                      className="rounded-lg border px-3 py-2"
                      style={{
                        borderColor: a.netSide === "cr" && !showGross ? "#a9dcc4" : "#eef3ef",
                        background: a.netSide === "cr" && !showGross ? "#ecfdf5" : "#f7faf8",
                      }}
                    >
                      <p className="text-[.58rem] font-black uppercase tracking-[.14em] text-[#8a6b45]">Credit</p>
                      <AnimatePresence initial={false} mode="wait">
                        <motion.p
                          key={`${a.name}-${method}-cr`}
                          initial={statik ? false : { opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={statik ? undefined : { opacity: 0, y: -6 }}
                          transition={statik ? { duration: 0 } : { duration: 0.18 }}
                          className="font-mono text-[.86rem] font-black text-[#3e2c1d]"
                        >
                          {showGross
                            ? a.crGross > 0
                              ? `₹${fmtINR(a.crGross)}`
                              : "—"
                            : a.netSide === "cr"
                            ? `₹${fmtINR(a.net)}`
                            : "—"}
                        </motion.p>
                      </AnimatePresence>
                    </div>
                  </div>
                  {i === 0 ? (
                    <p className="mt-2 text-[.68rem] leading-snug text-muted-warm">
                      Cash is the only account here with traffic on both sides — watch its two gross sides collapse into
                      one net figure as you flip.
                    </p>
                  ) : null}
                </motion.div>
              </li>
            );
          })}
        </ul>

        {/* the live footer — what this format can feed */}
        <div aria-live="polite">
          {method === "total" ? (
            <p className="mt-3 rounded-xl border px-3.5 py-2.5 text-[.82rem] font-semibold leading-relaxed" style={{ borderColor: "#e3c98f", background: "#fbf4e4", color: "#7c2d12" }}>
              Gross totals — statements cannot be built from this. Ready the moment accounts are totalled, but the
              trading account needs NET balances, not gross totals.
            </p>
          ) : (
            <p className="mt-3 rounded-xl border px-3.5 py-2.5 text-[.82rem] font-semibold leading-relaxed" style={{ borderColor: "#a9dcc4", background: "#ecfdf5", color: "#065f46" }}>
              Net balances — ready for the trading account. One net figure (or the balance b/f) per account: the
              standard method, and the one statements are built from.
            </p>
          )}
        </div>
        <p className="mt-2 text-[.72rem] leading-snug text-muted-warm">
          Four of Pearl&apos;s ten ledger accounts — Cash is L19&apos;s worked ledger (58,500 − 11,570 = 46,930); Pearl&apos;s
          full statement above agrees at ₹1,18,000.
        </p>
      </div>
    </FaDiagramShell>
  );
}

/* ---------------------------------------------- panel 2 — agrees ≠ accurate */

export function FaTbErrorPanel() {
  const [open, setOpen] = useState<number | null>(null);
  const statik = useFaStatic();

  return (
    <div className="overflow-hidden rounded-2xl border border-[#c7e5d6] bg-[#fffdf9] fa-diag">
      <div className="flex flex-wrap items-center gap-2 border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-3">
        <Split className="h-4 w-4" style={{ color: "#047857" }} />
        <span className="font-mono text-[.64rem] font-black uppercase tracking-[.2em]" style={{ color: "#047857" }}>
          Agrees ≠ accurate
        </span>
        <span className="text-[.7rem] font-semibold text-muted-warm">toggle each — watch the trial balance shrug</span>
      </div>
      <div className="px-4 py-4 sm:px-6">
        <p className="text-[.82rem] leading-relaxed text-[#2b2014]">
          L13&apos;s exact framing: agreement <b>confirms whether posting and other accounting processes have been
          carried out without arithmetic errors</b> — but it <b>is not a 100% proof of accuracy</b>. Toggle the four
          survivors:
        </p>
        <ul className="mt-3 grid gap-2 md:grid-cols-2" role="list" aria-label="Errors the trial balance cannot detect">
          {ERROR_CARDS.map((c, i) => {
            const isOn = open === i;
            return (
              <li key={c.t} role="listitem">
                <button
                  type="button"
                  onClick={() => setOpen(isOn ? null : i)}
                  aria-pressed={isOn}
                  className={`h-full w-full rounded-xl border p-3.5 text-left transition-all duration-300 ${
                    isOn ? "border-[#a9dcc4] bg-[#ecfdf5]" : "border-[#e4f1ea] bg-white hover:border-[#a9dcc4]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[.88rem] font-extrabold text-[#3e2c1d]">{c.t}</span>
                    <FaBadge tone="ok">TB still agrees</FaBadge>
                  </div>
                  <p className="mt-1 text-[.76rem] italic text-muted-warm">{c.ex}</p>
                  <AnimatePresence initial={false}>
                    {isOn ? (
                      <motion.p
                        initial={statik ? false : { opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={statik ? undefined : { opacity: 0, height: 0 }}
                        transition={statik ? { duration: 0 } : { duration: 0.25 }}
                        className="overflow-hidden text-[.78rem] font-semibold leading-relaxed"
                        style={{ color: "#065f46" }}
                      >
                        {c.effect}
                      </motion.p>
                    ) : null}
                  </AnimatePresence>
                </button>
              </li>
            );
          })}
        </ul>
        <p className="mt-3 flex flex-wrap items-center gap-2 rounded-xl border px-3.5 py-2.5 text-[.8rem] font-semibold leading-relaxed" style={{ borderColor: "#e8a896", background: "#fbeae5", color: "#7c2d12" }}>
          <ArrowDownRight className="h-4 w-4 shrink-0" style={{ color: FA_RED }} aria-hidden />
          Then one the TB <b>does</b> catch: posting only <b>one side</b> — the columns fall apart, suspense holds the
          gap. That machine lives in <a href="#suspense" className="underline" style={{ color: FA_RED }}>suspense &amp; errors</a>.
        </p>
      </div>
    </div>
  );
}
