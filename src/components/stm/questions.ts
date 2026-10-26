/* ============================================================
   TEST MY KNOWLEDGE — Statistics for Managers question banks,
   one per chapter group (shelf 05 of The Atlas).
   Statistics is computed, not memorised — so the bank leans on
   mcq | output | short: pick the scale, compute the statistic,
   name the distribution, and check the number against the
   deck. Every figure below is taken straight from the lecture
   slides (Dr. Deepak Srivastav, IIT Jodhpur) and hand-checked:
   Hudson's $79 mean, Marada Inn's 20 guests, the apartment
   rents (x̄ = 590.80, s = 54.74), Bradley's 8 outcomes, Evans'
   0.243, Mercy Hospital's 0.1680, Pep Zone's 0.2033.
   ============================================================ */

export type StmExamGroup =
  | "lens"
  | "displays"
  | "measures"
  | "probability"
  | "discrete"
  | "continuous"
  | "inference"
  | "decisions";
export type StmQuestionType = "mcq" | "output" | "short";

export interface StmExamQuestion {
  id: string;
  type: StmQuestionType;
  q: string;
  code?: string; // optional data panel shown with the question
  options?: string[]; // mcq only
  answer?: number; // mcq only — index of the correct option
  answerText?: string; // output → exact value/term; short → model answer
  explain?: string;
}

export interface StmExamBank {
  group: StmExamGroup;
  title: string;
  subtitle: string;
  topics: string;
  questions: StmExamQuestion[];
}

/* ------------------------------------------------------------
   GROUP 1 — DATA & DISPLAYS  (Ch 1 + Ch 2: data, scales,
             sources, inference, big data, and the tabular &
             graphical displays that summarise it all)
   ------------------------------------------------------------ */
const DISPLAYS: StmExamQuestion[] = [
  {
    id: "d1",
    type: "mcq",
    q: "In a questionnaire, respondents are asked to mark their gender as male or female. The scale of measurement for gender is the ______ scale.",
    options: ["ordinal", "nominal", "ratio", "interval"],
    answer: 1,
    explain:
      "Gender is a label or name used to identify an attribute of the element — that is the nominal scale. A nonnumeric label (Male/Female) or a numeric code (1/2) may be used; either way there is no order, no fixed interval and no true zero.",
  },
  {
    id: "d2",
    type: "mcq",
    q: "Data are…",
    options: [
      "always numeric",
      "always non-numeric",
      "the raw material of statistics",
      "always categorical",
    ],
    answer: 2,
    explain:
      "Data are the facts and figures collected, analyzed, and summarized for presentation and interpretation — the raw material of statistics. Data can be numeric (quantitative) or non-numeric (categorical), so \u201Calways numeric\u201D and \u201Calways categorical\u201D both fail.",
  },
  {
    id: "d3",
    type: "mcq",
    q: "The summaries of data, which may be tabular, graphical, or numerical, are referred to as ______ statistics.",
    options: ["inferential", "descriptive", "observational", "experimental"],
    answer: 1,
    explain:
      "Descriptive statistics are tabular, graphical, and numerical summaries of data — like Hudson Auto's frequency table, histogram, and the $79 mean cost of parts. Inferential statistics is the different, later step: using sample data to make estimates and test hypotheses about a population.",
  },
  {
    id: "d4",
    type: "mcq",
    q: "Statistical inference is…",
    options: [
      "the process of drawing inferences about the sample based on the characteristics of the population",
      "the same as descriptive statistics",
      "the process of drawing inferences about the population based on the information taken from the sample",
      "the same as a census",
    ],
    answer: 2,
    explain:
      "The arrow runs sample → population. Hudson examines a sample of 50 tune-up invoices (sample average $79) and uses it to estimate the average for ALL tune-ups — the population. Collecting data for the entire population would be a census; a census is the alternative to inference, not another name for it.",
  },
  {
    id: "d5",
    type: "mcq",
    q: "Data collected at the same, or approximately the same, point in time are ______ data.",
    options: ["time series", "approximate time series", "cross-sectional", "approximate"],
    answer: 2,
    explain:
      "Cross-sectional data are collected at the same or approximately the same point in time — e.g., building permits issued in November 2013 in each county of Ohio. Time series data are collected over several time periods — e.g., permits in Lucas County for each of the last 36 months.",
  },
  {
    id: "d6",
    type: "mcq",
    q: "The three V's of big data are…",
    options: [
      "Volume, Velocity, Variety",
      "Volume, Value, Verification",
      "Velocity, Vision, Variety",
      "Volume, Variance, Version",
    ],
    answer: 0,
    explain:
      "Volume — the amount of available data; Velocity — the speed at which data is collected and processed (Visa processes 6,800 payment transactions per second); Variety — different data types. Walmart captures data on 20–30 million transactions per day.",
  },
  {
    id: "d7",
    type: "output",
    q: "Hudson Auto's parts costs run from $50 to $109. If we choose six classes, compute the approximate class width.",
    code: "Largest value  = 109\nSmallest value =  50\nClasses        =   6\n\nWidth = (109 − 50) / 6 = ?",
    answerText: "(109 − 50)/6 = 9.83 ≈ 10",
    explain:
      "Width = (largest − smallest)/number of classes = 59/6 = 9.83, rounded up to a convenient 10 — giving classes 50–59, 60–69, 70–79, 80–89, 90–99, 100–109 with frequencies 2, 13, 16, 7, 7, 5 (n = 50).",
  },
  {
    id: "d8",
    type: "short",
    q: "In one line each: what separates a histogram from a bar graph, and what does a trendline add to a scatter diagram?",
    answerText:
      "Histogram: rectangles drawn over class intervals of a QUANTITATIVE variable, with NO natural separation between adjacent rectangles (a bar graph's bars ARE separated, because each bar is a separate category of a qualitative variable).\nTrendline: an approximation of the relationship between the two variables shown in a scatter diagram.",
    explain:
      "The separation rule is the classic exam trap: bars separated = categories (bar chart); rectangles touching = intervals of a numeric variable (histogram). The trendline is the scatter diagram's approximation of the relationship.",
  },
];

