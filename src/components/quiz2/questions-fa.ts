/* ============================================================
   QUIZ 2 — Financial Accounting mock bank (80 questions).

   Coverage — the final-accounts stretch, L16 to L26, sliver
   by sliver exactly as the Quiz-2 syllabus reads:

     · matching      (L16)         — cash vs accrual, the ₹1,000
                                     January case, replacement-cost lens
     · adjusting     (L17 · L19)   — Vogue's six entries, deferrals
                                     vs accruals, Tech Mahindra
     · trading1      (L18)         — purpose, the COGS ladder, GP vs GL
     · trading2      (L20)         — T-format, balancing figure,
                                     where each line lands
     · pandl         (L21)         — expenses close in, NP closes to
                                     capital, the statement chain,
                                     Softomation's five shapes
     · balancesheet  (L22)         — photograph not video, owns vs
                                     owes, liquidity vs permanence
     · cashflow1     (L23)         — profit ≠ cash, Cathay Pacific,
                                     the three activities
     · cashflow2     (L25)         — direct vs indirect, Jaws Photo
                                     Plus 73,000 → 69,700
     · cashflow3     (L26)         — the indirect build applied:
                                     Compass 72,000, Ajay 4,32,000 →
                                     3,48,000, working-capital signs

   L27–L29 (reading statements for health, statement analysis,
   why cash flow matters) are NOT on the Quiz-2 syllabus and
   are deliberately not tested here.

   Every figure is computed and hand-checked; distractors are
   the classic errors (forgotten closing stock, sign slips on
   working capital, cash-basis mixing).
   ============================================================ */

import type { Quiz2Question } from "./quiz2-data";

