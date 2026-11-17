/* ============================================================
   TEST MY KNOWLEDGE — Financial Accounting question banks,
   one per chapter group (shelf 03 of The Atlas).
   Financial Accounting is a pen-paper, numbers-on-paper
   course, so the bank sticks to mcq | output | short —
   compute-the-figure, complete-the-equation, definitions and
   violation-spotting: the formats the lectures actually drill.
   Every figure below is taken straight from the lecture
   examples (Hot Chocolate, Abraham, Coffee Corner, Rani,
   Vogue, Pearl, Softomation, Tech Mahindra) and hand-checked.
   ============================================================ */

import type { FaExamGroup } from "./faLectures";
export type { FaExamGroup };
export type FaQuestionType = "mcq" | "output" | "short";

export interface FaExamQuestion {
  id: string;
  type: FaQuestionType;
  q: string;
  code?: string; // optional equation / journal-entry panel shown with the question
  options?: string[]; // mcq only
  answer?: number; // mcq only — index of the correct option
  answerText?: string; // output → exact figure; short → model answer
  explain?: string;
}

export interface FaExamBank {
  group: FaExamGroup;
  title: string;
  subtitle: string;
  topics: string;
  questions: FaExamQuestion[];
}

/* ------------------------------------------------------------
   GROUP 1 — FOUNDATIONS  (why accounting exists · the four
             measurement assumptions · violations)
   ------------------------------------------------------------ */
const FOUNDATIONS: FaExamQuestion[] = [
  {
    id: "f1",
    type: "mcq",
    q: "Priya counted the full cost of a new machine as this year\u2019s expense; Rohan counted no wear-and-tear at all. Same transactions, same year \u2014 opposite verdicts. Which pair of measurement ideas, applied properly, settles their argument?",
    options: [
      "Reporting entity and money measurement",
      "Periodicity and periodic matching of costs and revenue",
      "Going concern and fair value",
      "Dual aspect and conservatism",
    ],
    answer: 1,
    explain:
      "Periodicity cuts the business\u2019s long life into artificial time periods, and periodic matching then forces every period\u2019s revenues to carry the costs incurred to earn them. The machine\u2019s price must be spread over its useful life and the wear-and-tear on older equipment must be recognised every period \u2014 Priya charged it all at once, Rohan charged none of it. The rules, not the people, settle the argument.",
  },
  {
    id: "f2",
    type: "mcq",
    q: "A business records an expense for the electricity charges of the owner\u2019s home. Which assumption is violated?",
    options: [
      "Going concern",
      "Money measurement",
      "Reporting entity",
      "Periodicity",
    ],
    answer: 2,
    explain:
      "Reporting entity: the business is treated as distinct and separate from its owner \u2014 its books record only business transactions, never the owner\u2019s personal affairs. Home electricity is a personal expense, so it does not belong in the company\u2019s books at all.",
  },
  {
    id: "f3",
    type: "mcq",
    q: "A car bought at auction for \u20B940,000 is re-recorded at \u20B950,000 one week later because that is what it now seems to be worth. Which principle is violated?",
    options: [
      "The historical cost principle",
      "The going concern assumption",
      "The periodicity assumption",
      "The matching principle",
    ],
    answer: 0,
    explain:
      "Historical cost: assets are recorded at their original purchase price, not at fluctuating market values. The going concern assumption is what justifies this \u2014 only if the business is about to be liquidated would likely sale prices (fair value) replace cost.",
  },
  {
    id: "f4",
    type: "mcq",
    q: "A smartphone bought for the owner\u2019s personal use is entered in the firm\u2019s books as a business asset. This violates\u2026",
    options: [
      "Money measurement \u2014 the phone cannot be valued",
      "The reporting entity assumption \u2014 only business-related items belong in the company\u2019s books",
      "The dual aspect concept \u2014 a second account is missing",
      "Periodicity \u2014 the phone outlasts one year",
    ],
    answer: 1,
    explain:
      "Same family of error as the owner\u2019s home electricity: the reporting entity boundary has been crossed in the opposite direction \u2014 the owner\u2019s personal property has been pulled into the business. Only business-related items belong in the company\u2019s books.",
  },
  {
    id: "f5",
    type: "output",
    q: "Hot Chocolate has assets of \u20B987,000 and liabilities of \u20B953,000. Compute its equity.",
    code: "Assets     = \u20B987,000\nLiabilities = \u20B953,000\n\nEquity = Assets \u2212 Liabilities\n       = \u20B987,000 \u2212 \u20B953,000\n       = ?",
    answerText: "\u20B934,000",
    explain:
      "Equity is the residual interest \u2014 whatever of the assets is left after every liability is paid. \u20B987,000 \u2212 \u20B953,000 = \u20B934,000. State the formula, substitute, answer with the rupee sign: that is the full mark scheme.",
  },
  {
    id: "f6",
    type: "short",
    q: "State the money measurement assumption, and name the kind of things that therefore have no place in the books.",
    answerText:
      "Under money measurement, all business transactions are expressed and recorded in terms of money \u2014 in India, the rupee is the monetary unit.\nAnything that cannot be measured monetarily has no place in accounting: a loyal workforce, the owner\u2019s reputation, a brilliant location\u2019s charm \u2014 real advantages, but not numbers, so not in the books.",
    explain:
      "Money is the only common denominator that lets a factory, a bank loan and a cartage bill sit in one statement. The second mark comes from naming what gets excluded: valuable-but-unmeasurable things.",
  },
  {
    id: "f7",
    type: "mcq",
    q: "The going concern assumption is the reason accountants record assets at historical cost. If liquidation were imminent instead, assets would need to be recorded at\u2026",
    options: [
      "Their original purchase price, unchanged",
      "Fair value \u2014 the amount they would fetch in an arm\u2019s-length sale",
      "Zero, since the business is ending",
      "Their insured value",
    ],
    answer: 1,
    explain:
      "Going concern says: unless there is substantial evidence to the contrary, assume the enterprise continues \u2014 so cost is meaningful. If liquidation is imminent, cost becomes irrelevant and assets must be shown at the amount for which they could be exchanged between knowledgeable, willing parties \u2014 fair value.",
  },
  {
    id: "f8",
    type: "mcq",
    q: "In 2012\u201313, Kingfisher Airlines\u2019 accounts were still prepared on a going-concern basis even though its equity was wiped out, its flying permit had lapsed and its banks had recalled loans; it ceased operations that year. The watchdog lesson of the case is that\u2026",
    options: [
      "Auditors must prepare the financial statements themselves",
      "Timely going-concern warnings protect the users of financial statements",
      "Equity can never be wiped out for a going concern",
      "Banks must always continue funding a company\u2019s operations",
    ],
    answer: 1,
    explain:
      "The 2008 crisis auditors (Lehman, Citigroup, Bear Stearns, Countrywide) were faulted for the same silence. Auditors do not cause collapses \u2014 but failing to raise a going-concern qualification at the right time means failing their role as a watchdog, and investors lose the early warning the statements exist to give.",
  },
  {
    id: "f9",
    type: "short",
    q: "A salesman is paid commission in January 2011 for sales made in December 2010. Which period\u2019s expense is that commission \u2014 and which concept says so?",
    answerText:
      "December 2010 \u2014 the period whose sales the commission helped earn.\nPeriodic matching of costs and revenue: revenues of a period must be matched with the costs incurred to earn those revenues; when payment was made is irrelevant. That is exactly why year-end adjustments are made for outstanding expenses, accrued incomes, prepaid expenses and unearned incomes.",
    explain:
      "Two marks: the right period (December, not January) and the concept doing the work (periodic matching \u2014 payment date irrelevant). Mentioning the year-end adjustment family it explains is the third mark.",
  },
  {
    id: "f10",
    type: "mcq",
    q: "Which of these is NOT one of the four major assumptions that underlie all accounting measurement?",
    options: ["Reporting entity", "Going concern", "Conservatism", "Periodicity"],
    answer: 2,
    explain:
      "The four assumptions are: reporting entity, going concern, periodicity and money measurement. Conservatism is a convention (it appears later, in stock valuation \u2014 cost or net realisable value, whichever is lower) \u2014 but it is not one of the four measurement assumptions.",
  },
];

/* ------------------------------------------------------------
   GROUP 2 — THE EQUATION  (dual aspect · elements ·
             equation workouts · debit/credit rules)
   ------------------------------------------------------------ */
const EQUATION: FaExamQuestion[] = [
  {
    id: "e1",
    type: "mcq",
    q: "A starts a business with a capital of \u20B910,000. The DUAL effect of this single transaction is\u2026",
    options: [
      "Capital \u20B910,000 = Cash \u20B910,000 \u2014 equity rises, asset rises",
      "Cash \u20B910,000 = Profit \u20B910,000",
      "Capital \u20B910,000 = Revenue \u20B910,000",
      "Only cash rises \u2014 a single effect",
    ],
    answer: 0,
    explain:
      "Every transaction touches two aspects at once. The business now controls \u20B910,000 of cash (asset) and owes that \u20B910,000 to its proprietor (capital). Two sides of one coin \u2014 which is why the equation always balances.",
  },
  {
    id: "e2",
    type: "mcq",
    q: "The basic accounting equation is\u2026",
    options: [
      "Assets = Liabilities + Equity",
      "Assets + Liabilities = Equity",
      "Equity = Liabilities \u2212 Assets",
      "Revenue \u2212 Expenses = Assets",
    ],
    answer: 0,
    explain:
      "Assets = Liabilities + Equity \u2014 the accounting equation approach states the relationship between what the business owns and the claims against it (outsiders\u2019 claims first, owners\u2019 residual claim last). Every recording rule in the course hangs off this one line.",
  },
  {
    id: "e3",
    type: "mcq",
    q: "A DEBIT increases which family of accounts?",
    options: [
      "Liabilities, capital, revenues",
      "Assets, expenses, drawings (dividends)",
      "Only assets",
      "Only revenues",
    ],
    answer: 1,
    explain:
      "Assets + Expenses + Drawings = Liabilities + Capital + Revenue. The left side of that rearranged equation increases with debits; the right side increases with credits. Memorise the rearranged line \u2014 it answers every debit/credit question instantly.",
  },
  {
    id: "e4",
    type: "mcq",
    q: "A CREDIT increases\u2026",
    options: [
      "Assets and expenses",
      "Drawings and dividends",
      "Liabilities, capital and revenues",
      "Nothing \u2014 credits only decrease",
    ],
    answer: 2,
    explain:
      "Liabilities, capital and revenues sit on the credit side of the rearranged equation, so credits raise them (and debits lower them). Notice the symmetry: every account family has one action that grows it and one that shrinks it.",
  },
  {
    id: "e5",
    type: "mcq",
    q: "For a resource to qualify as an ASSET, two conditions must both be met. They are\u2026",
    options: [
      "It is valuable and it is physical",
      "The entity controls it and it is expected to bring future economic benefit",
      "It is owned outright and it is resalable",
      "It is recorded in money terms and it lasts over a year",
    ],
    answer: 1,
    explain:
      "Control (the entity can restrict others from using the resource) + future benefit (economic value expected to flow in). Miss either one and it is not an asset \u2014 a public park fails control, a broken iPod fails future benefit, cash passes both: the ideal asset.",
  },
  {
    id: "e6",
    type: "mcq",
    q: "Which of the following is an INTANGIBLE asset?",
    options: ["Land & buildings", "Patents", "Inventories", "Accounts receivable"],
    answer: 1,
    explain:
      "Intangible assets confer exclusive rights but have no physical substance \u2014 patents, copyrights, trademarks. Land and inventories are tangible; accounts receivable is a financial claim (a legally enforceable claim on another party).",
  },
  {
    id: "e7",
    type: "short",
    q: "Define equity, and state what raises it and what lowers it.",
    answerText:
      "Equity is the residual interest in the assets of the entity after deducting all its liabilities \u2014 the \u201Cleftover\u201D value that truly belongs to the owners once all debts are settled.\nIt increases through owner investments and profits from operations; it decreases through distributions to owners (dividends/drawings) and losses. In a company it is called shareholders\u2019 equity.",
    explain:
      "Definition (residual interest / leftover) + the two raises (investments, profits) + the two lowers (distributions, losses). The company-name tag \u2014 shareholders\u2019 equity \u2014 is the polish mark.",
  },
  {
    id: "e8",
    type: "output",
    q: "Abraham Company\u2019s September 30 balance sheet: cash \u20B95,000; trade receivables \u20B917,000; supplies \u20B99,000; equipment \u20B919,000; building \u20B921,800; land \u20B921,000; loan payable \u20B912,000; equity \u20B977,300; expenses payable x. Find x.",
    code: "Assets = Liabilities + Equity\n(5,000+17,000+9,000+19,000+21,800+21,000)\n     = (12,000 + x) + 77,300\n92,800 = 89,300 + x\nx = ?",
    answerText: "\u20B93,500",
    explain:
      "Assets total \u20B992,800. Known claims total \u20B989,300 (12,000 loan + 77,300 equity). The missing expenses payable must fill the gap: 92,800 \u2212 89,300 = \u20B93,500. The equation finds the unknown \u2014 that is its whole job.",
  },
  {
    id: "e9",
    type: "output",
    q: "Coffee Corner\u2019s equity is twice its liabilities, and its assets are \u20B981,000. State its liabilities and equity.",
    code: "Assets = Liabilities + Equity\n81,000 = L + (2 \u00D7 L)\n81,000 = 3 \u00D7 L\nL = ?",
    answerText: "Liabilities \u20B927,000 \u00B7 Equity \u20B954,000",
    explain:
      "Substitute equity = 2L: 81,000 = 3L, so L = 27,000 and equity = 54,000. Check: 27,000 + 54,000 = 81,000 \u2014 the equation closes. Always end with the check line; it is cheap insurance.",
  },
  {
    id: "e10",
    type: "mcq",
    q: "Which statement about the components of shareholders\u2019 equity is correct?",
    options: [
      "Share capital is the profit kept in the business; retained earnings is what shareholders invested",
      "Share capital is what shareholders contributed; retained earnings is cumulative net profit kept in the business rather than distributed",
      "Both are set by the company\u2019s auditors each year",
      "Retained earnings decrease when the company earns profits",
    ],
    answer: 1,
    explain:
      "Share capital = the foundational investment made when shares are issued. Retained earnings = cumulative profit KEPT IN the business \u2014 it grows when the company earns profits and shrinks when it incurs losses or pays dividends.",
  },
];

