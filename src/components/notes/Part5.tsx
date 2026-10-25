"use client";

import React, { useState } from "react";
import {
  Type,
  Hash,
  MessageSquare,
  ListOrdered,
  RotateCcw,
  Plus,
  CornerDownRight,
  Trash2,
  Sigma,
} from "lucide-react";
import { Reveal, Section, SectionHead, Callout, Quiz, CodeBlock, Practice, Takeaways } from "./ui";

/* ============================================================
   PYTHON BASICS
   ============================================================ */
const KEYWORDS = [
  "False","None","True","and","as","assert","break","class","continue","def","del",
  "elif","else","except","finally","for","from","global","if","import","in","is",
  "lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield",
];

export function BasicsSection() {
  return (
    <Section id="basics">
      <SectionHead
        eyebrow="Python · chapter 1"
        title={
          <>
            Variables, strings, numbers & <span className="grad-text">comments</span>
          </>
        }
        lead="Four small ideas that every program in history is built from. Master these and the rest of Python becomes vocabulary, not mystery."
      />

      {/* Variables */}
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <Type className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">Variables — labelled boxes for values</h3>
          </div>
          <p className="mt-3 max-w-4xl text-[.92rem] leading-relaxed text-[#2b2014]">
            A variable is a name that refers to a value. We <strong>assign</strong> with
            a single <span className="font-mono-warm font-bold">=</span>, and the value
            lives in RAM (Pillar 3!) while the program runs.
          </p>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="hello_world.py"
              code={`message = "Hello Python world!"
print(message)

# Reassign — the same name, a new value
message = "Hello Python Crash Course world!"
print(message)`}
              output={"Hello Python world!\nHello Python Crash Course world!"}
              note="Variables can change value at any time — that’s why they’re called variable."
            />
            <div>
              <p className="text-[.8rem] font-extrabold uppercase tracking-[.16em] text-[#8a5a10]">
                Naming rules — break these and Python errors
              </p>
              <ul className="mt-2 grid gap-1.5 text-[.88rem] text-[#2b2014]">
                <li>• Only <strong>letters, numbers and underscores</strong></li>
                <li>• Can start with a letter or underscore — <strong>never a number</strong> (<code className="font-mono-warm">message_1</code> ✓, <code className="font-mono-warm">1_message</code> ✗)</li>
                <li>• <strong>Spaces are not allowed</strong> — use underscores (<code className="font-mono-warm">greeting_message</code> ✓, <code className="font-mono-warm">greeting message</code> ✗)</li>
                <li>• Never use <strong>Python keywords</strong> or function names like <code className="font-mono-warm">print</code></li>
              </ul>
              <p className="mt-3 text-[.8rem] font-extrabold uppercase tracking-[.16em] text-[#8a5a10]">
                Naming guidelines — style, not law
              </p>
              <ul className="mt-2 grid gap-1.5 text-[.88rem] text-[#2b2014]">
                <li>• Short but descriptive: <code className="font-mono-warm">name</code> beats <code className="font-mono-warm">n</code>; <code className="font-mono-warm">student_name</code> beats <code className="font-mono-warm">s_n</code>; <code className="font-mono-warm">name_length</code> beats <code className="font-mono-warm">length_of_persons_name</code></li>
                <li>• Beware lowercase <strong>l</strong> and uppercase <strong>O</strong> — they look like <strong>1</strong> and <strong>0</strong></li>
                <li>• Use <strong>lowercase</strong> variable names — uppercase won’t error, but it’s the convention</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-[.8rem] font-extrabold uppercase tracking-[.16em] text-[#8a5a10]">
              The 35 Python keywords — reserved forever, error if used as names
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {KEYWORDS.map((k) => (
                <code
                  key={k}
                  className="rounded-md px-2 py-1 font-mono-warm text-[.74rem] font-bold"
                  style={{ background: "#fbf3e3", color: "#8a4508", border: "1px solid #f0d9ba" }}
                >
                  {k}
                </code>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* Name error */}
      <Reveal className="mt-6">
        <CodeBlock
          title="avoiding_name_errors.py"
          code={`message = "Hello Python Crash Course reader!"
print(mesage)   # typo — the name doesn't exist`}
          output={"NameError: name 'mesage' is not defined"}
          note={
            <>
              A <strong>NameError</strong> usually means one of three things: the
              variable was never assigned, we misspelled it when using it, or we
              misspelled it when assigning. Python executes top to bottom — a variable
              must exist <em>before</em> the line that uses it.
            </>
          }
        />
      </Reveal>

      {/* Strings */}
      <Reveal className="mt-12">
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <MessageSquare className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">Strings — a series of characters</h3>
          </div>
          <p className="mt-3 max-w-4xl text-[.92rem] leading-relaxed text-[#2b2014]">
            A string is simply a series of characters. <strong>Anything inside quotes
            is a string</strong> in Python — and you may use <strong>single or double
            quotes</strong>. That flexibility lets quotes and apostrophes live inside
            your strings.
          </p>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="strings_intro.py"
              code={`"This is a string."
'This is also a string.'

# Flexibility in action:
'I told my friend, "Python is my favorite language!"'

"The language 'Python' is named after Monty Python, not the snake."

"One of Python's strengths is its diverse and supportive community."`}
            />
            <CodeBlock
              title="changing_case_and_whitespace.py"
              code={`name = "ada lovelace"

print(name.title())    # Each Word Capitalized
print(name.upper())    # ALL CAPS
print(name.upper().lower())  # back to lowercase

# Whitespace: tabs and newlines
print("Python")
print("\\tPython")        # tab indent
print("Languages:\\nPython\\nC\\nJavaScript")

# Stripping whitespace
fav = "  python  "
print(fav.lstrip())   # strip left
print(fav.rstrip())   # strip right
print(fav.strip())    # strip both`}
              output={"Ada Lovelace\nADA LOVELACE\nada lovelace\n\nLanguages:\nPython\nC\nJavaScript\npython    \n  python\npython"}
            />
          </div>
          <Callout kind="insight" title="Pro combo — f-strings">
            To weave variables into strings, put an <code className="font-mono-warm">f</code> before
            the quote: <code className="font-mono-warm">f"Hello, {`{first_name}`}!"</code> — Python
            replaces the braces with the value. You’ll use this constantly.
          </Callout>
        </div>
      </Reveal>

      {/* Numbers */}
      <Reveal className="mt-6">
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <Hash className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">Numbers — keeping score of the world</h3>
          </div>
          <p className="mt-3 max-w-4xl text-[.92rem] leading-relaxed text-[#2b2014]">
            Numbers are used often in programming — to keep score in games, represent
            data in visualizations, store information in web applications. Python
            treats numbers in several ways depending on use: <strong>integers</strong>{" "}
            (whole numbers) and <strong>floats</strong> (any number with a decimal point).
          </p>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="try_arithmetic.py"
              code={`print(5 + 3)   # addition        → 8
print(10 - 2)  # subtraction     → 8
print(2 * 4)   # multiplication  → 8
print(16 / 2)  # division        → 8.0 (a float!)

# Integers vs floats
print(2 + 3)      # 5      (int)
print(3 / 2)      # 1.5    (float)
print(1_000_000)  # underscores make big numbers readable → 1000000`}
            />
            <CodeBlock
              title="favorite_number.py"
              code={`favorite_number = 7
message = f"My favorite number is {favorite_number}."
print(message)`}
              output={"My favorite number is 7."}
            />
          </div>
        </div>
      </Reveal>

      {/* Comments */}
      <Reveal className="mt-6">
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <Sigma className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">Comments — notes in English, inside code</h3>
          </div>
          <p className="mt-3 max-w-4xl text-[.92rem] leading-relaxed text-[#2b2014]">
            Comments are an extremely useful feature in most programming languages. As
            programs become longer and more complicated, we should add notes that
            describe the overall approach to the problem we’re solving. A comment lets
            us write notes in English within our programs — Python ignores everything
            after the <code className="font-mono-warm font-bold">#</code>.
          </p>
          <CodeBlock
            className="mt-5"
            title="comments.py"
            code={`# Say hello to everyone.
print("Hello Python people!")

# The hash (#) starts a comment — Python ignores the rest of the line.
# Write comments for the WHY, not the what: the code already says what it does.`}
          />
        </div>
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz
            source="Concept check"
            q="Which variable name is legal but badly styled?"
            options={["1_message", "greeting message", "student_name", "print"]}
            answer={2}
            explain="student_name is legal and well styled. 1_message (starts with a number) and 'greeting message' (space) cause SyntaxErrors; print shadows a built-in function."
          />
        </Reveal>
        <Reveal delay={100}>
          <Quiz
            source="Concept check"
            q={'print("Languages:\\nPython") — what does the \\n do?'}
            options={["Prints a backslash and n", "Inserts a newline character", "Comments out the rest", "Converts to uppercase"]}
            answer={1}
            explain="\\n is the newline escape — it moves output to the next line. \\t inserts a tab. Both are 'whitespace' characters you can strip later with lstrip/rstrip/strip."
          />
        </Reveal>
      </div>

      <Reveal className="mt-6">
        <Practice
          title="Try It Yourself — basics drills"
          items={[
            { q: <>Store a message in a variable, print it. Then change the value to a new message and print again.</>, hint: "two print() calls, one variable reassigned" },
            { q: <>Store a person’s name and print: “Hello Eric, would you like to learn some Python today?”</>, hint: "f-string with the name variable" },
            { q: <>Print a person’s name in lowercase, uppercase and titlecase.</>, hint: ".lower() .upper() .title()" },
            { q: <>Print a famous quote with its quotation marks: Albert Einstein once said, “A person who never made a mistake never tried anything new.”</>, hint: "mix single and double quotes" },
            { q: <>Repeat with the name in a variable famous_person and the message in a variable message.</>, hint: "compose, then print the message" },
            { q: <>Store a name with whitespace: use “\\t” and “\\n” at least once. Print it raw, then with lstrip(), rstrip() and strip().</> },
            { q: <>Write addition, subtraction, multiplication and division that each result in 8 — four print() lines like print(5 + 3).</> },
            { q: <>Store your favorite number; use an f-string to reveal it in a message.</> },
            { q: <>Choose two of your programs and add at least one comment describing what each does.</> },
          ]}
        />
      </Reveal>

      <Reveal className="mt-6">
        <Takeaways
          items={[
            <>Variables are <strong>named references to values</strong>; naming has hard rules (letters/numbers/underscores, no leading digit, no keywords) and style guidelines (lowercase, descriptive, avoid l/O).</>,
            <>Strings accept <strong>single or double quotes</strong>; <strong>.title()/.upper()/.lower()</strong> change case; <strong>\\t and \\n</strong> add whitespace; <strong>strip()</strong> removes it.</>,
            <>Integers and <strong>floats</strong> power arithmetic; <strong>underscores</strong> make big numbers readable.</>,
            <><code className="font-mono-warm">#</code> comments explain the <em>why</em>; <strong>f-strings</strong> fuse variables into text.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   LISTS
   ============================================================ */
function ListVisualizer() {
  const [items, setItems] = useState<{ id: number; v: string }[]>([
    { id: 1, v: "trek" },
    { id: 2, v: "cannondale" },
    { id: 3, v: "redline" },
    { id: 4, v: "specialized" },
  ]);
  const [msg, setMsg] = useState("bicycles[0] → 'trek'  · indexes start at 0");
  const nextId = React.useRef(5);

  const push = (v: string, note: string) => {
    setItems((xs) => [...xs, { id: nextId.current++, v }]);
    setMsg(note);
  };
  const reset = () => {
    setItems([
      { id: 1, v: "trek" },
      { id: 2, v: "cannondale" },
      { id: 3, v: "redline" },
      { id: 4, v: "specialized" },
    ]);
    setMsg("bicycles = ['trek', 'cannondale', 'redline', 'specialized']");
  };

  const btn =
    "rounded-full px-3.5 py-2 text-[.76rem] font-bold transition hover:scale-105 disabled:opacity-40";
  const btnStyle = { background: "linear-gradient(135deg,#fde8cf,#fbcf9f)", color: "#7c3a06", border: "1px solid #eec495" };

  return (
    <div className="card-warm p-6 md:p-7">
      <p className="eyebrow">Live playground</p>
      <h3 className="mt-2 text-xl font-bold">Poke the list — watch every method in action</h3>
      <div className="mt-5 flex min-h-[76px] flex-wrap items-center gap-2 rounded-2xl p-4" style={{ background: "#fbf3e3", border: "1px dashed #e5c79d" }}>
        <span className="font-mono-warm text-[.8rem] font-bold text-[#8a4508]">bicycles&nbsp;=&nbsp;[</span>
        {items.map((it, i) => (
          <span key={it.id} className="lv-item rounded-lg px-3 py-1.5 font-mono-warm text-[.8rem] font-bold">
            <span className="mr-1.5 rounded bg-white/60 px-1 text-[.62rem] text-[#8a4508]">{i}</span>
            '{it.v}'
          </span>
        ))}
        <span className="font-mono-warm text-[.8rem] font-bold text-[#8a4508]">]</span>
        {items.length === 0 ? (
          <span className="font-mono-warm text-[.8rem] text-[#be4a4a]">[] — empty list (falsy!)</span>
        ) : null}
      </div>
      <p className="mt-3 rounded-xl px-4 py-2 font-mono-warm text-[.8rem]" style={{ background: "#2b1b10", color: "#ffd9a3" }}>
        # {msg}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button className={btn} style={btnStyle} onClick={() => push("huffy", "bicycles.append('huffy') → added at the END")}>
          <Plus className="mr-1 inline h-3.5 w-3.5" /> append('huffy')
        </button>
        <button
          className={btn}
          style={btnStyle}
          onClick={() => {
            setItems((xs) => {
              if (!xs.length) { setMsg("list is empty — insert still works!"); const c = [...xs, { id: nextId.current++, v: "yamaha" }]; return c; }
              const c = [...xs];
              c.splice(1, 0, { id: nextId.current++, v: "yamaha" });
              return c;
            });
            setMsg("bicycles.insert(1, 'yamaha') → inserted at index 1, everything after shifts right");
          }}
        >
          <CornerDownRight className="mr-1 inline h-3.5 w-3.5" /> insert(1, 'yamaha')
        </button>
        <button
          className={btn}
          style={btnStyle}
          onClick={() => {
            setItems((xs) => {
              if (!xs.length) { setMsg("del needs an index — the list is empty"); return xs; }
              const c = [...xs];
              c.splice(0, 1);
              setMsg("del bicycles[0] → deleted the item at index 0");
              return c;
            });
          }}
        >
          <Trash2 className="mr-1 inline h-3.5 w-3.5" /> del bicycles[0]
        </button>
        <button
          className={btn}
          style={btnStyle}
          onClick={() => {
            setItems((xs) => {
              if (!xs.length) { setMsg("pop() on an empty list → IndexError"); return xs; }
              const c = [...xs];
              const last = c[c.length - 1];
              setMsg(`popped = bicycles.pop() → removed '${last.v}' (last item) — pop RETURNS the value`);
              c.pop();
              return c;
            });
          }}
        >
          pop()
        </button>
        <button
          className={btn}
          style={btnStyle}
          onClick={() => {
            setItems((xs) => {
              const c = [...xs];
              const idx = c.findIndex((x) => x.v === "redline");
              if (idx === -1) { setMsg("bicycles.remove('redline') → ValueError: not in list (it was already removed)"); return xs; }
              setMsg("bicycles.remove('redline') → removes by VALUE, but only the FIRST occurrence");
              c.splice(idx, 1);
              return c;
            });
          }}
        >
          remove('redline')
        </button>
        <button
          className={btn}
          style={btnStyle}
          onClick={() => {
            setItems((xs) => {
              const c = [...xs].sort((a, b) => a.v.localeCompare(b.v));
              setMsg("bicycles.sort() → sorted alphabetically, PERMANENTLY");
              return c;
            });
          }}
        >
          sort()
        </button>
        <button
          className={btn}
          style={btnStyle}
          onClick={() => {
            setItems((xs) => {
              const c = [...xs].reverse();
              setMsg("bicycles.reverse() → order flipped, PERMANENTLY");
              return c;
            });
          }}
        >
          reverse()
        </button>
        <button className={btn} style={{ ...btnStyle, background: "#2b1b10", color: "#ffd9a3", border: "1px solid #4a3020" }} onClick={reset}>
          <RotateCcw className="mr-1 inline h-3.5 w-3.5" /> reset
        </button>
      </div>
    </div>
  );
}

const SORTED_TABLE = [
  { call: "cars.sort()", effect: "sorts alphabetically, permanently — original order lost", alt: "cars.sort(reverse=True) sorts Z→A" },
  { call: "sorted(cars)", effect: "returns a sorted COPY — original order preserved", alt: "sorted(cars, reverse=True)" },
  { call: "cars.reverse()", effect: "flips the current order permanently (not alphabetical!)", alt: "call twice to undo" },
  { call: "len(cars)", effect: "returns how many items the list holds", alt: "works on strings too" },
];

export function ListsSection() {
  return (
    <Section id="lists" dark>
      <SectionHead
        dark
        eyebrow="Python · chapter 2"
        title={
          <>
            <span className="grad-text">Lists</span> — and working with them like a pro
          </>
        }
        lead="A list is an ordered collection of items in square brackets — the workhorse data structure of Python. You’ll access, modify, add, remove, sort, slice, loop over and finally protect data with tuples."
      />

      {/* What is a list + access */}
      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal>
          <CodeBlock
            title="bicycles.py"
            code={`bicycles = ['trek', 'cannondale', 'redline', 'specialized']

print(bicycles)          # the whole list
print(bicycles[0])       # first element
print(bicycles[0].title())

# Index positions START AT 0, not 1!
print(bicycles[1])   # 2nd item
print(bicycles[3])   # 4th item
print(bicycles[-1])  # last item — negative indexes count backwards`}
              output={"\n['trek', 'cannondale', 'redline', 'specialized']\ntrek\nTrek\ncannondale\nspecialized\nspecialized"}
              note={'Using individual values: f"My first bicycle was a {bicycles[0].title()}."'}
          />
        </Reveal>
        <Reveal delay={120}>
          <CodeBlock
            title="motorcycles.py — modify · add · remove"
            code={`motorcycles = ['honda', 'yamaha', 'suzuki']

# MODIFY — assign by index
motorcycles[0] = 'ducati'

# ADD
motorcycles.append('honda')       # to the end
motorcycles.insert(0, 'ducati')   # at any index

# REMOVE — three ways
del motorcycles[0]                # by index
popped = motorcycles.pop()        # removes & RETURNS last
first = motorcycles.pop(0)        # pops any index
too_expensive = 'yamaha'
motorcycles.remove(too_expensive) # by VALUE (first match only)`}
              note="remove() deletes only the first occurrence — loop it to remove all. pop() is perfect when you want to use the removed value (like popping the most recent player from a roster)."
          />
        </Reveal>
      </div>

      <Reveal className="mt-8">
        <ListVisualizer />
      </Reveal>

      {/* Organizing */}
      <Reveal className="mt-10">
        <div className="card-warm p-6 md:p-8">
          <p className="eyebrow">Organizing a list</p>
          <h3 className="mt-2 text-2xl font-bold">sort(), sorted(), reverse(), len()</h3>
          <div className="mt-5 overflow-x-auto">
            <table className="warm-table min-w-[640px]">
              <thead>
                <tr><th>Call</th><th>Effect</th><th>Variation</th></tr>
              </thead>
              <tbody>
                {SORTED_TABLE.map((r) => (
                  <tr key={r.call}>
                    <td className="font-mono-warm font-bold text-[#8a4508]">{r.call}</td>
                    <td>{r.effect}</td>
                    <td>{r.alt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>

      {/* Loops */}
      <Reveal className="mt-10">
        <div className="card-warm p-6 md:p-8">
          <p className="eyebrow">Looping through an entire list</p>
          <h3 className="mt-2 text-2xl font-bold">The for loop — Python’s workhorse</h3>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="magicians.py"
              code={`magicians = ['alice', 'david', 'carolina']
for magician in magicians:
    print(magician)

# Doing more work inside the loop
for magician in magicians:
    print(f"{magician.title()}, that was a great trick!")
    print(f"I can't wait to see your next trick, {magician.title()}.\\n")

print("Thank you, everyone. That was a great magic show!")  # runs once, after the loop`}
              output={"alice\ndavid\ncarolina\n\nAlice, that was a great trick!\n..."}
            />
            <div>
              <p className="text-[.8rem] font-extrabold uppercase tracking-[.16em] text-[#d9b88c]">
                Indentation — Python’s grammar
              </p>
              <ul className="mt-2 grid gap-1.5 text-[.88rem] text-[#e9d7bf]">
                <li>• Python uses <strong>indentation (4 spaces)</strong> to structure programs — lines indented after the <code className="font-mono-warm">for</code> line belong to the loop</li>
                <li>• <strong>Forgetting to indent</strong> → IndentationError: expected an indented block</li>
                <li>• <strong>Indenting unnecessarily</strong> → an unexpected indent error (or logic that runs too many times)</li>
                <li>• <strong>Forgetting the colon</strong> after the loop statement → SyntaxError</li>
              </ul>
              <Callout kind="warn" title="The classic bug">
                A line accidentally indented <em>inside</em> a loop will repeat for every
                item. If an action should happen once, keep it at the outer level.
              </Callout>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Numerical lists + range */}
      <Reveal className="mt-10">
        <div className="card-warm p-6 md:p-8">
          <p className="eyebrow">Making numerical lists</p>
          <h3 className="mt-2 text-2xl font-bold">range() — Python’s number factory</h3>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="range_basics.py"
              code={`for value in range(1, 5):   # 1,2,3,4 — stops BEFORE 5
    print(value)

even = list(range(2, 11, 2))  # start, stop, step
print(even)                    # [2,4,6,8,10]

odds = list(range(1, 21, 2))   # odd numbers 1..20
threes = list(range(3, 31, 3)) # multiples of 3

digits = list(range(1, 10))
print(min(digits), max(digits), sum(digits))  # 1 9 45

cubes = [n**3 for n in range(1, 11)]  # 2**3 means 2 cubed
print(cubes)`}
              output={"1\n2\n3\n4\n[2, 4, 6, 8, 10]\n1 9 45\n[1, 8, 27, 64, 125, 216, 343, 512, 729, 1000]"}
            />
            <div>
              <Callout kind="insight" title="Off-by-one, memorized once">
                <code className="font-mono-warm">range(1, 5)</code> gives 1, 2, 3, 4 — it
                <strong> stops before the second number</strong>. To reach 5, write{" "}
                <code className="font-mono-warm">range(1, 6)</code>. This habit will save
                you a hundred bugs.
              </Callout>
              <Callout kind="why" title="Million-element lists are fine">
                <code className="font-mono-warm">list(range(1, 1_000_001))</code> is a
                million numbers — Python builds it in a blink. Printing them takes a
                while; press <strong>Ctrl-C</strong> (or stop the cell) if the output
                floods.
              </Callout>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Slices */}
      <Reveal className="mt-10">
        <div className="card-warm p-6 md:p-8">
          <p className="eyebrow">Working with part of a list</p>
          <h3 className="mt-2 text-2xl font-bold">Slices & copying — with a famous trap</h3>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="players.py — slicing"
              code={`players = ['charles', 'martina', 'michael',
           'florence', 'eli']

print(players[0:3])   # first three
print(players[1:4])   # middle three
print(players[-3:])   # last three
print(players[:3])    # from start
print(players[3:])    # to the end`}
              output={"['charles', 'martina', 'michael']\n['martina', 'michael', 'florence']\n['michael', 'florence', 'eli']\n['charles', 'martina', 'michael']\n['florence', 'eli']"}
              note="A slice [start:stop] includes start, excludes stop — same off-by-one rule as range()."
            />
            <CodeBlock
              title="foods.py — copying lists"
              code={`my_foods = ['pizza', 'falafel', 'carrot cake']

# CORRECT — a real, independent copy:
friend_foods = my_foods[:]

my_foods.append('cannoli')
friend_foods.append('ice cream')

print(my_foods)     # both lists grow independently
print(friend_foods)

# THE TRAP — this is NOT a copy:
alias = my_foods    # two names, ONE list
alias.append('sprouts')
print(my_foods)     # sprouts appears here too!`}
              note="Omitting the slice (my_foods[:] vs my_foods) is one of the most common beginner bugs. Always copy with [:]."
            />
          </div>
        </div>
      </Reveal>

      {/* Tuples */}
      <Reveal className="mt-10">
        <div className="card-warm p-6 md:p-8">
          <p className="eyebrow">Lists that cannot change</p>
          <h3 className="mt-2 text-2xl font-bold">Tuples — the immutable list</h3>
          <p className="mt-3 max-w-4xl text-[.92rem] leading-relaxed text-[#e9d7bf]">
            Lists work well for sets of items that <strong>can change</strong> throughout
            the life of a program — users on a website, characters in a game. But
            sometimes we want <strong>a list of items that cannot change</strong>.
            Python calls values that cannot change <strong>immutable</strong>, and an
            immutable list is called a <strong>tuple</strong>. Write it with parentheses
            instead of brackets.
          </p>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="dimensions.py"
              code={`dimensions = (200, 50)   # parentheses, not brackets
print(dimensions[0])
print(dimensions[1])

dimensions[0] = 250   # try to change one item`}
              output={"200\n50\n\nTraceback (most recent call last):\nTypeError: 'tuple' object does not support item assignment"}
              note="Python rejects the change — exactly what we wanted: protection."
            />
            <CodeBlock
              title="buffet.py — rewriting a tuple"
              code={`menu = ('rice', 'dal', 'paneer', 'salad', 'curd')
for food in menu:
    print(food)

# The restaurant changes its menu:
# you can't edit an item, but you CAN
# redefine the whole tuple:
menu = ('rice', 'dal', 'biryani', 'halwa', 'lassi')
print("\\nRevised menu:")
for food in menu:
    print(food)`}
              note="Assigning a NEW tuple to the same variable is legal — mutating the existing one is not."
            />
          </div>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz
            source="Concept check"
            q="What does bicycles[1] return for ['trek', 'cannondale', 'redline', 'specialized']?"
            options={["'trek'", "'cannondale'", "'redline'", "IndexError"]}
            answer={1}
            explain="Index positions start at 0, so index 1 is the SECOND element: 'cannondale'. Index -1 would give the last item."
          />
        </Reveal>
        <Reveal delay={100}>
          <Quiz
            source="Concept check"
            q="What is the key difference between cars.sort() and sorted(cars)?"
            options={["No difference", "sort() sorts permanently; sorted() returns a sorted copy", "sorted() is only for numbers", "sort() is faster but wrong"]}
            answer={1}
            explain="sort() mutates the list permanently; sorted(cars) leaves the original untouched and hands you a new sorted list. Same for reverse=True on both."
          />
        </Reveal>
      </div>

      <Reveal className="mt-6">
        <Practice
          title="Try It Yourself — lists drills"
          items={[
            { q: <>Use a for loop to print numbers 1 to 20, inclusive.</>, hint: "range(1, 21)" },
            { q: <>Make a list of 1 → 1,000,000 and loop to print (stop with Ctrl-C if it floods).</> },
            { q: <>Verify the million-list with min() (1), max() (1,000,000) and sum() — how long does sum take?</> },
            { q: <>Use range()’s third argument to list the odd numbers 1–20; print each.</>, hint: "range(1, 21, 2)" },
            { q: <>Make a list of multiples of 3 from 3 to 30; loop and print.</>, hint: "range(3, 31, 3)" },
            { q: <>Build the first ten cubes (2**3 is 2 cubed) and print them.</>, hint: "[n**3 for n in range(1,11)]" },
            { q: <>With a 9-car list, slice and print the first three, middle three and last three — with a message before each.</>, hint: "cars[:3], cars[3:6] or middle, cars[-3:]" },
            { q: <>Pizzas: loop your pizza list; copy with [:] into friend_pizzas; add different pizzas to each; prove the two lists are separate with two loops.</> },
            { q: <>Buffet: store five foods in a tuple, loop it, try to modify one item (Python rejects it), then rewrite the whole tuple with a new menu and loop again.</> },
          ]}
        />
      </Reveal>

      <Reveal className="mt-6">
        <Takeaways
          dark
          items={[
            <>Lists are <strong>ordered and mutable</strong>; indexes start at <strong>0</strong>; <strong>-1</strong> is the last item.</>,
            <>Grow with <strong>append()/insert()</strong>, shrink with <strong>del/pop()/remove()</strong>, order with <strong>sort()/sorted()/reverse()/len()</strong>.</>,
            <><strong>for</strong> loops + 4-space indentation; indentation errors are real Python grammar errors.</>,
            <><strong>range(start, stop, step)</strong> stops before stop; min/max/sum summarize numeric lists.</>,
            <>Slices <strong>[a:b]</strong> copy segments; <strong>[:] copies the whole list</strong> — never alias by accident.</>,
            <><strong>Tuples are immutable lists</strong> — item assignment raises TypeError; redefining the whole tuple is allowed.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}