/* ------------------------------------------------------------
   GROUP 2 — NUMERICAL MEASURES  (Ch 3: location, variability,
             shape, outliers, five-number summaries, covariance
             and correlation — the apartment-rents laboratory)
   ------------------------------------------------------------ */
const MEASURES: StmExamQuestion[] = [
  {
    id: "m1",
    type: "mcq",
    q: "A data set of annual incomes contains a few extremely large values. Which measure of central location should be preferred, and why?",
    options: [
      "The mean — it uses every observation",
      "The median — extreme values inflate the mean but not the middle value",
      "The mode — it ignores numbers entirely",
      "The geometric mean — it removes negatives",
    ],
    answer: 1,
    explain:
      "Whenever a data set has extreme values, the median is the preferred measure of central location — which is why the median is the location measure most often reported for annual income and property value data. A few extremely large incomes can inflate the mean.",
  },
  {
    id: "m2",
    type: "output",
    q: "Seventy apartment rents were sampled in a college town; the sum of the 70 values is 41,356. Compute the sample mean.",
    code: "x̄ = Σxᵢ / n\n  = 41,356 / 70\n  = ?",
    answerText: "x̄ = 590.80",
    explain:
      "x̄ = Σxᵢ/n = 41,356/70 = 590.80 dollars per month. The sample mean x̄ is the point estimator of the population mean μ.",
  },
  {
    id: "m3",
    type: "mcq",
    q: "In the 70-rent data set, the value 550 appears more often than any other value. 550 is the…",
    options: ["mean", "median", "mode", "third quartile"],
    answer: 2,
    explain:
      "The mode is the value that occurs with greatest frequency — 550 in the rents data. (If exactly two modes occur the data are bimodal; more than two, multimodal.) The median is 575, the mean 590.80.",
  },
  {
    id: "m4",
    type: "output",
    q: "Builder Ron Butler paid: Carpenter $21.60/hr for 520 h, Electrician $28.72/hr for 230 h, Laborer $11.80/hr for 410 h, Painter $19.75/hr for 270 h, Plumber $24.16/hr for 160 h. Compute the weighted mean wage.",
    code: "x̄ = Σwᵢxᵢ / Σwᵢ\n\nΣwᵢxᵢ = 11,232.0 + 6,605.6 + 4,838.0\n      + 5,332.5 + 3,865.6 = 31,873.7\nΣwᵢ   = 520 + 230 + 410 + 270 + 160 = 1,590",
    answerText: "x̄ = 31,873.7 / 1,590 = $20.05 (20.0464)",
    explain:
      "Weights = hours worked. The weighted mean $20.05 differs from the equally-weighted simple mean of $21.21 — the laborer's 410 hours pull the average toward $11.80. The weights depend on the application (credit hours in GPA, pounds, dollars, volume).",
  },
  {
    id: "m5",
    type: "mcq",
    q: "An investment returned −6%, −8%, −4%, +2% and +5.4% over five periods. Why is the geometric mean — not the arithmetic mean — the right average here?",
    options: [
      "The geometric mean ignores negative returns",
      "It gives the mean rate of change over successive periods; the arithmetic mean is misleading for growth rates",
      "It always produces a smaller number, which is safer",
      "The arithmetic mean cannot be computed with negative values",
    ],
    answer: 1,
    explain:
      "The geometric mean is the nth root of the product of n values: x̄g = [(0.94)(0.92)(0.96)(1.02)(1.054)]^(1/5) = 0.97752 → average growth of −2.248% per period. It should be applied anytime you want the mean rate of change over several successive periods (also populations, crop yields, pollution levels, birth/death rates).",
  },
  {
    id: "m6",
    type: "output",
    q: "For the 70 rents, compute the location of the 80th percentile (Lₚ), then the percentile itself, given the 56th value = 635 and the 57th value = 649.",
    code: "Lₚ = (p/100)(n + 1)\n  = (80/100)(70 + 1) = 56.8\n\n80th percentile = 635 + 0.8(649 − 635) = ?",
    answerText: "L₈₀ = 56.8;  80th percentile = 646.2",
    explain:
      "The 80th percentile is the 56th value plus 0.8 times the difference between the 57th and 56th values: 635 + 0.8(14) = 646.2. At least 80% of the rents are ≤ 646.2 and at least 20% are ≥ 646.2 (56/70 = 80%, 14/70 = 20%). Quartiles are specific percentiles: Q1 = 25th = 545, Q2 = median = 575, Q3 = 75th = 625.",
  },
  {
    id: "m7",
    type: "mcq",
    q: "For the apartment rents, Q₁ = 545 and Q₃ = 625. The interquartile range (IQR) — and what it protects against — are…",
    options: [
      "IQR = 80; it is the range of the middle 50% and overcomes sensitivity to extreme values",
      "IQR = 190; it is the full range of the data",
      "IQR = 80; it counts the outliers on each side",
      "IQR = 1,170; it is Q₁ × Q₃",
    ],
    answer: 0,
    explain:
      "IQR = Q₃ − Q₁ = 625 − 545 = 80 — the range for the middle 50% of the data. The plain range (715 − 525 = 190) is the simplest measure but is very sensitive to the smallest and largest values; the IQR overcomes that sensitivity. It also sets the box plot's limits: 545 − 1.5(80) = 425 and 625 + 1.5(80) = 745 — no rents fall outside, so no outliers.",
  },
  {
    id: "m8",
    type: "mcq",
    q: "For a bell-shaped distribution, the Empirical Rule says…",
    options: [
      "Exactly 50% of values fall within one standard deviation of the mean",
      "Approximately 68% within ±1σ, 95% within ±2σ, and almost all (99.7%) within ±3σ",
      "At least 75% within ±1σ for any distribution",
      "All values must lie within ±3σ of the mean",
    ],
    answer: 1,
    explain:
      "For bell-shaped data: ≈68% (68.26%) within ±1σ, ≈95% (95.44%) within ±2σ, almost all (99.72%) within ±3σ. Contrast Chebyshev's theorem, which works for ANY distribution but only guarantees at least 1 − 1/z² within z standard deviations (z > 1): 75% at z = 2, 89% at z = 3, 94% at z = 4.",
  },
];

