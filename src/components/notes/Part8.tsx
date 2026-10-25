"use client";

import React, { useState } from "react";
import {
  Terminal,
  KeyRound,
  Repeat,
  Shuffle,
  AlertTriangle,
  CornerDownLeft,
  MousePointerClick,
  Layers,
  ArrowRight,
  Sparkles,
  Infinity as InfinityIcon,
} from "lucide-react";
import {
  Reveal,
  Section,
  SectionHead,
  Callout,
  Quiz,
  CodeBlock,
  Practice,
  Takeaways,
  KV,
  Pill,
} from "./ui";

/* Hidden setup for the two traceback demos — the visible snippet only
   shows the CALL, so the runner injects the pets.py definition first
   and the REAL TypeError appears, exactly like in class. */
const DESCRIBE_PET_PRE = `def describe_pet(animal_type, pet_name):
    """Display information about a pet."""
    print("\\nI have a " + animal_type + ".")
    print("My " + animal_type + "'s name is " + pet_name.title() + ".")`;

/* ============================================================
   ArgumentMatcher — interactive positional vs keyword vs default
   ============================================================ */
const MATCH_MODES = [
  {
    id: "positional",
    label: "Positional",
    call: "describe_pet('hamster', 'harry')",
    slots: [
      { param: "animal_type", value: "'hamster'", why: "1st argument → 1st parameter" },
      { param: "pet_name", value: "'harry'", why: "2nd argument → 2nd parameter" },
    ],
    caption: "Order decides everything — position 1 fills parameter 1. Swap them and the story changes: a pet named hamster who is a harry.",
  },
  {
    id: "keyword",
    label: "Keyword",
    call: "describe_pet(pet_name='harry', animal_type='hamster')",
    slots: [
      { param: "animal_type", value: "'hamster'", why: "matched by name — not position" },
      { param: "pet_name", value: "'harry'", why: "name-value pair binds directly" },
    ],
    caption: "Each argument is a name-value pair. Python reads the names, so the order you write them in doesn't matter.",
  },
  {
    id: "default",
    label: "With default",
    call: "describe_pet(pet_name='willie')",
    slots: [
      { param: "animal_type", value: "'dog'", why: "no argument given → default kicks in" },
      { param: "pet_name", value: "'willie'", why: "matched by name" },
    ],
    caption: "Skip an argument and Python quietly substitutes the parameter's default value — written once in the definition.",
  },
];

