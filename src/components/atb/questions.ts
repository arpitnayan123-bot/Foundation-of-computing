/* ============================================================
   TEST MY KNOWLEDGE — ATB question banks, one per chapter group.
   "Algorithmic Thinking in Business" is a NO-CODE course, so the
   bank sticks to mcq | output | short — write-the-output, trace
   the pseudocode, definitions and concept checks: the formats
   that actually appear on paper. Every answer follows the
   lecture blueprints and has been hand-checked.
   ============================================================ */

export type AtbExamGroup = "intro" | "props" | "linear" | "stackq" | "trees" | "hash";
export type AtbQuestionType = "mcq" | "output" | "short";

export interface AtbExamQuestion {
  id: string;
  type: AtbQuestionType;
  q: string;
  code?: string; // optional pseudocode / diagram panel shown with the question
  options?: string[]; // mcq only
  answer?: number; // mcq only — index of the correct option
  answerText?: string; // output → exact printed result; short → model answer
  explain?: string;
}

export interface AtbExamBank {
  group: AtbExamGroup;
  title: string;
  subtitle: string;
  topics: string;
  questions: AtbExamQuestion[];
}

/* ------------------------------------------------------------
   GROUP 1 — INTRO  (tea example · definitions · flowcharts ·
                     pseudocode · data types)
   ------------------------------------------------------------ */
const INTRO: AtbExamQuestion[] = [
  {
    id: "i1",
    type: "mcq",
    q: "In the tea-making example, “1 cup water, 1 cup milk, 2–3 teaspoons of loose black tea” are best described as…",
    options: ["Variables", "Data — the actual values you work with", "Functions", "Pseudocode"],
    answer: 1,
    explain:
      "The quantities are the raw ingredients the steps act on — that is DATA: the actual values you work with. Variables would be named containers holding those values, functions are reusable steps, and pseudocode is the written plan. Ingredients first, instructions second — data is what the algorithm consumes.",
  },
  {
    id: "i2",
    type: "mcq",
    q: "Which flowchart symbol represents a decision?",
    options: [
      "Rectangle — a processing step",
      "Parallelogram — input / output",
      "Diamond",
      "Rounded rectangle — start / end",
    ],
    answer: 2,
    explain:
      "The DIAMOND is the decision symbol: one question in, two labelled arrows out (Yes / No). The rectangle is a processing step, the parallelogram carries input or output, and the rounded rectangle (terminator) marks start or end. Four symbols — that is the whole flowchart alphabet.",
  },
  {
    id: "i3",
    type: "output",
    q: "This pseudocode runs. What exactly appears on screen?",
    code: "DEFINE S1, S2, S3, S4, S5 AS INTEGER\nINPUT S1, S2, S3, S4, S5          // entered: 60, 65, 70, 55, 60\nSUM = S1 + S2 + S3 + S4 + S5      // = 310\nDEFINE AVG AS FLOAT\nAVG = SUM / 5\nOUTPUT AVG\nIF AVG IS MORE THAN 60 THEN\n    OUTPUT \"FIRST CLASS\"",
    answerText: "62.0\nFIRST CLASS",
    explain:
      "SUM = 60 + 65 + 70 + 55 + 60 = 310. AVG is declared as a FLOAT, so 310 / 5 prints as 62.0 — decimal point included. Then 62.0 IS more than 60, so the condition is true and FIRST CLASS prints on the next line. Miss the .0 or the second line and the marks go with them.",
  },
  {
    id: "i4",
    type: "short",
    q: "Distinguish pseudocode from code. Two crisp sentences will do.",
    answerText:
      "Pseudocode — a code-like statement of an algorithm that is understandable in English and independent of any programming language; written for humans, it cannot be executed.\nCode — the same algorithm implemented (translated) in a real programming language such as C/C++, Java or Python, so a machine can actually run it.",
    explain:
      "Same steps, two audiences: pseudocode is the language-independent plan you read and review; code is the executable version a compiler or interpreter accepts. Naming the languages (C/C++, Java, Python) on the code side is what secures the second mark.",
  },
  {
    id: "i5",
    type: "mcq",
    q: "You must store a student’s CGPA — say 8.74. Which primitive data type fits?",
    options: ["Integer", "Boolean", "Float", "Character"],
    answer: 2,
    explain:
      "8.74 has a fractional part, so it needs a FLOAT. Integer stores whole numbers only (it would truncate to 8), Boolean stores true/false, and Character stores a single symbol. Rule of thumb: CGPA, marks with decimals, temperature, price → float.",
  },
];

