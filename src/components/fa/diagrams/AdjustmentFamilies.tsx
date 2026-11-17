"use client";

/* ============================================================
   FA DIAGRAM 4 — three adjustment families, one engine, two
   cases (section cashflow-build, L26).

   Lane 1 non-cash · Lane 2 non-operating · Lane 3 working
   capital — plus the tax row that settles at the end. The
   learner assigns transaction chips to lanes; wrong assignments
   get a SPECIFIC correction, not a generic "try again". Once
   classified, the chips flow into a live statement. The case
   toggle re-runs the IDENTICAL engine on Compass Company
   (₹11,41,000 → ₹72,000) and Ajay Company (₹4,32,000 →
   ₹3,48,000) — the method is a machine, not a memory exercise.

   The working-capital direction rule stays pinned as a legend:
   asset up = cash down; liability up = cash up.
   ============================================================ */

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, RotateCcw, Sigma, X } from "lucide-react";
import { FA_RED, FaDiagramShell, FaSeg, fmtINR, useFaStatic } from "./kit";

type LaneId = "noncash" | "nonop" | "wc";
type ChipId = "dep" | "baddebts" | "gain" | "interest" | "inv" | "rec" | "prepaid" | "pay" | "tax";
type CaseId = "compass" | "ajay";

const LANES: { id: LaneId; label: string; rule: string }[] = [
  { id: "noncash", label: "Lane 1 · Non-cash", rule: "add back — the expense never moved cash" },
  { id: "nonop", label: "Lane 2 · Non-operating", rule: "remove — it belongs to investing or financing" },
  { id: "wc", label: "Lane 3 · Working capital", rule: "reconcile — cash lagged profit (or ran ahead)" },
];

interface ChipCase {
  dir: "+" | "-";
  amt?: number;
  detail: string;
}

interface Chip {
  id: ChipId;
  label: string;
  lane: LaneId | "tax";
  cases: Partial<Record<CaseId, ChipCase>>;
  wrong: Partial<Record<LaneId, string>>;
}