function ArgumentMatcher() {
  const [mode, setMode] = useState(0);
  const m = MATCH_MODES[mode];
  return (
    <div className="card-warm overflow-hidden p-6 md:p-8">
      <div className="flex items-center gap-2">
        <MousePointerClick className="h-5 w-5" style={{ color: "#c2410c" }} />
        <h3 className="text-lg font-bold">
          Try it: where does each value <span className="grad-text">land?</span>
        </h3>
      </div>
      <p className="mt-1 text-[.88rem] text-muted-warm">
        One function, three call styles. Watch how the same two parameters receive their values.
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {MATCH_MODES.map((mm, i) => (
          <button
            key={mm.id}
            onClick={() => setMode(i)}
            className={`rounded-full px-4 py-1.5 text-[.8rem] font-bold transition-all duration-200 ${
              mode === i
                ? "text-white shadow-md"
                : "border border-[#ecd9bd] bg-white/60 text-[#8a6a44] hover:border-[#e0a45e]"
            }`}
            style={mode === i ? { background: "linear-gradient(135deg,#ea580c,#c2410c)" } : undefined}
            aria-pressed={mode === i}
          >
            {mm.label}
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {/* the call */}
        <div className="rounded-2xl border border-[#f3e2c8] bg-[#2b1b10] p-4 text-[#efe0cb]">
          <p className="text-[.62rem] font-bold uppercase tracking-[.2em] text-[#b98d5f]">
            the function call
          </p>
          <p className="mt-2 font-mono text-[.82rem] leading-relaxed">
            <span className="tk-k">describe_pet</span>
            <span className="tk-d">(</span>
            {m.call.replace("describe_pet(", "").replace(")", "").split(", ").map((a, i) => (
              <React.Fragment key={i}>
                {i > 0 ? <span className="tk-d">, </span> : null}
                <span key={a} className="anim-pop inline-block rounded bg-[rgba(255,200,120,.14)] px-1" style={{ animationDelay: `${i * 0.15}s` }}>
                  {a}
                </span>
              </React.Fragment>
            ))}
            <span className="tk-d">)</span>
          </p>
          <div className="mt-3 flex items-center justify-center gap-2 text-[.7rem] font-bold uppercase tracking-widest text-[#c98d4e]">
            <span>values travel</span>
            <ArrowRight className="h-4 w-4 flow-arrow-line" />
            <span>parameters</span>
          </div>
        </div>

        {/* the params */}
        <div className="grid content-start gap-2.5">
          <p className="text-[.62rem] font-bold uppercase tracking-[.2em] text-[#8a5a10]">
            def describe_pet( animal_type , pet_name ):
          </p>
          {m.slots.map((s, i) => (
            <div
              key={m.id + s.param}
              className="anim-pop rounded-xl border border-[#ecd9bd] bg-[#fffaf1] px-4 py-2.5"
              style={{ animationDelay: `${i * 0.18}s` }}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-[.8rem] font-bold text-[#b45309]">{s.param}</span>
                <span className="flex-1 border-t border-dashed border-[#e0cba6]" />
                <span className="font-mono text-[.8rem] font-bold text-[#3e2c1d]">{s.value}</span>
              </div>
              <p className="mt-1 text-right text-[.7rem] italic text-[#8c2f2f]">{s.why}</p>
            </div>
          ))}
        </div>
      </div>
      <p key={m.id} className="anim-pop mt-4 rounded-xl bg-[#fdf1e0] p-3 text-[.85rem] leading-relaxed text-[#2b2014]">
        {m.caption}
      </p>
    </div>
  );
}

/* ============================================================
   PART 8 — FUNCTIONS I  (arguments & return values)
   ============================================================ */
export function ArgsSection() {
  return (
    <Section id="args">
      <SectionHead
        eyebrow="Python · functions · the full chapter — part 1"
        title={
          <>
            Arguments <span className="grad-text">in</span>, answers <span className="grad-text">out</span>
          </>
        }
        lead="You've seen a function defined and called. Now the complete toolkit: passing information in three styles, letting defaults do quiet work, catching argument errors — and the return keyword that sends answers back to the caller."
      />

      {/* 1 — anatomy */}
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <Terminal className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">The simplest function structure</h3>
          </div>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="greet.py — no information needed"
              code={`def greet_user():  # defining a function
    """Display a simple greeting."""
    print("Hello!")   # the body of the function

greet_user()          # a function call`}
              output={"Hello!"}
              note="greet_user() illustrates the simplest possible structure — definition, body, call."
            />
            <div className="grid content-start gap-3 text-[.9rem] leading-relaxed text-[#2b2014]">
              <div className="flex gap-3 rounded-xl border border-[#f3e2c8] bg-[#fffaf1] px-4 py-3">
                <span className="term shrink-0">def</span>
                <span>tells Python you're <strong>defining a function</strong> — the definition states the function's name and what information it needs to do its job.</span>
              </div>
              <div className="flex gap-3 rounded-xl border border-[#f3e2c8] bg-[#fffaf1] px-4 py-3">
                <span className="term shrink-0">( )</span>
                <span>hold that information. Here the name is <strong>greet_user()</strong> and it needs no information, so the parentheses are empty. The definition ends in a <strong>colon</strong>.</span>
              </div>
              <div className="flex gap-3 rounded-xl border border-[#f3e2c8] bg-[#fffaf1] px-4 py-3">
                <span className="term shrink-0">""" """</span>
                <span>the <strong>docstring</strong> — a comment in triple quotes describing what the function does. Python looks for it when generating documentation.</span>
              </div>
              <div className="flex gap-3 rounded-xl border border-[#f3e2c8] bg-[#fffaf1] px-4 py-3">
                <span className="term shrink-0">call</span>
                <span><strong>greet_user()</strong> tells Python to execute the code in the function — name, then any necessary information in parentheses.</span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 2 — parameters vs arguments */}
      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <KeyRound className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">
              Passing information — <span className="grad-text">parameter vs argument</span>
            </h3>
          </div>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="greet.py — greeting by name"
              code={`def greet_user(username): # parameter
    """Display a simple greeting."""
    print("Hello, " + username.title() + "!")

greet_user('Arun') # calling the function — 'Arun' is the argument`}
              output={"Hello, Arun!"}
              note="By adding username in the definition, the function now expects a value each time it's called."
            />
            <div className="grid content-start gap-3">
              <KV k="parameter" v="The variable username in the definition — a piece of information the function needs to do its job." />
              <KV k="argument" v="The value 'Arun' in greet_user('Arun') — information passed from a function call to a function." />
              <KV k="the handshake" v="The argument 'Arun' was passed to greet_user() and stored in the username parameter. People use the two terms interchangeably — the exam wants you to know the difference." />
              <Callout kind="why" title="Why this matters">
                When we call the function, we place the value we want the function to work with in parentheses — the function can now greet <em>any</em> name, not just one.
              </Callout>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 3 — positional */}
      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <h3 className="text-2xl font-bold">
            Positional arguments — <span className="grad-text">order decides</span>
          </h3>
          <p className="mt-2 max-w-3xl text-[.92rem] leading-relaxed text-muted-warm">
            A definition can have multiple parameters and a call may need multiple arguments. When we call a
            function, Python must match each argument with a parameter — the simplest way is to follow the
            <strong> order</strong> the arguments were provided in. Values matched up this way are called positional arguments.
          </p>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="pets.py — describe any pet"
              code={`def describe_pet(animal_type, pet_name): # defining with arguments
    """Display information about a pet."""
    print("\\nI have a " + animal_type + ".")     # the body
    print("My " + animal_type + "'s name is " + pet_name.title() + ".")

describe_pet('hamster', 'harry')  # function call
describe_pet('Brad', 'Cow')       # same order: type first, name second`}
              output={"I have a hamster.\nMy hamster's name is Harry.\n\nI have a Brad.\nMy Brad's name is Cow."}
              note="See the mismatch? 'Brad' lands in animal_type and 'Cow' in pet_name — funny output, no error. Positional matching is powerful but literal."
            />
            <div className="grid content-start gap-4">
              <div className="rounded-2xl border border-[#ecd9bd] bg-[#fffaf1] p-5">
                <p className="text-[.72rem] font-extrabold uppercase tracking-[.18em] text-[#8a5a10]">
                  multiple function calls
                </p>
                <p className="mt-2 font-mono text-[.84rem] text-[#3e2c1d]">describe_pet('Cat', 'Tom')</p>
                <p className="mt-2 text-[.88rem] leading-relaxed text-[#2b2014]">
                  You can call a function <strong>as many times as needed</strong> — a very efficient way to work.
                  The describing code is written <strong>once</strong>; anytime you want to describe a new pet,
                  you call the function with the new pet's information.
                </p>
              </div>
              <Callout kind="warn" title="Too few arguments → traceback">
                <code className="font-mono">describe_pet('Bruno')</code> fails: Python needs an animal type
                <em> and</em> a name, in that order. The traceback points at the call line and tells you exactly
                what's missing — descriptive names make these messages useful.
              </Callout>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 4 — interactive matcher */}
      <Reveal className="mt-8">
        <ArgumentMatcher />
      </Reveal>

      {/* 5 — keyword arguments */}
      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <h3 className="text-2xl font-bold">
            Keyword arguments — <span className="grad-text">name-value pairs</span>
          </h3>
          <p className="mt-2 max-w-3xl text-[.92rem] leading-relaxed text-muted-warm">
            A keyword argument is a <strong>name-value pair</strong> you pass to a function. You directly associate
            the name and the value, so there's no confusion when it arrives. They free you from ordering worries —
            and they clarify the role of each value in the call.
          </p>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="pets.py — same function, keyword calls"
              code={`def describe_pet(animal_type, pet_name): # same definition
    """Display information about a pet."""
    print("\\nI have a " + animal_type + ".")
    print("My " + animal_type + "'s name is " + pet_name.title() + ".")

describe_pet(pet_name='Kyle', animal_type='Parrot')
describe_pet(pet_name='Sachin', animal_type='Goat')`}
              output={"I have a Parrot.\nMy Parrot's name is Kyle.\n\nI have a Goat.\nMy Goat's name is Sachin."}
            />
            <div className="grid content-start gap-3">
              <Callout kind="insight" title="Order doesn't matter">
                The order of keyword arguments is irrelevant because <strong>Python knows where each value should
                go</strong> — it matched by name, not by position.
              </Callout>
              <KV k="positional" v="Matched by order — write arguments in the exact order of the parameters." />
              <KV k="keyword" v="Matched by name — write parameter=value, any order, extra clarity." />
            </div>
          </div>
        </div>
      </Reveal>

      {/* 6 — default values */}
      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <h3 className="text-2xl font-bold">
            Default values — <span className="grad-text">quiet fallbacks</span>
          </h3>
          <p className="mt-2 max-w-3xl text-[.92rem] leading-relaxed text-muted-warm">
            When writing a function, we can define a default value for each parameter. If an argument is provided
            in the call, Python uses the argument; if not, it uses the parameter's default. Defaults simplify calls
            and clarify how functions are typically used.
          </p>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="courses.py — the BSMT helper"
              code={`def describe_BSMT(course_name, instructor_name='aman'):
    """Display information."""
    print("\\nI am enrolled in the " + course_name + " course.")
    print("The instructor for the " + course_name + " is " + instructor_name.title() + ".")

describe_BSMT(course_name='Foundations of Computing')   # default used
describe_BSMT(course_name='AI in Business', instructor_name='hari')  # default ignored`}
              output={"I am enrolled in the Foundations of Computing course.\nThe instructor for the Foundations of Computing is Aman.\n\nI am enrolled in the AI in Business course.\nThe instructor for the AI in Business is Hari."}
              note="Because an explicit argument for instructor_name is provided, Python ignores the parameter's default value."
            />
            <div className="grid content-start gap-4">
              <CodeBlock
                title="students.py — defaults go last"
                code={`def describe_student(student_name, course_name, instructor_name='aman'):
    """Display information."""
    print("\\nMy name is " + student_name + " .")
    print("I am enrolled in the " + course_name + " course.")
    print("The instructor for the " + course_name + " is " + instructor_name.title() + ".")

describe_student(student_name='Hardavi', course_name='Foundations of Computing')`}
                output={"My name is Hardavi .\nI am enrolled in the Foundations of Computing course.\nThe instructor for the Foundations of Computing is Aman."}
              />
              <Callout kind="warn" title="The ordering rule">
                Any parameter with a default value must be listed <strong>after</strong> all parameters without
                defaults — this lets Python keep interpreting positional arguments correctly.
              </Callout>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 7 — equivalent calls */}
      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <Shuffle className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">Equivalent function calls</h3>
          </div>
          <p className="mt-2 max-w-3xl text-[.92rem] leading-relaxed text-muted-warm">
            Positional arguments, keyword arguments and default values can all be used together — there are several
            equivalent ways to call the same function. With{" "}
            <code className="font-mono text-[.84rem] font-bold text-[#b45309]">describe_pet(pet_name, animal_type='dog')</code>,
            all five of these calls work:
          </p>
          <div className="mt-5 grid gap-2.5 md:grid-cols-2">
            {[
              { code: "describe_pet('willie')", note: "positional → a dog named Willie" },
              { code: "describe_pet(pet_name='willie')", note: "name-value pair → a dog named Willie" },
              { code: "describe_pet('harry', 'hamster')", note: "both positional → a hamster named Harry" },
              { code: "describe_pet(pet_name='harry', animal_type='hamster')", note: "both keyword → a hamster named Harry" },
              { code: "describe_pet(animal_type='hamster', pet_name='harry')", note: "keywords reordered — still identical" },
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl border border-[#f3e2c8] bg-[#fffaf1] px-4 py-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f59e0b] to-[#c2410c] text-[.72rem] font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="font-mono text-[.8rem] font-semibold text-[#3e2c1d]">{c.code}</p>
                  <p className="text-[.76rem] text-muted-warm">{c.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* 8 — avoiding argument errors */}
      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">Avoiding argument errors</h3>
          </div>
          <p className="mt-2 max-w-3xl text-[.92rem] leading-relaxed text-muted-warm">
            Mismatched arguments happen when you provide fewer or more arguments than a function needs. The
            traceback shows the location of the problem — Python reads the function's code for you and tells you
            which arguments to provide. This is another motivation for descriptive names: better errors for you
            and anyone using your code.
          </p>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="too few arguments"
              runnable
              pre={DESCRIBE_PET_PRE}
              code={`describe_pet()`}
              output={"Traceback (most recent call last):\n  File \"pets.py\", line 10, in <module>\n    describe_pet()\nTypeError: describe_pet() missing 2 required\npositional arguments: 'animal_type' and 'pet_name'"}
              note="The traceback names the missing arguments — fix the call, not the function."
            />
            <CodeBlock
              title="too many arguments"
              runnable
              pre={DESCRIBE_PET_PRE}
              code={`describe_pet('harry', 'hamster', 'good')`}
              output={"Traceback (most recent call last):\n  File \"pets.py\", line 11, in <module>\n    describe_pet('harry', 'hamster', 'good')\nTypeError: describe_pet() takes 2 positional\narguments but 3 were given"}
              note="Provide too many and you get a similar traceback that helps you match the call to the definition."
            />
          </div>
        </div>
      </Reveal>

      {/* 9 — return values */}
      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <CornerDownLeft className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">
              Return values — <span className="grad-text">send the answer back</span>
            </h3>
          </div>
          <p className="mt-2 max-w-3xl text-[.92rem] leading-relaxed text-muted-warm">
            A function doesn't always have to display its output directly. It can process data and
            <strong> return</strong> a value or a set of values. The value returned is called a
            <strong> return value</strong> — the <code className="font-mono text-[.84rem] font-bold text-[#b45309]">return</code>{" "}
            statement takes a value from inside the function and sends it back to the line that called it,
            letting us simplify the body of our program.
          </p>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="names.py — return, don't print"
              code={`def get_formatted_name(first_name, last_name):
    """Return a full name, neatly formatted."""
    full_name = first_name + ' ' + last_name
    return full_name.title() # not print() here

developer = get_formatted_name('agastya', 'gupta')
print(developer) # print happens at the call site`}
              output={"Agastya Gupta"}
              note="The function combines the names, converts to title case and returns the result. The caller stores the return value in a variable — here, developer."
            />
            <div className="grid content-start gap-3">
              <Callout kind="insight" title="return vs print">
                <strong>print()</strong> shows something on screen; <strong>return</strong> hands the value back so
                the calling line can store it, reuse it, or pass it on. Printing inside a function is a dead end —
                returning is a doorway.
              </Callout>
              <KV k="store it" v="developer = get_formatted_name('agastya', 'gupta') — provide a variable to catch what comes back." />
            </div>
          </div>
        </div>
      </Reveal>

      {/* 10 — optional argument */}
      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <h3 className="text-2xl font-bold">
            Making an argument <span className="grad-text">optional</span>
          </h3>
          <p className="mt-2 max-w-3xl text-[.92rem] leading-relaxed text-muted-warm">
            Use default values to make an argument optional — people can provide extra information only if they
            want to. The optional middle name is listed <strong>last</strong> in the definition and defaults to an
            empty string, so calls stay as simple as possible.
          </p>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <div className="grid content-start gap-5">
              <CodeBlock
                title="v1 — middle name required"
                code={`def get_formatted_name(first_name, middle_name, last_name):
    """Return a full name, neatly formatted."""
    full_name = first_name + ' ' + middle_name + ' ' + last_name
    return full_name.title()

musician = get_formatted_name('Lana', 'Del', 'Rey')
print(musician)   # ✅ works
musician = get_formatted_name('Arijit', 'Singh')  # 💥 middle names aren't always needed`}
                output={"Lana Del Rey\nTraceback ... missing 1 required positional argument: 'last_name'"}
              />
              <Callout kind="warn" title="The problem">
                Most people don't have a middle name — forcing one makes the function brittle.
              </Callout>
            </div>
            <CodeBlock
              title="v2 — middle name optional"
              code={`def get_formatted_name(first_name, last_name, middle_name=''):
    """Return a full name, neatly formatted."""
    if middle_name:
        full_name = first_name + ' ' + middle_name + ' ' + last_name
    else:
        full_name = first_name + ' ' + last_name
    return full_name.title()

musician = get_formatted_name('Arijit', 'Singh')   # no middle name
print(musician)
musician = get_formatted_name('Lana', 'Rey', 'Del') # middle name supplied
print(musician)`}
              output={"Arijit Singh\nLana Del Rey"}
              note="The empty-string default is falsy — if middle_name: only builds the three-part name when one exists. Optional values let one function handle a wide range of use cases."
            />
          </div>
        </div>
      </Reveal>

      {/* 11 — returning a dictionary */}
      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <Layers className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">Returning a dictionary</h3>
          </div>
          <p className="mt-2 max-w-3xl text-[.92rem] leading-relaxed text-muted-warm">
            A function can return <strong>any kind of value</strong> — including complicated data structures like
            lists and dictionaries. Here a function builds a person's record and hands the whole dictionary back.
          </p>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="people.py — minimal version"
              code={`def build_person(first_name, last_name):
    """Return a dictionary of information about a person."""
    person = {'first': first_name, 'last': last_name}
    return person

student = build_person('aryan', 'manhas')
print(student)`}
              output={"{'first': 'aryan', 'last': 'manhas'}"}
            />
            <CodeBlock
              title="people.py — extended with an optional age"
              code={`def build_person(first_name, last_name, age=''):
    """Return a dictionary of information about a person."""
    person = {'first': first_name, 'last': last_name}
    if age:
        person['age'] = age
    return person

student = build_person('daksh', 'parashar', age=18)
print(student)`}
              output={"{'first': 'daksh', 'last': 'parashar', 'age': 18}"}
              note="Easily extended to accept optional values — middle name, age, occupation, anything you want to store about a person."
            />
          </div>
        </div>
      </Reveal>

      {/* 12 — functions + while */}
      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <Repeat className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">
              Using a function with a <span className="grad-text">while loop</span>
            </h3>
          </div>
          <p className="mt-2 max-w-3xl text-[.92rem] leading-relaxed text-muted-warm">
            Functions compose with every structure you've learned. Here get_formatted_name() greets users in a
            loop — first the broken attempt, then the fix.
          </p>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="greeter.py — infinite loop! 🚨"
              runnable={false}
              code={`def get_formatted_name(first_name, last_name):
    """Return a full name, neatly formatted."""
    full_name = first_name + ' ' + last_name
    return full_name.title()

# This is an infinite loop!
while True:  # condition is always True
    print("\\nPlease tell me your name:")
    f_name = input("First name: ")
    l_name = input("Last name: ")`}
              note="while True never becomes False and nothing breaks out — this program never ends. A loop needs an exit."
            />
            <CodeBlock
              title="greeter.py — with an exit"
              code={`def get_formatted_name(first_name, last_name):
    """Return a full name, neatly formatted."""
    full_name = first_name + ' ' + last_name
    return full_name.title()

while True:
    print("\\nPlease tell me your name:")
    print("(enter 'q' at any time to quit)")

    f_name = input("First name: ")
    if f_name == 'q':
        break

    l_name = input("Last name: ")
    if l_name == 'q':
        break

formatted_name = get_formatted_name('aman', 'pathak')
print("\\nHello, " + formatted_name + "!")`}
              output={"Hello, Aman Pathak!"}
              note="We add a message explaining how to quit, then break out if the user enters 'q' at either prompt — the program greets people until someone quits."
            />
          </div>
        </div>
      </Reveal>

      {/* quiz */}
      <Reveal className="mt-10">
        <div className="grid gap-4 md:grid-cols-2">
          <Quiz
            q="Which call correctly uses keyword arguments for describe_pet(animal_type, pet_name)?"
            options={[
              "describe_pet('Parrot', 'Kyle')",
              "describe_pet(pet_name='Kyle', animal_type='Parrot')",
              "describe_pet(animal_type='Parrot', 'Kyle')",
              "describe_pet('Kyle' = pet_name)",
            ]}
            answer={1}
            explain="Keyword arguments are name-value pairs — pet_name='Kyle', animal_type='Parrot' — and their order doesn't matter. Mixing a bare positional value after a keyword one is a SyntaxError."
            source="Functions · arguments"
          />
          <Quiz
            q="What does return full_name.title() do that print(full_name.title()) inside the function does not?"
            options={[
              "Nothing — they're interchangeable",
              "It formats the name differently",
              "It sends the value back to the calling line so it can be stored in a variable",
              "It makes the function run faster",
            ]}
            answer={2}
            explain="return sends the value back to the caller — developer = get_formatted_name(...) can store it, reuse it, pass it on. print() just displays and the value is gone."
            source="Functions · return values"
          />
        </div>
      </Reveal>

      {/* practice */}
      <Reveal className="mt-8">
        <Practice
          title="Practice — argue with functions (gently)"
          items={[
            {
              q: <>Write <code className="font-mono">describe_pet(animal_type, pet_name)</code> and call it positionally three times for three pets. Then call it once with keyword arguments in reversed order.</>,
              hint: "describe_pet('Cat', 'Tom') vs describe_pet(pet_name='Tom', animal_type='Cat')",
            },
            {
              q: <>Build <code className="font-mono">describe_BSMT(course_name, instructor_name='aman')</code>. Make two calls: one using the default instructor, one overriding it with <code className="font-mono">'hari'</code>.</>,
              hint: "The default only applies when the call leaves the argument out.",
            },
            {
              q: <>Call <code className="font-mono">describe_pet()</code> with no arguments on purpose. Read the TypeError out loud — which two names does Python ask for?</>,
              hint: "Descriptive parameter names are why the error is readable.",
            },
            {
              q: <>Rewrite <code className="font-mono">get_formatted_name</code> so the middle name is optional (empty-string default), then produce both <em>Arijit Singh</em> and <em>Lana Del Rey</em> with the same function.</>,
              hint: "if middle_name: decides which full_name to build.",
            },
            {
              q: <>Make <code className="font-mono">build_person(first, last, age='')</code> return a dictionary, then call it with and without <code className="font-mono">age=18</code>.</>,
              hint: "Only add the 'age' key when age is truthy.",
            },
            {
              q: <>Combine get_formatted_name() with a while loop that quits when the user enters <code className="font-mono">'q'</code> at either prompt. What breaks if you delete the break checks?</>,
              hint: "while True is infinite by design — the breaks are the exits.",
            },
          ]}
        />
      </Reveal>

      {/* takeaways */}
      <Reveal className="mt-8">
        <div style={{ display: "flex", alignItems: "center", gap: ".5rem", marginBottom: "1rem" }}>
          <Sparkles className="h-5 w-5" style={{ color: "#c2410c" }} />
          <span className="text-sm font-black uppercase tracking-[.2em] text-[#8a5a10]">
            Part 1 of the function story — arguments mastered
          </span>
          <InfinityIcon className="h-4 w-4 text-[#c98d4e]" />
        </div>
        <Takeaways
          items={[
            <>Define with <strong>def name(parameters):</strong> — docstring in triple quotes, body indented, call with <strong>name(arguments)</strong>.</>,
            <>A <strong>parameter</strong> is what the function needs (in the definition); an <strong>argument</strong> is what you pass (in the call).</>,
            <>Positional arguments match <strong>by order</strong>; keyword arguments match <strong>by name</strong> — order-free and self-documenting.</>,
            <>Default values make calls simpler; a defaulted parameter must come <strong>after</strong> all non-defaulted ones.</>,
            <>Fewer or more arguments than needed → a <strong>TypeError traceback</strong> that names what went wrong.</>,
            <><strong>return</strong> sends a value back to the caller (store it in a variable) — print only displays. Functions can return dictionaries too.</>,
            <>Optional arguments: empty-string default + <strong>if middle_name:</strong>, listed last in the definition.</>,
            <>Functions compose with while loops — always give an infinite <strong>while True</strong> an exit via <strong>break</strong>.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}