/* ------------------------------------------------------------
   GROUP 3 — RECORDING  (journal · ledger · statements ·
             trial balance · the Vogue Company)
   ------------------------------------------------------------ */
const RECORDING: FaExamQuestion[] = [
  {
    id: "r1",
    type: "mcq",
    q: "On June 5, Vogue signs an agreement with EthniWear for a special design \u2014 the fee of \u20B92,000 becomes payable only on completion of the work. How is June 5 journalised?",
    options: [
      "Dr Cash \u20B92,000 / Cr Revenue \u20B92,000",
      "Dr Trade receivables \u20B92,000 / Cr Revenue \u20B92,000",
      "Dr Unearned revenue \u20B92,000 / Cr Cash \u20B92,000",
      "No entry at all",
    ],
    answer: 3,
    explain:
      "Signing an agreement transfers no value \u2014 no asset moves, no obligation is born. Accounting records transactions, not intentions. The entry happens only when the work is completed and the fee is earned (or received).",
  },
  {
    id: "r2",
    type: "mcq",
    q: "On June 21, Vogue appoints an office manager on a monthly salary of \u20B91,500. What is journalised?",
    options: [
      "Dr Salaries expense \u20B91,500 / Cr Cash \u20B91,500",
      "Dr Salaries payable \u20B91,500 / Cr Salaries expense \u20B91,500",
      "No entry \u2014 appointing an employee is not a transaction",
      "Dr Manager \u20B91,500 / Cr Capital \u20B91,500",
    ],
    answer: 2,
    explain:
      "Hiring changes no asset, liability or equity \u2014 it is a promise about the future. Salary becomes an expense period by period as the work is received and paid, not at the moment of appointment.",
  },
  {
    id: "r3",
    type: "output",
    q: "Rani deals in automobiles. She starts with cash \u20B980,000, buys goods on credit from Ramesh \u20B910,000, buys furniture for cash \u20B96,000, then pays creditors \u20B98,000. What do the final equation totals look like?",
    code: "Assets:  Cash 66,000 + Stock 10,000 + Furniture 6,000 = 82,000\nClaims:  Capital 80,000 + Creditors 2,000             = 82,000\n\nFinal equation = ?",
    answerText: "\u20B982,000 = \u20B982,000",
    explain:
      "Cash: 80,000 \u2212 6,000 \u2212 8,000 = 66,000. Stock +10,000, Furniture +6,000 \u2192 assets 82,000. Creditors: +10,000 \u2212 8,000 = 2,000; capital 80,000 \u2192 claims 82,000. The equation holds after EVERY single transaction \u2014 that is what the double-entry system guarantees.",
  },
  {
    id: "r4",
    type: "mcq",
    q: "Bought furniture costing \u20B95,000 by paying cash. The effect on the accounting equation is\u2026",
    options: [
      "Assets fall by \u20B95,000",
      "One asset rises \u20B95,000, another falls \u20B95,000 \u2014 the equation total is unchanged",
      "Liabilities rise by \u20B95,000",
      "Capital rises by \u20B95,000",
    ],
    answer: 1,
    explain:
      "Furniture comes in (+5,000 asset), cash goes out (\u22125,000 asset). Both changes are inside the assets column, so the total is untouched and the other side never blinks. Not every transaction changes the size of the equation \u2014 some just reshuffle it.",
  },
  {
    id: "r5",
    type: "output",
    q: "Write the June 1 journal entry for Vogue: Rakesh invested cash \u20B950,000 in the company\u2019s share capital.",
    code: "ANALYSIS: Asset (Cash) increased; Equity (Share Capital) increased\nRULES:    Debit assets to record increase; Credit equity to record increase\nENTRY:    ?",
    answerText: "Cash A/c .................... Dr   50,000\n        To Share Capital ...............   50,000\n(Being capital invested in cash)",
    explain:
      "Asset up \u2192 debit Cash. Equity up \u2192 credit Share Capital. The narration line \u2014 \u2018being capital invested in cash\u2019 \u2014 is the final touch that makes the entry exam-complete.",
  },
  {
    id: "r6",
    type: "mcq",
    q: "On June 8 Vogue received \u20B91,500 from Kidswear for services to be provided later. Which account is CREDITED?",
    options: ["Revenue from services", "Cash", "Unearned revenue", "Trade receivables"],
    answer: 2,
    explain:
      "Cash is debited (asset in), but the revenue is NOT earned yet \u2014 Vogue now owes the service. Unearned revenue is credited: a liability. Cash received first, revenue recognised later \u2014 the deferral pattern in one entry.",
  },
  {
    id: "r7",
    type: "mcq",
    q: "On June 22, Vogue uses office supplies worth \u20B91,800. The correct entry is\u2026",
    options: [
      "Dr Office supplies \u20B91,800 / Cr Cash \u20B91,800",
      "Dr Office supplies expense \u20B91,800 / Cr Office supplies \u20B91,800",
      "Dr Office supplies expense \u20B91,800 / Cr Trade payables \u20B91,800",
      "No entry until the supplies are fully finished",
    ],
    answer: 1,
    explain:
      "The supplies were an asset; using them converts part of that asset into an expense. Expense up \u2192 debit; asset down \u2192 credit. Consuming what you own is not a new purchase \u2014 it is a transfer inside your own books.",
  },
  {
    id: "r8",
    type: "output",
    q: "Vogue\u2019s Cash T-account for June shows debit postings of \u20B958,500 (Jun 1: 50,000 \u00B7 7: 2,000 \u00B7 8: 1,500 \u00B7 18: 4,000 \u00B7 25: 1,000) and credit postings of \u20B911,570. What is the closing cash balance, and on which side?",
    code: "Dr total = 50,000+2,000+1,500+4,000+1,000 = 58,500\nCr total = 11,570\nBalance = 58,500 \u2212 11,570 = ?",
    answerText: "\u20B946,930 \u2014 debit balance (cash is an asset; assets carry debit balances)",
    explain:
      "58,500 \u2212 11,570 = 46,930, and it sits on the debit side \u2014 exactly the Cash line in Vogue\u2019s June 30 trial balance. The ledger balance IS the trial-balance line; that is the pipeline working.",
  },
  {
    id: "r9",
    type: "mcq",
    q: "Vogue\u2019s trial balance by the BALANCE method totals \u20B968,000 on each side; by the TOTAL method, \u20B986,370. Why is the total method bigger?",
    options: [
      "The total method counts revenue twice",
      "It adds both the debit and the credit posting of every account before netting, instead of listing only net balances",
      "It includes accounts the balance method forgets",
      "It is simply an error in the exhibit",
    ],
    answer: 1,
    explain:
      "Balance method: one net figure per account (e.g. Cash 46,930 Dr). Total method: every account\u2019s gross debit side and gross credit side both appear (Cash 58,500 Dr and 11,570 Cr). More rows, same proof \u2014 both sides still agree (68,000 = 68,000; 86,370 = 86,370).",
  },
  {
    id: "r10",
    type: "short",
    q: "A trial balance agrees. What does that prove \u2014 and what errors can STILL survive in the books?",
    answerText:
      "It proves arithmetic consistency: under double entry, every debit has an equal credit, so equal totals confirm the posting maths.\nIt does NOT prove cent-per-cent accuracy. Errors of principle (wrong class of account), compensating errors (two mistakes cancelling out), wholly omitted transactions, and entries to the wrong account at the right amount can all still survive an agreeing trial balance.",
    explain:
      "The first half is the confidence the TB buys; the second half is the honesty it owes. Name at least two surviving error types for the second mark \u2014 errors of principle and compensating errors are the classics.",
  },
];

/* ------------------------------------------------------------
   GROUP 4 — CLOSING  (adjusting entries · final accounts ·
             the trading account · gross profit)
   ------------------------------------------------------------ */