/* ------------------------------------------------------------
   GROUP 3 — PROBABILITY  (Ch 4: experiments, counting rules,
             assigning probabilities, events, the addition &
             multiplication laws, conditional probability,
             independence, and Bayes' theorem)
   ------------------------------------------------------------ */
const PROBABILITY: StmExamQuestion[] = [
  {
    id: "p1",
    type: "mcq",
    q: "A random experiment is a process that generates well-defined experimental outcomes. The set of ALL experimental outcomes is called…",
    options: ["an event", "the sample space", "a sample point", "the population"],
    answer: 1,
    explain:
      "The sample space is the set of all experimental outcomes; a single outcome is a sample point. Toss a coin → {Head, tail}; roll a die → {1,2,3,4,5,6}; play a football game → {win, lost, tie}. An EVENT is a collection of sample points — e.g., \u201CMarkley Oil is profitable\u201D.",
  },
  {
    id: "p2",
    type: "output",
    q: "Bradley Investments holds two stocks. Markley Oil can finish a quarter in 4 ways (gain 10, gain 5, 0, lose 20) and Collins Mining in 2 ways (gain 8, lose 2). How many experimental outcomes does the two-step experiment have?",
    code: "Counting rule for multiple-step experiments:\n(n₁)(n₂)…(nₖ)\n\n= (4)(2) = ?",
    answerText: "(4)(2) = 8 outcomes",
    explain:
      "If an experiment consists of a sequence of k steps with n₁, n₂, … nₖ possible results, the total number of outcomes is (n₁)(n₂)…(nₖ) = 8 — the eight branches of the Bradley tree diagram, from (10, 8) = $18,000 gain down to (−20, −2) = $22,000 loss.",
  },
  {
    id: "p3",
    type: "mcq",
    q: "Lucas Tool Rental's records for 40 days: 0 polishers on 4 days, 1 on 6 days, 2 on 18 days, 3 on 10 days, 4 on 2 days. Using the relative frequency method, P(2 polishers rented) = …",
    options: ["0.10", "0.25", "0.45", "0.18"],
    answer: 2,
    explain:
      "Relative frequency assigns probability = frequency/total days: 18/40 = 0.45. The full distribution: 0.10, 0.15, 0.45, 0.25, 0.05 — which sums to exactly 1.00, as every valid probability assignment must.",
  },
  {
    id: "p4",
    type: "mcq",
    q: "The two basic requirements for assigning probabilities to experimental outcomes are…",
    options: [
      "each probability between 0 and 1 inclusive, and the probabilities must sum to 1",
      "each probability a whole number, and the probabilities must sum to 100",
      "each probability at least 0.5, and the largest equals 1",
      "each probability equal, and the number of outcomes even",
    ],
    answer: 0,
    explain:
      "1. 0 ≤ P(Eᵢ) ≤ 1 for all i. 2. P(E₁) + P(E₂) + … + P(Eₙ) = 1. The classical method (equally likely outcomes — a die: 1/6 each), the relative frequency method (historical data — Lucas Tool Rental) and the subjective method (degree of belief — Bradley's analyst) all must satisfy these two requirements.",
  },
  {
    id: "p5",
    type: "output",
    q: "An analyst's subjective probabilities for Bradley's outcomes: P(10,8)=0.20, P(10,−2)=0.08, P(5,8)=0.16, P(5,−2)=0.26. Event M = \u201CMarkley Oil is profitable\u201D. Compute P(M).",
    code: "M = {(10,8), (10,−2), (5,8), (5,−2)}\n\nP(M) = 0.20 + 0.08 + 0.16 + 0.26 = ?",
    answerText: "P(M) = 0.70",
    explain:
      "The probability of any event equals the sum of the probabilities of the sample points in the event. Similarly C (Collins profitable) = {(10,8),(5,8),(0,8),(−20,8)} → P(C) = 0.20+0.16+0.10+0.02 = 0.48.",
  },
  {
    id: "p6",
    type: "mcq",
    q: "With P(M) = 0.70, P(C) = 0.48 and P(M ∩ C) = 0.36, the addition law gives P(M ∪ C) = …",
    options: ["1.18", "0.82", "0.34", "0.58"],
    answer: 1,
    explain:
      "P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 0.70 + 0.48 − 0.36 = 0.82. The subtraction removes the double-counted intersection {(10,8),(5,8)}. Only when A and B are mutually exclusive (P(A ∩ B) = 0) does the law collapse to P(A) + P(B).",
  },
  {
    id: "p7",
    type: "output",
    q: "Using the joint probability table: P(M ∩ C) = 0.36 and P(M) = 0.70. Compute the conditional probability P(C | M).",
    code: "P(C | M) = P(M ∩ C) / P(M)\n         = 0.36 / 0.70\n         = ?",
    answerText: "P(C | M) = 0.5143",
    explain:
      "Given Markley Oil is profitable, Collins Mining is profitable 51.43% of the time. The multiplication law runs the same wire backwards: P(M ∩ C) = P(M)·P(C|M) = (0.70)(0.5143) = 0.36 — the same intersection, computed the other way.",
  },
  {
    id: "p8",
    type: "output",
    q: "L. S. Clothiers: prior P(A₁) = 0.7 that the town council approves a zoning change; the planning board recommends against it (event B) with P(B|A₁) = 0.2 and P(B|A₂) = 0.9. Compute the posterior P(A₁ | B).",
    code: "P(A₁|B) = P(A₁)P(B|A₁) / [P(A₁)P(B|A₁) + P(A₂)P(B|A₂)]\n        = (0.7)(0.2) / [(0.7)(0.2) + (0.3)(0.9)]\n        = 0.14 / 0.41 = ?",
    answerText: "P(A₁ | B) = 0.34 (0.3415)",
    explain:
      "Bayes' theorem revises the prior 0.70 down to the posterior 0.34 once the negative recommendation arrives — good news for L. S. Clothiers. The tabular approach: joint probabilities .14 and .27, sum P(B) = .41, posteriors .3415 and .6585 (sum 1.0000).",
  },
];

