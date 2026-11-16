"use client";

/* ============================================================
   FocParts9 — the FoC rebuild, file 9.

   #returns  (Lecture 28 — Second Lecture on Functions: Return
              Values, Optional Arguments & List Management)

   Lecture 28 owns the full return-value story AND the
   list-management half of the old Part9: return vs print,
   optional middle names, dictionary builders, functions fused
   with while loops — then lists travel in (greet_users), get
   permanently mutated by the 3D-printer pair, and get
   protected by the [:] slice copy. The printer blocks are
   re-homed byte-for-byte from Part9, including the hidden
   PRINT_MODELS_PRE preamble that keeps their Run buttons
   working. Every verified output is unchanged.
   ============================================================ */

import React from "react";
import {
  Layers,
  ListPlus,
  Package,
  Printer,
  Repeat,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  Callout,
  CodeBlock,
  KV,
  Practice,
  Quiz,
  ReadStep,
  Reveal,
  Section,
  SectionHead,
  StepsFlow,
  Takeaways,
} from "@/components/notes/ui";
import { CallStackFlow } from "@/components/foc/FocViz";

/* Hidden setup for the slice-notation demo — the visible snippet only shows
   the call; the two printing functions come from the previous step. */
const PRINT_MODELS_PRE = `def print_models(unprinted_designs, completed_models):
    """Simulate printing each design, until none are left."""
    while unprinted_designs:
        current_design = unprinted_designs.pop()
        print("Printing model: " + current_design)
        completed_models.append(current_design)

def show_completed_models(completed_models):
    """Show all the models that were printed."""
    print("\\nThe following models have been printed:")
    for completed_model in completed_models:
        print(completed_model)`;