const CLOSING: FaExamQuestion[] = [
  {
    id: "c1",
    type: "mcq",
    q: "Prepaid insurance, office supplies and unearned revenue are all examples of\u2026",
    options: [
      "Accruals \u2014 cash arrives last",
      "Deferrals \u2014 cash happens first, recognition happens later",
      "Contra accounts",
      "Errors the trial balance catches",
    ],
    answer: 1,
    explain:
      "DEFERRAL: the cash already moved (paid for insurance, received in advance) but the expense or revenue will only be recognised as time passes or service is given. Cash first, recognition later \u2014 apportioned between two or more periods.",
  },
  {
    id: "c2",
    type: "mcq",
    q: "Salaries payable, accrued interest expense and unbilled revenue are examples of\u2026",
    options: [
      "Deferrals \u2014 cash first",
      "Accruals \u2014 recognition first, expected future cash later",
      "Financial claims",
      "Statutory liabilities only",
    ],
    answer: 1,
    explain:
      "ACCRUAL: an expense incurred but not paid, or revenue earned but not received \u2014 recognition happens now for cash that is still in the future. Previously unrecorded items that the adjustment brings into the books.",
  },
  {
    id: "c3",
    type: "output",
    q: "On October 1 you pay \u20B912,000 for one year of insurance. The accounting year ends December 31. Split the payment into this year\u2019s expense and the prepaid asset.",
    code: "Months consumed: Oct + Nov + Dec = 3\nExpense  = 12,000 \u00D7 3/12 = ?\nPrepaid  = 12,000 \u2212 expense = ?",
    answerText: "Expense \u20B93,000 \u00B7 Prepaid insurance (asset) \u20B99,000",
    explain:
      "Only 3 of the 12 protected months fall inside this year: 12,000 \u00D7 3/12 = 3,000 becomes insurance expense. The remaining 9,000 is a future benefit \u2014 it stays an asset called prepaid insurance. Cash happened first; expense recognition happens gradually afterward.",
  },
  {
    id: "c4",
    type: "output",
    q: "A customer gives you \u20B960,000 in advance for a six-month service contract. One month of service is now provided. How much revenue is recognised, and what happens to the liability?",
    code: "Initial:  Cash Dr 60,000 / Unearned Revenue Cr 60,000\n1 month served: Revenue = 60,000 \u00D7 1/6 = ?\nLiability falls by the same amount \u2192 ?",
    answerText: "Revenue \u20B910,000 \u00B7 Unearned revenue liability falls to \u20B950,000",
    explain:
      "You may hold the cash, but revenue is earned only as the service is delivered: 60,000 \u00F7 6 = 10,000 per month. After one month, 10,000 moves from the liability (unearned revenue) to revenue; 50,000 of obligation remains. Cash received first \u2192 revenue recognised later.",
  },
  {
    id: "c5",
    type: "mcq",
    q: "Tech Mahindra received \u20B99,682 million for changes to a long-term contract, recognised \u20B92,005 million as revenue that year and held \u20B97,677 million as deferred revenue. That \u20B97,677 million is\u2026",
    options: [
      "An asset \u2014 cash was received",
      "A liability \u2014 the amount must be repaid or the services provided",
      "Revenue of the following year, recorded in advance as income",
      "An expense of the current year",
    ],
    answer: 1,
    explain:
      "Deferred revenue is a liability: either the services must be provided or the cash must be returned \u2014 in both cases the company owes something. As services are delivered, the liability converts into revenue with a corresponding reduction in deferred revenue.",
  },
  {
    id: "c6",
    type: "mcq",
    q: "If a business makes NO adjustment for prepaid expenses at year-end, its financial statements will\u2026",
    options: [
      "Overstate expenses and understate assets",
      "Understate expenses and overstate assets and equity",
      "Balance perfectly \u2014 adjustments are optional",
      "Show more cash than it has",
    ],
    answer: 1,
    explain:
      "The used-up portion never became an expense \u2192 expenses understated \u2192 profit overstated \u2192 equity overstated; and the asset stays on the books at its full amount \u2192 assets overstated. Both statements are wrong, in opposite directions.",
  },
  {
    id: "c7",
    type: "mcq",
    q: "\u201CFinal accounts\u201D consist of two key statements. They are\u2026",
    options: [
      "The cash flow statement and the balance sheet",
      "The trading & profit and loss account, and the balance sheet",
      "The trial balance and the worksheet",
      "The income statement and the statement of changes in equity",
    ],
    answer: 1,
    explain:
      "Trading & Profit and Loss Account \u2014 did the business earn a profit or suffer a loss during the period (performance). Balance Sheet \u2014 what the business owns and owes at a point in time (position). The two questions every owner asks, one statement each.",
  },
  {
    id: "c8",
    type: "output",
    q: "A trader\u2019s trial balance shows: purchases \u20B930,000; purchases returns \u20B95,000; sales \u20B940,000; sales returns \u20B95,000. Compute the gross profit.",
    code: "Net sales     = 40,000 \u2212 5,000 = 35,000\nNet purchases = 30,000 \u2212 5,000 = 25,000\nGross profit  = 35,000 \u2212 25,000 = ?",
    answerText: "\u20B910,000",
    explain:
      "Returns first, then the comparison: net sales 35,000 against net purchases (the cost of goods sold) 25,000 leaves a gross profit of 10,000. No stock, no direct expenses \u2014 the simplest trading result there is.",
  },
  {
    id: "c9",
    type: "output",
    q: "A trader in 2024: opening stock \u20B910,000; purchases \u20B940,000; purchases returns \u20B95,000; sales \u20B960,000; sales returns \u20B910,000; closing stock \u20B915,000. Compute the gross profit.",
    code: "Net sales = 60,000 \u2212 10,000 = 50,000\nCOGS = 10,000 + (40,000 \u2212 5,000) \u2212 15,000 = 30,000\nGross profit = 50,000 \u2212 30,000 = ?",
    answerText: "\u20B920,000",
    explain:
      "COGS = opening stock + net purchases \u2212 closing stock = 10,000 + 35,000 \u2212 15,000 = 30,000. Net sales 50,000 minus COGS 30,000 \u2192 gross profit 20,000. The closing stock does double duty: it shrinks COGS here and reappears as an asset in the balance sheet.",
  },
  {
    id: "c10",
    type: "mcq",
    q: "Closing stock is valued at\u2026 and appears\u2026",
    options: [
      "Selling price; on the debit side of the trading account",
      "Cost or net realisable value, whichever is lower; on the credit side of the trading account and as an asset in the balance sheet",
      "Cost plus a standard margin; only in the balance sheet",
      "Last year\u2019s cost; only in the notes",
    ],
    answer: 1,
    explain:
      "The valuation rule follows conservatism: never anticipate profit \u2014 take cost or net realisable value, whichever is LOWER. And closing stock does double duty: it credits the trading account (shrinks COGS) and carries forward as a current asset in the balance sheet.",
  },
];

/* ------------------------------------------------------------
   LECTURE 29 EXTENSIONS — hand-checked figures from the new
   deck, grafted onto the existing banks.
   ------------------------------------------------------------ */
const FOUNDATIONS_EXTRA: FaExamQuestion[] = [
  {
    id: "f11",
    type: "mcq",
    q: "Who drafts India's accounting standards, who gives them the force of law, and who polices listed companies?",
    options: [
      "SEBI drafts · ICAI enforces · MCA polices",
      "ICAI drafts · MCA notifies under the Companies Act 2013 · SEBI polices listed companies",
      "MCA drafts · SEBI notifies · ICAI polices",
      "The IASB drafts all three, India only adopts",
    ],
    answer: 1,
    explain:
      "Three pillars: ICAI (the author) drafts standards through its Accounting Standards Board; MCA (the legislator) prescribes them under the Companies Act 2013 and enforces compliance; SEBI (the police) mandates disclosure norms and quarterly reporting for listed companies.",
  },
  {
    id: "f12",
    type: "mcq",
    q: "India's converged version of IFRS — Ind AS — is mandatory for which companies?",
    options: [
      "Only listed companies",
      "Listed companies and large unlisted companies with net worth exceeding ₹250 crore",
      "Every registered business regardless of size",
      "Only companies that export goods",
    ],
    answer: 1,
    explain:
      "Ind AS is notified by the MCA under the Companies Act 2013 and mandatory for all listed companies plus large unlisted companies above ₹250 crore net worth — making Indian statements comparable across borders while allowing Indian deviations.",
  },
];

const RECORDING_EXTRA: FaExamQuestion[] = [
  {
    id: "r11",
    type: "mcq",
    q: "Under the traditional approach, which rule pair belongs to which account family?",
    options: [
      "Personal: debit what comes in · Real: debit the receiver · Nominal: debit expenses",
      "Personal: debit the receiver, credit the giver · Real: debit what comes in, credit what goes out · Nominal: debit expenses & losses, credit incomes & gains",
      "Personal: debit expenses · Real: credit the receiver · Nominal: debit what comes in",
      "All three families share one rule: debit the receiver",
    ],
    answer: 1,
    explain:
      "Three families, three laws. Personal (natural, artificial, representative persons): debit the receiver, credit the giver. Real (tangible & intangible assets): debit what comes in, credit what goes out. Nominal (expenses, losses, incomes, gains — closed to P&L): debit expenses & losses, credit incomes & gains.",
  },
  {
    id: "r12",
    type: "output",
    q: "A cash account shows debits of ₹3,05,000 and credits of ₹2,10,000. Compute the Balance c/d and state the account's nature.",
    code: "Dr side  = 3,00,000 + 5,000 = 3,05,000\nCr side  = 2,00,000 + 10,000 = 2,10,000\n\nBalance c/d = ?",
    answerText: "95,000",
    explain:
      "Debits exceed credits by 95,000, so 'By Balance c/d ₹95,000' is placed on the lower (credit) side to equalize the account — making cash a DEBIT balance. Next period it opens as 'To Balance b/d ₹95,000'. The side with the higher total decides the account's nature.",
  },
];

const CLOSING_EXTRA: FaExamQuestion[] = [
  {
    id: "c11",
    type: "mcq",
    q: "The fourth of the year's closing entries transfers the P&L's balancing figure. If the year ended in net profit, that entry is…",
    options: [
      "Debit Capital A/c, credit Profit & Loss A/c",
      "Debit Profit & Loss A/c, credit Capital A/c",
      "Debit Trading A/c, credit Capital A/c",
      "No entry — net profit stays in the P&L",
    ],
    answer: 1,
    explain:
      "Net profit means the P&L's credit side beat its debit side — the balancing figure sits on the debit side and closes out as: Debit Profit & Loss A/c, Credit Capital A/c. A net loss travels the opposite way (Debit Capital, Credit P&L). Nominal accounts end the year at zero.",
  },
  {
    id: "c12",
    type: "mcq",
    q: "Which arrangement is the LIQUIDITY order of a balance sheet?",
    options: [
      "Land → machinery → inventory → receivables → cash",
      "Cash → receivables → inventory → machinery → land",
      "Capital → long-term loans → creditors → overdraft",
      "Random — the order is optional",
    ],
    answer: 1,
    explain:
      "Liquidity order: most convertible first — cash leads, land trails; current liabilities precede long-term. Permanency order is the mirror image (land first, capital first). Same sheet, two lenses — short-term lenders prefer liquidity order.",
  },
];

/* ------------------------------------------------------------
   GROUP — CONCEPTS & CONVENTIONS  (L5–L7: the eight concepts,
             the four conventions, violation spotting)
   ------------------------------------------------------------ */