const CHIPS: Chip[] = [
  {
    id: "dep",
    label: "Depreciation",
    lane: "noncash",
    cases: {
      compass: { dir: "+", detail: "added back — the ₹11,41,000 profit absorbed it without paying it" },
      ajay: { dir: "+", detail: "added back — non-cash expense" },
    },
    wrong: {
      nonop: "Nothing was sold — a disposal gain is Lane 2, but depreciation is the wear of assets you KEPT. It cut profit without leaving the bank, so it is non-cash: Lane 1, add back.",
      wc: "Depreciation is not a timing gap between booking and cash — no receivable or payable exists. It never touches cash at all: Lane 1, add back.",
    },
  },
  {
    id: "baddebts",
    label: "Bad-debt provision",
    lane: "noncash",
    cases: {
      compass: { dir: "+", detail: "added back alongside depreciation — an accounting charge, not a payment" },
    },
    wrong: {
      nonop: "A provision is not an investing gain or loss — it is profit written down on paper only. Non-cash: Lane 1, add back.",
      wc: "No customer or supplier balance moved — the provision never left the books. Non-cash: Lane 1, add back.",
    },
  },
  {
    id: "gain",
    label: "Gain on asset sale",
    lane: "nonop",
    cases: {
      compass: { dir: "-", detail: "subtracted — the sale PROCEEDS sit in investing; leaving the gain here double-counts it" },
      ajay: { dir: "-", detail: "investment gain subtracted — same rule, non-operating" },
    },
    wrong: {
      noncash: "The gain is real cash arithmetic, but the cash belongs to INVESTING (selling a long-term asset). Operating must remove it: Lane 2, deduct.",
      wc: "A disposal is not a receivable or payable timing gap — it is the wrong SECTION entirely. Lane 2, deduct.",
    },
  },
  {
    id: "interest",
    label: "Interest received",
    lane: "nonop",
    cases: {
      compass: { dir: "-", detail: "interest & investment income subtracted — returns on amounts LENT belong to investing" },
    },
    wrong: {
      noncash: "Interest received IS cash — but it is a return on investments made, not on trading. Lane 2, deduct (investing inflow).",
      wc: "No working-capital balance moved. Returns on lending are investing inflows: Lane 2, deduct.",
    },
  },
  {
    id: "inv",
    label: "Inventory movement",
    lane: "wc",
    cases: {
      compass: { dir: "-", amt: 58000, detail: "inventory tie-up — stock grew, cash is locked in it" },
      ajay: { dir: "+", detail: "inventory DECREASE — stock turned into cash, add it back" },
    },
    wrong: {
      noncash: "Inventory is cash that changed form, not an expense that vanished — the timing gap is exactly what Lane 3 reconciles.",
      nonop: "Stock is trading, the most operating activity there is. The direction rule lives in Lane 3.",
    },
  },
  {
    id: "rec",
    label: "Receivables movement",
    lane: "wc",
    cases: {
      compass: { dir: "-", amt: 44000, detail: "receivables tie-up — sales booked, cash not collected" },
      ajay: { dir: "-", detail: "trade receivables increase subtracted — credit sales, cash not collected" },
    },
    wrong: {
      noncash: "The sale was booked (profit moved) and cash genuinely lags — that timing gap is Lane 3's whole job. Asset up = cash down: deduct.",
      nonop: "Customer collections are core trading — nothing investing here. Lane 3, deduct while receivables rise.",
    },
  },
  {
    id: "prepaid",
    label: "Prepaid increase",
    lane: "wc",
    cases: {
      ajay: { dir: "-", detail: "prepaid expenses increase subtracted — cash paid ahead of the expense" },
    },
    wrong: {
      noncash: "Prepaid rent WAS a cash payment — it left the bank early and will hit profit late. A timing gap: Lane 3, deduct.",
      nonop: "Paying suppliers and landlords ahead is operating to the bone. Lane 3, deduct.",
    },
  },
  {
    id: "pay",
    label: "Payables movement",
    lane: "wc",
    cases: {
      ajay: { dir: "+", detail: "trade payables increase added back — expenses booked, cash kept for now" },
    },
    wrong: {
      noncash: "The expense hit profit AND the bill is unpaid — profit fell, cash did not. A timing gap: Lane 3. Liability up = cash up: add.",
      nonop: "Suppliers are the operating cycle itself. Lane 3 — and note the sign flip: liability up = cash up, ADD.",
    },
  },
  {
    id: "tax",
    label: "Tax paid",
    lane: "tax",
    cases: {
      compass: { dir: "-", detail: "actual income tax payment — computed as expense + opening payable − closing payable" },
      ajay: { dir: "-", detail: "actual cash out — the same formula" },
    },
    wrong: {
      noncash: "Tax paid is the most real cash outflow there is — never add it back. It gets its own row AFTER cash generated from operations.",
      nonop: "Not investing, not financing — the tax actually paid settles at the bottom of the operating ladder.",
      wc: "The PAYABLE movement is Lane 3; the tax actually PAID is its own row at the foot of the statement.",
    },
  },
];

const CASES: { id: CaseId; label: string; pbt: number; landing: number }[] = [
  { id: "compass", label: "Compass Company", pbt: 1141000, landing: 72000 },
  { id: "ajay", label: "Ajay Company", pbt: 432000, landing: 348000 },
];