/* ------------------------------------------------------------
   GROUP 4 — DISCRETE DISTRIBUTIONS  (Ch 5: random variables,
             probability functions, expected value & variance,
             bivariate distributions, binomial, Poisson,
             hypergeometric)
   ------------------------------------------------------------ */
const DISCRETE: StmExamQuestion[] = [
  {
    id: "k1",
    type: "mcq",
    q: "Which of the following random variables is CONTINUOUS?",
    options: [
      "Number of customers entering a store per day",
      "Weight of a randomly selected student",
      "Number of defective items in a batch of 50",
      "Number of TVs sold at JSL Appliances in one day",
    ],
    answer: 1,
    explain:
      "A continuous random variable may assume any numerical value in an interval or collection of intervals — like weight, or distance from home to a store. Counts (customers, defectives, TVs sold, family size, dependents on a tax return) are discrete: finite values or an infinite sequence like 0, 1, 2, …",
  },
  {
    id: "k2",
    type: "mcq",
    q: "The required conditions for a valid discrete probability function f(x) are…",
    options: [
      "f(x) ≥ 0 and Σf(x) = 1",
      "f(x) > 1 for at least one x, and Σf(x) = 100",
      "f(x) ≤ 0 and Σf(x) = 0",
      "f(x) = 1/n for every x, always",
    ],
    answer: 0,
    explain:
      "f(x) ≥ 0 for every value, and the sum of f(x) over all values equals 1. JSL Appliances' TV-sales distribution (.40, .25, .20, .05, .10) passes both checks. f(x) = 1/n is a special case — the discrete uniform distribution, where every value is equally likely.",
  },
  {
    id: "k3",
    type: "output",
    q: "JSL Appliances' daily TV sales: f(0)=.40, f(1)=.25, f(2)=.20, f(3)=.05, f(4)=.10. Compute the expected number of TVs sold in a day.",
    code: "E(x) = Σ x·f(x)\n     = 0(.40) + 1(.25) + 2(.20) + 3(.05) + 4(.10)\n     = 0 + .25 + .40 + .15 + .40 = ?",
    answerText: "E(x) = μ = 1.20 TVs per day",
    explain:
      "The expected value is a weighted average of the values the random variable may assume, weighted by the probabilities — and it does NOT have to be a value the variable can actually take (1.20 is not a possible sales count). Variance: σ² = Σ(x−μ)²f(x) = 1.660, so σ = 1.2884 TVs.",
  },
  {
    id: "k4",
    type: "mcq",
    q: "Four properties define a binomial experiment. Which of the following is NOT one of them?",
    options: [
      "The experiment consists of a sequence of n identical trials",
      "Two outcomes, success and failure, are possible on each trial",
      "The probability of success changes from trial to trial",
      "The trials are independent",
    ],
    answer: 2,
    explain:
      "Property 3 is the OPPOSITE: the probability of success p does NOT change from trial to trial (the stationarity assumption). The four: n identical trials; success/failure on each; constant p; independent trials. Hypergeometric settings are the ones where p changes and trials are not independent.",
  },
  {
    id: "k5",
    type: "output",
    q: "Evans Electronics sees 10% annual turnover: any hourly employee has p = 0.1 of leaving. Three employees are chosen at random. Compute P(exactly 1 leaves).",
    code: "f(x) = n! / [x!(n−x)!] · pˣ(1−p)⁽ⁿ⁻ˣ⁾\n\nf(1) = 3!/(1!·2!) · (0.1)¹(0.9)²\n     = 3 · (0.1)(0.81) = ?",
    answerText: "f(1) = 0.243",
    explain:
      "Three sequences give one success — (S,F,F), (F,S,F), (F,F,S) — each with probability (0.1)(0.9)(0.9) = 0.081, totalling 0.243. The tree diagram: f(3)=.0010, f(2)=.0270, f(1)=.2430, f(0)=.7290. Binomial summaries: E(x) = np = 0.3, Var(x) = np(1−p) = 0.27, σ = 0.52.",
  },
  {
    id: "k6",
    type: "mcq",
    q: "A salesperson contacts 8 potential customers per day with a 10% chance of a sale on each. The expected number of sales, the variance and the standard deviation are…",
    options: [
      "E(x) = 0.8, Var(x) = 0.72, σ ≈ 0.85",
      "E(x) = 8, Var(x) = 0.1, σ ≈ 0.32",
      "E(x) = 0.8, Var(x) = 0.08, σ ≈ 0.28",
      "E(x) = 0.1, Var(x) = 0.8, σ ≈ 0.89",
    ],
    answer: 0,
    explain:
      "Binomial with n = 8, p = 0.1: E(x) = np = 0.8 sales per day; Var(x) = np(1−p) = 8(.1)(.9) = 0.72; σ = √0.72 ≈ 0.85. The same three formulas gave Evans Electronics 0.3, 0.27 and 0.52 for n = 3.",
  },
  {
    id: "k7",
    type: "output",
    q: "Patients arrive at Mercy Hospital's emergency room at an average rate of 6 per hour on weekend evenings. Compute the probability of exactly 4 arrivals in 30 minutes.",
    code: "μ = 6/hour = 3 per half-hour;  x = 4\n\nf(x) = μˣe^(−μ) / x!\n     = 3⁴(2.71828)⁻³ / 4! = ?",
    answerText: "f(4) = 0.1680",
    explain:
      "Poisson: occurrences over a specified interval of time or space, with equal-length intervals equally likely and independent. Two properties, and one signature identity: the mean equals the variance — μ = σ² = 3 for the 30-minute periods.",
  },
  {
    id: "k8",
    type: "output",
    q: "Bob Neveready mingled 2 dead batteries with 2 good ones and selects 2 of the 4 at random. Compute the probability both selected are good.",
    code: "f(x) = [C(r,x)·C(N−r, n−x)] / C(N,n)\n\nx = 2 good selected, n = 2 selected,\nN = 4 total, r = 2 good in total\n\nf(2) = [C(2,2)·C(2,0)] / C(4,2) = 1/6 = ?",
    answerText: "f(2) = 0.167 (1/6)",
    explain:
      "Hypergeometric: trials are NOT independent and p changes from trial to trial (each draw alters the population). Mean E(x) = n(r/N) = 2(2/4) = 1; variance uses the finite-population correction (N−n)/(N−1) = 2/3 → 0.333. When N is large, (N−n)/(N−1) → 1 and the hypergeometric collapses into the binomial with p = r/N.",
  },
];