const CONCEPTS: FaExamQuestion[] = [
  {
    id: "k1",
    type: "mcq",
    q: "Land was purchased for ₹50,000. Years later the market reads ₹60,000, then ₹40,000. At what value does the land sit in the books — and which concept says so?",
    options: [
      "₹60,000 then ₹40,000 — money measurement",
      "₹50,000 throughout — the cost concept",
      "₹60,000 throughout — going concern",
      "Whatever the owner declares — materiality",
    ],
    answer: 1,
    explain:
      "Cost concept: assets are recorded at their acquisition price, and that cost bases all subsequent accounting regardless of market swings. Advantage: objectivity. Limitation: historical cost cannot account for inflation.",
  },
  {
    id: "k2",
    type: "mcq",
    q: "An order is placed in March; the goods are delivered in April. Under the realization concept, revenue belongs to…",
    options: [
      "March — the order date",
      "April — when property in the goods passes to the buyer",
      "Whichever month the cash arrives",
      "Split across March and April",
    ],
    answer: 1,
    explain:
      "Realization: revenue is recognized when the sale is made — when property in the goods passes and the buyer becomes legally liable. Delivery, not order or payment, owns the revenue.",
  },
  {
    id: "k3",
    type: "mcq",
    q: "Goods cost ₹1,00,000. Market price first rises to ₹1,40,000, then falls to ₹80,000. Inventory is valued at…",
    options: [
      "₹1,40,000 then ₹80,000 — market, always",
      "₹1,00,000 then ₹1,00,000 — cost, always",
      "₹1,00,000 then ₹80,000 — the lower of cost and market",
      "₹1,20,000 — the average of the two",
    ],
    answer: 2,
    explain:
      "Conservatism: anticipate no profit, provide for all possible losses. Market above cost → the unrealized gain is ignored (₹1,00,000). Market below cost → the loss is recognized immediately (₹80,000). The same logic drives provisions for doubtful debts.",
  },
  {
    id: "k4",
    type: "mcq",
    q: "Switching inventory valuation methods to inflate this year's profit violates which convention(s)?",
    options: [
      "Materiality only — the amounts are small",
      "Consistency and conservatism — arbitrary changes must be disclosed, not smuggled",
      "Full disclosure only, if the notes mention it",
      "None — method choice is free",
    ],
    answer: 1,
    explain:
      "Consistency requires the same practices period to period; changes that affect profit must be disclosed with explanatory notes. An arbitrary switch that flatters profit also violates conservatism's playing-safe spirit. Legitimate improvements are allowed — but disclosed.",
  },
  {
    id: "k5",
    type: "mcq",
    q: "Rounding figures to the nearest hundred for a management report, while keeping exact paise in each debtor's ledger, is justified by…",
    options: [
      "Consistency — the same rounding everywhere",
      "Materiality — significance is contextual",
      "Realization — only realized figures matter",
      "Full disclosure — rounding is disclosed",
    ],
    answer: 1,
    explain:
      "Materiality: accountants attach importance to significant details and ignore insignificant ones — and significance depends on context. Every rupee is material to a debtor's account; a board report may round to hundreds. Permitted under the Companies Act.",
  },
  {
    id: "k6",
    type: "mcq",
    q: "Reporting a pending lawsuit in the notes to accounts is which convention at work?",
    options: [
      "Conservatism — providing for the loss",
      "Full disclosure — contingent liabilities must be disclosed",
      "Materiality — lawsuits are always immaterial",
      "Consistency — legal practice",
    ],
    answer: 1,
    explain:
      "Full disclosure: all material information of interest to proprietors, creditors and investors must be honestly presented — the Companies Act requires a true and fair view, and notes to accounts (contingent liabilities, investment values) are part of it.",
  },
  {
    id: "k7",
    type: "mcq",
    q: "Hire purchase: ownership passes only at the final installment. How is revenue treated?",
    options: [
      "All revenue at the final payment — realization strictly",
      "Revenue recorded progressively as installments fall due",
      "No revenue until the item is repossessed",
      "Revenue when the order is placed",
    ],
    answer: 1,
    explain:
      "A realization exception: waiting for the final payment would misstate every interim period, so sellers record revenue progressively as installments are received or become due. Same logic as long-term construction contracts (profit yearly on work certified).",
  },
  {
    id: "k8",
    type: "output",
    q: "Under the replacement-cost lens: stock bought at ₹20/kg, replacement at ₹25/kg, sold at ₹30/kg. Split the ₹10 profit into operating profit and holding gain.",
    code: "Selling price      = ₹30\nReplacement cost  = ₹25\nHistorical cost   = ₹20\n\nOperating profit  = 30 − 25 = ?\nHolding gain      = 25 − 20 = ?",
    answerText: "₹5 operating + ₹5 holding",
    explain:
      "Operating profit = selling price − replacement cost = 30 − 25 = ₹5 (core business skill). Holding gain = replacement cost − historical cost = 25 − 20 = ₹5 (inflation while holding stock). The traditional lens shows the same ₹10 but calls it all operating — hiding the market's contribution.",
  },
];

/* ------------------------------------------------------------
   GROUP — THE CYCLE  (L16–L19: cash vs accrual, the matching
             principle, adjusting entries, Vogue's six)
   ------------------------------------------------------------ */
const CYCLE: FaExamQuestion[] = [
  {
    id: "y1",
    type: "mcq",
    q: "₹1,000 is received on January 1 for twelve months of service. On January 31, how much revenue has the accrual basis earned?",
    options: ["₹1,000 — cash is cash", "₹1,000/12 ≈ ₹83", "₹0 — accrual waits for cash", "₹500 — half the service"],
    answer: 1,
    explain:
      "Accrual matches revenue to the service delivered: 1,000 × 1/12 ≈ ₹83 earned by January 31. The remaining ₹917 sits as unearned revenue — a liability. Cash basis would show all ₹1,000 on day one, which is exactly its flaw.",
  },
  {
    id: "y2",
    type: "mcq",
    q: "A machine is built in December, shipped in March, and paid for in May. When is the revenue recognized?",
    options: ["December — manufacturing", "March — ownership transfers", "May — cash received", "Spread across all three"],
    answer: 1,
    explain:
      "Realization: revenue is recognized when goods are furnished and ownership passes — March. Manufacturing creates inventory, not revenue; cash collection is a separate event. Timing of payment is irrelevant.",
  },
  {
    id: "y3",
    type: "mcq",
    q: "Which is NOT an advantage of the cash basis of accounting?",
    options: [
      "Simple and straightforward",
      "Requires no adjusting entries",
      "Provides an accurate, fair picture of business performance",
      "Suits cash-heavy small businesses",
    ],
    answer: 2,
    explain:
      "The cash basis is simple, objective and adjustment-free — but it does NOT give a fair picture: it ignores matching, skips capital/revenue distinctions, allows profit manipulation through cash timing, and reports inconsistently. That is why commercial institutions use the accrual basis.",
  },
  {
    id: "y4",
    type: "mcq",
    q: "Vogue prepaid ₹720 on June 6 for twelve months of insurance. The June 30 adjusting entry is…",
    options: [
      "Debit Prepaid Insurance ₹60; credit Insurance Expense ₹60",
      "Debit Insurance Expense ₹60; credit Prepaid Insurance ₹60",
      "Debit Insurance Expense ₹720; credit Cash ₹720",
      "No entry until the policy expires",
    ],
    answer: 1,
    explain:
      "720 ÷ 12 = ₹60 consumed in June. The entry shifts the expired portion from asset to expense: Debit Insurance Expense 60, Credit Prepaid Insurance 60. Skipping it overstates assets and understates expenses.",
  },
  {
    id: "y5",
    type: "output",
    q: "Office supplies account shows ₹3,700; the June 30 physical count finds ₹2,900. Give the adjusting entry amount.",
    code: "Supplies (ledger)      = 3,700\nSupplies (counted)     = 2,900\n\nSupplies consumed      = ?",
    answerText: "800",
    explain:
      "3,700 − 2,900 = ₹800 consumed. Entry: Debit Office Supplies Expense 800, Credit Office Supplies 800. The remaining ₹2,900 stays an asset. Only the consumed portion becomes an expense.",
  },
  {
    id: "y6",
    type: "output",
    q: "An employee hired June 21 works 10 days by June 30 at a monthly salary of ₹1,500. What salary expense has accrued?",
    code: "Daily rate = 1,500 ÷ 30 = 50\nDays worked = 10\n\nAccrued = ?",
    answerText: "500",
    explain:
      "1,500 ÷ 30 × 10 = ₹500. Entry: Debit Salaries Expense 500, Credit Salaries Payable 500 — services received, cash not yet paid. Before the adjustment, liabilities AND expenses are both understated.",
  },
  {
    id: "y7",
    type: "mcq",
    q: "Depreciation on a ₹3,000 machine with a 5-year life is booked via Accumulated Depreciation rather than the Equipment account. Why?",
    options: [
      "To make expenses look smaller",
      "The contra-asset preserves the original cost while tracking value consumed",
      "Accumulated depreciation is a liability account",
      "Equipment accounts cannot be credited",
    ],
    answer: 1,
    explain:
      "3,000 ÷ 60 months = ₹50/month: Debit Depreciation Expense 50, Credit Accumulated Depreciation 50. The contra-asset keeps the equipment's original ₹3,000 visible on the balance sheet while the used-up value accumulates separately.",
  },
  {
    id: "y8",
    type: "mcq",
    q: "Tech Mahindra received ₹9,682 million on a long-term contract but recognized only ₹2,005 million as revenue that year. The remaining ₹7,677 million is…",
    options: [
      "An immediate profit",
      "Deferred revenue — a liability until the services are provided",
      "An asset called unbilled revenue",
      "A dividend to shareholders",
    ],
    answer: 1,
    explain:
      "Cash received before services are performed creates a liability — unearned (deferred) revenue. Only the ₹2,005 million value of services actually provided became revenue. The rest is recognized as the obligation is satisfied — Vogue's ₹900 entry at industrial scale.",
  },
];

/* ------------------------------------------------------------
   GROUP — CASH FLOW & ANALYSIS  (L23–L29: the fourth pillar,
             the two methods, the six questions, the analysis)
   ------------------------------------------------------------ */