export const FA_QUIZ2_QUESTIONS: Quiz2Question[] = [
  /* ---------------- MATCHING — L16 (7) ---------------- */

  {
    id: "fa2-match-01",
    type: "mcq",
    topic: "matching",
    q: "The matching concept is the rule that a period's…",
    options: [
      "cash receipts must equal its cash payments before profit is declared",
      "assets must equal liabilities plus capital on the closing date",
      "revenues are matched with the costs incurred to earn them, in the same period",
      "closing stock must be matched against opening stock",
    ],
    answer: 2,
    explain:
      "Matching pairs revenue earned with the costs incurred to earn it — same period, regardless of when cash moved. Pairing cash with cash is the cash basis, which is exactly what matching replaces.",
  },
  {
    id: "fa2-match-02",
    type: "mcq",
    topic: "matching",
    q: "On October 1 a firm pays ₹2,400 cash for twelve months of insurance covering October 1 to September 30. Under the matching concept, the insurance expense for the year ended March 31 is:",
    code: "Paid Oct 1 · cover runs 12 months\nYear ends Mar 31 → 6 months consumed\nExpense = 2,400 × 6/12 = ?",
    options: ["₹2,400 — that is what was paid", "₹1,200", "₹600", "₹0 — insurance is an asset"],
    answer: 1,
    explain:
      "Only the six months from October to March helped earn this year's revenue: 2,400 × 6/12 = ₹1,200. Charging the full ₹2,400 is the cash-basis trap; the unused ₹1,200 waits as prepaid insurance.",
  },
  {
    id: "fa2-match-03",
    type: "output",
    topic: "matching",
    q: "A software company receives ₹1,000 on January 1 for twelve months of service. On the accrual basis, how much of that ₹1,000 is still unearned revenue — a liability — on March 31?",
    code: "Received Jan 1 · service runs Jan–Dec\nEarned by Mar 31 = 1,000 × 3/12 = 250\nUnearned = 1,000 − 250 = ?",
    answerText: "₹750",
    explain:
      "Three months of service are delivered, so ₹250 is earned revenue; the nine months still owed make ₹750 an unearned-revenue liability. Cash basis would book all ₹1,000 on day one — matching refuses to.",
  },
  {
    id: "fa2-match-04",
    type: "mcq",
    topic: "matching",
    q: "The lecture insists that profit is measured, not received. Why?",
    options: [
      "Because profit only exists once the auditor signs the accounts",
      "Because profit is always smaller than the cash collected",
      "Because the tax department requires measurement before any receipt",
      "Because revenue earned and expenses incurred rarely coincide with cash moving in the same period — profit is a period measurement, while cash is pure timing",
    ],
    answer: 3,
    explain:
      "Credit sales earn revenue with no cash; prepaid rent is cash with no expense. Between those two clocks, only measurement can fix a period's profit — what was received is a question for the cash flow statement.",
  },
  {
    id: "fa2-match-05",
    type: "mcq",
    topic: "matching",
    q: "Stock is bought at ₹40 per kg. Replacing it today would cost ₹46 per kg. It is sold at ₹50 per kg. Under the replacement-cost lens, how much of the ₹10 profit is holding gain?",
    options: [
      "₹10 — under this lens the whole profit is holding gain",
      "₹4 — selling price minus replacement cost",
      "₹6 — replacement cost minus historical cost",
      "₹0 — holding gains are never recognised",
    ],
    answer: 2,
    explain:
      "Operating skill = 50 − 46 = ₹4 (selling above today's cost); holding gain = 46 − 40 = ₹6 (inflation while you held the stock). The traditional lens shows the same ₹10 but calls it all operating, hiding the market's contribution.",
  },
  {
    id: "fa2-match-06",
    type: "mcq",
    topic: "matching",
    q: "In March a repair firm bills clients ₹50,000 and collects ₹38,000 of it. It pays ₹21,000 of March costs in cash; another ₹6,000 of March costs stays unpaid until April. What is March's CASH-BASIS profit?",
    code: "Cash in:   38,000\nCash out:  21,000\nCash-basis profit = ?",
    options: ["₹17,000", "₹23,000", "₹11,000", "₹29,000"],
    answer: 0,
    explain:
      "Cash basis: 38,000 − 21,000 = ₹17,000. Accrual would read 50,000 − 27,000 = ₹23,000. The distractors are the classic mixings: 23,000 is the accrual figure, 29,000 pairs accrued revenue with cash expenses, 11,000 pairs cash revenue with accrued expenses.",
  },
  {
    id: "fa2-match-07",
    type: "short",
    topic: "matching",
    q: "State the cash basis and the accrual basis in one sentence each, and name the basis that carries the matching concept.",
    answerText:
      "Cash basis records revenue when cash is received and expenses when cash is paid. Accrual basis records revenue when it is earned and expenses when they are incurred, matching each period's costs against the revenue they produce. The matching concept belongs to the accrual basis.",
    explain:
      "The two clocks diverge the moment credit or prepayment enters. Every adjusting entry in the next lecture exists to force the accrual answer onto the books.",
  },

  /* ---------------- ADJUSTING ENTRIES — L17 · L19 (8) ---------------- */

  {
    id: "fa2-adjust-01",
    type: "mcq",
    topic: "adjusting",
    q: "Adjusting entries exist to…",
    options: [
      "close the books at the end of the year",
      "correct errors discovered after the trial balance is drawn",
      "bring every account up to date on the accrual basis before the statements are prepared",
      "record the cash transactions missed during the period",
    ],
    answer: 2,
    explain:
      "The trial balance records what happened; adjusting entries record what is true — the slice of each deferral and accrual that belongs to this period. Not one of them is an error-correction or a cash entry.",
  },
  {
    id: "fa2-adjust-02",
    type: "mcq",
    topic: "adjusting",
    q: "Vogue's insurance of ₹60 was paid in advance; by period end that much cover is consumed. The adjusting entry is:",
    options: [
      "Debit Prepaid Insurance ₹60; credit Insurance Expense ₹60",
      "Debit Insurance Expense ₹60; credit Prepaid Insurance ₹60",
      "Debit Insurance Expense ₹60; credit Cash ₹60",
      "Debit Cash ₹60; credit Insurance Expense ₹60",
    ],
    answer: 1,
    explain:
      "The asset has been consumed, so the asset (Prepaid Insurance) shrinks — credit — and this period's expense grows — debit. Cash moved months ago; cash never appears in an adjusting entry.",
  },
  {
    id: "fa2-adjust-03",
    type: "mcq",
    topic: "adjusting",
    q: "Vogue's Office Supplies account shows ₹3,700; the physical count finds ₹2,900 still on hand. The adjusting entry is:",
    code: "Book balance 3,700 − on hand 2,900 = consumed ?",
    options: [
      "Debit Office Supplies Expense ₹800; credit Office Supplies ₹800",
      "Debit Office Supplies Expense ₹2,900; credit Office Supplies ₹2,900",
      "Debit Office Supplies ₹800; credit Office Supplies Expense ₹800",
      "Debit Office Supplies Expense ₹3,700; credit Office Supplies ₹3,700",
    ],
    answer: 0,
    explain:
      "Consumed = 3,700 − 2,900 = ₹800 — expense up, asset down. Charging the full ₹3,700 throws this period's weight at costs that will serve future periods; charging the ₹2,900 on hand confuses what remains with what was used.",
  },
  {
    id: "fa2-adjust-04",
    type: "mcq",
    topic: "adjusting",
    q: "Vogue records depreciation on equipment of ₹50. The credit goes to Accumulated Depreciation rather than to Equipment itself because…",
    options: [
      "the equipment was originally bought on credit",
      "depreciation is a liability owed to the equipment seller",
      "accumulated depreciation is really an expense account",
      "the original cost must stay on the books while the wear-and-tear accumulates in a contra-asset beside it",
    ],
    answer: 3,
    explain:
      "Keeping cost intact and stacking the used-up portion in Accumulated Depreciation lets readers see both what the equipment cost and how much of it has served so far. Crediting Equipment directly would bury that history.",
  },
  {
    id: "fa2-adjust-05",
    type: "mcq",
    topic: "adjusting",
    q: "During the period Vogue received ₹900 in advance from clients; by period end all of that service has been delivered. The adjusting entry is:",
    options: [
      "Debit Unearned Revenue ₹900; credit Revenue from Services ₹900",
      "Debit Revenue from Services ₹900; credit Unearned Revenue ₹900",
      "Debit Cash ₹900; credit Revenue from Services ₹900",
      "Debit Unearned Revenue ₹900; credit Cash ₹900",
    ],
    answer: 0,
    explain:
      "The ₹900 was booked as a liability when cash arrived. Now the obligation is discharged, so the liability comes down (debit) and earned revenue goes up (credit). Cash appeared only in the original receipt entry, long before.",
  },
  {
    id: "fa2-adjust-06",
    type: "mcq",
    topic: "adjusting",
    q: "An employee hired on June 21 works 10 days by June 30, at a salary of ₹1,500 per month. On June 30 Vogue's adjusting entry credits Salaries Payable for:",
    code: "Monthly salary 1,500 · days worked 10 of 30\nAccrued = 1,500 × 10/30 = ?",
    options: ["₹1,500 — the month's salary", "₹750", "₹500", "₹0 — salary is paid next month"],
    answer: 2,
    explain:
      "1,500 × 10/30 = ₹500 earned in June but unpaid — expense now, liability now. Waiting for the July payday would understate June's cost, which is the exact mischief the matching concept prevents.",
  },
  {
    id: "fa2-adjust-07",
    type: "mcq",
    topic: "adjusting",
    q: "Vogue has completed ₹700 of designs it has not yet billed; meanwhile Tech Mahindra's annual report holds ₹7,677 million as deferred revenue. One is an asset, the other a liability — because:",
    options: [
      "unbilled revenue is earned but not yet billed, so it is an asset; deferred revenue is cash received for service not yet delivered, so it is a liability",
      "unbilled revenue is a liability because no invoice exists; deferred revenue is an asset because cash exists",
      "both are assets — one from work done, one from cash held",
      "both are liabilities — billing and delivery are still pending",
    ],
    answer: 1,
    explain:
      "Earned vs received decides: Vogue has earned ₹700 nobody owes paperwork for yet — claim it as unbilled revenue, an asset. Tech Mahindra has the cash but still owes the work — carry it as deferred revenue, a liability.",
  },
  {
    id: "fa2-adjust-08",
    type: "short",
    topic: "adjusting",
    q: "Name the two families of adjusting entries, with one example each, and state the one thing every adjusting entry has in common.",
    answerText:
      "Deferrals — cash moved before the event: prepaid insurance consumed, unearned revenue earned, depreciation, supplies used. Accruals — the event is complete before any cash moves: accrued salaries payable, unbilled revenue. What they share: not one adjusting entry touches Cash — cash moved in an earlier entry or will move in a later one.",
    explain:
      "Deferral = cash first, event later; accrual = event first, cash later. If an entry debits or credits Cash, it is a transaction, not an adjustment.",
  },

  /* ---------------- TRADING ACCOUNT, PART 1 — L18 (7) ---------------- */

  {
    id: "fa2-tr1-01",
    type: "mcq",
    topic: "trading1",
    q: "The trading account exists to answer which question?",
    options: [
      "Did buying and selling pay — did the sales value exceed the cost of the goods sold?",
      "Did the whole business earn a profit after every expense of the year?",
      "How much cash did the firm generate and where did it go?",
      "What does the firm own and owe on the closing date?",
    ],
    answer: 0,
    explain:
      "The trading account asks only the first of the final accounts' two questions: the result of trading itself. The whole-business verdict belongs to the P&L, cash belongs to the cash flow statement, and owns-vs-owes belongs to the balance sheet.",
  },
  {
    id: "fa2-tr1-02",
    type: "mcq",
    topic: "trading1",
    q: "Cost of goods sold equals:",
    options: [
      "net purchases + direct expenses − closing stock",
      "opening stock + net purchases + direct expenses − closing stock",
      "opening stock + net purchases − closing stock",
      "opening stock + net purchases + direct expenses + closing stock",
    ],
    answer: 1,
    explain:
      "The full ladder: goods you started with, plus goods bought net of returns, plus the cost of bringing them to sale, minus what is still on the shelf. Drop the opening stock or the direct expenses and COGS collapses; add closing stock instead of subtracting and it doubles.",
  },
  {
    id: "fa2-tr1-03",
    type: "mcq",
    topic: "trading1",
    q: "Which set of expenses belongs INSIDE the trading account as direct expenses?",
    options: [
      "Salaries of the sales team, office rent, insurance premium",
      "Interest paid, discount allowed, loss on sale of machinery",
      "Advertisement, office stationery, salesmen's commission",
      "Carriage inwards, wages for carrying goods into the godown, brokerage on purchases",
    ],
    answer: 3,
    explain:
      "Direct expenses are the costs of buying goods and bringing them to the point of sale — carriage inwards, handling wages, purchase brokerage. Everything spent on running the office and selling afterwards waits for the P&L.",
  },
  {
    id: "fa2-tr1-04",
    type: "mcq",
    topic: "trading1",
    q: "If the sales value is LESS than the cost of goods sold, the trading account shows:",
    options: ["a net loss", "a gross loss", "no result — the account merely balances to zero", "an operating profit carried down"],
    answer: 1,
    explain:
      "Gross loss — the first question got a no: buying and selling did not pay. The account still balances, with the gross loss written on the side that falls short; the second question (net result) is left to the P&L.",
  },
  {
    id: "fa2-tr1-05",
    type: "mcq",
    topic: "trading1",
    q: "Closing stock is the rare item that appears in two places. They are:",
    options: [
      "the debit side of the trading account and as a liability in the balance sheet",
      "the balance sheet only, as a fixed asset",
      "the credit side of the trading account and as an asset in the balance sheet",
      "the credit side of the trading account and as a liability in the balance sheet",
    ],
    answer: 2,
    explain:
      "Closing stock credits the trading account — unsold goods are subtracted from the cost of goods sold — and carries forward into the balance sheet as a current asset. Opening stock, by contrast, lives only on the trading account's debit side.",
  },
  {
    id: "fa2-tr1-06",
    type: "output",
    topic: "trading1",
    q: "A Delhi trader, year ended March 31: opening stock ₹8,000; purchases ₹52,000; purchases returns ₹2,000; carriage inwards ₹3,000; sales ₹80,000; sales returns ₹5,000; closing stock ₹11,000. Compute the gross profit.",
    code: "Net sales     = 80,000 − 5,000 = 75,000\nNet purchases = 52,000 − 2,000 = 50,000\nCOGS = 8,000 + 50,000 + 3,000 − 11,000 = 50,000\nGross profit = 75,000 − 50,000 = ?",
    answerText: "Gross profit ₹25,000",
    explain:
      "Two nets first, then the ladder: 8,000 + 50,000 + 3,000 − 11,000 = 50,000 of COGS, so 75,000 − 50,000 = ₹25,000. Forget the carriage inwards and you land at 28,000; forget the closing stock and you fall to 14,000 — both classic slips.",
  },
  {
    id: "fa2-tr1-07",
    type: "short",
    topic: "trading1",
    q: "State the two questions the final accounts ask, and say which of them the trading account answers.",
    answerText:
      "The final accounts ask (1) did buying and selling pay, and (2) did the whole business pay after every other expense of the period? The trading account answers the first: it compares net sales with the cost of goods sold and reports gross profit or gross loss. The P&L then answers the second.",
    explain:
      "Two questions, two statements, one leading into the other. Gross profit is only the first verdict — rent, salaries and interest still wait in the P&L.",
  },

  /* ---------------- TRADING ACCOUNT, PART 2 — L20 (7) ---------------- */

  {
    id: "fa2-tr2-01",
    type: "mcq",
    topic: "trading2",
    q: "In the T-format trading account, the two sides carry:",
    options: [
      "debit: opening stock, net purchases, direct expenses; credit: net sales and closing stock",
      "debit: net sales and closing stock; credit: opening stock, net purchases, direct expenses",
      "debit: all expenses of the year; credit: all incomes of the year",
      "debit: current assets; credit: current liabilities",
    ],
    answer: 0,
    explain:
      "Costs of the goods sit on the debit side; what the goods fetched, plus what is left unsold, sits on the credit side. It is a COGS ladder turned sideways — not a list of all expenses and incomes.",
  },
  {
    id: "fa2-tr2-02",
    type: "mcq",
    topic: "trading2",
    q: "In the T-format trading account, gross profit appears as:",
    options: [
      "the first item on the credit side, above sales",
      "a footnote printed below the account",
      "the balancing figure on the credit side, above the total",
      "the balancing figure on the debit side, above the total — the amount by which the credit side (sales plus closing stock) beats the debit side",
    ],
    answer: 3,
    explain:
      "When sales plus closing stock exceed the cost side, the shortage on the debit side is exactly the gross profit — written as Gross profit c/d so both sides agree. That is the T-format's whole trick: GP is not posted, it is discovered.",
  },
  {
    id: "fa2-tr2-03",
    type: "mcq",
    topic: "trading2",
    q: "Sales returns (returns inwards) of ₹5,000 appear in the trading account as:",
    options: [
      "a deduction from sales on the credit side",
      "an addition to purchases on the debit side",
      "a direct expense on the debit side",
      "a deduction from purchases on the debit side",
    ],
    answer: 0,
    explain:
      "Returns inwards shrink what the goods actually fetched, so they come off sales on the credit side. Returns OUTWARDS (purchase returns) are the ones that deduct from purchases — swapping the two is the classic confusion.",
  },
  {
    id: "fa2-tr2-04",
    type: "mcq",
    topic: "trading2",
    q: "Carriage of ₹4,000 was paid: ₹3,000 for bringing goods in from suppliers, ₹1,000 for delivering finished goods out to customers. In the accounts:",
    options: [
      "the whole ₹4,000 is a direct expense in the trading account",
      "₹3,000 (inwards) goes to the trading account; ₹1,000 (outwards) goes to the P&L",
      "₹1,000 goes to the trading account; ₹3,000 to the P&L",
      "the whole ₹4,000 waits in the balance sheet as a prepaid asset",
    ],
    answer: 1,
    explain:
      "Carriage INWARDS raises the cost of getting goods to sale — trading account. Carriage outwards is a selling cost of distribution — P&L. Splitting the one ₹4,000 figure by direction is exactly the trap the exam likes.",
  },
  {
    id: "fa2-tr2-05",
    type: "mcq",
    topic: "trading2",
    q: "Wages of ₹12,000 paid to workers who carry goods into the godown and get them ready for sale belong to:",
    options: [
      "the P&L as an operating expense",
      "the balance sheet as a current liability",
      "the capital account of the proprietor",
      "the debit side of the trading account as a direct expense",
    ],
    answer: 3,
    explain:
      "Wages that push goods towards sale are part of the cost of goods sold — debit side of the trading account. Only wages of the office and sales staff would drop to the P&L.",
  },
  {
    id: "fa2-tr2-06",
    type: "mcq",
    topic: "trading2",
    q: "A trader's sales were ₹90,000 and returns inwards ₹6,000. The credit side of the trading account shows net sales of:",
    options: ["₹96,000", "₹90,000 — returns are a P&L item", "₹6,000", "₹84,000"],
    answer: 3,
    explain:
      "Net sales = 90,000 − 6,000 = ₹84,000. Adding the returns back is the back-to-front slip; shunting returns to the P&L understates nothing but misstates the trading account itself.",
  },
  {
    id: "fa2-tr2-07",
    type: "output",
    topic: "trading2",
    q: "A new trader's first year: opening stock nil; purchases ₹34,000; carriage inwards ₹2,000; sales ₹46,000; closing stock ₹6,000. Using the T-format, compute the gross profit (the balancing figure).",
    code: "Dr side:  Purchases 34,000 + Carriage inwards 2,000 = 36,000\nCr side:  Sales 46,000 + Closing stock 6,000 = 52,000\nGross profit c/d = 52,000 − 36,000 = ?",
    answerText: "Gross profit ₹16,000",
    explain:
      "Credit side 52,000, debit side 36,000 — the ₹16,000 written as Gross profit c/d on the debit side makes the two sides agree. No formula was posted; the balancing figure did the work.",
  },

  /* ---------------- P&L ACCOUNT — L21 (7) ---------------- */

  {
    id: "fa2-pl-01",
    type: "mcq",
    topic: "pandl",
    q: "Which items close into the Profit & Loss account?",
    options: [
      "Purchases, sales and closing stock",
      "Opening stock, direct expenses and sales returns",
      "Gross profit brought down, operating expenses and operating incomes",
      "Cash sales, cash purchases and the bank balance",
    ],
    answer: 2,
    explain:
      "The P&L opens with gross profit b/d and then gathers every operating expense and income that is not part of the cost of goods. The trading-account crowd — stock, purchases, direct expenses — has already done its work upstairs.",
  },
  {
    id: "fa2-pl-02",
    type: "mcq",
    topic: "pandl",
    q: "Net profit, once the P&L account is complete, closes into:",
    options: [
      "the trading account of the next period",
      "the capital account — via retained earnings — feeding the balance sheet",
      "the cash flow statement's operating section",
      "the suspense account until the balance sheet agrees",
    ],
    answer: 1,
    explain:
      "Net profit is the owner's gain, so it joins capital through retained earnings — the ladder that carries the income statement into the balance sheet. Losses walk the same stair, downwards.",
  },
  {
    id: "fa2-pl-03",
    type: "mcq",
    topic: "pandl",
    q: "The lecture's statement chain runs:",
    options: [
      "balance sheet → income statement → cash flow → retained earnings",
      "retained earnings → cash flow → income statement → balance sheet",
      "income statement → retained earnings → balance sheet → cash flow",
      "cash flow → balance sheet → income statement → retained earnings",
    ],
    answer: 3,
    explain:
      "Profit is measured (income statement), it accumulates (retained earnings), it rests in the position statement (balance sheet), and the cash it failed to become is finally traced (cash flow). Each statement hands its result to the next.",
  },
  {
    id: "fa2-pl-04",
    type: "output",
    topic: "pandl",
    q: "A firm's year: gross profit ₹84,000; salaries ₹18,000; rent ₹12,000; advertisement ₹6,000; commission received ₹3,000. Compute the net profit.",
    code: "GP b/d                  84,000\nLess: Salaries   18,000\n      Rent       12,000\n      Advert.     6,000  → 36,000\nAdd: Commission received 3,000\nNet profit = ?",
    answerText: "Net profit ₹51,000",
    explain:
      "Expenses take 36,000 out of 84,000 → 48,000; the commission received is an operating INCOME, so it adds 3,000 → ₹51,000. Sign-slipping the commission is the trap; this ₹51,000 now closes into capital.",
  },
  {
    id: "fa2-pl-05",
    type: "mcq",
    topic: "pandl",
    q: "Softomation's March income statement shows net income of ₹14,800; ₹3,500 was distributed as dividends. The statement of retained earnings carries ___ into the March 31 balance sheet:",
    options: ["₹14,800", "₹11,300", "₹3,500", "₹18,300"],
    answer: 1,
    explain:
      "Retained earnings move by profit kept, not profit earned: 14,800 − 3,500 = ₹11,300. One month, and the figure has already changed shape twice — that is the Softomation lesson.",
  },
  {
    id: "fa2-pl-06",
    type: "mcq",
    topic: "pandl",
    q: "Which of these will NOT appear in the P&L account?",
    options: ["Discount allowed to customers", "Interest paid on a loan", "Carriage inwards", "Office insurance"],
    answer: 2,
    explain:
      "Carriage inwards is a direct expense — it lives in the trading account, inside the cost of goods sold. The other three are operating items that close into the P&L below the gross profit line.",
  },
  {
    id: "fa2-pl-07",
    type: "mcq",
    topic: "pandl",
    q: "A firm reports a GROSS LOSS of ₹4,000 for the year. The P&L account:",
    options: [
      "opens with the gross loss on the debit side; if operating income exceeds operating expenses it can still end in a net profit",
      "cannot be prepared — gross profit is its starting figure",
      "opens with the gross loss on the credit side",
      "automatically reports a net loss of exactly ₹4,000",
    ],
    answer: 0,
    explain:
      "Gross loss b/d is a debit opening, not a wall. A ₹9,000 commission against ₹3,000 of office expenses would swing the account to a ₹2,000 net profit. The two questions are separate verdicts.",
  },

  /* ---------------- BALANCE SHEET — L22 (7) ---------------- */

  {
    id: "fa2-bs-01",
    type: "mcq",
    topic: "balancesheet",
    q: "The balance sheet is called a photograph, not a video, because:",
    options: [
      "it captures what the firm owns and owes on one single date",
      "it films the cash flowing through the year",
      "it records every transaction of the period in order",
      "once printed it can never change",
    ],
    answer: 0,
    explain:
      "One date, one pose: assets on one side, the claims over them on the other. The video — what happened during the year — is the job of the income statement and the cash flow statement.",
  },
  {
    id: "fa2-bs-02",
    type: "mcq",
    topic: "balancesheet",
    q: "Which group is entirely CURRENT assets?",
    options: [
      "Building, machinery, furniture",
      "Cash, trade receivables, closing stock",
      "Cash, land, prepaid insurance",
      "Goodwill, stock, bank balance",
    ],
    answer: 1,
    explain:
      "Current assets are cash or due to become cash within the operating cycle — receivables and stock qualify, cash already is. Land, buildings and goodwill are held for use, not for sale, so they stay fixed.",
  },
  {
    id: "fa2-bs-03",
    type: "mcq",
    topic: "balancesheet",
    q: "Marshalling the asset side in the order of LIQUIDITY means listing assets:",
    options: [
      "by purchase year, oldest first",
      "alphabetically, for ease of reference",
      "by cost, highest first",
      "most easily convertible to cash first — cash near the top, goodwill last",
    ],
    answer: 3,
    explain:
      "Liquidity order answers how quickly each asset could become cash; permanence order runs the other way, goodwill first and cash last. Same list, opposite directions — the exam only needs you to say which way.",
  },
  {
    id: "fa2-bs-04",
    type: "mcq",
    topic: "balancesheet",
    q: "The two sides of a balance sheet must always agree because:",
    options: [
      "the accountant plugs the gap with a suspense figure every time",
      "profits always equal the cash collected in the year",
      "of the dual aspect: every rupee of assets is claimed either by outsiders (liabilities) or by the owner (capital)",
      "the same assets are deliberately listed on both sides",
    ],
    answer: 2,
    explain:
      "Assets = liabilities + capital is not a rule to obey but arithmetic that cannot fail — every resource has a source. If the sides disagree, a figure is missing or misposted, never the principle.",
  },
  {
    id: "fa2-bs-05",
    type: "mcq",
    topic: "balancesheet",
    q: "Year-end adjustments land on the balance sheet. Prepaid insurance (balance left), unearned revenue, accumulated depreciation and salaries payable appear respectively as:",
    options: [
      "current liability; current asset; addition to equipment; current asset",
      "current asset; current liability; deduction from equipment; current liability",
      "all four as current liabilities",
      "all four as current assets",
    ],
    answer: 1,
    explain:
      "Prepaid insurance is a service still owed to the firm — asset. Unearned revenue is service still owed by the firm — liability. Accumulated depreciation shrinks the equipment it belongs to; salaries payable are wages the firm owes. Each adjustment has a home on the photograph.",
  },
  {
    id: "fa2-bs-06",
    type: "mcq",
    topic: "balancesheet",
    q: "Which of these does NOT belong on a balance sheet at all?",
    options: ["Salaries payable", "Closing stock", "Rent paid for the year", "Accumulated depreciation"],
    answer: 3,
    explain:
      "Rent paid is this period's expense — it has already travelled through the trading/P&L and is gone; a photograph of position has no seat for it. Payables, stock and accumulated depreciation all describe position on the closing date.",
  },
  {
    id: "fa2-bs-07",
    type: "output",
    topic: "balancesheet",
    q: "A firm at March 31: cash ₹6,000; closing stock ₹14,000; trade receivables ₹9,000; equipment ₹25,000; trade payables ₹8,000; bank loan ₹10,000. Find the capital that makes the two sides agree.",
    code: "Assets = 6,000 + 14,000 + 9,000 + 25,000 = 54,000\nLiabilities = 8,000 + 10,000 = 18,000\nCapital = 54,000 − 18,000 = ?",
    answerText: "₹36,000",
    explain:
      "The photograph must balance: assets of 54,000 are claimed by outsiders for 18,000 and by the owner for the rest — 36,000. Finding the missing claimant is the dual aspect, worked backwards.",
  },

  /* ---------------- CASH FLOW, PART 1 — L23 (6) ---------------- */

  {
    id: "fa2-cf1-01",
    type: "mcq",
    topic: "cashflow1",
    q: "Profit and cash can move in opposite directions because:",
    options: [
      "profit is measured on the accrual clock while cash follows its own timing — credit sales, prepayments and credit purchases drive them apart",
      "in a healthy firm cash is always less than profit",
      "the cash flow statement exists to correct accounting errors",
      "dividends reduce cash but never profit, and nothing else ever does",
    ],
    answer: 0,
    explain:
      "One sale on credit lifts profit today and cash in May; one prepaid rent lifts cash out today and expense never. Two clocks, two truths — the cash flow statement exists to report the second clock.",
  },
  {
    id: "fa2-cf1-02",
    type: "mcq",
    topic: "cashflow1",
    q: "Cathay Pacific reported an HK$8.6 billion loss in a year in which it bought HK$9.2 billion of assets. The lesson the lecture draws:",
    options: [
      "the airline must have misstated its profit for the year",
      "losses should not be reported in years of heavy asset purchase",
      "accrual loss and cash movement are different measurements — heavy investing drained cash while the loss ran on the P&L clock; only the cash flow statement shows both",
      "for airlines the balance sheet replaces the income statement",
    ],
    answer: 2,
    explain:
      "Nothing was misstated: an accrual loss and HK$9.2 billion of investing outflow can live in the same year honestly. The paradox is only paradoxical until you stop expecting profit and cash to be the same number.",
  },
  {
    id: "fa2-cf1-03",
    type: "mcq",
    topic: "cashflow1",
    q: "The cash flow statement sorts every cash movement into:",
    options: [
      "operating, investing and financing activities",
      "fixed, current and contingent items",
      "revenue, capital and deferred expenditure",
      "direct, indirect and mixed methods",
    ],
    answer: 0,
    explain:
      "Operating — the day job's cash. Investing — buying and selling long-lived resources. Financing — dealings with owners and lenders. Direct and indirect are just two ways to build the operating section, not categories.",
  },
  {
    id: "fa2-cf1-04",
    type: "mcq",
    topic: "cashflow1",
    q: "Classify the cash flows: (i) purchase of machinery for cash, (ii) cash received from customers, (iii) proceeds of a share issue.",
    options: [
      "operating; investing; financing",
      "investing; operating; financing",
      "financing; operating; investing",
      "operating; financing; investing",
    ],
    answer: 1,
    explain:
      "Machinery is a long-lived resource — investing. Customers are the day job — operating. Shareholders are the owners' side — financing. Ask who the cash met, and the section names itself.",
  },
  {
    id: "fa2-cf1-05",
    type: "mcq",
    topic: "cashflow1",
    q: "Compass bought equipment worth ₹49,000 on credit. In that year's cash flow statement, this purchase:",
    options: [
      "appears under investing activities as an outflow of ₹49,000",
      "appears under financing activities",
      "does not appear — no cash moved",
      "appears as a negative adjustment inside operating activities",
    ],
    answer: 2,
    explain:
      "The statement tracks cash, and not one rupee moved — the credit appears only on the balance sheet as equipment up, payable up. Cash flow is merciless about the difference between buying and paying.",
  },
  {
    id: "fa2-cf1-06",
    type: "output",
    topic: "cashflow1",
    q: "Pioneer Limited: operating activities +₹1,52,000; investing activities −₹1,50,000; financing activities −₹60,000; opening cash ₹2,00,000. Compute the closing cash balance.",
    code: "Operating    +1,52,000\nInvesting    −1,50,000\nFinancing    −  60,000\nNet change   = −58,000\nClosing = 2,00,000 − 58,000 = ?",
    answerText: "₹1,42,000",
    explain:
      "The three activities net to a −58,000 drain, so cash walks from 2,00,000 down to ₹1,42,000. Opening cash plus net change equals closing cash — the one equation the whole statement exists to verify.",
  },

  /* ---------------- CASH FLOW, PART 2 — L25 (5) ---------------- */

  {
    id: "fa2-cf2-01",
    type: "mcq",
    topic: "cashflow2",
    q: "The DIRECT method builds the operating section from:",
    options: [
      "net profit plus non-cash, non-operating and working-capital adjustments",
      "actual operating receipts and payments — cash collected from customers, cash paid to suppliers and employees",
      "the opening and closing totals of the balance sheet",
      "the year's trial balance, adjusted for accruals",
    ],
    answer: 3,
    explain:
      "Direct follows the cash itself; indirect starts at net profit and walks it back to cash. Both routes must land on the same operating figure — the exam mainly drills the indirect walk.",
  },
  {
    id: "fa2-cf2-02",
    type: "mcq",
    topic: "cashflow2",
    q: "The indirect method's adjustments fall into exactly three families:",
    options: [
      "non-cash items, non-operating items and working-capital changes",
      "fixed assets, current assets and loans",
      "revenues, expenses and drawings",
      "operating, investing and financing activities",
    ],
    answer: 0,
    explain:
      "Add back what never was cash (depreciation), remove what was never operating (gains, interest income), and unwind the working-capital timing (receivables, inventory, payables, prepaids). Three families, no fourth.",
  },
  {
    id: "fa2-cf2-03",
    type: "output",
    topic: "cashflow2",
    q: "Jaws Photo Plus: net income ₹73,000; depreciation ₹7,000; gain on disposal of equipment ₹2,500; accounts receivable increased ₹4,000; accounts payable decreased ₹3,800. Compute net cash from operating activities (indirect method).",
    code: "Net income              73,000\n+ Depreciation           7,000\n− Gain on disposal       2,500\n− AR increase            4,000\n− AP decrease            3,800\nOperating cash = ?",
    answerText: "₹69,700",
    explain:
      "73,000 + 7,000 = 80,000; − 2,500 (gain is non-operating) = 77,500; − 4,000 (sales locked in receivables) = 73,500; − 3,800 (cash spent paying suppliers down) = ₹69,700. The payables DECREASE is deducted — that line's sign is the classic error.",
  },
  {
    id: "fa2-cf2-04",
    type: "mcq",
    topic: "cashflow2",
    q: "Under the indirect method, an INCREASE in prepaid expenses during the year is:",
    options: [
      "added to net profit — cash has been saved",
      "deducted from net profit — cash was paid ahead of the expense",
      "ignored — prepaid expenses are a non-cash item",
      "shown under financing activities",
    ],
    answer: 1,
    explain:
      "Cash left before any expense was charged, so profit flatters cash by exactly that amount — deduct it. An increase in PREPAID (asset) is a cash drain; a decrease would be added back.",
  },
  {
    id: "fa2-cf2-05a",
    type: "short",
    topic: "cashflow2",
    q: "In a sentence or two each: why is depreciation ADDED back under the indirect method, and why is a gain on sale DEDUCTED?",
    answerText:
      "Depreciation reduced profit but no cash left the firm, so it is added back to walk from accrual profit toward cash. A gain on sale lifted profit but is not operating cash — the entire sale proceeds belong to investing activities, so the non-operating gain is removed from operating.",
    explain:
      "The indirect method has one purpose: turn accrual profit into operating cash. Anything that moved profit without moving operating cash must be reversed, each in its own direction.",
  },

  /* ---------------- CASH FLOW, PART 3 — L26 (6) ---------------- */

  {
    id: "fa2-cf3-01",
    type: "mcq",
    topic: "cashflow3",
    q: "Compass Company, indirect method: inventory INCREASED ₹58,000 and accounts receivable INCREASED ₹44,000 during the year. The working-capital section of the operating build shows:",
    options: [
      "both added back — a combined ₹1,02,000 boost to operating cash",
      "both deducted — a combined ₹1,02,000 drag on operating cash",
      "inventory deducted ₹58,000, receivables added ₹44,000 — net ₹14,000 drag",
      "ignored — working-capital changes never touch the operating section",
    ],
    answer: 1,
    explain:
      "An increase in a non-cash current asset means sales and stock stayed locked on paper instead of becoming cash — deduct each. 58,000 + 44,000 = ₹1,02,000 of operating cash absorbed. That is the heart of Compass's ₹72,000 build.",
  },
  {
    id: "fa2-cf3-02",
    type: "output",
    topic: "cashflow3",
    q: "Ajay Company: profit before tax ₹4,32,000; depreciation ₹40,000; gain on sale of investments ₹20,000; inventory decreased ₹22,000; accounts receivable increased ₹1,26,000. Compute net cash from operating activities (indirect method).",
    code: "Net profit              4,32,000\n+ Depreciation             40,000\n− Gain on investments      20,000\n+ Inventory decrease       22,000\n− AR increase             1,26,000\nOperating cash = ?",
    answerText: "₹3,48,000",
    explain:
      "4,32,000 + 40,000 (never was cash) = 4,72,000; − 20,000 (never was operating) = 4,52,000; + 22,000 (stock turned into cash) = 4,74,000; − 1,26,000 (sales locked in credit) = ₹3,48,000. Ajay's walk, line by line.",
  },
  {
    id: "fa2-cf3-03",
    type: "mcq",
    topic: "cashflow3",
    q: "Sort the indirect-method adjustments into the three families: depreciation ₹50,000; gain on sale of land ₹8,000; trade payables DECREASED ₹15,000.",
    options: [
      "depreciation → non-cash; land gain → non-operating; payables decrease → working capital (deduct)",
      "depreciation → non-operating; land gain → non-cash; payables decrease → working capital (add)",
      "depreciation → working capital; land gain → non-cash; payables decrease → non-operating",
      "all three are non-cash items",
    ],
    answer: 0,
    explain:
      "Depreciation cut profit but moved no cash — non-cash, added back. The land gain sits in investing, not operating — non-operating, removed. Payables falling means cash went out to creditors — working capital, deducted. One family each, no overlap.",
  },
  {
    id: "fa2-cf3-04",
    type: "mcq",
    topic: "cashflow3",
    q: "Under the indirect method, a DECREASE in inventory during the year is:",
    options: [
      "deducted from net profit — stock left the firm unpaid",
      "added to net profit — inventory turned into sales and then into cash",
      "ignored — inventory is a non-cash item",
      "shown under financing activities",
    ],
    answer: 1,
    explain:
      "Stock that shrinks has been sold and collected — cash came in that profit alone cannot explain, so add it back. (An INCREASE in inventory is the mirror image: cash locked in stock, deducted.)",
  },
  {
    id: "fa2-cf3-05",
    type: "short",
    topic: "cashflow3",
    q: "In a sentence or two each: what does each of the three adjustment families UNDO — and what single figure do all three deliver at the bottom of Compass's operating section?",
    answerText:
      "Non-cash items undo profit cuts that moved no cash — depreciation is added back. Non-operating items undo profit lifts that belong to investing — gains and interest income are removed. Working-capital changes unwind timing: cash locked in rising receivables and inventory is deducted, cash released by falling payables-side items is added. All three deliver one figure: net cash from operating activities — for Compass, ₹72,000.",
    explain:
      "Every adjustment exists for one reason: profit was measured on the accrual clock, cash on the bank clock. The three families walk from one clock to the other and land on the operating figure.",
  },
  {
    id: "fa2-cf3-06",
    type: "mcq",
    topic: "cashflow3",
    q: "Ajay Company, profit before tax ₹4,32,000. Which set of indirect-method moves is correct?",
    options: [
      "deduct depreciation; add investment gain; deduct inventory decrease; add receivables increase",
      "add depreciation; add investment gain; add inventory increase; add receivables increase",
      "add depreciation; deduct investment gain; add inventory decrease; deduct receivables increase",
      "deduct depreciation; deduct investment gain; add receivables increase; deduct payables increase",
    ],
    answer: 2,
    explain:
      "Depreciation never was cash — add back. Investment gain was never operating — remove. Inventory decrease means stock turned into cash — add. Receivables increase means sales locked in credit — deduct. That walk takes Ajay from ₹4,32,000 to ₹3,48,000.",
  },

  /* ============================================================
     EXPANSION — +20 questions (Task 4c, bank 60 → 80)
     matching +2 · adjusting +2 · trading1 +2 · trading2 +2 ·
     pandl +2 · balancesheet +2 · cashflow1 +2 · cashflow2 +3 ·
     cashflow3 +3 — every figure computed and hand-checked.
     ============================================================ */

  /* ---------------- MATCHING — L16, added (2) ---------------- */

  {
    id: "fa2-match-08",
    type: "mcq",
    topic: "matching",
    q: "It is April. A trading firm makes credit sales of ₹60,000 (nothing collected in April) and cash sales of ₹15,000. It pays ₹28,000 of April's costs in cash; ₹9,000 more of April's costs remain unpaid. State April's accrual-basis profit and its cash-basis profit.",
    code: "Accrual: (60,000 + 15,000) − (28,000 + 9,000) = ?\nCash:         15,000 − 28,000              = ?",
    options: [
      "Accrual profit ₹38,000; cash-basis loss ₹13,000",
      "Accrual profit ₹47,000; cash-basis loss ₹13,000",
      "Accrual profit ₹38,000; cash-basis loss ₹22,000",
      "Accrual profit ₹75,000; cash-basis profit ₹15,000",
    ],
    answer: 0,
    explain:
      "Accrual: revenue 75,000 (credit sales count when earned) − costs 37,000 (unpaid costs count when incurred) = ₹38,000. Cash basis: only what moved — 15,000 − 28,000 = a ₹13,000 loss. 47,000 forgets the unpaid costs on the accrual side; 22,000 smuggles them into the cash side; 75,000 and 15,000 count revenue but never costs.",
  },
  {
    id: "fa2-match-09",
    type: "output",
    topic: "matching",
    q: "On July 1 a firm receives ₹24,000 in advance for twelve months of service running July to June. Its accounting year ends December 31. On the accrual basis, state (a) the revenue earned for the year and (b) the unearned revenue liability on December 31.",
    code: "Received Jul 1 · service runs Jul–Jun\nYear ends Dec 31 → 6 of 12 months delivered\nEarned   = 24,000 × 6/12 = ?\nUnearned = 24,000 − earned = ?",
    answerText: "Revenue earned ₹12,000; unearned revenue (liability) ₹12,000",
    explain:
      "Six months of service were delivered by December 31, so half the cash is earned revenue: 24,000 × 6/12 = ₹12,000. The other half is still owed as service — the unearned-revenue liability waits for January to June. Booking the full ₹24,000 as revenue is the cash-basis trap.",
  },

  /* ---------------- ADJUSTING — L17 · L19, added (2) ---------------- */

  {
    id: "fa2-adjust-09",
    type: "mcq",
    topic: "adjusting",
    q: "On October 1 a firm pays ₹12,000 cash for twelve months of insurance running October to September. Its year ends December 31. The adjusting entry at December 31 is:",
    code: "Cover consumed Oct + Nov + Dec = 3 of 12 months\n12,000 × 3/12 = ?",
    options: [
      "Debit Prepaid Insurance ₹3,000; credit Insurance Expense ₹3,000",
      "Debit Insurance Expense ₹12,000; credit Prepaid Insurance ₹12,000",
      "Debit Insurance Expense ₹3,000; credit Prepaid Insurance ₹3,000",
      "Debit Insurance Expense ₹9,000; credit Cash ₹9,000",
    ],
    answer: 2,
    explain:
      "Three months of cover helped earn this year's revenue: 12,000 × 3/12 = ₹3,000 of expense, with ₹9,000 remaining prepaid. Charging the full ₹12,000 is the cash-basis slip; the ₹9,000 option is the unused portion; and Cash never appears in an adjusting entry — the cash moved back on October 1.",
  },
  {
    id: "fa2-adjust-10",
    type: "output",
    topic: "adjusting",
    q: "On June 30 a firm's Office Supplies account shows a balance of ₹4,600. The physical count finds ₹1,750 of supplies still on hand. Write the adjusting entry.",
    code: "Book balance   4,600\nOn hand      − 1,750\nConsumed       = ?",
    answerText:
      "Office Supplies Expense A/c Dr. ₹2,850 · To Office Supplies A/c ₹2,850",
    explain:
      "Consumed = 4,600 − 1,750 = ₹2,850 — the used portion leaves the asset and becomes this period's expense, leaving ₹1,750 as the correct balance-sheet figure. Charging the full ₹4,600 or the on-hand ₹1,750 both misstate the split — the count exists precisely to find the difference.",
  },

  /* ---------------- TRADING 1 — L18, added (2) ---------------- */

  {
    id: "fa2-tr1-08",
    type: "mcq",
    topic: "trading1",
    q: "At year end, closing stock is valued at:",
    options: [
      "net realisable value, always — the market price rules",
      "historical cost, always — the invoice rules",
      "cost or net realisable value, whichever is LOWER — never anticipate profit",
      "cost or net realisable value, whichever is HIGHER",
    ],
    answer: 2,
    explain:
      "The convention of conservatism: stock joins the accounts at cost or net realisable value, whichever is lower. Taking the higher figure would anticipate profit the goods have not yet earned — exactly what the rule refuses to do.",
  },
  {
    id: "fa2-tr1-09",
    type: "output",
    topic: "trading1",
    q: "Year ended March 31: opening stock ₹22,000; purchases ₹1,84,000; purchases returns ₹9,000; wages ₹16,000; carriage inwards ₹7,000; sales ₹2,60,000; closing stock ₹30,000. Compute the cost of goods sold and the gross profit.",
    code: "Net purchases = 1,84,000 − 9,000 = 1,75,000\nCOGS = 22,000 + 1,75,000 + 16,000 + 7,000 − 30,000 = ?\nGP   = 2,60,000 − COGS = ?",
    answerText: "COGS ₹1,90,000; gross profit ₹70,000",
    explain:
      "Net purchases first, then the full ladder: 22,000 + 1,75,000 + 16,000 + 7,000 − 30,000 = ₹1,90,000 of COGS (wages and carriage inwards are direct expenses — they ride along). Gross profit = 2,60,000 − 1,90,000 = ₹70,000. Dropping both direct expenses lands at 93,000; forgetting the closing stock falls to 40,000 — the two classic slips.",
  },

  /* ---------------- TRADING 2 — L20, added (2) ---------------- */

  {
    id: "fa2-tr2-08",
    type: "mcq",
    topic: "trading2",
    q: "In the T-format trading account, the cost side total comes to MORE than the credit side (net sales + closing stock). What closes the account?",
    options: [
      "Gross profit c/d, written on the debit side",
      "Gross loss c/d, written on the credit side — the amount by which the cost side exceeds sales plus closing stock",
      "Gross loss c/d, written on the debit side",
      "Net loss c/d — a trading account can only end in gross profit",
    ],
    answer: 1,
    explain:
      "The short side receives the balancing figure. When the cost side is heavier, the credit side is short by exactly the gross loss — written as By Gross loss c/d so both totals agree. The account still closes; the verdict simply turned negative, and the P&L takes it from there.",
  },
  {
    id: "fa2-tr2-09",
    type: "output",
    topic: "trading2",
    q: "A trader's year: sales ₹9,50,000; sales returns ₹50,000; opening stock ₹80,000; purchases ₹4,70,000; purchases returns ₹20,000; carriage inwards ₹15,000; wages ₹35,000; closing stock ₹60,000. Using the T-format, compute the gross profit and the total of each side.",
    code: "Dr:  80,000 + (4,70,000 − 20,000) + 15,000 + 35,000 = ?\nCr:  (9,50,000 − 50,000) + 60,000                  = ?\nGross profit c/d = Cr side − Dr side = ?",
    answerText:
      "Gross profit ₹3,80,000 — both sides close at ₹9,60,000",
    explain:
      "Debit side: 80,000 + 4,50,000 + 15,000 + 35,000 = 5,80,000. Credit side: net sales 9,00,000 + closing stock 60,000 = 9,60,000. The shortage on the debit side is the gross profit: 9,60,000 − 5,80,000 = ₹3,80,000, written as Gross profit c/d — and both sides agree at ₹9,60,000. Nothing was posted; the balancing figure did the work.",
  },

  /* ---------------- P&L — L21, added (2) ---------------- */

  {
    id: "fa2-pl-08",
    type: "mcq",
    topic: "pandl",
    q: "A company begins the year with retained earnings of ₹2,20,000. During the year it earns net income of ₹85,000 and pays dividends of ₹35,000. The ending retained earnings that joins the balance sheet's equity section is:",
    code: "Beginning RE   2,20,000\n+ Net income     85,000\n− Dividends      35,000\nEnding RE      = ?",
    options: [
      "₹3,05,000 — 2,20,000 + 85,000; dividends never touch this statement",
      "₹2,70,000 — beginning + net income − dividends",
      "₹2,20,000 — the beginning balance carries forward untouched",
      "₹1,70,000 — beginning − income + dividends",
    ],
    answer: 1,
    explain:
      "The retained-earnings ladder: 2,20,000 + 85,000 − 35,000 = ₹2,70,000. Dividends are a distribution to owners, not an expense — they reduce the balance directly. The ₹2,70,000 walks into equity beside capital; the Softomation lesson at a full-year scale.",
  },
  {
    id: "fa2-pl-09",
    type: "output",
    topic: "pandl",
    q: "A firm's year closes with a GROSS LOSS of ₹6,000. Below the line: salaries ₹14,000; rent ₹9,000; discount received ₹4,500; commission received ₹8,500. Compute the net profit or net loss.",
    code: "Dr:  Gross loss 6,000 + Salaries 14,000 + Rent 9,000 = 29,000\nCr:  Discount received 4,500 + Commission 8,500      = 13,000\nNet loss = 29,000 − 13,000 = ?",
    answerText: "Net loss ₹16,000",
    explain:
      "The gross loss b/d opens on the debit side like any expense: 6,000 + 14,000 + 9,000 = 29,000 of debits against 13,000 of operating incomes — a net loss of ₹16,000. It closes into capital, downwards. The two questions are separate verdicts: the trading account's no did not stop the P&L from being prepared, and operating incomes could not save it here.",
  },

  /* ---------------- BALANCE SHEET — L22, added (2) ---------------- */

  {
    id: "fa2-bs-08",
    type: "mcq",
    topic: "balancesheet",
    q: "Classify each: bank overdraft · patents · outstanding expenses · long-term investments.",
    options: [
      "current liability · intangible asset · current liability · fixed asset",
      "current asset · intangible asset · current liability · current asset",
      "current liability · fixed asset · current liability · current asset",
      "long-term liability · intangible asset · current asset · fixed asset",
    ],
    answer: 0,
    explain:
      "Overdraft and outstanding expenses fall due within a year — current liabilities. Patents have no physical form but exclusive rights — intangible. Long-term investments are held for use and growth, not for the operating cycle — fixed. The sorter's test: will it become cash, or fall due, within a year?",
  },
  {
    id: "fa2-bs-09",
    type: "output",
    topic: "balancesheet",
    q: "A firm at March 31: machinery ₹1,20,000; closing stock ₹38,000; trade receivables ₹26,000; cash at bank ₹16,000; trade creditors ₹29,000; bank loan ₹45,000. Find the capital that makes the two sides agree.",
    code: "Assets      = 1,20,000 + 38,000 + 26,000 + 16,000 = ?\nLiabilities = 29,000 + 45,000 = 74,000\nCapital     = Assets − Liabilities = ?",
    answerText: "₹1,26,000",
    explain:
      "Assets total 2,00,000; outsiders claim 74,000 of them; the owner's claim is the remainder — 2,00,000 − 74,000 = ₹1,26,000. The photograph must balance, so the missing claimant is found by subtraction — the dual aspect, worked backwards.",
  },

  /* ---------------- CASH FLOW 1 — L23, added (2) ---------------- */

  {
    id: "fa2-cf1-07",
    type: "mcq",
    topic: "cashflow1",
    q: "Which of these counts as a cash EQUIVALENT on the cash flow statement?",
    options: [
      "Equity shares of another company — they can be sold any trading day",
      "A two-month fixed deposit — short-term, highly liquid, minimal risk of value change",
      "A one-year fixed deposit held by the firm",
      "A one-year fixed deposit purchased ten months ago — only two months remain",
    ],
    answer: 1,
    explain:
      "Equivalents are short-term, highly liquid investments readily convertible to cash with minimal risk of value change — maturities around three months from ACQUISITION. Shares are too volatile; the one-year deposits fail the maturity test, and the ten-month-old one still counts from its original acquisition date. The trick fails.",
  },
  {
    id: "fa2-cf1-08",
    type: "output",
    topic: "cashflow1",
    q: "Kaveri Textiles' year: operating activities +₹96,000; investing activities −₹1,10,000 (machinery bought ₹1,20,000, an old machine sold for ₹10,000); financing activities −₹18,000 (dividend paid). Opening cash ₹54,000. Compute the closing cash balance.",
    code: "Operating    +   96,000\nInvesting    − 1,10,000\nFinancing    −   18,000\nNet change   = − 32,000\nClosing = 54,000 − 32,000 = ?",
    answerText: "₹22,000",
    explain:
      "The three activities net to a 32,000 drain: 96,000 − 1,10,000 − 18,000 = −32,000. Cash walks from 54,000 down to ₹22,000 — and the ₹10,000 disposal is already inside the investing figure. Opening cash + net change = closing cash: the one equation the whole statement exists to verify.",
  },

  /* ---------------- CASH FLOW 2 — L25, added (3) ---------------- */

  {
    id: "fa2-cf2-06",
    type: "output",
    topic: "cashflow2",
    q: "Nandan Studios: net income ₹58,000; depreciation ₹9,000; loss on sale of furniture ₹2,000; accounts receivable DECREASED ₹5,500; accounts payable INCREASED ₹3,500. Compute net cash from operating activities (indirect method).",
    code: "Net income                  58,000\n+ Depreciation               9,000\n+ Loss on sale of furniture  2,000\n+ AR decrease                5,500\n+ AP increase                3,500\nOperating cash = ?",
    answerText: "₹78,000",
    explain:
      "58,000 + 9,000 (never was cash) = 67,000; + 2,000 (a LOSS on disposal is added back — the mirror of Jaws's gain) = 69,000; + 5,500 (receivables were collected) = 74,500; + 3,500 (expenses booked, cash kept) = ₹78,000. Every move here is an addition — the working-capital signs ran the opposite way to Jaws, and the cash beat the profit.",
  },
  {
    id: "fa2-cf2-07",
    type: "mcq",
    topic: "cashflow2",
    q: "A firm's operating section lands at a NEGATIVE figure. The correct reading is:",
    options: [
      "Impossible — a firm reporting net profit cannot show negative operating cash",
      "A sign that investing activities were too large during the year",
      "The core business spent more cash than it generated in the period — a red flag that demands investigation",
      "Proof that the accounts have been misstated",
    ],
    answer: 2,
    explain:
      "Negative operating cash means the day job consumed cash — the core is spending more than it generates. It is perfectly possible alongside a reported profit (the accrual clock and the bank clock disagree), it is not a statement of error, and investing's size is a separate section. It is a flag to investigate, not a verdict.",
  },
  {
    id: "fa2-cf2-08",
    type: "short",
    topic: "cashflow2",
    q: "State the four working-capital rules of the indirect method — current asset up, current asset down, current liability up, current liability down — with the reason for each sign.",
    answerText:
      "Current asset increase → DEDUCT: cash is locked in the asset (receivables or inventory grew). Current asset decrease → ADD: the asset turned into cash. Current liability increase → ADD: expenses were booked but the cash was kept (payables grew). Current liability decrease → DEDUCT: old bills were paid down and cash left.",
    explain:
      "Assets and liabilities mirror each other: an asset rising holds cash back, a liability rising holds cash in. Four moves, two directions — the whole working-capital section is this pair of mirrors.",
  },

  /* ---------------- CASH FLOW 3 — L26, added (3) ---------------- */

  {
    id: "fa2-cf3-07",
    type: "output",
    topic: "cashflow3",
    q: "A firm's income statement shows tax expense of ₹60,000 for the year. The tax payable account opened at ₹25,000 and closed at ₹40,000. Compute the income tax actually PAID, and say what became of the shortfall.",
    code: "Tax paid = Tax expense + Opening payable − Closing payable\n        = 60,000 + 25,000 − 40,000 = ?",
    answerText:
      "Tax paid ₹45,000; the unpaid ₹15,000 remains as the closing tax payable — a current liability, and a working-capital addition inside the operating build",
    explain:
      "60,000 + 25,000 − 40,000 = ₹45,000 of cash actually left for tax. The ₹15,000 that accrued but stayed unpaid is not tax paid — it sits as the closing payable, where it shows up as a working-capital addition instead. Booking the ₹60,000 expense as the payment is the classic slip.",
  },
  {
    id: "fa2-cf3-08",
    type: "mcq",
    topic: "cashflow3",
    q: "Indirect build: profit before tax ₹2,10,000; depreciation ₹30,000; interest income ₹10,000; inventory INCREASED ₹18,000; trade payables INCREASED ₹12,000; tax paid ₹26,000. Net cash from operating activities is:",
    code: "2,10,000 + 30,000 − 10,000 − 18,000 + 12,000 − 26,000 = ?",
    options: [
      "₹2,40,000 — only the depreciation was added back",
      "₹2,24,000 — the build before tax paid is deducted",
      "₹1,98,000 — depreciation +, interest income −, inventory ↑ −, payables ↑ +, tax paid −",
      "₹1,74,000 — the payables increase was deducted by mistake",
    ],
    answer: 2,
    explain:
      "2,10,000 + 30,000 (non-cash) = 2,40,000; − 10,000 (interest income is investing, not operating) = 2,30,000; − 18,000 (stock locked in) = 2,12,000; + 12,000 (supplier cash kept) = 2,24,000; − 26,000 (tax actually paid) = ₹1,98,000. Stopping at 2,40,000 or 2,24,000 simply dropped a family from the ladder.",
  },
  {
    id: "fa2-cf3-09",
    type: "short",
    topic: "cashflow3",
    q: "A firm buys equipment worth ₹9,00,000 — yet its cash flow statement shows nothing for it. State how that can be true, and name the section where a CASH purchase of equipment would appear.",
    answerText:
      "If the equipment was bought on credit — or acquired by issuing shares or debentures — no cash moved, and the statement, which tracks only cash, shows nothing: a non-cash transaction never appears on it. Where cash DID pay, the purchase appears under investing activities as an outflow.",
    explain:
      "The statement is merciless about buying versus paying — Compass's ₹49,000 credit purchase is the lecture's own example. The balance sheet records the asset and the payable; only a cash movement earns a line on the cash flow statement.",
  },
];