/* ------------------------------------------------------------
   GROUP 5 — CONTINUOUS & SAMPLING  (Ch 6: uniform, normal,
             standard normal, exponential — plus the sampling
             practice set and the NICE Paper case)
   ------------------------------------------------------------ */
const CONTINUOUS: StmExamQuestion[] = [
  {
    id: "c1",
    type: "mcq",
    q: "At Slater's Buffet, salad taken is uniformly distributed between 5 and 15 ounces, so f(x) = 1/10 on [5, 15]. P(12 ≤ x ≤ 15) = …",
    options: ["0.10", "0.30", "0.50", "0.70"],
    answer: 1,
    explain:
      "Probability = area = height × base = (1/10)(15 − 12) = 0.3. For a uniform distribution E(x) = (a+b)/2 = 10 ounces and Var(x) = (b−a)²/12 = 100/12 = 8.33. Probability is the area under the density curve between x₁ and x₂ — for every continuous random variable.",
  },
  {
    id: "c2",
    type: "output",
    q: "Pep Zone's lead-time demand for motor oil is normal with μ = 15 gallons, σ = 6. The reorder point is 20 gallons. Convert x = 20 to a z-value.",
    code: "z = (x − μ) / σ\n  = (20 − 15) / 6\n  = ?",
    answerText: "z = 0.83",
    explain:
      "z measures the number of standard deviations x is from μ. Step 1 of the stockout problem: z = 5/6 = 0.83. Next the standard normal table gives P(z ≤ 0.83) = 0.7967, so the stockout probability P(z > 0.83) = 1 − 0.7967 = 0.2033.",
  },
  {
    id: "c3",
    type: "mcq",
    q: "Continuing Pep Zone: the manager wants the stockout probability during lead time to be no more than 0.05. The reorder point should be…",
    options: [
      "20 gallons — no change needed",
      "x = μ + z₀.₀₅σ = 15 + 1.645(6) ≈ 24.87, rounded to 25 gallons",
      "x = μ − z₀.₀₅σ = 15 − 1.645(6) ≈ 5.13, rounded to 5 gallons",
      "Impossible to control the stockout probability",
    ],
    answer: 1,
    explain:
      "Work the standard normal table in reverse: cut off 0.05 in the right tail → cumulative area 0.95 → z₀.₀₅ = 1.645, then x = μ + z₀.₀₅σ = 15 + 1.645(6) = 24.87 → 25 gallons. Raising the reorder point from 20 to 25 drops the stockout chance from about .20 to .05. Excel: NORM.INV for x given a probability, NORM.DIST for probability given x.",
  },
  {
    id: "c4",
    type: "mcq",
    q: "The normal curve's highest point sits at the mean — which is also the median and the mode — and the standard deviation controls…",
    options: [
      "the location of the curve along the x-axis",
      "the width: larger σ produces wider, flatter curves",
      "the total area under the curve",
      "the skewness of the curve",
    ],
    answer: 1,
    explain:
      "The family of normal distributions is defined by μ (location — it can be any numerical value, negative, zero or positive) and σ (width). The total area is always exactly 1 — 0.5 each side of the mean. Abraham de Moivre derived the normal distribution, published in The Doctrine of Chances, 1733.",
  },
  {
    id: "c5",
    type: "output",
    q: "Time between car arrivals at Al's full-service pump is exponential with a mean of 3 minutes. Compute the probability that the time between two successive arrivals is 2 minutes or less.",
    code: "P(x ≤ x₀) = 1 − e^(−x₀/μ)\n\nP(x ≤ 2) = 1 − 2.71828^(−2/3)\n         = 1 − 0.5134 = ?",
    answerText: "P(x ≤ 2) = 0.4866",
    explain:
      "Exponential density f(x) = (1/μ)e^(−x/μ) for x ≥ 0; cumulative P(x ≤ x₀) = 1 − e^(−x₀/μ). Its signature properties: mean = standard deviation, skewness = 2 (skewed right). Pair it with Poisson: Poisson counts occurrences per interval; exponential describes the length of the interval between occurrences.",
  },
  {
    id: "c6",
    type: "mcq",
    q: "The Poisson and exponential distributions are a matched pair. Which sentence states the pairing correctly?",
    options: [
      "Poisson describes the length of intervals; exponential counts occurrences per interval",
      "Poisson describes the number of occurrences per interval; exponential describes the length of the interval between occurrences",
      "Both describe counts; they just use different formulas",
      "Both describe times; one is for hours, one for minutes",
    ],
    answer: 1,
    explain:
      "Poisson → how many arrivals in an interval (vehicles at a toll booth per hour, knotholes in 14 linear feet of pine board, Bell Labs' phone calls). Exponential → how long until the next one (service time in waiting-line applications, time to complete a questionnaire, distance between major defects in a highway).",
  },
  {
    id: "c7",
    type: "mcq",
    q: "A production process makes 3% defective parts; a sample of 5 is selected. Why is this a binomial setting, and what is P(x = 2)?",
    options: [
      "Because trials are dependent; f(2) = 0.001",
      "Because n = 5 identical trials, success = defective with constant p = .03, independent trials; f(2) = C(5,2)(.03)²(.97)³ ≈ 0.008",
      "Because p changes each draw; f(2) = 0.053",
      "Because the interval is fixed; f(2) = 0.168",
    ],
    answer: 1,
    explain:
      "All four binomial properties hold: 5 identical trials, success/failure, p = .03 constant (stationarity), independence. f(2) = [5!/(2!3!)](.03)²(.97)³ = 10 × .0009 × .9127 ≈ .0082. Excel check: =BINOM.DIST(2, 5, 0.03, FALSE).",
  },
  {
    id: "c8",
    type: "mcq",
    q: "NICE Paper's plantation holds 1,000,000 trees; foresters measure 500 sampled trees and find an average timber volume of 0.4 cubic metres. The 0.4 is…",
    options: [
      "the population mean — the true average of every tree",
      "the sample mean — used to estimate the population mean",
      "the sampling distribution of the mean",
      "a parameter, because it comes from a random sample",
    ],
    answer: 1,
    explain:
      "0.4 m³ is a statistic — the sample mean of the 500 selected trees — and it estimates the population mean, which would be too costly to measure across a million trees. Compute it from a population and it's a parameter; from a sample it's a sample statistic and serves as the point estimator. That is the whole logic of the sampling chapter.",
  },
];

