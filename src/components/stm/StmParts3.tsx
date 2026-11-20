"use client";

/* ============================================================
   StmParts3 — L04 and L05. The display machines and the
   location measures.
   ============================================================ */

import { StmEyebrow, StmBlocks, StmReadStep, StmSteps, StmDataTable, StmCallout } from "./blocks";
import { HistogramShapes, ScatterPanels } from "./diagrams";
import { CalcFlow } from "./stm-math";

/* ---------------- L04 a — categorical displays ---------------- */
export function StmCategoricalDisplaysSection() {
  return (
    <section id="categorical-displays" className="scroll-mt-24">
      <StmEyebrow id="categorical-displays" />
      <StmReadStep n="1" title="Categorical displays" sub="Frequency tables, bar charts, pie charts" />
      <StmBlocks id="categorical-displays" />
      <div className="mt-8 space-y-6">
        <StmDataTable
          aria="Hotel quality ratings frequency relative frequency and percentage frequency table"
          caption={<>The hotel-rating distribution as a three-column machine: frequency, relative frequency (÷ n), percentage frequency (× 100) — sums always close at 1.0 and 100%.</>}
          head={["Quality rating", "Frequency", "Relative frequency", "Percentage frequency"]}
          rows={[
            ["Poor", "2", "0.03", "3%"],
            ["Below average", "3", "0.05", "5%"],
            ["Average", "48", "0.24", "24%"],
            ["Above average", "92", "0.46", "46%"],
            ["Excellent", "55", "0.22", "22%"],
            ["Total", "200", "1.00", "100%"],
          ]}
        />
        <StmSteps
          aria="Workflow from raw categories to frequency table to bar chart to pie chart with sector angles"
          caption={
            <>
              The categorical pipeline: mutually exclusive categories, the three frequencies, then the drawing — a bar's height reads counts, a pie sector's angle reads relative frequency × 360°.
            </>
          }
          steps={[
            { chip: "RULE 1", label: "Mutually exclusive classes", detail: "One observation belongs to exactly one category", tone: "violet" },
            { chip: "RULE 2", label: "Count, then normalise", detail: "Frequency → relative (÷ n) → percentage (× 100)", tone: "violet" },
            { chip: "DRAW", label: "Bar or pie", detail: "Bars compare across categories; pie sectors need fewer than 5-6 categories or they cluster", tone: "gold" },
            { chip: "ANGLE", label: "Sector angle = rel. freq. × 360°", detail: "The whole pie is 360°; each slice carries its share", tone: "gold" },
          ]}
        />
      </div>
    </section>
  );
}

/* ---------------- L04 b — quantitative displays ---------------- */
export function StmQuantitativeDisplaysSection() {
  return (
    <section id="quantitative-displays" className="scroll-mt-24">
      <StmEyebrow id="quantitative-displays" />
      <StmReadStep n="2" title="Quantitative displays" sub="Class intervals, histograms, cumulative frequencies" />
      <StmBlocks id="quantitative-displays" />
      <div className="mt-8 space-y-6">
        <HistogramShapes id="l04-shapes" />
        <StmCallout kind="insight" title="Why histograms touch">
          Adjacent classes have no natural separation because the data is continuous — the bars meet, unlike a bar chart's categorical gaps. The rectangle over each interval carries frequency, relative frequency or percentage frequency.
        </StmCallout>
        <StmDataTable
          aria="Parts cost frequency distribution with cumulative frequencies reaching the total"
          caption={<>The cumulative machine: each row adds the previous totals — the last class always lands on n, and cumulative percentage always reaches 100%.</>}
          head={["Parts cost class", "Frequency", "Cumulative frequency", "Cumulative %"]}
          rows={[
            ["50–59", "2", "2", "4%"],
            ["60–69", "13", "15", "30%"],
            ["70–79", "20", "35", "70%"],
            ["80–89", "10", "45", "90%"],
            ["90–99", "5", "50", "100%"],
          ]}
        />
      </div>
    </section>
  );
}

/* ---------------- L04 c — cross-tab & Simpson ---------------- */
export function StmCrosstabSimpsonSection() {
  return (
    <section id="crosstab-simpson" className="scroll-mt-24">
      <StmEyebrow id="crosstab-simpson" />
      <StmReadStep n="3" title="Cross-tabulation & Simpson's paradox" sub="Two variables, row/column percentages, the reversal trap" />
      <StmBlocks id="crosstab-simpson" />
      <div className="mt-8 space-y-6">
        <StmDataTable
          aria="Cross tabulation skeleton with rows columns and margin totals"
          caption={<>The cross-tab: any pairing works — categorical-categorical, categorical-quantitative, quantitative-quantitative. Row percentages read across; column percentages read down; never mix the two directions.</>}
          head={["", "Column category 1", "Column category 2", "Row total"]}
          rows={[
            ["Row category 1", "cell count", "cell count", "row total → row %"],
            ["Row category 2", "cell count", "cell count", "row total → row %"],
            ["Column total", "col total → column %", "col total → column %", "grand total"],
          ]}
        />
        <StmCallout kind="warn" title="Simpson's paradox — the reversal">
          Conclusions drawn from aggregate data may completely reverse when the same data is disaggregated into subgroups. Before acting on a cross-tab, ask which level you are reading: the summary or the detail.
        </StmCallout>
      </div>
    </section>
  );
}

