/* ============================================================
   QUIZ 2 — Foundations of Computing mock bank.
   120 exam-style questions — double the official paper, so the
   mock can run twice over without repeating a question
   (official paper: 60 Q · 60 marks · 20 minutes, Sat 31 Oct,
   4:45 PM) — for the Python stretch of the course (L17–L28).
   Coverage, sliver by sliver:

     · if        (L17 · L18 · L20) — == vs =, .lower() checks,
                   and/or/not truth tables, in / not in, the falsy
                   empty list, simple if / if-else, elif ladders vs
                   independent ifs, if × lists              (30 questions)
     · dicts     (L21 · L22 · L23) — key–value create/read/change/
                   delete, KeyError & the safe .get(), .items() /
                   .keys() / .values(), sorted(), set() for unique
                   values, nesting                          (30 questions)
     · while     (L25 · L26) — input() always returns a string,
                   int() conversion, % even/odd, while mechanics,
                   flags, break, continue, moving items between
                   lists, removing all instances            (26 questions)
     · functions (L27 · L28) — def & docstrings, parameters vs
                   arguments, positional & keyword arguments,
                   defaults, return values, returning dicts,
                   optional arguments, lists & the [:] copy trick,
                   *args / **kwargs, modules & import       (34 questions)

   Mix: 86 mcq · 26 write-the-output · 8 short answer.
   Every snippet has been traced line by line before the answer
   was written; explanations teach the why in the house voice.
   ============================================================ */

import type { Quiz2Question } from "./quiz2-data";

