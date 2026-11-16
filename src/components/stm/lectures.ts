"use client";

/* ============================================================
   STM — the lecture sequence (shelf 05).

   "Statistics for Managers" arrived as one continuous slide
   deck (Chapters 1–8, Dr. Deepak Srivastav, IIT Jodhpur). The
   reader picks a lecture in the hero and the page below renders
   exactly that lecture's chapters. Editing this one table
   re-maps the whole reader.

   FULL PDF RE-MAP — the registry now carries ALL TWENTY-SEVEN
   lectures, numbered exactly as the deck numbers them. One
   lecture per section in course order; where the deck packed
   two arcs into one lecture (L4–L5, L7, L9), the lecture owns
   two sections. The chapter ids/labels/descs mirror the TopNav
   GROUPS in StmApp (the search index, progress store, ⌘K
   palette and SM-2 cards all depend on them staying identical).
   ============================================================ */

export interface StmLectureChapter {
  id: string; // the rendered <Section id> — also the ⌘K / flash-jump key
  label: string;
  desc: string;
}

export interface StmLecture {
  id: string; // "l1".."l27"
  n: number; // lecture number
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
    ],
  },
  {
    id: "l2",
    n: 2,
    code: "L2",
    title: "Understanding Data, Statistics & Analysis",
    blurb:
      "From internal records to AI scrapes: where data actually comes from, observational versus experimental collection, the analytics ladder — and the ethical guardrail that keeps cherry-picked charts honest.",
    chapters: [
      { id: "sources", label: "Sources, analytics & ethics", desc: "Hudson's loop, big data, the ASA" },
    ],
  },
  {
    id: "l3",
    n: 3,
    code: "L3",
    title: "Course Launch — Data Anatomy & the Scales",
    blurb:
      "Elements, variables, observations, datasets — the anatomy every table is built from — then the four-rung measurement ladder: nominal, ordinal, interval, ratio. Climb it correctly and the right summaries choose themselves.",
    chapters: [
      { id: "scales", label: "Scales of measurement", desc: "Nominal → ordinal → interval → ratio" },
    ],
  },
  {
    id: "l4",
    n: 4,
    code: "L4",
    title: "Descriptive Statistics — Tables & Displays",
    blurb:
      "Twenty guests at the Marada Inn become frequency tables, bars and pie; Hudson's audit hours need bins, histograms and stem-and-leaf. The course's first display machines, built live.",
    chapters: [
      { id: "categorical", label: "Categorical displays", desc: "Marada Inn: tables, bars, pie" },
      { id: "quantitative", label: "Quantitative displays", desc: "Histograms, dot plots, stem-and-leaf" },
    ],
  },
  {
    id: "l5",
    n: 5,
    code: "L5",
    title: "Two Variables & the Numerical Measures",
    blurb:
      "Crosstabs and Simpson's paradox show how one table can argue both ways; scatters and trend lines read relationships. Then the location measures — mean, median, mode, percentiles — with the outlier machine.",
    chapters: [
      { id: "twovars", label: "Two variables", desc: "Crosstabs, Simpson's paradox, dashboards" },
      { id: "location", label: "Measures of location", desc: "Mean, median, mode, percentiles" },
    ],
  },
  {
    id: "l6",
    n: 6,
    code: "L6",
    title: "Measures of Spread & Distribution Shape",
    blurb:
      "Spread is the second story: range, IQR, variance and σ — computed live on the rents (s = 54.74) — then z-scores, Chebyshev and the empirical rule flag the outliers before the box plot draws the whole shape at once.",
    chapters: [
      { id: "variability", label: "Variability & shape", desc: "Range, IQR, σ, z, box plots" },
    ],
  },
  {
    id: "l7",
    n: 7,
    code: "L7",
    title: "Box Plots, Association & Probability Doors",
    blurb:
      "The box plot's five-number summary and 1.5·IQR fences, then covariance and correlation on the desk. The second half opens probability: random experiments, sample spaces, counting rules and the three ways probabilities are assigned.",
    chapters: [
      { id: "association", label: "Association", desc: "Box plots, covariance & correlation" },
      { id: "prob-basics", label: "Experiments & counting", desc: "Sample space, counting rules, priors" },
    ],
  },
  {
    id: "l8",
    n: 8,
    code: "L8",
    title: "Case File I — Pelican Stores & the Excel Lab",
    blurb:
      "Chapters 1–2 close on real receipts: Pelican Stores profiles 100 promotional transactions with COUNTIF, pivot tables and the three readings of one table — and the Marada Inn recap turns chapters 1–2 into a checklist.",
    chapters: [
      { id: "case-file-1", label: "Case file I & Excel lab", desc: "Pelican Stores, COUNTIF, pivots" },
    ],
  },
  {
    id: "l9",
    n: 9,
    code: "L9",
    title: "The Probability Laws & Bayes' Revision",
    blurb:
      "Events compose: unions, intersections, complements — the addition law with mutually exclusive as its special case, then conditional probability, independence, and Bayes' prior-to-posterior machine, tabula by tabula.",
    chapters: [
      { id: "prob-laws", label: "Events & the laws", desc: "Union, intersection, conditionals" },
      { id: "bayes", label: "Bayes' theorem", desc: "Prior → information → posterior" },
    ],
  },
  {
    id: "l10",
    n: 10,
    code: "L10",
    title: "Random Variables & Discrete Distributions",
    blurb:
      "A random variable is a number attached to every outcome — and E(x) is its centre of gravity. JSL's expected 1.20 TVs per customer, the variance that sizes the safety stock, and DiCarlo's bivariate E(xy).",
    chapters: [
      { id: "discrete", label: "Random variables & E(x)", desc: "JSL's 1.20 TVs, DiCarlo's bivariate" },
    ],
  },
  {
    id: "l11",
    n: 11,
    code: "L11",
    title: "The Three Workhorses — Binomial · Poisson · Hypergeometric",
    blurb:
      "The three workhorses of discrete data: Evans' 0.243 binomial, Mercy Hospital's 0.1680 Poisson arrivals, Neveready's hypergeometric draws — each machine runs the formula live.",
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
      "Probability becomes area under a curve: Slater's uniform flight times, Pep Zone's 0.2033 normal tail and HUL's reorder point, Al's pump exponential lifetimes — and the empirical-rule bell that breathes.",
    chapters: [
      { id: "continuous", label: "Uniform · Normal · Exponential", desc: "Slater, Pep Zone, Al's pump, HUL" },
    ],
  },
  {
    id: "l13",
    n: 13,
    code: "L13",
    title: "The Distributions Checkpoint",
    blurb:
      "A consolidation stop: discrete versus continuous, why formulas replace re-counting, and the JSL demand-mix machine — 80 zero-sale days become 10-unit days and E(x) jumps 1.20 → 5.20. Quiz pattern briefed.",
    chapters: [
      { id: "dist-checkpoint", label: "Distributions checkpoint", desc: "Discrete vs continuous, E(x) shift machine" },
    ],
  },
  {
    id: "l14",
    n: 14,
    code: "L14",
    title: "The Z Laboratory",
    blurb:
      "Three requirements unlock every normal problem; Z = (x − μ)/σ collapses them onto one table. Forward mode prices a tail (0.2033), reverse mode builds a reorder point — μ = 15, σ = 6, a 5% stockout promise lands at 25 gallons.",
    chapters: [
      { id: "z-lab", label: "The Z laboratory", desc: "Standardise, read the table, reverse it" },
    ],
  },
  {
    id: "l15",
    n: 15,
    code: "L15",
    title: "Inventory by the Curve — Weather Teddy",
    blurb:
      "The normal distribution signs a purchase order: recover σ = 5,102 from the 95% demand band, price every order quantity's stockout risk, and let the 70% service level pick Q = 22,653 — with the dial that prices your own risk.",
    chapters: [
      { id: "toy-order", label: "Weather Teddy order", desc: "σ recovery, service-level dial, Q = 22,653" },
    ],
  },
  {
    id: "l16",
    n: 16,
    code: "L16",
    title: "Quality Control — the Discrete Cases",
    blurb:
      "NICE Paper's 500-tree forest sample, Go Bananas!' binomial shutdown rule (n = 25, p = 0.08, alarm at x ≥ 5) and the three levers that fix it — discrete distributions policing a production line.",
    chapters: [
      { id: "sampling", label: "Sampling & the case file", desc: "NICE Paper, Go Bananas, SRS" },
    ],
  },
  {
    id: "l17",
    n: 17,
    code: "L17",
    title: "Sampling — the Vocabulary of Estimation",
    blurb:
      "Element, population, sample, frame, census — seven words that carry every inference sentence — plus the statistic→parameter bridge (x̄→μ, s→σ, p̄→p) and the SRS procedure NICE Paper ran.",
    chapters: [
      { id: "point-estimation", label: "Sampling vocabulary", desc: "Frame, census, the bridge, SRS" },
    ],
  },
  {
    id: "l18",
    n: 18,
    code: "L18",
    title: "Distributions at Work — McNeil's Poisson Lot",
    blurb:
      "6.8 customers an hour, random and rate-constant: Poisson country. Translate 'more than two waiting with s servers' into X > s+2 — five salespeople fail at 37.2%, eight pass at 8.4% — and master exactly-vs-at-least in Excel.",
    chapters: [
      { id: "dist-apps", label: "Distributions at work", desc: "McNeil's staffing, PMF vs CDF" },
    ],
  },
  {
    id: "l19",
    n: 19,
    code: "L19",
    title: "Sampling Distributions & the CLT",
    blurb:
      "Every sample mean wobbles — and the distribution of all possible means is the bridge to inference: σ/√n, unbiased estimators, the Central Limit Theorem's n ≥ 30, and the salary simulator's means tightening around 71,800.",
    chapters: [
      { id: "sampling-dist", label: "Sampling distributions & CLT", desc: "σ/√n, the CLT, the salary simulator" },
    ],
  },
  {
    id: "l20",
    n: 20,
    code: "L20",
    title: "Five Ways to Ask — Sampling Designs",
    blurb:
      "Stratified, cluster, systematic, convenience, judgment — one animated population, five designs. The honesty line: can the accuracy of the result be evaluated? Only probability methods can say yes.",
    chapters: [
      { id: "sampling-methods", label: "Sampling methods", desc: "Stratified · cluster · systematic · convenience · judgment" },
    ],
  },
  {
    id: "l21",
    n: 21,
    code: "L21",
    title: "Case Study — Marrian Dairies' Market Entry",
    blurb:
      "BlueGurt scores μ = 80, σ = 25; StrawGurt wants the dissatisfied end. The sampling distribution prices the signal: P(X̄ ≤ 75) falls 7.86% → 0.72% → 0.003% as n climbs 50 → 150 → 400. Sample size is discriminative power.",
    chapters: [
      { id: "marrian-case", label: "Marrian Dairies case", desc: "BlueGurt/StrawGurt, the n-switcher" },
    ],
  },
  {
    id: "l22",
    n: 22,
    code: "L22",
    title: "Interval Estimation — σ Known",
    blurb:
      "Sahadri's 1,000-store census costs a fortune; 50 stores cost 5% of it. Fix the probability first, compute the range second: x̄ ± z(α/2)·σ/√n — the confidence dial stretches the income interval across 90, 95 and 99 percent.",
    chapters: [
      { id: "interval-known", label: "Interval estimation (σ known)", desc: "Margin of error, 90/95/99, income interval" },
    ],
  },
  {
    id: "l23",
    n: 23,
    code: "L23",
    title: "The Sampling Laboratory — Excel, Live",
    blurb:
      "RANDBETWEEN a sample of 50 from 2,500 salaries, freeze it with paste-values, watch the means hover at 71,000–72,500 around μ = 71,800 — and the SE shrink machine sells precision at √n. Quiz pattern revised: two quizzes, through Chapter 8.",
    chapters: [
      { id: "practice-lab", label: "The sampling lab", desc: "RANDBETWEEN recipe, SE shrink, quiz update" },
    ],
  },
  {
    id: "l24",
    n: 24,
    code: "L24",
    title: "Student's t — Interval Estimation, σ Unknown",
    blurb:
      "When σ hides, s estimates it and Student's t pays the honesty premium: df = n − 1, heavier tails that melt into the normal, the housing interval 750 ± 29.3 — and the n = (z·σ/E)² planner that sends Discount Sounds to 312.",
    chapters: [
      { id: "interval-t", label: "The t-distribution", desc: "df = n−1, housing interval, sample-size planner" },
    ],
  },
  {
    id: "l25",
    n: 25,
    code: "L25",
    title: "Proportions — the p̂ Interval",
    blurb:
      "Same skeleton, different standard error: p̂ ± z·√[p̂(1−p̂)/n]. The exit poll lands at 0.44 ± 0.0435, and the planning-value lab shows why p* = 0.5 is the conservative ceiling that can never undersample.",
    chapters: [
      { id: "prop-interval", label: "Proportion estimation", desc: "Exit poll, planning value p* = 0.5" },
    ],
  },
  {
    id: "l26",
    n: 26,
    code: "L26",
    title: "Case File II — Metropolitan Research",
    blurb:
      "Fifty transmission repair records, a mean of 73,340 miles — and the interval's lower bound at 66,264 with 19 cars failing below it. Averages comfort, distributions decide; the follow-up study is planned at n ≈ 100.",
    chapters: [
      { id: "case-file-2", label: "Metropolitan Research", desc: "The transmission file, n ≈ 100" },
    ],
  },
  {
    id: "l27",
    n: 27,
    code: "L27",
    title: "Hypothesis Testing — the Framework",
    blurb:
      "Put a claim on trial: H₀ holds the equality and the status quo, Hₐ carries the research hope. Three tail forms, the interactive Type I/II courtroom, and the language rule — reject or fail to reject, never accept.",
    chapters: [
      { id: "hypothesis", label: "Hypothesis testing framework", desc: "H₀ vs Hₐ, three tails, Type I & II errors" },
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