export function FaAdjustmentFamilies() {
  const [kase, setKase] = useState<CaseId>("compass");
  const [picked, setPicked] = useState<Partial<Record<ChipId, LaneId | "tax">> | null>(null);
  const [selected, setSelected] = useState<ChipId | null>(null);
  const [lastWrong, setLastWrong] = useState<{ id: ChipId; lane: LaneId | "tax" } | null>(null);
  const statik = useFaStatic();

  const placements = picked ?? {};
  const active = CASES.find((c) => c.id === kase)!;
  const present = CHIPS.filter((c) => c.cases[kase]);
  const placedCount = present.filter((c) => placements[c.id] === c.lane).length;
  const done = placedCount === present.length;

  const place = (lane: LaneId | "tax") => {
    if (!selected) return;
    const chip = CHIPS.find((c) => c.id === selected)!;
    setPicked((p) => ({ ...(p ?? {}), [selected]: lane }));
    setLastWrong(lane !== chip.lane ? { id: chip.id, lane } : null);
    setSelected(null);
  };

  const reset = () => {
    setPicked(null);
    setSelected(null);
    setLastWrong(null);
  };

  const switchCase = (c: CaseId) => {
    setKase(c);
    reset();
  };

  return (
    <FaDiagramShell
      icon={<Sigma className="h-4 w-4" style={{ color: "#047857" }} />}
      title="One engine, two companies"
      sub="classify the chips — the statement assembles itself"
      footer={
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="font-mono text-[.7rem] font-bold text-[#9db8a9]">
            {placedCount}/{present.length} correctly classified
          </span>
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#e4f1ea] bg-white px-3 py-1.5 text-[.74rem] font-bold text-[#3e2c1d]"
          >
            <RotateCcw className="h-3.5 w-3.5" /> Start over
          </button>
        </div>
      }
    >
      <div className="border-b border-[#e4f1ea] bg-white p-1">
        <FaSeg
          ariaLabel="Company case"
          options={CASES.map((c) => ({ id: c.id, label: c.label }))}
          value={kase}
          onChange={switchCase}
          className="grid-cols-2"
        />
      </div>

      <div className="px-4 py-5 sm:px-6">
        {/* the persistent rule — the most-missed in the subject */}
        <div className="flex flex-wrap items-center gap-2 rounded-xl border border-[#e3c98f] bg-[#fbf4e4] px-3.5 py-2.5">
          <span className="text-[.62rem] font-black uppercase tracking-[.16em] text-[#8a5a10]">Pin this rule</span>
          <span className="font-mono text-[.8rem] font-black text-[#7c2d12]">
            asset up = cash down · liability up = cash up
          </span>
        </div>

        {/* chips */}
        <p className="mt-4 text-[.7rem] font-black uppercase tracking-[.16em] text-[#8a6b45]">
          Step 1 — tap a transaction chip
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {CHIPS.map((c) => {
            const cs = c.cases[kase];
            const isSel = selected === c.id;
            const placed = placements[c.id];
            const correct = placed !== undefined && placed === c.lane;
            return (
              <button
                key={c.id}
                type="button"
                disabled={!cs}
                onClick={() => setSelected(isSel ? null : c.id)}
                aria-pressed={isSel}
                aria-label={`${c.label}${cs ? ` — ${cs.dir === "+" ? "add" : "deduct"}${cs.amt ? ` ₹${fmtINR(cs.amt)}` : ""}` : " — not in this case's printed adjustments"}`}
                className={`rounded-lg border px-2.5 py-1.5 text-[.74rem] font-semibold transition-colors ${
                  !cs
                    ? "cursor-not-allowed border-[#eef3ef] bg-[#f7faf8] text-[#b9c9c0] line-through"
                    : correct
                    ? "border-[#a9dcc4] bg-[#ecfdf5] text-[#065f46]"
                    : placed && placed !== c.lane
                    ? "border-[#e8a896] bg-[#fbeae5] text-[#b3402c]"
                    : isSel
                    ? "border-[#059669] bg-[#ecfdf5] text-[#065f46] ring-2 ring-[#059669]/30"
                    : "border-[#e0ece6] bg-white text-[#3e2c1d] hover:border-[#a9dcc4]"
                }`}
              >
                {c.label}
                {cs?.amt ? <span className="ml-1 font-mono font-black">₹{fmtINR(cs.amt)}</span> : null}
              </button>
            );
          })}
        </div>
        <p className="mt-1.5 text-[.72rem] leading-snug text-muted-warm">
          Greyed chips are not in this case&apos;s printed adjustments — switch the case and the engine re-runs on the
          other company.
        </p>

        {/* lanes */}
        <p className="mt-4 text-[.7rem] font-black uppercase tracking-[.16em] text-[#8a6b45]">
          Step 2 — tap the lane it belongs to
        </p>
        <div className="mt-2 grid gap-px overflow-hidden rounded-xl border border-[#e4f1ea] bg-[#e4f1ea] md:grid-cols-3">
          {LANES.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => place(l.id)}
              aria-label={`Place the selected adjustment in ${l.label}`}
              className="min-h-[92px] bg-white p-3 text-left transition-colors hover:bg-[#f7fbf9]"
            >
              <p className="text-[.82rem] font-extrabold text-[#3e2c1d]">{l.label}</p>
              <p className="text-[.68rem] leading-snug text-muted-warm">
                {selected ? "tap to place ↴" : l.rule}
              </p>
              <div className="mt-1.5 flex flex-wrap gap-1">
                {present
                  .filter((c) => placements[c.id] === l.id)
                  .map((c) => (
                    <span
                      key={c.id}
                      className={`inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[.66rem] font-bold ${
                        c.lane === l.id ? "bg-[#ecfdf5] text-[#065f46]" : "bg-[#fbeae5] text-[#b3402c]"
                      }`}
                    >
                      {c.lane === l.id ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                      {c.label}
                    </span>
                  ))}
              </div>
            </button>
          ))}
          {/* the fourth target — tax settles AFTER cash generated from operations */}
          <button
            type="button"
            onClick={() => place("tax")}
            aria-label="Place the selected adjustment in the tax row, after cash generated from operations"
            className="min-h-[64px] bg-[#fbf4e4] p-3 text-left transition-colors hover:bg-[#f8ecd4] md:col-span-3"
          >
            <p className="text-[.82rem] font-extrabold text-[#8a5a10]">The tax row — after operations</p>
            <p className="text-[.68rem] leading-snug text-[#a16207]">
              {selected ? "tap to place ↴" : "the tax actually PAID gets its own row at the foot of the ladder"}
            </p>
            <div className="mt-1.5 flex flex-wrap gap-1">
              {present
                .filter((c) => placements[c.id] === "tax")
                .map((c) => (
                  <span
                    key={c.id}
                    className={`inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[.66rem] font-bold ${
                      c.lane === "tax" ? "bg-[#ecfdf5] text-[#065f46]" : "bg-[#fbeae5] text-[#b3402c]"
                    }`}
                  >
                    {c.lane === "tax" ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                    {c.label}
                  </span>
                ))}
            </div>
          </button>
        </div>
        {placements["tax"] !== undefined ? (
          <p className="mt-2 flex flex-wrap items-center gap-1.5 text-[.74rem] font-semibold text-[#3e2c1d]">
            tax paid → its own row at the foot of the statement
            {placements["tax"] === "tax" ? <Check className="h-3.5 w-3.5 text-[#059669]" /> : <X className="h-3.5 w-3.5" style={{ color: FA_RED }} />}
          </p>
        ) : null}

        {/* the specific correction */}
        <AnimatePresence initial={false}>
          {lastWrong ? (
            <motion.div
              initial={statik ? false : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={statik ? { duration: 0 } : { duration: 0.25 }}
              className="mt-3 overflow-hidden rounded-xl border px-3.5 py-2.5 text-[.8rem] leading-relaxed"
              style={{ borderColor: "#e8a896", background: "#fbeae5", color: "#7c2d12" }}
              role="status"
            >
              <b style={{ color: FA_RED }}>
                {lastWrong.id === "tax" ? "Tax paid" : CHIPS.find((c) => c.id === lastWrong.id)?.label} →{" "}
                {lastWrong.lane === "tax" ? "the tax row" : LANES.find((l) => l.id === (lastWrong.lane as LaneId))?.label}:
              </b>{" "}
              {CHIPS.find((c) => c.id === lastWrong.id)?.wrong[lastWrong.lane as LaneId] ??
                "That lane isn't this chip's home — re-read the lane rules and the pinned direction rule."}
            </motion.div>
          ) : null}
        </AnimatePresence>

        {/* the live statement */}
        <div className="mt-5 rounded-2xl border border-[#c7e5d6] bg-white">
          <div className="border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-2 font-mono text-[.62rem] font-black uppercase tracking-[.2em]" style={{ color: "#047857" }}>
            {active.label} — operating section, indirect method
          </div>
          <ul className="grid gap-px bg-[#eef3ef]" role="list" aria-label={`${active.label} live statement`}>
            <li role="listitem" className="flex items-center justify-between gap-3 bg-white px-4 py-2.5">
              <span className="text-[.84rem] font-extrabold text-[#3e2c1d]">Profit before tax</span>
              <span className="font-mono text-[.9rem] font-black text-[#3e2c1d]">₹{fmtINR(active.pbt)}</span>
            </li>
            {LANES.map((l) => {
              const laneChips = present.filter((c) => c.lane === l.id && placements[c.id] === c.lane);
              const settled = laneChips.length === present.filter((c) => c.lane === l.id).length;
              return (
                <li key={l.id} role="listitem" className="bg-white px-4 py-2.5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[.78rem] font-extrabold" style={{ color: settled ? "#065f46" : "#9db8a9" }}>
                      {l.label}
                    </span>
                    <span className="font-mono text-[.68rem] font-bold text-[#8a6b45]">
                      {laneChips.length}/{present.filter((c) => c.lane === l.id).length} settled
                    </span>
                  </div>
                  {laneChips.length ? (
                    <ul className="mt-1.5 grid gap-1" role="list">
                      {laneChips.map((c) => {
                        const cs = c.cases[kase]!;
                        return (
                          <li key={c.id} role="listitem" className="flex items-center gap-2 text-[.76rem] leading-snug text-[#2b2014]">
                            <span
                              className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded font-mono text-[.7rem] font-black text-white"
                              style={{ background: cs.dir === "+" ? "#059669" : FA_RED }}
                              aria-hidden
                            >
                              {cs.dir === "+" ? "+" : "−"}
                            </span>
                            <span className="min-w-0 flex-1">
                              {c.label} — {cs.detail}
                              {cs.amt ? <b className="ml-1 font-mono">₹{fmtINR(cs.amt)}</b> : null}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <p className="mt-1 text-[.72rem] italic text-muted-warm">classify the chips above to fill this lane</p>
                  )}
                </li>
              );
            })}
            <li role="listitem" className="flex items-center justify-between gap-3 bg-white px-4 py-2.5">
              <span className="text-[.84rem] font-extrabold text-[#3e2c1d]">Net cash flow from operating activities</span>
              {done ? (
                <motion.span
                  initial={statik ? false : { scale: 0.92, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={statik ? { duration: 0 } : { duration: 0.3 }}
                  className="rounded-lg px-3 py-1 font-mono text-[.95rem] font-black text-white"
                  style={{ background: "linear-gradient(135deg,#10b981,#047857)" }}
                >
                  ₹{fmtINR(active.landing)} ✓
                </motion.span>
              ) : (
                <span className="rounded-lg border border-dashed border-[#c7e5d6] px-3 py-1 font-mono text-[.8rem] font-bold text-[#9db8a9]">
                  ₹{fmtINR(active.landing)} — verified by the source
                </span>
              )}
            </li>
          </ul>
        </div>
        <p className="mt-2 text-[.74rem] leading-relaxed text-muted-warm">
          Amounts the compendium does not print are marked as such — the landing figures (₹72,000 / ₹3,48,000) are the
          lecture&apos;s own verified results, never recomputed from invented pieces. Tax paid = tax expense + opening
          tax payable − closing tax payable.
        </p>
      </div>
    </FaDiagramShell>
  );
}