/* ------------------------------------------------------------
   GROUP 2 — PROPS  (finiteness · determinism · feasibility ·
                     greedy · divide & conquer · DP)
   ------------------------------------------------------------ */
const PROPS: AtbExamQuestion[] = [
  {
    id: "p1",
    type: "mcq",
    q: "Which of these is a CORE TECHNICAL characteristic of an algorithm — not an execution-and-design one?",
    options: ["Determinism", "Feasibility", "Generality", "Finiteness"],
    answer: 3,
    explain:
      "Finiteness — the algorithm must terminate after a finite number of steps — belongs to the core technical definition (alongside input, output, definiteness, effectiveness and language independence). Determinism, feasibility and generality are execution-and-design characteristics: they describe how the algorithm behaves once you actually build and run it.",
  },
  {
    id: "p2",
    type: "mcq",
    q: "A visa officer approves an application only if the applicant “feels trustworthy”. Which property does this rule violate?",
    options: ["Finiteness", "Definiteness", "Determinism", "Language independence"],
    answer: 2,
    explain:
      "Determinism says the same input must always produce the same output, decided by clear rules. “Feels trustworthy” is subjective — two officers (or the same officer on two different days) can reach different verdicts on the identical file, so the procedure is not deterministic.",
  },
  {
    id: "p3",
    type: "mcq",
    q: "A cashier returning change always hands over the highest denomination that fits, then repeats with the remainder. This is the classic classroom example of…",
    options: ["Divide and conquer", "Dynamic programming", "Brute force", "Greedy algorithm"],
    answer: 3,
    explain:
      "GREEDY: at every step take the choice that looks best right now (the biggest coin that fits) and never look back. Divide and conquer would split the problem into independent sub-problems, dynamic programming would remember sub-results, and brute force would try every combination of coins — none of that happens at the counter.",
  },
  {
    id: "p4",
    type: "short",
    q: "State the finiteness property in one sentence, then back it up with one finite and one infinite example.",
    answerText:
      "Finiteness — an algorithm must always terminate after a countable, finite number of steps; it can never run forever.\nFinite example — counting the students in a class: start at the first bench, count each student exactly once, display the total, stop.\nInfinite example — “keep checking whether a customer has entered the store”: the loop repeats forever, even after the answer becomes YES.",
    explain:
      "The examiner wants the definition (terminates after a finite number of steps) plus the contrast pair. The store-check fails because it keeps repeating even after a decisive YES — a process with no built-in stop is just a process, not an algorithm.",
  },
  {
    id: "p5",
    type: "mcq",
    q: "A shop algorithm says: “Order more items whenever the stock looks low.” As an algorithm step, which property fails?",
    options: ["Generality", "Well-defined output", "Determinism", "Effectiveness"],
    answer: 3,
    explain:
      "EFFECTIVENESS: every step must be basic and precise enough to actually be carried out. “Looks low” is vague — there is no concrete test anyone (or any machine) can execute. Contrast: “order 50 units when stock < 10” is effective. Generality is about working over a whole class of inputs, well-defined output about producing at least one definite result, determinism about same input → same output — none of those is the failure here.",
  },
];

/* ------------------------------------------------------------
   GROUP 3 — LINEAR  (indexing · operations · 2D arrays ·
                      memory maps · insert/delete · shuffle ·
                      nested lists · singly / doubly / circular)
   ------------------------------------------------------------ */
