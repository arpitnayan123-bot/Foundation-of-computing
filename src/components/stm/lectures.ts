"use client";

/* ============================================================
   STM — the official 33-lecture sequence (shelf 05).

   "Statistics for Managers" (Deepak Silvastov, School of
   Management and Entrepreneurship, IIT Jodhpur; prescribed text
   Anderson & Sweeney's Statistics for Business and Economics,
   13th edition onward) rebuilt 1:1 against the official
   compendium: Lecture 1 → Lecture 33, in order, no gaps.
   The transcripts in scripts/stm_lectures/L01-L33.md are the
   sole content authority; the live 27-lecture registry that
   preceded this file was stale scaffolding and was never used
   to infer numbering, ordering or total.

   Six modules — cut against the chapter order the lectures
   themselves cite (L13 names Chapter 6 as continuous
   distributions, L23 names Chapter 8 as interval estimation,
   L33 names Chapters 1-9 with emphasis on 1-8):
   M1 Data & Displays L01-04 · M2 Numerical Measures L05-08 ·
   M3 Probability L09-11 · M4 Distributions L12-16 ·
   M5 Sampling & Estimation L17-26 · M6 Hypothesis Testing L27-33.

   L28 is the DELIBERATE reserved lecture: it keeps its number,
   carries NO title and NO content, and renders only the removal
   card. It is never filled, never renumbered, and never falls
   through to a generic fallback label — its bookmark text is
   supplied explicitly as STM_RESERVED_BOOKMARK below.

   L01 and L03 both read "Introduction to Statistics for
   Managers" — two utterly different lectures (one conceptual,
   one administrative) that must not be merged in the registry,
   the table of contents, the PDF bookmarks or the search index.

   Record field order is pinned: id, n, code, title, blurb,
   group, groupLabel, chapters — the twins parser reads it.
   ============================================================ */

export interface StmLectureChapter {
  id: string; // the rendered <Section id> — also the ⌘K / flash-jump key
  label: string; // sidebar + eyebrow short topic
  desc: string;
}

export interface StmLecture {
  id: string; // "l1".."l33"
  n: number; // lecture number — matches the official compendium
  code: string; // badge text: "L1".."L33"
  title: string | null; // official title, byte-exact; null for the reserved lecture
  blurb: string;
  group: string; // "m1".."m6"
  groupLabel: string; // "Module N · <name>"
  chapters: StmLectureChapter[]; // empty for the reserved lecture
}

/** The reserved lecture's explicit bookmark label — verbatim from the
 *  compendium's own bookmark. Never replaced by a fallback. */
export const STM_RESERVED_BOOKMARK =
  "Reserved — removed from the official course sequence";

/** The reserved lecture's removal card text — the compendium's own words. */
export const STM_RESERVED_CARD =
  "This lecture has been removed from the official course sequence. The page is intentionally blank so that lecture numbering is preserved.";

/** The 33 official titles, byte-exact from the compendium bookmarks.
 *  Index 27 (L28) is null — the reserved lecture has no title. */
export const STM_TITLES: (string | null)[] = [
  "Introduction to Statistics for Managers",
  "Understanding Data, Statistics, and Statistical Analysis",
  "Introduction to Statistics for Managers",
  "Descriptive Statistics: Summarizing and Understanding Data",
  "Graphical Displays for Summarizing Two Variables",
  "Measures of Spread and Distribution Shape",
  "How to Draw a Box Plot and Understand Probability",
  "Overview of Statistics for Business and Economics: Descriptive Data Analysis and Customer Profiling",
  "Fundamental Probability Relationships and Their Applications in Management Decision-Making",
  "Overview of Random Variables and Discrete Probability Distributions",
  "Bivariate and Discrete Probability Distributions",
  "Continuous Probability Distribution and Key Distributions in Statistics",
  "Overview of Probability Distributions and Statistical Concepts",
  "Overview of Normal and Continuous Probability Distributions",
  "Application of Normal Probability Distribution in Inventory Management",
  "Applied Case of Discrete Probability Distribution in Quality Control",
  "Understanding Sampling and Sampling Distributions",
  "Overview of Probability Distributions and Managerial Applications",
  "Understanding Sampling Distribution and the Central Limit Theorem",
  "Understanding Sampling Methods and Distributions",
  "Marrian Dairies Yogurt Market Entry Case Study",
  "Understanding Interval Estimation",
  "Understanding Sampling Distribution Through Practical Exercises",
  "Interval Estimation When Population Standard Deviation is Unknown",
  "Estimating Population Proportion and Interval Estimation",
  "Understanding Transmission Failure Through Descriptive Statistics",
  "Hypothesis Testing: Fundamentals and Framework",
  null,
  "Understanding Hypothesis Testing: Type I and Type II Errors",
  "Understanding One-Tailed Hypothesis Testing with P-Value and Critical Value Approaches",
  "Two-Tail Hypothesis Testing and Population Proportion Testing",
  "Statistical Process Control and Hypothesis Testing Application",
  "Exam Preparation and Course Overview",
];

