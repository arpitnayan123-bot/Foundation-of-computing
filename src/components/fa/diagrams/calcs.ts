/* ============================================================
   FA diagrams — the arithmetic layer.

   Every figure the six interactive diagrams render is computed
   HERE, once, as pure functions — so the components cannot
   drift from the source compendium ("FA_L01-L34_Compiled.pdf")
   and the assertions in calcs.test.ts test the same code the
   UI runs. No invented figures; the four source traps (A–D)
   are resolved in the open, exactly as the task spec mandates.

   Trap A (L25/L29 Jaws Photo Plus): the printed adjustments do
   not reconcile to the printed ₹69,700 — the ladder deducts the
   ₹3,800 payables decrease, the only combination that lands.
   Trap B (L33): a fixed 40% diminishing-balance rate overshoots
   the residual — the honest schedule is exposed, never capped.
   Trap C (L30/L34): DuPont's rounded margin (15%) gives 13.05%,
   L30's direct ROA gives 13.49% — one canon per visual, noted.
   Trap D (L15): the printed debit/credit totals contradict the
   printed ₹50,000 gap; the gap is used, the slip is disclosed.
   ============================================================ */

/* ---------------------------------------------- Trap A — the Jaws ladder */

export interface JawsRung {
  key: "ni" | "dep" | "gain" | "ar" | "ap";
  label: string;
  why: string;
  amt: number;
  /** the CORRECT sign, per the reconciliation that reaches ₹69,700 */
  sign: "=" | "+" | "-";
}

export const JAWS_RUNGS: JawsRung[] = [
  { key: "ni", label: "Net income", why: "Starting point: accrual profit", amt: 73000, sign: "=" },
  { key: "dep", label: "Depreciation", why: "Non-cash expense — never left the bank, so add it back", amt: 7000, sign: "+" },
  { key: "gain", label: "Gain on disposal", why: "The full disposal proceeds sit in investing; remove the gain or you double-count it", amt: 2500, sign: "-" },
  { key: "ar", label: "Increase in accounts receivable", why: "Sales booked, cash not yet collected — profit without cash", amt: 4000, sign: "-" },
  { key: "ap", label: "Decrease in accounts payable", why: "Payables fell, so more cash went out than expense recorded", amt: 3800, sign: "-" },
];

/** Running total with learner sign-flips applied ({"ap": "+"} flips rung ap to an add-back). */
export function jawsRunning(flip: Partial<Record<JawsRung["key"], "+" | "-">> = {}): number {
  return JAWS_RUNGS.reduce((n, r) => {
    const s = r.sign === "=" ? "=" : flip[r.key] ?? r.sign;
    if (s === "=") return n + r.amt;
    return s === "+" ? n + r.amt : n - r.amt;
  }, 0);
}

export const JAWS_CORRECT_TOTAL = jawsRunning(); // 69,700
/** the classic failure: treating the payables decrease as an add-back */
export const JAWS_WRONG_AP_TOTAL = jawsRunning({ ap: "+" }); // 77,300
/** the L29 variant of the same case (₹6,000 deduction) — never lands on 69,700 */
export const JAWS_L29_TOTAL = 73000 + 7000 - 2500 - 4000 - 6000; // 67,500

/* ---------------------------------------------- Trap B — depreciation schedules */

export interface DepRow {
  yr: number;
  dep: number;
  acc: number;
  carrying: number;
}

export const PRESS = { cost: 57000, resid: 10000, life: 5 } as const;
/** the depreciable amount: cost − residual = ₹47,000 */
export const DEPRECIABLE = PRESS.cost - PRESS.resid;

/** Straight line: (cost − residual) ÷ life, flat every year. */
export function slSchedule(cost = PRESS.cost, resid = PRESS.resid, life = PRESS.life): DepRow[] {
  const annual = (cost - resid) / life;
  return Array.from({ length: life }, (_, i) => ({
    yr: i + 1,
    dep: annual,
    acc: annual * (i + 1),
    carrying: cost - annual * (i + 1),
  }));
}

/**
 * Diminishing balance at `rate` of the opening written-down value.
 * NO residual cap — the honest schedule, per Trap B: at 40% the
 * asset is over-depreciated and crashes through the ₹10,000 floor.
 */
export function dbSchedule(rate: number, cost = PRESS.cost, life = PRESS.life): DepRow[] {
  const rows: DepRow[] = [];
  let open = cost;
  for (let i = 0; i < life; i++) {
    const dep = rate * open;
    open -= dep;
    rows.push({ yr: i + 1, dep, acc: cost - open, carrying: open });
  }
  return rows;
}

/** the rate that actually lands on the residual: 1 − (residual/cost)^(1/life) */
export function solveRate(cost = PRESS.cost, resid = PRESS.resid, life = PRESS.life): number {
  return 1 - Math.pow(resid / cost, 1 / life);
}

export const RATE_SOLVE = solveRate(); // ≈ 29.3967% — displayed as 29.397%
/** 3 d.p. of the solve rate, for display + assertion */
export const RATE_SOLVE_PCT_3DP = Math.round(RATE_SOLVE * 100000) / 1000; // 29.397

