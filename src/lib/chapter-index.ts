/* ============================================================
   Chapter catalog — the static twin of the chapter menus in
   the five subject apps (FocApp / AtbApp / FaApp / EbhApp /
   StmApp). Powers the ⌘K palette's "Chapters" group: search
   any chapter by name, topic or shelf and jump straight to it.

   GENERATED from the apps' GROUPS arrays (counts asserted
   against lib/section-counts.ts — foc 17, atb 19, fa 16, ebh
   18, stm 16 = 86). If a shelf gains a chapter, regenerate
   this file to match. No app chunk is imported here — the
   landing and palette stay light.
   ============================================================ */

export interface ChapterEntry {
  /** subject id, e.g. "foc" */
  subject: string;
  /** the section's DOM id inside the subject app */
  section: string;
  /** chapter label, e.g. "Why code?" */
  label: string;
  /** one-line description from the chapter menu */
  desc: string;
  /** chapter-group id + label, e.g. "foundations" / "Foundations" */
  group: string;
  groupLabel: string;
}

export const CHAPTER_INDEX: ChapterEntry[] = [
  { subject: "foc", section: "why", label: "Why code?", desc: "What programming actually unlocks", group: "foundations", groupLabel: "Foundations" },
  { subject: "foc", section: "computing", label: "Computing", desc: "Input → process → output, everywhere", group: "foundations", groupLabel: "Foundations" },
  { subject: "foc", section: "pillars", label: "4 Pillars", desc: "Decompose · patterns · abstraction · algorithms", group: "foundations", groupLabel: "Foundations" },
  { subject: "foc", section: "data", label: "Data", desc: "Data → information → knowledge → wisdom", group: "foundations", groupLabel: "Foundations" },
  { subject: "foc", section: "algorithm", label: "Algorithms", desc: "Recipes a machine can follow", group: "machines", groupLabel: "Machines" },
  { subject: "foc", section: "hardware", label: "Hardware", desc: "CPU, memory, sensors & I/O", group: "machines", groupLabel: "Machines" },
  { subject: "foc", section: "software", label: "Software", desc: "OS, apps, compilers & interpreters", group: "machines", groupLabel: "Machines" },
  { subject: "foc", section: "python", label: "Python", desc: "Meet the language", group: "pycore", groupLabel: "Python Core" },
  { subject: "foc", section: "basics", label: "Basics", desc: "Variables, strings, numbers, input", group: "pycore", groupLabel: "Python Core" },
  { subject: "foc", section: "lists", label: "Lists", desc: "Ordered collections, slices, tuples", group: "pycore", groupLabel: "Python Core" },
  { subject: "foc", section: "if", label: "If / Else", desc: "Decisions, comparisons, logic", group: "pycore", groupLabel: "Python Core" },
  { subject: "foc", section: "dicts", label: "Dictionaries", desc: "Key–value pairs & nesting", group: "pycore", groupLabel: "Python Core" },
  { subject: "foc", section: "while", label: "While Loops", desc: "Repeat until the job is done", group: "pycore", groupLabel: "Python Core" },
  { subject: "foc", section: "functions", label: "Functions", desc: "Define, call, reuse — first steps", group: "pro", groupLabel: "Functions & OOP" },
  { subject: "foc", section: "args", label: "Args & Return", desc: "Positional, keyword, defaults, return", group: "pro", groupLabel: "Functions & OOP" },
  { subject: "foc", section: "funcs2", label: "Funcs × Lists", desc: "Passing lists, *args, **kwargs, modules", group: "pro", groupLabel: "Functions & OOP" },
  { subject: "foc", section: "classes", label: "Classes", desc: "Objects, __init__, inheritance", group: "pro", groupLabel: "Functions & OOP" },
  { subject: "atb", section: "intro", label: "Why algorithms?", desc: "From making tea to running an ATM", group: "intro", groupLabel: "Intro" },
  { subject: "atb", section: "flowcharts", label: "Flowcharts", desc: "The five symbols every algorithm is drawn with", group: "intro", groupLabel: "Intro" },
  { subject: "atb", section: "atm", label: "Decisions", desc: "The ATM machine — branching in action", group: "intro", groupLabel: "Intro" },
  { subject: "atb", section: "pseudocode", label: "Pseudocode", desc: "Functions, pseudocode and real code", group: "intro", groupLabel: "Intro" },
  { subject: "atb", section: "average", label: "Average, step-by-step", desc: "Memory boxes, data types & FIRST CLASS", group: "intro", groupLabel: "Intro" },
  { subject: "atb", section: "properties", label: "9 properties", desc: "What makes an algorithm a *good* algorithm", group: "props", groupLabel: "Properties" },
  { subject: "atb", section: "algotypes", label: "Algorithm types", desc: "Divide & conquer · greedy · dynamic programming", group: "props", groupLabel: "Properties" },
  { subject: "atb", section: "arrays", label: "Arrays", desc: "Indexed, contiguous, direct access", group: "linear", groupLabel: "Linear DS" },
  { subject: "atb", section: "linkedlists", label: "Linked lists", desc: "Flexible chains of songs", group: "linear", groupLabel: "Linear DS" },
  { subject: "atb", section: "stacks", label: "Stacks", desc: "LIFO — the undo machine", group: "stackq", groupLabel: "Stacks & Queues" },
  { subject: "atb", section: "queues", label: "Queues", desc: "FIFO — first come, first served", group: "stackq", groupLabel: "Stacks & Queues" },
  { subject: "atb", section: "qtypes", label: "Queue types", desc: "Linear · circular · priority · deque", group: "stackq", groupLabel: "Stacks & Queues" },
  { subject: "atb", section: "trees", label: "Trees", desc: "Hierarchy: roots, parents & leaves", group: "trees", groupLabel: "Trees & Graphs" },
  { subject: "atb", section: "traversals", label: "Traversals", desc: "Pre · in · post · level order", group: "trees", groupLabel: "Trees & Graphs" },
  { subject: "atb", section: "graphs", label: "Graphs", desc: "G = (V, E) — relationships", group: "trees", groupLabel: "Trees & Graphs" },
  { subject: "atb", section: "dfsbfs", label: "DFS & BFS", desc: "Stack vs queue traversal", group: "trees", groupLabel: "Trees & Graphs" },
  { subject: "atb", section: "treetypes", label: "Tree types", desc: "BST · AVL · heaps", group: "hash", groupLabel: "Hash & Chain" },
  { subject: "atb", section: "hashing", label: "Hashing", desc: "mod, tables, collisions, passwords", group: "hash", groupLabel: "Hash & Chain" },
  { subject: "atb", section: "blockchain", label: "Blockchain", desc: "Tamper-evident chains of blocks", group: "hash", groupLabel: "Hash & Chain" },
  { subject: "fa", section: "why", label: "Why accounting?", desc: "Five openings — every one ends at the same question", group: "foundations", groupLabel: "Foundations" },
  { subject: "fa", section: "assumptions", label: "4 assumptions", desc: "Entity · going concern · periodicity · money measurement", group: "foundations", groupLabel: "Foundations" },
  { subject: "fa", section: "entity-concern", label: "Entity & concern", desc: "The boundary — and the promise to continue", group: "foundations", groupLabel: "Foundations" },
  { subject: "fa", section: "periodicity", label: "Periods & matching", desc: "Time, cut into periods — and the match that follows", group: "foundations", groupLabel: "Foundations" },
  { subject: "fa", section: "dual-aspect", label: "Dual aspect", desc: "Every rupee tells two stories", group: "equation", groupLabel: "The Equation" },
  { subject: "fa", section: "elements", label: "The three elements", desc: "Assets, liabilities & equity — the whole cast", group: "equation", groupLabel: "The Equation" },
  { subject: "fa", section: "equation-lab", label: "Equation, worked", desc: "Hot Chocolate · Abraham · Coffee Corner", group: "equation", groupLabel: "The Equation" },
  { subject: "fa", section: "effects", label: "Transaction effects", desc: "The four moves — run the equation machine", group: "equation", groupLabel: "The Equation" },
  { subject: "fa", section: "journal", label: "Journal", desc: "The pipeline and the day book — Vogue Company", group: "recording", groupLabel: "Recording" },
  { subject: "fa", section: "ledger", label: "Ledger", desc: "Posting — the Cash T-account, for real", group: "recording", groupLabel: "Recording" },
  { subject: "fa", section: "statements", label: "Five statements", desc: "One month of transactions, five shapes", group: "recording", groupLabel: "Recording" },
  { subject: "fa", section: "trial-balance", label: "Trial balance", desc: "Do the columns agree? — sort Pearl's books", group: "recording", groupLabel: "Recording" },
  { subject: "fa", section: "adjusting", label: "Adjusting entries", desc: "Deferrals & accruals — split the prepaid rupee", group: "closing", groupLabel: "Closing" },
  { subject: "fa", section: "final-accounts", label: "Final accounts", desc: "Two questions, two statements", group: "closing", groupLabel: "Closing" },
  { subject: "fa", section: "trading", label: "Trading account", desc: "Did buying and selling pay?", group: "closing", groupLabel: "Closing" },
  { subject: "fa", section: "gp-lab", label: "Gross profit lab", desc: "Six examples — then drive the ladder", group: "closing", groupLabel: "Closing" },
  { subject: "ebh", section: "economics", label: "What is economics?", desc: "Scarcity, choices, and the two branches", group: "lens", groupLabel: "The Lens" },
  { subject: "ebh", section: "business", label: "What is business?", desc: "Economic activity, profit, and why firms exist", group: "lens", groupLabel: "The Lens" },
  { subject: "ebh", section: "history", label: "What is history?", desc: "Change over time — through evidence", group: "lens", groupLabel: "The Lens" },
  { subject: "ebh", section: "rules-players", label: "Rules & players", desc: "The two-by-two that names this course", group: "lens", groupLabel: "The Lens" },
  { subject: "ebh", section: "license-raj", label: "Economy → business", desc: "The License Raj and IPR 1956", group: "currents", groupLabel: "Three Currents" },
  { subject: "ebh", section: "bajaj", label: "Case: Bajaj Auto", desc: "Two tracks — the economy and the scooter", group: "currents", groupLabel: "Three Currents" },
  { subject: "ebh", section: "society-business", label: "Society → business", desc: "McAloo Tikki and the Cadbury ads", group: "currents", groupLabel: "Three Currents" },
  { subject: "ebh", section: "weekend", label: "Business → society", desc: "The story of the weekend, 1886–1938", group: "currents", groupLabel: "Three Currents" },
  { subject: "ebh", section: "business-econ-tech", label: "Economies & technology", desc: "Ford, 2008, Netflix, PESTLE", group: "currents", groupLabel: "Three Currents" },
  { subject: "ebh", section: "agrarian", label: "Agrarian economies", desc: "Seasons, land, lords and zamindars", group: "before", groupLabel: "Before the Machines" },
  { subject: "ebh", section: "guilds", label: "Guild systems", desc: "Apprentice, journeyman, master", group: "before", groupLabel: "Before the Machines" },
  { subject: "ebh", section: "trade-routes", label: "Trade routes", desc: "Silk Road speeds, the Commercial Revolution", group: "before", groupLabel: "Before the Machines" },
  { subject: "ebh", section: "life-before", label: "Life before machines", desc: "Enclosures, seed drills, putting-out", group: "before", groupLabel: "Before the Machines" },
  { subject: "ebh", section: "why-machines", label: "Why machines?", desc: "Population, trade, and the thread bottleneck", group: "machines", groupLabel: "The Machine Age" },
  { subject: "ebh", section: "textile-machines", label: "Textile machines", desc: "Shuttle, jenny, water frame — and the mobs", group: "machines", groupLabel: "The Machine Age" },
  { subject: "ebh", section: "steam-cottonopolis", label: "Steam & Cottonopolis", desc: "Watt's liberation, Manchester's mills", group: "machines", groupLabel: "The Machine Age" },
  { subject: "ebh", section: "labor-movement", label: "The labor movement", desc: "Luddites, Peterloo, and the 1825 Act", group: "machines", groupLabel: "The Machine Age" },
  { subject: "ebh", section: "empire", label: "Empire & mercantilism", desc: "Companies, colonies, British ships", group: "machines", groupLabel: "The Machine Age" },
  { subject: "stm", section: "lens", label: "What is statistics?", desc: "Two meanings, six business applications", group: "displays", groupLabel: "Data & Displays" },
  { subject: "stm", section: "scales", label: "Scales of measurement", desc: "Nominal → ordinal → interval → ratio", group: "displays", groupLabel: "Data & Displays" },
  { subject: "stm", section: "sources", label: "Sources, analytics & ethics", desc: "Hudson's loop, big data, the ASA", group: "displays", groupLabel: "Data & Displays" },
  { subject: "stm", section: "categorical", label: "Categorical displays", desc: "Marada Inn: tables, bars, pie", group: "displays", groupLabel: "Data & Displays" },
  { subject: "stm", section: "quantitative", label: "Quantitative displays", desc: "Histograms, dot plots, stem-and-leaf", group: "displays", groupLabel: "Data & Displays" },
  { subject: "stm", section: "twovars", label: "Two variables", desc: "Crosstabs, Simpson's paradox, dashboards", group: "displays", groupLabel: "Data & Displays" },
  { subject: "stm", section: "location", label: "Measures of location", desc: "Mean, median, mode, percentiles", group: "measures", groupLabel: "Numerical Measures" },
  { subject: "stm", section: "variability", label: "Variability & shape", desc: "Range, IQR, σ, z, box plots", group: "measures", groupLabel: "Numerical Measures" },
  { subject: "stm", section: "association", label: "Association", desc: "Covariance & correlation", group: "measures", groupLabel: "Numerical Measures" },
  { subject: "stm", section: "prob-basics", label: "Experiments & counting", desc: "Sample space, counting rules, priors", group: "probability", groupLabel: "Probability" },
  { subject: "stm", section: "prob-laws", label: "Events & the laws", desc: "Union, intersection, conditionals", group: "probability", groupLabel: "Probability" },
  { subject: "stm", section: "bayes", label: "Bayes' theorem", desc: "Prior → information → posterior", group: "probability", groupLabel: "Probability" },
  { subject: "stm", section: "discrete", label: "Random variables & E(x)", desc: "JSL's 1.20 TVs, DiCarlo's bivariate", group: "discrete", groupLabel: "Discrete Distributions" },
  { subject: "stm", section: "binomial", label: "Binomial · Poisson · Hypergeometric", desc: "Evans, Mercy Hospital, Neveready", group: "discrete", groupLabel: "Discrete Distributions" },
  { subject: "stm", section: "continuous", label: "Uniform · Normal · Exponential", desc: "Slater, Pep Zone, Al's pump, HUL", group: "continuous", groupLabel: "Continuous & Sampling" },
  { subject: "stm", section: "sampling", label: "Sampling & the case file", desc: "NICE Paper, Go Bananas, McNeil's", group: "continuous", groupLabel: "Continuous & Sampling" },
];

export const CHAPTER_TOTAL = CHAPTER_INDEX.length;