const CASHFLOW: FaExamQuestion[] = [
  {
    id: "w1",
    type: "mcq",
    q: "Which of these qualifies as a cash equivalent?",
    options: [
      "Equity shares of another company",
      "A 1-year fixed deposit",
      "A 2-month fixed deposit",
      "A 1-year FD with 2 months remaining",
    ],
    answer: 2,
    explain:
      "Cash equivalents: short-term, highly liquid, readily convertible, minimal risk of value change — maturities around three months, counted from ACQUISITION date. Equity shares are too volatile; the 1-year FDs fail the maturity test regardless of time remaining. The 2-month FD passes.",
  },
  {
    id: "w2",
    type: "mcq",
    q: "Interest received on investments and interest paid on loans belong, respectively, to…",
    options: [
      "Operating and operating",
      "Investing and financing",
      "Financing and investing",
      "Operating and financing",
    ],
    answer: 1,
    explain:
      "Returns on investments made (interest and dividends RECEIVED) are investing inflows. The cost of financing (interest and dividends PAID) belongs to financing. Only the principal revenue-generating flows are operating.",
  },
  {
    id: "w3",
    type: "mcq",
    q: "A company converts ₹50 lakh of debentures into equity shares. On the cash flow statement this appears…",
    options: [
      "As a financing inflow of ₹50 lakh",
      "As both an inflow and an outflow",
      "Nowhere — no cash moved",
      "As an investing outflow",
    ],
    answer: 2,
    explain:
      "Debt-to-equity conversion is a balance-sheet transaction with zero cash movement. Only transactions involving actual cash appear on the statement — a recurring trap in both L23 and L26.",
  },
  {
    id: "w4",
    type: "mcq",
    q: "In the indirect method, an INCREASE in trade receivables is…",
    options: [
      "Added — receivables are an asset",
      "Deducted — credit sales were booked but cash not collected",
      "Ignored — customers will pay eventually",
      "Added only if sales grew",
    ],
    answer: 1,
    explain:
      "An increase in a current asset means cash is locked in: profit rose, cash did not. Deduct. Decrease in receivables (customers paid up) is added. For current liabilities the signs flip: increase added, decrease deducted.",
  },
  {
    id: "w5",
    type: "output",
    q: "Jaws Photo Plus: net income ₹73,000; add depreciation ₹7,000; deduct gain on disposal ₹2,500; accounts receivable increased ₹4,000; accounts payable decreased ₹3,800. Compute net cash from operating activities.",
    code: "73,000 + 7,000 − 2,500 − 4,000 − 3,800 = ?",
    answerText: "69,700",
    explain:
      "73,000 + 7,000 = 80,000; − 2,500 (non-operating gain removed) = 77,500; − 4,000 (receivables up, cash locked) = 73,500; − 3,800 (payables paid down, cash left) = ₹69,700. Note: the payables decrease is DEDUCTED — some summaries mislabel it as an addition.",
  },
  {
    id: "w6",
    type: "output",
    q: "Tax expense ₹50,000; opening tax payable ₹30,000; closing tax payable ₹50,000. Compute the income tax PAID.",
    code: "Tax paid = expense + opening payable − closing payable\n        = 50,000 + 30,000 − 50,000 = ?",
    answerText: "30,000",
    explain:
      "₹30,000 of tax was actually paid in cash. The ₹20,000 increase in the payable stays a liability and reappears as a working-capital addition — never as tax paid.",
  },
  {
    id: "w7",
    type: "mcq",
    q: "Compass Company: net profit ₹11,41,000, operating cash flow ₹72,000, inventory up ₹58,000, receivables up ₹44,000. The first analytical verdict is…",
    options: [
      "The company is fraudulent",
      "Poor quality of earnings — profit is trapped in working capital, not converted to cash",
      "The depreciation method is too aggressive",
      "Sales must have collapsed",
    ],
    answer: 1,
    explain:
      "A ₹10,69,000 gap between profit and operating cash is a quality-of-earnings question: inventory (+58,000) and receivables (+44,000) locked cash into operations, and expansion spending drained the rest. Not fraud — but the statement forces the question.",
  },
  {
    id: "w8",
    type: "mcq",
    q: "Operating cash flow ₹72,000; interest paid ₹22,000. From the creditors' perspective this means…",
    options: [
      "Default is imminent — cover below 5×",
      "Interest cover of 3.3× — operating cash covers interest over three times, low default risk",
      "The company must issue more equity",
      "Nothing — creditors only read the balance sheet",
    ],
    answer: 1,
    explain:
      "72,000 ÷ 22,000 = 3.3× interest cover: operating cash flows cover interest obligations more than three times — a strong protective shield with low default risk even under adverse conditions. The shareholders' lens is harsher: dividend sustainability.",
  },
  {
    id: "w9",
    type: "output",
    q: "Pioneer Limited: operating +₹1,52,000; investing −₹1,50,000; financing −₹60,000; opening cash ₹2,00,000. Compute the closing cash balance.",
    code: "1,52,000 − 1,50,000 − 60,000 = net change\nClosing = 2,00,000 + net change = ?",
    answerText: "1,42,000",
    explain:
      "Net change = 1,52,000 − 1,50,000 − 60,000 = −58,000. Closing cash = 2,00,000 − 58,000 = ₹1,42,000 — which must reconcile exactly with the balance sheet. The statement closes when the check passes.",
  },
  {
    id: "w10",
    type: "mcq",
    q: "Dr. Reddy's 2015-16: net profit fell 7.92%, but operating profit grew 9.23%. What reconciles the two stories?",
    options: [
      "A change in the depreciation method",
      "A one-time ₹4,621 thousand foreign-exchange loss (Venezuela) — exceptional, non-recurring",
      "A collapse in revenue from operations",
      "A surge in income tax",
    ],
    answer: 1,
    explain:
      "Revenue grew 4.49%, expenses only 3.49% — core operations were strong. The entire headline decline came from an exceptional FX loss absent in 2015. Quality-of-earnings analysis separates operating performance from one-time events.",
  },
];

/* ------------------------------------------------------------
   LECTURES 30–34 EXPANSION (the 29→34 upgrade). Two new banks
   — RATIOS (L30/L31/L34) and ASSETS (L32/L33) — plus ten new
   questions each for closing and cashflow. Every figure below
   appears verbatim in FA_L01-L34_Compiled.pdf: 15.55%, 0.87,
   137.18, 8%, 2, 20%, 25%, ₹5 EPS, 11%, 27.62, 7,200, 4,140,
   7,872, 8,283, 3,057, 1,083, 54,000, 57,000, 47,000, 9,400,
   22,800, 13,680, 8,208, 4,925, 2,955, 2,312, 29,200, 31,000,
   1,800, 27,100, 2,100, 48,000, 8,000, 4.49%, 3.49%, 7.74%,
   461, 13.47%, 13.05%, 11.11%, 2:1, 0.8:1, 60, 140, 90, 230,
   0.5:1, 4×, 75%, 300, 15, 100/5/110 = 15%, 89→95, 232→243,
   27.8→33, 25-lakh, and the L20–L27 figures already on shelf.
   Distractors are plausible accounting errors, never noise.
   ------------------------------------------------------------ */

