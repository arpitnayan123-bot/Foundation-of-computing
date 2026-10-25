(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
]);

//# sourceMappingURL=src_components_fa_questions_ts_6d1b8c6d._.js.map