const LINEAR: AtbExamQuestion[] = [
  {
    id: "l1",
    type: "mcq",
    q: "Sub = [60, 65, 70, 55, 60]. What does Sub[3] evaluate to?",
    options: ["70", "60", "65", "55"],
    answer: 3,
    explain:
      "Array indexing starts at 0: Sub[0] = 60, Sub[1] = 65, Sub[2] = 70, Sub[3] = 55, Sub[4] = 60. The classic trap is answering 70 — that is Sub[2]. Count boxes from zero, always.",
  },
  {
    id: "l2",
    type: "mcq",
    q: "Which array operations run instantaneously, regardless of where they happen in the array?",
    options: [
      "Search and insert",
      "Insert and search",
      "All five operations",
      "Read, update and delete at a known index",
    ],
    answer: 3,
    explain:
      "Given the index, the computer jumps straight to the address (base + index × element size), so reading, updating and deleting at a known index are direct. Searching may have to scan the whole array and inserting anywhere forces later elements to shift, so those cost time that grows with length.",
  },
  {
    id: "l3",
    type: "output",
    q: "An array holds [10, 20, 30, 40, 50]. You insert 99 at the beginning. How many elements shift, and what is the new array?",
    answerText: "5 elements shift one position to the right.\n\nNew array → [99, 10, 20, 30, 40, 50]",
    explain:
      "Inserting at the front is the worst case: every existing element — 10, 20, 30, 40, 50, i.e. all 5 — must move one slot right to free index 0 for 99. At the end, zero elements shift; in the middle, on average half. That shifting cost is exactly why linked lists exist.",
  },
  {
    id: "l4",
    type: "short",
    q: "A playlist’s length is unknown in advance and songs are added and removed constantly. Array or linked list — and why?",
    answerText:
      "Linked list.\n• No fixed size — nodes are created as songs are added, so the unknown length never matters.\n• No shifting — inserting “Song 2a” between Song 2 and Song 3 only rewires two pointers (Song 2.next → 2a and 2a.next → 3); removing a song is one rewire too.\nAn array would force a size declared up front and would shift every later song on each insert or delete.",
    explain:
      "Two keywords score the marks: DYNAMIC SIZE and NO SHIFTING (pointer rewiring). Arrays buy direct indexing at the price of fixed size plus shifting; a constantly-edited playlist wants the opposite trade-off.",
  },
  {
    id: "l5",
    type: "mcq",
    q: "In a circular linked list, the last node points to…",
    options: ["Null", "Itself", "The previous node", "The first node — the head"],
    answer: 3,
    explain:
      "Circularity removes the dead end: the last node’s next pointer points back to the head, so you can start at any node and still walk the entire list. In a plain singly linked list the last node points to Null, a doubly linked list adds a prev pointer to every node, and pointing to itself would be a one-node cycle — not a list.",
  },
  {
    id: "l6",
    type: "mcq",
    q: "Compared with an array, how are linked-list nodes stored in memory?",
    options: [
      "Contiguously — one packed block",
      "Scattered anywhere, connected by pointers",
      "In a fixed 2-D grid",
      "Inside the head node",
    ],
    answer: 1,
    explain:
      "Arrays occupy consecutive locations, so a position predicts its neighbours. A linked list's nodes can live anywhere in memory — the pointer chain defines the logical order, not physical proximity. That is why a playlist's songs can sit scattered across memory and still play in perfect sequence.",
  },
  {
    id: "l7",
    type: "output",
    q: "Head → Song 1 → Song 2 → Song 3 → Null. Song 2 is deleted. State exactly what changes.",
    answerText:
      "One pointer is rewritten: Song 1.next now holds Song 3's address.\nSong 2 stays in memory — it is simply no longer part of the active list.",
    explain:
      "Deletion in a linked list is a redirect of the previous node's pointer; nothing shifts (an array would move every element after the deleted one), and the removed node remains in memory until something overwrites it.",
  },
  {
    id: "l8",
    type: "short",
    q: "A university programme has 8 semesters × 6 courses each for the regular batch — but retakes and deferrals make the real structure vary student by student. Which structures fit each situation, and why?",
    answerText:
      "Situation 1 — fixed: 8 semesters × 6 courses → a 2-D array (Sem[i, j]). The count is known in advance, memory is used efficiently and any course is reached by direct access.\nSituation 2 — variable: semesters and courses per semester vary (retakes, deferrals) → a linked list of linked lists: each semester is a node owning its own chain of courses, so both levels grow and shrink freely without redefining anything.",
    explain:
      "The choosing rule from the lecture: fixed + known count + direct access → the array family; variable + frequent structural change → chains of chains. Name the structure AND the reason for each situation — that is where the marks sit.",
  },
];