export const FOC_QUIZ2_QUESTIONS: Quiz2Question[] = [
  /* ------------------------------------------------------------
     SLIVER 1 — IF  (L17 · L18 · L20)  ·  16 questions
     ------------------------------------------------------------ */
  {
    id: "foc2-if-01",
    type: "mcq",
    q: "Maya wants to award a bonus when a player's score reaches exactly 1000, so she writes the condition below. What happens when the program runs?",
    code: "if score = 1000:\n    print(\"Bonus unlocked\")",
    options: [
      "It behaves exactly like == — the bonus prints whenever score is 1000.",
      "Python raises a SyntaxError — a single = assigns a value; only == can test for equality.",
      "The condition is always False, so the bonus never prints.",
      "The condition is always True, so the bonus prints every time.",
    ],
    answer: 1,
    explain:
      "= stores a value into a variable; == asks the question 'are these two values equal?'. A single equals sign inside an if condition is one of the most common SyntaxErrors in Python — and a favourite exam trap.",
    topic: "if",
  },
  {
    id: "foc2-if-02",
    type: "mcq",
    q: "A login screen must treat \"Priya\", \"PRIYA\" and \"priya\" as the same username. Which test is case-insensitive?",
    options: [
      "if name == \"priya\":",
      "if name == name.lower():",
      "if lower(name) == \"priya\":",
      "if name.lower() == \"priya\":",
    ],
    answer: 3,
    explain:
      ".lower() converts the value on its left to lowercase before the comparison runs, so every capitalisation matches \"priya\". Option 2 only checks whether name is ALREADY lowercase — it would reject \"Priya\".",
    topic: "if",
  },
  {
    id: "foc2-if-03",
    type: "output",
    q: "Maya's access check combines three tests. Write the exact output.",
    code: "age = 15\nhas_ticket = True\n\nprint(age >= 12 and has_ticket)\nprint(age >= 16 or has_ticket)\nprint(not has_ticket)",
    answerText: "True\nTrue\nFalse",
    explain:
      "and needs BOTH sides True: 15 >= 12 is True and has_ticket is True, so the first line prints True. or needs just ONE True side: 15 >= 16 is False but has_ticket is True, so the second also prints True. not flips True into False.",
    topic: "if",
  },
  {
    id: "foc2-if-04",
    type: "mcq",
    q: "The kitchen currently holds toppings = [\"paneer\", \"olives\", \"corn\"]. Which of these expressions evaluates to False?",
    options: [
      "\"olives\" not in toppings",
      "\"olives\" in toppings",
      "\"corn\" in toppings",
      "\"Paneer\" not in toppings",
    ],
    answer: 0,
    explain:
      "\"olives\" IS in the list, so claiming it is not in the toppings is False. Membership is also case-sensitive: \"Paneer\" with a capital P is a different string from \"paneer\", so the last option's not in test is actually True.",
    topic: "if",
  },
  {
    id: "foc2-if-05",
    type: "output",
    q: "Dev checks his shopping cart before checkout. Write the exact output.",
    code: "cart = []\n\nif cart:\n    print(\"Cart has items\")\nelse:\n    print(\"Cart is empty\")\n\nprint(len(cart) == 0)",
    answerText: "Cart is empty\nTrue",
    explain:
      "An empty list is falsy — Python reads a bare list name in a condition as False, so the else branch runs. len([]) is 0, so the comparison prints True. This is the lecture's favourite trick for 'do I even have anything to work with?'.",
    topic: "if",
  },
  {
    id: "foc2-if-06",
    type: "mcq",
    q: "A cinema prices tickets with the ladder below. What does it print for a 12-year-old?",
    code: "age = 12\n\nif age < 4:\n    price = 0\nelif age < 18:\n    price = 25\nelse:\n    price = 40\n\nprint(price)",
    options: ["0", "25", "40", "SyntaxError"],
    answer: 1,
    explain:
      "The ladder stops at the FIRST true test. age < 4 fails, but age < 18 succeeds for 12, so price becomes 25 and the else is never even looked at.",
    topic: "if",
  },
  {
    id: "foc2-if-07",
    type: "mcq",
    q: "Ishaan reorders his grading ladder so the easier tests come first. His score is 92. What does it print?",
    code: "score = 92\n\nif score >= 70:\n    grade = \"C\"\nelif score >= 80:\n    grade = \"B\"\nelif score >= 90:\n    grade = \"A\"\nelse:\n    grade = \"F\"\n\nprint(grade)",
    options: [
      "A — every true test runs, and the last one wins",
      "B — the middle test matches the score best",
      "C — the ladder stops at the first true test, so the 90+ test is never reached",
      "F — the ladder resets grade after each elif",
    ],
    answer: 2,
    explain:
      "An elif ladder is a single road with exits: the first true test wins and everything after it is skipped. 92 >= 70 is True immediately, so grade is \"C\". Order your tests from most specific to least.",
    topic: "if",
  },
  {
    id: "foc2-if-08",
    type: "mcq",
    q: "The pizzeria adds every topping the customer asked for, using three INDEPENDENT ifs. How many lines does this program print?",
    code: "requested = [\"mushrooms\", \"extra cheese\"]\n\nif \"mushrooms\" in requested:\n    print(\"Adding mushrooms\")\nif \"pepperoni\" in requested:\n    print(\"Adding pepperoni\")\nif \"extra cheese\" in requested:\n    print(\"Adding extra cheese\")\nprint(\"Finished\")",
    options: ["1", "2", "3", "4"],
    answer: 2,
    explain:
      "Independent ifs are each tested on their own, so mushrooms and extra cheese both print — and Finished always prints. That is 3 lines. With an elif ladder, only the first matching branch would run, giving 2.",
    topic: "if",
  },
  {
    id: "foc2-if-09",
    type: "output",
    q: "The kitchen checks what customers requested against what is actually available. Write the exact output.",
    code: "available = [\"mushrooms\", \"olives\", \"corn\"]\nrequested = [\"mushrooms\", \"fries\"]\n\nfor item in requested:\n    if item in available:\n        print(\"Adding \" + item + \".\")\n    else:\n        print(\"Sorry, we don't have \" + item + \".\")",
    answerText: "Adding mushrooms.\nSorry, we don't have fries.",
    explain:
      "For each requested item, the membership test against available decides which branch prints. mushrooms is in stock; fries is not — two lists checked against each other, one item at a time.",
    topic: "if",
  },
  {
    id: "foc2-if-10",
    type: "mcq",
    q: "Logic drill: for which values of a and b is the condition not (a and b) False?",
    options: [
      "a is False and b is True",
      "a is False and b is False",
      "a is True and b is True",
      "a is True and b is False",
    ],
    answer: 2,
    explain:
      "a and b is True only when both sides are True — and not True is False. Every other combination makes (a and b) False, so the not flips it around to True.",
    topic: "if",
  },
  {
    id: "foc2-if-11",
    type: "mcq",
    q: "A bouncer must admit everyone who is 18 or older — including someone who is exactly 18. Which condition is correct?",
    options: ["if age > 18:", "if age <= 18:", "if age = 18:", "if age >= 18:"],
    answer: 3,
    explain:
      "age > 18 quietly rejects the boundary case 18 — the classic off-by-one bug. >= 18 includes it. In words, 'or older' always translates to >= in symbols.",
    topic: "if",
  },
  {
    id: "foc2-if-12",
    type: "mcq",
    q: "A theatre gives free entry to children under 4 and seniors over 65. Riya writes the condition below. What's wrong?",
    code: "if age < 4 and age > 65:\n    print(\"Free entry\")",
    options: [
      "The condition can never be True — no one is under 4 AND over 65 at the same time; the two groups need or.",
      "Nothing — Python evaluates both ranges correctly.",
      "and only works on numbers, not on comparisons.",
      "It should be written with & instead — the word and is not real Python.",
    ],
    answer: 0,
    explain:
      "and demands both tests be True, but a single age cannot be simultaneously less than 4 and greater than 65 — the branch is dead code. When EITHER group qualifies, use or.",
    topic: "if",
  },
  {
    id: "foc2-if-13",
    type: "mcq",
    q: "Maya tests her confirmation step by running the snippet below. Which line prints?",
    code: "answer = \"YES\"\n\nif answer.lower() == \"yes\":\n    print(\"Confirmed\")\nelse:\n    print(\"Denied\")",
    options: [
      "Denied — \"YES\" does not equal \"yes\"",
      "Confirmed — .lower() tames the capitals before comparing",
      "Nothing — the condition raises a KeyError",
      "Both lines print",
    ],
    answer: 1,
    explain:
      "answer.lower() turns \"YES\" into \"yes\" before the == runs, so the test succeeds. Without .lower() the comparison would be case-sensitive and Denied would print — a very real-world bug.",
    topic: "if",
  },
  {
    id: "foc2-if-14",
    type: "short",
    q: "Your pizza code must add EVERY topping the customer requested (each one that is in stock). In 2–3 sentences, explain why three independent if statements are needed here instead of one if-elif-elif-else ladder — and say when a ladder IS the right tool.",
    answerText:
      "An elif ladder stops at the first true test and skips the rest, so at most one branch ever runs — you would add a single topping even when three were requested. Independent ifs are each tested in turn, so every in-stock topping gets added. Use a ladder when the branches are mutually exclusive (one price per age); use independent ifs when several conditions can be true at once.",
    explain:
      "The examiner wants the phrase 'first true test wins' for elif and 'each if is checked separately' for independent ifs — plus the mutual-exclusion rule for choosing between them.",
    topic: "if",
  },
  {
    id: "foc2-if-15",
    type: "mcq",
    q: "Dev drops the price twice using two independent ifs. What does this print?",
    code: "price = 100\n\nif price > 50:\n    price = price - 20\n\nif price > 60:\n    price = price - 20\n\nprint(price)",
    options: [
      "60 — both tests ran: the first if dropped 100 to 80, and the second if then tested 80 > 60, which is still True",
      "80 — the second if is skipped once the first if fires",
      "40 — the two ifs chain together into one ladder",
      "SyntaxError — price cannot be tested twice",
    ],
    answer: 0,
    explain:
      "These are two INDEPENDENT ifs, not an elif ladder — every if gets its own test no matter what the previous one did. After the first if, price is 80; 80 > 60 is True, so another 20 comes off, landing at 60. Swap the second if for elif and the second test would be skipped, leaving 80.",
    topic: "if",
  },
  {
    id: "foc2-if-16",
    type: "output",
    q: "Maya re-checks her shopping list. Write the exact output.",
    code: "requested = [\"milk\", \"eggs\"]\nitem = \"Milk\"\n\nif item.lower() in requested:\n    print(\"Already listed\")\nelse:\n    print(\"Add it\")\n\nprint(item in requested)",
    answerText: "Already listed\nFalse",
    explain:
      "item.lower() turns \"Milk\" into \"milk\", which IS in the list — so the if branch prints Already listed. But the final print compares the ORIGINAL \"Milk\" against the list, and membership is case-sensitive: \"Milk\" and \"milk\" are different strings, so it prints False.",
    topic: "if",
  },

  /* ------------------------------------------------------------
     SLIVER 2 — DICTIONARIES  (L21 · L22 · L23)  ·  15 questions
     ------------------------------------------------------------ */
  {
    id: "foc2-dict-01",
    type: "mcq",
    q: "Which line prints 0 instead of crashing, given that the key \"speed\" does not exist?",
    code: "alien_0 = {\"color\": \"green\", \"points\": 5}",
    options: [
      "print(alien_0.get(\"speed\", 0))",
      "print(alien_0[\"speed\", 0])",
      "print(alien_0.speed(0))",
      "print(get(alien_0, \"speed\", 0))",
    ],
    answer: 0,
    explain:
      ".get() looks up the key and returns the fallback (0) when the key is missing — no crash. Square brackets with a missing key always raise KeyError.",
    topic: "dicts",
  },
  {
    id: "foc2-dict-02",
    type: "mcq",
    q: "Maya updates her alien's record and then prints the whole dictionary. What appears?",
    code: "alien_0 = {\"color\": \"green\", \"points\": 5}\nalien_0[\"color\"] = \"yellow\"\nalien_0[\"speed\"] = \"medium\"\n\nprint(alien_0)",
    options: [
      "{'color': 'yellow', 'points': 5, 'speed': 'medium'}",
      "{'color': 'green', 'points': 5, 'speed': 'medium'}",
      "{'speed': 'medium', 'color': 'yellow', 'points': 5}",
      "{'color': 'yellow'} — assigning to color deletes points",
    ],
    answer: 0,
    explain:
      "Assigning to an existing key overwrites its value (green becomes yellow); assigning to a new key adds a pair at the end. Dictionaries remember insertion order, so speed appears last.",
    topic: "dicts",
  },
  {
    id: "foc2-dict-03",
    type: "mcq",
    q: "What does this two-line program do?",
    code: "favourite_languages = {\"jen\": \"python\", \"sarah\": \"c\"}\nprint(favourite_languages[\"mike\"])",
    options: [
      "Prints None",
      "Prints an empty string",
      "Silently adds \"mike\" to the dictionary",
      "Raises a KeyError and the program stops",
    ],
    answer: 3,
    explain:
      "Square-bracket access insists the key exists; a missing key raises KeyError and crashes the program. That is exactly why .get() exists — it returns a default instead of exploding.",
    topic: "dicts",
  },
  {
    id: "foc2-dict-04",
    type: "mcq",
    q: "Riya loops over the class's language survey. What does .items() hand the loop on each pass?",
    code: "favourite_languages = {\"jen\": \"python\", \"sarah\": \"c\", \"edward\": \"rust\", \"phil\": \"python\"}\n\nfor name, language in favourite_languages.items():\n    print(name.title() + \" studies \" + language)",
    options: [
      "Just a key — the value must be looked up again inside the loop",
      "A (key, value) pair, unpacked into name and language",
      "A list of every key and every value all at once",
      "A single string like \"jen: python\"",
    ],
    answer: 1,
    explain:
      ".items() yields each key-value pair as a tuple, and the two loop variables unpack it — one pass per person with both halves of the data ready to use.",
    topic: "dicts",
  },
  {
    id: "foc2-dict-05",
    type: "output",
    q: "The survey produced repeats — python appears twice. Dev wants each language exactly once, in alphabetical order. Write the exact output.",
    code: "favourite_languages = {\"jen\": \"python\", \"sarah\": \"c\", \"phil\": \"python\"}\n\nfor lang in sorted(set(favourite_languages.values())):\n    print(lang)",
    answerText: "c\npython",
    explain:
      ".values() collects the languages, set() deletes the duplicate python, and sorted() lines up what is left alphabetically: c first, then python.",
    topic: "dicts",
  },
  {
    id: "foc2-dict-06",
    type: "mcq",
    q: "In a survey print, the loop ran over sorted(set(favourite_languages.values())). What was set()'s job in that line?",
    options: [
      "Sorting the values alphabetically — set() is just sorted()'s nickname",
      "Counting how many people chose each language",
      "Deleting duplicate values, so each language appears once",
      "Locking the dictionary so it cannot change during the loop",
    ],
    answer: 2,
    explain:
      "set() builds an unordered collection with no repeats — wrap it around .values() and duplicates vanish. sorted() then orders them; the two functions do completely different jobs.",
    topic: "dicts",
  },
  {
    id: "foc2-dict-07",
    type: "mcq",
    q: "What changes when Dev writes sorted(favourite_languages.keys()) instead of looping straight over the dictionary?",
    options: [
      "The dictionary itself gets permanently reordered",
      "Duplicate keys are removed",
      "The names come out in alphabetical order, instead of the order they were inserted",
      "The loop now walks the values instead of the keys",
    ],
    answer: 2,
    explain:
      "sorted() builds a fresh alphabetical list of keys for the loop to walk; the dictionary is untouched. Looping over a dict directly already gives the keys — just in insertion order.",
    topic: "dicts",
  },
  {
    id: "foc2-dict-08",
    type: "mcq",
    q: "The pizzeria stores its order like this. Which line correctly adds \"olives\" to the toppings?",
    code: "pizza = {\"crust\": \"thick\", \"toppings\": [\"mushrooms\", \"extra cheese\"]}",
    options: [
      "pizza[\"toppings\"] += \"olives\"",
      "pizza.append(\"olives\")",
      "pizza[\"toppings\" + \"olives\"] = True",
      "pizza[\"toppings\"].append(\"olives\")",
    ],
    answer: 3,
    explain:
      "The value stored at \"toppings\" is a LIST, so reach it with pizza[\"toppings\"] and call the list's own .append(). The += version tries to add a string to a list, and a dictionary has no .append() at all.",
    topic: "dicts",
  },
  {
    id: "foc2-dict-09",
    type: "output",
    q: "Maya spawns an alien squad, then promotes the first one. Write the exact output.",
    code: "aliens = []\nfor n in range(3):\n    new_alien = {\"color\": \"green\", \"points\": 5}\n    aliens.append(new_alien)\n\naliens[0][\"color\"] = \"yellow\"\nprint(len(aliens), aliens[0][\"color\"], aliens[1][\"color\"])",
    answerText: "3 yellow green",
    explain:
      "Each pass of the loop builds a brand-new dictionary, so the squad holds three SEPARATE dicts. Recolouring aliens[0] leaves aliens[1] green — three aliens, yellow first, green second.",
    topic: "dicts",
  },
  {
    id: "foc2-dict-10",
    type: "mcq",
    q: "Users are dictionaries inside a dictionary. Which expression fetches Marie's surname?",
    code: "users = {\n    \"aeinstein\": {\"first\": \"albert\", \"last\": \"einstein\"},\n    \"mcurie\": {\"first\": \"marie\", \"last\": \"curie\"},\n}",
    options: [
      "users[\"mcurie\"][\"last\"]",
      "users[\"last\"][\"mcurie\"]",
      "users.mcurie.last",
      "users[\"mcurie[last]\"]",
    ],
    answer: 0,
    explain:
      "Work outside-in: users[\"mcurie\"] is the inner dictionary, and a second [\"last\"] reaches into it. Each pair of square brackets digs one level deeper.",
    topic: "dicts",
  },
  {
    id: "foc2-dict-11",
    type: "mcq",
    q: "What does this snippet print?",
    code: "alien_0 = {\"color\": \"green\", \"points\": 5}\ndel alien_0[\"points\"]\nprint(alien_0)",
    options: [
      "{'color': 'green', 'points': 5}",
      "{'points': None}",
      "It crashes — key-value pairs cannot be deleted",
      "{'color': 'green'}",
    ],
    answer: 3,
    explain:
      "del removes the key-value pair entirely — key and value both disappear. Reading alien_0[\"points\"] afterwards would raise KeyError, since it no longer exists.",
    topic: "dicts",
  },
  {
    id: "foc2-dict-12",
    type: "output",
    q: "Riya prints a profile pair by pair. Write the exact output.",
    code: "person = {\"name\": \"arjun\", \"city\": \"jaipur\"}\n\nfor key, value in person.items():\n    print(key + \" -> \" + value)",
    answerText: "name -> arjun\ncity -> jaipur",
    explain:
      ".items() walks the pairs in insertion order — name first, then city — and the loop unpacks each pair, so print glues key, arrow and value together exactly as stored.",
    topic: "dicts",
  },
  {
    id: "foc2-dict-13",
    type: "mcq",
    q: "In the loop for name in favourite_languages: — what does name receive on each pass?",
    options: [
      "Each value (a language)",
      "Each key (a person's name) — looping over a dictionary hands out its keys by default",
      "Each (key, value) pair as a tuple",
      "Nothing — Python insists you write .keys() explicitly",
    ],
    answer: 1,
    explain:
      "A bare for over a dictionary walks its keys, which is why writing .keys() is optional. To reach the values you loop over .values(), or unpack both halves with .items().",
    topic: "dicts",
  },
  {
    id: "foc2-dict-14",
    type: "short",
    q: "Riya's program crashed with KeyError: 'age' while reading a profile dictionary. In 2–3 sentences, explain what happened and name the two safe ways to read a key that might be missing.",
    answerText:
      "The key \"age\" was not in the dictionary, and square-bracket access demands it — a missing key raises KeyError and stops the program. Safe ways: profile.get(\"age\"), which returns None (or a chosen default like profile.get(\"age\", 0)), or test first with if \"age\" in profile: before reading. Both read the key without crashing.",
    explain:
      "The exam wants the crash mechanism (brackets insist the key exists) plus at least one safe alternative — .get() with its optional default is the lecture's favourite.",
    topic: "dicts",
  },
  {
    id: "foc2-dict-15",
    type: "mcq",
    q: "Riya checks her stationery stock. What do these two lines print?",
    code: "stock = {\"pens\": 42, \"ink\": 7}\n\nprint(stock.get(\"erasers\", 0))\nprint(\"erasers\" in stock)",
    options: [
      "0, then False — .get() returns the fallback for a missing key, and in checks the keys without crashing",
      "KeyError — erasers is not in the dictionary",
      "0, then True — .get() adds the missing key to the dictionary",
      "None, then False — .get() ignores the fallback value",
    ],
    answer: 0,
    explain:
      ".get(key, default) hands back the fallback — here 0 — when the key is missing, instead of raising KeyError the way stock[\"erasers\"] would. And \"erasers\" in stock is a plain key test: False, no crash, and nothing gets added to the dictionary.",
    topic: "dicts",
  },

  /* ------------------------------------------------------------
     SLIVER 3 — USER INPUT & WHILE LOOPS  (L25 · L26)  ·  14 questions
     ------------------------------------------------------------ */
  {
    id: "foc2-while-01",
    type: "mcq",
    q: "Dev writes a voting check and types 21 at the prompt. What happens?",
    code: "age = input(\"How old are you? \")\nprint(age >= 18)",
    options: [
      "It prints True",
      "It prints False",
      "TypeError — input() returned the STRING \"21\", and a string cannot be compared to the number 18",
      "It prints 21",
    ],
    answer: 2,
    explain:
      "input() ALWAYS returns a string — even when the user types digits. \"21\" >= 18 compares text with a number, so Python raises TypeError. Convert first: int(input(...)).",
    topic: "while",
  },
  {
    id: "foc2-while-02",
    type: "mcq",
    q: "Dev's voting check crashed with a TypeError. Which line fixes it?",
    options: [
      "age = int(input(\"How old are you? \"))",
      "age = str(input(\"How old are you? \"))",
      "print(int(age))",
      "age = input(\"How old are you? \") + 0",
    ],
    answer: 0,
    explain:
      "Wrap int() around input() the moment the text arrives, and age holds a real number. Option 3 converts too late (and only for printing), and adding 0 to a string is its own TypeError.",
    topic: "while",
  },
  {
    id: "foc2-while-03",
    type: "mcq",
    q: "Which condition is True exactly when number is even?",
    options: [
      "number % 2 == 1",
      "number / 2 == 0",
      "number // 2 == 0",
      "number % 2 == 0",
    ],
    answer: 3,
    explain:
      "% is the remainder operator. An even number divided by 2 leaves remainder 0; an odd one leaves 1. / and // compute quotients, not remainders.",
    topic: "while",
  },
  {
    id: "foc2-while-04",
    type: "output",
    q: "Write the exact output of this countdown.",
    code: "number = 7\nwhile number > 0:\n    print(number)\n    number -= 3",
    answerText: "7\n4\n1",
    explain:
      "The loop prints 7, drops to 4, prints, drops to 1, prints, then drops to -2 — and -2 > 0 is False, so the loop exits. The condition is re-tested after every change to number.",
    topic: "while",
  },
  {
    id: "foc2-while-05",
    type: "mcq",
    q: "Maya's counter loop misbehaves. What actually happens when it runs?",
    code: "count = 0\nwhile count < 5:\n    print(count)",
    options: [
      "It prints 0 1 2 3 4 and stops cleanly",
      "It prints 0 forever — nothing inside the loop ever changes count, so the condition never turns False (an infinite loop)",
      "It prints 5 once, then stops",
      "It runs zero times, because count starts below 5",
    ],
    answer: 1,
    explain:
      "A while loop only ends when its condition becomes False — and count stays 0 forever because no line updates it. Ctrl-C exists for exactly this moment; the fix is count += 1 inside the loop.",
    topic: "while",
  },
  {
    id: "foc2-while-06",
    type: "output",
    q: "Write the exact output of Ishaan's odd-number skipper.",
    code: "number = 0\nwhile number < 6:\n    number += 1\n    if number % 2 == 0:\n        continue\n    print(number)",
    answerText: "1\n3\n5",
    explain:
      "continue skips the rest of the current pass and jumps back to the condition test, so every even number is skipped before print can run. 1, 3 and 5 print; 6 trips the continue, and then 6 < 6 ends the loop.",
    topic: "while",
  },
  {
    id: "foc2-while-07",
    type: "mcq",
    q: "In the lecture's polling program, active = True controlled the main loop. What is such a variable called, and what is it for?",
    options: [
      "A sentinel — a special input value that ends the loop",
      "A decorator — it wraps the loop in extra behaviour",
      "A flag — a Boolean variable that signals whether a program or section should keep running",
      "A counter — it counts how many passes the loop makes",
    ],
    answer: 2,
    explain:
      "A flag is one Boolean watched by the while condition; flipping it to False (on any of many triggers) ends the loop gracefully. Counters count; flags decide.",
    topic: "while",
  },
  {
    id: "foc2-while-08",
    type: "mcq",
    q: "Inside a while loop, what exactly does continue do?",
    options: [
      "Ends the loop entirely, like break",
      "Skips the rest of this pass and jumps straight back to test the loop's condition",
      "Restarts the loop from its very first pass",
      "Pauses the program until the user presses a key",
    ],
    answer: 1,
    explain:
      "continue abandons only the CURRENT pass — the code below it is skipped — and returns to the condition test. break is the one that kills the whole loop.",
    topic: "while",
  },
  {
    id: "foc2-while-09",
    type: "output",
    q: "The ride queue moves every unconfirmed rider across. Write the exact output.",
    code: "unconfirmed = [\"ishaan\", \"meera\", \"zoya\"]\nconfirmed = []\n\nwhile unconfirmed:\n    rider = unconfirmed.pop()\n    confirmed.append(rider)\n\nprint(confirmed)\nprint(len(unconfirmed))",
    answerText: "['zoya', 'meera', 'ishaan']\n0",
    explain:
      "An empty list is falsy, so the loop runs while riders remain. pop() takes from the END each time — zoya, meera, ishaan — so confirmed ends up in reverse order, and unconfirmed is left empty.",
    topic: "while",
  },
  {
    id: "foc2-while-10",
    type: "mcq",
    q: "The pet shelter scrubs every cat from its list. What is pets when the loop finishes?",
    code: "pets = [\"dog\", \"cat\", \"dog\", \"goldfish\", \"cat\", \"rabbit\", \"cat\"]\nwhile \"cat\" in pets:\n    pets.remove(\"cat\")",
    options: [
      "['dog', 'dog', 'goldfish', 'rabbit']",
      "['dog', 'cat', 'dog', 'goldfish', 'rabbit', 'cat']",
      "['dog', 'goldfish', 'rabbit']",
      "[] — the while loop emptied the whole list",
    ],
    answer: 0,
    explain:
      "remove() deletes only the FIRST matching value, so the loop keeps firing until no cat remains — three passes, three cats gone, dogs and goldfish untouched. An if would have removed just one cat.",
    topic: "while",
  },
  {
    id: "foc2-while-11",
    type: "mcq",
    q: "The program runs number = int(input(\"Give me a number: \")) — and the user types seven. What happens?",
    options: [
      "number becomes the string \"seven\"",
      "number becomes 0",
      "Python politely asks the user to try again",
      "ValueError — int() cannot turn non-numeric text into a number",
    ],
    answer: 3,
    explain:
      "int() happily converts strings of digits, but \"seven\" is just letters — int() raises ValueError. Robust programs catch that error or check the text first — a story for a later lecture.",
    topic: "while",
  },
  {
    id: "foc2-while-12",
    type: "short",
    q: "Why does the lecture use a WHILE loop — not a for loop — to move riders from unconfirmed to confirmed while the list keeps changing? Answer in 2–3 sentences.",
    answerText:
      "A for loop walks a list by position, and changing that list mid-walk makes Python skip or repeat elements unpredictably. The while loop instead re-tests a simple condition — while unconfirmed: — so it stays correct no matter how the list shrinks. Use while whenever the number of passes is not known in advance.",
    explain:
      "The exam wants: for loops assume a fixed, untouched list; while loops re-check a condition each pass — the safe tool when the data is moving.",
    topic: "while",
  },
  {
    id: "foc2-while-13",
    type: "output",
    q: "Maya's launch countdown stops early. Write the exact output.",
    code: "n = 5\n\nwhile True:\n    if n == 2:\n        break\n    print(n)\n    n = n - 1",
    answerText: "5\n4\n3",
    explain:
      "while True loops forever unless something breaks out. Each pass prints n and then subtracts 1: 5, 4, 3. When n reaches 2, the if test fires and break ends the loop instantly — 2 itself is never printed.",
    topic: "while",
  },
  {
    id: "foc2-while-14",
    type: "mcq",
    q: "Ishaan scrubs every dog from the list. What does the final print show?",
    code: "pets = [\"dog\", \"cat\", \"dog\", \"dog\"]\n\nwhile \"dog\" in pets:\n    pets.remove(\"dog\")\n\nprint(len(pets))",
    options: [
      "1 — the loop removes every 'dog' one at a time until the test fails, leaving just ['cat']",
      "3 — remove() only strips one match, so the loop quits after one pass",
      "0 — the loop empties the whole list",
      "It never ends — remove() can't satisfy the while test",
    ],
    answer: 0,
    explain:
      "The while test is re-checked after every removal: remove() strips the FIRST 'dog' each pass, and after three passes no 'dog' remains, so \"dog\" in pets turns False and the loop ends with ['cat'] — length 1. remove() only ever takes one item; the while is what makes it 'all instances'.",
    topic: "while",
  },

  /* ------------------------------------------------------------
     SLIVER 4 — FUNCTIONS, LECTURE 1 & 2  (L27 · L28)  ·  15 questions
     ------------------------------------------------------------ */
  {
    id: "foc2-fn-01",
    type: "mcq",
    q: "Dev defines his first function. What is the line \"\"\"Display a simple greeting.\"\"\" ?",
    code: "def greet_user():\n    \"\"\"Display a simple greeting.\"\"\"\n    print(\"Hello!\")",
    options: [
      "A comment Python ignores completely — exactly like a # line",
      "A docstring — a triple-quoted description of what the function does, stored as part of it",
      "The function's return value",
      "A second function call that runs before the print",
    ],
    answer: 1,
    explain:
      "A docstring is the triple-quoted sentence on the body's first line; Python stores it so tools like help(greet_user) can display it. Comments (#) are thrown away — docstrings are kept.",
    topic: "functions",
  },
  {
    id: "foc2-fn-02",
    type: "mcq",
    q: "In this snippet, which names are the PARAMETERS?",
    code: "def describe_pet(animal_type, pet_name):\n    print(\"I have a \" + animal_type + \".\")\n\ndescribe_pet(\"hamster\", \"harry\")",
    options: [
      "\"hamster\" and \"harry\"",
      "describe_pet",
      "hamster and harry",
      "animal_type and pet_name",
    ],
    answer: 3,
    explain:
      "Parameters are the named slots in the def line; arguments are the real values supplied at the call. The exam loves this pair — parameters receive, arguments are passed.",
    topic: "functions",
  },
  {
    id: "foc2-fn-03",
    type: "mcq",
    q: "Maya calls her pet describer like this: describe_pet(\"harry\", \"hamster\"). What does the program do?",
    code: "def describe_pet(animal_type, pet_name):\n    print(\"I have a \" + animal_type + \".\")\n    print(\"My \" + animal_type + \"'s name is \" + pet_name.title() + \".\")\n\ndescribe_pet(\"harry\", \"hamster\")",
    options: [
      "It works perfectly — harry is a hamster, after all",
      "SyntaxError — string arguments cannot come in this order",
      "The positional arguments arrive swapped: harry becomes the animal type and Hamster the pet's name",
      "animal_type is silently ignored and only pet_name prints",
    ],
    answer: 2,
    explain:
      "Positional arguments match by ORDER, not by meaning: \"harry\" slides into animal_type and \"hamster\" into pet_name. The program runs happily — and prints nonsense. That is exactly why the lecture shows keyword arguments next.",
    topic: "functions",
  },
  {
    id: "foc2-fn-04",
    type: "mcq",
    q: "Riya rewrites the call as describe_pet(pet_name=\"willie\", animal_type=\"python\"). What is TRUE about this call?",
    options: [
      "It is legal — keyword arguments are name-value pairs, so the call's order no longer matters",
      "It is illegal — keyword arguments must follow the def's parameter order",
      "It permanently changes the function's default values",
      "It makes describe_pet return a dictionary",
    ],
    answer: 0,
    explain:
      "Each keyword argument names the parameter it feeds, so Python wires the values directly and order becomes irrelevant. No more harry-the-hamster mix-ups.",
    topic: "functions",
  },
  {
    id: "foc2-fn-05",
    type: "mcq",
    q: "animal_type now carries a default. What does the call print?",
    code: "def describe_pet(pet_name, animal_type=\"dog\"):\n    print(\"I have a \" + animal_type + \" named \" + pet_name + \".\")\n\ndescribe_pet(\"rex\")",
    options: [
      "I have a dog named rex.",
      "I have a  named rex.",
      "I have a rex named dog.",
      "TypeError — animal_type is missing",
    ],
    answer: 0,
    explain:
      "A default parameter is used whenever the call leaves it out: rex fills pet_name, and animal_type falls back to \"dog\". Supply a second argument and the default is overridden.",
    topic: "functions",
  },
  {
    id: "foc2-fn-06",
    type: "output",
    q: "Write the exact output of Maya's name-formatter.",
    code: "def get_formatted_name(first, last):\n    full = first + \" \" + last\n    return full.title()\n\nmusician = get_formatted_name(\"jimi\", \"hendrix\")\nprint(musician)\nprint(get_formatted_name(\"ada\", \"lovelace\"))",
    answerText: "Jimi Hendrix\nAda Lovelace",
    explain:
      "return hands \"jimi hendrix\".title() back to the caller, where it is stored in musician; the second call is printed directly. Functions compute — return delivers.",
    topic: "functions",
  },
  {
    id: "foc2-fn-07",
    type: "mcq",
    q: "Ishaan tries to store his total. What does the SECOND print show?",
    code: "def add_scores(a, b):\n    total = a + b\n    print(total)\n\nresult = add_scores(4, 5)\nprint(result)",
    options: [
      "9",
      "45",
      "None — the function only printed the total; it returned nothing, so result catches None",
      "TypeError — you cannot assign the result of a print function",
    ],
    answer: 2,
    explain:
      "print shows a value on screen but hands nothing back — a function with no return gives None. The 9 on the first line came from inside the function; result itself is empty. Want the value back? return total.",
    topic: "functions",
  },
  {
    id: "foc2-fn-08",
    type: "mcq",
    q: "The optional middle name. What does the call print?",
    code: "def get_formatted_name(first, last, middle=\"\"):\n    if middle:\n        full = first + \" \" + middle + \" \" + last\n    else:\n        full = first + \" \" + last\n    return full.title()\n\nprint(get_formatted_name(\"lee\", \"iacocca\"))",
    options: [
      "Lee  Iacocca — note the double space",
      "An empty string",
      "Lee Iacocca — middle defaults to \"\", an empty string is falsy, so the else branch builds the name",
      "TypeError — middle is a required argument",
    ],
    answer: 2,
    explain:
      "middle=\"\" makes the third argument optional; an empty string is falsy, so if middle: sends the no-middle-name call down the else branch. One function, two shapes of name.",
    topic: "functions",
  },
  {
    id: "foc2-fn-09",
    type: "mcq",
    q: "The lecture builds people as dictionaries and returns them. What does this print?",
    code: "def build_person(first, last):\n    person = {\"first\": first, \"last\": last}\n    return person\n\nprint(build_person(\"marie\", \"curie\"))",
    options: [
      "('marie', 'curie')",
      "marie curie",
      "{'marie': 'curie'}",
      "{'first': 'marie', 'last': 'curie'}",
    ],
    answer: 3,
    explain:
      "The parameters fill the dictionary's VALUES while the keys stay fixed as \"first\" and \"last\"; return hands the finished dictionary back, and print shows it in full dict notation.",
    topic: "functions",
  },
  {
    id: "foc2-fn-10",
    type: "mcq",
    q: "Maya guards her original list with a slice. What does the final print show?",
    code: "def show_models(models):\n    for m in models:\n        print(m)\n    models.clear()\n\ngadgets = [\"phone\", \"tablet\", \"watch\"]\nshow_models(gadgets[:])\nprint(len(gadgets))",
    options: [
      "0 — clear() emptied gadgets itself",
      "3 — gadgets[:] sent a COPY in, so clear() emptied only the copy",
      "1 — clear() removes one item at a time",
      "NameError — models and gadgets cannot coexist",
    ],
    answer: 1,
    explain:
      "Passing gadgets[:] copies the list before the call, so the function's clear() hits the copy while the original keeps all three items. Pass gadgets bare and the function could wreck the original — the slice trick is the difference between a copy and an alias.",
    topic: "functions",
  },
  {
    id: "foc2-fn-11",
    type: "mcq",
    q: "The pizzeria's function accepts any number of toppings. What does the call print?",
    code: "def make_pizza(size, *toppings):\n    print(size)\n    print(toppings)\n\nmake_pizza(16, \"mushrooms\", \"olives\")",
    options: [
      "16, then ('mushrooms', 'olives') — the single * packs the extra arguments into a tuple",
      "16, then ['mushrooms', 'olives'] — the single * packs them into a list",
      "(16, 'mushrooms', 'olives') — everything lands in one tuple",
      "TypeError — the function was built for two arguments, not three",
    ],
    answer: 0,
    explain:
      "*toppings gathers every extra positional argument into a TUPLE (round brackets when printed), while size catches the first argument as usual. Two stars — **kwargs — do the same for keyword arguments, but into a dictionary.",
    topic: "functions",
  },
  {
    id: "foc2-fn-12",
    type: "mcq",
    q: "And what does **extra do in this profile builder?",
    code: "def build_profile(first, last, **extra):\n    profile = {\"first\": first, \"last\": last}\n    for key, value in extra.items():\n        profile[key] = value\n    return profile\n\nuser = build_profile(\"albert\", \"einstein\", location=\"princeton\", field=\"physics\")",
    options: [
      "Collects the extra keyword pairs into a list",
      "Ignores anything beyond first and last",
      "Raises a TypeError — four arguments is too many",
      "Collects the extra keyword pairs into a dictionary: {'location': 'princeton', 'field': 'physics'}",
    ],
    answer: 3,
    explain:
      "**extra packs any keyword arguments the def didn't name into a dictionary, which the loop then merges into profile. One star = tuple of extras; two stars = dict of extras.",
    topic: "functions",
  },
  {
    id: "foc2-fn-13",
    type: "output",
    q: "Two functions, two styles. Write the exact output.",
    code: "def double_all(nums):\n    result = []\n    for n in nums:\n        result.append(n * 2)\n    return result\n\nscores = [3, 8]\nprint(double_all(scores))\nprint(scores)",
    answerText: "[6, 16]\n[3, 8]",
    explain:
      "double_all builds a NEW list and returns it, leaving scores untouched — doubling by returning, not by mutating. The second print proves the original survived.",
    topic: "functions",
  },
  {
    id: "foc2-fn-14",
    type: "short",
    q: "What is a module in Python, and how do you call make_pizza(16, \"pepperoni\") when that function lives in a file named pizza.py? Give the two import styles from the lecture.",
    answerText:
      "A module is a separate .py file whose functions you can reuse by importing it. Style 1: import pizza, then call pizza.make_pizza(16, \"pepperoni\") — the dot names the module. Style 2: from pizza import make_pizza, then call make_pizza(16, \"pepperoni\") directly. (import pizza as p simply shortens the prefix.)",
    explain:
      "Both styles load the same file; the only difference is how you name the function afterwards. Expect a follow-up on why from pizza import * is frowned upon.",
    topic: "functions",
  },
  {
    id: "foc2-fn-15",
    type: "mcq",
    q: "The café's function has a default, and Maya overrides it. What does the call print?",
    code: "def make_coffee(size, milk=True):\n    if milk:\n        return size + \" latte\"\n    else:\n        return size + \" americano\"\n\nprint(make_coffee(\"large\", milk=False))",
    options: [
      "large americano — the keyword argument milk=False overrides the default for this call only",
      "large latte — the default milk=True always wins",
      "TypeError — a keyword argument cannot follow a positional one",
      "americano — the size argument is dropped",
    ],
    answer: 0,
    explain:
      "Mixing positional and keyword arguments is fine as long as the positional ones come first. milk=False feeds the milk parameter for this call alone; the def's default only applies when the call stays silent.",
    topic: "functions",
  },

  /* ------------------------------------------------------------
     SLIVER 1 — IF  (L17 · L18 · L20)  ·  wave 2 · questions 61–74 (30 total)
     ------------------------------------------------------------ */
  {
    id: "foc2-if-17",
    type: "mcq",
    q: "The deck's logic drill: age_0 = 22 and age_1 = 18. What does print(age_0 >= 21 or age_1 >= 21) show — and why?",
    code: "age_0, age_1 = 22, 18\n\nprint(age_0 >= 21 or age_1 >= 21)",
    options: [
      "True — or needs at least ONE test to pass: 22 >= 21 is True, so the whole expression is True",
      "False — one test failed, and or demands both sides pass",
      "True — or adds the two ages before comparing",
      "SyntaxError — two comparisons cannot share one or",
    ],
    answer: 0,
    explain:
      "or passes when EITHER side is True — 22 >= 21 alone carries the expression. and would demand both, and 18 >= 21 fails, so and would have printed False. That and/or swap is the exam's favourite truth-table trap.",
    topic: "if",
  },
  {
    id: "foc2-if-18",
    type: "output",
    q: "The banned-user check from the lecture. Write the exact output.",
    code: "banned = [\"andrew\", \"carolina\", \"david\"]\nuser = \"marie\"\n\nprint(user not in banned)\nprint(user in banned)",
    answerText: "True\nFalse",
    explain:
      "marie is not on the banned list, so the not-in test is True — and the plain in test about the same two values must be exactly the opposite: False. not in and in always disagree, line by line.",
    topic: "if",
  },
  {
    id: "foc2-if-19",
    type: "mcq",
    q: "Maya's alien turns red. What does the ladder print?",
    code: "alien_color = \"red\"\n\nif alien_color == \"green\":\n    points = 5\nelif alien_color == \"yellow\":\n    points = 10\nelif alien_color == \"red\":\n    points = 15\nelse:\n    points = 0\n\nprint(\"You just earned \" + str(points) + \" points!\")",
    options: [
      "You just earned 5 points!",
      "You just earned 10 points!",
      "You just earned 15 points! — the third test is the first true one, so its branch assigns 15 and the else is skipped",
      "You just earned 0 points!",
    ],
    answer: 2,
    explain:
      "The chain tests green (fail), yellow (fail), red (pass!) — points becomes 15 and the else is never even evaluated. The deck's alien_points.py, word for word.",
    topic: "if",
  },
  {
    id: "foc2-if-20",
    type: "mcq",
    q: "A 65-year-old walks up to the deck's amusement-park ladder. What prints?",
    code: "age = 65\n\nif age < 4:\n    price = 0\nelif age < 18:\n    price = 5\nelif age < 65:\n    price = 10\nelse:\n    price = 3\n\nprint(\"Your admission cost is $\" + str(price) + \".\")",
    options: [
      "Your admission cost is $10. — 65 falls in the adult band",
      "Your admission cost is $3. — 65 < 65 is False, so the third branch fails and the else catches the seniors",
      "Your admission cost is $0.",
      "TypeError — price was never assigned",
    ],
    answer: 1,
    explain:
      "The boundary case: 65 < 65 is False, so the 18–65 branch quietly fails and the else takes over with the senior price. '65+' lives in the else — exactly why the deck says to try age = 70 and run it.",
    topic: "if",
  },
  {
    id: "foc2-if-21",
    type: "output",
    q: "The kitchen apologises for the one topping it has run out of. Write the exact output.",
    code: "requested_toppings = [\"mushrooms\", \"green peppers\", \"extra cheese\"]\n\nfor topping in requested_toppings:\n    if topping == \"green peppers\":\n        print(\"Sorry, we are out of green peppers right now.\")\n    else:\n        print(\"Adding \" + topping + \".\")",
    answerText: "Adding mushrooms.\nSorry, we are out of green peppers right now.\nAdding extra cheese.",
    explain:
      "An if inside the for loop gives the special item special treatment: green peppers triggers the apology, every other topping slides down the else into an Adding line. Three items in, three lines out — in order.",
    topic: "if",
  },
  {
    id: "foc2-if-22",
    type: "mcq",
    q: "Ishaan signs up with PRIYA but lowers only ONE side of the comparison. What prints?",
    code: "current_users = [\"John\", \"Admin\", \"Priya\"]\nnew_user = \"PRIYA\"\n\nif new_user.lower() in current_users:\n    print(\"Taken\")\nelse:\n    print(\"Available\")",
    options: [
      "Taken — lowering the new name is enough",
      "Available — new_user.lower() becomes \"priya\", but the list still holds \"Priya\" with a capital P, and membership is case-sensitive. Lower BOTH sides",
      "KeyError — PRIYA is not in the list",
      "Taken — Python ignores case inside lists",
    ],
    answer: 1,
    explain:
      "The deck's username drill trips exactly here: one-sided lowering still compares \"priya\" against \"Priya\" — different strings. The fix lowers every name on the list too: new_user.lower() in [u.lower() for u in current_users].",
    topic: "if",
  },
  {
    id: "foc2-if-23",
    type: "output",
    q: "Two booleans walk into a truth table. Write the exact output.",
    code: "game_active = True\ncan_edit = False\n\nprint(game_active and can_edit)\nprint(game_active or can_edit)\nprint(not game_active)",
    answerText: "False\nTrue\nFalse",
    explain:
      "and needs both: True and False is False. or needs one: True or False is True. not flips: not True is False. The deck's game_active / can_edit booleans, straight through the table.",
    topic: "if",
  },
  {
    id: "foc2-if-24",
    type: "mcq",
    q: "Maya's grading ladder has NO else, and the score is 45. What happens?",
    code: "score = 45\n\nif score >= 90:\n    grade = \"A\"\nelif score >= 80:\n    grade = \"B\"\nelif score >= 70:\n    grade = \"C\"\n\nprint(grade)",
    options: [
      "F prints — a missing else defaults the grade to F",
      "None prints — grade is created with the value None",
      "NameError — no test matched and there is no catch-all else, so grade was never created",
      "C prints — the last elif always wins",
    ],
    answer: 2,
    explain:
      "Omitting the else is legal — the deck even calls it the safer 'no accidental catch-all' — but unmatched data then falls through untouched, and reading a variable that was never assigned raises NameError. Add the else when every value needs an answer.",
    topic: "if",
  },
  {
    id: "foc2-if-25",
    type: "mcq",
    q: "The stage-of-life ladder was written with the tests ASCENDING. What does it print for a 5-year-old?",
    code: "age = 5\n\nif age >= 2:\n    stage = \"toddler\"\nelif age >= 4:\n    stage = \"kid\"\nelif age >= 13:\n    stage = \"teenager\"\nelif age >= 20:\n    stage = \"adult\"\nelif age >= 65:\n    stage = \"elder\"\nelse:\n    stage = \"baby\"\n\nprint(stage)",
    options: [
      "kid — 5 >= 4 picks the right band",
      "toddler — the first true test wins, and 5 >= 2 already matches; every later elif is never reached",
      "baby — the else catches the 5-year-old",
      "teenager — the largest bound wins",
    ],
    answer: 1,
    explain:
      "With ascending >= tests the loosest bound fires first and the ladder dies on its opening door. Order the tests so each one is only reachable when everything above it failed — youngest-to-oldest with <, or oldest-to-youngest with >=.",
    topic: "if",
  },
  {
    id: "foc2-if-26",
    type: "mcq",
    q: "game_active = True. Which if statement is the idiomatic way to test it?",
    options: [
      "if game_active == True:",
      "if game_active: — the Boolean IS the test; comparing to True is redundant",
      "if game_active = True:",
      "if bool(game_active) == \"True\":",
    ],
    answer: 1,
    explain:
      "A Boolean variable used bare already evaluates to True or False, so if game_active: says it all. The == True version works but reads like a beginner; the single = is the assignment trap — a SyntaxError inside a condition.",
    topic: "if",
  },
  {
    id: "foc2-if-27",
    type: "mcq",
    q: "Ishaan's result checker uses two independent ifs. Which lines print?",
    code: "score = 75\n\nif score >= 60:\n    print(\"Pass\")\nif score >= 90:\n    print(\"Distinction\")\n\nprint(\"Result declared\")",
    options: [
      "Pass and Distinction — both ifs fire",
      "Pass, then Result declared — the second if's test fails (75 >= 90 is False), but Result declared sits outside the ifs and always runs",
      "Distinction, then Result declared",
      "Only Result declared — the first if skips the second one",
    ],
    answer: 1,
    explain:
      "Independent ifs are tested one by one: 75 >= 60 passes and prints, 75 >= 90 fails silently, and the unindented print belongs to nobody — it always runs. Two ifs, two separate verdicts.",
    topic: "if",
  },
  {
    id: "foc2-if-28",
    type: "mcq",
    q: "Dev forgot int(). The user's age arrived as the STRING \"18\". What prints?",
    code: "age = \"18\"\n\nif age == 18:\n    print(\"Match\")\nelse:\n    print(\"No match\")",
    options: [
      "Match — Python converts strings to numbers automatically for ==",
      "No match — \"18\" and 18 are different types; == stays polite and returns False",
      "TypeError — a string and an int can never be compared",
      "Nothing — the if is skipped entirely because there is no else",
    ],
    answer: 1,
    explain:
      "== between different types does not crash — it simply returns False, so the else prints No match. The crash arrives with ordering comparisons instead: \"18\" >= 18 raises TypeError. That asymmetry is a favourite exam question.",
    topic: "if",
  },
  {
    id: "foc2-if-29",
    type: "mcq",
    q: "In the admission ladder, why does the second branch test only age < 18 — where is the 'and age >= 4'?",
    options: [
      "It was forgotten — the ladder is buggy",
      "Reaching that elif already proves age < 4 failed, so the lower bound is implied — each elif needs only one bound",
      "elif cannot contain the word and",
      "Python rewrites every elif into a nested if with both bounds",
    ],
    answer: 1,
    explain:
      "The ladder is a series of doors in a corridor: by the time Python reaches the second door, everyone under 4 has already been turned away at the first. That is why each elif carries one bound — the earlier branches did the rest.",
    topic: "if",
  },
  {
    id: "foc2-if-30",
    type: "short",
    q: "In 2–3 sentences, explain what if requested_toppings: actually tests, what an empty list evaluates to, and what goes wrong without the guard when the order list arrives empty.",
    answerText:
      "A list name used directly as a condition is a truth test: True when the list holds at least one item, False when it is empty — an empty list is falsy. Without the guard, a for loop over an empty order runs zero times and prints nothing, a silent failure; the guard lets you respond instead, like asking 'Are you sure you want a plain pizza?'.",
    explain:
      "The examiner wants the phrase 'an empty list is falsy' plus the consequence — the loop runs zero times and the failure is silent. The plain-pizza message is the lecture's own ending.",
    topic: "if",
  },

  /* ------------------------------------------------------------
     SLIVER 2 — DICTIONARIES  (L21 · L22 · L23)  ·  wave 2 · questions 75–89 (30 total)
     ------------------------------------------------------------ */
  {
    id: "foc2-dict-16",
    type: "mcq",
    q: "Why reach for a dictionary instead of a list when storing an alien's stats?",
    options: [
      "Dictionaries use less memory than lists",
      "A list finds items by position — list[0] forces you to memorise what position 0 means; a dictionary finds them by label, so alien_0[\"color\"] reads like English",
      "Lists cannot store numbers",
      "Dictionaries keep their pairs in alphabetical order",
    ],
    answer: 1,
    explain:
      "The one idea before any syntax: a list finds things by position, a dictionary finds things by label. 'Which label?' is a question you can answer while writing code — 'which index?' is not.",
    topic: "dicts",
  },
  {
    id: "foc2-dict-17",
    type: "mcq",
    q: "Maya starts from an empty dictionary and fills it. What prints?",
    code: "alien = {}\nalien[\"color\"] = \"green\"\nalien[\"points\"] = 5\n\nprint(alien)",
    options: [
      "{}",
      "{'color': 'green'} — only the last pair survives",
      "{'color': 'green', 'points': 5} — each assignment adds one pair, in insertion order",
      "['color', 'points']",
    ],
    answer: 2,
    explain:
      "Starting from {} and assigning key by key is the standard way to build a dictionary up at runtime. Each new key appends a pair, and print shows them in the order they were added.",
    topic: "dicts",
  },
  {
    id: "foc2-dict-18",
    type: "output",
    q: "Dev reads one language from the survey and polishes it. Write the exact output.",
    code: "favourite_languages = {\"jen\": \"python\", \"sarah\": \"c\", \"edward\": \"rust\", \"phil\": \"python\"}\n\nlanguage = favourite_languages[\"sarah\"].title()\nprint(\"Sarah's favorite language is \" + language + \".\")",
    answerText: "Sarah's favorite language is C.",
    explain:
      "The lookup pulls the VALUE \"c\" out of the dictionary, and .title() upgrades it to \"C\" before the print glues the sentence together. Look up first, format second — the deck's exact beat.",
    topic: "dicts",
  },
  {
    id: "foc2-dict-19",
    type: "mcq",
    q: "What does the print show?",
    code: "alien_0 = {\"color\": \"green\", \"speed\": \"slow\"}\n\nprint(alien_0.get(\"points\"))",
    options: [
      "KeyError — get() still demands the key",
      "0",
      "None — get() called with no second argument returns None for a missing key",
      "'No point value assigned.'",
    ],
    answer: 2,
    explain:
      "The fallback only exists if you supply it: .get(\"points\", 0) would print 0. With no default, Python hands back None — the absence of a value — instead of crashing. That two-sided behaviour is exactly what the deck's get() panel teaches.",
    topic: "dicts",
  },
  {
    id: "foc2-dict-20",
    type: "mcq",
    q: "What does this poll-invitation check print?",
    code: "favourite_languages = {\"jen\": \"python\", \"sarah\": \"c\", \"phil\": \"python\"}\n\nif \"erin\" not in favourite_languages.keys():\n    print(\"Erin, please take our poll!\")",
    options: [
      "Nothing — erin is a missing key, so the program crashes",
      "Erin, please take our poll! — \"erin\" is not among the keys, so the not-in test is True",
      "False",
      "Erin, please take our poll! — but only after adding erin to the dictionary",
    ],
    answer: 1,
    explain:
      "Membership tests never crash on missing keys — they just answer True or False. erin is absent from .keys(), so not in is True and the invitation prints. The in test on a dictionary's keys is the polling pattern from Lecture 22.",
    topic: "dicts",
  },
  {
    id: "foc2-dict-21",
    type: "output",
    q: "The deck's user_0 profile, printed pair by pair. Write the exact output.",
    code: "user_0 = {\"username\": \"efermi\", \"first\": \"enrico\", \"last\": \"fermi\"}\n\nfor key, value in user_0.items():\n    print(key + \": \" + value)",
    answerText: "username: efermi\nfirst: enrico\nlast: fermi",
    explain:
      ".items() yields each pair and the two loop variables unpack it: key catches username, value catches efermi, and so on. Dictionaries remember insertion order, so the pairs come out exactly as they were typed.",
    topic: "dicts",
  },
  {
    id: "foc2-dict-22",
    type: "mcq",
    q: "Dev wants each language ONCE and in alphabetical order, so he loops over set(favourite_languages.values()). What is missing?",
    options: [
      "Nothing — set() both deduplicates and sorts",
      "set() only removes duplicates; the order it yields is its own. For a guaranteed alphabetical walk, wrap it again: sorted(set(favourite_languages.values()))",
      "set() sorts but does not deduplicate",
      "values() must be replaced with keys()",
    ],
    answer: 1,
    explain:
      "Two tools, two jobs: set() deletes repeats, sorted() imposes order. Chaining them — sorted(set(...)) — is the idiomatic one-liner; relying on a set to come out alphabetised is a bet Python never made.",
    topic: "dicts",
  },
  {
    id: "foc2-dict-23",
    type: "output",
    q: "The pizzeria's order, read back one field at a time. Write the exact output.",
    code: "pizza = {\"crust\": \"thick\", \"toppings\": [\"mushrooms\", \"green peppers\", \"extra cheese\"]}\n\nprint(pizza[\"crust\"])\nfor topping in pizza[\"toppings\"]:\n    print(\"- \" + topping)",
    answerText: "thick\n- mushrooms\n- green peppers\n- extra cheese",
    explain:
      "The value at \"toppings\" is a LIST, so the for loop walks it topping by topping while pizza[\"crust\"] hands back the plain string thick. A dictionary holding a list is nesting pattern number two from Lecture 23.",
    topic: "dicts",
  },
  {
    id: "foc2-dict-24",
    type: "mcq",
    q: "The deck's fleet: 30 aliens generated by one loop, then the first three promoted. What does the final print show?",
    code: "aliens = []\nfor alien_number in range(30):\n    aliens.append({\"color\": \"green\", \"points\": 5})\n\nfor alien in aliens[:3]:\n    if alien[\"color\"] == \"green\":\n        alien[\"color\"] = \"yellow\"\n        alien[\"points\"] = 10\n\nprint(len(aliens), aliens[0][\"points\"], aliens[4][\"points\"])",
    options: [
      "30 10 10 — the promotion recoloured every green alien in the fleet",
      "3 10 5 — only three aliens exist after the slice",
      "30 10 5 — the slice [:3] promoted exactly the first three; alien 4 keeps the blueprint's 5 points",
      "30 5 5 — the if blocked every promotion",
    ],
    answer: 2,
    explain:
      "range(30) built 30 separate dictionaries, aliens[:3] walked just the front of the fleet, and the if promoted those three to points 10. aliens[4] was never touched — it still answers 5. Generate, slice, filter, steer.",
    topic: "dicts",
  },
  {
    id: "foc2-dict-25",
    type: "mcq",
    q: "In the loop over users.items(), what does info hold on each pass?",
    code: "users = {\n    \"aeinstein\": {\"first\": \"albert\", \"last\": \"einstein\"},\n    \"mcurie\": {\"first\": \"marie\", \"last\": \"curie\"},\n}\n\nfor username, info in users.items():\n    print(username, info[\"first\"].title())",
    options: [
      "A string like \"albert\"",
      "The inner dictionary for that username — {\"first\": \"albert\", \"last\": \"einstein\"} on the first pass",
      "A list of the user's fields",
      "The whole users dictionary",
    ],
    answer: 1,
    explain:
      "users.items() hands out (key, value) pairs where the VALUE is itself a dictionary — so info is the whole inner record, ready for a second lookup like info[\"first\"]. Two levels, two lookups.",
    topic: "dicts",
  },
  {
    id: "foc2-dict-26",
    type: "mcq",
    q: "What happens when this check runs?",
    code: "alien_0 = {\"color\": \"green\", \"points\": 5}\n\nif alien_0[\"speed\"] == \"slow\":\n    print(\"Slowpoke\")\nelse:\n    print(\"Zoomer\")",
    options: [
      "Zoomer — the test is False",
      "Slowpoke — the test is True",
      "KeyError: 'speed' — square brackets insist the key exists, even inside an if test; reach for .get(\"speed\", ...) or test \"speed\" in alien_0 first",
      "None — the if silently fails",
    ],
    answer: 2,
    explain:
      "An if does not make a missing key safe — the lookup crashes before the comparison even happens. Guard it with alien_0.get(\"speed\") or ask \"speed\" in alien_0 first; the KeyError-vs-get() pairing is the exam's favourite dictionary question.",
    topic: "dicts",
  },
  {
    id: "foc2-dict-27",
    type: "mcq",
    q: "Maya tries to tidy up and deletes a key that isn't there. What happens?",
    code: "alien_0 = {\"color\": \"green\"}\n\ndel alien_0[\"points\"]",
    options: [
      "Nothing — del quietly ignores missing keys",
      "The dictionary becomes empty",
      "KeyError — del demands the key too; guard it with if \"points\" in alien_0:",
      "points is created with the value None, then deleted",
    ],
    answer: 2,
    explain:
      "del removes an existing key-value pair entirely — and raises KeyError when the key is absent, exactly like a square-bracket read. Deleting only when the key exists (or using pop with a default) keeps the cleanup crash-free.",
    topic: "dicts",
  },
  {
    id: "foc2-dict-28",
    type: "mcq",
    q: "Maya accidentally lists jen twice in a dictionary literal. What prints?",
    code: "favourite_languages = {\"jen\": \"python\", \"sarah\": \"c\", \"jen\": \"rust\"}\n\nprint(favourite_languages[\"jen\"])",
    options: [
      "python — the first value wins",
      "['python', 'rust'] — both values queue up under the key",
      "rust — one key holds one value, so the later pair overwrites the earlier",
      "SyntaxError — duplicate keys are illegal",
    ],
    answer: 2,
    explain:
      "'One key → one value per person' is the rule from Lecture 21: a repeated key simply reassigns, and the last write wins. The dictionary keeps one jen, holding rust.",
    topic: "dicts",
  },
  {
    id: "foc2-dict-29",
    type: "mcq",
    q: "The nesting lecture ends with a warning about depth. What is its advice?",
    options: [
      "Never nest anything — keep every structure flat",
      "Two levels (a list of dicts, a dict of dicts) model most of reality cleanly; when three-plus levels start hurting to read, that's your cue for classes — waiting at the end of the course",
      "Dictionaries cannot nest deeper than one level",
      "Convert nested dictionaries into lists to flatten them",
    ],
    answer: 1,
    explain:
      "Nesting has a depth cost: two levels stay readable, three-plus get painful — and that pain is the on-ramp to classes. A 'why the tool exists' question, straight from the callout.",
    topic: "dicts",
  },
  {
    id: "foc2-dict-30",
    type: "short",
    q: "Name the three lenses for looping through a dictionary and what each hands the loop — then give the one-liner that prints each VALUE exactly once.",
    answerText:
      ".items() hands each (key, value) pair, unpacked into two loop variables; .keys() — or looping the dictionary directly, since keys are the default — hands each key; .values() hands each value. To print each value exactly once, wrap them in set(), the collection that keeps only unique items — and chain sorted(set(favourite_languages.values())) when alphabetical order is wanted too.",
    explain:
      "The examiner wants the three method names matched to what the loop receives, plus set() for deduplication — with sorted() as the bonus layer for order.",
    topic: "dicts",
  },

  /* ------------------------------------------------------------
     SLIVER 3 — USER INPUT & WHILE LOOPS  (L25 · L26)  ·  wave 2 · questions 90–101 (26 total)
     ------------------------------------------------------------ */
  {
    id: "foc2-while-15",
    type: "mcq",
    q: "What exactly does input(\"How old are you? \") do when the program reaches it?",
    options: [
      "Reads a number from the keyboard and returns it as an int",
      "Prints the prompt, freezes the whole program until the user presses Enter, then hands back whatever was typed — always as a string",
      "Prints the prompt and returns True or False",
      "Waits silently — the prompt is decoration that never appears on screen",
    ],
    answer: 1,
    explain:
      "input() shows the prompt, pauses everything, and returns the keystrokes as a STRING — even when the user types digits. The always-a-string rule is the seed of every int() conversion and every TypeError that follows.",
    topic: "while",
  },
  {
    id: "foc2-while-16",
    type: "mcq",
    q: "The deck's remainder drill. What does this print?",
    code: "print(4 % 3)\nprint(7 % 2)",
    options: [
      "1 and 1 — % returns the remainder: 3 fits into 4 once (remainder 1), and 2 fits into 7 three times (remainder 1)",
      "1.33 and 3.5 — % divides and keeps the decimals",
      "12 and 21 — % multiplies the digits",
      "0 and 0 — both pairs divide evenly",
    ],
    answer: 0,
    explain:
      "% is the remainder operator, not division. Its star role: number % 2 is 0 for evens and 1 for odds — the even/odd trick — and number % 10 == 0 spots multiples of 10.",
    topic: "while",
  },
  {
    id: "foc2-while-17",
    type: "output",
    q: "The multiple-of-10 check, run on 155. Write the exact output.",
    code: "number = 155\n\nif number % 10 == 0:\n    print(str(number) + \" is a multiple of 10.\")\nelse:\n    print(str(number) + \" is not a multiple of 10.\")\n\nprint(10 % 3)",
    answerText: "155 is not a multiple of 10.\n1",
    explain:
      "155 % 10 leaves 5, so the test == 0 fails and the else prints. Then 10 % 3 is the remainder after 3 fits into 10 three times — 1. Two remainder computations, one program.",
    topic: "while",
  },
  {
    id: "foc2-while-18",
    type: "output",
    q: "The deck's three-moving-parts lap counter. Write the exact output.",
    code: "runs = 0\n\nwhile runs < 3:\n    print(\"lap \" + str(runs + 1))\n    runs += 1\n\nprint(\"done — the condition finally failed\")",
    answerText: "lap 1\nlap 2\nlap 3\ndone — the condition finally failed",
    explain:
      "runs starts at 0, the condition lets three laps through (0, 1, 2 printed as laps 1–3), and runs += 1 is the change that moves toward False. When runs hits 3, 3 < 3 fails, the loop ends, and the unindented print announces it.",
    topic: "while",
  },
  {
    id: "foc2-while-19",
    type: "mcq",
    q: "Every correct while loop answers the deck's three moving parts. Which of these is NOT one of them?",
    options: [
      "Where the variable starts (the initialisation)",
      "The condition that decides to keep going",
      "The change that moves the loop toward False",
      "The name of the function the loop lives in",
    ],
    answer: 3,
    explain:
      "Initialise, condition, update — the three questions every while must answer. Miss the third and the condition never turns False: the infinite loop, stopped only by Ctrl-C or the interrupt button.",
    topic: "while",
  },
  {
    id: "foc2-while-20",
    type: "mcq",
    q: "A user types delhi, then quit. What does the program print?",
    code: "while True:\n    city = input(\"Which city? ('quit' to stop) \")\n    if city == \"quit\":\n        break\n    print(city.title() + \" — great choice!\")",
    options: [
      "Delhi — great choice! prints once; then quit triggers break and the loop ends without printing anything for quit",
      "Delhi — great choice! followed by Quit — great choice!",
      "Nothing — break fires before anything can print",
      "An infinite loop — while True can never end",
    ],
    answer: 0,
    explain:
      "while True loops forever unless something breaks out. \"delhi\".title() becomes Delhi and earns the compliment; \"quit\" matches the if, break kills the loop on the spot, and quit itself is never echoed.",
    topic: "while",
  },
  {
    id: "foc2-while-21",
    type: "mcq",
    q: "How many lines does this program print — and which?",
    code: "count = 10\n\nwhile count > 20:\n    print(count)\n    count -= 1\n\nprint(\"after\")",
    options: [
      "One — just after; the condition count > 20 is False before the first pass, so the loop body never runs",
      "Ten — 10 down to 1, then after",
      "None — a while loop that starts False crashes with an error",
      "Eleven — 10 down to 1, plus after",
    ],
    answer: 0,
    explain:
      "A while loop tests BEFORE its first pass: 10 > 20 is False immediately, so the body is skipped without complaint — no error, zero passes. Then the unindented print runs. Loops can legitimately run zero times.",
    topic: "while",
  },
  {
    id: "foc2-while-22",
    type: "mcq",
    q: "In the deck's mountain-poll program, what role does polling_active play — and what ends the loop?",
    code: "responses = {}\npolling_active = True\n\nwhile polling_active:\n    name = input(\"What is your name? \")\n    response = input(\"Which mountain? \")\n    responses[name] = response\n\n    repeat = input(\"Another responder? (yes/ no) \")\n    if repeat == \"no\":\n        polling_active = False\n\nfor name, mountain in responses.items():\n    print(name + \" would like to climb \" + mountain + \".\")",
    options: [
      "It is a counter — the loop ends after three responders",
      "It is a flag — one Boolean the while watches; typing 'no' flips it to False, the condition finally fails and the loop ends gracefully",
      "It is a sentinel value typed by the user at the name prompt",
      "It is a break — it exits the loop the moment it is declared",
    ],
    answer: 1,
    explain:
      "A flag is one Boolean governing the whole loop — many events can flip it, one off-switch. Here the 'no' answer flips polling_active to False, the while test fails on the next check, and the results print via .items().",
    topic: "while",
  },
  {
    id: "foc2-while-23",
    type: "output",
    q: "The deli purges the pastrami, then drains the queue. Write the exact output.",
    code: "sandwich_orders = [\"tuna\", \"pastrami\", \"veg\", \"pastrami\", \"grilled cheese\"]\nfinished_sandwiches = []\n\nwhile \"pastrami\" in sandwich_orders:\n    sandwich_orders.remove(\"pastrami\")\n\nwhile sandwich_orders:\n    finished_sandwiches.append(sandwich_orders.pop())\n\nprint(finished_sandwiches)\nprint(sandwich_orders)",
    answerText: "['grilled cheese', 'veg', 'tuna']\n[]",
    explain:
      "The first while strips BOTH pastramis — remove() takes one per pass and the test re-fires until none remain, leaving ['tuna', 'veg', 'grilled cheese']. The second while drains it from the END with pop(), so finished_sandwiches collects them in reverse and the order list ends empty.",
    topic: "while",
  },
  {
    id: "foc2-while-24",
    type: "mcq",
    q: "What does the final print show?",
    code: "total = 0\nn = 1\n\nwhile n <= 4:\n    total += n\n    n += 1\n\nprint(total)",
    options: [
      "4 — the last value of n",
      "10 — the loop adds 1 + 2 + 3 + 4 before n reaches 5 and the test fails",
      "24 — every number up to 4 gets multiplied in",
      "11 — total ends up one past the last n",
    ],
    answer: 1,
    explain:
      "Trace it: total becomes 1, 3, 6, 10 as n climbs 1 → 4. When n turns 5, 5 <= 4 fails and the loop hands over — total is 10. Accumulator loops are the exam's favourite trace after countdowns.",
    topic: "while",
  },
  {
    id: "foc2-while-25",
    type: "mcq",
    q: "Why does this loop stop — and what prints?",
    code: "unconfirmed = [\"meera\", \"zoya\"]\nconfirmed = []\n\nwhile unconfirmed:\n    confirmed.append(unconfirmed.pop())\n\nprint(len(confirmed))",
    options: [
      "It never stops — pop() on an empty list keeps the loop alive forever",
      "2 — a list name in a while condition is a truth test: it stays True while items remain and turns False (falsy) once the list is empty",
      "1 — pop() removes both items in a single pass",
      "0 — the loop appends nothing",
    ],
    answer: 1,
    explain:
      "while unconfirmed: re-tests the list every pass. Each pop() moves one rider; after two passes the list is empty, and an empty list is falsy — the condition fails and the loop ends with 2 confirmed. The falsy-empty-list rule from the if lectures, doing loop duty.",
    topic: "while",
  },
  {
    id: "foc2-while-26",
    type: "short",
    q: "A polling loop must stop when the user types 'quit'. Lecture 26 shows three exit styles. Name each and give the line that ends the loop in that style.",
    answerText:
      "Style 1 — the test lives in the while itself: while message != 'quit': Style 2 — a flag: start with active = True, loop while active:, and end with if message == 'quit': active = False. Style 3 — break: loop while True: and end with if message == 'quit': break. All three finish the same conversation — the difference is who decides to stop: the while test, a variable you flip, or an immediate exit.",
    explain:
      "The examiner wants the three names (conditional test in the while, flag, break) and the exact ending line for each — 'who decides to stop' is the deck's own summary phrase.",
    topic: "while",
  },

  /* ------------------------------------------------------------
     SLIVER 4 — FUNCTIONS, LECTURE 1 & 2  (L27 · L28)  ·  wave 2 · questions 102–120 (34 total)
     ------------------------------------------------------------ */
  {
    id: "foc2-fn-16",
    type: "mcq",
    q: "Python reaches the def line below. What happens right now?",
    code: "def greet_user():\n    \"\"\"Display a simple greeting.\"\"\"\n    print(\"Hello!\")",
    options: [
      "The body runs immediately — Hello! appears on screen",
      "Nothing runs — Python remembers the recipe; the body only executes when greet_user() is called",
      "The docstring prints as documentation",
      "A NameError — the function was never called",
    ],
    answer: 1,
    explain:
      "The def line means 'I'm defining a function': Python stores the name, the parameters and the body — and waits. The call line, greet_user(), is where Python finally runs the whole recipe.",
    topic: "functions",
  },
  {
    id: "foc2-fn-17",
    type: "mcq",
    q: "What does the call print?",
    code: "def greet_user(username):\n    \"\"\"Display a simple greeting.\"\"\"\n    print(\"Hello, \" + username.title() + \"!\")\n\ngreet_user(\"Arun\")",
    options: [
      "Hello, Arun!",
      "Hello, arun! — .title() lowercases everything after the first letter",
      "Hello, username!",
      "TypeError — greet_user() was defined without parameters",
    ],
    answer: 0,
    explain:
      "The argument \"Arun\" lands in the username parameter, .title() keeps it as Arun, and the print glues the greeting together. Definition waits, call delivers — the deck's greet.py exactly.",
    topic: "functions",
  },
  {
    id: "foc2-fn-18",
    type: "output",
    q: "The pet describer, called with the arguments in the def's own order. Write the exact output.",
    code: "def describe_pet(animal_type, pet_name):\n    print(\"I have a \" + animal_type + \".\")\n    print(\"My \" + animal_type + \"'s name is \" + pet_name.title() + \".\")\n\ndescribe_pet(\"hamster\", \"harry\")",
    answerText: "I have a hamster.\nMy hamster's name is Harry.",
    explain:
      "Positional matching sends \"hamster\" into animal_type and \"harry\" into pet_name. The first print uses animal_type twice; the second titles the name — Harry. Same code as the famous swapped call, but this time the order is right.",
    topic: "functions",
  },
  {
    id: "foc2-fn-19",
    type: "mcq",
    q: "The call uses keyword arguments in reverse order. What prints?",
    code: "def describe_pet(animal_type, pet_name):\n    print(\"I have a \" + animal_type + \".\")\n    print(\"My \" + animal_type + \"'s name is \" + pet_name.title() + \".\")\n\ndescribe_pet(pet_name=\"Kyle\", animal_type=\"Parrot\")",
    options: [
      "I have a Kyle. · My Kyle's name is Parrot.",
      "I have a Parrot. · My Parrot's name is Kyle. — each keyword wired its value to the right parameter; call order is irrelevant",
      "TypeError — keyword arguments must follow the def's parameter order",
      "I have a hamster. · My hamster's name is Harry.",
    ],
    answer: 1,
    explain:
      "A keyword argument is a name-value pair: Python reads pet_name= and animal_type= and wires each value to its named parameter directly, so the order in the call no longer matters. Matched by name, not by position.",
    topic: "functions",
  },
  {
    id: "foc2-fn-20",
    type: "mcq",
    q: "The call stays silent about the instructor. What prints?",
    code: "def describe_BSMT(course_name, instructor_name=\"aman\"):\n    print(\"I am enrolled in the \" + course_name + \" course.\")\n    print(\"The instructor for the \" + course_name + \" is \" + instructor_name.title() + \".\")\n\ndescribe_BSMT(\"Foundations of Computing\")",
    options: [
      "I am enrolled in the Foundations of Computing course. · The instructor for the Foundations of Computing is Aman. — the default filled in",
      "I am enrolled in the Foundations of Computing course. · The instructor for the Foundations of Computing is . — the default is an empty string",
      "TypeError — instructor_name is missing and has no default",
      "I am enrolled in the Foundations of Computing course. · The instructor for the Foundations of Computing is Hari.",
    ],
    answer: 0,
    explain:
      "A default parameter steps in whenever the call leaves it out: course_name takes the positional argument, instructor_name falls back to \"aman\" and titles up to Aman. Pass instructor_name=\"hari\" and the default would be ignored for that call.",
    topic: "functions",
  },
  {
    id: "foc2-fn-21",
    type: "mcq",
    q: "Riya wrote the parameters in this order. What happens?",
    code: "def describe_student(student_name, instructor_name=\"aman\", course_name):\n    print(\"My name is \" + student_name + \".\")",
    options: [
      "SyntaxError — a parameter with a default must come AFTER every parameter without one; course_name can't follow instructor_name",
      "It works — Python fills course_name from the default",
      "It works — defaults may appear anywhere in the def",
      "NameError — course_name is undeclared",
    ],
    answer: 0,
    explain:
      "The ordering rule from Lecture 27: defaults go last, so Python can keep matching positional arguments correctly. A non-default parameter trailing a defaulted one stops the program at the def line itself — before any call.",
    topic: "functions",
  },
  {
    id: "foc2-fn-22",
    type: "mcq",
    q: "One argument, two required parameters. What happens?",
    code: "def describe_pet(animal_type, pet_name):\n    print(\"I have a \" + animal_type + \".\")\n\ndescribe_pet(\"Bruno\")",
    options: [
      "pet_name is set to None and the program continues",
      "TypeError — missing 1 required positional argument: 'pet_name'; the traceback points at the call line",
      "Bruno fills both parameters",
      "SyntaxError — the def itself is invalid",
    ],
    answer: 1,
    explain:
      "Every parameter without a default must receive something. Python counts the arguments, finds one short, and raises TypeError naming the missing parameter — that is why descriptive parameter names make tracebacks readable.",
    topic: "functions",
  },
  {
    id: "foc2-fn-23",
    type: "output",
    q: "The optional middle name, called both ways. Write the exact output.",
    code: "def get_formatted_name(first_name, last_name, middle_name=\"\"):\n    if middle_name:\n        full_name = first_name + \" \" + middle_name + \" \" + last_name\n    else:\n        full_name = first_name + \" \" + last_name\n    return full_name.title()\n\nprint(get_formatted_name(\"arijit\", \"singh\"))\nprint(get_formatted_name(\"lana\", \"rey\", \"del\"))",
    answerText: "Arijit Singh\nLana Del Rey",
    explain:
      "Call one sends no middle name: middle_name defaults to \"\", an empty string is falsy, so the else builds 'arijit singh' and .title() delivers Arijit Singh. Call two supplies \"del\", the if fires, and 'lana del rey'.title() becomes Lana Del Rey. One function, both shapes.",
    topic: "functions",
  },
  {
    id: "foc2-fn-24",
    type: "mcq",
    q: "The dictionary builder, called with an age. What prints?",
    code: "def build_person(first_name, last_name, age=\"\"):\n    person = {\"first\": first_name, \"last\": last_name}\n    if age:\n        person[\"age\"] = age\n    return person\n\nprint(build_person(\"daksh\", \"parashar\", age=18))",
    options: [
      "{'first': 'daksh', 'last': 'parashar'}",
      "{'first': 'daksh', 'last': 'parashar', 'age': 18}",
      "{'daksh': 'first', 'parashar': 'last', 18: 'age'}",
      "('daksh', 'parashar', 18)",
    ],
    answer: 1,
    explain:
      "The parameters fill the dictionary's VALUES under the fixed keys first and last; then age=18 is truthy, so the if adds the age pair before return hands the finished record back. Call it without age and the if skips — same function, two record shapes.",
    topic: "functions",
  },
  {
    id: "foc2-fn-25",
    type: "mcq",
    q: "What prints — and why is 'bonus applied' missing?",
    code: "def get_points(alien):\n    return alien[\"points\"] * 2\n    print(\"bonus applied\")\n\nprint(get_points({\"points\": 5}))",
    options: [
      "10 — return hands the value back and ends the call on the spot; no line after return in the body ever runs",
      "10 and then bonus applied — the rest of the body still executes",
      "None — return threw the value away",
      "KeyError — 'points' cannot be read inside a function",
    ],
    answer: 0,
    explain:
      "return does two jobs at once: it sends the value back to the calling line AND ends the function immediately. 5 * 2 comes back as 10; the print below return is dead code, reached by nobody.",
    topic: "functions",
  },
  {
    id: "foc2-fn-26",
    type: "output",
    q: "One call greets the whole roster. Write the exact output.",
    code: "def greet_users(names):\n    for name in names:\n        msg = \"Hello, \" + name.title() + \"!\"\n        print(msg)\n\ngreet_users([\"priyanka\", \"unnati\", \"anaaya\"])",
    answerText: "Hello, Priyanka!\nHello, Unnati!\nHello, Anaaya!",
    explain:
      "The list travels into the names parameter, the for loop walks it in order, and .title() caps each name as the greeting is built — three items in, three lines out. One call, an entire roster greeted.",
    topic: "functions",
  },
  {
    id: "foc2-fn-27",
    type: "mcq",
    q: "Maya calls print_models with the list itself — no slice. What do the two prints show?",
    code: "def print_models(unprinted_designs, completed_models):\n    while unprinted_designs:\n        completed_models.append(unprinted_designs.pop())\n\ndesigns = [\"ferrari\", \"honda\", \"ford\"]\ndone = []\n\nprint_models(designs, done)\nprint(len(designs))\nprint(done)",
    options: [
      "3 and ['ferrari', 'honda', 'ford'] — the function copied the list before emptying it",
      "0 and ['ford', 'honda', 'ferrari'] — the function received the list ITSELF; pop() moved every design out for good",
      "0 and ['ferrari', 'honda', 'ford'] — pop() takes from the front",
      "NameError — done was never passed in",
    ],
    answer: 1,
    explain:
      "Passing the list hands the function the real thing: pop() drains designs from the end (ford, honda, ferrari), done collects them in that order, and the original is permanently empty. Protect it with print_models(designs[:], done) — the slice copy trick.",
    topic: "functions",
  },
  {
    id: "foc2-fn-28",
    type: "mcq",
    q: "With def describe_pet(pet_name, animal_type=\"dog\"), three of these calls work. Which one FAILS?",
    code: "def describe_pet(pet_name, animal_type=\"dog\"):\n    print(\"I have a \" + animal_type + \" named \" + pet_name + \".\")",
    options: [
      "describe_pet(\"willie\")",
      "describe_pet(pet_name=\"willie\")",
      "describe_pet(\"harry\", \"hamster\")",
      "describe_pet(animal_type=\"hamster\") — pet_name has no default, so it is missing: TypeError",
    ],
    answer: 3,
    explain:
      "The equivalent-calls list: a positional argument, a name-value pair, or both in any mix — but every parameter WITHOUT a default must receive something. Feeding only animal_type starves pet_name and Python raises TypeError at the call.",
    topic: "functions",
  },
  {
    id: "foc2-fn-29",
    type: "mcq",
    q: "The asterisk at work on a single topping. What prints?",
    code: "def make_pizza(*toppings):\n    print(toppings)\n\nmake_pizza(\"pepperoni\")",
    options: [
      "pepperoni — the value arrives bare",
      "('pepperoni',) — even ONE value arrives packed into a tuple, trailing comma and all",
      "['pepperoni'] — the star builds a list",
      "TypeError — the function was defined for many arguments",
    ],
    answer: 1,
    explain:
      "The asterisk tells Python to make an empty tuple called toppings and pack whatever arrives into it — one topping or five, the call is treated identically. Print it and the tuple shows its round brackets and its trailing comma.",
    topic: "functions",
  },
  {
    id: "foc2-fn-30",
    type: "mcq",
    q: "def make_pizza(size, *toppings) — why must *toppings come last?",
    options: [
      "Style only — Python lets the asterisk parameter sit anywhere",
      "Python matches the normal positional and keyword arguments first, then packs every leftover into the final parameter — so the arbitrary one must be last",
      "Because size needs a default value",
      "Because tuples cannot appear first in a def",
    ],
    answer: 1,
    explain:
      "The routing rule: size catches the first value, then the star sweeps up everything that remains. Put the star first and Python would have no clean way to know where the extras end and size begins.",
    topic: "functions",
  },
  {
    id: "foc2-fn-31",
    type: "mcq",
    q: "In build_profile(first, last, **extra), what is extra inside the function?",
    code: "def build_profile(first, last, **extra):\n    profile = {\"first\": first, \"last\": last}\n    for key, value in extra.items():\n        profile[key] = value\n    return profile",
    options: [
      "A tuple of the leftover values",
      "A list of the leftover keyword names",
      "A dictionary — two stars pack the unclaimed keyword arguments into key–value pairs",
      "A string joining every argument together",
    ],
    answer: 2,
    explain:
      "One star packs positionals into a tuple; two stars pack KEYWORD arguments into a dictionary — which is why the loop can call extra.items(). build_profile('albert', 'einstein', location='princeton') holds {'location': 'princeton'} in extra.",
    topic: "functions",
  },
  {
    id: "foc2-fn-32",
    type: "output",
    q: "The function lives in another file. Write the exact output of the main program.",
    code: "# pizza.py\ndef greet(name):\n    \"\"\"Return a friendly greeting.\"\"\"\n    return \"Hello, \" + name + \"!\"\n\n# main program\nimport pizza\n\nprint(pizza.greet(\"Aditya\"))",
    answerText: "Hello, Aditya!",
    explain:
      "import pizza opens pizza.py and makes its functions available under the module's name — so the call is pizza.greet(\"Aditya\") with the dot naming the module. The function runs, returns the string, and print shows it.",
    topic: "functions",
  },
  {
    id: "foc2-fn-33",
    type: "mcq",
    q: "After from pizza import make_pizza, which call style works?",
    options: [
      "pizza.make_pizza(16, \"pepperoni\") — the prefix is still required",
      "make_pizza(16, \"pepperoni\") — the function was imported under its own name, no prefix needed",
      "import.make_pizza(16, \"pepperoni\")",
      "Both pizza.make_pizza(...) and bare make_pizza(...) work",
    ],
    answer: 1,
    explain:
      "import pizza keeps the module prefix (pizza.make_pizza); from pizza import make_pizza copies the name straight into the program, so the bare call works and the prefixed one fails. Choose the style, then stay consistent.",
    topic: "functions",
  },
  {
    id: "foc2-fn-34",
    type: "short",
    q: "The deck's 3D-printer program splits into two functions. Name both, say what each does, and explain why the caller writes print_models(designs[:], done) when the original list must survive.",
    answerText:
      "print_models(unprinted_designs, completed_models) does the moving: while unprinted_designs: pops each design, 'prints' it, and appends it to completed_models. show_completed_models(completed_models) does the displaying: one tidy report of what was printed. Each function has one specific job, so each can be edited or re-called independently. print_models modifies the list it receives permanently, so passing designs[:] sends a full-copy slice — the function empties the copy while the original list stays intact.",
    explain:
      "The examiner wants: one function, one job; the pop → print → append pipeline versus the display loop; and the [:] copy trick as the guard for the original.",
    topic: "functions",
  },
];