const RATIOS: FaExamQuestion[] = [
  {
    id: "ra1",
    type: "output",
    q: "A stationery shop has ₹5,00,000 of sales and ₹40,000 of profit. Compute the profit margin.",
    code: "Profit margin = Net Profit ÷ Revenue × 100",
    answerText: "8%",
    explain: "40,000 ÷ 500,000 × 100 = 8% — the shop keeps ₹8 of every ₹100 of sales.",
  },
  {
    id: "ra2",
    type: "mcq",
    q: "Two firms each earn ₹10 lakh profit. Firm A sold ₹50 lakh; Firm B sold ₹200 lakh. Their profit margins are…",
    options: ["2% and 8%", "20% and 5% — the same profit, different stories", "5% and 20%", "Both 10%"],
    answer: 1,
    explain: "10 ÷ 50 = 20%; 10 ÷ 200 = 5%. Identical profits hide opposite businesses — which is exactly why ratios need a base.",
  },
  {
    id: "ra3",
    type: "mcq",
    q: "Which expense NEVER affects gross margin?",
    options: ["Raw material cost rising", "Selling prices cut to match competitors", "Interest expense", "Freight inward"],
    answer: 2,
    explain: "Gross margin = (Sales − COGS) ÷ Sales — interest and advertising sit BELOW the gross-margin line as indirect expenses. Raw materials and selling prices are exactly what moves it.",
  },
  {
    id: "ra4",
    type: "output",
    q: "Assets of ₹5 lakh generate sales of ₹10 lakh. Compute asset turnover.",
    code: "Asset turnover = Revenue ÷ Average Total Assets",
    answerText: "2",
    explain: "10 ÷ 5 = 2 — the firm generates ₹2 of sales per ₹1 of assets.",
  },
  {
    id: "ra5",
    type: "mcq",
    q: "Which industry typically runs asset turnover BELOW 1×?",
    options: ["Fast-food outlets", "Supermarkets", "Mining and refinery projects", "Stationery retail"],
    answer: 2,
    explain: "Fast-food turns 10–20×; mining and refinery projects sit below 1× — huge assets, slow sales. Turnover is industry-dependent, never judged in a vacuum.",
  },
  {
    id: "ra6",
    type: "output",
    q: "Net profit ₹1,000; average total assets ₹5,000. Compute ROA.",
    code: "ROA = Net Profit ÷ Average Total Assets × 100",
    answerText: "20%",
    explain: "1,000 ÷ 5,000 × 100 = 20%. Note the identity: ROA = Margin × Turnover.",
  },
  {
    id: "ra7",
    type: "mcq",
    q: "A luxury house runs a 10% margin with 2× turnover; a supermarket runs 4% with 5×. Compare ROAs.",
    options: ["Luxury 40% vs market 20%", "Both exactly 20% — two business models, one ROA", "Market 20% vs luxury 10%", "Cannot tell without EPS"],
    answer: 1,
    explain: "10% × 2× = 20%; 4% × 5× = 20%. ROA is a strategy fingerprint — high-margin/slow or low-margin/fast can land on the same number.",
  },
  {
    id: "ra8",
    type: "output",
    q: "Net profit ₹1 lakh; average equity ₹4 lakh. Compute ROE.",
    code: "ROE = Net Profit ÷ Average Equity × 100",
    answerText: "25%",
    explain: "1 ÷ 4 × 100 = 25% — ₹25 earned per ₹100 of shareholder capital.",
  },
  {
    id: "ra9",
    type: "mcq",
    q: "Leverage (debt) magnifies shareholder returns only when…",
    options: ["ROE exceeds the dividend rate", "ROA exceeds the interest rate on the debt", "Revenue exceeds expenses", "Asset turnover exceeds 1×"],
    answer: 1,
    explain: "ROE = ROA × Leverage — but the amplification only pays while ROA beats the interest rate. Below that, the debt magnifies LOSSES instead.",
  },
  {
    id: "ra10",
    type: "output",
    q: "Net profit ₹50,00,000; preference dividend ₹5,00,000; 9,00,000 equity shares. Compute EPS.",
    code: "EPS = (Net Profit − Preference Dividends) ÷ Equity Shares",
    answerText: "₹5",
    explain: "(50,00,000 − 5,00,000) ÷ 9,00,000 = 45,00,000 ÷ 9,00,000 = ₹5 per share.",
  },
  {
    id: "ra11",
    type: "mcq",
    q: "Why is EPS useless for comparing two different companies?",
    options: [
      "It ignores dividends",
      "The number of equity shares (the denominator) differs company to company",
      "It uses average assets",
      "It is a market ratio",
    ],
    answer: 1,
    explain: "EPS divides profit by THAT company's share count — a 2-for-1 split halves it with no economic change. Best use: tracking ONE company over time.",
  },
  {
    id: "ra12",
    type: "mcq",
    q: "Dr. Reddy's profit margin moved from 15.55% (2015) to 13.71% (2016). The lecture's stated root causes were…",
    options: [
      "A collapse in unit sales",
      "Rising employee salary costs and an extraordinary one-time forex loss",
      "A change from FIFO to weighted average",
      "A jump in asset turnover",
    ],
    answer: 1,
    explain: "Margin compression came from increased employee costs plus the extraordinary forex loss (₹46–61 million, one-time) — not from any collapse in operations.",
  },
  {
    id: "ra13",
    type: "mcq",
    q: "Dr. Reddy's asset turnover fell 0.87 → 0.81. Why?",
    options: [
      "Revenue grew 11.5% while assets grew 4.5%",
      "Assets grew 11.5% while revenue grew only 4.5%",
      "Both grew equally",
      "Assets were revalued downward",
    ],
    answer: 1,
    explain: "Assets grew 11.5% against revenue growth of only 4.5% — capacity built ahead of demand, so each rupee of assets generated less sales.",
  },
  {
    id: "ra14",
    type: "mcq",
    q: "Dr. Reddy's ROA fell 13.49% → 11.14% and ROE 26.37% → 19.96%. The lecture's explanation for ROE's larger fall is…",
    options: [
      "A tax-rate change",
      "The ROA fall cascaded through leverage into shareholder returns",
      "A share buyback",
      "Dividend policy",
    ],
    answer: 1,
    explain: "ROE = ROA × Leverage. With ROA down on both drivers (margin AND turnover), the leveraged effect amplified the decline into ROE.",
  },
  {
    id: "ra15",
    type: "mcq",
    q: "Dr. Reddy's EPS declined from ₹137.18 to ₹126.15. EPS is best used for…",
    options: [
      "Comparing Dr. Reddy's with Sun Pharma",
      "Tracking Dr. Reddy's own performance over time",
      "Setting the dividend",
      "Measuring asset efficiency",
    ],
    answer: 1,
    explain: "EPS is a same-company time series — cross-company comparison fails because share counts differ. 137.18 → 126.15 tracks the per-share profit fall.",
  },
  {
    id: "ra16",
    type: "mcq",
    q: "The Lipstick Index: lipstick sales ROSE 11% during the 2001 recession. The lesson for ratio analysis is…",
    options: [
      "Cosmetics are recession-proof — always invest there",
      "Ratios must be read in socioeconomic context — affordable luxuries move opposite to the cycle",
      "Profit margins fall in every recession",
      "Lipstick is a luxury ratio outlier",
    ],
    answer: 1,
    explain: "Demand for affordable luxuries (and even cosmetic surgeons, psychiatrists and priests) RISES in downturns — smart analysts read ratios against the wider socioeconomic weather, never in isolation.",
  },
  {
    id: "ra17",
    type: "mcq",
    q: "Why does the DuPont identity ROA = Margin × Turnover hold algebraically?",
    options: [
      "Because assets equal liabilities plus equity",
      "Because Revenue appears in both factors and cancels: (NP÷Rev) × (Rev÷Assets) = NP÷Assets",
      "Because margins and turnover are the same thing",
      "It is an approximation, not an identity",
    ],
    answer: 1,
    explain: "(Net Profit ÷ Revenue) × (Revenue ÷ Assets) — Revenue cancels, leaving Net Profit ÷ Assets. The identity is exact.",
  },
  {
    id: "ra18",
    type: "output",
    q: "Dr. Reddy's DuPont walk: 2015 margin 15% × turnover 0.87. Compute the ROA.",
    code: "ROA = Margin × Turnover",
    answerText: "13.05%",
    explain: "15 × 0.87 = 13.05%. For 2016: 13.71 × 0.81 = 11.11% — both drivers deteriorated.",
  },
  {
    id: "ra19",
    type: "mcq",
    q: "The current-ratio thumb rule is…",
    options: ["1:1", "1.5:1", "2:1 — ₹2 of current assets per ₹1 of short-term debt", "3:1"],
    answer: 2,
    explain: "2:1 — and any ratio above 1 means the firm could cover its obligations. It is a guideline; actual standards vary by industry and firm policy.",
  },
  {
    id: "ra20",
    type: "mcq",
    q: "A quick ratio of 0.8:1 means…",
    options: [
      "The firm is insolvent",
      "The firm must SELL INVENTORY to cover its short-term obligations — cash-equivalent assets cover only 80%",
      "Inventory equals 80% of assets",
      "The firm has 80% too much cash",
    ],
    answer: 1,
    explain: "Quick ratio = (CA − Inventory) ÷ CL. At 0.8:1, stripping inventory out leaves the firm 20% short — the inventory would have to sell first.",
  },
  {
    id: "ra21",
    type: "output",
    q: "Receivable turnover is 6. Compute the collection period.",
    code: "Collection period = 360 ÷ turnover",
    answerText: "60 days",
    explain: "360 ÷ 6 = 60 days — on average, customer dues take two months to become cash.",
  },
  {
    id: "ra22",
    type: "mcq",
    q: "Inventory turnover is computed as…",
    options: [
      "Revenue ÷ Average Inventory",
      "COGS ÷ Average Inventory — cost against cost",
      "Gross Profit ÷ Average Inventory",
      "Average Inventory ÷ Revenue",
    ],
    answer: 1,
    explain: "COGS ÷ Average Inventory — inventory is carried at cost, so the numerator must also be at cost. Revenue over inventory (a plausible error) mixes bases.",
  },
  {
    id: "ra23",
    type: "output",
    q: "Holding period 140 days, collection period 90 days. Compute the operating cycle.",
    code: "Operating cycle = holding period + collection period",
    answerText: "230 days",
    explain: "140 + 90 = 230 days from buying raw material to collecting cash. Shorter is better — long cycles inflate working-capital and storage costs.",
  },
  {
    id: "ra24",
    type: "mcq",
    q: "A firm with a LOW current ratio pays a supplier in cash. The current ratio will…",
    options: [
      "Fall — cash left",
      "Rise — both CA and CL fall, and the liability falls proportionally more",
      "Stay exactly the same",
      "Become negative",
    ],
    answer: 1,
    explain: "The supplier-payment paradox: paying cash cuts current assets AND current liabilities together. Illustrative: ₹300/₹150 = 2.00 → after paying ₹50, ₹250/₹100 = 2.50. A favourite exam trick.",
  },
  {
    id: "ra25",
    type: "mcq",
    q: "Why do firms borrow even though debt is risky?",
    options: [
      "Interest is tax-deductible while dividends are not — debt is cheaper than equity",
      "Banks force firms to borrow",
      "Debt needs no repayment",
      "Equity dilutes turnover",
    ],
    answer: 0,
    explain: "Interest reduces taxable income, lowering the effective cost of borrowing; dividends carry no tax shield. The trade-off: interest is a FIXED obligation and non-payment can force liquidation.",
  },
  {
    id: "ra26",
    type: "mcq",
    q: "A debt-to-equity ratio of 0.5:1 means…",
    options: [
      "Debt is half of assets",
      "Lenders contributed 50 paise for every rupee of owner equity",
      "Equity is 50% of revenue",
      "The firm is 50% insolvent",
    ],
    answer: 1,
    explain: "Total Debt ÷ Shareholders' Equity = 0.5 — 50 paise of borrowed money per rupee of owner money. Higher = greater risk for lenders and the firm.",
  },
  {
    id: "ra27",
    type: "mcq",
    q: "Interest coverage is 4×. How far can profit fall before interest is missed?",
    options: ["4%", "25%", "75%", "400%"],
    answer: 2,
    explain: "EBIT covers interest 4 times — profit can fall 3 of those 4 units (75%) and interest is still paid. Coverage measures the cushion.",
  },
  {
    id: "ra28",
    type: "output",
    q: "A share trades at ₹300 with EPS of ₹20. Compute the PE ratio.",
    code: "PE = Market Price per Share ÷ EPS",
    answerText: "15",
    explain: "300 ÷ 20 = 15 — investors pay 15 rupees per rupee of annual earnings; a high PE signals optimism about future growth.",
  },
  {
    id: "ra29",
    type: "output",
    q: "Buy at ₹100, receive a ₹5 dividend, sell at ₹110. Compute the stock return.",
    code: "Return = (Dividend + Price change) ÷ Opening price × 100",
    answerText: "15%",
    explain: "(5 + 10) ÷ 100 = 15% — dividend income plus capital gain, both components count.",
  },
  {
    id: "ra30",
    type: "mcq",
    q: "A firm collects receivables in 45 days but OFFERED customers 15-day terms. Assessment?",
    options: [
      "Excellent — 45 is a small number",
      "Poor — a shorter collection period is only good when it beats the credit terms offered",
      "Excellent — receivables are turning over",
      "Impossible to assess without beta",
    ],
    answer: 1,
    explain: "The comparison rule: judge the collection period against the firm's OWN credit terms (and aging, bad-debt allowance, customer mix). 45 days against 15-day terms is 30 days overdue, not fast.",
  },
  {
    id: "ra31",
    type: "mcq",
    q: "Dr. Reddy's 2016 verdict: collection period 89 → 95 days, operating cycle 232 → 243 days. The assessment is…",
    options: ["Improving liquidity", "Deteriorating liquidity — slower cash conversion", "Improving solvency", "Rising market valuation"],
    answer: 1,
    explain: "Both lengthened — cash is taking longer to come home. Meanwhile D/E fell and interest coverage rose 27.8 → 33 (solvency strong) and PE/PB softened (market softer). Three lenses, three headlines.",
  },
  {
    id: "ra32",
    type: "mcq",
    q: "A RISK-AVERSE investor shopping by ratio should prefer…",
    options: [
      "Lower PE and higher beta",
      "Higher PE and lower beta — market confidence plus lower volatility",
      "Highest beta available",
      "Zero PE",
    ],
    answer: 1,
    explain: "Risk-averse = pay up for predictability: higher PE (confidence) with lower beta (calmer swings). Risk-tolerant investors hunt lower PE (underpriced) and accept higher beta.",
  },
];

