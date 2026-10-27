/* ============================================================
   QUIZ 2 — Algorithmic Thinking in Business mock bank.
   The non-linear stretch of the course (L12 – L20), exactly as
   the deck teaches it: NO code, all logic — definitions,
   properties and small traces.

   Coverage (80 questions):
     · treefund    — tree vocabulary, depth/height/levels, the
                     four traversals with ASCII-tree traces (12)
     · treetypes   — general vs binary, full vs complete trees,
                     BST search/insert/min-max traces, AVL, heaps
                     & priority queues, real applications (12)
     · graphfund   — G = (V, E), degree, adjacency, cycles, the
                     complete-family-tree proof, formal notation (12)
     · graphtypes  — directed/undirected, in/out-degree,
                     weighted, connected, cyclic, social-network
                     readings (11)
     · traversals  — DFS (stack) vs BFS (queue), adjacency-list
                     traces, use cases (11)
     · hashing     — hash → fixed-length digest, mod-bucket
                     tables, collisions & chaining, cryptographic
                     hashes (11)
     · blockchain  — block anatomy, genesis & append-only rules,
                     hash-linked blocks, tamper cascades, Merkle
                     trees, distributed trust (11)

   House style: scenario stems, plausible distractors, a warm
   mentor explain on every question, and tiny ASCII traces as
   the signature. Difficulty ≈ 40% recall · 45% trace · 15% tricky.

   Task 4b expansion: 56 → 80 questions — 24 new ones appended at
   the end of their own sliver blocks, same mix, every trace
   hand-verified against the L12–L20 deck sections.
   ============================================================ */

import type { Quiz2Question } from "./quiz2-data";

