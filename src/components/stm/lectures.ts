"use client";

/* ============================================================
   STM — the lecture sequence (shelf 05).

   "Statistics for Managers" is now mapped 1:1 to the official
   lecture deck (Dr. Deepak Silvastov, IIT Jodhpur): Lecture 1
   → Lecture 27, in order, no gaps. Each lecture opens with a
   "Statistics for Managers Lecture N" band and renders exactly
   the chapters it owns. Editing this one table re-maps the
   whole reader.

   Section ids / labels / descs stay byte-identical wherever a
   chapter already existed — the search corpus, the ⌘K palette,
   the progress store and the SM-2 cards all key off them.
   ============================================================ */

export interface StmLectureChapter {
  id: string; // the rendered <Section id> — also the ⌘K / flash-jump key
  label: string;
  desc: string;
}

export interface StmLecture {
  id: string; // "l1".."l27"
  n: number; // lecture number — matches the official deck
  code: string; // badge text: "L1".."L27"
  title: string;
  blurb: string;
  chapters: StmLectureChapter[];
}

export const STM_LECTURES: StmLecture[] = [
  {
    id: "l1",
    n: 1,
    code: "L1",
    title: "Data and Statistics — the Manager's Lens",
    blurb:
      "Statistics is two things at once: the numbers a manager collects and the toolkit that reads them. Meet the data-anatomy table, the six business places statistics is computed, and the descriptive-to-inferential loop every later lecture rides.",
    chapters: [
      { id: "lens", label: "What is statistics?", desc: "Two meanings, six business applications" },
      { id: "scales", label: "Scales of measurement", desc: "Nominal → ordinal → interval → ratio" },
    ],
  },
  {
    id: "l2",
    n: 2,
    code: "L2",
    title: "Where Data Lives — Sources, Analytics & Ethics",
    blurb:
      "From internal records to government agencies to the web and AI: where data actually comes from, the analytics loop that turns it into decisions, big data's volume–velocity–variety — and the ethical guardrails every analyst should keep.",
    chapters: [
      { id: "sources", label: "Sources, analytics & ethics", desc: "Hudson's loop, big data, the ASA" },
    ],
  },
  {
    id: "l3",
    n: 3,
    code: "L3",
    title: "The Course Briefing — Tools, Rules & the Way In",
    blurb:
      "The live opener: Prof. Silvastov's 30+10 format, the Anderson–Sweeney textbook, the Excel + R toolkit every manager installs before session two, how the quizzes and end-term grade — and the AI policy that keeps the work honest.",
    chapters: [
      { id: "course-tools", label: "Course & tools", desc: "The syllabus, Excel + R, the AI policy" },
    ],
  },
  {
    id: "l4",
    n: 4,
    code: "L4",
    title: "Summarizing Data — Marada Inn, Hudson's Bins & Simpson's Trap",
    blurb:
      "Descriptive statistics is the first step from raw data to actionable information: categorical frequencies, bar and pie, quantitative class intervals and histograms, cumulative distributions — then two variables at once, and Simpson's paradox waiting inside the crosstab.",
    chapters: [
      { id: "categorical", label: "Categorical displays", desc: "Marada Inn: tables, bars, pie" },
      { id: "quantitative", label: "Quantitative displays", desc: "Histograms, dot plots, stem-and-leaf" },
      { id: "twovars", label: "Two variables", desc: "Crosstabs, Simpson's paradox, dashboards" },
    ],
  },
  {
    id: "l5",
    n: 5,
    code: "L5",
    title: "Two Variables Graphed & Where the Centre Lives",
    blurb:
      "Scatter diagrams put two quantitative variables on one canvas: positive, negative, or no relationship — trend lines make the direction visible, side-by-side and stacked bars compress the tables. Then the centre: mean, median, mode, weighted and geometric means, percentiles and quartiles.",
    chapters: [
      { id: "scatter", label: "Scatter studio", desc: "Trend lines, side-by-side & stacked bars" },
      { id: "location", label: "Measures of location", desc: "Mean, median, mode, percentiles" },
    ],
  },
  {
    id: "l6",
    n: 6,
    code: "L6",
    title: "Measures of Spread — σ, z and the Shape of the Data",
    blurb:
      "Location alone can mislead: quick commerce may promise 10–20 minutes but vary wildly. Range, IQR, variance and σ — computed live on the rents (s = 54.74) — then skewness, z-scores, Chebyshev's floor, the empirical 68-95-99.7 bell, and the ±3σ outlier rule.",
    chapters: [
      { id: "variability", label: "Variability & shape", desc: "Range, IQR, σ, z, box plots" },
    ],
  },
  {
    id: "l7",
    n: 7,
    code: "L7",
    title: "The Box Plot, Association & the Doors of Probability",
    blurb:
      "Draw the box: five numbers, whisker limits at 1.5 × IQR, outliers flagged beyond. Then association — covariance's sign, correlation's −1 to +1 — and the probability doors open: random experiments, sample spaces, counting rules, and the three ways a probability is assigned.",
    chapters: [
      { id: "association", label: "Association", desc: "Covariance & correlation" },
      { id: "prob-basics", label: "Experiments & counting", desc: "Sample space, counting rules, priors" },
    ],
  },
  {
    id: "l8",
    n: 8,
    code: "L8",
    title: "The Pelican Stores Case — Descriptive Analysis That Sells",
    blurb:
      "One hundred transactions during a promotion: who came, what they bought, how they paid. COUNTIF, pivot tables, means per payment method, scatter plots of age vs sales — the coupon case where descriptive statistics becomes a manager's day job.",
    chapters: [
      { id: "pelican", label: "Case: Pelican Stores", desc: "COUNTIF, pivots, the 70% coupon cohort" },
    ],
  },
  {
    id: "l9",
    n: 9,
    code: "L9",
    title: "Events, the Laws & the Venn Laboratory",
    blurb:
      "Events compose: complements stay inside the sample space, unions add, intersections overlap — the addition law with mutually exclusive as its special case, then conditional probability, the multiplication law, and the independence test that separates 'no overlap' from 'no influence'.",
    chapters: [
      { id: "prob-laws", label: "Events & the laws", desc: "Union, intersection, conditionals" },
      { id: "bayes", label: "Bayes' theorem", desc: "Prior → information → posterior" },
    ],
  },
  {
    id: "l10",
    n: 10,
    code: "L10",
    title: "Random Variables & Expected Value",
    blurb:
      "A random variable is a number attached to every outcome — discrete like JSL's 0–4 TVs, continuous like the drive to the store. E(x) is its centre of gravity (1.2 TVs a day), variance its wobble, and every probability distribution must sum to exactly 1.",
    chapters: [
      { id: "discrete", label: "Random variables & E(x)", desc: "JSL's 1.20 TVs, DiCarlo's bivariate" },
    ],
  },
  {
    id: "l11",
    n: 11,
    code: "L11",
    title: "Bivariate, Binomial & Poisson — the Workhorses",
    blurb:
      "Two dealerships tracked over 300 days make a bivariate distribution; covariance and correlation measure how they move together. Then the workhorses: Evans' 0.243 binomial (four conditions), Mercy Hospital's 0.1680 Poisson arrivals (two conditions, mean = variance).",
    chapters: [
      { id: "binomial", label: "Binomial · Poisson · Hypergeometric", desc: "Evans, Mercy Hospital, Neveready" },
    ],
  },
  {
    id: "l12",
    n: 12,
    code: "L12",
    title: "Continuous Distributions — Probability as Area",
    blurb:
      "Probability becomes area under a curve: the cake-vs-biscuit analogy, Slater's uniform flight times, the normal curve with μ = median = mode, the 68-95-99.7 empirical rule — and Pep Zone's 0.2033 stockout tail, read off the standard normal table.",
    chapters: [
      { id: "continuous", label: "Uniform · Normal · Exponential", desc: "Slater, Pep Zone, Al's pump, HUL" },
    ],
  },
  {
    id: "l13",
    n: 13,
    code: "L13",
    title: "The Distribution Recap & the Quiz Map",
    blurb:
      "A consolidation lap: discrete vs continuous one more time, the TV-sales table rebuilt from 200 observed days, E(x) and variance walked cell by cell in Excel, the quiz logistics (two quizzes of 20 marks, best two of three) — and why formulas beat endless observation.",
    chapters: [
      { id: "dist-recap", label: "The recap lab", desc: "TV sales rebuilt, Excel steps, quiz map" },
    ],
  },
  {
    id: "l14",
    n: 14,
    code: "L14",
    title: "Normal in Practice — z-Tables & Reverse Probability",
    blurb:
      "Now solve with the table: football players over 250 pounds (z = 2 → 2.28%), salaries between 34k and 46k, and the reverse problem — start from a probability, land on a reorder point (z = 1.645 → 25 gallons). NORM.DIST and NORM.S.DIST close the loop, exponential opens the next door.",
    chapters: [
      { id: "normal-practice", label: "z-Tables in action", desc: "Forward & reverse normal problems" },
    ],
  },
  {
    id: "l15",
    n: 15,
    code: "L15",
    title: "Case: Specialty Toys — Ordering Under a Normal Sky",
    blurb:
      "Weather Teddy sells for $24, costs $16, clears at $5. Demand is normal around 20,000 with σ = 5,102 — so four order quantities trade profit against stockout probability, and a risk-based Q = μ + z·σ lands on 22,653 units. Order more, risk more.",
    chapters: [
      { id: "specialty-toys", label: "Case: Specialty Toys", desc: "Stockout odds, order quantities, risk" },
    ],
  },
  {
    id: "l16",
    n: 16,
    code: "L16",
    title: "Case: Go Bananas — Binomial Quality Control",
    blurb:
      "Twenty-five boxes a week, an 8% failure rate, a shutdown alarm at five. The binomial answers three manager problems: how often a good line stops (4.5%), whether to relax the rule to seven (0.3%, but the brand pays), or improve the process to 5% and keep the strict rule (~1%).",
    chapters: [
      { id: "go-bananas", label: "Case: Go Bananas", desc: "BINOM.DIST, thresholds, the 3-way fix" },
    ],
  },
  {
    id: "l17",
    n: 17,
    code: "L17",
    title: "Sampling & Point Estimation",
    blurb:
      "Why sample at all: blood you cannot drain, rice you taste by the spoonful, tires you must not destroy. Simple random samples from finite and infinite populations, the frame, and the point estimators — x̄ estimates μ, s estimates σ, p̂ estimates p — checked against the 900-admission truth.",
    chapters: [
      { id: "sampling", label: "Sampling & the case file", desc: "NICE Paper, Go Bananas, McNeil's" },
    ],
  },
  {
    id: "l18",
    n: 18,
    code: "L18",
    title: "Distributions Deciding — the Dealership & the Salaries",
    blurb:
      "Statistics allocating people: McNeill's 6.8-arrivals Poisson keeps the lot busy but not mobbed (5 salespeople → 37.2% overload; 8 → 8.5%), the $40,000 MBA salary normal answers three probability questions — and the 'exactly' vs 'at least' language rule that decides mass vs cumulative every time.",
    chapters: [
      { id: "mgmt-apps", label: "Distributions at work", desc: "Dealership staffing, salaries, language" },
    ],
  },
  {
    id: "l19",
    n: 19,
    code: "L19",
    title: "The Sampling Distribution & the Central Limit Theorem",
    blurb:
      "Draw many samples, collect the means, and a bell appears — the sampling distribution. x̄ is unbiased (its expected value is μ), the standard error σ/√n shrinks as n grows, the CLT normalizes any population past n = 30, and the same logic carries to proportions with np ≥ 5.",
    chapters: [
      { id: "clt", label: "Sampling distribution & CLT", desc: "σ/√n, unbiasedness, the n ≥ 30 rule" },
    ],
  },
  {
    id: "l20",
    n: 20,
    code: "L20",
    title: "Five Ways to Sample — and When to Trust Each",
    blurb:
      "Stratified splits the population into homogeneous strata, cluster leans on geography, systematic walks every kth element — while convenience and judgment skip the probabilities entirely. The comparison table tells managers which method the decision can afford to trust.",
    chapters: [
      { id: "sampling-methods", label: "Sampling methods", desc: "Stratified · cluster · systematic · the rest" },
    ],
  },
  {
    id: "l21",
    n: 21,
    code: "L21",
    title: "Case: Marrian Dairies — Sampling in a Market Entry",
    blurb:
      "BlueGurt rates 80 ± 25; StrawGurt wants the customers who score ≤ 75. With n = 50 the sampling distribution puts that chance at 7.86% — a small unhappy segment, and a cautious launch. Raise n to 150 and the estimate sharpens to 0.7%: sample size is precision.",
    chapters: [
      { id: "marrian-dairies", label: "Case: Marrian Dairies", desc: "σ/√50 = 3.5355, the 7.86% verdict" },
    ],
  },
  {
    id: "l22",
    n: 22,
    code: "L22",
    title: "Interval Estimation — the Confidence Ledger",
    blurb:
      "Sahadri's 1,000 stores cannot all be audited — so 50 do the work, at 5% of the cost. A point estimate alone wobbles; fix the probability first and the interval follows: x̄ ± z(α/2)·σ/√n, the 90/95/99 z-values, and the trade-off between certainty and width.",
    chapters: [
      { id: "interval-estimation", label: "Interval estimation", desc: "Margin of error, the 90/95/99 z's" },
    ],
  },
  {
    id: "l23",
    n: 23,
    code: "L23",
    title: "Sampling Distributions in Excel — Verify It Yourself",
    blurb:
      "RAND from 1 to 2,500, paste-special to freeze, sort, take the first 50: a live sampling distribution built in cells. Sample means cluster around 71,800; proportions cluster around 0.40; doubling n shrinks the standard error by √2 — the formulas verified, not just memorized.",
    chapters: [
      { id: "sampling-excel", label: "Sampling in Excel", desc: "RAND, the demo, the √2 law" },
    ],
  },
  {
    id: "l24",
    n: 24,
    code: "L24",
    title: "When σ Is Unknown — the t-Distribution",
    blurb:
      "Sigma rarely comes free: estimate it with s and switch to Student's t — born at the Guinness brewery, heavier-tailed, a whole family indexed by n − 1 degrees of freedom. Sixteen apartments, $750 ± 2.131(55/4): the 95% interval [720.7, 779.3], and the round-up rule for required n.",
    chapters: [
      { id: "t-distribution", label: "The t-distribution", desc: "df = n − 1, heavier tails, real CIs" },
    ],
  },
  {
    id: "l25",
    n: 25,
    code: "L25",
    title: "Estimating Proportions — the Exit Poll",
    blurb:
      "220 of 500 voters favour the candidate: p̂ = 0.44 ± 1.96·√(0.44×0.56/500) → [39.65%, 48.35%]. Planning a survey backwards: pick p*, square the z, divide by E² — and when nothing is known, p* = 0.5 is the conservative default that can never undershoot.",
    chapters: [
      { id: "proportions", label: "Proportion estimation", desc: "p̂ ± E, sample size, p* = 0.5" },
    ],
  },
  {
    id: "l26",
    n: 26,
    code: "L26",
    title: "Case: Transmission Failure — What the Descriptives Say",
    blurb:
      "Fifty Detroit repair records: mean 73,340, median 72,700, σ 24,849, no mode. The 95% interval [66,264, 80,416] hides the real story — 19 vehicles died below its floor, and the n = 96 recommendation follows. Averages need their distribution, or outliers run the brand.",
    chapters: [
      { id: "transmission", label: "Case: Transmission failure", desc: "Descriptives, CI, the early-failure tail" },
    ],
  },
  {
    id: "l27",
    n: 27,
    code: "L27",
    title: "Hypothesis Testing — the Court of Evidence",
    blurb:
      "Two competing statements enter, sample evidence judges: H₀ holds the status quo with its equality, Hₐ carries what you hope to prove. Right-tailed, left-tailed, two-tailed — and the two errors every decision risks: the false positive priced at α, the false negative harder to see.",
    chapters: [
      { id: "hypothesis", label: "Hypothesis testing", desc: "H₀ vs Hₐ, tails, Type I & II errors" },
    ],
  },
];

export const STM_DEFAULT_LECTURE = STM_LECTURES[0].id;

export function lectureOfChapter(chapterId: string): StmLecture | null {
  return STM_LECTURES.find((l) => l.chapters.some((c) => c.id === chapterId)) ?? null;
}

export function lectureById(id: string): StmLecture | null {
  return STM_LECTURES.find((l) => l.id === id) ?? null;
}

/** Every chapter id in reading order — the full chapter shelf. */
export const STM_ALL_CHAPTER_IDS = STM_LECTURES.flatMap((l) => l.chapters.map((c) => c.id));
