/* ============================================================
   Arithmetic assertions for the six FA diagrams — the §4 gate.

   Run: bun test src/components/fa/diagrams/calcs.test.ts

   These test the exact module the components import, so a
   drift in any rendered figure fails here first.
   ============================================================ */
import { describe, expect, test } from "bun:test";

import {
  DEPRECIABLE,
  ERROR_ROWS,
  JAWS_CORRECT_TOTAL,
  JAWS_L29_TOTAL,
  JAWS_RUNGS,
  JAWS_WRONG_AP_TOTAL,
  PRESS,
  RATE_SOLVE,
  RATE_SOLVE_PCT_3DP,
  REDDY,
  TB_ACCOUNTS,
  contributionSplit,
  dbSchedule,
  jawsRunning,
  overshoot,
  reddyBridge,
  roa,
  slSchedule,
  suspensePlacement,
  totalDepreciation,
} from "./calcs";

describe("Trap A — Jaws reconciliation ladder", () => {
  test("correct signs land on the stated ₹69,700", () => {
    expect(JAWS_CORRECT_TOTAL).toBe(69700);
    expect(jawsRunning({})).toBe(69700);
  });

  test("the intentionally-wrong AP flip shows ₹77,300", () => {
    expect(JAWS_WRONG_AP_TOTAL).toBe(77300);
    expect(jawsRunning({ ap: "+" })).toBe(77300);
  });

  test("the L25 print (+3,800 add) reproduces 77,300 — the disclosed slip", () => {
    // L25 says "Add: decrease in accounts payable ₹3,800" — exactly the wrong flip
    expect(jawsRunning({ ap: "+" })).toBe(77300);
  });

  test("the L29 variant (₹6,000 deduction) never reaches 69,700", () => {
    expect(JAWS_L29_TOTAL).toBe(67500);
  });

  test("rungs carry the source amounts 7,000 / 2,500 / 4,000 / 3,800", () => {
    const amts = JAWS_RUNGS.map((r) => r.amt);
    expect(amts).toEqual([73000, 7000, 2500, 4000, 3800]);
    expect(JAWS_RUNGS.filter((r) => r.key === "ap")[0].sign).toBe("-");
  });
});

describe("Trap B — straight line vs diminishing balance", () => {
  test("straight line carries exactly the residual after 5 years", () => {
    const sl = slSchedule();
    expect(sl.map((r) => r.carrying)).toEqual([47600, 38200, 28800, 19400, 10000]);
    expect(totalDepreciation(sl)).toBe(47000);
    expect(DEPRECIABLE).toBe(47000);
  });

  test("diminishing balance at 40% — the honest, uncapped schedule", () => {
    const db = dbSchedule(0.4);
    expect(db.map((r) => r.carrying).map((c) => Math.round(c * 100) / 100)).toEqual([
      34200, 20520, 12312, 7387.2, 4432.32,
    ]);
    expect(Math.round(totalDepreciation(db) * 100) / 100).toBe(52567.68);
    expect(Math.round(overshoot(db) * 100) / 100).toBe(5567.68);
  });

  test("year-5 40% carrying amount sits below the ₹10,000 residual floor", () => {
    const db = dbSchedule(0.4);
    expect(db[4].dep).toBeCloseTo(2954.88, 2);
    expect(db[4].carrying).toBeCloseTo(4432.32, 2);
    expect(db[4].carrying).toBeLessThan(PRESS.resid);
  });

  test("rate-solve toggle: rate displays as 29.397% and lands on ₹10,000 ±0.01", () => {
    expect(RATE_SOLVE_PCT_3DP).toBeCloseTo(29.397, 3);
    const solved = dbSchedule(RATE_SOLVE);
    expect(solved[4].carrying).toBeGreaterThanOrEqual(10000 - 0.01);
    expect(solved[4].carrying).toBeLessThanOrEqual(10000 + 0.01);
    expect(totalDepreciation(solved)).toBeCloseTo(47000, 6);
  });
});

describe("Trap C — DuPont dial", () => {
  test("luxury and supermarket presets both yield 20% ROA", () => {
    expect(roa(10, 2)).toBeCloseTo(20, 6);
    expect(roa(4, 5)).toBeCloseTo(20, 6);
  });

  test("Dr. Reddy's DuPont canon: 13.05% → 11.11%", () => {
    expect(roa(REDDY.m15, REDDY.t15)).toBeCloseTo(13.05, 6);
    expect(roa(REDDY.m16, REDDY.t16)).toBeCloseTo(11.1051, 4);
    expect(Math.round(roa(REDDY.m16, REDDY.t16) * 100) / 100).toBe(11.11);
  });

  test("the two-step bridge: margin effect −1.12pp, turnover effect −0.82pp", () => {
    const b = reddyBridge();
    expect(b.start).toBeCloseTo(13.05, 6);
    expect(Math.round(b.steps[0].delta * 100) / 100).toBe(-1.12);
    expect(Math.round(b.steps[1].delta * 100) / 100).toBe(-0.82);
    // the rounded steps walk exactly to the rounded end
    expect(Math.round((b.start + b.steps[0].delta + b.steps[1].delta) * 100) / 100).toBe(11.11);
    expect(Math.round(b.end * 100) / 100).toBe(11.11);
  });

  test("contribution split is exact algebra (m + m·(t−1) = m·t)", () => {
    for (const [m, t] of [
      [10, 2],
      [4, 5],
      [15, 0.87],
      [13.71, 0.81],
    ]) {
      const s = contributionSplit(m, t);
      expect(s.base + s.extra).toBeCloseTo(roa(m, t), 6);
    }
    expect(contributionSplit(4, 5).extra).toBeCloseTo(16, 6);
    expect(contributionSplit(15, 0.87).extra).toBeCloseTo(-1.95, 6);
  });
});

describe("Trap D — suspense matrix", () => {
  test("the clean framing gap is ₹50,000, debit side short", () => {
    const p = suspensePlacement(18000000, 18050000);
    expect(p.side).toBe("dr");
    expect(p.amount).toBe(50000);
  });

  test("only the commission error breaks the trial balance — by ₹50,000", () => {
    const comm = ERROR_ROWS.find((r) => r.kind === "commission");
    expect(comm?.agrees).toBe(false);
    expect(comm?.impact).toBe(50000);
    for (const r of ERROR_ROWS) {
      if (r.kind !== "commission") expect(r.impact).toBe(0);
    }
  });

  test("the two suspense rules: lesser side receives the plug", () => {
    expect(suspensePlacement(100, 150)).toEqual({ side: "dr", amount: 50 });
    expect(suspensePlacement(150, 100)).toEqual({ side: "cr", amount: 50 });
    expect(suspensePlacement(120, 120)).toEqual({ side: "balanced", amount: 0 });
  });
});

describe("Diagram 1 — TB workbench accounts", () => {
  test("Cash gross sides reconcile to the L19 net balance", () => {
    const cash = TB_ACCOUNTS.find((a) => a.name === "Cash")!;
    expect(cash.drGross).toBe(58500);
    expect(cash.crGross).toBe(11570);
    expect(cash.drGross - cash.crGross).toBe(cash.net);
    expect(cash.net).toBe(46930);
  });

  test("Pearl's Capital, Purchases and Sales carry the printed figures", () => {
    const byName = Object.fromEntries(TB_ACCOUNTS.map((a) => [a.name, a]));
    expect(byName["Capital"]).toMatchObject({ net: 44000, netSide: "cr" });
    expect(byName["Purchases"]).toMatchObject({ net: 75000, netSide: "dr" });
    expect(byName["Sales"]).toMatchObject({ net: 72000, netSide: "cr" });
  });
});