const ASSETS: FaExamQuestion[] = [
  {
    id: "as1",
    type: "mcq",
    q: "Under AS 2, inventory comprises assets held in which three forms?",
    options: [
      "Cash, debtors, bills receivable",
      "Goods held for sale, work in progress, raw materials",
      "Land, plant, equipment",
      "Purchases, sales, returns",
    ],
    answer: 1,
    explain: "AS 2's scope: goods held for sale (traders/retailers), work in progress (undergoing production), and raw materials (consumed in production).",
  },
  {
    id: "as2",
    type: "mcq",
    q: "AS 2's measurement rule is…",
    options: [
      "Cost, always",
      "Net realizable value, always",
      "The LOWER of cost and net realizable value",
      "The HIGHER of cost and net realizable value",
    ],
    answer: 2,
    explain: "Lower of cost and NRV — the conservative principle: anticipate no profit, provide for all possible losses. Profits are never overestimated.",
  },
  {
    id: "as3",
    type: "mcq",
    q: "Which of these is INCLUDED in inventory cost?",
    options: ["Storage and warehouse costs", "Sales commissions", "Freight inward (transportation in)", "Selling and distribution costs"],
    answer: 2,
    explain: "Cost includes purchase price (net of recoverable taxes), freight inward, direct labour, conversion costs and production overheads — LESS trade discounts and rebates.",
  },
  {
    id: "as4",
    type: "mcq",
    q: "Which of these is EXCLUDED from inventory cost?",
    options: [
      "Direct labour for processing",
      "Production overheads",
      "Abnormal waste or loss",
      "Conversion costs",
    ],
    answer: 2,
    explain: "Excluded: abnormal waste, storage/warehousing, selling & distribution costs, administrative overheads, sales commissions. Getting goods ready includes production — not selling them.",
  },
  {
    id: "as5",
    type: "output",
    q: "Opening inventory ₹2,00,000; purchases ₹9,00,000; closing inventory ₹3,00,000. Compute COGS.",
    code: "COGS = Opening + Purchases − Closing",
    answerText: "₹8,00,000",
    explain: "2,00,000 + 9,00,000 − 3,00,000 = 8,00,000. Every ₹1 more of closing inventory lowers COGS by ₹1 — and raises gross margin by ₹1.",
  },
  {
    id: "as6",
    type: "mcq",
    q: "Closing inventory is OVERSTATED by ₹10,000. The effect on COGS and gross margin is…",
    options: [
      "COGS overstated, margin understated",
      "COGS understated, margin overstated",
      "Both unchanged — closing stock is a balance-sheet item only",
      "COGS understated, margin understated",
    ],
    answer: 1,
    explain: "COGS = Opening + Purchases − Closing. A bigger closing number subtracts more → COGS understated → margin overstated. The valuation method is a profit decision.",
  },
  {
    id: "as7",
    type: "mcq",
    q: "Under FIFO, closing inventory is valued at…",
    options: [
      "The OLDEST purchase prices",
      "The MOST RECENT purchase prices",
      "The average of all prices",
      "Net realizable value",
    ],
    answer: 1,
    explain: "First In, First Out — the oldest units are charged to COGS, so the units still on hand carry the most recent prices. In rising costs: lower COGS, higher margin.",
  },
  {
    id: "as8",
    type: "output",
    q: "Weighted-average unit cost is $27.62 and 285 units remain. Compute the weighted-average closing inventory.",
    code: "Closing = units × average unit cost",
    answerText: "$7,872",
    explain: "285 × 27.62 = 7,872 — every unit carries the same blended cost of the period.",
  },
  {
    id: "as9",
    type: "mcq",
    q: "Clear View's comparison: FIFO COGS $7,200 vs weighted-average COGS $8,283, on identical operations. The margin difference is…",
    options: ["$27.62", "$1,083 — $4,140 vs $3,057", "$7,872", "$4,140"],
    answer: 1,
    explain: "FIFO margin 4,140 vs WA margin 3,057 → $1,083 of margin turns on the method alone. Same business, same units.",
  },
  {
    id: "as10",
    type: "mcq",
    q: "Which inventory method does AS 2 explicitly PROHIBIT?",
    options: ["FIFO", "Weighted average", "LIFO", "Specific identification"],
    answer: 2,
    explain: "LIFO is named in AS 2 only to be prohibited. Only FIFO and weighted average are permitted — an answer valuing inventory under LIFO is wrong before the arithmetic starts.",
  },
  {
    id: "as11",
    type: "mcq",
    q: "The raw-material exception under AS 2's NRV rules says…",
    options: [
      "Raw materials are always written down first",
      "Raw materials are NOT written down if the finished goods made from them are expected to sell at or above cost",
      "Raw materials use FIFO while finished goods use weighted average",
      "Raw materials have no NRV",
    ],
    answer: 1,
    explain: "The three rules: item-by-item evaluation; the raw-material exception; annual reassessment at each reporting date. The exception stops a false write-down when the end product still recovers its cost.",
  },
  {
    id: "as12",
    type: "mcq",
    q: "Which is NOT one of the PPE recognition conditions?",
    options: [
      "Held for production, rental, or administration",
      "Expected use of more than 12 months",
      "Identifiable future economic benefits",
      "The asset must be revalued to market price annually",
    ],
    answer: 3,
    explain: "AS 10's conditions: right purpose, >12 months, identifiable benefits, objectively measurable cost. Historical cost — not annual revaluation — is the basis the course teaches.",
  },
  {
    id: "as13",
    type: "mcq",
    q: "Adding a supercharger to a delivery vehicle is…",
    options: [
      "Revenue expenditure — it is vehicle-related",
      "Capital expenditure — it makes the asset work better (or do more)",
      "A prepaid expense",
      "An intangible asset",
    ],
    answer: 1,
    explain: "The one-line test: last longer / work better / do more → CAPITAL (capitalize to the balance sheet). Six-monthly servicing merely maintains → revenue expenditure to the P&L.",
  },
  {
    id: "as14",
    type: "short",
    q: "State the one-line test that separates capital expenditure from revenue expenditure.",
    answerText:
      "If the spending makes the asset LAST LONGER, WORK BETTER, or DO MORE, it is capital expenditure; if it merely MAINTAINS current functionality, it is revenue expenditure.",
    explain: "Capital → balance sheet as an asset. Revenue → P&L as an expense, in the period incurred.",
  },
  {
    id: "as15",
    type: "output",
    q: "A printing press costs $54,000, with $1,500 shipping and $2,500 setup. Compute the asset's total cost.",
    code: "Cost = purchase price + direct costs of getting it ready",
    answerText: "$57,000",
    explain: "54,000 + 1,500 + 2,500 = 57,000. (The compendium prints this case in dollars; a fuller build-up would add estimated dismantling costs too.)",
  },
  {
    id: "as16",
    type: "output",
    q: "Cost $57,000, residual value $10,000. Compute the depreciable amount.",
    code: "Depreciable amount = Cost − Residual value",
    answerText: "$47,000",
    explain: "57,000 − 10,000 = 47,000 — the pool that depreciation allocates over the useful life, however the schedule is drawn.",
  },
  {
    id: "as17",
    type: "mcq",
    q: "Residual (salvage) value is…",
    options: [
      "The asset's purchase price net of discounts",
      "The expected disposal/selling price of the asset at the END of its useful life",
      "The accumulated depreciation after year 1",
      "The scrap dealer's minimum bid by law",
    ],
    answer: 1,
    explain: "Residual value = what the press is expected to SELL for after five years — ₹10,000 in the lecture's case. It is why straight-line divides (cost − residual), not cost.",
  },
  {
    id: "as18",
    type: "mcq",
    q: "The carrying amount of an asset is…",
    options: [
      "Cost − residual value",
      "Cost − accumulated depreciation (the net book value on the balance sheet)",
      "Cost ÷ useful life",
      "Cost + dismantling costs",
    ],
    answer: 1,
    explain: "Carrying amount = cost minus accumulated depreciation — what the balance sheet shows at any point in time. It slides toward the residual as years pass.",
  },
  {
    id: "as19",
    type: "output",
    q: "Cost $57,000, residual $10,000, life 5 years. Compute the straight-line annual depreciation.",
    code: "SL = (Cost − Residual) ÷ Useful life",
    answerText: "$9,400",
    explain: "(57,000 − 10,000) ÷ 5 = 9,400 per year. Forgetting the residual (57,000 ÷ 5 = 11,400) is the classic error.",
  },
  {
    id: "as20",
    type: "mcq",
    q: "In the straight-line schedule (cost 57,000, residual 10,000), the carrying amount at the END of year 3 is…",
    options: ["$47,600", "$38,200", "$28,800", "$19,400"],
    answer: 2,
    explain: "Accumulated depreciation after 3 years = 28,200; carrying = 57,000 − 28,200 = 28,800. The schedule: 47,600 → 38,200 → 28,800 → 19,400 → 10,000.",
  },
  {
    id: "as21",
    type: "output",
    q: "At 40% diminishing balance on a $57,000 press, compute the YEAR-2 depreciation charge.",
    code: "Year 1: 40% × 57,000 = 22,800 → carrying 34,200",
    answerText: "$13,680",
    explain: "40% × 34,200 = 13,680. Each year's charge is 40% of the OPENING carrying amount — the charge shrinks as the book value falls.",
  },
  {
    id: "as22",
    type: "mcq",
    q: "Continuing the 40% diminishing-balance schedule, year 3 depreciation is…",
    options: ["$13,680", "$9,400", "$8,208 — 40% of $20,520", "$4,925"],
    answer: 2,
    explain: "Carrying after year 2 = 34,200 − 13,680 = 20,520; year 3 charge = 40% × 20,520 = 8,208.",
  },
  {
    id: "as23",
    type: "mcq",
    q: "After year 3 the carrying amount is $12,312. Why is the year-4 charge capped at $2,312 instead of 40% × 12,312 = $4,925?",
    options: [
      "Because AS 10 limits diminishing balance to 3 years",
      "Because 4,925 would drive the carrying amount BELOW the $10,000 residual — schedules cap at the residual (or switch to straight line)",
      "Because the asset is fully depreciated",
      "Because tax rules override AS 10",
    ],
    answer: 1,
    explain: "The uncapped continuation (4,925, then 2,955) crashes through the residual floor. The cap of 2,312 lands exactly on the residual — and total lifetime depreciation still equals the depreciable amount, 47,000, identical to straight line. Only the TIMING differs.",
  },
  {
    id: "as24",
    type: "mcq",
    q: "Straight line vs diminishing balance over the SAME asset's full life: total depreciation charged is…",
    options: [
      "Higher under straight line",
      "Higher under diminishing balance",
      "IDENTICAL — the depreciable amount; only the timing differs",
      "Whichever method management prefers",
    ],
    answer: 2,
    explain: "Both allocate exactly the depreciable amount (cost − residual). The method changes the yearly pattern, never the lifetime total.",
  },
  {
    id: "as25",
    type: "output",
    q: "A press with carrying amount $29,200 is sold for $31,000. Compute the gain or loss on disposal.",
    code: "Gain/(loss) = Selling price − Carrying amount",
    answerText: "+$1,800 gain",
    explain: "31,000 − 29,200 = 1,800 gain. Sold instead at 27,100 → 29,200 − 27,100 = 2,100 loss.",
  },
  {
    id: "as26",
    type: "mcq",
    q: "Amortization is best described as…",
    options: [
      "The market revaluation of intangibles",
      "Depreciation's equivalent for INTANGIBLE assets, governed by AS 26, with the same (cost − residual) ÷ life formula",
      "Writing off goodwill every year by law",
      "A cash expense",
    ],
    answer: 1,
    explain: "Amortization = systematic cost allocation for non-physical assets — patents, copyrights, trademarks, goodwill — under AS 26.",
  },
  {
    id: "as27",
    type: "mcq",
    q: "AS 26's 10-year rule is a…",
    options: [
      "Maximum amortization charge per year",
      "REBUTTABLE PRESUMPTION that useful life does not exceed 10 years — longer use needs documented justification",
      "Minimum legal life for all intangibles",
      "Tax deduction cap",
    ],
    answer: 1,
    explain: "Presume life ≤ 10 years; rebut it only with a documented reason. It exists because intangible lives are the easiest number in accounting to flatter.",
  },
  {
    id: "as28",
    type: "output",
    q: "A patent cost $48,000. Legal life 12 years; expected useful life 6 years. Compute annual amortization.",
    code: "Use the SHORTER of legal and economic life",
    answerText: "$8,000",
    explain: "48,000 ÷ 6 = 8,000 per year — the expected 6-year life governs because AS 26 amortizes over the shorter of legal and economic life.",
  },
  {
    id: "as29",
    type: "mcq",
    q: "Amortization of an intangible begins when…",
    options: [
      "The supplier is paid",
      "The asset is AVAILABLE FOR USE — not at the payment date",
      "The financial year ends",
      "The patent is sold",
    ],
    answer: 1,
    explain: "AS 26: systematic allocation starts from availability for use. Payment timing is a cash fact; benefit timing is the accounting fact.",
  },
];