/* ------------------------------------------------------------
   Registry
   ------------------------------------------------------------ */
const LENS: StmExamQuestion[] = [
  {
    id: "lens-1",
    type: "mcq",
    q: "Statistics functions as both an art and a science. Which pairing matches the lecture?",
    options: [
      "Science: data collection is objective and reproducible — Art: deciding WHAT data to collect involves judgment",
      "Science: the numbers themselves — Art: drawing bar charts",
      "Science: only experiments qualify — Art: surveys and observation",
      "Science: the calculations — Art: the presentation slides",
    ],
    answer: 0,
    explain:
      "Data collection is objective and reproducible (heights in inches read the same whoever measures) — that is the science. Choosing which measurements and controls to study (a supplement's effect on child growth) requires expertise and judgment — that is the art. Overall: the art and science of collecting, analyzing, presenting, and interpreting data.",
  },
  {
    id: "lens-2",
    type: "mcq",
    q: "Student A logs 10th % = 81, 12th % = 78, Physics 82, Chemistry 80, Math 78. In dataset language, that complete row is…",
    options: ["an element", "a variable", "one observation", "the dataset"],
    answer: 2,
    explain:
      "Each student is an element; the five marks are variables; ALL measurements for one student constitute one observation; the data for all students forms the dataset. Total data values = elements × variables.",
  },
  {
    id: "lens-3",
    type: "mcq",
    q: "Railway travel classes (Class 1, Class 2, Class 3) sit on which scale of measurement?",
    options: ["Nominal — the numbers are just labels", "Ordinal — ordered, but the gaps between ranks are not equal", "Interval — differences are meaningful", "Ratio — there is a true zero"],
    answer: 1,
    explain:
      "Ordinal adds ranking to nominal: Class 1 is better than Class 2, so order is meaningful — but the difference between ranks is not necessarily equal, which is exactly what disqualifies interval.",
  },
  {
    id: "lens-4",
    type: "mcq",
    q: "Average gasoline price per gallon tracked from January 2009 to April 2014 is which kind of data?",
    options: ["Cross-sectional — many elements at one time", "Time series — one subject over many periods", "Categorical — the months are labels", "Experimental — a treatment was applied"],
    answer: 1,
    explain:
      "Time series data is collected over multiple time periods and shows how values change — trends and projections live here. Cross-sectional data gathers many elements at approximately the same point in time.",
  },
  {
    id: "lens-5",
    type: "mcq",
    q: "The 1954 polio vaccine trial involving 2 million U.S. children is the lecture's example of…",
    options: ["observational data", "experimental data — treatment administered, pre vs post compared", "a census", "secondary data from government agencies"],
    answer: 1,
    explain:
      "Experimental data involves administering a treatment and measuring its effects — pre-treatment vs post-treatment compared. Observational studies (smokers vs non-smokers) watch without interference, like a hidden camera.",
  },
  {
    id: "lens-6",
    type: "mcq",
    q: "Under the course's AI policy, which use is PROHIBITED?",
    options: [
      "Asking AI to clarify a concept or debug your own code",
      "Using AI for sanity checks on calculations you did yourself",
      "Submitting AI-written assignments as entirely your own work",
      "Exploring alternative perspectives on a solved problem",
    ],
    answer: 2,
    explain:
      "Concept clarification, debugging, quality checks and sanity verification are the recommended uses. Submitting AI-written work as your own is academic dishonesty — and violation may lead to candidature cancellation. AI is a supplementary tool, never the primary learning method.",
  },
];