export function totalDepreciation(rows: DepRow[]): number {
  return rows.reduce((n, r) => n + r.dep, 0);
}

/** over-depreciation of a raw diminishing-balance schedule vs the depreciable amount */
export function overshoot(rows: DepRow[], depreciable = DEPRECIABLE): number {
  return totalDepreciation(rows) - depreciable;
}

/* ---------------------------------------------- Trap C — DuPont */

export const REDDY = { m15: 15, t15: 0.87, m16: 13.71, t16: 0.81 } as const;

/** ROA (%) as the product of margin (%) and turnover (×) */
export function roa(marginPct: number, turnover: number): number {
  return marginPct * turnover;
}

/**
 * Additive split of a multiplicative ROA: m × t = m + m × (t − 1).
 * The first segment is the margin at one turn; the second is what
 * extra turns add (or subtract, when turnover < 1× — exactly Dr.
 * Reddy's case). Exact algebra, no rounding tricks.
 */
export function contributionSplit(marginPct: number, turnover: number): { base: number; extra: number } {
  return { base: marginPct, extra: marginPct * (turnover - 1) };
}

export interface BridgeStep {
  label: string;
  delta: number;
}

/** 2015 → 2016 sequential (marginal) decomposition of the DuPont fall. */
export function reddyBridge(): { start: number; steps: BridgeStep[]; end: number } {
  const start = roa(REDDY.m15, REDDY.t15); // 13.05
  const marginEffect = (REDDY.m16 - REDDY.m15) * REDDY.t15; // Δm × t₂₀₁₅
  const turnoverEffect = REDDY.m16 * (REDDY.t16 - REDDY.t15); // m₂₀₁₆ × Δt
  const end = roa(REDDY.m16, REDDY.t16); // 11.1051 → 11.11
  return {
    start,
    steps: [
      { label: "margin effect", delta: marginEffect },
      { label: "turnover effect", delta: turnoverEffect },
    ],
    end,
  };
}

/* ---------------------------------------------- Trap D — suspense */

export const ABC_TB = { dr: 18000000, cr: 18050000, gap: 50000 } as const;

export type ErrorKind = "omission" | "principle" | "commission" | "compensating";

export interface ErrorRow {
  kind: ErrorKind;
  label: string;
  detail: string;
  /** does the trial balance still agree with ONLY this error present? */
  agrees: boolean;
  /** impact on the TB totals when toggled on, over the clean gap */
  impact: number;
}

export const ERROR_ROWS: ErrorRow[] = [
  {
    kind: "omission",
    label: "Omission",
    detail: "₹25,000 cloud-server invoice paid, never journalised",
    agrees: true,
    impact: 0,
  },
  {
    kind: "principle",
    label: "Principle",
    detail: "₹40,000 executive desk debited to Office Repairs instead of Furniture & Fixtures",
    agrees: true,
    impact: 0,
  },
  {
    kind: "commission",
    label: "Commission",
    detail: "₹85,000 cash sale credited to Sales correctly, but debited to Bank as ₹35,000",
    agrees: false,
    impact: 50000,
  },
  {
    kind: "compensating",
    label: "Compensating",
    detail: "two errors that cancel each other",
    agrees: true,
    impact: 0,
  },
];

/** which side is short, and by how much — the suspense placement rule */
export function suspensePlacement(dr: number, cr: number): { side: "dr" | "cr" | "balanced"; amount: number } {
  if (dr === cr) return { side: "balanced", amount: 0 };
  return dr < cr ? { side: "dr", amount: cr - dr } : { side: "cr", amount: dr - cr };
}

/* ---------------------------------------------- Diagram 1 — TB workbench */

export interface WbAccount {
  name: string;
  /** gross totals of both ledger sides (total method) */
  drGross: number;
  crGross: number;
  /** the net balance and its side (balance method) */
  net: number;
  netSide: "dr" | "cr";
  note: string;
}

/**
 * Cash from the L19 worked ledger, verbatim: debits 58,500, credits
 * 11,570, debit balance 46,930. Capital, Purchases and Sales from
 * Pearl's trial-balance extraction (L13 / restated in L19). Four of
 * Pearl's ten accounts — the full statement agrees at ₹1,18,000.
 */
export const TB_ACCOUNTS: WbAccount[] = [
  { name: "Cash", drGross: 58500, crGross: 11570, net: 46930, netSide: "dr", note: "L19's worked ledger — 58,500 − 11,570 = 46,930" },
  { name: "Capital", drGross: 0, crGross: 44000, net: 44000, netSide: "cr", note: "owners' claim — single credit entry" },
  { name: "Purchases", drGross: 75000, crGross: 0, net: 75000, netSide: "dr", note: "goods bought — single debit entry" },
  { name: "Sales", drGross: 0, crGross: 72000, net: 72000, netSide: "cr", note: "revenue — single credit entry" },
];