/* ------------------------------------------------------------
   GROUP 4 — STACKQ  (LIFO · FIFO · push/pop · enqueue/dequeue ·
                      queue types)
   ------------------------------------------------------------ */
const STACKQ: AtbExamQuestion[] = [
  {
    id: "s1",
    type: "mcq",
    q: "In an editor, Undo removes the MOST RECENT change first. Which data structure powers that?",
    options: ["Queue — FIFO", "Array", "Stack — LIFO", "Priority queue"],
    answer: 2,
    explain:
      "Undo is Last-In-First-Out: every edit is pushed onto a stack and undo pops the top — the most recent change. A queue would replay the OLDEST change first, which is exactly not what undo does. Same reflex as a stack of plates: the last plate placed is the first one taken.",
  },
  {
    id: "s2",
    type: "output",
    q: "Starting from an empty stack, you push 64, 32, 53, 66, 54 (in that order), then pop twice. What do Peek() and Size() return now?",
    answerText: "Peek() → 53\nSize() → 3",
    explain:
      "The pushes build 64, 32, 53, 66, 54 with 54 on top. Pop removes 54, pop removes 66 — leaving 64, 32, 53 with 53 on top. Peek() looks at the top WITHOUT removing it → 53. Size() counts what remains → 3. Forgetting that pop deletes (while Peek does not) is the trap.",
  },
  {
    id: "s3",
    type: "mcq",
    q: "Lakhs of users hit IRCTC the minute Tatkal opens and the booking queue is already full. Another enqueue attempt is a queue…",
    options: ["Underflow", "Collision", "Overflow", "Deadlock"],
    answer: 2,
    explain:
      "OVERFLOW — inserting into a queue that is already at capacity. Underflow is the mirror error (dequeueing from an empty queue), collision belongs to hashing, and deadlock is an operating-systems concept about processes waiting on each other forever.",
  },
  {
    id: "s4",
    type: "short",
    q: "Contrast a stack and a queue: the ordering principle, one operation pair for each, and one real-life example each.",
    answerText:
      "Stack — Last-In-First-Out (LIFO): the most recently added element leaves first. Operations: push (add on top) and pop (remove from the top). Example: the Undo feature, or a stack of plates.\nQueue — First-In-First-Out (FIFO): the earliest arrival is served first. Operations: enqueue (add at the rear) and dequeue (remove from the front). Example: a popcorn line, or a printer spool.",
    explain:
      "Four marks, four facts: LIFO / FIFO, push-pop / enqueue-dequeue, one example each. Keep the queue’s two ends straight — insert at the REAR, delete from the FRONT — or the FIFO story collapses.",
  },
  {
    id: "s5",
    type: "mcq",
    q: "A hospital emergency room serves the most critical patient first — not whoever arrived first. Which queue type is this?",
    options: ["Linear queue", "Circular queue", "Priority queue", "Deque"],
    answer: 2,
    explain:
      "PRIORITY QUEUE: dequeue order is decided by priority, not arrival time — a critical patient jumps ahead of someone who came earlier with a sprain. Linear and circular queues serve strictly in arrival order; a deque merely allows insertion and removal at both ends, with no notion of priority.",
  },
];

