"use client";

/* ============================================================
   StmParts6 — L10 and L11. Random variables, the TV demand
   record, the bivariate distribution, and the workhorses.
   ============================================================ */

import { StmEyebrow, StmBlocks, StmReadStep, StmDataTable, StmCallout, StmSteps } from "./blocks";
import { TVPmf } from "./diagrams";
import { CalcFlow } from "./stm-math";

/* ---------------- L10 a — random variables ---------------- */
export function StmRandomVariablesSection() {
  return (
    <section id="random-variables" className="scroll-mt-24">
      <StmEyebrow id="random-variables" />
      <StmReadStep n="1" title="Random variables" sub="A number attached to every outcome" />
      <StmBlocks id="random-variables" />
      <div className="mt-8 space-y-6">
        <StmDataTable
          aria="Random variable types table contrasting discrete and continuous variables"
          caption={<>The two families: discrete variables take countable values (you cannot sell 1.5 TVs); continuous variables take any value in an interval.</>}
          head={["Type", "Values it takes", "Examples"]}
          rows={[
            ["Discrete", "countable — 0, 1, 2, 3, 4", "units sold, family size, customers arriving"],
            ["Continuous", "any value in an interval", "weight, time, temperature"],
          ]}
        />
        <StmCallout kind="why" title="Three ways to carry a distribution">
          A probability distribution can be a table, a graph, or a formula. The empirical route counts days and divides; the formula route (uniform, binomial, Poisson, hypergeometric) computes probabilities without requiring observation at all.
        </StmCallout>
      </div>
    </section>
  );
}

/* ---------------- L10 b — the TV distribution ---------------- */
export function StmTvDistributionSection() {
  return (
    <section id="tv-distribution" className="scroll-mt-24">
      <StmEyebrow id="tv-distribution" />
      <StmReadStep n="2" title="The TV demand distribution" sub="200 days → probabilities → E(X) = 1.2" />
      <StmBlocks id="tv-distribution" />
      <div className="mt-8 space-y-6">
        <TVPmf id="l10-tvpmf" />
        <CalcFlow
          aria="CalcFlow of the expected value calculation for the television sales distribution reaching 1.2 units"
          caption={<>E(X) for the 200-day record, end to end — the final frame is the prose's 1.2 units per day.</>}
          frames={[
            { kind: "formula", label: "Expected value — symbolic form", math: "E(X) = Σ(X · f(x))", note: "each value weighted by its probability" },
            { kind: "sub", label: "Substitute the 200-day record", math: "E(X) = 0(0.40) + 1(0.25) + 2(0.20) + 3(0.05) + 4(0.10)", note: "probabilities from days ÷ 200" },
            { kind: "value", label: "Sum the products", math: "E(X) = 0 + 0.25 + 0.40 + 0.15 + 0.40", note: "the centre of gravity of the distribution" },
            { kind: "result", label: "E(X) = 1.2 units per day", math: "E(X) = 1.2", note: "the demand the inventory plan is built on" },
          ]}
        />
      </div>
    </section>
  );
}

/* ---------------- L11 a — bivariate distributions ---------------- */
export function StmBivariateCovarianceSection() {
  return (
    <section id="bivariate-covariance" className="scroll-mt-24">
      <StmEyebrow id="bivariate-covariance" />
      <StmReadStep n="1" title="Bivariate distributions" sub="Two variables at once — covariance and correlation" />
      <StmBlocks id="bivariate-covariance" />
      <div className="mt-8 space-y-6">
        <StmDataTable
          aria="Bivariate distribution skeleton for De Carlo Motors over 300 days with row and column readings"
          caption={<>De Carlo Motors' two locations over 300 days: read horizontally (row dealership) or vertically (column dealership), divide every frequency by 300, and the joint distribution is live — E(S) for total sales follows with the same Σ(S·P(S)) machinery.</>}
          head={["Reading", "What it gives", "Formula applied"]}
          rows={[
            ["Horizontal (row)", "one dealership's sales distribution", "f(x) per row ÷ 300"],
            ["Vertical (column)", "the other dealership's distribution", "f(y) per column ÷ 300"],
            ["Joint cell", "the probability of both together", "frequency ÷ 300"],
            ["Total sales S", "E(S) across both", "E(S) = Σ(S · P(S))"],
          ]}
        />
        <StmCallout kind="insight" title="Covariance's sign is the message">
          Positive covariance — the variables tend to rise together; negative — opposite. Its magnitude is scale-dependent, which is why the correlation coefficient divides it away: same sign story, always between −1 and +1.
        </StmCallout>
      </div>
    </section>
  );
}

/* ---------------- L11 b — binomial & Poisson ---------------- */
export function StmBinomialPoissonSection() {
  return (
    <section id="binomial-poisson" className="scroll-mt-24">
      <StmEyebrow id="binomial-poisson" />
      <StmReadStep n="2" title="Binomial & Poisson" sub="The conditions, the parameters, the worked probabilities" />
      <StmBlocks id="binomial-poisson" />
      <div className="mt-8 space-y-6">
        <StmDataTable
          aria="Binomial and Poisson parameter table with conditions and formulas"
          caption={<>The two workhorses' dials: the binomial needs n and p; the Poisson needs only λ. Both carry the same E(X) language with different variance machinery.</>}
          head={["Distribution", "Parameters", "E(X)", "Variance"]}
          rows={[
            ["Binomial", "n trials · p success probability", "E(X) = n·p", "Var(X) = n·p·(1−p)"],
            ["Poisson", "λ arrival rate", "E(X) = μ = λ", "Var(X) = μ"],
          ]}
        />
        <CalcFlow
          aria="CalcFlow of the binomial employee turnover probability reaching 0.2430"
          caption={<>The turnover question — exactly one of three employees leaves — run through the binomial machine to the prose's 0.2430.</>}
          frames={[
            { kind: "formula", label: "Binomial probability — symbolic form", math: "f(x) = [n! / (x!(n−x)!)] · p^x · (1−p)^(n−x)", note: "the first part counts the sequences, the second prices one" },
            { kind: "sub", label: "Substitute n = 3, x = 1, p = 0.10", math: "f(1) = [3!/(1!·2!)] · 0.10¹ · 0.90²", note: "the turnover setup: 10% annual attrition" },
            { kind: "value", label: "Compute the parts", math: "3 × 0.10 × 0.81 = 0.243", note: "three arrangements, each 0.009" },
            { kind: "result", label: "P(X = 1) = 0.2430", math: "P(X = 1) = 24.30%", note: "exactly one of the three leaves" },
          ]}
        />
        <StmSteps
          aria="Workflow of the four binomial conditions from fixed trials through independence to constant probability"
          caption={<>The binomial's entry ticket — all four conditions or the machine does not apply.</>}
          steps={[
            { chip: "1 · FIXED", label: "n identical trials", detail: "the experiment runs a known number of times", tone: "violet" },
            { chip: "2 · TWO", label: "two outcomes per trial", detail: "success or failure — nothing in between", tone: "violet" },
            { chip: "3 · CONSTANT", label: "p stays the same", detail: "the success probability never shifts across trials", tone: "gold" },
            { chip: "4 · INDEPENDENT", label: "trials do not talk", detail: "one outcome never influences another", tone: "gold" },
          ]}
        />
      </div>
    </section>
  );
}