export const STM_MODULES: { id: string; label: string; range: [number, number] }[] = [
  { id: "m1", label: "Module 1 · Data & Displays", range: [1, 4] },
  { id: "m2", label: "Module 2 · Numerical Measures", range: [5, 8] },
  { id: "m3", label: "Module 3 · Probability", range: [9, 11] },
  { id: "m4", label: "Module 4 · Distributions", range: [12, 16] },
  { id: "m5", label: "Module 5 · Sampling & Estimation", range: [17, 26] },
  { id: "m6", label: "Module 6 · Hypothesis Testing", range: [27, 33] },
];

export const STM_LECTURES: StmLecture[] = [
  {
    id: "l1",
    n: 1,
    code: "L1",
    title: "Introduction to Statistics for Managers",
    blurb:
      "Statistics as the art and science of collecting, analyzing, presenting, and interpreting data — six business applications, the data anatomy, the four measurement scales, and cross-sectional versus time series data.",
    group: "m1",
    groupLabel: "Module 1 · Data & Displays",
    chapters: [
      { id: "what-statistics", label: "What is statistics?", desc: "Art and science, six business applications" },
      { id: "data-anatomy-scales", label: "Data anatomy & the scales", desc: "Elements, variables, the four-scale ladder" },
    ],
  },
  {
    id: "l2",
    n: 2,
    code: "L2",
    title: "Understanding Data, Statistics, and Statistical Analysis",
    blurb:
      "Where data comes from — internal records to AI scrapes — observational versus experimental collection, the analytics ladder, big data and data mining, and the ethical guardrail on misleading statistics.",
    group: "m1",
    groupLabel: "Module 1 · Data & Displays",
    chapters: [
      { id: "data-sources", label: "Data sources & collection", desc: "Records, surveys, experiments, errors" },
      { id: "analytics-ethics", label: "Analytics & ethics", desc: "The three analytics, big data, the ethics line" },
    ],
  },
  {
    id: "l3",
    n: 3,
    code: "L3",
    title: "Introduction to Statistics for Managers",
    blurb:
      "The course front door — Deepak Silvastov, the Anderson & Sweeney text, mandatory Excel and R installs, the AI policy with its candidature-cancellation line, and the three-quiz evaluation scheme. Administrative, not conceptual: nothing here repeats L01.",
    group: "m1",
    groupLabel: "Module 1 · Data & Displays",
    chapters: [
      { id: "course-administration", label: "Course administration", desc: "Instructor, format, textbook, evaluation" },
      { id: "ai-policy", label: "AI policy & integrity", desc: "Permitted uses, prohibited uses, candidature" },
      { id: "course-concepts-tools", label: "Concepts & the toolkit", desc: "Variables, WSJ survey, Excel and R setup" },
    ],
  },
  {
    id: "l4",
    n: 4,
    code: "L4",
    title: "Descriptive Statistics: Summarizing and Understanding Data",
    blurb:
      "The first display machines: frequency, relative and percentage distributions for categorical and quantitative data, bar charts and pie charts, histograms and distribution shapes, cross-tabulation and Simpson's paradox.",
    group: "m1",
    groupLabel: "Module 1 · Data & Displays",
    chapters: [
      { id: "categorical-displays", label: "Categorical displays", desc: "Frequency tables, bar charts, pie charts" },
      { id: "quantitative-displays", label: "Quantitative displays", desc: "Class intervals, histograms, cumulative" },
      { id: "crosstab-simpson", label: "Cross-tab & Simpson's paradox", desc: "Two variables, row/column percentages" },
    ],
  },
  {
    id: "l5",
    n: 5,
    code: "L5",
    title: "Graphical Displays for Summarizing Two Variables",
    blurb:
      "Scatter diagrams and trend lines read relationships; side-by-side and stacked bars compare categories; then the location measures — mean, median, mode, weighted and geometric mean — and the percentile-quartile machinery.",
    group: "m2",
    groupLabel: "Module 2 · Numerical Measures",
    chapters: [
      { id: "scatter-trend", label: "Scatter & trend lines", desc: "Positive, negative, no relationship" },
      { id: "location-measures", label: "Measures of location", desc: "Mean, median, mode, weighted, geometric" },
      { id: "percentiles-quartiles", label: "Percentiles & quartiles", desc: "The location formula, Q1 to Q3" },
    ],
  },
  {
    id: "l6",
    n: 6,
    code: "L6",
    title: "Measures of Spread and Distribution Shape",
    blurb:
      "Spread is the second story: range, IQR, variance, standard deviation and the coefficient of variation; then skewness, z-scores, Chebyshev's theorem, the empirical rule, outlier detection and the five-number summary.",
    group: "m2",
    groupLabel: "Module 2 · Numerical Measures",
    chapters: [
      { id: "spread-measures", label: "Measures of spread", desc: "Range, IQR, variance, σ, CV" },
      { id: "shape-boxplot", label: "Shape, outliers & box plots", desc: "Skewness, z, Chebyshev, five-number summary" },
    ],
  },
  {
    id: "l7",
    n: 7,
    code: "L7",
    title: "How to Draw a Box Plot and Understand Probability",
    blurb:
      "The box plot drawn end to end with its 1.5·IQR fences, covariance and correlation coefficient on the golf data, and probability foundations: random experiments, sample spaces, and the counting rules.",
    group: "m2",
    groupLabel: "Module 2 · Numerical Measures",
    chapters: [
      { id: "boxplot-association", label: "Box plots & association", desc: "Fences, covariance, correlation" },
      { id: "probability-foundations", label: "Probability foundations", desc: "Experiments, sample spaces, counting" },
    ],
  },
  {
    id: "l8",
    n: 8,
    code: "L8",
    title: "Overview of Statistics for Business and Economics: Descriptive Data Analysis and Customer Profiling",
    blurb:
      "Chapters 1-2 close on real receipts: Pelican Stores profiles 100 promotional transactions with COUNTIF and pivot tables, and the selection criteria say when the mean, the median or the mode is the right summary.",
    group: "m2",
    groupLabel: "Module 2 · Numerical Measures",
    chapters: [
      { id: "pelican-case", label: "Pelican Stores case", desc: "100 transactions, coupons, profiling" },
      { id: "tendency-selection", label: "Choosing the summary", desc: "When mean, median, mode, weighted fit" },
    ],
  },
  {
    id: "l9",
    n: 9,
    code: "L9",
    title: "Fundamental Probability Relationships and Their Applications in Management Decision-Making",
    blurb:
      "Events compose: complements, unions, intersections — the addition law with mutual exclusivity as its special case, the multiplication law, independence, and Bayes' prior-to-posterior revision on the zoning decision.",
    group: "m3",
    groupLabel: "Module 3 · Probability",
    chapters: [
      { id: "probability-laws", label: "The probability laws", desc: "Complement, union, addition law" },
      { id: "conditional-bayes", label: "Conditionals & Bayes", desc: "Multiplication law, prior → posterior" },
    ],
  },
  {
    id: "l10",
    n: 10,
    code: "L10",
    title: "Overview of Random Variables and Discrete Probability Distributions",
    blurb:
      "A random variable is a number attached to every outcome — the TV store's 200-day demand record becomes a distribution, and E(X) and variance give the demand its centre and its spread.",
    group: "m3",
    groupLabel: "Module 3 · Probability",
    chapters: [
      { id: "random-variables", label: "Random variables", desc: "Discrete vs continuous, distributions" },
      { id: "tv-distribution", label: "The TV demand distribution", desc: "200 days, E(X), variance" },
    ],
  },
  {
    id: "l11",
    n: 11,
    code: "L11",
    title: "Bivariate and Discrete Probability Distributions",
    blurb:
      "Two random variables at once — joint distributions, covariance and correlation — then the workhorses: the binomial's conditions and cumulative tables, and the Poisson's arrival mathematics.",
    group: "m3",
    groupLabel: "Module 3 · Probability",
    chapters: [
      { id: "bivariate-covariance", label: "Bivariate distributions", desc: "Joint probabilities, covariance" },
      { id: "binomial-poisson", label: "Binomial & Poisson", desc: "Conditions, cumulative tables, arrivals" },
    ],
  },
  {
    id: "l12",
    n: 12,
    code: "L12",
    title: "Continuous Probability Distribution and Key Distributions in Statistics",
    blurb:
      "Probability becomes area under a curve: the uniform distribution and Slater's Buffet, the normal distribution with its precise 68.26 / 95.45 / 99.72 bands, standardisation by Z, and PepZone's tail probability.",
    group: "m4",
    groupLabel: "Module 4 · Distributions",
    chapters: [
      { id: "continuous-uniform", label: "Continuous & uniform", desc: "PDF, area = probability, Slater's Buffet" },
      { id: "normal-standard", label: "Normal & standard normal", desc: "68.26/95.45/99.72, Z conversion, PepZone" },
    ],
  },
  {
    id: "l13",
    n: 13,
    code: "L13",
    title: "Overview of Probability Distributions and Statistical Concepts",
    blurb:
      "The distributions checkpoint: the quiz pattern as first briefed — two quizzes of 20 marks, one combined-syllabus quiz, best two of three, Chapter 6, objective only, calculator allowed — and the demand-mix machine where E(X) jumps 1.2 → 5.2.",
    group: "m4",
    groupLabel: "Module 4 · Distributions",
    chapters: [
      { id: "quiz-checkpoint", label: "Quiz checkpoint", desc: "The quiz pattern as L13 states it" },
      { id: "demand-mix", label: "The demand-mix machine", desc: "80 zero-sale days, E(X) 1.2 → 5.2" },
    ],
  },
  {
    id: "l14",
    n: 14,
    code: "L14",
    title: "Overview of Normal and Continuous Probability Distributions",
    blurb:
      "The Z laboratory: three requirements unlock every normal problem, forward mode prices a tail (P(Z > 2) = 0.0228), reverse mode builds a reorder point — μ = 15, σ = 6, a 5% stockout promise lands at 25 gallons.",
    group: "m4",
    groupLabel: "Module 4 · Distributions",
    chapters: [
      { id: "z-forward", label: "Forward probability", desc: "Standardise, read the table" },
      { id: "z-reverse", label: "Reverse probability", desc: "Reorder points, the 5% stockout promise" },
    ],
  },
  {
    id: "l15",
    n: 15,
    code: "L15",
    title: "Application of Normal Probability Distribution in Inventory Management",
    blurb:
      "The Weather Teddy order: recover σ = 5,102 from the 95% demand band, price every order quantity's stockout risk, and let the 70% service level pick Q = 22,653 units.",
    group: "m4",
    groupLabel: "Module 4 · Distributions",
    chapters: [
      { id: "teddy-sigma", label: "Weather Teddy σ recovery", desc: "The 95% band, σ = 5,102" },
      { id: "service-level", label: "The service-level dial", desc: "Stockout pricing, Q = 22,653" },
    ],
  },
  {
    id: "l16",
    n: 16,
    code: "L16",
    title: "Applied Case of Discrete Probability Distribution in Quality Control",
    blurb:
      "GIG's Go Bananas line: a 16-ounce box with rice flakes and banana-flavored marshmallows — the binomial shutdown rule (n = 25, p = 0.08), the Excel simulation, and the three levers that fix a failing alarm policy.",
    group: "m4",
    groupLabel: "Module 4 · Distributions",
    chapters: [
      { id: "gig-case", label: "GIG & the Go Bananas case", desc: "The binomial shutdown rule, live" },
      { id: "shutdown-levers", label: "Thresholds & levers", desc: "α, n and p levers on the alarm" },
    ],
  },
  {
    id: "l17",
    n: 17,
    code: "L17",
    title: "Understanding Sampling and Sampling Distributions",
    blurb:
      "Element, population, sample, frame, census — the vocabulary that carries every inference sentence — plus finite versus infinite populations, the statistic→parameter bridge (x̄→μ, S→σ, p̂→p), and the college-admissions SRS.",
    group: "m5",
    groupLabel: "Module 5 · Sampling & Estimation",
    chapters: [
      { id: "sampling-vocabulary", label: "Sampling vocabulary", desc: "Population, frame, census, designs" },
      { id: "point-estimators", label: "Point estimators & SRS", desc: "x̄→μ, S→σ, p̂→p, admissions lab" },
    ],
  },
  {
    id: "l18",
    n: 18,
    code: "L18",
    title: "Overview of Probability Distributions and Managerial Applications",
    blurb:
      "6.8 customers an hour, random and rate-constant: Poisson country. Translate 'more than two waiting' into X > s+2 for McNeil's staffing rows, master exactly-versus-at-least in Excel, and run the MBA salary case.",
    group: "m5",
    groupLabel: "Module 5 · Sampling & Estimation",
    chapters: [
      { id: "poisson-staffing", label: "Poisson staffing", desc: "McNeil's rows, X > s+2" },
      { id: "pmf-cdf-lab", label: "PMF vs CDF lab", desc: "Exactly vs at-least, MBA salaries" },
    ],
  },
  {
    id: "l19",
    n: 19,
    code: "L19",
    title: "Understanding Sampling Distribution and the Central Limit Theorem",
    blurb:
      "Every sample mean wobbles — and the distribution of all possible means is the bridge to inference: unbiased estimators, the finite-population correction, σ_x̄ = σ/√n, the CLT's 30-or-more rule, and the proportion side of the same skeleton.",
    group: "m5",
    groupLabel: "Module 5 · Sampling & Estimation",
    chapters: [
      { id: "sampling-distribution", label: "Sampling distribution of x̄", desc: "Unbiasedness, the FPC, standard error" },
      { id: "clt-standard-error", label: "The CLT & proportions", desc: "n ≥ 30, the proportion's own skeleton" },
    ],
  },
  {
    id: "l20",
    n: 20,
    code: "L20",
    title: "Understanding Sampling Methods and Distributions",
    blurb:
      "Stratified, cluster, systematic, convenience, judgment — one population, five designs. The honesty line: can the accuracy of the result be evaluated? Only probability methods can say yes.",
    group: "m5",
    groupLabel: "Module 5 · Sampling & Estimation",
    chapters: [
      { id: "probability-designs", label: "Probability designs", desc: "Stratified, cluster, systematic" },
      { id: "nonprobability-designs", label: "Non-probability designs", desc: "Convenience, judgment, the honesty line" },
    ],
  },
  {
    id: "l21",
    n: 21,
    code: "L21",
    title: "Marrian Dairies Yogurt Market Entry Case Study",
    blurb:
      "BlueGurt scores μ = 80, σ = 25; StrawGurt wants the dissatisfied end. The sampling distribution prices the signal: P(X̄ ≤ 75) falls 7.86% → 0.72% → 0.003% as n climbs 50 → 150 → 400. Sample size is discriminative power.",
    group: "m5",
    groupLabel: "Module 5 · Sampling & Estimation",
    chapters: [
      { id: "marrian-setup", label: "Marrian Dairies setup", desc: "BlueGurt, StrawGurt, the research question" },
      { id: "sample-size-power", label: "Sample size as power", desc: "The n-switcher, 7.86% → 0.72% → 0.003%" },
    ],
  },
  {
    id: "l22",
    n: 22,
    code: "L22",
    title: "Understanding Interval Estimation",
    blurb:
      "Sahadri's 1,000-store census costs a fortune; a sample costs a fraction of it. Fix the probability first, compute the range second: x̄ ± z(α/2)·σ/√n — the confidence dial stretches the income interval across 90, 95 and 99 percent.",
    group: "m5",
    groupLabel: "Module 5 · Sampling & Estimation",
    chapters: [
      { id: "interval-known", label: "Interval estimation (σ known)", desc: "Margin of error, the income interval" },
      { id: "confidence-dial", label: "The confidence dial", desc: "90/95/99, adequacy of sample size" },
    ],
  },
  {
    id: "l23",
    n: 23,
    code: "L23",
    title: "Understanding Sampling Distribution Through Practical Exercises",
    blurb:
      "RANDBETWEEN a sample of 50 from 2,500 salaries, freeze it with paste-values, watch the means hover at 71,000–72,500 around μ = 71,800 — and the SE shrink machine sells precision at √n. Quiz pattern revised: two quizzes, best of two, through Chapter 8 — superseding L13's three-quiz scheme.",
    group: "m5",
    groupLabel: "Module 5 · Sampling & Estimation",
    chapters: [
      { id: "randbetween-lab", label: "The RANDBETWEEN lab", desc: "Random samples, paste-values, quiz update" },
      { id: "se-shrink", label: "The SE shrink machine", desc: "σ/√n verified, proportion lab" },
    ],
  },
  {
    id: "l24",
    n: 24,
    code: "L24",
    title: "Interval Estimation When Population Standard Deviation is Unknown",
    blurb:
      "When σ hides, S estimates it and Student's t pays the honesty premium: df = n − 1, heavier tails that melt into the normal beyond 100 df, the housing interval 750 ± 29.3 — and the n = (Z·σ/E)² planner that sends Discount Sounds to 312.",
    group: "m5",
    groupLabel: "Module 5 · Sampling & Estimation",
    chapters: [
      { id: "t-distribution", label: "Student's t", desc: "Guinness, df = n−1, heavier tails" },
      { id: "interval-planner", label: "The housing interval & planner", desc: "750 ± 29.3, Discount Sounds n = 312" },
    ],
  },
  {
    id: "l25",
    n: 25,
    code: "L25",
    title: "Estimating Population Proportion and Interval Estimation",
    blurb:
      "Same skeleton, different standard error: p̂ ± z(α/2)·√[p̂(1−p̂)/n]. The exit poll lands at 0.44 ± 0.0435, and the planning-value lab shows why p* = 0.5 is the conservative ceiling that can never undersample.",
    group: "m5",
    groupLabel: "Module 5 · Sampling & Estimation",
    chapters: [
      { id: "proportion-interval", label: "The p̂ interval", desc: "Exit poll, 0.44 ± 0.0435" },
      { id: "planning-value", label: "Planning values", desc: "p* = 0.5, the conservative ceiling" },
    ],
  },
  {
    id: "l26",
    n: 26,
    code: "L26",
    title: "Understanding Transmission Failure Through Descriptive Statistics",
    blurb:
      "Fifty transmission repair records, a mean of 73,340 miles — and the interval's lower bound at 66,264 with 19 cars failing below it. Averages comfort, distributions decide; the follow-up study is planned at n ≈ 100.",
    group: "m5",
    groupLabel: "Module 5 · Sampling & Estimation",
    chapters: [
      { id: "metropolitan-descriptives", label: "Metropolitan descriptives", desc: "Mean, median, SD, skewness, Excel" },
      { id: "metropolitan-interval", label: "The transmission interval", desc: "66,264–80,416, the n ≈ 100 follow-up" },
    ],
  },
  {
    id: "l27",
    n: 27,
    code: "L27",
    title: "Hypothesis Testing: Fundamentals and Framework",
    blurb:
      "Put a claim on trial: H₀ holds the equality and the status quo, Hₐ carries the research hope. Two formulation approaches, three tail forms, and the Type I / Type II courtroom — reject or fail to reject, never accept.",
    group: "m6",
    groupLabel: "Module 6 · Hypothesis Testing",
    chapters: [
      { id: "hypothesis-framework", label: "The framework", desc: "H₀ vs Hₐ, two approaches, examples" },
      { id: "tails-errors", label: "Tail forms & errors", desc: "Three tails, Type I and Type II" },
    ],
  },
  {
    id: "l28",
    n: 28,
    code: "L28",
    title: null,
    blurb: STM_RESERVED_CARD,
    group: "m6",
    groupLabel: "Module 6 · Hypothesis Testing",
    chapters: [],
  },
  {
    id: "l29",
    n: 29,
    code: "L29",
    title: "Understanding Hypothesis Testing: Type I and Type II Errors",
    blurb:
      "The two ways a test can fail: rejecting a true H₀, or missing a false one. The inverse trade-off, the α decision framework, the FDA and fire-alarm analogies, and why the language is 'fail to reject' — never 'accept'.",
    group: "m6",
    groupLabel: "Module 6 · Hypothesis Testing",
    chapters: [
      { id: "error-control", label: "The two errors", desc: "Type I, Type II, who decides which" },
      { id: "alpha-decision", label: "Choosing α", desc: "Trade-offs, FDA, fire alarms, courts" },
    ],
  },
  {
    id: "l30",
    n: 30,
    code: "L30",
    title: "Understanding One-Tailed Hypothesis Testing with P-Value and Critical Value Approaches",
    blurb:
      "One tail, two roads to the same verdict: the p-value approach and the critical-value approach. Metro EMS runs the full pipeline — H₀: μ ≤ 12, x̄ = 13.25, σ = 3.2, n = 40 — and both roads reject.",
    group: "m6",
    groupLabel: "Module 6 · Hypothesis Testing",
    chapters: [
      { id: "one-tail-pvalue", label: "The p-value road", desc: "Interpretation, α, the test statistic" },
      { id: "critical-value-metro", label: "Critical values & Metro EMS", desc: "The worked one-tail pipeline" },
    ],
  },
  {
    id: "l31",
    n: 31,
    code: "L31",
    title: "Two-Tail Hypothesis Testing and Population Proportion Testing",
    blurb:
      "Rejection on both sides: the toothpaste-filling two-tail case at α = 0.03, the confidence-interval shortcut, Student's t on the highway speeds (t = 2.286 > 1.669), and the population-proportion test on p̂ = 0.558.",
    group: "m6",
    groupLabel: "Module 6 · Hypothesis Testing",
    chapters: [
      { id: "two-tail-tests", label: "Two-tail tests", desc: "Toothpaste filling, the CI shortcut" },
      { id: "proportion-test", label: "Speeds & proportions", desc: "t = 2.286, p̂ = 0.558, p₀ tests" },
    ],
  },
  {
    id: "l32",
    n: 32,
    code: "L32",
    title: "Statistical Process Control and Hypothesis Testing Application",
    blurb:
      "Quality Associates monitors a production line: 800 observations, four samples of 30, σ = 0.21 — control limits at 11.90 and 12.10, Sample 3 rejected at p = 0.003, and the α-dial that widens and tightens the limits.",
    group: "m6",
    groupLabel: "Module 6 · Hypothesis Testing",
    chapters: [
      { id: "quality-associates", label: "Quality Associates", desc: "Four samples, the 0.01-level test" },
      { id: "control-limits", label: "Control limits & the α-dial", desc: "11.90–12.10, 0.01 → 0.05" },
    ],
  },
  {
    id: "l33",
    n: 33,
    code: "L33",
    title: "Exam Preparation and Course Overview",
    blurb:
      "The end-term brief as stated: 2 hours, 60 marks, mixed very-short, medium and multi-part questions, Chapters 1-9 with emphasis on 1-8, a scientific non-programmable calculator mandatory, z-tables supplied in the paper — and the sample paper promised by the end of the week.",
    group: "m6",
    groupLabel: "Module 6 · Hypothesis Testing",
    chapters: [
      { id: "exam-brief", label: "The end-term brief", desc: "60 marks, 2 hours, the calculator rule" },
      { id: "course-recap", label: "Course recap & timeline", desc: "Chapters 1-9, study plan, support" },
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

/* ------------------------------------------------------------
   The eyebrow scheme — derived from the registry, never hard-
   coded. `Module <N> · Lecture <NN> · <short topic>`. Unknown
   chapter ids are a BUILD ERROR, not a fallback.
   ------------------------------------------------------------ */
function moduleOfLecture(l: StmLecture) {
  const idx = STM_MODULES.findIndex((m) => l.n >= m.range[0] && l.n <= m.range[1]);
  if (idx === -1) throw new Error(`lecture ${l.code} maps to no module — registry drift`);
  return { index: idx + 1, mod: STM_MODULES[idx] };
}

export function eyebrowFor(chapterId: string): string {
  const l = lectureOfChapter(chapterId);
  if (!l) throw new Error(`unknown chapter id "${chapterId}" — no registry lecture owns it`);
  const c = l.chapters.find((x) => x.id === chapterId);
  if (!c) throw new Error(`unknown chapter id "${chapterId}" — registry drift`);
  const { index } = moduleOfLecture(l);
  return `Module ${index} · Lecture ${String(l.n).padStart(2, "0")} · ${c.label}`;
}
