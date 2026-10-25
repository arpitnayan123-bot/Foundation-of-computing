(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/fa/lectures.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FA_ALL_CHAPTER_IDS",
    ()=>FA_ALL_CHAPTER_IDS,
    "FA_DEFAULT_LECTURE",
    ()=>FA_DEFAULT_LECTURE,
    "FA_LECTURES",
    ()=>FA_LECTURES,
    "lectureById",
    ()=>lectureById,
    "lectureOfChapter",
    ()=>lectureOfChapter
]);
"use client";
const FA_LECTURES = [
    {
        id: "l1",
        n: 1,
        code: "L1",
        title: "Why Accounting Exists — the Five Openings",
        blurb: "No definitions yet: five rooms, five arguments — Priya & Rohan's inherited factory, Ramesh's notebook and the ₹15 lakh investor — every one ending at the same question: what did the business really earn, and who can trust the number?",
        chapters: [
            {
                id: "why",
                label: "Why accounting?",
                desc: "Five openings — every one ends at the same question"
            }
        ]
    },
    {
        id: "l2",
        n: 2,
        code: "L2",
        title: "The Four Measurement Assumptions",
        blurb: "Accounting measures only what affects the financial position — and it measures on four assumptions: reporting entity, going concern, periodicity and money measurement. Meet all four, then learn to spot the violation.",
        chapters: [
            {
                id: "assumptions",
                label: "4 assumptions",
                desc: "Entity · going concern · periodicity · money measurement"
            }
        ]
    },
    {
        id: "l3",
        n: 3,
        code: "L3",
        title: "The Reporting Entity & Going Concern",
        blurb: "Two of the four assumptions do the heaviest lifting: the boundary that draws the business apart from its owner, and the quiet promise to continue that justifies recording everything at cost.",
        chapters: [
            {
                id: "entity-concern",
                label: "Entity & concern",
                desc: "The boundary — and the promise to continue"
            }
        ]
    },
    {
        id: "l4",
        n: 4,
        code: "L4",
        title: "Periodicity & the Matching Idea",
        blurb: "Investors cannot wait a lifetime for results, so the business's long story is chopped into artificial years — and every chop creates a question: which period owns which cost? The match that follows settles it.",
        chapters: [
            {
                id: "periodicity",
                label: "Periods & matching",
                desc: "Time, cut into periods — and the match that follows"
            }
        ]
    },
    {
        id: "l5",
        n: 5,
        code: "L5",
        title: "The Dual Aspect Concept",
        blurb: "A starts with ₹10,000 and two things happen at once: the business holds cash, and it owes that cash to its proprietor. One idea — and the whole of double-entry book-keeping falls out of it.",
        chapters: [
            {
                id: "dual-aspect",
                label: "Dual aspect",
                desc: "Every rupee tells two stories"
            }
        ]
    },
    {
        id: "l6",
        n: 6,
        code: "L6",
        title: "Assets, Liabilities & Equity — the Three Elements",
        blurb: "Every account in every ledger belongs to one of three families. Learn what admits a resource into each family, and you can classify anything a business will ever do.",
        chapters: [
            {
                id: "elements",
                label: "The three elements",
                desc: "Assets, liabilities & equity — the whole cast"
            }
        ]
    },
    {
        id: "l7",
        n: 7,
        code: "L7",
        title: "The Accounting Equation, Worked",
        blurb: "The equation is not decoration, it is a solving machine: Hot Chocolate, Abraham and the Hot Chocolate & Coffee Corner books — find the missing figure, close the balance sheet, prove the totals.",
        chapters: [
            {
                id: "equation-lab",
                label: "Equation, worked",
                desc: "Hot Chocolate · Abraham · Coffee Corner"
            }
        ]
    },
    {
        id: "l8",
        n: 8,
        code: "L8",
        title: "Transaction Effects — the Four Moves",
        blurb: "Every transaction the course will ever show you is one of a handful of patterns: two sides rise together, or one side reshuffles itself. Meet the patterns — then drive the equation machine yourself.",
        chapters: [
            {
                id: "effects",
                label: "Transaction effects",
                desc: "The four moves — run the equation machine"
            }
        ]
    },
    {
        id: "l9",
        n: 9,
        code: "L9",
        title: "The Journal — Recording the Day",
        blurb: "Equation approach or traditional approach, both land in the same place: a day book where every event is written with its two effects, the day it happens. The Vogue Company's pipeline, entry by entry.",
        chapters: [
            {
                id: "journal",
                label: "Journal",
                desc: "The pipeline and the day book — Vogue Company"
            }
        ]
    },
    {
        id: "l10",
        n: 10,
        code: "L10",
        title: "The Ledger — Posting to the T-Account",
        blurb: "The journal records in time order; the ledger regroups by account. Open one page per account, post every debit and credit — the Cash T-account, for real — and each page ends with a balance that speaks.",
        chapters: [
            {
                id: "ledger",
                label: "Ledger",
                desc: "Posting — the Cash T-account, for real"
            }
        ]
    },
    {
        id: "l11",
        n: 11,
        code: "L11",
        title: "The Five Financial Statements",
        blurb: "Five statements work together to tell one financial story. Meet Softomation — one small company, five transactions — and watch the same month ripple through every statement it touches.",
        chapters: [
            {
                id: "statements",
                label: "Five statements",
                desc: "One month of transactions, five shapes"
            }
        ]
    },
    {
        id: "l12",
        n: 12,
        code: "L12",
        title: "The Trial Balance — Do the Columns Agree?",
        blurb: "The third phase of the process: after posting, a statement lists the debit and credit balance of every account at a point in time. If double entry has been honoured the totals must meet — sort Pearl's books and see.",
        chapters: [
            {
                id: "trial-balance",
                label: "Trial balance",
                desc: "Do the columns agree? — sort Pearl's books"
            }
        ]
    },
    {
        id: "l13",
        n: 13,
        code: "L13",
        title: "Adjusting Entries — Deferrals & Accruals",
        blurb: "Cash does not always move in the period its revenue or expense belongs to. Split the prepaid rupee, book the unearned rent, accrue what is owed — the books catch up with reality before any statement is allowed to speak.",
        chapters: [
            {
                id: "adjusting",
                label: "Adjusting entries",
                desc: "Deferrals & accruals — split the prepaid rupee"
            }
        ]
    },
    {
        id: "l14",
        n: 14,
        code: "L14",
        title: "Final Accounts — Two Questions, Two Statements",
        blurb: "Everything the course has built — journal, ledger, trial balance, adjustments — now gets asked its purpose: what did the operations earn, and where does the enterprise stand? Two statements answer.",
        chapters: [
            {
                id: "final-accounts",
                label: "Final accounts",
                desc: "Two questions, two statements"
            }
        ]
    },
    {
        id: "l15",
        n: 15,
        code: "L15",
        title: "The Trading Account",
        blurb: "The overall result of trading — the purchasing and selling of goods. If the sales value exceeds the cost of goods sold there is a gross profit; if it is less, a gross loss. The first of the two questions, computed.",
        chapters: [
            {
                id: "trading",
                label: "Trading account",
                desc: "Did buying and selling pay?"
            }
        ]
    },
    {
        id: "l16",
        n: 16,
        code: "L16",
        title: "The Gross Profit Lab",
        blurb: "The lecture's own numbers, from the simplest trading result to a full T-format trading account — six examples in all, then the lab that recomputes the ladder as you type.",
        chapters: [
            {
                id: "gp-lab",
                label: "Gross profit lab",
                desc: "Six examples — then drive the ladder"
            }
        ]
    }
];
const FA_DEFAULT_LECTURE = FA_LECTURES[0].id;
function lectureOfChapter(chapterId) {
    for (const l of FA_LECTURES){
        if (l.chapters.some((c)=>c.id === chapterId)) return l;
    }
    return null;
}
function lectureById(id) {
    return FA_LECTURES.find((l)=>l.id === id) ?? null;
}
const FA_ALL_CHAPTER_IDS = FA_LECTURES.flatMap(_c = (l)=>l.chapters.map((c)=>c.id));
_c1 = FA_ALL_CHAPTER_IDS;
var _c, _c1;
__turbopack_context__.k.register(_c, "FA_ALL_CHAPTER_IDS$FA_LECTURES.flatMap");
__turbopack_context__.k.register(_c1, "FA_ALL_CHAPTER_IDS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/fa/questions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

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
   ============================================================ */ __turbopack_context__.s([
    "FA_EXAM_BANKS",
    ()=>FA_EXAM_BANKS,
    "FA_EXAM_GROUPS",
    ()=>FA_EXAM_GROUPS,
    "FA_TOTAL_QUESTIONS",
    ()=>FA_TOTAL_QUESTIONS
]);
/* ------------------------------------------------------------
   GROUP 1 — FOUNDATIONS  (why accounting exists · the four
             measurement assumptions · violations)
   ------------------------------------------------------------ */ const FOUNDATIONS = [
    {
        id: "f1",
        type: "mcq",
        q: "Priya counted the full cost of a new machine as this year\u2019s expense; Rohan counted no wear-and-tear at all. Same transactions, same year \u2014 opposite verdicts. Which pair of measurement ideas, applied properly, settles their argument?",
        options: [
            "Reporting entity and money measurement",
            "Periodicity and periodic matching of costs and revenue",
            "Going concern and fair value",
            "Dual aspect and conservatism"
        ],
        answer: 1,
        explain: "Periodicity cuts the business\u2019s long life into artificial time periods, and periodic matching then forces every period\u2019s revenues to carry the costs incurred to earn them. The machine\u2019s price must be spread over its useful life and the wear-and-tear on older equipment must be recognised every period \u2014 Priya charged it all at once, Rohan charged none of it. The rules, not the people, settle the argument."
    },
    {
        id: "f2",
        type: "mcq",
        q: "A business records an expense for the electricity charges of the owner\u2019s home. Which assumption is violated?",
        options: [
            "Going concern",
            "Money measurement",
            "Reporting entity",
            "Periodicity"
        ],
        answer: 2,
        explain: "Reporting entity: the business is treated as distinct and separate from its owner \u2014 its books record only business transactions, never the owner\u2019s personal affairs. Home electricity is a personal expense, so it does not belong in the company\u2019s books at all."
    },
    {
        id: "f3",
        type: "mcq",
        q: "A car bought at auction for \u20B940,000 is re-recorded at \u20B950,000 one week later because that is what it now seems to be worth. Which principle is violated?",
        options: [
            "The historical cost principle",
            "The going concern assumption",
            "The periodicity assumption",
            "The matching principle"
        ],
        answer: 0,
        explain: "Historical cost: assets are recorded at their original purchase price, not at fluctuating market values. The going concern assumption is what justifies this \u2014 only if the business is about to be liquidated would likely sale prices (fair value) replace cost."
    },
    {
        id: "f4",
        type: "mcq",
        q: "A smartphone bought for the owner\u2019s personal use is entered in the firm\u2019s books as a business asset. This violates\u2026",
        options: [
            "Money measurement \u2014 the phone cannot be valued",
            "The reporting entity assumption \u2014 only business-related items belong in the company\u2019s books",
            "The dual aspect concept \u2014 a second account is missing",
            "Periodicity \u2014 the phone outlasts one year"
        ],
        answer: 1,
        explain: "Same family of error as the owner\u2019s home electricity: the reporting entity boundary has been crossed in the opposite direction \u2014 the owner\u2019s personal property has been pulled into the business. Only business-related items belong in the company\u2019s books."
    },
    {
        id: "f5",
        type: "output",
        q: "Hot Chocolate has assets of \u20B987,000 and liabilities of \u20B953,000. Compute its equity.",
        code: "Assets     = \u20B987,000\nLiabilities = \u20B953,000\n\nEquity = Assets \u2212 Liabilities\n       = \u20B987,000 \u2212 \u20B953,000\n       = ?",
        answerText: "\u20B934,000",
        explain: "Equity is the residual interest \u2014 whatever of the assets is left after every liability is paid. \u20B987,000 \u2212 \u20B953,000 = \u20B934,000. State the formula, substitute, answer with the rupee sign: that is the full mark scheme."
    },
    {
        id: "f6",
        type: "short",
        q: "State the money measurement assumption, and name the kind of things that therefore have no place in the books.",
        answerText: "Under money measurement, all business transactions are expressed and recorded in terms of money \u2014 in India, the rupee is the monetary unit.\nAnything that cannot be measured monetarily has no place in accounting: a loyal workforce, the owner\u2019s reputation, a brilliant location\u2019s charm \u2014 real advantages, but not numbers, so not in the books.",
        explain: "Money is the only common denominator that lets a factory, a bank loan and a cartage bill sit in one statement. The second mark comes from naming what gets excluded: valuable-but-unmeasurable things."
    },
    {
        id: "f7",
        type: "mcq",
        q: "The going concern assumption is the reason accountants record assets at historical cost. If liquidation were imminent instead, assets would need to be recorded at\u2026",
        options: [
            "Their original purchase price, unchanged",
            "Fair value \u2014 the amount they would fetch in an arm\u2019s-length sale",
            "Zero, since the business is ending",
            "Their insured value"
        ],
        answer: 1,
        explain: "Going concern says: unless there is substantial evidence to the contrary, assume the enterprise continues \u2014 so cost is meaningful. If liquidation is imminent, cost becomes irrelevant and assets must be shown at the amount for which they could be exchanged between knowledgeable, willing parties \u2014 fair value."
    },
    {
        id: "f8",
        type: "mcq",
        q: "In 2012\u201313, Kingfisher Airlines\u2019 accounts were still prepared on a going-concern basis even though its equity was wiped out, its flying permit had lapsed and its banks had recalled loans; it ceased operations that year. The watchdog lesson of the case is that\u2026",
        options: [
            "Auditors must prepare the financial statements themselves",
            "Timely going-concern warnings protect the users of financial statements",
            "Equity can never be wiped out for a going concern",
            "Banks must always continue funding a company\u2019s operations"
        ],
        answer: 1,
        explain: "The 2008 crisis auditors (Lehman, Citigroup, Bear Stearns, Countrywide) were faulted for the same silence. Auditors do not cause collapses \u2014 but failing to raise a going-concern qualification at the right time means failing their role as a watchdog, and investors lose the early warning the statements exist to give."
    },
    {
        id: "f9",
        type: "short",
        q: "A salesman is paid commission in January 2011 for sales made in December 2010. Which period\u2019s expense is that commission \u2014 and which concept says so?",
        answerText: "December 2010 \u2014 the period whose sales the commission helped earn.\nPeriodic matching of costs and revenue: revenues of a period must be matched with the costs incurred to earn those revenues; when payment was made is irrelevant. That is exactly why year-end adjustments are made for outstanding expenses, accrued incomes, prepaid expenses and unearned incomes.",
        explain: "Two marks: the right period (December, not January) and the concept doing the work (periodic matching \u2014 payment date irrelevant). Mentioning the year-end adjustment family it explains is the third mark."
    },
    {
        id: "f10",
        type: "mcq",
        q: "Which of these is NOT one of the four major assumptions that underlie all accounting measurement?",
        options: [
            "Reporting entity",
            "Going concern",
            "Conservatism",
            "Periodicity"
        ],
        answer: 2,
        explain: "The four assumptions are: reporting entity, going concern, periodicity and money measurement. Conservatism is a convention (it appears later, in stock valuation \u2014 cost or net realisable value, whichever is lower) \u2014 but it is not one of the four measurement assumptions."
    }
];
/* ------------------------------------------------------------
   GROUP 2 — THE EQUATION  (dual aspect · elements ·
             equation workouts · debit/credit rules)
   ------------------------------------------------------------ */ const EQUATION = [
    {
        id: "e1",
        type: "mcq",
        q: "A starts a business with a capital of \u20B910,000. The DUAL effect of this single transaction is\u2026",
        options: [
            "Capital \u20B910,000 = Cash \u20B910,000 \u2014 equity rises, asset rises",
            "Cash \u20B910,000 = Profit \u20B910,000",
            "Capital \u20B910,000 = Revenue \u20B910,000",
            "Only cash rises \u2014 a single effect"
        ],
        answer: 0,
        explain: "Every transaction touches two aspects at once. The business now controls \u20B910,000 of cash (asset) and owes that \u20B910,000 to its proprietor (capital). Two sides of one coin \u2014 which is why the equation always balances."
    },
    {
        id: "e2",
        type: "mcq",
        q: "The basic accounting equation is\u2026",
        options: [
            "Assets = Liabilities + Equity",
            "Assets + Liabilities = Equity",
            "Equity = Liabilities \u2212 Assets",
            "Revenue \u2212 Expenses = Assets"
        ],
        answer: 0,
        explain: "Assets = Liabilities + Equity \u2014 the accounting equation approach states the relationship between what the business owns and the claims against it (outsiders\u2019 claims first, owners\u2019 residual claim last). Every recording rule in the course hangs off this one line."
    },
    {
        id: "e3",
        type: "mcq",
        q: "A DEBIT increases which family of accounts?",
        options: [
            "Liabilities, capital, revenues",
            "Assets, expenses, drawings (dividends)",
            "Only assets",
            "Only revenues"
        ],
        answer: 1,
        explain: "Assets + Expenses + Drawings = Liabilities + Capital + Revenue. The left side of that rearranged equation increases with debits; the right side increases with credits. Memorise the rearranged line \u2014 it answers every debit/credit question instantly."
    },
    {
        id: "e4",
        type: "mcq",
        q: "A CREDIT increases\u2026",
        options: [
            "Assets and expenses",
            "Drawings and dividends",
            "Liabilities, capital and revenues",
            "Nothing \u2014 credits only decrease"
        ],
        answer: 2,
        explain: "Liabilities, capital and revenues sit on the credit side of the rearranged equation, so credits raise them (and debits lower them). Notice the symmetry: every account family has one action that grows it and one that shrinks it."
    },
    {
        id: "e5",
        type: "mcq",
        q: "For a resource to qualify as an ASSET, two conditions must both be met. They are\u2026",
        options: [
            "It is valuable and it is physical",
            "The entity controls it and it is expected to bring future economic benefit",
            "It is owned outright and it is resalable",
            "It is recorded in money terms and it lasts over a year"
        ],
        answer: 1,
        explain: "Control (the entity can restrict others from using the resource) + future benefit (economic value expected to flow in). Miss either one and it is not an asset \u2014 a public park fails control, a broken iPod fails future benefit, cash passes both: the ideal asset."
    },
    {
        id: "e6",
        type: "mcq",
        q: "Which of the following is an INTANGIBLE asset?",
        options: [
            "Land & buildings",
            "Patents",
            "Inventories",
            "Accounts receivable"
        ],
        answer: 1,
        explain: "Intangible assets confer exclusive rights but have no physical substance \u2014 patents, copyrights, trademarks. Land and inventories are tangible; accounts receivable is a financial claim (a legally enforceable claim on another party)."
    },
    {
        id: "e7",
        type: "short",
        q: "Define equity, and state what raises it and what lowers it.",
        answerText: "Equity is the residual interest in the assets of the entity after deducting all its liabilities \u2014 the \u201Cleftover\u201D value that truly belongs to the owners once all debts are settled.\nIt increases through owner investments and profits from operations; it decreases through distributions to owners (dividends/drawings) and losses. In a company it is called shareholders\u2019 equity.",
        explain: "Definition (residual interest / leftover) + the two raises (investments, profits) + the two lowers (distributions, losses). The company-name tag \u2014 shareholders\u2019 equity \u2014 is the polish mark."
    },
    {
        id: "e8",
        type: "output",
        q: "Abraham Company\u2019s September 30 balance sheet: cash \u20B95,000; trade receivables \u20B917,000; supplies \u20B99,000; equipment \u20B919,000; building \u20B921,800; land \u20B921,000; loan payable \u20B912,000; equity \u20B977,300; expenses payable x. Find x.",
        code: "Assets = Liabilities + Equity\n(5,000+17,000+9,000+19,000+21,800+21,000)\n     = (12,000 + x) + 77,300\n92,800 = 89,300 + x\nx = ?",
        answerText: "\u20B93,500",
        explain: "Assets total \u20B992,800. Known claims total \u20B989,300 (12,000 loan + 77,300 equity). The missing expenses payable must fill the gap: 92,800 \u2212 89,300 = \u20B93,500. The equation finds the unknown \u2014 that is its whole job."
    },
    {
        id: "e9",
        type: "output",
        q: "Coffee Corner\u2019s equity is twice its liabilities, and its assets are \u20B981,000. State its liabilities and equity.",
        code: "Assets = Liabilities + Equity\n81,000 = L + (2 \u00D7 L)\n81,000 = 3 \u00D7 L\nL = ?",
        answerText: "Liabilities \u20B927,000 \u00B7 Equity \u20B954,000",
        explain: "Substitute equity = 2L: 81,000 = 3L, so L = 27,000 and equity = 54,000. Check: 27,000 + 54,000 = 81,000 \u2014 the equation closes. Always end with the check line; it is cheap insurance."
    },
    {
        id: "e10",
        type: "mcq",
        q: "Which statement about the components of shareholders\u2019 equity is correct?",
        options: [
            "Share capital is the profit kept in the business; retained earnings is what shareholders invested",
            "Share capital is what shareholders contributed; retained earnings is cumulative net profit kept in the business rather than distributed",
            "Both are set by the company\u2019s auditors each year",
            "Retained earnings decrease when the company earns profits"
        ],
        answer: 1,
        explain: "Share capital = the foundational investment made when shares are issued. Retained earnings = cumulative profit KEPT IN the business \u2014 it grows when the company earns profits and shrinks when it incurs losses or pays dividends."
    }
];
/* ------------------------------------------------------------
   GROUP 3 — RECORDING  (journal · ledger · statements ·
             trial balance · the Vogue Company)
   ------------------------------------------------------------ */ const RECORDING = [
    {
        id: "r1",
        type: "mcq",
        q: "On June 5, Vogue signs an agreement with EthniWear for a special design \u2014 the fee of \u20B92,000 becomes payable only on completion of the work. How is June 5 journalised?",
        options: [
            "Dr Cash \u20B92,000 / Cr Revenue \u20B92,000",
            "Dr Trade receivables \u20B92,000 / Cr Revenue \u20B92,000",
            "Dr Unearned revenue \u20B92,000 / Cr Cash \u20B92,000",
            "No entry at all"
        ],
        answer: 3,
        explain: "Signing an agreement transfers no value \u2014 no asset moves, no obligation is born. Accounting records transactions, not intentions. The entry happens only when the work is completed and the fee is earned (or received)."
    },
    {
        id: "r2",
        type: "mcq",
        q: "On June 21, Vogue appoints an office manager on a monthly salary of \u20B91,500. What is journalised?",
        options: [
            "Dr Salaries expense \u20B91,500 / Cr Cash \u20B91,500",
            "Dr Salaries payable \u20B91,500 / Cr Salaries expense \u20B91,500",
            "No entry \u2014 appointing an employee is not a transaction",
            "Dr Manager \u20B91,500 / Cr Capital \u20B91,500"
        ],
        answer: 2,
        explain: "Hiring changes no asset, liability or equity \u2014 it is a promise about the future. Salary becomes an expense period by period as the work is received and paid, not at the moment of appointment."
    },
    {
        id: "r3",
        type: "output",
        q: "Rani deals in automobiles. She starts with cash \u20B980,000, buys goods on credit from Ramesh \u20B910,000, buys furniture for cash \u20B96,000, then pays creditors \u20B98,000. What do the final equation totals look like?",
        code: "Assets:  Cash 66,000 + Stock 10,000 + Furniture 6,000 = 82,000\nClaims:  Capital 80,000 + Creditors 2,000             = 82,000\n\nFinal equation = ?",
        answerText: "\u20B982,000 = \u20B982,000",
        explain: "Cash: 80,000 \u2212 6,000 \u2212 8,000 = 66,000. Stock +10,000, Furniture +6,000 \u2192 assets 82,000. Creditors: +10,000 \u2212 8,000 = 2,000; capital 80,000 \u2192 claims 82,000. The equation holds after EVERY single transaction \u2014 that is what the double-entry system guarantees."
    },
    {
        id: "r4",
        type: "mcq",
        q: "Bought furniture costing \u20B95,000 by paying cash. The effect on the accounting equation is\u2026",
        options: [
            "Assets fall by \u20B95,000",
            "One asset rises \u20B95,000, another falls \u20B95,000 \u2014 the equation total is unchanged",
            "Liabilities rise by \u20B95,000",
            "Capital rises by \u20B95,000"
        ],
        answer: 1,
        explain: "Furniture comes in (+5,000 asset), cash goes out (\u22125,000 asset). Both changes are inside the assets column, so the total is untouched and the other side never blinks. Not every transaction changes the size of the equation \u2014 some just reshuffle it."
    },
    {
        id: "r5",
        type: "output",
        q: "Write the June 1 journal entry for Vogue: Rakesh invested cash \u20B950,000 in the company\u2019s share capital.",
        code: "ANALYSIS: Asset (Cash) increased; Equity (Share Capital) increased\nRULES:    Debit assets to record increase; Credit equity to record increase\nENTRY:    ?",
        answerText: "Cash A/c .................... Dr   50,000\n        To Share Capital ...............   50,000\n(Being capital invested in cash)",
        explain: "Asset up \u2192 debit Cash. Equity up \u2192 credit Share Capital. The narration line \u2014 \u2018being capital invested in cash\u2019 \u2014 is the final touch that makes the entry exam-complete."
    },
    {
        id: "r6",
        type: "mcq",
        q: "On June 8 Vogue received \u20B91,500 from Kidswear for services to be provided later. Which account is CREDITED?",
        options: [
            "Revenue from services",
            "Cash",
            "Unearned revenue",
            "Trade receivables"
        ],
        answer: 2,
        explain: "Cash is debited (asset in), but the revenue is NOT earned yet \u2014 Vogue now owes the service. Unearned revenue is credited: a liability. Cash received first, revenue recognised later \u2014 the deferral pattern in one entry."
    },
    {
        id: "r7",
        type: "mcq",
        q: "On June 22, Vogue uses office supplies worth \u20B91,800. The correct entry is\u2026",
        options: [
            "Dr Office supplies \u20B91,800 / Cr Cash \u20B91,800",
            "Dr Office supplies expense \u20B91,800 / Cr Office supplies \u20B91,800",
            "Dr Office supplies expense \u20B91,800 / Cr Trade payables \u20B91,800",
            "No entry until the supplies are fully finished"
        ],
        answer: 1,
        explain: "The supplies were an asset; using them converts part of that asset into an expense. Expense up \u2192 debit; asset down \u2192 credit. Consuming what you own is not a new purchase \u2014 it is a transfer inside your own books."
    },
    {
        id: "r8",
        type: "output",
        q: "Vogue\u2019s Cash T-account for June shows debit postings of \u20B958,500 (Jun 1: 50,000 \u00B7 7: 2,000 \u00B7 8: 1,500 \u00B7 18: 4,000 \u00B7 25: 1,000) and credit postings of \u20B911,570. What is the closing cash balance, and on which side?",
        code: "Dr total = 50,000+2,000+1,500+4,000+1,000 = 58,500\nCr total = 11,570\nBalance = 58,500 \u2212 11,570 = ?",
        answerText: "\u20B946,930 \u2014 debit balance (cash is an asset; assets carry debit balances)",
        explain: "58,500 \u2212 11,570 = 46,930, and it sits on the debit side \u2014 exactly the Cash line in Vogue\u2019s June 30 trial balance. The ledger balance IS the trial-balance line; that is the pipeline working."
    },
    {
        id: "r9",
        type: "mcq",
        q: "Vogue\u2019s trial balance by the BALANCE method totals \u20B968,000 on each side; by the TOTAL method, \u20B986,370. Why is the total method bigger?",
        options: [
            "The total method counts revenue twice",
            "It adds both the debit and the credit posting of every account before netting, instead of listing only net balances",
            "It includes accounts the balance method forgets",
            "It is simply an error in the exhibit"
        ],
        answer: 1,
        explain: "Balance method: one net figure per account (e.g. Cash 46,930 Dr). Total method: every account\u2019s gross debit side and gross credit side both appear (Cash 58,500 Dr and 11,570 Cr). More rows, same proof \u2014 both sides still agree (68,000 = 68,000; 86,370 = 86,370)."
    },
    {
        id: "r10",
        type: "short",
        q: "A trial balance agrees. What does that prove \u2014 and what errors can STILL survive in the books?",
        answerText: "It proves arithmetic consistency: under double entry, every debit has an equal credit, so equal totals confirm the posting maths.\nIt does NOT prove cent-per-cent accuracy. Errors of principle (wrong class of account), compensating errors (two mistakes cancelling out), wholly omitted transactions, and entries to the wrong account at the right amount can all still survive an agreeing trial balance.",
        explain: "The first half is the confidence the TB buys; the second half is the honesty it owes. Name at least two surviving error types for the second mark \u2014 errors of principle and compensating errors are the classics."
    }
];
/* ------------------------------------------------------------
   GROUP 4 — CLOSING  (adjusting entries · final accounts ·
             the trading account · gross profit)
   ------------------------------------------------------------ */ const CLOSING = [
    {
        id: "c1",
        type: "mcq",
        q: "Prepaid insurance, office supplies and unearned revenue are all examples of\u2026",
        options: [
            "Accruals \u2014 cash arrives last",
            "Deferrals \u2014 cash happens first, recognition happens later",
            "Contra accounts",
            "Errors the trial balance catches"
        ],
        answer: 1,
        explain: "DEFERRAL: the cash already moved (paid for insurance, received in advance) but the expense or revenue will only be recognised as time passes or service is given. Cash first, recognition later \u2014 apportioned between two or more periods."
    },
    {
        id: "c2",
        type: "mcq",
        q: "Salaries payable, accrued interest expense and unbilled revenue are examples of\u2026",
        options: [
            "Deferrals \u2014 cash first",
            "Accruals \u2014 recognition first, expected future cash later",
            "Financial claims",
            "Statutory liabilities only"
        ],
        answer: 1,
        explain: "ACCRUAL: an expense incurred but not paid, or revenue earned but not received \u2014 recognition happens now for cash that is still in the future. Previously unrecorded items that the adjustment brings into the books."
    },
    {
        id: "c3",
        type: "output",
        q: "On October 1 you pay \u20B912,000 for one year of insurance. The accounting year ends December 31. Split the payment into this year\u2019s expense and the prepaid asset.",
        code: "Months consumed: Oct + Nov + Dec = 3\nExpense  = 12,000 \u00D7 3/12 = ?\nPrepaid  = 12,000 \u2212 expense = ?",
        answerText: "Expense \u20B93,000 \u00B7 Prepaid insurance (asset) \u20B99,000",
        explain: "Only 3 of the 12 protected months fall inside this year: 12,000 \u00D7 3/12 = 3,000 becomes insurance expense. The remaining 9,000 is a future benefit \u2014 it stays an asset called prepaid insurance. Cash happened first; expense recognition happens gradually afterward."
    },
    {
        id: "c4",
        type: "output",
        q: "A customer gives you \u20B960,000 in advance for a six-month service contract. One month of service is now provided. How much revenue is recognised, and what happens to the liability?",
        code: "Initial:  Cash Dr 60,000 / Unearned Revenue Cr 60,000\n1 month served: Revenue = 60,000 \u00D7 1/6 = ?\nLiability falls by the same amount \u2192 ?",
        answerText: "Revenue \u20B910,000 \u00B7 Unearned revenue liability falls to \u20B950,000",
        explain: "You may hold the cash, but revenue is earned only as the service is delivered: 60,000 \u00F7 6 = 10,000 per month. After one month, 10,000 moves from the liability (unearned revenue) to revenue; 50,000 of obligation remains. Cash received first \u2192 revenue recognised later."
    },
    {
        id: "c5",
        type: "mcq",
        q: "Tech Mahindra received \u20B99,682 million for changes to a long-term contract, recognised \u20B92,005 million as revenue that year and held \u20B97,677 million as deferred revenue. That \u20B97,677 million is\u2026",
        options: [
            "An asset \u2014 cash was received",
            "A liability \u2014 the amount must be repaid or the services provided",
            "Revenue of the following year, recorded in advance as income",
            "An expense of the current year"
        ],
        answer: 1,
        explain: "Deferred revenue is a liability: either the services must be provided or the cash must be returned \u2014 in both cases the company owes something. As services are delivered, the liability converts into revenue with a corresponding reduction in deferred revenue."
    },
    {
        id: "c6",
        type: "mcq",
        q: "If a business makes NO adjustment for prepaid expenses at year-end, its financial statements will\u2026",
        options: [
            "Overstate expenses and understate assets",
            "Understate expenses and overstate assets and equity",
            "Balance perfectly \u2014 adjustments are optional",
            "Show more cash than it has"
        ],
        answer: 1,
        explain: "The used-up portion never became an expense \u2192 expenses understated \u2192 profit overstated \u2192 equity overstated; and the asset stays on the books at its full amount \u2192 assets overstated. Both statements are wrong, in opposite directions."
    },
    {
        id: "c7",
        type: "mcq",
        q: "\u201CFinal accounts\u201D consist of two key statements. They are\u2026",
        options: [
            "The cash flow statement and the balance sheet",
            "The trading & profit and loss account, and the balance sheet",
            "The trial balance and the worksheet",
            "The income statement and the statement of changes in equity"
        ],
        answer: 1,
        explain: "Trading & Profit and Loss Account \u2014 did the business earn a profit or suffer a loss during the period (performance). Balance Sheet \u2014 what the business owns and owes at a point in time (position). The two questions every owner asks, one statement each."
    },
    {
        id: "c8",
        type: "output",
        q: "A trader\u2019s trial balance shows: purchases \u20B930,000; purchases returns \u20B95,000; sales \u20B940,000; sales returns \u20B95,000. Compute the gross profit.",
        code: "Net sales     = 40,000 \u2212 5,000 = 35,000\nNet purchases = 30,000 \u2212 5,000 = 25,000\nGross profit  = 35,000 \u2212 25,000 = ?",
        answerText: "\u20B910,000",
        explain: "Returns first, then the comparison: net sales 35,000 against net purchases (the cost of goods sold) 25,000 leaves a gross profit of 10,000. No stock, no direct expenses \u2014 the simplest trading result there is."
    },
    {
        id: "c9",
        type: "output",
        q: "A trader in 2024: opening stock \u20B910,000; purchases \u20B940,000; purchases returns \u20B95,000; sales \u20B960,000; sales returns \u20B910,000; closing stock \u20B915,000. Compute the gross profit.",
        code: "Net sales = 60,000 \u2212 10,000 = 50,000\nCOGS = 10,000 + (40,000 \u2212 5,000) \u2212 15,000 = 30,000\nGross profit = 50,000 \u2212 30,000 = ?",
        answerText: "\u20B920,000",
        explain: "COGS = opening stock + net purchases \u2212 closing stock = 10,000 + 35,000 \u2212 15,000 = 30,000. Net sales 50,000 minus COGS 30,000 \u2192 gross profit 20,000. The closing stock does double duty: it shrinks COGS here and reappears as an asset in the balance sheet."
    },
    {
        id: "c10",
        type: "mcq",
        q: "Closing stock is valued at\u2026 and appears\u2026",
        options: [
            "Selling price; on the debit side of the trading account",
            "Cost or net realisable value, whichever is lower; on the credit side of the trading account and as an asset in the balance sheet",
            "Cost plus a standard margin; only in the balance sheet",
            "Last year\u2019s cost; only in the notes"
        ],
        answer: 1,
        explain: "The valuation rule follows conservatism: never anticipate profit \u2014 take cost or net realisable value, whichever is LOWER. And closing stock does double duty: it credits the trading account (shrinks COGS) and carries forward as a current asset in the balance sheet."
    }
];
const FA_EXAM_BANKS = {
    foundations: {
        group: "foundations",
        title: "Foundations & Assumptions",
        subtitle: "Why accounting exists \u00B7 the four measurement assumptions",
        topics: "The five openings \u00B7 reporting entity \u00B7 going concern \u00B7 periodicity \u00B7 matching \u00B7 money measurement \u00B7 violation spotting",
        questions: FOUNDATIONS
    },
    equation: {
        group: "equation",
        title: "Dual Aspect & The Equation",
        subtitle: "Every rupee tells two stories \u2014 and the equation that keeps the score",
        topics: "Dual aspect \u00B7 debit & credit rules \u00B7 assets, liabilities, equity \u00B7 equation workouts",
        questions: EQUATION
    },
    recording: {
        group: "recording",
        title: "Journal, Ledger & Statements",
        subtitle: "From a day\u2019s transactions to a set of statements \u2014 the Vogue Company pipeline",
        topics: "Journalising \u00B7 no-entry lessons \u00B7 T-accounts \u00B7 the five statements \u00B7 trial balance",
        questions: RECORDING
    },
    closing: {
        group: "closing",
        title: "Adjustments & Final Accounts",
        subtitle: "Deferrals, accruals and the road to gross profit",
        topics: "Deferral vs accrual \u00B7 prepaid & unearned \u00B7 final accounts \u00B7 trading account \u00B7 gross profit",
        questions: CLOSING
    }
};
const FA_EXAM_GROUPS = [
    "foundations",
    "equation",
    "recording",
    "closing"
];
const FA_TOTAL_QUESTIONS = FA_EXAM_GROUPS.reduce(_c = (n, g)=>n + FA_EXAM_BANKS[g].questions.length, 0);
_c1 = FA_TOTAL_QUESTIONS;
var _c, _c1;
__turbopack_context__.k.register(_c, "FA_TOTAL_QUESTIONS$FA_EXAM_GROUPS.reduce");
__turbopack_context__.k.register(_c1, "FA_TOTAL_QUESTIONS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/fa/FaHero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FaHero",
    ()=>FaHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* ============================================================
   FaHero — shelf 03 of THE ATLAS.

   "Financial Accounting" — the lecture sequence hero. Every
   lecture card carries its "Lecture N" eyebrow, and the notes
   below open with a matching "Financial Accounting Lecture N"
   band (see FaLectureHead in FaApp). Palette: emerald & sage
   on ivory paper. One chapter per lecture, sixteen lectures.
   ============================================================ */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-client] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as PenLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scale.js [app-client] (ecmascript) <export default as Scale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/fa/lectures.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/fa/questions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/ui.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const EMERALD = "#059669";
const EMERALD_BRIGHT = "#10b981";
const SAGE = "#6d9970";
const SAGE_LITE = "#a7d7b8";
/* floating ledger shapes — coin, ledger page, T-account, ring */ const HERO_SHAPES = [
    {
        kind: "coin",
        top: "14%",
        left: "5%",
        size: 56,
        dur: 7.4,
        delay: 0,
        rot: -10,
        color: EMERALD
    },
    {
        kind: "tacct",
        top: "66%",
        left: "8%",
        size: 50,
        dur: 8.6,
        delay: 0.8,
        rot: 8,
        color: SAGE
    },
    {
        kind: "ledger",
        top: "18%",
        left: "88%",
        size: 52,
        dur: 7.9,
        delay: 0.4,
        rot: 6,
        color: SAGE_LITE
    },
    {
        kind: "ring",
        top: "62%",
        left: "90%",
        size: 48,
        dur: 8.9,
        delay: 1.4,
        rot: -6,
        color: EMERALD_BRIGHT
    },
    {
        kind: "ledger",
        top: "40%",
        left: "3%",
        size: 42,
        dur: 9.3,
        delay: 2,
        rot: 5,
        color: SAGE
    },
    {
        kind: "coin",
        top: "82%",
        left: "46%",
        size: 40,
        dur: 8.1,
        delay: 1.1,
        rot: -8,
        color: EMERALD_BRIGHT
    }
];
function HeroShape({ b }) {
    const s = b.size;
    const paths = {
        coin: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: s / 2,
                    cy: s * 0.4,
                    r: s * 0.3
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaHero.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: `M ${s / 2} ${s * 0.26} v ${s * 0.28}`
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaHero.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true),
        tacct: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: `M 3 5 h ${s - 6}`
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaHero.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: `M ${s / 2} 5 v ${s * 0.52}`
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaHero.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true),
        ledger: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "4",
                    y: "3",
                    width: s - 8,
                    height: s * 0.62,
                    rx: "2.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaHero.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: `M ${s * 0.22} ${s * 0.24} h ${s * 0.56}`
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaHero.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: `M ${s * 0.22} ${s * 0.42} h ${s * 0.38}`
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaHero.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true),
        ring: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: s / 2,
                    cy: s * 0.4,
                    r: s * 0.34
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaHero.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: s / 2,
                    cy: s * 0.4,
                    r: s * 0.18,
                    strokeDasharray: "3 4"
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaHero.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true)
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        "aria-hidden": true,
        className: "pointer-events-none absolute",
        style: {
            top: b.top,
            left: b.left,
            rotate: b.rot,
            opacity: 0.5
        },
        animate: {
            y: [
                0,
                -12,
                0
            ]
        },
        transition: {
            duration: b.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: b.delay
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: s,
            height: s * 0.8,
            viewBox: `0 0 ${s} ${s * 0.8}`,
            fill: "none",
            stroke: b.color,
            strokeWidth: 2,
            children: paths[b.kind]
        }, void 0, false, {
            fileName: "[project]/src/components/fa/FaHero.tsx",
            lineNumber: 72,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/fa/FaHero.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_c = HeroShape;
function FaHero({ activeId, onSelect, onPractice, seen, totalQuestions }) {
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const q = query.trim().toLowerCase();
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FaHero.useMemo[filtered]": ()=>{
            const words = q.split(/\s+/).filter(Boolean);
            if (words.length === 0) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_LECTURES"];
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_LECTURES"].filter({
                "FaHero.useMemo[filtered]": (l)=>{
                    const hay = [
                        `lecture ${l.n}`,
                        l.code.toLowerCase(),
                        l.title.toLowerCase(),
                        l.blurb.toLowerCase(),
                        ...l.chapters.map({
                            "FaHero.useMemo[filtered].hay": (c)=>`${c.label} ${c.desc}`.toLowerCase()
                        }["FaHero.useMemo[filtered].hay"])
                    ].join(" ");
                    return words.every({
                        "FaHero.useMemo[filtered]": (w)=>hay.includes(w)
                    }["FaHero.useMemo[filtered]"]);
                }
            }["FaHero.useMemo[filtered]"]);
        }
    }["FaHero.useMemo[filtered]"], [
        q
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        id: "top",
        className: "relative flex min-h-[94vh] flex-col items-center justify-center overflow-hidden px-4 pb-24 pt-16 sm:pb-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -left-24 top-16 h-80 w-80 rounded-full blur-3xl",
                        style: {
                            background: "rgba(16,185,129,.15)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/fa/FaHero.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -right-16 bottom-24 h-96 w-96 rounded-full blur-3xl",
                        style: {
                            background: "rgba(167,215,184,.20)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/fa/FaHero.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/3 top-1/2 h-64 w-64 rounded-full blur-3xl",
                        style: {
                            background: "rgba(5,150,105,.10)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/fa/FaHero.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/fa/FaHero.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                "aria-hidden": true,
                viewBox: "0 0 1200 620",
                preserveAspectRatio: "none",
                className: "pointer-events-none absolute inset-0 h-full w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        fill: "none",
                        stroke: SAGE,
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        opacity: "0.55",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M 588 216 L 600 192 L 612 216 Z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaHero.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "600",
                                y1: "216",
                                x2: "600",
                                y2: "430"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaHero.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "546",
                                y1: "430",
                                x2: "654",
                                y2: "430"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaHero.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/fa/FaHero.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                        style: {
                            transformBox: "fill-box",
                            transformOrigin: "50% 18%"
                        },
                        initial: {
                            rotate: -9
                        },
                        animate: {
                            rotate: [
                                -9,
                                5,
                                -2,
                                0
                            ]
                        },
                        transition: {
                            duration: 2.8,
                            ease: "easeInOut",
                            delay: 0.5
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            fill: "none",
                            stroke: SAGE,
                            strokeWidth: "2.5",
                            strokeLinecap: "round",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "440",
                                    y1: "210",
                                    x2: "760",
                                    y2: "210"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/fa/FaHero.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "440",
                                    y1: "212",
                                    x2: "440",
                                    y2: "256",
                                    strokeWidth: "1.6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/fa/FaHero.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "760",
                                    y1: "212",
                                    x2: "760",
                                    y2: "256",
                                    strokeWidth: "1.6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/fa/FaHero.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M 410 258 Q 440 284 470 258",
                                    strokeWidth: "1.8"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/fa/FaHero.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M 730 258 Q 760 284 790 258",
                                    strokeWidth: "1.8"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/fa/FaHero.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/fa/FaHero.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/fa/FaHero.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    [
                        {
                            x: 440,
                            y: 268
                        },
                        {
                            x: 600,
                            y: 196
                        },
                        {
                            x: 760,
                            y: 268
                        }
                    ].map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                            cx: p.x,
                            cy: p.y,
                            r: 6,
                            fill: "none",
                            stroke: EMERALD,
                            strokeWidth: 2,
                            style: {
                                transformBox: "fill-box",
                                transformOrigin: "center"
                            },
                            animate: {
                                opacity: [
                                    0.2,
                                    0.85,
                                    0.2
                                ],
                                scale: [
                                    1,
                                    1.4,
                                    1
                                ]
                            },
                            transition: {
                                duration: 3,
                                repeat: Infinity,
                                delay: i * 0.7
                            }
                        }, i, false, {
                            fileName: "[project]/src/components/fa/FaHero.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/fa/FaHero.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0",
                children: HERO_SHAPES.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroShape, {
                        b: b
                    }, i, false, {
                        fileName: "[project]/src/components/fa/FaHero.tsx",
                        lineNumber: 155,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/fa/FaHero.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 mx-auto max-w-4xl text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "chip mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/fa/FaHero.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this),
                                "Shelf 03 · Financial Accounting · IIT Jodhpur"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/fa/FaHero.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/fa/FaHero.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 120,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "mt-6 text-5xl font-black leading-[1.05] tracking-tight text-[#3e2c1d] md:text-7xl",
                            children: [
                                "Financial",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-clip-text text-transparent",
                                    style: {
                                        backgroundImage: `linear-gradient(120deg,${EMERALD_BRIGHT},${EMERALD} 45%,${SAGE})`
                                    },
                                    children: "Accounting"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/fa/FaHero.tsx",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/fa/FaHero.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/fa/FaHero.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 240,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#5d6b58]",
                            children: "Why does every rupee tell two stories? From the equation to the journal, from the T-account to the trial balance: this course, drawn as living machines — an equation you can balance, a ledger you can post, a trial balance you can sort until the columns agree."
                        }, void 0, false, {
                            fileName: "[project]/src/components/fa/FaHero.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/fa/FaHero.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 300,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto mt-8 w-full max-w-3xl text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "fa-lecture-search",
                                    className: "sr-only",
                                    children: "Search the lecture sequence"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/fa/FaHero.tsx",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#6d9970]",
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/fa/FaHero.tsx",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "fa-lecture-search",
                                            type: "text",
                                            value: query,
                                            onChange: (e)=>setQuery(e.target.value),
                                            placeholder: "Search the sequence — try “journal”, “Pearl”, or “8”…",
                                            autoComplete: "off",
                                            className: "w-full rounded-2xl border border-[#dbeae2] bg-[#f9fcfa]/90 py-3.5 pl-11 pr-4 text-[.95rem] font-semibold text-[#3e2c1d] shadow-[0_10px_30px_-14px_rgba(62,44,29,.35)] backdrop-blur-md placeholder:font-normal placeholder:text-[#6d9970] focus:outline-none focus:ring-2 focus:ring-[#10b981]/40"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/fa/FaHero.tsx",
                                            lineNumber: 194,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/fa/FaHero.tsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this),
                                filtered.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                    className: "scrollbar-thin mt-3 grid max-h-[23rem] gap-2.5 overflow-y-auto pr-1 sm:grid-cols-2",
                                    "aria-label": "Lecture sequence — pick a lecture to open its notes below",
                                    children: filtered.map((l)=>{
                                        const isActive = l.id === activeId;
                                        const readCount = l.chapters.filter((c)=>seen.has(c.id)).length;
                                        const allRead = l.chapters.length > 0 && readCount === l.chapters.length;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "min-w-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>onSelect(l.id),
                                                "aria-pressed": isActive,
                                                className: `group flex h-full w-full items-start gap-3 rounded-2xl border p-4 text-left transition-all duration-200 ${isActive ? "border-[#059669] bg-white shadow-[0_16px_40px_-18px_rgba(5,150,105,.45)] ring-2 ring-[#10b981]/25" : "border-[#dbeae2] bg-[#f9fcfa]/80 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_14px_34px_-18px_rgba(62,44,29,.4)]"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[.72rem] font-black ${isActive ? "text-white" : ""}`,
                                                        style: isActive ? {
                                                            background: `linear-gradient(135deg,${EMERALD_BRIGHT},${EMERALD})`,
                                                            boxShadow: "0 6px 14px -6px rgba(5,150,105,.6)"
                                                        } : {
                                                            background: "#e7f2ec",
                                                            color: EMERALD
                                                        },
                                                        children: l.code
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/fa/FaHero.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "min-w-0 flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[.58rem] font-extrabold uppercase tracking-[.18em]",
                                                                        style: {
                                                                            color: SAGE
                                                                        },
                                                                        children: [
                                                                            "Lecture ",
                                                                            l.n
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/fa/FaHero.tsx",
                                                                        lineNumber: 238,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    allRead ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                        className: "h-3.5 w-3.5",
                                                                        style: {
                                                                            color: "#5f9e58"
                                                                        },
                                                                        "aria-label": "Every chapter read"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/fa/FaHero.tsx",
                                                                        lineNumber: 242,
                                                                        columnNumber: 31
                                                                    }, this) : null,
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "ml-auto font-mono text-[.6rem] font-bold text-[#6d9970]",
                                                                        children: [
                                                                            readCount,
                                                                            "/",
                                                                            l.chapters.length,
                                                                            " read"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/fa/FaHero.tsx",
                                                                        lineNumber: 244,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/fa/FaHero.tsx",
                                                                lineNumber: 237,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `mt-0.5 block text-[.94rem] font-extrabold leading-tight ${isActive ? "text-[#047857]" : "text-[#3e2c1d]"}`,
                                                                children: l.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/fa/FaHero.tsx",
                                                                lineNumber: 248,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-1 block text-[.76rem] leading-snug text-[#5d6b58]",
                                                                children: l.blurb
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/fa/FaHero.tsx",
                                                                lineNumber: 251,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-2 flex flex-wrap gap-1.5",
                                                                children: l.chapters.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "rounded-full border border-[#dbeae2] bg-[#eef6f1] px-2 py-0.5 text-[.62rem] font-bold text-[#0b6b4f]",
                                                                        children: c.label
                                                                    }, c.id, false, {
                                                                        fileName: "[project]/src/components/fa/FaHero.tsx",
                                                                        lineNumber: 254,
                                                                        columnNumber: 31
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/fa/FaHero.tsx",
                                                                lineNumber: 252,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/fa/FaHero.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 25
                                                    }, this),
                                                    isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-0.5 shrink-0 self-center rounded-full bg-[#059669]/10 px-2 py-1 text-[.55rem] font-black uppercase tracking-[.14em] text-[#047857]",
                                                        children: "reading"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/fa/FaHero.tsx",
                                                        lineNumber: 261,
                                                        columnNumber: 27
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/fa/FaHero.tsx",
                                                lineNumber: 216,
                                                columnNumber: 23
                                            }, this)
                                        }, l.id, false, {
                                            fileName: "[project]/src/components/fa/FaHero.tsx",
                                            lineNumber: 215,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/fa/FaHero.tsx",
                                    lineNumber: 206,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 rounded-2xl border border-dashed border-[#dbeae2] bg-[#f9fcfa]/70 p-4 text-center text-[.82rem] font-semibold text-[#7d9a8b]",
                                    role: "status",
                                    children: [
                                        "No lecture matches “",
                                        query,
                                        "” — try a number, a topic (“trial balance”), or clear the search."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/fa/FaHero.tsx",
                                    lineNumber: 271,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 flex flex-col items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: onPractice,
                                            title: "The practice hub — pen-paper exam windows with instant checking",
                                            className: "group inline-flex items-center gap-2 rounded-full border border-[#dbeae2] bg-[#f9fcfa] px-7 py-3 text-sm font-bold text-[#047857] shadow-sm transition hover:bg-[#e7f2ec]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__["PenLine"], {
                                                    className: "h-4 w-4 text-[#059669] transition-transform duration-300 group-hover:-rotate-12"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaHero.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 17
                                                }, this),
                                                "Test my knowledge"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/fa/FaHero.tsx",
                                            lineNumber: 280,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[.64rem] font-bold uppercase tracking-[.16em] text-[#7d9a8b]",
                                            children: [
                                                "pen-paper practice · ",
                                                totalQuestions,
                                                " questions · ",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_EXAM_GROUPS"].length,
                                                " exam windows"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/fa/FaHero.tsx",
                                            lineNumber: 289,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/fa/FaHero.tsx",
                                    lineNumber: 279,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/fa/FaHero.tsx",
                            lineNumber: 188,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/fa/FaHero.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 430,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-3",
                            children: [
                                [
                                    String(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_LECTURES"].length),
                                    "lectures"
                                ],
                                [
                                    String(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_ALL_CHAPTER_IDS"].length),
                                    "chapters"
                                ],
                                [
                                    String(totalQuestions),
                                    "exam questions"
                                ]
                            ].map(([n, l])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "bg-clip-text text-3xl font-black text-transparent",
                                            style: {
                                                backgroundImage: `linear-gradient(120deg,${EMERALD_BRIGHT},${EMERALD} 55%,${SAGE})`
                                            },
                                            children: n
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/fa/FaHero.tsx",
                                            lineNumber: 304,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[.72rem] font-bold uppercase tracking-[.18em] text-[#6d8577]",
                                            children: l
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/fa/FaHero.tsx",
                                            lineNumber: 310,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, l, true, {
                                    fileName: "[project]/src/components/fa/FaHero.tsx",
                                    lineNumber: 303,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/fa/FaHero.tsx",
                            lineNumber: 297,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/fa/FaHero.tsx",
                        lineNumber: 296,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/fa/FaHero.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-0 bottom-8 z-10 flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#notes-top",
                    "aria-label": "Scroll to the lecture notes",
                    className: "anim-bob rounded-full border border-[#dbeae2] bg-[#f9fcfa]/80 p-3 text-[#059669]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                        className: "h-5 w-5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/fa/FaHero.tsx",
                        lineNumber: 319,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaHero.tsx",
                    lineNumber: 318,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/fa/FaHero.tsx",
                lineNumber: 317,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/fa/FaHero.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
_s(FaHero, "DOWiSTOb/BUd8qeG7DR+mR3x4Qg=");
_c1 = FaHero;
var _c, _c1;
__turbopack_context__.k.register(_c, "HeroShape");
__turbopack_context__.k.register(_c1, "FaHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/fa/FaExamWindow.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FaExamWindow",
    ()=>FaExamWindow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* FA exam window — theme + engine shared (see notes/ExamEngine.tsx
   and notes/exam-themes.ts). The emerald sigil marks shelf 03. */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/fa/questions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ExamEngine$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/ExamEngine.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$themes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/exam-themes.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function FaExamWindow({ group, onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ExamEngine$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExamEngine"], {
        theme: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$themes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_EXAM_THEME"],
        bank: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_EXAM_BANKS"][group],
        draftId: group,
        onClose: onClose
    }, void 0, false, {
        fileName: "[project]/src/components/fa/FaExamWindow.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
_c = FaExamWindow;
var _c;
__turbopack_context__.k.register(_c, "FaExamWindow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/fa/FaApp.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/fa/FaApp.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_fa_437076cc._.js.map