export const ATB_QUIZ2_QUESTIONS: Quiz2Question[] = [
  /* ------------------------------------------------------------
     TREEFUND — Tree fundamentals (L12)
     ------------------------------------------------------------ */
  {
    id: "atb2-treefund-01",
    type: "mcq",
    q: "A startup stores its reporting structure as a tree: every person is a node and every 'reports-to' line is an edge. Who sits at the root of this tree?",
    options: [
      "The CEO — the one node with no parent",
      "The newest hire — the deepest leaf",
      "The manager with the most direct reports — the widest node",
      "Any node can be the root; you just pick one",
    ],
    answer: 0,
    explain:
      "The root is defined as the only node with no parent. In an org chart every employee has exactly one manager above them, except the person at the very top — the CEO. Depth or width has nothing to do with it.",
    topic: "treefund",
  },
  {
    id: "atb2-treefund-02",
    type: "mcq",
    q: "A project team is drawn as this tree. How many LEAF nodes does it have?",
    code:
      "        A\n      / | \\\n     B  C  D\n    / \\    \\\n   E   F    G\n      / \\\n     H   I",
    options: [
      "3 — only E, G and I",
      "4 — E, G, H and I",
      "5 — C, E, G, H and I",
      "8 — one leaf per edge in the tree",
    ],
    answer: 2,
    explain:
      "A leaf is any node with no children. C, E, G, H and I all end a branch — C is the classic miss because it sits near the top yet nobody hangs under it. F is NOT a leaf: H and I dangle from it. (The tree has 9 nodes and 8 edges.)",
    topic: "treefund",
  },
  {
    id: "atb2-treefund-03",
    type: "mcq",
    q: "Still looking at the same team tree: which pair of nodes are SIBLINGS?",
    code:
      "        A\n      / | \\\n     B  C  D\n    / \\    \\\n   E   F    G\n      / \\\n     H   I",
    options: [
      "E and H — they both hang on the left side of the drawing",
      "F and G — they sit at similar heights",
      "A and D — A sits right above D",
      "H and I — they share the same parent, F",
    ],
    answer: 3,
    explain:
      "Siblings are nodes with the SAME parent. H and I both have F as their parent, so they are siblings. F and G look close in the picture but have different parents (B and D) — cousins, not siblings. And A above D is a parent-child pair.",
    topic: "treefund",
  },
  {
    id: "atb2-treefund-04",
    type: "mcq",
    q: "The subtree rooted at node B contains which set of nodes?",
    code:
      "        A\n      / | \\\n     B  C  D\n    / \\    \\\n   E   F    G\n      / \\\n     H   I",
    options: [
      "Just B itself — a subtree is a single node",
      "B, E and F — B and its direct children",
      "B, E, F, H and I — B plus every node under it",
      "E, F, H and I — the descendants only, without B",
    ],
    answer: 2,
    explain:
      "The subtree rooted at X is X together with ALL of its descendants, however deep. H and I ride along beneath F, so they belong to B's subtree too. Dropping B or stopping at the grandchildren are the two standard slips.",
    topic: "treefund",
  },
  {
    id: "atb2-treefund-05",
    type: "mcq",
    q: "What is the DEPTH of node F in this tree?",
    code:
      "        A\n      / | \\\n     B  C  D\n    / \\    \\\n   E   F    G\n      / \\\n     H   I",
    options: [
      "1 — F is one step below B",
      "2 — the path A → B → F crosses two edges",
      "3 — count A, B and F on the path",
      "It depends on whether you start counting at 0 or 1",
    ],
    answer: 1,
    explain:
      "Depth counts EDGES from the root down to the node: A → B is one edge, B → F is the second, so F sits at depth 2. Counting the nodes (A, B, F = 3) is the classic trap — and note the depth measures downward; the height of F would look below F instead.",
    topic: "treefund",
  },
  {
    id: "atb2-treefund-06",
    type: "mcq",
    q: "What is the HEIGHT of this tree?",
    code:
      "        A\n      / | \\\n     B  C  D\n    / \\    \\\n   E   F    G\n      / \\\n     H   I",
    options: [
      "2 — because there are three levels of nodes",
      "3 — the longest path A → B → F → H crosses three edges",
      "4 — count A, B, F and H on the longest path",
      "8 — one per edge in the whole tree",
    ],
    answer: 1,
    explain:
      "The height of a tree is the number of edges on the longest root-to-leaf path: A → B → F → H gives 3. Counting nodes along that path gives 4 — the classic trap. Height equals the depth of the deepest leaf.",
    topic: "treefund",
  },
  {
    id: "atb2-treefund-07",
    type: "mcq",
    q: "If the root A is at level 1, which level does node H sit on?",
    code:
      "        A\n      / | \\\n     B  C  D\n    / \\    \\\n   E   F    G\n      / \\\n     H   I",
    options: ["Level 2", "Level 3", "Level 4", "Level 5"],
    answer: 2,
    explain:
      "With the root at level 1, level = depth + 1. H is at depth 3 (A → B → F → H), so it sits on level 4. Levels and depth carry the same information — one starts counting at 1, the other at 0.",
    topic: "treefund",
  },
  {
    id: "atb2-treefund-08",
    type: "mcq",
    q: "Run an IN-ORDER traversal on this binary tree. In what order are the nodes visited?",
    code:
      "      D\n     / \\\n    B   E\n   / \\   \\\n  A   C   F",
    options: [
      "D, B, A, C, E, F",
      "A, B, C, D, E, F",
      "A, C, B, F, E, D",
      "D, B, E, A, C, F",
    ],
    answer: 1,
    explain:
      "In-order = left subtree, then the root, then the right subtree: A → B → C, then D, then E → F. A happy bonus here: this tree obeys the BST ordering, so in-order walks the letters alphabetically — the reason sorted output and in-order are soulmates.",
    topic: "treefund",
  },
  {
    id: "atb2-treefund-09",
    type: "mcq",
    q: "Now run a PRE-ORDER traversal on the same tree. What is the visiting order?",
    code:
      "      D\n     / \\\n    B   E\n   / \\   \\\n  A   C   F",
    options: [
      "A, B, C, D, E, F",
      "D, B, E, A, C, F",
      "D, B, A, C, E, F",
      "A, C, B, F, E, D",
    ],
    answer: 2,
    explain:
      "Pre-order visits the root FIRST: D, then the whole left subtree (B, then A, then C), then the right subtree (E, then F). Option 1's sequence is the level-order sweep and option 3's is the post-order — three traversals, one tree, easy to tangle.",
    topic: "treefund",
  },
  {
    id: "atb2-treefund-10",
    type: "mcq",
    q: "Finally, a LEVEL-ORDER traversal of the same tree. What is the visiting order?",
    code:
      "      D\n     / \\\n    B   E\n   / \\   \\\n  A   C   F",
    options: [
      "D, B, E, A, C, F",
      "D, B, A, C, E, F",
      "A, B, C, D, E, F",
      "D, E, B, F, C, A",
    ],
    answer: 0,
    explain:
      "Level-order sweeps row by row: D on top; then B and E; then A, C, F. It is the one traversal that ignores the recursive left/right walk and instead works like BFS with a queue (option 3 is the same sweep but right-to-left — a sneaky distractor). For completeness, post-order here is A, C, B, F, E, D.",
    topic: "treefund",
  },

  {
    id: "atb2-treefund-11",
    type: "mcq",
    q: "An approval chain is drawn as this tree. What is the HEIGHT of node B?",
    code:
      "      A\n     / \\\n    B   C\n   / \\\n  D   E\n       \\\n        F",
    options: [
      "Undefined — height is defined only for leaf nodes",
      "1 — B sits one edge below the root, and height counts upward",
      "2 — the longest downward path B → E → F crosses two edges",
      "3 — the whole tree's height, which every node shares",
    ],
    answer: 2,
    explain:
      "Depth looks UP from a node to the root (B's depth is 1); height looks DOWN — the longest path from the node to a leaf, here B → E → F = 2. The tree's height is a single value for the whole structure: 3, via A → B → E → F. Mixing the three measuring sticks is the classic slip.",
    topic: "treefund",
  },
  {
    id: "atb2-treefund-12",
    type: "output",
    q: "A script walks the same approval tree in POST-ORDER (left, right, root) and prints each node the moment it visits it. What exactly does it print?",
    code:
      "      A\n     / \\\n    B   C\n   / \\\n  D   E\n       \\\n        F",
    answerText: "D, F, E, B, C, A",
    explain:
      "Post-order finishes children before parents: D first; then E's branch must end in F before E prints; B prints only after its whole subtree is done; then C; A comes last. Same tree, other orders: pre-order A, B, D, E, F, C · in-order D, B, E, F, A, C · level-order A, B, C, D, E, F.",
    topic: "treefund",
  },

  /* ------------------------------------------------------------
     TREETYPES — Tree types & applications (L14)
     ------------------------------------------------------------ */
  {
    id: "atb2-treetypes-01",
    type: "mcq",
    q: "An HR manager has three direct reports. If the org chart is stored as a tree, which statement is correct?",
    options: [
      "It must be a binary tree — three children fit fine there",
      "It must be a general tree — a binary tree allows at most two children per node",
      "It must be a heap — heaps hold any number of children",
      "Neither works — no tree allows three children under one parent",
    ],
    answer: 1,
    explain:
      "Binary means AT MOST two children per node; three direct reports breaks that rule, so the chart needs a general tree. Real org charts and file systems are general trees for exactly this reason.",
    topic: "treetypes",
  },
  {
    id: "atb2-treetypes-02",
    type: "mcq",
    q: "Which statement describes a COMPLETE binary tree?",
    options: [
      "Every node has exactly two children, or none at all",
      "All levels are completely full except possibly the last, which fills from the left",
      "Every left child holds a smaller value than its parent",
      "The tree leans left so that searching stays short",
    ],
    answer: 1,
    explain:
      "Complete = full to the second-to-last level, with the last level packed left-to-right and no gaps. Option 0 describes a FULL binary tree — the complete/full mix-up is the exam's favourite pair. Option 2 is the BST rule.",
    topic: "treetypes",
  },
  {
    id: "atb2-treetypes-03",
    type: "mcq",
    q: "Is this binary tree complete?",
    code:
      "      A\n     / \\\n    B   C\n   / \\   \\\n  D   E   F",
    options: [
      "Yes — every level except the last is full",
      "Yes — the tree has exactly six nodes",
      "No — F sits in a right slot while C's left slot is still empty, so the last level is not filled left to right",
      "No — node E should have children at this size",
    ],
    answer: 2,
    explain:
      "Levels 1 and 2 are indeed full, but the last level must pack left to right: F occupies a right-child slot while C's left slot gapes empty. Heaps depend on this left-first packing to keep themselves array-friendly — that is why completeness, not fullness, is the property they use.",
    topic: "treetypes",
  },
  {
    id: "atb2-treetypes-04",
    type: "mcq",
    q: "A product catalogue is stored as a binary search tree. You search for the item keyed 6. Which path does the search take?",
    code:
      "      8\n     / \\\n    3   10\n   / \\    \\\n  1   6    14",
    options: [
      "8 → 10 → 14 — stop: not found",
      "8 → 3 → 1 — stop: not found",
      "8 → 3 → 6 — found after two comparisons",
      "8 → 6 — jump straight to the target",
    ],
    answer: 2,
    explain:
      "The BST rule: go left if the target is smaller, right if larger. 6 < 8 → left; 6 > 3 → right; found. Each comparison discards one whole subtree — that is the searching power the ordering rule buys.",
    topic: "treetypes",
  },
  {
    id: "atb2-treetypes-05",
    type: "mcq",
    q: "Into the same catalogue tree, a new item keyed 5 arrives. Where does the BST insert put it?",
    code:
      "      8\n     / \\\n    3   10\n   / \\    \\\n  1   6    14",
    options: [
      "As the left child of 6",
      "As the right child of 3",
      "As the left child of 1",
      "As the left child of 10",
    ],
    answer: 0,
    explain:
      "Walk the search path for 5: 5 < 8 → left, 5 > 3 → right, 5 < 6 → left — and 6's left slot is empty, so the new node lands there. Inserts follow the search path and drop into the first empty slot, keeping the ordering rule intact.",
    topic: "treetypes",
  },
  {
    id: "atb2-treetypes-06",
    type: "mcq",
    q: "After many sorted insertions a BST starts to look like a skinny diagonal line. What does an AVL tree do about this?",
    options: [
      "It keeps every node's left and right subtree heights within 1, rebalancing with rotations whenever an insert breaks that",
      "It re-sorts all the values into an array after every insertion",
      "It forces the tree to become a complete binary tree after every insert",
      "It allows up to four children per node so the tree stays shallow",
    ],
    answer: 0,
    explain:
      "AVL = a BST plus a balance condition: at every node, the heights of the left and right subtrees differ by at most 1, restored by rotations. Without it, worst-case insertions degenerate the tree toward a plain list and searches crawl.",
    topic: "treetypes",
  },
  {
    id: "atb2-treetypes-07",
    type: "mcq",
    q: "An emergency room hands out wait-tokens and must always serve the smallest token number next. The tokens sit in a MIN-HEAP. Which token is at the root, and what does this make heaps perfect for?",
    options: [
      "The largest token — heaps serve the latest arrival first",
      "The smallest token — and that root-always-first property is why priority queues live on heaps",
      "The average of all tokens — heaps keep the middle value on top",
      "Whichever token was inserted first — a heap is just a queue with another name",
    ],
    answer: 1,
    explain:
      "A min-heap keeps the smallest key at the root (a max-heap flips it), so the next-to-serve item is always sitting on top. That instant access to the highest priority — with only O(log n) repair after each removal — is exactly the priority-queue contract.",
    topic: "treetypes",
  },
  {
    id: "atb2-treetypes-08",
    type: "short",
    q: "Name the tree behind each real system, one line each: (1) folders nested inside folders on a laptop, (2) a company chart where a manager may have any number of direct reports, (3) a loan process where every step is a yes/no question.",
    answerText:
      "(1) A general tree — a folder can hold many subfolders, so nodes need more than two children.\n(2) A general tree (the org chart) — the same many-children rule; it cannot be binary the moment a manager has three or more reports.\n(3) A binary (decision) tree — each yes/no question branches exactly two ways, so at most two children per node.",
    explain:
      "One piece of vocabulary drives all three answers: how many children a node may have. File systems and org charts are the textbook general trees; yes/no decision flows are the textbook binary tree.",
    topic: "treetypes",
  },

  {
    id: "atb2-treetypes-09",
    type: "mcq",
    q: "A single-elimination tournament bracket is stored as a tree: every match node has exactly two feeds (the two sides playing), players who exit are the leaves, and there are no byes. What kind of binary tree is this?",
    options: [
      "A complete binary tree — the rounds pack left to right",
      "A full binary tree — every node has exactly two children or none, never just one",
      "A binary search tree — winners sort themselves to the top",
      "A heap — the champion sits at the root by value",
    ],
    answer: 1,
    explain:
      "Full means zero-or-two children at every node — exactly a bracket's shape, where no match can have one side. Complete is the different idea of levels packed left-to-right (a bracket's last round is half-empty, so it fails that test), and a BST's left/right value rule has nothing to do with knockouts.",
    topic: "treetypes",
  },
  {
    id: "atb2-treetypes-10",
    type: "mcq",
    q: "A product catalogue sits in this binary search tree. Which node holds the SMALLEST key, and what is the rule that finds it?",
    code:
      "      50\n     /  \\\n   30    70\n   / \\   / \\\n  20 40 60 80",
    options: [
      "50 — the root is always the smallest",
      "30 — the first left child of the root",
      "20 — from the root, keep going left until you cannot",
      "80 — from the root, keep going right until you cannot",
    ],
    answer: 2,
    explain:
      "The BST ordering — left subtree < parent < right subtree — holds at EVERY node, so the minimum hides at the far end of the left spine (20) and the maximum at the far end of the right spine (80). Stopping at 30 is the classic miss: 20 still hangs under it.",
    topic: "treetypes",
  },
  {
    id: "atb2-treetypes-11",
    type: "mcq",
    q: "Into the same catalogue tree, a new item keyed 45 arrives. Where does the BST insert place it?",
    code:
      "      50\n     /  \\\n   30    70\n   / \\   / \\\n  20 40 60 80",
    options: [
      "As the left child of 40 — 45 is only five away",
      "As the right child of 40 — 45 > 40 and that slot is empty",
      "As the left child of 60 — 45 is smaller than 60",
      "In place of 40, pushing 40 down one level",
    ],
    answer: 1,
    explain:
      "Walk the search path: 45 < 50 → left; 45 > 30 → right; 45 > 40 → right — and 40's right slot is empty, so the new node lands there. Note that 60 is never visited: after 30 the path goes right, not up. Inserts follow the search path and drop into the first empty slot, keeping the ordering rule intact.",
    topic: "treetypes",
  },
  {
    id: "atb2-treetypes-12",
    type: "mcq",
    q: "A support desk ranks tickets by priority number in a MAX-HEAP. Which ticket is served next — and why is a heap, not a BST, the structure for this?",
    code:
      "        82\n       /  \\\n     61    74\n    /  \\   /\n  40   55 70",
    options: [
      "82 — a max-heap keeps its largest value at the root, so the top is always the next to serve",
      "61 — the earliest ticket inserted comes out first",
      "40 — heaps serve the smallest value first",
      "70 — the largest value sitting in the bottom row",
    ],
    answer: 0,
    explain:
      "Max-heap rule: every parent ≥ its children (a min-heap flips it), so the maximum sits on top with no left/right ordering involved — the deck's warning that a heap is NOT a BST. That instant access to the priority item, repaired in O(log n) after each removal, is why priority queues live on heaps.",
    topic: "treetypes",
  },

  /* ------------------------------------------------------------
     GRAPHFUND — Graph fundamentals (L15)
     ------------------------------------------------------------ */
  {
    id: "atb2-graphfund-01",
    type: "mcq",
    q: "A delivery app models its network as a graph written G = (V, E). What are V and E here?",
    options: [
      "V is the number of vehicles and E the number of employees",
      "V is the set of cities (the vertices) and E is the set of routes (the edges) connecting them",
      "V counts the deliveries made and E the fuel spent",
      "V is the set of vertices and E is just the same set written in shorthand",
    ],
    answer: 1,
    explain:
      "A graph is literally G = (V, E): a set of vertices plus a set of edges between them. On the delivery map, cities are the vertices and the roads between them are the edges — the model is the map, minus everything the algorithm does not need.",
    topic: "graphfund",
  },
  {
    id: "atb2-graphfund-02",
    type: "mcq",
    q: "In this road network, what is the DEGREE of city B?",
    code:
      "A ——— B\n|    /|\n|   / |\nC ——— D ——— E\n\nEdges: A–B, A–C, B–C, B–D, C–D, D–E",
    options: [
      "2 — only A and D touch it",
      "6 — the graph has six edges in total",
      "3 — the edges to A, C and D all meet at B",
      "4 — one edge to each other city",
    ],
    answer: 2,
    explain:
      "Degree counts the edges meeting at that vertex: B connects straight to A, C and D, so its degree is 3. The total number of edges (6) is a property of the whole graph — never confuse the two.",
    topic: "graphfund",
  },
  {
    id: "atb2-graphfund-03",
    type: "mcq",
    q: "In the same network, which city is NOT adjacent to C?",
    code:
      "A ——— B\n|    /|\n|   / |\nC ——— D ——— E\n\nEdges: A–B, A–C, B–C, B–D, C–D, D–E",
    options: ["A", "B", "D", "E"],
    answer: 3,
    explain:
      "Adjacent means joined directly by an edge. C touches A, B and D; E is two edges away (C → D → E), so E is reachable from C but not adjacent to it — adjacency is about the direct link, not the journey.",
    topic: "graphfund",
  },
  {
    id: "atb2-graphfund-04",
    type: "mcq",
    q: "A courier firm now wants every depot connected directly to every other depot. Why does the old tree model stop being enough here?",
    options: [
      "A tree still works — just declare the longest route the root",
      "A tree fails — direct all-pairs links create cycles and many-to-many sharing, and trees allow neither",
      "A tree works as long as every depot has a parent depot",
      "Neither trees nor graphs can model direct links between depots",
    ],
    answer: 1,
    explain:
      "A tree's strict rules are one parent per node and no cycles. All-pairs direct routes draw triangles (cycles) and share connections many-to-many — precisely the moment you step up from tree to general graph.",
    topic: "graphfund",
  },
  {
    id: "atb2-graphfund-05",
    type: "mcq",
    q: "Which set of edges forms a CYCLE in this network?",
    code:
      "A ——— B\n|    /|\n|   / |\nC ——— D ——— E\n\nEdges: A–B, A–C, B–C, B–D, C–D, D–E",
    options: [
      "A – B – C – A — three edges that loop back to the start",
      "A – B – D – E — a walk that ends at a dead end",
      "C – D – E — the bottom-right stretch",
      "There is no cycle — every city can be reached from A",
    ],
    answer: 0,
    explain:
      "A cycle returns to its starting vertex without reusing an edge: A–B, B–C, C–A closes the triangle. The walk A–B–D–E is just a path to a leaf (E has degree 1, so no loop can pass through it); and being reachable from A says nothing about cycles.",
    topic: "graphfund",
  },
  {
    id: "atb2-graphfund-06",
    type: "mcq",
    q: "A graph is DEFINITELY not a tree if it…",
    options: [
      "contains a cycle",
      "has an even number of edges",
      "has some vertex of degree 3",
      "is drawn with crossing lines",
    ],
    answer: 0,
    explain:
      "A tree is a connected graph with no cycles (n − 1 edges). Vertices of degree 3 are perfectly legal in trees — org charts have them everywhere — while drawing style and edge parity are irrelevant. The cycle is the disqualifier.",
    topic: "graphfund",
  },
  {
    id: "atb2-graphfund-07",
    type: "short",
    q: "For the five-city network with edges A–B, A–C, B–C, B–D, C–D, D–E: how many edges are there, what is the sum of all five degrees, and why do the two numbers always relate that way?",
    answerText:
      "The network has 6 edges, and the degrees add up to 12 = 2 × 6.\nEvery edge meets exactly two vertices, so adding up degrees counts each edge twice — once at each end. Hand-check: A 2 + B 3 + C 3 + D 3 + E 1 = 12.",
    explain:
      "Sum of degrees = 2 × number of edges — the handshake rule. It is a favourite one-mark question and a quick way to check any degree-counting you do on paper.",
    topic: "graphfund",
  },
  {
    id: "atb2-graphfund-08",
    type: "short",
    q: "In two sentences: why is every tree a graph, but not every graph a tree?",
    answerText:
      "A tree is just a restricted graph — connected, no cycles, exactly one path between any two nodes — so it satisfies every graph rule and then some.\nA general graph may add extra edges, cycles and many-to-many links, breaking the one-parent and no-cycle rules, so it need not be a tree.",
    explain:
      "Picture nested circles: trees sit inside the graph circle, not the other way round. Graphs are the bigger, looser set — every relaxation of the tree rules produces a graph that is no longer a tree.",
    topic: "graphfund",
  },

  {
    id: "atb2-graphfund-09",
    type: "mcq",
    q: "A team's who-works-with-whom chart is drawn as this graph. How many VERTICES and how many EDGES does it have?",
    code:
      "P ——— Q\n|    / |\n|   /  |\nR ——— S\n\nEdges: P–Q, P–R, Q–R, Q–S, R–S",
    options: [
      "4 vertices and 5 edges",
      "4 vertices and 4 edges — one of the listed lines is decoration",
      "5 vertices and 5 edges — the crossing counts as a vertex",
      "4 vertices and 10 edges — every pair could work together",
    ],
    answer: 0,
    explain:
      "Vertices are the entities: P, Q, R, S — four. Edges are the connections actually drawn: P–Q, P–R, Q–R, Q–S, R–S — five. G = (V, E) describes the whole graph with exactly those two sets; nothing else on the page counts.",
    topic: "graphfund",
  },
  {
    id: "atb2-graphfund-10",
    type: "mcq",
    q: "In the same chart, what is the DEGREE of R?",
    code:
      "P ——— Q\n|    / |\n|   /  |\nR ——— S\n\nEdges: P–Q, P–R, Q–R, Q–S, R–S",
    options: [
      "2 — only P and S touch it",
      "3 — the edges to P, Q and S all meet at R",
      "5 — the graph has five edges in total",
      "10 — the degrees of all four vertices added up",
    ],
    answer: 1,
    explain:
      "Degree counts the edges meeting AT the vertex. R's edge list: R–P, R–Q (the easy-to-miss diagonal) and R–S — degree 3. For the record the degrees are P 2, Q 3, R 3, S 2, summing to 10 = 2 × 5 edges — the handshake rule at work.",
    topic: "graphfund",
  },
  {
    id: "atb2-graphfund-11",
    type: "mcq",
    q: "The lecture's cleanest proof that trees cannot do every job: draw the COMPLETE family picture, where every child links to both a mother and a father, and spouse links join the parents. Why does this structure stop being a tree?",
    options: [
      "It doesn't — anything called a family tree is a tree by definition",
      "Because each child now has TWO parents, and exactly one parent per node is the rule that defines a tree",
      "Because a family needs a binary tree, and two parents means three nodes per family",
      "Because spouse links give the edges weights, and trees cannot be weighted",
    ],
    answer: 1,
    explain:
      "A tree node may have many children but only ONE parent — the moment a child has two parents the hierarchy rule breaks and the structure has become a graph. Add spouse and cousin links and the hierarchy dissolves entirely: trees represent hierarchy, graphs represent relationship.",
    topic: "graphfund",
  },
  {
    id: "atb2-graphfund-12",
    type: "short",
    q: "Four teammates: Amar works with Bina and Chen; Bina works with Chen; Chen works with Devi. Write the who-works-with-whom graph formally as G = (V, E), then give each vertex's degree and verify the handshake rule.",
    answerText:
      "V = {Amar, Bina, Chen, Devi}\nE = {(Amar, Bina), (Amar, Chen), (Bina, Chen), (Chen, Devi)} — 4 edges\nDegrees: Amar 2 · Bina 2 · Chen 3 · Devi 1\nHandshake check: 2 + 2 + 3 + 1 = 8 = 2 × 4 edges",
    explain:
      "A graph is completely described by its vertex set and its edge set — nothing more. Every edge has exactly two ends, so the degrees must always add to twice the edge count; if your sum disagrees, an edge got missed (usually Chen–Devi).",
    topic: "graphfund",
  },

  /* ------------------------------------------------------------
     GRAPHTYPES — Graph types (L16)
     ------------------------------------------------------------ */
  {
    id: "atb2-graphtypes-01",
    type: "mcq",
    q: "On a social app, user A follows user B, but B does not follow A. What kind of graph does the follow network form?",
    options: [
      "Undirected — every follow is mutual by definition",
      "Weighted — each follow carries a popularity score",
      "Directed — A following B does not force B to follow A, so the edges need arrows",
      "A tree — each user hangs below one influencer",
    ],
    answer: 2,
    explain:
      "One-way relationships need direction: an arrow A → B with no return arrow. If follows were undirected, A following B would automatically mean B follows A — plainly false on any real platform.",
    topic: "graphtypes",
  },
  {
    id: "atb2-graphtypes-02",
    type: "mcq",
    q: "On the same app, 'friends' must be confirmed by BOTH users before the link exists. What kind of graph is the friendship network?",
    options: [
      "Directed, with in-degree 1 for each user",
      "Weighted — friendships carry strength scores",
      "A binary tree rooted at the app itself",
      "Undirected — one shared edge represents the mutual relationship",
    ],
    answer: 3,
    explain:
      "A friendship is one relationship held by two people, so a single plain line touches both users equally — no arrows needed. Followers point one way (directed); friendships connect both ways at once (undirected).",
    topic: "graphtypes",
  },
  {
    id: "atb2-graphtypes-03",
    type: "mcq",
    q: "Messages flow through this directed network. What are the IN-DEGREE of C and the OUT-DEGREE of A?",
    code: "A → B\nA → C\nB → C\nC → D\nD → B",
    options: [
      "in-degree of C = 2, out-degree of A = 2",
      "in-degree of C = 1, out-degree of A = 1",
      "in-degree of C = 2, out-degree of A = 1",
      "in-degree of C = 0, out-degree of A = 2",
    ],
    answer: 0,
    explain:
      "In-degree counts arrows ARRIVING: C receives from A and from B, so 2. Out-degree counts arrows LEAVING: A sends to B and to C, so 2. Follow the arrowheads, not the layout of the drawing.",
    topic: "graphtypes",
  },
  {
    id: "atb2-graphtypes-04",
    type: "mcq",
    q: "A logistics graph carries travel costs on its edges. What is the cheapest total cost of a route from A to D?",
    code:
      "A ———2——— B\n|        /|\n5       1 4\n|      /  |\nC ———2——— D\n\nEdges: A–B = 2 · A–C = 5 · B–C = 1 · B–D = 4 · C–D = 2",
    options: [
      "4 — take the two cheapest-looking edges in a row",
      "5 — go A → B → C → D: 2 + 1 + 2",
      "6 — go A → B → D: 2 + 4",
      "7 — go A → C → D: 5 + 2",
    ],
    answer: 1,
    explain:
      "Weighted shortest path means smallest SUM of weights, not fewest edges. The three-edge hopscotch A → B → C → D costs 5 and beats both two-edge routes (6 and 7). This is exactly the comparison shortest-path algorithms automate.",
    topic: "graphtypes",
  },
  {
    id: "atb2-graphtypes-05",
    type: "mcq",
    q: "A regional map shows these links between five towns. What kind of graph is it?",
    code: "A ——— B        C ——— D\n\n          E",
    options: [
      "Connected — all five towns appear on the same map",
      "Disconnected — the A–B pair, the C–D pair and lonely E form separate pieces with no path between them",
      "Cyclic — the drawing loops back on itself",
      "Directed — the blank spaces act like one-way signs",
    ],
    answer: 1,
    explain:
      "Connected requires a path between EVERY pair of vertices. Here no edge ever bridges the two clusters, and E has no edges at all (an isolated vertex), so the graph is disconnected — three separate components.",
    topic: "graphtypes",
  },
  {
    id: "atb2-graphtypes-06",
    type: "mcq",
    q: "A pipeline network is currently this simple path. Adding ONE new edge would create a cycle. Which one?",
    code: "A ——— B\n      |\n      C\n      |\n      D ——— E",
    options: [
      "A new edge directly between A and E — it closes the existing path into one big loop",
      "A new edge between A and a brand-new town F",
      "A new edge between B and a new town F hanging under it",
      "No single edge can ever create a cycle in this network",
    ],
    answer: 0,
    explain:
      "A cycle appears when you add a second route between two points that are already connected. A and E already have the long path A–B–C–D–E between them, so the direct A–E edge closes a loop. New leaves like F only grow branches — never cycles.",
    topic: "graphtypes",
  },
  {
    id: "atb2-graphtypes-07",
    type: "mcq",
    q: "A metro map draws lines between stations and prints the travel time on each line. Trains run both ways, so no arrows are shown. How do we classify this graph?",
    options: [
      "Directed and unweighted",
      "Undirected and unweighted",
      "Undirected and weighted",
      "Directed and weighted — the times act like arrows",
    ],
    answer: 2,
    explain:
      "Two-way service means no arrowheads: undirected. Printed travel times mean the edges carry numbers: weighted. The classification is always this pair of questions — do the edges point, and do they carry numbers?",
    topic: "graphtypes",
  },
  {
    id: "atb2-graphtypes-08",
    type: "mcq",
    q: "A tricky one: an org chart is drawn as a DIRECTED graph where every arrow points from a manager to a direct report. What is the in-degree of any employee other than the CEO?",
    options: [
      "0 — nobody points at an employee",
      "1 — exactly one arrow arrives, from their own manager",
      "2 — one arrow from HR and one from the manager",
      "It depends on how many direct reports they have",
    ],
    answer: 1,
    explain:
      "In-degree counts incoming arrows, and every employee receives exactly one 'reports-to' arrow — from their own manager. The number of reports they manage sets their OUT-degree instead. The CEO alone has in-degree 0, which is just the root's no-parent rule in graph language.",
    topic: "graphtypes",
  },

  {
    id: "atb2-graphtypes-09",
    type: "mcq",
    q: "Approvals flow through this directed network. What are the OUT-DEGREE of P and the IN-DEGREE of Q?",
    code: "P → Q\nP → R\nQ → R\nR → S\nS → Q",
    options: [
      "out-degree of P = 2, in-degree of Q = 2",
      "out-degree of P = 1, in-degree of Q = 1",
      "out-degree of P = 2, in-degree of Q = 3",
      "out-degree of P = 0, in-degree of Q = 2",
    ],
    answer: 0,
    explain:
      "Out-degree counts arrows LEAVING: P sends to Q and to R, so 2. In-degree counts arrows ARRIVING: Q receives from P and from S, so 2 — the S → Q return edge is the easy one to miss. Follow the arrowheads, not the layout of the drawing.",
    topic: "graphtypes",
  },
  {
    id: "atb2-graphtypes-10",
    type: "mcq",
    q: "One professional networking app offers BOTH kinds of link: a 'connection' exists only once both sides accept, while a 'follow' points one way and needs no permission. How should the app's social graph be classified?",
    options: [
      "Undirected throughout — acceptance makes every link mutual",
      "Directed throughout — follows make the whole graph one-way",
      "Both kinds on one platform: connections are undirected edges, follows are directed edges",
      "Neither — mixed relationships cannot live in a single graph",
    ],
    answer: 2,
    explain:
      "The deck's LinkedIn reading: connections are mutual once accepted (undirected), follows are one-way (directed) — and nothing stops one platform carrying both. The graph properties are independent switches; real networks flip them in combination.",
    topic: "graphtypes",
  },
  {
    id: "atb2-graphtypes-11",
    type: "mcq",
    q: "Four business networks: (I) an airline map where every route also has a return flight; (II) a company's reporting-line chart; (III) a metro line running between two terminals; (IV) a three-friend triangle on a social app. Which of them are ACYCLIC?",
    options: [
      "I and II — scheduled services keep everything tidy",
      "II and III — reporting lines only descend and metro lines end at terminals, so no path can loop home",
      "III and IV — a triangle is too small to count as a cycle",
      "All four — acyclic simply means the drawing has no crossings",
    ],
    answer: 1,
    explain:
      "Cyclic means you can return to your start along a different route: return flights close loops, and the friend triangle A–B–C–A is the deck's own example — so I and IV are cyclic. Acyclic means no path returns without retracing: parent → child moves forward only, org hierarchies descend, and a metro line terminates at each end.",
    topic: "graphtypes",
  },

  /* ------------------------------------------------------------
     TRAVERSALS — Graph traversals (L17)
     ------------------------------------------------------------ */
  {
    id: "atb2-traversals-01",
    type: "mcq",
    q: "Depth-first search needs a helper data structure to remember where it has been. Which one, and why?",
    options: [
      "A queue — first discovered, first explored",
      "A stack — the last place visited is the first place it backtracks to",
      "A heap — the deepest vertex gets priority",
      "A hash table — to remember which edges were drawn",
    ],
    answer: 1,
    explain:
      "DFS dives down one path, hits a dead end, and backs up to the most RECENT fork — a last-in, first-out pattern, which is precisely a stack. Its wide-scanning twin BFS is the one powered by a queue.",
    topic: "traversals",
  },
  {
    id: "atb2-traversals-02",
    type: "mcq",
    q: "Run a BREADTH-FIRST search starting at A, taking neighbours in the order listed. What order are the vertices visited?",
    code:
      "A → B, C\nB → D\nC → D, E\nD → F\nE → F\nF → (none)",
    options: [
      "A, B, C, D, E, F",
      "A, B, D, F, C, E",
      "A, C, B, E, D, F",
      "A, B, C, E, D, F",
    ],
    answer: 0,
    explain:
      "The queue keeps BFS level by level: visit A; then A's neighbours B, C; then their new neighbours D, E (D before E, because B was queued before C); then F. Option 1's sequence is the DFS answer — the classic mix-up.",
    topic: "traversals",
  },
  {
    id: "atb2-traversals-03",
    type: "mcq",
    q: "Now run a DEPTH-FIRST search from A on the same adjacency list, again taking neighbours in listed order. What is the visiting order?",
    code:
      "A → B, C\nB → D\nC → D, E\nD → F\nE → F\nF → (none)",
    options: [
      "A, B, C, D, E, F",
      "A, C, E, F, D, B",
      "A, B, D, F, C, E",
      "A, B, F, D, C, E",
    ],
    answer: 2,
    explain:
      "DFS follows one arrow as far as it can: A → B → D → F. F is a dead end, so it backtracks — D has nothing new, B has nothing new — then tries A's next neighbour C, whose unvisited neighbour is E. Order: A, B, D, F, C, E.",
    topic: "traversals",
  },
  {
    id: "atb2-traversals-04",
    type: "mcq",
    q: "What does BFS guarantee that DFS does not?",
    options: [
      "It visits the vertices in alphabetical order",
      "It always reaches every vertex of the graph",
      "It avoids cycles because it never uses a queue",
      "In an unweighted graph, the first time it reaches a vertex is along a path with the FEWEST edges",
    ],
    answer: 3,
    explain:
      "Because BFS explores in rings of distance (1 hop, then 2, then 3), the first arrival at any vertex is via a fewest-edges route — the shortest path when all edges cost the same. DFS finds A path, not THE shortest one. And from a disconnected start, BFS misses vertices in other components just like DFS does.",
    topic: "traversals",
  },
  {
    id: "atb2-traversals-05",
    type: "mcq",
    q: "A campus app must push an announcement so that a student's direct friends receive it before friends-of-friends, and so on outward. Which traversal matches this spreading pattern?",
    options: [
      "DFS — depth is exactly what broadcasting needs",
      "BFS — its level-by-level ring is precisely 1 hop, then 2 hops, then 3",
      "Binary search — halve the audience each round",
      "None — level-order is a tree-only tool, so no graph traversal fits",
    ],
    answer: 1,
    explain:
      "BFS's queue naturally finishes everyone 1 edge away before anyone 2 edges away — rings of spread. DFS would chase one friendship chain to its end while everyone else waits. Deep exploration (maze escape) is DFS's home turf; outward broadcast is BFS's.",
    topic: "traversals",
  },
  {
    id: "atb2-traversals-06",
    type: "mcq",
    q: "During DFS, the search arrives at F and finds no unvisited neighbours. What does DFS do next?",
    code:
      "A → B, C\nB → D\nC → D, E\nD → F\nE → F\nF → (none)",
    options: [
      "It restarts from A with a fresh visited list",
      "It jumps to the alphabetically next vertex",
      "It pops back to the most recently visited vertex that still has an unexplored neighbour — the top of the stack",
      "It declares the graph disconnected and stops",
    ],
    answer: 2,
    explain:
      "The stack is the trail of breadcrumbs: popping returns DFS to the latest fork with unused options (here C, via its neighbour E). That go-deep-then-back-up rhythm is the whole personality of DFS.",
    topic: "traversals",
  },
  {
    id: "atb2-traversals-07",
    type: "mcq",
    q: "A student implements a traversal using a STACK but labels it 'BFS'. What will the traversal actually do?",
    options: [
      "It becomes DFS: a stack makes the search dive deep first, whatever the student calls it",
      "It still runs BFS — the name on the label decides the order",
      "It becomes BFS anyway, because the adjacency list is unchanged",
      "It fails — BFS refuses to run on a stack",
    ],
    answer: 0,
    explain:
      "The container decides the traversal: a queue gives level-by-level BFS, a stack gives deepest-first DFS. Renaming changes nothing — mechanics, not vocabulary, define the algorithm.",
    topic: "traversals",
  },
  {
    id: "atb2-traversals-08",
    type: "short",
    q: "List, in order, the four steps of breadth-first search from a starting vertex.",
    answerText:
      "1. Put the start vertex in the queue and mark it visited.\n2. Dequeue the vertex at the front of the queue.\n3. Visit each unvisited neighbour of that vertex, marking each and adding it to the back of the queue.\n4. Repeat from step 2 until the queue is empty.",
    explain:
      "Swap the queue for a stack and the same four-step skeleton becomes DFS — the symmetry is worth memorising. The marking in step 3 is what stops cycles from looping the search forever.",
    topic: "traversals",
  },

  {
    id: "atb2-traversals-09",
    type: "mcq",
    q: "A teammate ports the tree-traversal code to the company's friendship graph and asks: 'Which node does the traversal start from?' What is the correct guidance?",
    options: [
      "The busiest node — graphs always start at their highest-degree vertex",
      "The alphabetically first node, to keep runs reproducible",
      "Any node — a graph has no designated root; the starting node is specified in advance, and 'search' and 'traversal' are used interchangeably",
      "Graphs cannot be traversed — only trees have a starting point",
    ],
    answer: 2,
    explain:
      "A tree hands you a root and the walk begins there; a graph has no such privilege — you choose the start in advance and the traversal explores whatever is reachable from it. Both DFS and BFS run from any starting vertex, which is why graph 'traversal' and graph 'search' mean the same thing.",
    topic: "traversals",
  },
  {
    id: "atb2-traversals-10",
    type: "mcq",
    q: "Run a DEPTH-FIRST search starting at M, taking each vertex's neighbours in the order listed. What order are the vertices visited?",
    code:
      "M → N, O\nN → P\nO → P, Q\nP → R\nQ → R\nR → (none)",
    options: [
      "M, N, O, P, Q, R",
      "M, N, P, R, O, Q",
      "M, O, P, R, Q",
      "M, N, P, Q, R, O",
    ],
    answer: 1,
    explain:
      "DFS dives down one path before looking sideways: M → N → P → R; R is a dead end, so it backtracks — P has nothing new, N has nothing new — then takes M's next neighbour O, whose unvisited neighbour is Q. Order: M, N, P, R, O, Q. Option 0 is the BFS sweep; option 2 would be a valid DFS only if O were taken before N; option 3 hops to Q mid-dive instead of finishing the R branch first.",
    topic: "traversals",
  },
  {
    id: "atb2-traversals-11",
    type: "output",
    q: "Now run a BREADTH-FIRST search from M on the same adjacency list, again taking neighbours in listed order. What is the visiting order?",
    code:
      "M → N, O\nN → P\nO → P, Q\nP → R\nQ → R\nR → (none)",
    answerText: "M, N, O, P, Q, R",
    explain:
      "The queue keeps BFS in level bands: M alone; then M's neighbours N and O; then their new neighbours P and Q (P before Q, because N was queued before O); then R. For contrast, the DFS answer on this list is M, N, P, R, O, Q — the stack dives, the queue sweeps.",
    topic: "traversals",
  },

  /* ------------------------------------------------------------
     HASHING (L19)
     ------------------------------------------------------------ */
  {
    id: "atb2-hashing-01",
    type: "mcq",
    q: "What does a hash function actually do?",
    options: [
      "It encrypts data so the owner can decrypt it later with a key",
      "It compresses files so they take less storage and can be restored exactly",
      "It scrambles any input into a fixed-length digest — same input, same digest, with no practical way back",
      "It sorts keys alphabetically before they are stored",
    ],
    answer: 2,
    explain:
      "A hash takes ANY input and produces a fixed-length fingerprint: deterministic (same input → same digest) and one-way. Encryption is reversible by design and so is lossless compression — neither is hashing.",
    topic: "hashing",
  },
  {
    id: "atb2-hashing-02",
    type: "mcq",
    q: "A hash table has 5 buckets (numbered 0–4) and places each key using bucket = key % 5. Which TWO keys land in bucket 2?",
    code: "Table size: 5 buckets (0–4)\nBucket rule: bucket = key % 5\nKeys to store: 7, 12, 3, 18, 9, 21, 40",
    options: ["7 and 12", "3 and 18", "9 and 21", "12 and 40"],
    answer: 0,
    explain:
      "7 % 5 = 2 and 12 % 5 = 2, so both land in bucket 2 — a collision. (For the record: 3 and 18 collide too, but in bucket 3; 9 → 4, 21 → 1, 40 → 0.) Collisions are normal, which is why every table needs a plan for them.",
    topic: "hashing",
  },
  {
    id: "atb2-hashing-03",
    type: "mcq",
    q: "Two keys hash to the same bucket — a collision. How does CHAINING resolve it?",
    options: [
      "The newer key overwrites the older one in the bucket",
      "The bucket keeps a linked list holding every key that hashes there",
      "The older key is deleted to make room for the newer one",
      "The table refuses to store the second key and reports an error",
    ],
    answer: 1,
    explain:
      "Chaining hangs a little list off each bucket, so every colliding key is kept — nothing is lost. A lookup hashes once, then walks that bucket's short list. Overwriting or deleting would silently destroy data.",
    topic: "hashing",
  },
  {
    id: "atb2-hashing-04",
    type: "mcq",
    q: "Why is it important that a GOOD hash function spreads keys evenly across the buckets?",
    options: [
      "Spread-out keys mean fewer collisions, so each bucket's chain stays short and lookups stay fast",
      "Even spreading makes the digest impossible to reverse",
      "It lets the table shrink and save memory",
      "It sorts the keys so that ranges of them can be scanned in order",
    ],
    answer: 0,
    explain:
      "Worst case — every key hashed to one bucket — the 'table' collapses into one long list and lookups degrade to O(n). A good function spreads keys near-uniformly, keeping chains short and lookups roughly constant-time.",
    topic: "hashing",
  },
  {
    id: "atb2-hashing-05",
    type: "mcq",
    q: "You download a 2 GB installer whose publisher lists a SHA-256 digest. Your copy's digest comes out DIFFERENT. What does that tell you?",
    options: [
      "Nothing — digests differ because your computer rounds them differently",
      "Your copy was corrupted or tampered with somewhere along the way — even a one-bit change produces a completely different digest",
      "The publisher used the wrong digest length",
      "You must decrypt the file before comparing digests",
    ],
    answer: 1,
    explain:
      "Cryptographic hashes are tamper evidence: thanks to the avalanche effect, changing even one bit of the input changes the digest beyond recognition. Matching digest = same bytes; mismatched digest = do not trust the file.",
    topic: "hashing",
  },
  {
    id: "atb2-hashing-06",
    type: "mcq",
    q: "Which list correctly names the three everyday uses of CRYPTOGRAPHIC hashes from the lecture?",
    options: [
      "Password storage, download verification, and tamper evidence — all three compare digests instead of raw data",
      "Password storage only — the other two need encryption",
      "Download speeds, file compression and cache clearing",
      "Backing up files, indexing emails and sorting records",
    ],
    answer: 0,
    explain:
      "The pattern is identical in all three: store or publish the digest of the secret (or file), then re-hash and compare. The raw password or file never has to be revealed for the check to work.",
    topic: "hashing",
  },
  {
    id: "atb2-hashing-07",
    type: "short",
    q: "Why do login servers store a HASH of your password rather than the password itself?",
    answerText:
      "If the database leaks, attackers obtain useless digests — a hash cannot feasibly be reversed into the original password.\nAt login, the site simply hashes whatever you type and compares it with the stored digest, so the plain password never needs to be saved anywhere.",
    explain:
      "One-way plus fixed length makes a digest safe to store: there is no key to steal and nothing to decrypt. This is hashing as a defence — distinctly not encryption.",
    topic: "hashing",
  },

  {
    id: "atb2-hashing-08",
    type: "mcq",
    q: "A bank hashes a 5-character PIN and, separately, a full year of transaction logs running to millions of characters. What is TRUE about the two digests?",
    options: [
      "The PIN's digest is shorter — digest length grows with the input",
      "Both digests come out at exactly the same fixed length — input size is irrelevant",
      "The log's digest is longer because far more data went in",
      "Digest length is chosen at random each time the function runs",
    ],
    answer: 1,
    explain:
      "Ordinary functions flex with their input — square(x) grows with the number, uppercase(s) with the string. A hash function has one iron rule: the output is always the same fixed length. That output is the digest — five characters or five million in, same size out.",
    topic: "hashing",
  },
  {
    id: "atb2-hashing-09",
    type: "mcq",
    q: "The student records table has been hash-ified. In this setup, the roll number plays which role?",
    code:
      "Index | Key        | Value\n  1   | B26SME001  | Amar Sharma\n  2   | M26ME002   | Akbar Khan\n  3   | P25ELE0003 | Anothony Gonzalves",
    options: [
      "The index — roll numbers are the slot addresses",
      "The key — it identifies the record, and the hash of the key picks the index",
      "The value — it is the data being looked up",
      "The digest — the fixed-length output of the hash function",
    ],
    answer: 1,
    explain:
      "Hash tables store index–key–value triples: the KEY identifies the record (the roll number), the VALUE is the stored data (the student's name), and the INDEX is where hash(key) points — the hash of the key is the row address. Calling the key an 'index' swaps the two roles the lecture keeps apart.",
    topic: "hashing",
  },
  {
    id: "atb2-hashing-10",
    type: "mcq",
    q: "A valet stand numbers its slots 0–7 and parks each car by slot = plate number mod 8. Cars with plates 9, 17 and 25 roll in one after another. What happens?",
    options: [
      "They park in slots 9, 17 and 25 — one each",
      "All three compute plate mod 8 = 1, so they share slot 1 — two collisions, resolved by chaining",
      "They park in slots 1, 2 and 3 — the stand shifts each car to the next free slot",
      "They all land in slot 0 — odd plates always hash to zero",
    ],
    answer: 1,
    explain:
      "mod gives the remainder: 9 = 8·1 + 1, 17 = 8·2 + 1, 25 = 8·3 + 1 — remainder 1 every time, so slot 1 catches all three. With finitely many slots and endlessly many keys, collisions are inevitable, not errors; chaining links the late arrivals behind the first so every car stays findable.",
    topic: "hashing",
  },
  {
    id: "atb2-hashing-11",
    type: "output",
    q: "A hash table has 7 buckets (numbered 0–6) and places each key using bucket = key % 7. Compute the bucket for each key.",
    code: "Table size: 7 buckets (0–6)\nBucket rule: bucket = key % 7\nKeys to store: 8, 15, 22, 30",
    answerText: "8 → bucket 1 · 15 → bucket 1 · 22 → bucket 1 · 30 → bucket 2 — bucket 1 catches a three-way collision",
    explain:
      "Remainders after dividing by 7: 8 = 7 + 1, 15 = 14 + 1, 22 = 21 + 1, 30 = 28 + 2. Three keys share bucket 1, and chaining keeps all of them on one list; 30 lands alone in bucket 2. Same recipe as every mod table — divide, keep the remainder, store.",
    topic: "hashing",
  },

  /* ------------------------------------------------------------
     BLOCKCHAIN (L20)
     ------------------------------------------------------------ */
  {
    id: "atb2-blockchain-01",
    type: "mcq",
    q: "What exactly glues the blocks of a blockchain together into a chain?",
    options: [
      "Each block stores the HASH of the previous block, so every block is sealed to the one before it",
      "Blocks are sorted alphabetically by the names of their senders",
      "A central server keeps the blocks in a linked list",
      "Each block stores a full copy of the previous block's data, doubling in size each time",
    ],
    answer: 0,
    explain:
      "Block N carries block N−1's hash inside itself. That pointer-by-digest is the whole chaining trick: change block N−1 and its new hash no longer matches what block N stored — the break is visible.",
    topic: "blockchain",
  },
  {
    id: "atb2-blockchain-02",
    type: "mcq",
    q: "A blockchain holds five blocks. Someone edits one transaction inside block 3. What happens?",
    options: [
      "Only block 3 needs its hash recomputed, and everything is fine again",
      "Block 3's hash changes, so block 4's stored previous-hash no longer matches — and the break cascades through every later block",
      "Nothing breaks — hashes only matter in the newest block",
      "The edit spreads forward and repairs the later blocks automatically",
    ],
    answer: 1,
    explain:
      "Recomputing block 3's hash is easy — the hard part is that blocks 4 and 5 still carry the OLD hash. Every later link must be rebuilt too, and meanwhile the rest of the network can see the mismatch. That cascade is the tamper alarm.",
    topic: "blockchain",
  },
  {
    id: "atb2-blockchain-03",
    type: "mcq",
    q: "Inside a single block, what is a Merkle tree?",
    options: [
      "The chain of blocks viewed from above",
      "A tree that stores all of the network's passwords securely",
      "A tree inside the block that hashes the transactions in pairs, again and again, until one Merkle root summarises them all",
      "A backup copy of the block kept on a central server",
    ],
    answer: 2,
    explain:
      "Pair up the transaction hashes, hash each pair, repeat until a single root remains. Change any one transaction and the root changes — so the Merkle root acts as a compact tamper alarm for every transaction in the block.",
    topic: "blockchain",
  },
  {
    id: "atb2-blockchain-04",
    type: "mcq",
    q: "An attacker rewrites block 40 in their OWN copy of a blockchain ledger. Why does the tamper fail?",
    options: [
      "Their copy wins because it is the newest version",
      "Thousands of nodes hold their own copies and keep checking the hashes, so the altered chain disagrees with the honest majority and is rejected",
      "The attacker would also need to edit block 1 to be taken seriously",
      "A central authority flips the chain back at midnight",
    ],
    answer: 1,
    explain:
      "Every node keeps a full copy and continuously re-verifies the hash links. One rewritten copy is outvoted by the mass of consistent copies — trust lives in the majority of the network, not in any single machine.",
    topic: "blockchain",
  },
  {
    id: "atb2-blockchain-05",
    type: "mcq",
    q: "Blockchain is often called 'immutable'. What does that actually mean — and not mean?",
    options: [
      "Past records cannot be altered or deleted in any honest copy without breaking the hash chain and being outvoted by the network",
      "The data is encrypted so strongly that nobody can ever read it",
      "Nothing can ever be deleted anywhere — not even from your own laptop",
      "Administrators may edit old blocks as long as they sign the change",
    ],
    answer: 0,
    explain:
      "Immutability is about the LEDGER's records being effectively unchangeable, not about files vanishing from hard drives. The mechanism is the hash chain plus the majority of copies — not encryption, and not admin goodwill.",
    topic: "blockchain",
  },
  {
    id: "atb2-blockchain-06",
    type: "mcq",
    q: "A supply chain records every shipment handoff as a block. Why can a dishonest supplier not quietly change yesterday's handoff record?",
    options: [
      "They can — nobody compares copies in practice",
      "The Merkle tree re-sorts the history to hide the change",
      "They must first ask the buyer for permission, and permission is always granted",
      "Editing yesterday's block changes its hash, breaking every later block and mismatching the network's copies — the tamper becomes obvious",
    ],
    answer: 3,
    explain:
      "The same two defences as always: the hash chain makes any edit cascade visibly through later blocks, and the distributed copies make silent edits hopeless. That combination is why supply chains were such a natural blockchain story.",
    topic: "blockchain",
  },
  {
    id: "atb2-blockchain-07",
    type: "short",
    q: "In two sentences: why is blockchain called 'distributed trust'?",
    answerText:
      "Thousands of independent nodes each keep a full copy of the ledger and continuously verify the hash links, so no central authority is needed to vouch for the records.\nAny single tampered copy is outvoted by the honest majority, so strangers can trust the ledger itself without trusting each other.",
    explain:
      "The revolutionary part is not the hashing alone — banks hash things too. It is the copies-plus-chain combination that removes the need for a middleman.",
    topic: "blockchain",
  },
  {
    id: "atb2-blockchain-08",
    type: "mcq",
    q: "A block has a header and a body. What does the HEADER carry?",
    options: [
      "The full text of every earlier block, kept as a backup",
      "The transactions, sorted alphabetically by sender",
      "The hash of the previous block, the block's own hash, and the Merkle root of its transactions",
      "The network's user directory and their passwords",
    ],
    answer: 2,
    explain:
      "The header is the tamper seal: hash of the previous block (the chain glue), the block's own hash, and the Merkle root summarising every transaction inside. The body is the payload — the transactions in chronological order. Any one of those three fields breaking is enough to expose an edit.",
    topic: "blockchain",
  },
  {
    id: "atb2-blockchain-09",
    type: "mcq",
    q: "The very first block of any blockchain — the genesis block — sits at the start of the chain. What does its 'hash of previous block' field contain?",
    options: [
      "Its own hash, so the block can verify itself",
      "NULL — nothing exists before the first block, so there is no previous hash",
      "The hash of the newest block, closing the chain into a loop",
      "A seed value chosen by the network's founder",
    ],
    answer: 1,
    explain:
      "The chain starts prev = NULL, hash H1; block 2 then stores H1 as its previous-hash, block 3 stores H2, and so on — every later block is sealed to the one before it, and reading the chain runs backward from the newest block to the genesis.",
    topic: "blockchain",
  },
  {
    id: "atb2-blockchain-10",
    type: "mcq",
    q: "A supply-chain ledger recorded yesterday's shipment weight wrongly. What is the blockchain-native way to fix it?",
    options: [
      "Edit yesterday's block in place — its hash updates automatically and the chain heals",
      "Delete yesterday's block and re-add it with the correct figure",
      "Never edit or delete: append a NEW block recording the correction, and leave history exactly as it happened",
      "Ask the majority of nodes to quietly overwrite their copies",
    ],
    answer: 2,
    explain:
      "The append-only rule: something new happened → a NEW block is added, and old blocks stay exactly as they were — that is what makes the history auditable. Editing in place is impossible anyway: it would change the block's hash, break every later link and mismatch the network's copies.",
    topic: "blockchain",
  },
  {
    id: "atb2-blockchain-11",
    type: "mcq",
    q: "A block holds four transactions whose hashes are H1–H4. Following the deck's Merkle construction, how does the single Merkle root get built?",
    code: "Tx1 → H1    Tx2 → H2\nTx3 → H3    Tx4 → H4",
    options: [
      "Pair the hashes — hash H1 with H2 and H3 with H4, then hash those two results together; the one hash left is the root",
      "Hash H1, H2, H3 and H4 together in one giant pass",
      "The root is simply H1 — the first transaction anchors the block",
      "Average the four hashes and hash the average",
    ],
    answer: 0,
    explain:
      "Merkle trees hash in pairs, again and again, until a single root remains: (H1, H2) and (H3, H4) first, then the root from those two results. Edit any one transaction and its leaf hash changes, which changes its pair, which changes the root — the header no longer matches and the tampering is exposed.",
    topic: "blockchain",
  },
];
