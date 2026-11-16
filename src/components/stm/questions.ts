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

export type StmExamGroup = "displays" | "measures" | "probability" | "discrete" | "continuous" | "inference";
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
  {
    id: "d9",
    type: "output",
    q: "Pelican Stores' 100-transaction sample bought 266 items for 70 promotional customers and 56 items for 30 regulars. Compute the per-customer rates and state what they show.",
    code: "Promotional: 266 items / 70 customers = ?\nRegular:      56 items / 30 customers = ?",
    answerText: "266/70 ≈ 3.8 vs 56/30 ≈ 1.9 items per customer — promotional buyers carry about double the basket",
    explain:
      "Raw totals mislead when groups differ in size — normalise first. 266/70 ≈ 3.8 items per promotional customer vs 56/30 ≈ 1.9 for regulars: the coupon campaign roughly doubled basket size, which is the incremental-business evidence the manager was after.",
  },
  {
    id: "d10",
    type: "mcq",
    q: "One payment-method table is read three ways: counts (Σ = 100), relative frequencies (Σ = 1.00), percentage frequencies (Σ = 100%). The percentage form exists because…",
    options: [
      "decimals are hard to present — percentages communicate to people, proportions feed the maths",
      "Excel refuses to display decimals below 0.01",
      "relative frequencies are invalid for categorical data",
      "percentages change the underlying counts",
    ],
    answer: 0,
    explain:
      "Same data, three readings: frequency for the audit trail, relative frequency for computation (each = f/n), percentage for the boardroom (× 100). The lecture's words: decimals are difficult to interpret — percentages give better clarity for decision-making.",
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
  {
    id: "m9",
    type: "output",
    q: "Apartment rents have Q₁ = 545 and Q₃ = 625. Compute the IQR and the box plot's outlier fences.",
    code: "IQR   = Q₃ − Q₁ = ?\nLower = Q₁ − 1.5·IQR = ?\nUpper = Q₃ + 1.5·IQR = ?",
    answerText: "IQR = 80; fences at 545 − 120 = 425 and 625 + 120 = 745 — any rent beyond [425, 745] is an outlier",
    explain:
      "IQR = 625 − 545 = 80; 1.5·IQR = 120, so the whiskers may reach 425 and 745 and anything outside is plotted as a point. This is the five-number summary turned into a machine: box (Q₁→Q₃), median line, whiskers, flagged outliers.",
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
  {
    id: "k9",
    type: "mcq",
    q: "McNeil's lot receives μ = 6.8 customers per hour. Which pairing of question and Excel call is correct?",
    options: [
      "'exactly 7' → POISSON.DIST(7, 6.8, FALSE) = 0.1486; 'at most 7' → POISSON.DIST(7, 6.8, TRUE) = 0.6285",
      "both questions use cumulative TRUE — only the x differs",
      "'exactly 7' needs 1 − POISSON.DIST(7, 6.8, TRUE)",
      "Poisson has no cumulative form — use the normal with μ = σ = 6.8",
    ],
    answer: 0,
    explain:
      "The trigger word decides the cumulative argument: 'exactly' is the mass function (FALSE), 'at most/at least/more than' is the CDF (TRUE) or its complement 1 − F. And Poisson absolutely has a cumulative form — μ = 6.8 gives P(X = 7) = 0.1486, P(X ≤ 7) = 0.6285, P(X > 7) = 0.3715.",
  },
  {
    id: "k10",
    type: "output",
    q: "JSL's 200-day distribution has E(x) = 1.20 TVs (80 of the days sold zero). Those 80 days all become 10-unit days. Compute the new expected value.",
    code: "old total units = 1.20 × 200 = 240\nadded           = 80 days × 10 units\nn stays          = 200 days",
    answerText: "(240 + 800)/200 = 5.20 TVs per day",
    explain:
      "E(x) = Σ x·f(x) over the same n = 200 days: 240 old units + 800 new units = 1,040, spread over 200 days → 5.20. The formula never moved — the DISTRIBUTION did, and the stock plan built for 1.20 collapses at 5.20.",
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
  {
    id: "c9",
    type: "output",
    q: "Firm A: μ = 150, σ = 60, find P(X > 200). Firm B: μ = 1,500, σ = 600, find P(X > 2,000). Compute both Z-scores.",
    code: "Firm A: Z = (200 − 150)/60   = ?\nFirm B: Z = (2,000 − 1,500)/600 = ?",
    answerText: "Both Z = 0.83 — P(X > x) = 1 − 0.7967 = 0.2033 in both firms",
    explain:
      "Ten-fold bigger firm, ten-fold bigger σ — identical Z. Standardisation makes every normal problem the same problem: 0.83 reads 0.7967 off the table, so the tail is 0.2033 in both. Scale cannot hide from Z.",
  },
  {
    id: "c10",
    type: "output",
    q: "Salaries are normal with μ = 40,000 and σ = 5,000. Compute P(34,000 ≤ X ≤ 46,000).",
    code: "Z₁ = (34,000 − 40,000)/5,000 = −1.2\nZ₂ = (46,000 − 40,000)/5,000 = +1.2\n\nP(−1.2 ≤ Z ≤ 1.2) = ?",
    answerText: "Φ(1.2) − Φ(−1.2) = 0.8849 − 0.1151 = 0.7698 ≈ 77%",
    explain:
      "Both edges sit 1.2σ from the mean. By symmetry the band probability is 2Φ(1.2) − 1 = 2(0.8849) − 1 = 0.7698 — the symmetric-band shortcut that turns one table lookup into a whole interval.",
  },
  {
    id: "c11",
    type: "output",
    q: "Daily petrol demand: μ = 15 gallons, σ = 6. Management caps stockout probability at 5%. Compute the reorder point.",
    code: "P(X > x) = 0.05 → P(X ≤ x) = 0.95\nz = NORM.S.INV(0.95) = 1.645\n\nX = μ + z·σ = ?",
    answerText: "X = 15 + 1.645 × 6 = 24.87 ≈ 25 gallons",
    explain:
      "Reverse mode: the VALUE that owns the 5% tail is X = μ + zσ = 15 + 9.87 = 24.87 → order at 25 gallons. Stocking 20 ran dry 20% of days; 25 cuts that to 5% — the extra 5 gallons buy 15 points of service.",
  },
];

/* ------------------------------------------------------------
   GROUP 6 — INFERENCE  (Lectures 19–27: sampling distributions,
             the CLT, the five sampling designs, interval
             estimation with σ known and unknown, proportions,
             and the hypothesis-testing framework)
   ------------------------------------------------------------ */
const INFERENCE: StmExamQuestion[] = [
  {
    id: "f1",
    type: "mcq",
    q: "A population has σ = 40. For samples of size 100, the standard error of the mean is…",
    options: ["4.0", "0.4", "40", "400"],
    answer: 0,
    explain:
      "σx̄ = σ/√n = 40/√100 = 40/10 = 4.0. The standard error shrinks with the square root of n — to cut it in half you must quadruple the sample size.",
  },
  {
    id: "f2",
    type: "mcq",
    q: "The Central Limit Theorem says the sampling distribution of x̄ is approximately normal when…",
    options: [
      "the population is normal, whatever n is",
      "n ≥ 30, whatever the population looks like",
      "the population is symmetric, n ≥ 5",
      "n ≥ 30 AND the population is normal",
    ],
    answer: 1,
    explain:
      "The CLT works on ANY population: with n ≥ 30 (prefer 50+ for highly skewed data) the sampling distribution of the mean is approximately normal. The theorem normalises the x̄'s, not the raw data.",
  },
  {
    id: "f3",
    type: "mcq",
    q: "Marrian Dairies: BlueGurt rates have μ = 80, σ = 25. For n = 50 raters, P(x̄ ≤ 75) is…",
    options: ["0.0786", "0.3413", "0.1587", "0.9214"],
    answer: 0,
    explain:
      "σx̄ = 25/√50 = 3.5355; Z = (75 − 80)/3.5355 = −1.414; P(Z ≤ −1.414) = 0.0786 — about a 7.86% chance the sample reads '75 or less'. At n = 150 the same question collapses to 0.7%: bigger samples barely misread the population.",
  },
  {
    id: "f4",
    type: "mcq",
    q: "Which design samples a few whole, heterogeneous groups and every element inside them?",
    options: ["stratified random sampling", "cluster sampling", "systematic sampling", "judgment sampling"],
    answer: 1,
    explain:
      "Cluster sampling picks whole clusters (wards, city blocks) at random and counts everything inside — cheap logistics, but a larger total sample than stratified for the same precision. Stratified instead samples a few elements from EVERY homogeneous stratum.",
  },
  {
    id: "f5",
    type: "mcq",
    q: "The z-value used in a 95% confidence interval is…",
    options: ["1.645", "1.960", "2.576", "2.326"],
    answer: 1,
    explain:
      "95% confidence → α = 0.05, split as α/2 = 0.025 per tail → z(0.025) = 1.960. The set worth memorising: 1.645 (90%), 1.960 (95%), 2.576 (99%).",
  },
  {
    id: "f6",
    type: "output",
    q: "n = 36, x̄ = $41,100, σ = $4,500. Compute the 95% confidence interval for the population mean.",
    code: "σx̄ = 4,500/√36 = 750\nE   = 1.960 × 750 = 1,470\nCI  = 41,100 ± 1,470",
    answerText: "[39,630 , 42,570]",
    explain:
      "Standard error 750, margin of error 1.960 × 750 = 1,470 → the interval runs from 39,630 to 42,570. At 90% the margin is 1,234 and at 99% it is 1,932 — confidence is purchased with width.",
  },
  {
    id: "f7",
    type: "mcq",
    q: "Quadrupling the sample size (n → 4n) changes the margin of error to…",
    options: ["1/4 of the original", "1/2 of the original", "2× the original", "unchanged"],
    answer: 1,
    explain:
      "E = z·σ/√n — the square root again. Quadrupling n halves the standard error and therefore halves the margin of error: precision per rupee follows √n.",
  },
  {
    id: "f8",
    type: "mcq",
    q: "n = 16 apartments, x̄ = $750, s = $55, σ unknown. The 95% interval uses…",
    options: [
      "z = 1.960 → 750 ± 26.9",
      "t(0.025, 15) = 2.131 → 750 ± 29.3",
      "t(0.05, 16) = 1.753 → 750 ± 24.1",
      "z = 2.576 → 750 ± 35.4",
    ],
    answer: 1,
    explain:
      "σ unknown → the t-distribution with df = n − 1 = 15; 95% splits α as 0.025 per tail → t = 2.131. Margin: 2.131 × (55/√16) = 29.3, giving [720.7, 779.3] — the honesty premium over z's 1.960.",
  },
  {
    id: "f9",
    type: "mcq",
    q: "With no prior information about p, the safest planning value for the sample-size formula is…",
    options: [
      "p* = 0.5 — p(1−p) is maximised there, giving the largest n",
      "p* = 0.1 — it minimises cost",
      "p* = 1.0 — the worst case",
      "any p* — n does not depend on p*",
    ],
    answer: 0,
    explain:
      "n = z²·p*(1−p*)/E², and p(1−p) peaks at 0.25 when p = 0.5 — the maximum sample size. The actual margin of error can then never exceed the planned E, whatever the true proportion turns out to be.",
  },
  {
    id: "f10",
    type: "output",
    q: "Exit poll: n = 500, 220 voters favour the candidate, 95% confidence. Compute the margin of error for the proportion.",
    code: "p̂ = 220/500 = 0.44\nσ(p̂) = √[0.44 × 0.56/500]\nE = 1.96 × σ(p̂)",
    answerText: "E ≈ 0.0435 → CI [0.3965 , 0.4835]",
    explain:
      "σ(p̂) = √(0.44 × 0.56/500) = 0.0222; E = 1.96 × 0.0222 = 0.0435. The interval [0.3965, 0.4835] says PSI is 95% confident the true support lies between 39.65% and 48.35%.",
  },
  {
    id: "f11",
    type: "mcq",
    q: "A researcher suspects an online platform's true average score is BELOW its claimed 70. The hypotheses are…",
    options: [
      "H₀: μ ≥ 70 vs Hₐ: μ < 70 — left-tailed",
      "H₀: μ < 70 vs Hₐ: μ ≥ 70 — right-tailed",
      "H₀: μ = 70 vs Hₐ: μ ≠ 70 — two-tailed",
      "H₀: x̄ ≥ 70 vs Hₐ: x̄ < 70",
    ],
    answer: 0,
    explain:
      "The research hope ('lower') belongs in Hₐ: μ < 70, so H₀ keeps the equality as μ ≥ 70 — a left-tailed test. Hypotheses always describe the population parameter μ, never the sample statistic x̄.",
  },
  {
    id: "f12",
    type: "short",
    q: "Name the two errors a hypothesis test can make, which one is controlled by α, and why statisticians never 'accept' H₀.",
    answerText:
      "Type I error: rejecting H₀ when it is actually true — probability = α, the level of significance.\nType II error: failing to reject H₀ when it is actually false — hard to control directly.\n'Fail to reject' means the evidence was insufficient, not that H₀ was proven true — accepting it would invite Type II errors into every conclusion.",
    explain:
      "The courtroom analogy: H₀ is innocent until proven guilty. Convicting the innocent = Type I (priced at α); freeing the guilty = Type II. The only verdicts are reject and fail to reject — 'accept' is not a statistical word.",
  },
  {
    id: "f13",
    type: "output",
    q: "Marrian Dairies: BlueGurt rates μ = 80, σ = 25. For n = 150, compute P(X̄ ≤ 75).",
    code: "σx̄ = 25/√150 = 2.0412\nZ  = (75 − 80)/2.0412 = ?",
    answerText: "Z = −2.449 → P(X̄ ≤ 75) ≈ 0.0072 (0.72%)",
    explain:
      "σx̄ = 25/√150 = 2.0412; Z = −5/2.0412 = −2.449; Φ(−2.45) ≈ 0.0072. Compare n = 50: 7.86%. Sample size is discriminative power — the same 5-point signal becomes rare noise when the study grows. (Continuity: at n = 400 the probability is 0.003%.)",
  },
  {
    id: "f14",
    type: "mcq",
    q: "You draw a 50-person salary sample with =RANDBETWEEN(1, 2500) but the numbers change every time you sort the sheet. The step that was skipped — and why it matters — is…",
    options: [
      "Copy → Paste Special → Values Only: RANDBETWEEN is volatile and redraws on every recalculation",
      "Format → Cells → Number: the IDs were displayed rounded",
      "nothing — changing samples improve the estimate",
      "freeze panes: the IDs scrolled out of view",
    ],
    answer: 0,
    explain:
      "RANDBETWEEN is volatile — every edit, sort or recalc redraws the whole draw. Paste-Special-Values converts the formulas to static IDs so the sample exists like a photograph. Freeze FIRST, sort second; the lab's μ = 71,800, σ = 4,000 population then yields stable means near 71,000–72,500 at n = 50.",
  },
];

/* ------------------------------------------------------------
   Registry
   ------------------------------------------------------------ */
export const STM_EXAM_BANKS: Record<StmExamGroup, StmExamBank> = {
  displays: {
    group: "displays",
    title: "Data & Displays",
    subtitle: "Chapters 1–2 — what data is, where it comes from, and how to show it",
    topics: "Scales · sources · inference · big data · frequency tables · charts",
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
    title: "Continuous & Sampling",
    subtitle: "Chapter 6 (+7) — uniform, normal, exponential, and the sampling logic",
    topics: "Uniform · z-tables · reorder points · exponential · sampling",
    questions: CONTINUOUS,
  },
  inference: {
    group: "inference",
    title: "Inference",
    subtitle: "Lectures 19–27 — sampling distributions, confidence intervals, and hypothesis tests",
    topics: "σ/√n & CLT · sampling designs · z & t intervals · proportions · H₀ vs Hₐ",
    questions: INFERENCE,
  },
};

export const STM_EXAM_GROUPS = Object.keys(STM_EXAM_BANKS) as StmExamGroup[];

export const STM_TOTAL_QUESTIONS = STM_EXAM_GROUPS.reduce(
  (n, g) => n + STM_EXAM_BANKS[g].questions.length,
  0
);
