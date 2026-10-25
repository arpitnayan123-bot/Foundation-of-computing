"use client";

/* ============================================================
   STM — the lecture sequence (shelf 05).

   "Statistics for Managers" arrived as one continuous slide
   deck (Chapters 1–7, Dr. Deepak Srivastav, IIT Jodhpur). The
   reader picks a lecture in the hero and the page below renders
   exactly that lecture's chapters. Editing this one table
   re-maps the whole reader.

   One lecture per section, in course order — the chapter
   ids/labels/descs mirror the TopNav GROUPS in StmApp (the
   search index, progress store, ⌘K palette and SM-2 cards all
   depend on them staying identical).
   ============================================================ */

export interface StmLectureChapter {
  id: string; // the rendered <Section id> — also the ⌘K / flash-jump key
  label: string;
  desc: string;
}

export interface StmLecture {
  id: string; // "l1".."l16"
  n: number; // lecture number
  code: string; // badge text: "L1".."L16"
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
    title: "Scales of Measurement — the Ladder You Climb",
    blurb:
      "Every column of data sits on one rung of a four-rung ladder: nominal, ordinal, interval, ratio. Climb it correctly and the right summaries choose themselves — then cross-sectional vs time-series data tells you what to hold still.",
    chapters: [
      { id: "scales", label: "Scales of measurement", desc: "Nominal → ordinal → interval → ratio" },
    ],
  },
  {
    id: "l3",
    n: 3,
    code: "L3",
    title: "Where Data Lives — Sources, Analytics & Ethics",
    blurb:
      "From Hudson's auto retailers to existing-source studies: where data actually comes from, the analytics loop that turns it into decisions, big data's four V's — and the ASA's six ethical statistical practices as the guardrail.",
    chapters: [
      { id: "sources", label: "Sources, analytics & ethics", desc: "Hudson's loop, big data, the ASA" },
    ],
  },
  {
    id: "l4",
    n: 4,
    code: "L4",
    title: "Summarizing Categorical Data — the Marada Inn",
    blurb:
      "Twenty guests at the Marada Inn rate their evening meal — and become frequency and relative-frequency tables, a bar chart and a pie. The course's first display machines, built live.",
    chapters: [
      { id: "categorical", label: "Categorical displays", desc: "Marada Inn: tables, bars, pie" },
    ],
  },
  {
    id: "l5",
    n: 5,
    code: "L5",
    title: "Summarizing Quantitative Data — Hudson's Bins",
    blurb:
      "Quantitative data needs bins: Hudson's audit-hours histogram, dot plots, and the stem-and-leaf that keeps every digit alive. Read the shape, name the skew, tell the story.",
    chapters: [
      { id: "quantitative", label: "Quantitative displays", desc: "Histograms, dot plots, stem-and-leaf" },
    ],
  },
  {
    id: "l6",
    n: 6,
    code: "L6",
    title: "Two Variables at Once — Crosstabs & Simpson's Trap",
    blurb:
      "Two categorical variables cross into a crosstab — and Simpson's paradox shows how the same table can argue both ways. Scatter diagrams and the dashboard close the two-variable toolkit.",
    chapters: [
      { id: "twovars", label: "Two variables", desc: "Crosstabs, Simpson's paradox, dashboards" },
    ],
  },
  {
    id: "l7",
    n: 7,
    code: "L7",
    title: "Measures of Location — the Outlier Machine",
    blurb:
      "The apartment-rent dataset powers the mean-vs-median outlier machine: push one rent skyward and watch the mean chase it while the median holds. Mode, percentiles and weighted means ride along.",
    chapters: [
      { id: "location", label: "Measures of location", desc: "Mean, median, mode, percentiles" },
    ],
  },
  {
    id: "l8",
    n: 8,
    code: "L8",
    title: "Variability & Shape — σ, z and the Box Plot",
    blurb:
      "Spread is the second story: range, IQR, variance and σ — computed live on the rents (s = 54.74) — then z-scores flag the outliers and the box plot draws the whole shape at once.",
    chapters: [
      { id: "variability", label: "Variability & shape", desc: "Range, IQR, σ, z, box plots" },
    ],
  },
  {
    id: "l9",
    n: 9,
    code: "L9",
    title: "Association — Covariance & Correlation",
    blurb:
      "Do advertising and sales move together? Covariance gives the sign, correlation gives a number between −1 and 1 — and both are computed on the desk, never memorised.",
    chapters: [
      { id: "association", label: "Association", desc: "Covariance & correlation" },
    ],
  },
  {
    id: "l10",
    n: 10,
    code: "L10",
    title: "Experiments, Sample Spaces & Counting",
    blurb:
      "Pricing uncertainty starts with a sample space: Bradley's 8 outcomes, the multiple-step and combination counting rules, and the three ways probabilities are assigned — classical, relative frequency, subjective.",
    chapters: [
      { id: "prob-basics", label: "Experiments & counting", desc: "Sample space, counting rules, priors" },
    ],
  },
  {
    id: "l11",
    n: 11,
    code: "L11",
    title: "Events, the Laws & the Venn Laboratory",
    blurb:
      "Events compose: unions, intersections, complements — the addition law with mutually exclusive as its special case, then conditional probability and independent events, each region computed live in the Venn laboratory.",
    chapters: [
      { id: "prob-laws", label: "Events & the laws", desc: "Union, intersection, conditionals" },
    ],
  },
  {
    id: "l12",
    n: 12,
    code: "L12",
    title: "Bayes' Theorem — Revising Beliefs",
    blurb:
      "A bar that updates itself: start with a prior, feed in new information, watch the posterior rise. Bayes' prior-to-posterior machine, tabula by tabula, exactly the way managers should revise beliefs.",
    chapters: [
      { id: "bayes", label: "Bayes' theorem", desc: "Prior → information → posterior" },
    ],
  },
  {
    id: "l13",
    n: 13,
    code: "L13",
    title: "Random Variables & Expected Value",
    blurb:
      "A random variable is a number attached to every outcome — and E(x) is its centre of gravity. JSL's expected 1.20 TVs per customer, DiCarlo's bivariate E(xy), and the variance of a discrete random variable.",
    chapters: [
      { id: "discrete", label: "Random variables & E(x)", desc: "JSL's 1.20 TVs, DiCarlo's bivariate" },
    ],
  },
  {
    id: "l14",
    n: 14,
    code: "L14",
    title: "The Three Workhorses — Binomial · Poisson · Hypergeometric",
    blurb:
      "The three workhorses of discrete data: Evans' 0.243 binomial, Mercy Hospital's 0.1680 Poisson arrivals, Neveready's hypergeometric draws — each machine runs the formula live.",
    chapters: [
      { id: "binomial", label: "Binomial · Poisson · Hypergeometric", desc: "Evans, Mercy Hospital, Neveready" },
    ],
  },
  {
    id: "l15",
    n: 15,
    code: "L15",
    title: "Continuous Distributions — Probability as Area",
    blurb:
      "Probability becomes area under a curve: Slater's uniform flight times, Pep Zone's 0.2033 normal tail and HUL's reorder point, Al's pump exponential lifetimes — and the empirical-rule bell that breathes.",
    chapters: [
      { id: "continuous", label: "Uniform · Normal · Exponential", desc: "Slater, Pep Zone, Al's pump, HUL" },
    ],
  },
  {
    id: "l16",
    n: 16,
    code: "L16",
    title: "Sampling & the Case File",
    blurb:
      "From a sample, the forest: simple random sampling, point estimates, and why a statistic wobbles around a parameter. The shelf closes with the case file — NICE Paper, Go Bananas, McNeil's.",
    chapters: [
      { id: "sampling", label: "Sampling & the case file", desc: "NICE Paper, Go Bananas, McNeil's" },
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
