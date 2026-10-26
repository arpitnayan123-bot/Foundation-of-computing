"use client";

/* ============================================================
   FocParts9 — the FoC rebuild, file 9 of 9.

   #returns  (Lecture 28 — Functions II: Return & Deliver)

   The return-value half of the old arguments chapter becomes
   its own section for Lecture 28: return vs print, optional
   middle names, dictionary builders, and functions fused with
   while loops. These blocks are re-homed byte-for-byte from
   Part8 — nothing deleted, everything re-anchored to the deck.
   ============================================================ */

import React from "react";
import { CornerDownLeft, Layers, Repeat } from "lucide-react";
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
  Takeaways,
} from "@/components/notes/ui";

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
            q="build_person('rhea', 'kapoor') returns {'first': 'rhea', 'last': 'kapoor'}. What does the function actually send back?"
            options={[
              "A printed line of text",
              "The dictionary object itself, catchable in a variable",
              "Only the first name",
              "None — dictionaries cannot be returned",
            ]}
            answer={1}
            explain="Functions can return any structure. The caller stores the whole dictionary — student = build_person(...) — and can read it later with ['first'] and ['last']."
            source="Functions · returning dicts"
          />
        </div>
      </Reveal>

      <Reveal className="mt-6">
        <Practice
          title="Try It Yourself — return drills"
          items={[
            { q: <>city_country(city, country) returns neatly formatted strings like <code className="font-mono">&ldquo;Chennai, India&rdquo;</code> — call it for three pairs.</> },
            { q: <>make_album(artist, title) builds and returns a dictionary; add an optional songs count; build three albums.</> },
            { q: <>Wrap make_album in a while loop that collects artist/title from the user until <code className="font-mono">&rsquo;q&rsquo;</code>.</> },
            { q: <>Rewrite get_formatted_name so the middle name is optional, then produce both <em>Arijit Singh</em> and <em>Lana Del Rey</em>.</> },
            { q: <>Combine get_formatted_name() with a while loop that quits on <code className="font-mono">&rsquo;q&rsquo;</code> at either prompt — what breaks if you delete the breaks?</> },
          ]}
        />
      </Reveal>

      <Reveal className="mt-6">
        <div style={{ display: "flex", alignItems: "center", gap: ".5rem", marginBottom: "1rem" }}>
          <CornerDownLeft className="h-5 w-5" style={{ color: "#c2410c" }} />
          <span className="text-sm font-black uppercase tracking-[.2em] text-[#8a5a10]">
            Lecture 28 — the recorded deck ends here; functions keep scaling in the next chapter
          </span>
        </div>
        <Takeaways
          items={[
            <><strong>return</strong> sends a value back to the caller — store it, reuse it, pass it on; print only displays.</>,
            <>Optional arguments: empty-string default + <strong>if middle_name:</strong>, listed <strong>last</strong> in the definition.</>,
            <>Functions can return <strong>dictionaries</strong> — build_person() hands back a whole record.</>,
            <>Functions compose with <strong>while loops</strong> — and every while True needs its <strong>break</strong>.</>,
            <>Ahead of the deck: passing lists to functions, arbitrary arguments (*args), modules — and classes.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}
