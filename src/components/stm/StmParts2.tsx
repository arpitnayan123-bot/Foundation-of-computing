"use client";

/* ============================================================
   Statistics for Managers — PART 2 of 7 (shelf 05). Chapter 1's
   remaining movements — where data comes from (sources, studies,
   acquisition), the Hudson Auto loop (descriptive statistics →
   statistical inference), analytics, big data & data mining,
   ethics, the Chapter-1 practice wall and the Netflix case —
   plus Chapter 2's categorical displays (Marada Inn: frequency,
   relative/percent frequency, bar chart, pie chart).
   ============================================================ */

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Building2,
  Check,
  Database,
  FileSearch,
  Landmark,
  Scale,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  TrendingUp,
  Tv,
  X,
  Zap,
} from "lucide-react";
import { Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";
import { STM_G, STM_BTN_GRAD, StmCallout, StmPanel, StmQuiz, StmReadStep } from "@/components/stm/StmParts1";

/* ============================================================
   CHAPTER 1 · MOVEMENT 3 — DATA SOURCES & THE BIG PICTURE
   ============================================================ */
const EXISTING_SOURCES = [
  { t: "Internal company records", d: "almost any department" },
  { t: "Business database services", d: "Dow Jones & Co." },
  { t: "Government agencies", d: "U.S. Department of Labor" },
  { t: "Industry associations", d: "Travel Industry Association of America" },
  { t: "Special-interest organizations", d: "Graduate Management Admission Council (GMAT)" },
  { t: "The Internet", d: "more and more firms" },
];

const INTERNAL_RECORDS = [
  { r: "Employee records", d: "Name, address, social security number" },
  { r: "Production records", d: "Part number, quantity produced, direct labor cost, material cost" },
  { r: "Inventory records", d: "Part number, quantity in stock, reorder level, economic order quantity" },
  { r: "Sales records", d: "Product number, sales volume, sales volume by region" },
  { r: "Credit records", d: "Customer name, credit limit, accounts receivable balance" },
  { r: "Customer profile", d: "Age, gender, income, household size" },
];

const GOV_AGENCIES = [
  { a: "Census Bureau", w: "www.census.gov", d: "Population data, number of households, household income" },
  { a: "Federal Reserve Board", w: "www.federalreserve.gov", d: "Data on money supply, exchange rates, discount rates" },
  { a: "Office of Mgmt. & Budget", w: "www.whitehouse.gov/omb", d: "Data on revenue, expenditures, debt of federal government" },
  { a: "Department of Commerce", w: "www.doc.gov", d: "Data on business activity, value of shipments, profit by industry" },
  { a: "Bureau of Labor Statistics", w: "www.bls.gov", d: "Customer spending, unemployment rate, hourly earnings, safety record" },
];

const V_STEPS = [
  { t: "Descriptive analytics", d: "Describes what has happened in the past.", icon: BookOpen },
  { t: "Predictive analytics", d: "Uses models constructed from past data to predict the future or to assess the impact of one variable on another.", icon: TrendingUp },
  { t: "Prescriptive analytics", d: "The set of analytical techniques that yield a best course of action.", icon: Zap },
];

export function StmSourcesSection() {
  return (
    <Section id="sources">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Chapter 1 · sections 1.3–1.9"
          title={
            <>
              Where data lives — and what we <span className="grad-violet">do with it</span>
            </>
          }
          lead="Sources and studies, the Hudson Auto loop from a table of 50 invoices to a statement about every tune-up, the analytics ladder, big data's three V's, and the ethics of the craft."
        />

        {/* 1 · existing sources */}
        <StmReadStep n="01" title="Existing sources" sub="Somebody already collected it — six places to look first" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {EXISTING_SOURCES.map((s, i) => (
            <Reveal key={s.t} delay={i * 60}>
              <div className="card-warm lift h-full p-4">
                <p className="text-[.88rem] font-extrabold text-[#3e2c1d]">{s.t}</p>
                <p className="mt-1 text-[.78rem] leading-relaxed text-muted-warm">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* internal records table */}
        <Reveal delay={80}>
          <div className="mt-4 overflow-x-auto rounded-2xl">
            <table className="warm-table min-w-[560px]">
              <thead>
                <tr>
                  <th>Record</th>
                  <th>Some of the data available</th>
                </tr>
              </thead>
              <tbody>
                {INTERNAL_RECORDS.map((r) => (
                  <tr key={r.r}>
                    <td className="font-bold">{r.r}</td>
                    <td>{r.d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-center text-[.7rem] font-bold uppercase tracking-[.16em] text-[#a08cc9]">
            Data available from internal company records
          </p>
        </Reveal>

        {/* government agencies table */}
        <Reveal delay={120}>
          <div className="mt-6 overflow-x-auto rounded-2xl">
            <table className="warm-table min-w-[640px]">
              <thead>
                <tr>
                  <th>Government agency</th>
                  <th>Web address</th>
                  <th>Some of the data available</th>
                </tr>
              </thead>
              <tbody>
                {GOV_AGENCIES.map((g) => (
                  <tr key={g.a}>
                    <td className="font-bold">{g.a}</td>
                    <td className="font-mono text-[.78rem]">{g.w}</td>
                    <td>{g.d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-center text-[.7rem] font-bold uppercase tracking-[.16em] text-[#a08cc9]">
            Data available from selected government agencies
          </p>
        </Reveal>

        {/* 2 · two kinds of studies */}
        <StmReadStep n="02" title="Observational vs experimental studies" sub="Watch, or intervene — the deepest trade-off in data collection" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm lift h-full p-5">
              <span className="chip"><FileSearch className="h-3.5 w-3.5" /> Observational (nonexperimental)</span>
              <p className="mt-3 text-[.9rem] leading-relaxed text-[#2b2014]">
                <b>No attempt is made to control or influence</b> the variables of interest.
                Example — a <b>survey</b>.
              </p>
              <p className="mt-2 text-[.82rem] leading-relaxed text-muted-warm">
                Studies of smokers and nonsmokers are observational because researchers do not
                determine or control who will smoke and who will not.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-warm lift h-full p-5">
              <span className="chip"><Scale className="h-3.5 w-3.5" /> Experimental</span>
              <p className="mt-3 text-[.9rem] leading-relaxed text-[#2b2014]">
                The variable of interest is first identified. Then one or more other variables
                are identified and <b>controlled</b> so data can be obtained about how they
                influence the variable of interest.
              </p>
              <p className="mt-2 text-[.82rem] leading-relaxed text-muted-warm">
                The largest experimental study ever conducted is believed to be the{" "}
                <b>1954 Public Health Service experiment for the Salk polio vaccine</b> — nearly
                two million U.S. children (grades 1 through 3) were selected.
              </p>
            </div>
          </Reveal>
        </div>

        <StmCallout kind="warn" title="Data acquisition considerations">
          <b>Time</b> — searching for information can be time consuming, and information may no
          longer be useful by the time it is available. <b>Cost</b> — organizations often charge
          for information even when it is not their primary business activity. <b>Data errors</b>{" "}
          — using any data that happen to be available, or were acquired with little care, can
          lead to misleading information.
        </StmCallout>

        {/* 3 · Hudson: descriptive → inferential */}
        <StmReadStep n="03" title="The Hudson Auto loop" sub="50 invoices in, one statement about every tune-up out" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm lift h-full p-5">
              <p className="font-mono text-[.68rem] font-bold uppercase tracking-[.2em]" style={{ color: STM_G[700] }}>Descriptive statistics</p>
              <p className="mt-2 text-[.9rem] leading-relaxed text-[#2b2014]">
                Most of the statistical information in newspapers, magazines, and company reports
                consists of data <b>summarized and presented in a form that is easy to
                understand</b> — tabular, graphical, or numerical. Such summaries are{" "}
                <b>descriptive statistics</b>.
              </p>
              <p className="mt-2 text-[.82rem] leading-relaxed text-muted-warm">
                Hudson&rsquo;s manager examines <b>50 customer invoices</b> for engine tune-ups;
                parts costs (rounded to the nearest dollar) become a frequency table, a histogram,
                and a mean.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-warm lift h-full p-5">
              <p className="font-mono text-[.68rem] font-bold uppercase tracking-[.2em]" style={{ color: STM_G[700] }}>Statistical inference — the vocabulary</p>
              <ul className="mt-2 space-y-1.5 text-[.85rem] leading-relaxed text-muted-warm">
                <li>· <b>Population</b> — the set of ALL elements of interest in a particular study</li>
                <li>· <b>Sample</b> — a subset of the population</li>
                <li>· <b>Statistical inference</b> — using data from a sample to make estimates and test hypotheses about the characteristics of a population</li>
                <li>· <b>Census</b> — collecting data for the entire population</li>
                <li>· <b>Sample survey</b> — collecting data for a sample</li>
              </ul>
            </div>
          </Reveal>
        </div>

        {/* the 4-step flow */}
        <Reveal delay={120}>
          <div className="card-warm mt-4 overflow-hidden p-4 sm:p-6">
            <p className="text-[.9rem] font-bold text-[#3e2c1d]">Process of statistical inference — Hudson Auto, step by step</p>
            <div className="mt-4 grid gap-2 lg:grid-cols-4">
              {[
                { n: "1", t: "Population", d: "consists of all tune-ups. Average cost of parts is unknown." },
                { n: "2", t: "Sample", d: "a sample of 50 engine tune-ups is examined." },
                { n: "3", t: "Sample data", d: "provides a sample average parts cost of $79 per tune-up." },
                { n: "4", t: "Estimate", d: "the sample average is used to estimate the population average." },
              ].map((s, i) => (
                <div key={s.n} className="relative rounded-xl border p-4" style={{ borderColor: STM_G.border, background: i === 3 ? STM_G.wash : "#fffdf9" }}>
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg text-[.72rem] font-black text-white" style={{ background: STM_BTN_GRAD }}>
                    {s.n}
                  </span>
                  <p className="mt-2 text-[.88rem] font-extrabold text-[#3e2c1d]">{s.t}</p>
                  <p className="mt-1 text-[.78rem] leading-relaxed text-muted-warm">{s.d}</p>
                  {i < 3 ? (
                    <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 lg:block" style={{ color: STM_G[600] }} />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* 4 · analytics ladder */}
        <StmReadStep n="04" title="Analytics" sub="The scientific process of transforming data into insight for making better decisions" />
        <div className="grid gap-3 md:grid-cols-3">
          {V_STEPS.map((s, i) => (
            <Reveal key={s.t} delay={i * 90}>
              <div className="card-warm lift h-full p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-md" style={{ background: STM_BTN_GRAD }}>
                  <s.icon className="h-4.5 w-4.5" />
                </span>
                <p className="mt-3 text-[.95rem] font-extrabold text-[#3e2c1d]">{s.t}</p>
                <p className="mt-1 text-[.8rem] leading-relaxed text-muted-warm">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* 5 · big data */}
        <StmReadStep n="05" title="Big data & data mining" sub="Large and complex data sets — and the machinery that mines them" />
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { v: "Volume", d: "Amount of available data." },
            { v: "Velocity", d: "Speed at which data is collected and processed." },
            { v: "Variety", d: "Different data types." },
          ].map((v, i) => (
            <Reveal key={v.v} delay={i * 80}>
              <div className="card-warm lift p-5 text-center">
                <p className="font-mono text-2xl font-black" style={{ color: STM_G[800] }}>
                  {v.v.charAt(0)}
                </p>
                <p className="mt-1 text-[.95rem] font-extrabold text-[#3e2c1d]">{v.v}</p>
                <p className="mt-1 text-[.8rem] leading-relaxed text-muted-warm">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <Reveal>
            <StmPanel
              label="Data warehousing — capture · store · maintain"
            >{`Magnetic card readers · bar code scanners ·
point-of-sale terminals · touch screen monitors

Walmart  → 20 to 30 MILLION transactions per day
Visa     → 6,800 payment transactions PER SECOND`}</StmPanel>
          </Reveal>
          <Reveal delay={100}>
            <StmPanel
              tone="sepia"
              label="Data mining — statistics + math + computer science"
            >{`"Mine the data" → convert it into useful
decision-making information.

Applications: related-product pop-ups · discount
offers based on past purchasing volumes
Requirements: multiple & logistic regression,
correlation · AI and machine learning · serious
time and money`}</StmPanel>
          </Reveal>
        </div>

        <StmCallout kind="why" title="Model reliability — the overfitting warning">
          A model that works well for one sample cannot automatically be applied to other data.
          With enormous data available, partition it into a <b>training set</b> (model
          development) and a <b>test set</b> (validating the model) — but beware{" "}
          <b>overfitting</b>, to the point that misleading associations and conclusions appear to
          exist. Careful interpretation of results and extensive testing is important.
        </StmCallout>

        {/* 6 · ethics */}
        <StmReadStep n="06" title="Ethical guidelines for statistical practice" sub="Fair, thorough, objective, neutral — and suspicious as a consumer" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm h-full p-5">
              <p className="text-[.92rem] font-extrabold text-[#3e2c1d]">Unethical behavior takes many forms</p>
              <ul className="mt-3 space-y-1.5 text-[.85rem] leading-relaxed text-muted-warm">
                {[
                  "Improper sampling",
                  "Inappropriate analysis of the data",
                  "Development of misleading graphs",
                  "Use of inappropriate summary statistics",
                  "Biased interpretation of the statistical results",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <X className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: "#b3402c" }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-warm h-full p-5">
              <p className="text-[.92rem] font-extrabold text-[#3e2c1d]">The ASA&rsquo;s answer</p>
              <p className="mt-3 text-[.85rem] leading-relaxed text-muted-warm">
                The <b>American Statistical Association</b> developed the report{" "}
                <i>&ldquo;Ethical Guidelines for Statistical Practice&rdquo;</i> —{" "}
                <b style={{ color: STM_G[800] }}>67 guidelines organized into 8 topic areas</b>:
              </p>
              <ul className="mt-2 space-y-1 text-[.78rem] leading-relaxed text-muted-warm">
                {[
                  "Professionalism",
                  "Responsibilities to Funders, Clients, Employers",
                  "Responsibilities in Publications and Testimony",
                  "Responsibilities to Research Subjects",
                  "Responsibilities to Research Team Colleagues",
                  "Responsibilities to Other Statisticians/Practitioners",
                  "Responsibilities Regarding Allegations of Misconduct",
                  "Responsibilities of Employers Including Organizations, Individuals, Attorneys, or Other Clients",
                ].map((t, i) => (
                  <li key={t} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: STM_G[700] }} />
                    <span><b>{i + 1}.</b> {t}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[.82rem] leading-relaxed text-[#2b2014]">
                Strive to be <b>fair, thorough, objective, and neutral</b> as you collect, analyze,
                and present data — and as a <b>consumer</b> of statistics, be aware of the
                possibility of unethical behavior by others.
              </p>
            </div>
          </Reveal>
        </div>

        {/* practice wall */}
        <StmReadStep n="07" title="Practice questions — the deck's own answer key" sub="Five questions, checked instantly" />
        <div className="grid gap-3">
          <Reveal>
            <StmQuiz
              source="Chapter 1 · Q1 — answer key: b"
              q="In a questionnaire, respondents are asked to mark their gender as male or female. The scale of measurement for gender is the ______ scale."
              options={["ordinal", "nominal", "ratio", "interval"]}
              answer={1}
              explain="Gender is a label identifying an attribute — the nominal scale (a nonnumeric label or a numeric code may be used)."
            />
          </Reveal>
          <Reveal>
            <StmQuiz
              source="Chapter 1 · Q2 — answer key: c"
              q="Data are…"
              options={["always numeric", "always non-numeric", "the raw material of statistics", "always categorical"]}
              answer={2}
              explain="Data are the facts and figures collected, analyzed, and summarized for presentation and interpretation — the raw material of statistics."
            />
          </Reveal>
          <Reveal>
            <StmQuiz
              source="Chapter 1 · Q3 — answer key: b"
              q="The summaries of data, which may be tabular, graphical, or numerical, are referred to as ______ statistics."
              options={["inferential", "descriptive", "observational", "experimental"]}
              answer={1}
              explain="Descriptive statistics = tabular, graphical, and numerical summaries of data."
            />
          </Reveal>
          <Reveal>
            <StmQuiz
              source="Chapter 1 · Q4 — answer key: c"
              q="Statistical inference is…"
              options={[
                "the process of drawing inferences about the sample based on the characteristics of the population",
                "the same as descriptive statistics",
                "the process of drawing inferences about the population based on the information taken from the sample",
                "the same as a census",
              ]}
              answer={2}
              explain="Sample → population. That arrow is the whole definition — a census collects data for the entire population instead."
            />
          </Reveal>
          <Reveal>
            <StmQuiz
              source="Chapter 1 · Q5 — answer key: c"
              q="Data collected at the same, or approximately the same point in time are ______ data."
              options={["time series", "approximate time series", "cross-sectional", "approximate"]}
              answer={2}
              explain="Same point in time → cross-sectional. Over several time periods → time series."
            />
          </Reveal>
        </div>

        {/* Netflix case */}
        <StmReadStep n="08" title="Case — Netflix and the power of data-driven decision making" sub="The opening reading of the course, in numbers" />
        <Reveal>
          <div className="card-warm overflow-hidden">
            <div className="p-5" style={{ background: "linear-gradient(135deg,#1c0f2e,#2b1a45)" }}>
              <p className="flex items-center gap-2 text-[.8rem] font-extrabold uppercase tracking-[.16em] text-[#c4b5fd]">
                <Tv className="h-4 w-4" /> Statistics in practice
              </p>
              <p className="mt-2 font-display text-2xl font-black text-[#f3edff]">
                300,000,000+ paid subscriptions · 190+ countries
              </p>
              <p className="mt-1 text-[.85rem] leading-relaxed text-[#c9bce4]">
                Netflix is one of the largest streaming entertainment services in the world — and
                its content and data science teams decide which shows to produce, which films to
                license, and how to personalize delivery for every subscriber.
              </p>
            </div>
            <div className="grid gap-4 p-5 md:grid-cols-2">
              <div>
                <p className="text-[.85rem] font-extrabold uppercase tracking-[.12em]" style={{ color: STM_G[700] }}>Decisions the data drives</p>
                <ul className="mt-2 space-y-1.5 text-[.84rem] leading-relaxed text-muted-warm">
                  <li>· <b>Greenlighting original series</b> based on projected subscriber demand — and cancelling series that fail performance benchmarks</li>
                  <li>· <b>Adjusting the recommendation algorithm</b> to reduce subscriber churn</li>
                  <li>· <b>A/B testing different artwork</b> for the same content in different regions — supported by in-depth statistical analysis of viewer data</li>
                </ul>
              </div>
              <div>
                <p className="text-[.85rem] font-extrabold uppercase tracking-[.12em]" style={{ color: STM_G[700] }}>Metrics + internal operations</p>
                <ul className="mt-2 space-y-1.5 text-[.84rem] leading-relaxed text-muted-warm">
                  <li>· Subscriber growth rates, average revenue per user, content engagement scores, regional preferences guide executives</li>
                  <li>· Regular surveys, behavioral tracking, and statistical summaries reveal growth trends, seasonal fluctuations, and regional differences</li>
                  <li>· Analysts guide investment across departments: high engagement → invest in similar content; reduced engagement → schedule or marketing changes</li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <Takeaways
          items={[
            <>Look for <b>existing sources</b> first — internal records, database services, government agencies, the Internet.</>,
            <>Observational studies <b>control nothing</b> (surveys, smokers vs nonsmokers); experimental studies <b>control the inputs</b> — the 1954 Salk polio experiment screened ~2 million children.</>,
            <>The Hudson loop: <b>population → sample → statistic → estimate</b>. Descriptive describes; inference prices the population.</>,
            <>Big data's three V's — <b>Volume, Velocity, Variety</b>; mining needs regression + AI/ML + a training/test discipline against overfitting.</>,
            <>Practice <b>fairness, thoroughness, objectivity, neutrality</b> — the ASA's 67 guidelines in 8 areas.</>,
          ]}
        />
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER 2 · MOVEMENT 1 — SUMMARIZING CATEGORICAL DATA
   Marada Inn: frequency → relative → percent → bar → pie.
   ============================================================ */
const MARADA = [
  { r: "Poor", f: 2, rel: 0.10, pct: 10, color: "#c4b5fd" },
  { r: "Below Average", f: 3, rel: 0.15, pct: 15, color: "#a78bfa" },
  { r: "Average", f: 5, rel: 0.25, pct: 25, color: "#8b5cf6" },
  { r: "Above Average", f: 9, rel: 0.45, pct: 45, color: "#6d28d9" },
  { r: "Excellent", f: 1, rel: 0.05, pct: 5, color: "#ddd6fe" },
];
const MARADA_TOTAL = 20;

/** precompute the pie's arc paths once, at module scope (pure —
 *  no render-time mutation) */
function maradaArcs() {
  const R = 92;
  const CX = 130;
  const CY = 118;
  let acc = -90; // start at 12 o'clock
  return MARADA.map((m) => {
    const start = acc;
    const sweep = (m.pct / 100) * 360;
    acc += sweep;
    const a0 = (start * Math.PI) / 180;
    const a1 = ((start + sweep) * Math.PI) / 180;
    const x0 = CX + R * Math.cos(a0);
    const y0 = CY + R * Math.sin(a0);
    const x1 = CX + R * Math.cos(a1);
    const y1 = CY + R * Math.sin(a1);
    const large = sweep > 180 ? 1 : 0;
    return {
      ...m,
      d: `M ${CX} ${CY} L ${x0} ${y0} A ${R} ${R} 0 ${large} 1 ${x1} ${y1} Z`,
    };
  });
}

const MARADA_ARCS = maradaArcs();

function MaradaPie() {
  const arcs = MARADA_ARCS;
  return (
    <svg viewBox="0 0 420 240" className="h-auto w-full" role="img" aria-label="Marada Inn quality ratings pie chart: Above Average 45%, Average 25%, Below Average 15%, Poor 10%, Excellent 5%">
      {arcs.map((a, i) => (
        <motion.path
          key={a.r}
          d={a.d}
          fill={a.color}
          stroke="#fffdf9"
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.12 }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
      ))}
      {arcs.map((a) => {
        const lx = 250;
        const ly = 22 + MARADA.indexOf(a) * 22;
        return (
          <g key={`leg-${a.r}`}>
            <rect x={lx} y={ly - 9} width="12" height="12" rx="3" fill={a.color} />
            <text x={lx + 20} y={ly + 2} fontSize="12.5" fontWeight="700" fill="#3e2c1d">
              {a.r} — {a.pct}%
            </text>
          </g>
        );
      })}
      <text x="130" y={222} textAnchor="middle" fontSize="11.5" fill="#8a7fae">Marada Inn quality ratings · n = 20 guests</text>
    </svg>
  );
}

export function StmCategoricalSection() {
  return (
    <Section id="categorical">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Chapter 2 · Descriptive Statistics: Tabular & Graphical Displays — 2.1"
          title={
            <>
              Summarizing <span className="grad-violet">categorical</span> data
            </>
          }
          lead="Guests at the Marada Inn rated their stay in five categories. Twenty opinions become one table, two charts, and two uncomfortable insights for the manager."
        />

        <StmReadStep n="01" title="Frequency distribution" sub="A tabular summary of the number of observations in each non-overlapping class" />
        <Reveal>
          <div className="grid items-start gap-4 md:grid-cols-2">
            <div className="overflow-x-auto rounded-2xl">
              <table className="warm-table">
                <thead>
                  <tr>
                    <th>Rating</th>
                    <th>Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {MARADA.map((m) => (
                    <tr key={m.r}>
                      <td className="font-bold">{m.r}</td>
                      <td>{m.f}</td>
                    </tr>
                  ))}
                  <tr>
                    <td className="font-black">Total</td>
                    <td className="font-black">{MARADA_TOTAL}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <StmCallout kind="insight" title="Definition">
              A <b>frequency distribution</b> is a tabular summary of data showing the{" "}
              <b>number (frequency)</b> of observations in each of several{" "}
              <b>non-overlapping categories or classes</b>. Guests rated the quality of their
              accommodations as <i>excellent, above average, average, below average, or poor</i>.
            </StmCallout>
          </div>
        </Reveal>

        <StmReadStep n="02" title="Relative & percent frequency" sub="Divide by n — then multiply by 100" />
        <Reveal>
          <div className="grid items-start gap-4 md:grid-cols-2">
            <div className="overflow-x-auto rounded-2xl">
              <table className="warm-table">
                <thead>
                  <tr>
                    <th>Rating</th>
                    <th>Relative frequency</th>
                    <th>Percent frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {MARADA.map((m) => (
                    <tr key={m.r}>
                      <td className="font-bold">{m.r}</td>
                      <td className="font-mono">{m.rel.toFixed(2)}</td>
                      <td className="font-mono">{m.pct}%</td>
                    </tr>
                  ))}
                  <tr>
                    <td className="font-black">Total</td>
                    <td className="font-black font-mono">1.00</td>
                    <td className="font-black font-mono">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="space-y-3">
              <StmPanel label="The two formulas">{`Relative frequency = Frequency / n

Percent frequency = Relative frequency × 100

(Pie sectors: a class with relative frequency
 0.25 consumes 0.25 × 360 = 90 degrees)`}</StmPanel>
            </div>
          </div>
        </Reveal>

        <StmReadStep n="03" title="Bar chart & pie chart" sub="Bars stay separated (separate categories); the pie divides the circle" />
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="card-warm h-full p-5">
              <p className="text-[.9rem] font-bold text-[#3e2c1d]">Marada Inn quality ratings — bar chart</p>
              <div className="mt-4 flex h-44 items-end justify-around gap-2.5 border-b border-[#e6e0f8] pb-0">
                {MARADA.map((m, i) => (
                  <div key={m.r} className="flex h-full w-full flex-col items-center justify-end">
                    <motion.div
                      className="w-full max-w-[54px] rounded-t-lg"
                      style={{ background: `linear-gradient(180deg, ${m.color}, #7c3aed)` }}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(m.f / 10) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-2 flex justify-around gap-2.5">
                {MARADA.map((m) => (
                  <span key={m.r} className="w-full text-center text-[.6rem] font-bold leading-tight text-[#6f5c8f]">
                    {m.r}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-[.8rem] leading-relaxed text-muted-warm">
                A <b>bar of fixed width</b> is drawn above each class label with the height
                extended appropriately — and the bars are <b>separated</b> to emphasize that each
                class is a separate category.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-warm h-full p-5">
              <p className="text-[.9rem] font-bold text-[#3e2c1d]">Marada Inn quality ratings — pie chart</p>
              <MaradaPie />
              <p className="mt-1 text-[.8rem] leading-relaxed text-muted-warm">
                First draw a <b>circle</b>; then use the relative frequencies to subdivide the
                circle into sectors corresponding to each class — the common display for relative
                and percent frequency distributions of categorical data.
              </p>
            </div>
          </Reveal>
        </div>

        <StmReadStep n="04" title="Reading the pie like a manager" sub="Two findings — one pleasant, one not" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <StmCallout kind="insight" title="Might please the manager">
              Half of the customers surveyed gave Marada a quality rating of{" "}
              <b>&ldquo;above average&rdquo; or &ldquo;excellent&rdquo;</b> — 45% + 5% = 50% (look
              at the left side of the pie).
            </StmCallout>
          </Reveal>
          <Reveal delay={100}>
            <StmCallout kind="warn" title="Should displease the manager">
              For each customer who gave an <b>&ldquo;excellent&rdquo;</b> rating, there were{" "}
              <b>two</b> customers who gave a <b>&ldquo;poor&rdquo;</b> rating — 2 poor vs 1
              excellent (look at the top of the pie).
            </StmCallout>
          </Reveal>
        </div>

        <StmReadStep n="05" title="Concept check — categorical data" sub="The deck's five checks, answered" />
        <div className="grid gap-3">
          <Reveal>
            <StmQuiz
              source="Concept check 1 · Q3 — answer key: d"
              q="Fifteen percent of the students in a school of Business Administration are majoring in Economics, 20% in Finance, 35% in Management, and 30% in Accounting. The graphical device(s) which can be used to present these data is (are)…"
              options={["a line chart", "only a bar chart", "only a pie chart", "both a bar chart and a pie chart"]}
              answer={3}
              explain="Percent-frequency distributions of categorical data can be displayed as either — the bar chart shows magnitudes side by side; the pie shows shares of the whole."
            />
          </Reveal>
          <Reveal>
            <StmQuiz
              source="Concept check 1 · Q4 + Q5 — answer key: c / d"
              q="The sum of the relative frequencies for all classes will always equal… and the sum of the percent frequencies will always equal…"
              options={["the sample size · 100", "one · the number of classes", "one · 100", "100 · one"]}
              answer={2}
              explain="Relative frequencies are fractions of the whole → they sum to ONE; percent frequencies are those ×100 → they sum to 100. Marada's table shows both: 1.00 and 100%."
            />
          </Reveal>
        </div>

        <Takeaways
          items={[
            <>Frequency → relative (÷n) → percent (×100): <b>one table, three views of the same 20 guests</b>.</>,
            <>Bar charts <b>separate</b> their bars (categories); pie sectors consume <b>relative frequency × 360°</b> of the circle.</>,
            <>Marada's pie: <b>50% above average or excellent</b> — but <b>two poor ratings per excellent</b>.</>,
          ]}
        />
      </div>
    </Section>
  );
}