export function ReturnsSection() {
  return (
    <Section id="returns">
      <SectionHead
        eyebrow="Lecture 28 · return values"
        title={
          <>
            Return values — <span className="grad-text">send the answer back</span>
          </>
        }
        lead="Lecture 27 taught functions to take; this lecture teaches them to give back. A function can process data internally and return the result — to be stored, reused, or passed on. This is where functions stop being shortcuts and start being building blocks."
      />

      <ReadStep n="1" title="return, not print" sub="print() is a dead end; return is a doorway" />
      <Reveal>
        <CallStackFlow />
      </Reveal>
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <p className="mt-2 max-w-3xl text-[.92rem] leading-relaxed text-muted-warm">
            A function doesn&rsquo;t always have to display its output directly. It can process data and
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
              <KV k="simplify" v="the main body of the program shrinks — the heavy lifting lives inside the function." />
            </div>
          </div>
        </div>
      </Reveal>

      <ReadStep n="2" title="Making an argument optional" sub="Empty-string default + one if — one function, both scenarios" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
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
                Most people don&rsquo;t have a middle name — forcing one makes the function brittle.
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

      <ReadStep n="3" title="Returning a dictionary" sub="Any structure can come back — including a whole person" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <Layers className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">Returning a dictionary</h3>
          </div>
          <p className="mt-2 max-w-3xl text-[.92rem] leading-relaxed text-muted-warm">
            A function can return <strong>any kind of value</strong> — including complicated data structures like
            lists and dictionaries. Here a function builds a person&rsquo;s record and hands the whole dictionary back.
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

      <ReadStep n="4" title="Functions × while loops" sub="The greeter that never stops — and its fix" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <Repeat className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">
              Using a function with a <span className="grad-text">while loop</span>
            </h3>
          </div>
          <p className="mt-2 max-w-3xl text-[.92rem] leading-relaxed text-muted-warm">
            Functions compose with every structure you&rsquo;ve learned. Here get_formatted_name() greets users in a
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

      <ReadStep n="5" title="Passing a list to a function" sub="One call works through a whole roster — the function gets direct access to the contents" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <ListPlus className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">Passing a list to a function</h3>
          </div>
          <p className="mt-2 max-w-3xl text-[.92rem] leading-relaxed text-muted-warm">
            Whether it&rsquo;s a list of names, numbers, or more complex objects like dictionaries — passing a list
            gives the function <strong>direct access to its contents</strong>. Handle variable numbers of items
            without writing separate code for each one.
          </p>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="users.py — greet everyone at once"
              code={`def greet_users(names):
    """Print a simple greeting to each user in the list.""" # docstring
    for name in names:
        msg = "Hello, " + name.title() + "!"
        print(msg)

usernames = ['priyanka', 'unnati', 'anaaya'] # function call
greet_users(usernames)`}
              output={"Hello, Priyanka!\nHello, Unnati!\nHello, Anaaya!"}
              note="We define greet_users() to expect a list of names, which it stores in the parameter names — then the for loop walks the list and prints a personalized greeting for every user."
            />
            <div className="grid content-start gap-3">
              <Callout kind="insight" title="Why this is useful">
                One call handles an entire roster. Pass a list of anything — names, numbers, dictionaries — and the
                function works through it with the tools you already know (for loops, indexing, methods). The code
                stays organized and reusable.
              </Callout>
              <KV k="parameter" v="names — holds whatever list the caller sends" />
              <KV k="inside" v="the function treats it exactly like any other list: loop it, index it, modify it" />
            </div>
          </div>
        </div>
      </Reveal>

      <ReadStep n="6" title="Modifying a list in a function — the 3D printer" sub="Changes made inside a function are permanent — pop from the to-do list, append to the done list" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <Printer className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">Modifying a list in a function — the 3D printer</h3>
          </div>
          <p className="mt-2 max-w-3xl text-[.92rem] leading-relaxed text-muted-warm">
            When we pass a list to a function, the function <strong>can modify it</strong> — and changes made inside
            the function&rsquo;s body are <strong>permanent</strong>: the function modifies the original list, not a
            copy. That&rsquo;s a feature — efficient even with large amounts of data. Picture a company that
            3D-prints user-submitted designs: designs to print live in one list, finished prints move to another.
          </p>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="printing_models.py — before: all in one block"
              code={`# Start with some designs that need to be printed.
unprinted_designs = ['iphone case', 'robot pendant', 'dodecahedron']
completed_models = []

# Simulate printing each design, until none are left.
# Move each design to completed_models after printing.
while unprinted_designs:
    current_design = unprinted_designs.pop()
    # Simulate creating a 3D print from the design.
    print("Printing model: " + current_design)
    completed_models.append(current_design)

# Display all completed models.
print("\\nThe following models have been printed:")
for completed_model in completed_models:
    print(completed_model)`}
              note="It works — but printing logic and display logic are tangled together in the main program."
            />
            <CodeBlock
              title="printing_models.py — after: two functions, one job each"
              code={`def print_models(unprinted_designs, completed_models):
    """
    Simulate printing each design, until none are left.
    Move each design to completed_models after printing.
    """
    while unprinted_designs:
        current_design = unprinted_designs.pop()

        # Simulate creating a 3D print from the design.
        print("Printing model: " + current_design)
        completed_models.append(current_design)

def show_completed_models(completed_models):
    """Show all the models that were printed."""
    print("\\nThe following models have been printed:")
    for completed_model in completed_models:
        print(completed_model)

unprinted_designs = ['iphone case', 'robot pendant', 'dodecahedron']
completed_models = []
print_models(unprinted_designs, completed_models)
show_completed_models(completed_models)
unprinted_designs   # → [] — permanently emptied!`}
              note="Most of the code doesn't change — we're just making it more efficient. The pop() calls happen inside the function, so the original list is permanently modified."
            />
          </div>

          <div className="mt-6">
            <StepsFlow
              steps={[
                { label: "unprinted_designs", sub: "the to-do list", icon: <Package className="h-5 w-5" style={{ color: "#c2410c" }} /> },
                { label: "print_models()", sub: "pop → print → append", icon: <Printer className="h-5 w-5" style={{ color: "#c2410c" }} /> },
                { label: "completed_models", sub: "the done list", icon: <Sparkles className="h-5 w-5" style={{ color: "#c2410c" }} /> },
                { label: "show_completed_models()", sub: "summarize the prints", icon: <ListPlus className="h-5 w-5" style={{ color: "#c2410c" }} /> },
              ]}
            />
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Callout kind="why" title="Why the reorganized program wins">
              It&rsquo;s <strong>easier to extend and maintain</strong>. Need more designs later? Call{" "}
              <code className="font-mono">print_models()</code> again — no rewriting. Printing logic needs a change?
              Edit it <strong>once</strong> and the change applies everywhere the function is called.
            </Callout>
            <Callout kind="insight" title="One function, one job">
              Every function should have <strong>one specific job</strong>: the first prints each design, the second
              displays results. If a function is doing too many different tasks, split it into two — you can always
              call a function from another function, which helps break complex work into a series of steps.
            </Callout>
          </div>
        </div>
      </Reveal>

      <ReadStep n="7" title="Preventing a function from modifying a list" sub="The slice trick — list_name[:] sends a copy the function can rampage through" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">Preventing modification — pass a copy</h3>
          </div>
          <p className="mt-2 max-w-3xl text-[.92rem] leading-relaxed text-muted-warm">
            Suppose that after printing all the designs, you want to <strong>keep the original list for your
            records</strong>. But we moved every design name out of unprinted_designs — the list is now empty and
            that empty list is the only version we have. The original is gone. The fix: pass the function a
            <strong> copy</strong> — the function then modifies only the copy, leaving the original intact.
          </p>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="the slice notation trick"
              pre={PRINT_MODELS_PRE}
              code={`unprinted_designs = ['ferrari', 'honda', 'ford']
completed_models = []

print_models(unprinted_designs[:], completed_models) # passing a copy of the original list
show_completed_models(completed_models)

unprinted_designs   # → ['ferrari', 'honda', 'ford'] — still intact!`}
              output={["Printing model: ford", "Printing model: honda", "Printing model: ferrari", "", "The following models have been printed:", "ford", "honda", "ferrari"].join("\n")}
              note="The slice [:] notation — print_models(unprinted_designs[:]) — sends a duplicate. The function empties the duplicate; the original survives."
            />
            <div className="grid content-start gap-3">
              <KV k="list_name[:]" v="a full-copy slice — the colon between the brackets means all elements from first to last; the function can rampage through the copy while the original stays untouched" />
              <Callout kind="why" title="What the copy buys you">
                The original data remains <strong>safe and unchanged</strong> — the information is
                <strong> preserved for your records</strong> or further operations, and you keep full
                <strong> flexibility</strong> in how the data is processed and stored.
              </Callout>
              <Callout kind="warn" title="Use copies for a reason">
                Passing a copy costs time and memory, so pass the original unless you have a specific reason to
                keep it — reserve the <code className="font-mono">[:]</code> copy for exactly this situation.
              </Callout>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-8">
        <div className="grid gap-4 md:grid-cols-2">
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
          <Quiz
            q="print_models(unprinted_designs[:], completed_models) has run. What's left in the original unprinted_designs list?"
            options={[
              "Empty — pop() removed everything",
              "['ferrari', 'honda', 'ford'] — the [:] sent a copy, so the pops emptied the duplicate",
              "Only the last design",
              "A TypeError — you cannot slice into a function call",
            ]}
            answer={1}
            explain="The slice [:] duplicates the list before the call. print_models() empties the COPY; the original never loses a single design — that's how you keep your records intact."
            source="Functions · protecting lists"
          />
        </div>
      </Reveal>

      <Reveal className="mt-6">
        <Practice
          title="Try It Yourself — return drills"
          items={[
            { q: <>city_country(city, country) returns neatly formatted strings like <code className="font-mono">&ldquo;Chennai, India&rdquo;</code> — call it for three pairs.</> },
            { q: <>make_album(artist, title) builds and returns a dictionary; add an optional number of tracks; build three albums.</> },
            { q: <>Wrap make_album in a while loop that collects artist/title from the user until <code className="font-mono">&rsquo;q&rsquo;</code>.</> },
            { q: <>Magicians: build a list of magician names and pass it to a show_magicians() function that prints each name.</> },
            { q: <>make_great(): add &ldquo;the Great&rdquo; to each magician&rsquo;s name, modify the original list, then display it.</> },
            { q: <>Preserve the original: call make_great() with a <em>copy</em> of the list — keep the original untouched and display both.</>, hint: "pass the list with a full-slice copy" },
          ]}
        />
      </Reveal>

      <Reveal className="mt-6">
        <Takeaways
          items={[
            <><strong>return</strong> sends a value back to the caller — store it, reuse it, pass it on; print only displays.</>,
            <>Optional arguments: empty-string default + <strong>if middle_name:</strong>, listed <strong>last</strong> in the definition.</>,
            <>Functions can return <strong>dictionaries</strong> — build_person() hands back a whole record.</>,
            <>Functions compose with <strong>while loops</strong> — and every while True needs its <strong>break</strong>.</>,
            <>Lists passed to functions are <strong>mutated for real</strong> — pass <strong>list_name[:]</strong> when the original must survive for your records.</>,
            <>Give every function <strong>one specific job</strong> — print_models() moves the designs, show_completed_models() shows them; split anything doing too much.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}