const CLOSING_EXTRA2: FaExamQuestion[] = [
  {
    id: "c13",
    type: "mcq",
    q: "Which of these belongs on the TRADING account (not the P&L)?",
    options: ["Rent", "Wages (direct) and freight inward", "Salaries", "Advertisement"],
    answer: 1,
    explain: "Direct expenses — wages, freight — sit in the trading account with purchases; indirect expenses (rent, salaries, commission, advertisement) go to the P&L.",
  },
  {
    id: "c14",
    type: "output",
    q: "Opening stock ₹40,000; net purchases ₹2,10,000; direct expenses ₹25,000; COGS ₹2,30,000. Compute closing stock.",
    code: "Closing Stock = Opening + Net Purchases + Direct Expenses − COGS",
    answerText: "₹45,000",
    explain: "40,000 + 2,10,000 + 25,000 − 2,30,000 = 45,000. The COGS formula rearranges to solve for any missing component.",
  },
  {
    id: "c15",
    type: "mcq",
    q: "Sales returns and purchases returns are treated as…",
    options: [
      "Added to gross profit",
      "Sales returns deducted from sales; purchases returns deducted from purchases — to reach NET figures",
      "Ignored in the trading account",
      "Transferred straight to capital",
    ],
    answer: 1,
    explain: "Net sales = sales − returns inward; net purchases = purchases − returns outward. The trading account runs on the net figures.",
  },
  {
    id: "c16",
    type: "mcq",
    q: "Which of these is OPERATING INCOME on the P&L's credit side?",
    options: ["Salaries", "Bad debts recovered", "Purchases", "Drawings"],
    answer: 1,
    explain: "Operating income: interest received, dividend received, rent received, discounts received, bad debts recovered. Expenses (rent, salaries, commission, advertisement, bad debts) sit on the debit side.",
  },
  {
    id: "c17",
    type: "mcq",
    q: "The year's net profit is transferred to the capital account by…",
    options: [
      "Debiting Capital and crediting P&L",
      "Debiting the P&L (net profit) and crediting Capital",
      "Ignoring it — profit stays in the P&L forever",
      "Debiting Cash",
    ],
    answer: 1,
    explain: "Net profit: debit P&L, credit Capital (owner's claim grows). Net loss: debit Capital, credit P&L. That is how the income statement feeds the balance sheet.",
  },
  {
    id: "c18",
    type: "mcq",
    q: "In the balance sheet's LIQUIDITY order, assets are listed…",
    options: [
      "Most difficult to cash last",
      "In order of how quickly they convert to cash — cash and bank first, fixed assets last",
      "By purchase date",
      "Alphabetically",
    ],
    answer: 1,
    explain: "Liquidity order: nearest cash first. Permanency order is its mirror — fixed assets first. Same balance sheet, two legitimate arrangements.",
  },
  {
    id: "c19",
    type: "mcq",
    q: "A balance sheet is best described as…",
    options: [
      "A video of the year's activity",
      "A photograph — what the firm owns and owes on ONE date",
      "A record of cash movements",
      "A statement of gross profit only",
    ],
    answer: 1,
    explain: "A photograph, not a video: position on a specific date, current vs fixed, and the two sides must always agree — because they are two views of the same resources.",
  },
  {
    id: "c20",
    type: "mcq",
    q: "Cathay Pacific bought HK$9.2 billion of assets in a year it reported an HK$8.6 billion LOSS. Which statement best explains how both can be true?",
    options: [
      "The P&L — losses forbid purchases",
      "The cash flow statement — investing outflows and accrual losses are different questions",
      "The trial balance",
      "They cannot both be true",
    ],
    answer: 1,
    explain: "Profit measures earned value; the cash flow statement tracks actual money — Cathay funded assets while its accrual P&L showed a loss. The fourth pillar exists precisely for this.",
  },
  {
    id: "c21",
    type: "short",
    q: "Name the two questions the final accounts are built to answer (Lecture 24).",
    answerText:
      "① What did the operations EARN during the period? — answered by the Trading and Profit & Loss accounts. ② Where does the enterprise STAND on the closing date? — answered by the Balance Sheet.",
    explain: "Performance (flow) and position (snapshot) — the two statements are the purpose the whole accounting cycle exists to serve.",
  },
  {
    id: "c22",
    type: "mcq",
    q: "Which account type is NEVER closed at period-end?",
    options: [
      "Sales",
      "Rent expense",
      "Real (permanent) accounts — assets, liabilities and capital",
      "Purchases",
    ],
    answer: 2,
    explain: "Nominal accounts (incomes, expenses) close into the Trading/P&L each period; real accounts — assets, liabilities, capital — carry forward via their balances. That is what balances b/d mean.",
  },
];

const CASHFLOW_EXTRA2: FaExamQuestion[] = [
  {
    id: "w11",
    type: "mcq",
    q: "The DIRECT method starts from…; the INDIRECT method starts from…",
    options: [
      "net profit; cash receipts",
      "actual cash receipts and payments; net profit walked back to cash",
      "the trial balance; the balance sheet",
      "investing activities; financing activities",
    ],
    answer: 1,
    explain: "Direct follows the cash itself; indirect starts at net profit and reconciles it to cash via the three adjustment families. Both must land on the same operating figure.",
  },
  {
    id: "w12",
    type: "mcq",
    q: "Why is the indirect method the more commonly used approach?",
    options: [
      "It is required for listed companies only",
      "It reconciles net profit with actual cash — showing WHY they differ",
      "It needs no adjustments",
      "It avoids the balance sheet entirely",
    ],
    answer: 1,
    explain: "The reconciliation is the point: readers see the bridge from the accrual number they know to the cash number they need. Investing and financing sections are identical under both methods.",
  },
  {
    id: "w13",
    type: "output",
    q: "Tax expense ₹40,000; opening tax payable ₹8,000; closing tax payable ₹5,000. Compute income tax PAID.",
    code: "Tax paid = Tax expense + Opening payable − Closing payable",
    answerText: "₹43,000",
    explain: "40,000 + 8,000 − 5,000 = 43,000. The P&L books the expense; the cash flow statement pays the bill — the payable movement bridges them.",
  },
  {
    id: "w14",
    type: "mcq",
    q: "Equipment worth ₹49,000 is bought ON CREDIT. On the cash flow statement it appears…",
    options: [
      "In investing as an outflow of ₹49,000",
      "In financing as a new liability",
      "NOWHERE this period — no cash moved (a disclosed non-cash transaction)",
      "In operating as an expense",
    ],
    answer: 2,
    explain: "Not everything touches cash: credit-purchased equipment never appears as an outflow. The statement tracks CASH — the liability appears when it is settled.",
  },
  {
    id: "w15",
    type: "mcq",
    q: "Compass sells equipment (carrying ₹22,000 cash received) and investments (₹16,000). Where do the ₹45,000 of proceeds go — and where does any gain go?",
    options: [
      "All in operating",
      "Proceeds ₹45,000 in INVESTING; the gain on disposal is adjusted OUT of operating (removed as non-operating)",
      "Proceeds in financing; gain in investing",
      "Both halves in operating",
    ],
    answer: 1,
    explain: "The classic trap: disposal PROCEEDS are investing cash, but the GAIN sits inside net profit — so it is backed out of operating to avoid counting it twice.",
  },
  {
    id: "w16",
    type: "mcq",
    q: "Compass: operating cash ₹72,000, interest paid ₹22,000. Creditors' comfort ratio is…",
    options: ["1.5×", "3.3× — 72,000 ÷ 22,000", "0.54:1", "12.5%"],
    answer: 1,
    explain: "72,000 ÷ 22,000 = 3.3× — operating cash covers the interest bill three-and-a-third times. (0.54:1 was Compass's debt-to-equity.)",
  },
  {
    id: "w17",
    type: "mcq",
    q: "Compass raised ₹1,00,000 of share capital; repaid ₹28,000 of loans; paid ₹25,000 dividends and ₹22,000 interest. The financing section nets to…",
    options: ["₹1,00,000", "₹25,000 inflow — 1,00,000 − 28,000 − 25,000 − 22,000", "₹75,000 outflow", "Nil"],
    answer: 1,
    explain: "1,00,000 − 28,000 − 25,000 − 22,000 = +25,000. Note the lecture's observation: maintaining the 12.5% dividend on the enlarged base would demand ≈₹43,750 a year against thin cash.",
  },
  {
    id: "w18",
    type: "mcq",
    q: "A debenture holder converts debt into equity shares. The cash flow statement shows…",
    options: [
      "A financing outflow and a financing inflow",
      "NOTHING — a non-cash conversion is disclosed, never recorded",
      "An investing inflow",
      "A operating outflow of the debenture's face value",
    ],
    answer: 1,
    explain: "No cash moved, so no line appears — another 'not everything touches cash' trap alongside credit purchases of equipment.",
  },
  {
    id: "w19",
    type: "mcq",
    q: "Cash and cash equivalents are judged from…",
    options: [
      "The balance-sheet date only",
      "The date of ACQUISITION — liquid, readily convertible, minimal risk must hold from day one",
      "The directors' declaration",
      "The bank's month-end statement",
    ],
    answer: 1,
    explain: "The three tests (liquid, readily convertible, minimal risk of value change) are assessed from the acquisition date — which is why short-term investments can qualify while long-term ones cannot.",
  },
  {
    id: "w20",
    type: "mcq",
    q: "Compass: net profit ₹11,41,000 but operating cash only ₹72,000. Inventory tied up ₹58,000 and receivables ₹44,000. The earnings-quality verdict is…",
    options: [
      "Healthy — profit is profit",
      "Poor earnings quality — ~90% of sales (₹8,081,000 of ₹9,025,000) became receivables and stock, not cash",
      "Fraud is proven",
      "Depreciation was too high",
    ],
    answer: 1,
    explain: "Sales of 8,081,000 out of 9,025,000 (≈90%) converted to stock and receivables rather than cash, and ₹11,73,000 of equipment purchases drained the rest. Profit is an opinion; the cash statement is the diagnosis.",
  },
];

export const FA_EXAM_BANKS: Record<FaExamGroup, FaExamBank> = {
  foundations: {
    group: "foundations",
    title: "Orientation & the Case for Standards",
    subtitle: "The language of business — and why it needs referees",
    topics: "Course map · the four verbs · users & ICAI–MCA–SEBI · IFRS & Ind AS · the five openings · Soleris & Satyam",
    questions: [...FOUNDATIONS, ...FOUNDATIONS_EXTRA],
  },
  concepts: {
    group: "concepts",
    title: "Concepts & Conventions",
    subtitle: "The eight postulates — and the four customs that keep statements fair",
    topics: "Eight concepts · cost · realization & its exceptions · conservatism dial · disclosure · consistency · materiality",
    questions: CONCEPTS,
  },
  equation: {
    group: "equation",
    title: "Dual Aspect & The Equation",
    subtitle: "Every rupee tells two stories — and the equation that keeps the score",
    topics: "Dual aspect · debit & credit rules · assets, liabilities, equity · equation workouts",
    questions: EQUATION,
  },
  recording: {
    group: "recording",
    title: "Recording — Journal, Ledger & Trial",
    subtitle: "Classification, posting, balancing — and the errors a trial balance cannot see",
    topics: "Personal/real/nominal · journalizing · Anbu & Dinesh · balancing c/d–b/d · trial balance · suspense",
    questions: [...RECORDING, ...RECORDING_EXTRA],
  },
  cycle: {
    group: "cycle",
    title: "The Cycle — Basis & Adjustments",
    subtitle: "Cash vs accrual, the matching principle, and Vogue's six adjusting entries",
    topics: "Cash vs accrual basis · matching · deferrals & accruals · Vogue's six entries · Tech Mahindra",
    questions: CYCLE,
  },
  closing: {
    group: "closing",
    title: "Final Accounts & The Statements",
    subtitle: "Trading, P&L, closing entries, the balance sheet — and the fourth pillar",
    topics: "Trading account · gross profit · closing entries · retained earnings · balance sheet orders · cash flow intro",
    questions: [...CLOSING, ...CLOSING_EXTRA, ...CLOSING_EXTRA2],
  },
  cashflow: {
    group: "cashflow",
    title: "Cash Flow & Analysis",
    subtitle: "The two methods, the six questions — and profit is an opinion, cash is a fact",
    topics: "Cash equivalents · three activities · indirect ladder · Jaws 69,700 · Compass 72,000 · Pioneer 1,42,000 · Dr. Reddy's",
    questions: [...CASHFLOW, ...CASHFLOW_EXTRA2],
  },
  ratios: {
    group: "ratios",
    title: "Ratio Analysis — the Six Families",
    subtitle: "Profitability, liquidity, solvency and the capital market — Dr. Reddy's numbers, worked",
    topics: "Profit & gross margin · asset turnover · ROA & DuPont · ROE & leverage · EPS · current & quick · operating cycle · D/E · coverage · PE · PB · beta",
    questions: RATIOS,
  },
  assets: {
    group: "assets",
    title: "Inventory, PPE & Intangibles",
    subtitle: "AS 2 valuation, depreciation's two clocks, and the AS 26 rules",
    topics: "AS 2 scope · lower of cost & NRV · FIFO vs weighted average · LIFO prohibited · capital vs revenue · ₹57,000 build-up · straight line vs diminishing · disposal · AS 26",
    questions: ASSETS,
  },
};

export const FA_EXAM_GROUPS: FaExamGroup[] = [
  "foundations",
  "concepts",
  "equation",
  "recording",
  "cycle",
  "closing",
  "cashflow",
  "ratios",
  "assets",
];
export const FA_TOTAL_QUESTIONS = FA_EXAM_GROUPS.reduce((n, g) => n + FA_EXAM_BANKS[g].questions.length, 0);