/* ---------------- L05 a — scatter & trend ---------------- */
export function StmScatterTrendSection() {
  return (
    <section id="scatter-trend" className="scroll-mt-24">
      <StmEyebrow id="scatter-trend" />
      <StmReadStep n="1" title="Scatter diagrams & trend lines" sub="The slope is the story" />
      <StmBlocks id="scatter-trend" />
      <div className="mt-8 space-y-6">
        <ScatterPanels id="l05-scatter" />
      </div>
    </section>
  );
}

/* ---------------- L05 b — location measures ---------------- */
export function StmLocationMeasuresSection() {
  return (
    <section id="location-measures" className="scroll-mt-24">
      <StmEyebrow id="location-measures" />
      <StmReadStep n="2" title="Measures of location" sub="Mean, median, mode — and the weighted and geometric means" />
      <StmBlocks id="location-measures" />
      <div className="mt-8 space-y-6">
        <CalcFlow
          aria="CalcFlow of the weighted mean wage calculation from formula through substitution to result"
          caption={<>The weighted mean, run end to end — the final frame is the answer the prose states.</>}
          frames={[
            { kind: "formula", label: "Weighted mean — symbolic form", math: "x̄_w = Σ(wᵢ · xᵢ) / Σ(wᵢ)", note: "each observation carries its own weight wᵢ" },
            { kind: "sub", label: "Substitute the wages and hours", math: "x̄_w = Σ(wᵢ · xᵢ) / Σ(wᵢ) → wageᵢ × hoursᵢ summed over the crews", note: "the home-builder's wage problem: rate × hours per employee type" },
            { kind: "value", label: "Total pay / total hours", math: "x̄_w = (Σwᵢxᵢ) / (Σwᵢ)", note: "not the average of the rates — the hours re-weight them" },
            { kind: "result", label: "The average wage per hour", math: "x̄_w = the weighted mean the prose reports", note: "when importance varies, the weighted mean is the honest average" },
          ]}
        />
        <StmCallout kind="why" title="When the median outranks the mean">
          Extreme values drag the mean; the median ignores them. Placement salaries, property values, rental markets — anywhere outliers live, the median (575) holds while the mean (590.8) leans.
        </StmCallout>
        <StmDataTable
          aria="Location measures selection table with definitions and best use"
          caption={<>The five location measures, side by side — geometric mean reserved for multiplicative processes: growth rates, returns, bacterial cultures.</>}
          head={["Measure", "Definition", "Reach for it when"]}
          rows={[
            ["Mean", "x̄ = Σxᵢ / n", "Data is roughly symmetric — the intuitive centre"],
            ["Median", "Middle value in sorted order", "Outliers or skew — placement data, incomes"],
            ["Mode", "Most frequent value", "Categorical or discrete data; unimodal, bimodal, multimodal"],
            ["Weighted mean", "x̄_w = Σ(wᵢ·xᵢ)/Σ(wᵢ)", "Observations differ in importance — GPAs, wage bills"],
            ["Geometric mean", "(x₁·x₂·…·xₙ)^(1/n)", "Multiplicative change — returns, growth, pollution decay"],
          ]}
        />
      </div>
    </section>
  );
}

/* ---------------- L05 c — percentiles & quartiles ---------------- */
export function StmPercentilesQuartilesSection() {
  return (
    <section id="percentiles-quartiles" className="scroll-mt-24">
      <StmEyebrow id="percentiles-quartiles" />
      <StmReadStep n="3" title="Percentiles & quartiles" sub="The location formula and the four-way split" />
      <StmBlocks id="percentiles-quartiles" />
      <div className="mt-8 space-y-6">
        <CalcFlow
          aria="CalcFlow of the 80th percentile location calculation for 70 apartment rentals"
          caption={<>The percentile-location formula at work on the 70-rental dataset — the final frame matches the prose: the 80th percentile sits between the 56th and 57th sorted values.</>}
          frames={[
            { kind: "formula", label: "Percentile location — symbolic form", math: "L_p = (p/100) × (n + 1)", note: "p = the percentile, n = the number of observations" },
            { kind: "sub", label: "Substitute the 80th percentile, 70 rentals", math: "L_80 = (80/100) × (70 + 1)", note: "the formula's n + 1 keeps the location inside the data" },
            { kind: "value", label: "Compute the location", math: "L_80 = 0.80 × 71 = 56.8", note: "the fractional part says: between two values" },
            { kind: "result", label: "Between the 56th and 57th values", math: "80th percentile rent = between the 56th and 57th sorted rents", note: "at least 80% of values lie at or below this point" },
          ]}
        />
        <StmDataTable
          aria="Quartile definitions table with percentile equivalents"
          caption={<>The quartile ladder: Q1, Q2, Q3 at the 25th, 50th and 75th percentiles — Q2 is the median, and the quartiles feed the box plot and the IQR.</>}
          head={["Quartile", "Percentile position", "What it marks"]}
          rows={[
            ["Q1", "25th percentile", "a quarter of the data lies below"],
            ["Q2", "50th percentile", "the median itself"],
            ["Q3", "75th percentile", "three quarters of the data lie below"],
          ]}
        />
      </div>
    </section>
  );
}