/* ------------------------------------------------------------
   GROUP 5 — TREES  (root/leaf · traversals · depth vs height ·
                     DFS/BFS)
   ------------------------------------------------------------ */
const TREES: AtbExamQuestion[] = [
  {
    id: "t1",
    type: "mcq",
    q: "In tree vocabulary, a node with no children is called a…",
    options: ["Root", "Subtree", "Edge", "Leaf"],
    answer: 3,
    explain:
      "LEAF — a terminal node with no children. The root is the topmost node (no parent), an edge is the link between two nodes, and a subtree is any node together with all of its descendants.",
  },
  {
    id: "t2",
    type: "output",
    q: "Write the pre-order traversal of this tree.",
    code: "          A\n        /   \\\n       B     C\n      / \\\n     D   E",
    answerText: "A B D E C",
    explain:
      "Pre-order = Root → Left → Right. Visit A first, descend left to B, then B’s left child D, then B’s right child E; only then return up for A’s right subtree C. Trace it with a pencil in exactly the order the examiner reads: A · B · D · E · C.",
  },
  {
    id: "t3",
    type: "mcq",
    q: "Which traversal reads the tree level by level — top to bottom, left to right within each level?",
    options: ["Pre-order", "Level order — breadth-first", "In-order", "Post-order"],
    answer: 1,
    explain:
      "LEVEL ORDER (breadth-first) sweeps each depth before descending: A, then B C, then D E. Pre-, in- and post-order are depth-first — each dives down a whole branch before finishing the level. Breadth-first is powered by a queue; the depth-first trio by a stack (or recursion).",
  },
  {
    id: "t4",
    type: "short",
    q: "Define the depth of a node and the height of a tree. Say what you count.",
    answerText:
      "Depth of a node — the number of EDGES on the path from the root down to that node (the root itself has depth 0).\nHeight of a tree — the number of EDGES on the longest path from the root to its deepest leaf.",
    explain:
      "The mark-scoring detail: count EDGES, not nodes. The root sits at depth 0, and a lone-root tree has height 0. Count nodes instead and every answer is off by one — the classic mistake.",
  },
  {
    id: "t5",
    type: "mcq",
    q: "Trees represent hierarchy. Graphs represent…",
    options: ["Hierarchy", "Sorted orders", "Sequences", "Relationships"],
    answer: 3,
    explain:
      "A graph G = (V, E) is just vertices plus edges — no root, no parent-child rule — so it captures any-to-any RELATIONSHIPS: friendships, road networks between cities, the internet, course prerequisites. A tree is the special case where those relationships form a strict hierarchy: exactly one root and no cycles.",
  },
];

/* ------------------------------------------------------------
   GROUP 6 — HASH  (mod hashing · collisions · passwords ·
                    blockchain)
   ------------------------------------------------------------ */
