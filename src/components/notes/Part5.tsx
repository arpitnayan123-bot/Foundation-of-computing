"use client";

import React, { useState } from "react";
import {
  Cloud,
  CornerDownRight,
  FileCode2,
  MessageSquare,
  Play,
  Plus,
  RotateCcw,
  Search,
  Share2,
  Trash2,
  Type,
} from "lucide-react";
import {
  Reveal,
  Section,
  SectionHead,
  ReadStep,
  Callout,
  Quiz,
  CodeBlock,
  Practice,
  Takeaways,
  KV,
} from "./ui";

/* ============================================================
   PYTHON BASICS — Lecture 08 chapter
   ============================================================ */
const KEYWORDS = [
  "False","None","True","and","as","assert","break","class","continue","def","del",
  "elif","else","except","finally","for","from","global","if","import","in","is",
  "lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield",
];

const COLAB_CARDS = [
  {
    icon: Cloud,
    title: "Cloud IDE",
    text: "Google Colab is a cloud-based Integrated Development Environment — accessible through Google search.",
  },
  {
    icon: Search,
    title: "Access",
    text: "Search “Google Colab”, click the first link, and open a new notebook.",
  },
  {
    icon: FileCode2,
    title: "The file",
    text: "Python notebooks carry the .ipynb extension — IPython Notebook.",
  },
  {
    icon: Play,
    title: "Running code",
    text: "Execution requires connecting to a runtime environment — click the run button (the arrow icon).",
  },
  {
    icon: Share2,
    title: "File management",
    text: "Rename notebooks; locate files in Google Drive; download as IPYNB or PY; share via email; upload existing notebook files.",
  },
];