const INFERENCE: StmExamQuestion[] = [
  {
    id: "inf-1",
    type: "mcq",
    q: "The Central Limit Theorem says that for random samples of size n from ANY population…",
    options: [
      "the population itself becomes normal",
      "the sampling distribution of the sample mean is approximated by a normal distribution as n becomes large",
      "every individual observation becomes normal",
      "the sample mean always equals the population mean",
    ],
    answer: 1,
    explain:
      "The CLT operates on the distribution of sample MEANS — rule of thumb n ≥ 30 (50+ for highly skewed populations). It says nothing about individual elements, and the mean still wobbles around μ; it just wobbles normally.",
  },
  {
    id: "inf-2",
    type: "mcq",
    q: "BlueGurt: μ = 80, σ = 25, n = 50. The standard error of the mean is…",
    options: ["25/√50 = 3.5355", "25/50 = 0.5", "√25 = 5", "80/√50 ≈ 11.31"],
    answer: 0,
    explain:
      "σ_x̄ = σ/√n = 25/√50 = 3.5355. That drives Z = (75 − 80)/3.5355 = −1.414 and P(X̄ ≤ 75) = 7.86% — Marrian Dairies' cautious-launch verdict.",
  },
  {
    id: "inf-3",
    type: "mcq",
    q: "95% confidence, n = 36, x̄ = $41,100, σ = $4,500. The margin of error is…",
    options: ["1.960 × (4,500/√36) = $1,470", "1.645 × 750 = $1,234", "2.576 × 750 = $1,932", "4,500/√36 = $750"],
    answer: 0,
    explain:
      "SE = 4,500/√36 = 750; MoE = z(α/2) × SE = 1.960 × 750 = 1,470 → CI [39,630, 42,570]. The 1.645 and 2.576 answers are the 90% and 99% margins.",
  },
  {
    id: "inf-4",
    type: "mcq",
    q: "n = 16 apartments, x̄ = $750, S = $55, 95% confidence. Why t(0.025, 15) = 2.131 instead of z = 1.96?",
    options: [
      "σ is unknown — s estimates it, so Student's t with df = n − 1 carries heavier tails",
      "16 is above 30 so the normal cannot be used at all",
      "The t-distribution only applies to proportions",
      "Because the rents are symmetric",
    ],
    answer: 0,
    explain:
      "When σ is unknown the t-distribution (born at the Guinness brewery) replaces z; df = n − 1 = 15, and the extra tail weight widens the interval: 750 ± 2.131 × 13.75 = [720.7, 779.3]. Beyond ~100 df, t ≈ z.",
  },
  {
    id: "inf-5",
    type: "mcq",
    q: "PSI exit poll: p̂ = 0.44, n = 500, 95% confidence. The margin of error is…",
    options: ["1.96 × √(0.44 × 0.56 / 500) = 0.0435", "1.96 × 0.44 = 0.862", "√(0.44 × 0.56) = 0.496", "0.44 / 500 = 0.00088"],
    answer: 0,
    explain:
      "σ(p̂) = √[p̂(1−p̂)/n]; MoE = 1.96 × 0.0222 ≈ 0.0435 → CI [0.3965, 0.4835]. Planning a survey with E = ±0.03 at 99% needs n = 1,817 with p* = 0.44.",
  },
  {
    id: "inf-6",
    type: "mcq",
    q: "When no prior information about a population proportion exists, the lecture's default planning value is p* = 0.5 because…",
    options: [
      "0.5 is the easiest number to remember",
      "p(1−p) is maximized at 0.5, giving the largest — never undershooting — sample size",
      "proportions are always near 0.5 in practice",
      "it makes the margin of error exactly zero",
    ],
    answer: 1,
    explain:
      "p(1−p) peaks at 0.25 when p = 0.5, so the required n is maximal — the conservative default that protects against undersampling whatever the true proportion turns out to be.",
  },
];