const HASH: AtbExamQuestion[] = [
  {
    id: "h1",
    type: "mcq",
    q: "Using the hash function key mod 10, at which index does key 107 land?",
    options: ["10", "0", "107", "7"],
    answer: 3,
    explain:
      "107 ÷ 10 = 10 remainder 7 — mod keeps only the remainder, so 107 → index 7. Every key ending in 7 (7, 17, 107, 247…) lands on that same index, which is precisely how collisions are born.",
  },
  {
    id: "h2",
    type: "mcq",
    q: "Two different roll numbers hash to the same index. The fix shown in class is…",
    options: [
      "Delete one of the two keys",
      "Resize the entire table",
      "Ignore the second key",
      "Hash chaining — a linked list hanging off each index",
    ],
    answer: 3,
    explain:
      "CHAINING: the bucket at that index holds a linked list, and both keys simply live on that chain — no data lost, nothing re-hashed, table size unchanged. Deleting or ignoring a key loses information; resizing is expensive and does not remove collisions.",
  },
  {
    id: "h3",
    type: "output",
    q: "Keys M24SME012, P25SME002 and B26SME112 all hash to index 2. Describe bucket 2 after all three keys are inserted.",
    answerText: "Index 2 → M24SME012 → P25SME002 → B26SME112   (a linked chain, in insertion order)",
    explain:
      "All three collide at index 2, so the bucket grows a chain in insertion order: head M24SME012, then P25SME002, then B26SME112. Looking a key up means hashing it, jumping to index 2, and walking the chain comparing keys — three entries in one bucket, zero keys lost.",
  },
  {
    id: "h4",
    type: "short",
    q: "Why does a login system store the HASH of your password instead of the password itself?",
    answerText:
      "A hash is ONE-WAY — the original password cannot be recovered from the stored hash — and DETERMINISTIC — the same password always produces the same hash.\nAt login the system simply re-hashes your attempt and compares the two hashes; the real password is never stored.\nSo if the database leaks, attackers walk away with hashes, not passwords.",
    explain:
      "Two properties carry the answer: one-way (no reversing the stored value) and deterministic (re-hash and compare still works). Tie it to the risk — a leaked table exposes nothing reusable — and the full mark is yours.",
  },
  {
    id: "h5",
    type: "mcq",
    q: "Each new block in a blockchain stores…",
    options: [
      "Only its own data",
      "The hash of the previous block",
      "A pointer to the next block",
      "A full copy of the database",
    ],
    answer: 1,
    explain:
      "Each block embeds the HASH of the previous block, forming a tamper-evident chain: change a single character in any old block and its hash changes, which breaks every later block’s stored hash — tampering becomes instantly visible. That back-linking by hash (not a forward pointer, not a database copy) is what makes the chain trustworthy.",
  },
];

/* ------------------------------------------------------------ */

export const ATB_EXAM_BANKS: Record<AtbExamGroup, AtbExamBank> = {
  intro: {
    group: "intro",
    title: "Intro",
    subtitle: "tea example · algorithm vs program · flowchart symbols · pseudocode · data types",
    topics: "Tea example · definitions · flowcharts · pseudocode · data types",
    questions: INTRO,
  },
  props: {
    group: "props",
    title: "Properties",
    subtitle: "the 9 properties · core technical vs execution-and-design · greedy · divide & conquer · DP",
    topics: "Finiteness · determinism · feasibility · greedy · divide & conquer · DP",
    questions: PROPS,
  },
  linear: {
    group: "linear",
    title: "Linear DS",
    subtitle: "indexing from 0 · the five operations · 2D arrays · memory maps · insert & delete · shuffle · nested lists · singly · doubly · circular",
    topics: "Indexing · operations · 2D arrays · memory maps · insert/delete · shuffle · nested lists · singly/doubly/circular",
    questions: LINEAR,
  },
  stackq: {
    group: "stackq",
    title: "Stacks & Queues",
    subtitle: "LIFO vs FIFO · push / pop · enqueue / dequeue · overflow & underflow · queue types",
    topics: "LIFO · FIFO · push/pop · enqueue/dequeue · queue types",
    questions: STACKQ,
  },
  trees: {
    group: "trees",
    title: "Trees & Graphs",
    subtitle: "root, parent & leaf · pre / in / post / level order · depth vs height · DFS & BFS",
    topics: "Root/leaf · traversals · depth vs height · DFS/BFS",
    questions: TREES,
  },
  hash: {
    group: "hash",
    title: "Hash & Chain",
    subtitle: "tree types · mod hashing · collisions · password hashing · blockchain",
    topics: "mod hashing · collisions · passwords · blockchain",
    questions: HASH,
  },
};

export const ATB_EXAM_GROUPS: AtbExamGroup[] = ["intro", "props", "linear", "stackq", "trees", "hash"];

export const ATB_TOTAL_QUESTIONS = ATB_EXAM_GROUPS.reduce(
  (n, g) => n + ATB_EXAM_BANKS[g].questions.length,
  0
);