export function BasicsSection() {
  return (
    <Section id="basics">
      <SectionHead
        eyebrow="Lecture 08 · Python, first contact"
        title={
          <>
            Variables, strings &amp; methods — your{" "}
            <span className="grad-text">first program</span>
          </>
        }
        lead="Setup in Google Colab, variable naming conventions, and string operations — the fundamental concepts of Python programming, in exactly the order the lecture teaches them."
      />

      {/* 1 — Google Colab setup */}
      <ReadStep
        n="1"
        title="Google Colab setup"
        sub="A cloud-based IDE — no installation, one search away"
      />
      <Reveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {COLAB_CARDS.map((c) => (
            <div key={c.title} className="card-warm p-4">
              <c.icon className="h-5 w-5" style={{ color: "#c2410c" }} aria-hidden />
              <p className="mt-2.5 text-[.88rem] font-bold text-[#3e2c1d]">{c.title}</p>
              <p className="mt-1 text-[.78rem] leading-relaxed text-muted-warm">{c.text}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* 2 — Variables & naming */}
      <ReadStep
        n="2"
        title="Variables & naming"
        sub="Labelled boxes for values — and seven conventions for labelling them well"
      />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <Type className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">Variables — labelled boxes for values</h3>
          </div>
          <p className="mt-3 max-w-4xl text-[.92rem] leading-relaxed text-[#2b2014]">
            Variables <strong>store values</strong> and let you reference data without rewriting
            it. Assign with a single <span className="font-mono-warm font-bold">=</span>, reuse
            with <code className="font-mono-warm">print(message)</code> — and reassign as often as
            you like: Python always tracks the current value.
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
                <li>• Variable names can contain only <strong>letters, numbers and underscores</strong></li>
                <li>• Must start with a letter or underscore — <strong>never a number</strong> (<code className="font-mono-warm">message_1</code> ✓, <code className="font-mono-warm">1_message</code> ✗)</li>
                <li>• <strong>Spaces are not allowed</strong> — use underscores (<code className="font-mono-warm">greeting_message</code> ✓, <code className="font-mono-warm">greeting message</code> ✗)</li>
                <li>• Avoid Python <strong>keywords and built-in function names</strong> — <code className="font-mono-warm">print</code>, <code className="font-mono-warm">if</code>, <code className="font-mono-warm">else</code>, <code className="font-mono-warm">try</code>, <code className="font-mono-warm">while</code>, <code className="font-mono-warm">return</code></li>
              </ul>
              <p className="mt-3 text-[.8rem] font-extrabold uppercase tracking-[.16em] text-[#8a5a10]">
                Naming guidelines — style, not law
              </p>
              <ul className="mt-2 grid gap-1.5 text-[.88rem] text-[#2b2014]">
                <li>• <strong>Short but descriptive</strong>: <code className="font-mono-warm">student_name</code>, not <code className="font-mono-warm">s_n</code>; <code className="font-mono-warm">name_length</code>, not <code className="font-mono-warm">length_of_persons_name</code></li>
                <li>• Be cautious with lowercase <strong>l</strong> and uppercase <strong>O</strong> — they resemble the numbers <strong>1</strong> and <strong>0</strong></li>
                <li>• Use <strong>lowercase</strong> variable names as best practice — uppercase won’t error, but it’s the convention</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-[.8rem] font-extrabold uppercase tracking-[.16em] text-[#8a5a10]">
              Python keywords — reserved forever, error if used as names
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

      {/* 3 — Strings & methods */}
      <ReadStep
        n="3"
        title="Strings & methods"
        sub="A series of characters — plus the dot-notation actions that reshape them"
      />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <MessageSquare className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">Strings — a series of characters</h3>
          </div>
          <p className="mt-3 max-w-4xl text-[.92rem] leading-relaxed text-[#2b2014]">
            A string is a series of characters enclosed in single or double quotation marks —{" "}
            <strong>anything inside quotes is a string</strong>. The two quote types can alternate:
            <code className="font-mono-warm"> 'He said "Hello"' </code> keeps the double quotes in
            the output, while apostrophes live happily inside double quotes.
          </p>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="strings_intro.py"
              code={`"This is a string."
'This is also a string.'

# Alternating quote types — quotes inside strings:
'He said "Hello"'
"I told my friend, 'Python is my favorite language!'"

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
              output={"Ada Lovelace\nADA LOVELACE\nada lovelace\nPython\n\tPython\nLanguages:\nPython\nC\nJavaScript\npython  \n  python\npython"}
            />
          </div>

          <p className="mt-6 text-[.8rem] font-extrabold uppercase tracking-[.16em] text-[#8a5a10]">
            The case methods — straight from the lecture table
          </p>
          <div className="mt-3 grid gap-2.5">
            <KV k=".title()" v={'Converts to title case — "ada lovelace".title() → "Ada Lovelace"'} />
            <KV k=".upper()" v={'Converts to uppercase — "ada lovelace".upper() → "ADA LOVELACE"'} />
            <KV k=".lower()" v={'Converts to lowercase — "Ada Lovelace".lower() → "ada lovelace"'} />
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl p-5" style={{ background: "#fbf3e3", borderLeft: "3px solid #c2410c" }}>
              <p className="text-[.8rem] font-extrabold uppercase tracking-[.16em] text-[#8a4508]">
                Methods and functions
              </p>
              <ul className="mt-3 grid gap-2 text-[.88rem] leading-relaxed text-[#2b2014]">
                <li>• <strong>Methods are actions Python performs on data</strong>, accessed with dot notation: <code className="font-mono-warm">variable.method()</code></li>
                <li>• Every method is <strong>followed by parentheses</strong> — they may contain arguments, the additional information the method needs to do its work</li>
                <li>• <code className="font-mono-warm">.title()</code> needs nothing extra, so its parentheses sit empty; <code className="font-mono-warm">print()</code> is a <strong>function</strong> that displays output, and its parentheses carry whatever should be shown</li>
              </ul>
            </div>
            <Callout kind="insight" title="Pro combo — f-strings (handy from Lecture 19)">
              To weave variables into strings, put an <code className="font-mono-warm">f</code> before
              the quote: <code className="font-mono-warm">f"Hello, {`{first_name}`}!"</code> — Python
              replaces the braces with the value. You’ll use this constantly.
            </Callout>
          </div>
        </div>
      </Reveal>

      {/* 4 — Errors: the NameError */}
      <ReadStep
        n="4"
        title="Errors — the NameError"
        sub="Misspelled or undefined — and the traceback that pinpoints it"
      />
      <Reveal>
        <CodeBlock
          title="avoiding_name_errors.py"
          code={`message = "Hello Python Crash Course reader!"
print(mesage)   # typo — the name doesn't exist`}
          output={"NameError: name 'mesage' is not defined"}
          note={
            <>
              A <strong>NameError</strong> occurs when a variable is misspelled or not defined
              before use. Python provides a <strong>traceback</strong> to help identify where
              errors occur — and consistency in spelling, from initialization to usage, is what
              keeps it away.
            </>
          }
        />
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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
        <Reveal delay={200}>
          <Quiz
            source="Concept check"
            q={'Which literal displays He said "Hello" — double quotes and all — when printed?'}
            options={["\"He said 'Hello'\"", "'He said \"Hello\"'", "\"He said \"Hello\"\"", "print(\"Hello\")"]}
            answer={1}
            explain="Alternating quote types: wrap the string in single quotes so the double quotes inside stay literal characters in the output. Matching doubles would end the string early — a SyntaxError."
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
          ]}
        />
      </Reveal>

      <Reveal className="mt-6">
        <Takeaways
          items={[
            <>Variables are <strong>named references to values</strong>; naming follows seven conventions — only letters, numbers and underscores, no leading digit, no keywords or builtins, underscores for spaces, short but descriptive, beware l/O, lowercase.</>,
            <>Strings accept <strong>single or double quotes</strong> — alternating quote types display quotation marks in output; <strong>.title()/.upper()/.lower()</strong> reshape case through dot notation.</>,
            <><strong>\t and \n</strong> control whitespace; <strong>strip()/lstrip()/rstrip()</strong> remove it — and every method wears parentheses, with arguments inside when needed.</>,
            <>A <strong>NameError</strong> means a misspelled or undefined name — read the traceback and keep spelling consistent; <strong>f-strings</strong> fuse variables into text.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   LISTS — Lecture 11 chapter
   ============================================================ */
const DELETION_GUIDE = [
  {
    m: "del",
    when: "You want to permanently remove an element and have no further use for it — once deleted, the value cannot be retrieved.",
  },
  {
    m: "pop()",
    when: "You need to remove an element but want to use its value elsewhere in your code — pop() removes it and hands the value back.",
  },
  {
    m: "remove()",
    when: "You know the value to remove but not its position in the list — and only the first occurrence goes.",
  },
];

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

export function ListsSection() {
  return (
    <Section id="lists" dark>
      <SectionHead
        dark
        eyebrow="Lecture 11 · lists"
        title={
          <>
            <span className="grad-text">Lists</span> — and working with them like a pro
          </>
        }
        lead="A list is a collection of items arranged in a particular order — letters, numbers or names, related or not — stored in one variable between square brackets. You’ll access, modify, add, remove and loop like a pro; ordering, slicing and tuples live in their own lectures — 12, 15 and 16."
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
              output={"['trek', 'cannondale', 'redline', 'specialized']\ntrek\nTrek\ncannondale\nspecialized\nspecialized"}
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

      {/* Choosing the right deletion method */}
      <Reveal className="mt-6">
        <div className="card-warm p-6 md:p-8">
          <p className="eyebrow">Choosing the right deletion method</p>
          <h3 className="mt-2 text-2xl font-bold text-[#f5e6cd]">Three ways out — pick by intent</h3>
          <div className="mt-5 grid gap-3">
            {DELETION_GUIDE.map((d) => (
              <div
                key={d.m}
                className="flex flex-col gap-1.5 rounded-xl px-4 py-3 sm:flex-row sm:items-baseline sm:gap-4"
                style={{ background: "rgba(255,236,210,.06)", border: "1px solid rgba(255,214,160,.16)" }}
              >
                <code className="shrink-0 font-mono-warm text-[.84rem] font-bold" style={{ color: "#f5c889" }}>
                  {d.m}
                </code>
                <span className="text-[.88rem] leading-relaxed text-[#e9d7bf]">{d.when}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[.82rem] leading-relaxed text-[#b99a75]">
            del needs an index; pop() hands the value back; remove() hunts by value — three different questions, three different tools.
          </p>
        </div>
      </Reveal>

      <Reveal className="mt-8">
        <ListVisualizer />
      </Reveal>

      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <p className="eyebrow">The deck&rsquo;s dinner-party drill</p>
          <h3 className="mt-2 text-2xl font-bold">guest_list.py — invitations, edits and apologies</h3>
          <p className="mt-2 max-w-4xl text-[.9rem] text-[#e9d7bf]">
            The classic exercise that touches every operation: invite three guests, one declines —
            replace them, find a bigger table — insert a guest mid-list, append one to the end, then
            cut the list down with pop.
          </p>
          <div className="mt-5">
            <CodeBlock
              dark
              title="guest_list.py"
              code={`guests = ['ida', 'leo', 'asma']
for g in guests:
    print(f"{g.title()}, please come to dinner.")

print("\nSadly, asma can't make it.")
guests[guests.index('asma')] = 'amir'      # replace by index
for g in guests:
    print(f"{g.title()}, please come to dinner.")

print("\nBigger table found!")
guests.insert(1, 'kabir')                  # middle
guests.append('tara')                      # end
for g in guests:
    print(f"{g.title()}, please come to dinner.")

print("\nOnly two seats now.")
while len(guests) > 2:
    sorry = guests.pop()
    print(f"Sorry, {sorry.title()} — no room this time.")
for g in guests:
    print(f"{g.title()}, you're still invited.")`}
              output={"Ida, please come to dinner.\nLeo, please come to dinner.\nAsma, please come to dinner.\n\nSadly, asma can't make it.\nIda, please come to dinner.\nLeo, please come to dinner.\nAmir, please come to dinner.\n\nBigger table found!\nIda, please come to dinner.\nKabir, please come to dinner.\nLeo, please come to dinner.\nAmir, please come to dinner.\nTara, please come to dinner.\n\nOnly two seats now.\nSorry, Tara — no room this time.\nSorry, Amir — no room this time.\nSorry, Leo — no room this time.\nIda, you're still invited.\nKabir, you're still invited."}
              note="Replace via index assignment, grow with insert/append, shrink with pop — the whole Lecture-11 toolkit in one storyline. This is also the deck's assigned homework: personalize every name."
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
            q="Which removal method returns the removed value so you can keep using it?"
            options={["del motorcycles[0]", "motorcycles.remove('ducati')", "popped = motorcycles.pop()", "None of them"]}
            answer={2}
            explain="pop() removes AND returns — perfect when the removed value still matters (a popped player, a printed design). del is gone forever; remove() drops by value with nothing returned."
          />
        </Reveal>
      </div>

      <Reveal className="mt-6">
        <Practice
          title="Try It Yourself — the guest list (Lecture 11)"
          items={[
            { q: <>Make a guest list with at least three people you would invite — living or deceased — and use it to print a personalized invitation to each person.</>, hint: "one list, one loop, one f-string per invitation" },
            { q: <>Add a statement announcing which guest cannot make it; replace that guest’s name with a new invitee and print a new set of invitation messages.</>, hint: "index assignment replaces a name in place" },
            { q: <>Announce a bigger table: use insert() to add one guest to the middle of the list, append() to add one to the end, and print updated invitations for all guests.</>, hint: "insert(index, guest) shifts everything after it one seat right" },
            { q: <>Only two guests can come: announce it, pop() guests one by one, then del the remaining two — print messages confirming who is still invited.</>, hint: "pop() returns the name you just removed — use it in the apology" },
          ]}
        />
      </Reveal>

      <Reveal className="mt-6">
        <Takeaways
          dark
          items={[
            <>Lists are <strong>ordered and mutable</strong>; indexes start at <strong>0</strong>; <strong>-1</strong> is the last item.</>,
            <>Grow with <strong>append()/insert()</strong>; shrink with <strong>del/pop()/remove()</strong> — pop returns the value.</>,
            <>remove() deletes only the <strong>first occurrence</strong>; loop it to purge them all (Lecture 26 does exactly that).</>,
            <>Ordering, slicing and tuples live in their own lectures — <strong>ordering in Lecture 12</strong>, <strong>numeric lists and slices in Lecture 15</strong>, <strong>tuples in Lecture 16</strong>.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}