const DECISIONS: StmExamQuestion[] = [
  {
    id: "dec-1",
    type: "mcq",
    q: "Hypothesis testing can never 'prove' a statement true. The two possible conclusions are…",
    options: [
      "accept H₀ or accept Hₐ",
      "reject H₀ or fail to reject H₀",
      "confirm or deny the parameter",
      "significant or impossible",
    ],
    answer: 1,
    explain:
      "Testing only ever rejects or fails to reject. Failing to reject means insufficient evidence — not proof. 'Accepting' a hypothesis would risk Type II errors.",
  },
  {
    id: "dec-2",
    type: "mcq",
    q: "Emergency services target a 12-minute response. The research objective is to check whether the goal is met. The pair is…",
    options: [
      "H₀: μ ≥ 12, Hₐ: μ < 12 — left-tailed",
      "H₀: μ ≤ 12, Hₐ: μ > 12 — right-tailed",
      "H₀: μ = 12, Hₐ: μ ≠ 12 — two-tailed",
      "H₀: μ < 12, Hₐ: μ ≥ 12",
    ],
    answer: 0,
    explain:
      "The status quo ('service is meeting the goal') holds the equality: H₀ μ ≥ 12; what you'd flag as a problem goes in Hₐ μ < 12 — a left-tailed test.",
  },
  {
    id: "dec-3",
    type: "mcq",
    q: "Concluding an innocent person is guilty is the lecture's example of…",
    options: [
      "Type I error — a false positive, probability α",
      "Type II error — a false negative",
      "a correct decision under H₀",
      "the power of the test",
    ],
    answer: 0,
    explain:
      "Type I = rejecting a true H₀ (the 'innocent until proven guilty' null). Its probability is the significance level α. Type II — letting the guilty go free — is harder to control statistically.",
  },
  {
    id: "dec-4",
    type: "mcq",
    q: "A 'greater than' test of μ takes which form?",
    options: ["H₀ μ ≤ μ₀ vs Hₐ μ > μ₀, right-tailed", "H₀ μ ≥ μ₀ vs Hₐ μ < μ₀, left-tailed", "H₀ μ = μ₀ vs Hₐ μ ≠ μ₀, two-tailed", "H₀ μ > μ₀ vs Hₐ μ ≤ μ₀"],
    answer: 0,
    explain:
      "The null always keeps the equality (≤, ≥, or =); the alternate carries the strict inequality. Greater-than ⇒ H₀ μ ≤ μ₀ against Hₐ μ > μ₀ — right-tailed.",
  },
];

export const STM_EXAM_BANKS: Record<StmExamGroup, StmExamBank> = {
  lens: {
    group: "lens",
    title: "The Lens",
    subtitle: "Lectures 1–3 — what statistics is, how data is measured, and the course's tools & rules",
    topics: "Art & science · elements & variables · the four scales · data sources · the AI policy",
    questions: LENS,
  },
  displays: {
    group: "displays",
    title: "Summaries & Displays",
    subtitle: "Lectures 4–8 — from the Marada Inn to the Pelican Stores ledger",
    topics: "Frequency tables · charts · histograms · crosstabs · Simpson's paradox · COUNTIF · weighted means",
    questions: DISPLAYS,
  },
  measures: {
    group: "measures",
    title: "Numerical Measures",
    subtitle: "Chapter 3 — the apartment-rents laboratory of location and spread",
    topics: "Mean · median · mode · percentiles · variance · z · box plots",
    questions: MEASURES,
  },
  probability: {
    group: "probability",
    title: "Probability",
    subtitle: "Chapter 4 — counting, events, the laws, and Bayes' revision",
    topics: "Sample space · counting rules · addition & multiplication · Bayes",
    questions: PROBABILITY,
  },
  discrete: {
    group: "discrete",
    title: "Discrete Distributions",
    subtitle: "Chapter 5 — random variables and the three workhorse distributions",
    topics: "E(x) & variance · binomial · Poisson · hypergeometric",
    questions: DISCRETE,
  },
  continuous: {
    group: "continuous",
    title: "Continuous at Work",
    subtitle: "Lectures 12–18 — uniform, normal, exponential, and the two applied cases",
    topics: "Uniform · z-tables · reorder points · exponential · Specialty Toys · Go Bananas",
    questions: CONTINUOUS,
  },
  inference: {
    group: "inference",
    title: "Sampling & Estimation",
    subtitle: "Lectures 17–25 — sampling distributions, the CLT, and the confidence ledger",
    topics: "σ/√n · the CLT · margin of error · t-distribution · proportions",
    questions: INFERENCE,
  },
  decisions: {
    group: "decisions",
    title: "Cases & Decisions",
    subtitle: "Lectures 26–27 — what the descriptives confess, and the court of evidence",
    topics: "Transmission failures · H₀ vs Hₐ · tails · Type I & II errors",
    questions: DECISIONS,
  },
};

export const STM_EXAM_GROUPS = Object.keys(STM_EXAM_BANKS) as StmExamGroup[];

export const STM_TOTAL_QUESTIONS = STM_EXAM_GROUPS.reduce(
  (n, g) => n + STM_EXAM_BANKS[g].questions.length,
  0
);
