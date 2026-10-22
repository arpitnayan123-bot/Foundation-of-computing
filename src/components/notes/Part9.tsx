"use client";

import React, { useState } from "react";
import {
  ListPlus,
  Printer,
  ShieldCheck,
  Pizza,
  UserCircle2,
  SlidersHorizontal,
  FileCode2,
  Ban,
  RotateCcw,
  MousePointerClick,
  Sparkles,
  Infinity as InfinityIcon,
  Package,
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
  StepsFlow,
  KV,
} from "./ui";

/* Virtual pizza.py module — injected into the Python runtime before the
   import demos run, so `import pizza` works exactly like in the notebook. */
const PIZZA_MODULE = `def make_pizza(size, *toppings):
    """Summarize the pizza we are about to make."""
    print("\\nMaking a " + str(size) +
        "-inch pizza with the following toppings:")
    for topping in toppings:
        print("- " + topping)

def greet(name):
    return f"Hello, {name}! Your Pizza is ready."`;

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

/* ============================================================
   PizzaBuilder — interactive *args packing
   ============================================================ */
const TOPPINGS = ["pepperoni", "mushrooms", "green peppers", "extra cheese"];

function PizzaBuilder() {
  const [picked, setPicked] = useState<string[]>(["pepperoni"]);
  const toggle = (t: string) =>
    setPicked((p) => (p.includes(t) ? p.filter((x) => x !== t) : [...p, t]));

  return (
    <div className="overflow-hidden rounded-2xl border border-[rgba(255,214,160,.18)] bg-[rgba(255,236,210,.05)] p-6 md:p-8">
      <div className="flex items-center gap-2">
        <Pizza className="h-5 w-5" style={{ color: "#f5c889" }} />
        <h3 className="text-lg font-bold text-[#f7ead6]">
          Try it: pack toppings into a <span className="grad-text">tuple</span>
        </h3>
      </div>
      <p className="mt-1 text-[.88rem] text-[#cbb392]">
        Click toppings — Python packs every one you send into the single tuple <code className="font-mono">toppings</code>.
        Same definition handles one topping or four.
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {TOPPINGS.map((t) => (
          <button
            key={t}
            onClick={() => toggle(t)}
            className={`rounded-full px-4 py-1.5 text-[.8rem] font-bold transition-all duration-200 ${
              picked.includes(t)
                ? "text-white shadow-md"
                : "border border-[rgba(245,158,11,.3)] bg-transparent text-[#cbb392] hover:border-[#f5c889]"
            }`}
            style={picked.includes(t) ? { background: "linear-gradient(135deg,#ea580c,#c2410c)" } : undefined}
            aria-pressed={picked.includes(t)}
          >
            {t}
          </button>
        ))}
        <button
          onClick={() => setPicked([])}
          className="flex items-center gap-1.5 rounded-full border border-[rgba(245,158,11,.3)] px-3 py-1.5 text-[.78rem] font-bold text-[#cbb392] transition-colors hover:border-[#f5c889]"
        >
          <RotateCcw className="h-3.5 w-3.5" /> reset
        </button>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-[rgba(245,158,11,.18)] bg-[rgba(43,27,16,.7)] p-4">
          <p className="text-[.62rem] font-bold uppercase tracking-[.2em] text-[#b98d5f]">the call & the tuple</p>
          <p className="mt-2 font-mono text-[.82rem] leading-relaxed text-[#efe0cb]">
            make_pizza(<span className="tk-n">16</span>,{" "}
            {picked.length === 0 ? (
              <em className="text-[#c9a97e]">…click a topping</em>
            ) : (
              picked.map((t, i) => (
                <React.Fragment key={t}>
                  {i > 0 ? ", " : null}
                  <span key={t} className="anim-pop inline-block rounded bg-[rgba(255,200,120,.14)] px-1 text-[#e9c46a]">
                    '{t}'
                  </span>
                </React.Fragment>
              ))
            )}
            )
          </p>
          <p className="mt-3 font-mono text-[.78rem] text-[#9fe0b5]">
            toppings = ({picked.map((t) => `'${t}'`).join(", ")})
          </p>
          <p className="mt-1 text-[.72rem] italic text-[#c9a97e]">
            the * packs all of them into one tuple — even a single value
          </p>
        </div>
        <div className="rounded-xl border border-[rgba(245,158,11,.18)] bg-[rgba(43,27,16,.7)] p-4">
          <p className="text-[.62rem] font-bold uppercase tracking-[.2em] text-[#b98d5f]">output</p>
          <p className="mt-2 font-mono text-[.82rem] leading-relaxed text-[#efe0cb]">
            Making a 16-inch pizza with the following toppings:
          </p>
          {picked.length === 0 ? (
            <p className="mt-1 font-mono text-[.8rem] text-[#c9a97e]">(a pizza with nothing on it… bold choice)</p>
          ) : (
            picked.map((t) => (
              <p key={t} className="anim-pop mt-1 font-mono text-[.82rem] text-[#e9c46a]">
                - {t}
              </p>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   ProfileBuilder — interactive **kwargs packing
   ============================================================ */
const PROFILE_KEYS = [
  { k: "location", v: "princeton" },
  { k: "field", v: "physics" },
];

function ProfileBuilder() {
  const [picked, setPicked] = useState<string[]>(["location"]);
  const toggle = (k: string) =>
    setPicked((p) => (p.includes(k) ? p.filter((x) => x !== k) : [...p, k]));

  return (
    <div className="overflow-hidden rounded-2xl border border-[rgba(255,214,160,.18)] bg-[rgba(255,236,210,.05)] p-6 md:p-8">
      <div className="flex items-center gap-2">
        <UserCircle2 className="h-5 w-5" style={{ color: "#f5c889" }} />
        <h3 className="text-lg font-bold text-[#f7ead6]">
          Try it: pack key-value pairs into a <span className="grad-text">dictionary</span>
        </h3>
      </div>
      <p className="mt-1 text-[.88rem] text-[#cbb392]">
        **user_info creates an empty dictionary and packs whatever name-value pairs the call provides.
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {PROFILE_KEYS.map((p) => (
          <button
            key={p.k}
            onClick={() => toggle(p.k)}
            className={`rounded-full px-4 py-1.5 font-mono text-[.78rem] font-bold transition-all duration-200 ${
              picked.includes(p.k)
                ? "text-white shadow-md"
                : "border border-[rgba(245,158,11,.3)] bg-transparent text-[#cbb392] hover:border-[#f5c889]"
            }`}
            style={picked.includes(p.k) ? { background: "linear-gradient(135deg,#ea580c,#c2410c)" } : undefined}
            aria-pressed={picked.includes(p.k)}
          >
            {p.k}='{p.v}'
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-[rgba(245,158,11,.18)] bg-[rgba(43,27,16,.7)] p-4">
          <p className="text-[.62rem] font-bold uppercase tracking-[.2em] text-[#b98d5f]">**user_info receives</p>
          <p className="mt-2 font-mono text-[.82rem] leading-relaxed text-[#9fe0b5]">
            user_info = {"{"}
            {picked.map((k) => {
              const pair = PROFILE_KEYS.find((x) => x.k === k)!;
              return ` '${pair.k}': '${pair.v}',`;
            }).join("").replace(/,$/, "")}
            {" }"}
          </p>
          <p className="mt-2 text-[.72rem] italic text-[#c9a97e]">
            double asterisk → empty dict → pairs packed in
          </p>
        </div>
        <div className="rounded-xl border border-[rgba(245,158,11,.18)] bg-[rgba(43,27,16,.7)] p-4">
          <p className="text-[.62rem] font-bold uppercase tracking-[.2em] text-[#b98d5f]">returned profile</p>
          <p className="mt-2 font-mono text-[.8rem] leading-relaxed text-[#e9c46a]">
            {"{"}'first_name': 'albert', 'last_name': 'einstein'
            {picked.map((k) => {
              const pair = PROFILE_KEYS.find((x) => x.k === k)!;
              return `, '${pair.k}': '${pair.v}'`;
            })}
            {"}"}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   PART 9 — FUNCTIONS II  (lists, *args, **kwargs, modules)
   ============================================================ */
export function FuncsScaleSection() {
  return (
    <Section id="funcs2" dark>
      <SectionHead
        dark
        eyebrow="Python · functions · the full chapter — part 2"
        title={
          <>
            Functions at <span className="grad-text">scale</span>
          </>
        }
        lead="Now the power moves: hand whole lists to functions (and protect them), accept any number of arguments with *args, absorb any key-value pairs with **kwargs — then move everything into modules and import it back."
      />

      {/* 1 — passing a list */}
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <ListPlus className="h-6 w-6" style={{ color: "#f5c889" }} />
            <h3 className="text-2xl font-bold">Passing a list to a function</h3>
          </div>
          <p className="mt-2 max-w-3xl text-[.92rem] leading-relaxed text-[#cbb392]">
            Whether it's a list of names, numbers, or more complex objects like dictionaries — passing a list gives
            the function <strong>direct access to its contents</strong>.
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
              note="We define greet_users() to expect a list of names, which it stores in the parameter names — then loop through and greet each user."
            />
            <div className="grid content-start gap-3">
              <Callout dark kind="insight" title="Why this is useful">
                One call handles an entire roster. Pass a list of anything — names, numbers, dictionaries — and the
                function works through it with the tools you already know (for loops, indexing, methods).
              </Callout>
              <KV k="parameter" v="names — holds whatever list the caller sends" />
              <KV k="inside" v="the function treats it exactly like any other list: loop it, index it, modify it" />
            </div>
          </div>
        </div>
      </Reveal>

      {/* 2 — modifying a list */}
      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <Printer className="h-6 w-6" style={{ color: "#f5c889" }} />
            <h3 className="text-2xl font-bold">Modifying a list in a function — the 3D printer</h3>
          </div>
          <p className="mt-2 max-w-3xl text-[.92rem] leading-relaxed text-[#cbb392]">
            When we pass a list to a function, the function <strong>can modify it</strong> — and changes made inside
            the function's body are <strong>permanent</strong>. That's a feature: efficient even with large amounts
            of data. Picture a company that 3D-prints user-submitted designs: designs to print live in one list,
            finished prints move to another.
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
              note="Most of the code doesn't change — we're just making it more efficient."
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
            <Callout dark kind="why" title="Why the reorganized program wins">
              It's <strong>easier to extend and maintain</strong>. Need more designs later? Call{" "}
              <code className="font-mono">print_models()</code> again. Printing logic needs a change? Edit it{" "}
              <strong>once</strong> and the change applies everywhere the function is called — far more efficient
              than updating code in several places.
            </Callout>
            <Callout dark kind="insight" title="One function, one job">
              Every function should have <strong>one specific job</strong>: the first prints each design, the second
              displays results. If a function is doing too many different tasks, split it into two — you can always
              call a function from another function, which helps break complex work into a series of steps.
            </Callout>
          </div>
        </div>
      </Reveal>

      {/* 3 — slice copy */}
      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6" style={{ color: "#f5c889" }} />
            <h3 className="text-2xl font-bold">Preventing modification — pass a copy</h3>
          </div>
          <p className="mt-2 max-w-3xl text-[.92rem] leading-relaxed text-[#cbb392]">
            Suppose that after printing all the designs, you want to <strong>keep the original list for your
            records</strong>. But we moved every design name out of unprinted_designs — the list is now empty and
            that empty list is the only version we have. The original is gone. The fix: pass the function a
            <strong> copy</strong> — changes then affect only the copy, leaving the original intact.
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
              <KV k="list_name[:]" v="a full-copy slice — the function can rampage through the copy while the original stays untouched" />
              <Callout dark kind="warn" title="Use copies for a reason">
                Passing a copy costs time and memory, so pass the original unless you have a specific reason to
                keep it — reserve the <code className="font-mono">[:]</code> copy for exactly this situation.
              </Callout>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 4 — arbitrary args */}
      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <Pizza className="h-6 w-6" style={{ color: "#f5c889" }} />
            <h3 className="text-2xl font-bold">
              Arbitrary arguments — <span className="grad-text">*toppings</span>
            </h3>
          </div>
          <p className="mt-2 max-w-3xl text-[.92rem] leading-relaxed text-[#cbb392]">
            Sometimes you won't know in advance how many arguments a function needs to accept — a pizza builder
            can't know how many toppings a person wants. Python lets a function collect an
            <strong> arbitrary number of arguments</strong> from the calling statement.
          </p>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="pizzas.py — the asterisk packs a tuple"
              code={`def make_pizza(*toppings):
    """Print the list of toppings that have been requested."""
    print(toppings)

make_pizza('pepperoni')
make_pizza('mushrooms', 'green peppers', 'extra cheese')`}
              output={"('pepperoni',)\n('mushrooms', 'green peppers', 'extra cheese')"}
              note="The asterisk tells Python: make an empty tuple called toppings and pack whatever values arrive into it. Even one value arrives inside a tuple — both calls are treated the same way."
            />
            <CodeBlock
              title="pizzas.py — loop over the tuple"
              code={`def make_pizza(*toppings):
    """Summarize the pizza we are about to make."""
    print("\\nMaking a pizza with the following toppings:")
    for topping in toppings:
        print("- " + topping)

make_pizza('pepperoni')
make_pizza('mushrooms', 'green peppers', 'extra cheese')`}
              output={"Making a pizza with the following toppings:\n- pepperoni\n\nMaking a pizza with the following toppings:\n- mushrooms\n- green peppers\n- extra cheese"}
            />
          </div>
        </div>
      </Reveal>

      {/* 5 — pizza builder */}
      <Reveal className="mt-8">
        <PizzaBuilder />
      </Reveal>

      {/* 6 — mixing positional + arbitrary */}
      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <SlidersHorizontal className="h-6 w-6" style={{ color: "#f5c889" }} />
            <h3 className="text-2xl font-bold">Mixing positional and arbitrary arguments</h3>
          </div>
          <p className="mt-2 max-w-3xl text-[.92rem] leading-relaxed text-[#cbb392]">
            The parameter that accepts an arbitrary number of arguments must be placed <strong>last</strong> in the
            definition — Python matches positional and keyword arguments first, then collects any remaining
            arguments into the final parameter. If the function needs a pizza size, size comes before *toppings.
          </p>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="pizzas.py — size first, toppings last"
              code={`def make_pizza(size, *toppings):
    """Summarize the pizza we are about to make."""
    print("\\nMaking a " + str(size) +
        "-inch pizza with the following toppings:")
    for topping in toppings:
        print("- " + topping)

make_pizza(16, 'pepperoni')
make_pizza(12, 'mushrooms', 'green peppers', 'extra cheese')`}
              output={"Making a 16-inch pizza with the following toppings:\n- pepperoni\n\nMaking a 12-inch pizza with the following toppings:\n- mushrooms\n- green peppers\n- extra cheese"}
            />
            <div className="grid content-start gap-3">
              <Callout dark kind="insight" title="How Python routes the call">
                The first value received goes into <strong>size</strong>. All remaining values are stored in the
                tuple <strong>toppings</strong>. Calls write the size argument first, then as many toppings as
                needed.
              </Callout>
              <div className="rounded-xl border border-[rgba(245,158,11,.22)] bg-[rgba(43,27,16,.6)] p-4 font-mono text-[.8rem] text-[#efe0cb]">
                <span className="tk-n">16</span> → size · <span className="text-[#e9c46a]">'pepperoni'</span> → toppings[0]
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 7 — **kwargs */}
      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <UserCircle2 className="h-6 w-6" style={{ color: "#f5c889" }} />
            <h3 className="text-2xl font-bold">
              Arbitrary keyword arguments — <span className="grad-text">**user_info</span>
            </h3>
          </div>
          <p className="mt-2 max-w-3xl text-[.92rem] leading-relaxed text-[#cbb392]">
            Now you want to accept an arbitrary number of arguments, but you <em>also</em> don't know what
            <em> kind</em> of information will be passed. Write functions that accept as many
            <strong> key-value pairs</strong> as the call provides — perfect for building user profiles when you're
            not sure what information you'll receive.
          </p>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="profiles.py — build_profile"
              code={`def build_profile(first, last, **user_info):
    """Build a dictionary containing everything we know about a user."""
    profile = {}
    profile['first_name'] = first
    profile['last_name'] = last
    for key, value in user_info.items():
        profile[key] = value
    return profile

user_profile = build_profile('albert', 'einstein',
                             location='princeton',
                             field='physics')
print(user_profile)`}
              output={"{'first_name': 'albert', 'last_name': 'einstein', 'location': 'princeton', 'field': 'physics'}"}
              note="The double asterisks create an empty dictionary called user_info and pack the name-value pairs into it — then you access them exactly like any dictionary."
            />
            <div className="grid content-start gap-3">
              <KV k="*toppings" v="empty TUPLE — packs any number of positional values" />
              <KV k="**user_info" v="empty DICTIONARY — packs any number of name-value pairs" />
              <p className="text-[.88rem] leading-relaxed text-[#cbb392]">
                Inside build_profile(): make an empty <code className="font-mono">profile</code> dict, always add
                first and last name (we'll always receive both), loop through{" "}
                <code className="font-mono">user_info.items()</code> adding each pair, then{" "}
                <code className="font-mono">return</code> the profile to the call line.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 8 — profile builder */}
      <Reveal className="mt-8">
        <ProfileBuilder />
      </Reveal>

      {/* 9 — full parameter order */}
      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <SlidersHorizontal className="h-6 w-6" style={{ color: "#f5c889" }} />
            <h3 className="text-2xl font-bold">
              Putting it all together — <span className="grad-text">parameter order</span>
            </h3>
          </div>
          <p className="mt-2 max-w-3xl text-[.92rem] leading-relaxed text-[#cbb392]">
            One definition can use every kind of parameter — but Python enforces a strict order:
          </p>
          <div className="mt-4 overflow-x-auto">
            <div className="flex min-w-max items-center gap-1.5 rounded-xl border border-[rgba(245,158,11,.22)] bg-[rgba(43,27,16,.6)] p-3 font-mono text-[.78rem] md:text-[.84rem]">
              {[
                { t: "positional", s: "no default" },
                { t: "positional_default=0", s: "with default" },
                { t: "*args", s: "arbitrary positional" },
                { t: "kw_only=100", s: "keyword-only" },
                { t: "**kwargs", s: "arbitrary keyword — ALWAYS last" },
              ].map((p, i) => (
                <React.Fragment key={p.t}>
                  {i > 0 ? <span className="text-[#c98d4e]">, </span> : null}
                  <span
                    className="anim-pop rounded-lg px-2 py-1"
                    style={{
                      background: "rgba(255,200,120,.12)",
                      border: "1px solid rgba(245,158,11,.25)",
                      animationDelay: `${i * 0.12}s`,
                    }}
                  >
                    <span className="text-[#ffd28a]">{p.t}</span>
                    <span className="ml-1.5 hidden text-[.62rem] uppercase tracking-wide text-[#c98d4e] md:inline">{p.s}</span>
                  </span>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="mt-5">
            <CodeBlock
              title="order.py — every parameter type in action"
              code={`def process_data(a, b=2, *args, c=10, **kwargs):
    print(f"a      = {a}")
    print(f"b      = {b}")
    print(f"args   = {args}")
    print(f"c      = {c}")
    print(f"kwargs = {kwargs}")

# Test 1: Using default values
process_data(1)
# a=1, b=2, args=(), c=10, kwargs={}

print("-" * 20)

# Test 2: Overriding defaults and passing extra arguments
process_data(10, 20, 30, 40, c=99, user="Admin", debug=True)
# a=10, b=20, args=(30, 40), c=99, kwargs={'user': 'Admin', 'debug': True}`}
              output={"a      = 1\nb      = 2\nargs   = ()\nc      = 10\nkwargs = {}\n--------------------\na      = 10\nb      = 20\nargs   = (30, 40)\nc      = 99\nkwargs = {'user': 'Admin', 'debug': True}"}
              note="Trace test 2: 10→a, 20→b, leftover 30 and 40→args tuple, c=99 by name, the rest→kwargs dict. One call, all five parameter types routed correctly."
            />
          </div>
        </div>
      </Reveal>

      {/* 10 — modules */}
      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <FileCode2 className="h-6 w-6" style={{ color: "#f5c889" }} />
            <h3 className="text-2xl font-bold">Storing functions in modules</h3>
          </div>
          <p className="mt-2 max-w-3xl text-[.92rem] leading-relaxed text-[#cbb392]">
            Functions separate blocks of code from the main program — descriptive names make the main program much
            easier to follow. Go further: store functions in a separate file called a{" "}
            <strong>module</strong> and import it. An <strong>import statement</strong> makes the code in a module
            available in the currently running program. This hides code details so you focus on higher-level logic,
            lets you reuse functions across programs, share files without sharing the whole program — and use
            libraries written by other programmers.
          </p>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="pizza.py — the module (a .py file)"
              code={`%%writefile pizza.py   # notebook magic: save this cell as a file
def make_pizza(size, *toppings):
    """Summarize the pizza we are about to make."""
    print("\\nMaking a " + str(size) +
        "-inch pizza with the following toppings:")
    for topping in toppings:
        print("- " + topping)

def greet(name):
    return f"Hello, {name}! Your Pizza is ready."`}
              note="A module is a file ending in .py that contains the code you want to import into your program."
            />
            <CodeBlock
              title="making_pizzas.py — import the entire module"
              files={{ "pizza.py": PIZZA_MODULE }}
              code={`import pizza

pizza.make_pizza(16, 'pepperoni')
print(pizza.greet("Aditya"))

pizza.make_pizza(12, 'mushrooms', 'green peppers', 'extra cheese')
pizza.greet('Utkarsh')`}
              output={"Making a 16-inch pizza with the following toppings:\n- pepperoni\nHello, Aditya! Your Pizza is ready.\n\nMaking a 12-inch pizza with the following toppings:\n- mushrooms\n- green peppers\n- extra cheese"}
              note="import pizza opens pizza.py and copies all its functions into this program. Call them as module_name.function_name — the dot keeps origins obvious."
            />
          </div>
        </div>
      </Reveal>

      {/* 11 — import styles */}
      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <h3 className="text-2xl font-bold">Every way to import — one table</h3>
          <div className="mt-5 overflow-x-auto">
            <table className="warm-table min-w-[720px]">
              <thead>
                <tr>
                  <th>Style</th>
                  <th>Call syntax</th>
                  <th>What you get</th>
                  <th>Verdict</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-mono text-[.8rem] font-bold text-[#3e2c1d]">import pizza</td>
                  <td className="font-mono text-[.8rem]">pizza.make_pizza(12, 'cheese') · pizza.greet('Aditya')</td>
                  <td>Every function, reached through the dot</td>
                  <td className="font-semibold text-[#44621d]">✅ clear origins</td>
                </tr>
                <tr>
                  <td className="font-mono text-[.8rem] font-bold text-[#3e2c1d]">from pizza import make_pizza</td>
                  <td className="font-mono text-[.8rem]">make_pizza(16, 'pepperoni')</td>
                  <td>One specific function, called by name</td>
                  <td className="font-semibold text-[#44621d]">✅ precise</td>
                </tr>
                <tr>
                  <td className="font-mono text-[.8rem] font-bold text-[#3e2c1d]">from pizza import make_pizza, greet</td>
                  <td className="font-mono text-[.8rem]">make_pizza(...) · greet(...)</td>
                  <td>Several specific functions — separate names with commas; no dot notation needed (<span className="font-mono text-[.78rem]">make_pizza(16, 'pepperoni')</span> · <span className="font-mono text-[.78rem]">print(greet('Aditya'))</span> · <span className="font-mono text-[.78rem]">greet('Naina')</span>)</td>
                  <td className="font-semibold text-[#44621d]">✅ still explicit</td>
                </tr>
                <tr>
                  <td className="font-mono text-[.8rem] font-bold text-[#3e2c1d]">from pizza import make_pizza as mp</td>
                  <td className="font-mono text-[.8rem]">mp(16, 'pepperoni')</td>
                  <td>Function alias — a nickname via <strong>as</strong>, avoiding conflicts or long names</td>
                  <td className="font-semibold text-[#44621d]">✅ handy</td>
                </tr>
                <tr>
                  <td className="font-mono text-[.8rem] font-bold text-[#3e2c1d]">import pizza as p</td>
                  <td className="font-mono text-[.8rem]">p.make_pizza(16, 'pepperoni')</td>
                  <td>Module alias — p.make_pizza() beats pizza.make_pizza() for speed; attention shifts to descriptive function names</td>
                  <td className="font-semibold text-[#44621d]">✅ common</td>
                </tr>
                <tr>
                  <td className="font-mono text-[.8rem] font-bold text-[#3e2c1d]">from pizza import *</td>
                  <td className="font-mono text-[.8rem]">make_pizza(12, 'cheese') · greet('Aditya') — no prefix</td>
                  <td>Every function copied in silently</td>
                  <td className="font-semibold text-[#8c2f2f]">⚠️ discouraged</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[.82rem] text-[#cbb392]">
            <strong>import pizza</strong> makes every function available (via dots) — but with{" "}
            <strong>from pizza import make_pizza</strong> you've explicitly imported it, so you call it by name
            directly.
          </p>
        </div>
      </Reveal>

      {/* 12 — why import * is bad */}
      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <Ban className="h-6 w-6" style={{ color: "#f5c889" }} />
            <h3 className="text-2xl font-bold">Why <span className="grad-text">from pizza import *</span> is discouraged</h3>
          </div>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="the silent overwrite — name collisions"
              files={{ "pizza.py": PIZZA_MODULE }}
              code={`def greet(name):  # different greet function in the main file
    return f"Welcome home, {name}!"

from pizza import *  # This silently OVERWRITES your local greet()!

greet("Neha")   # Outputs: "Hello, Neha! Your Pizza is ready."

#pizza.greet("Neha")  # ← the dot would have kept yours safe`}
              output={"Hello, Neha! Your Pizza is ready."}
              note="Reason 1 — name collisions: if your main file already has greet(), importing with * silently overwrites it without warning. You expected 'Welcome home, Neha!' — you got pizza."
            />
            <div className="grid content-start gap-4">
              <Callout dark kind="warn" title="Reason 2 — unclear code origin">
                When someone reads your code (or you re-read it months later), a standalone{" "}
                <code className="font-mono">greet('person')</code> makes it hard to tell where greet() came from —
                built into Python? Defined in this file? Imported from a module?{" "}
                <code className="font-mono">pizza.greet()</code> makes the origin immediately obvious.
              </Callout>
              <Callout dark kind="insight" title="The best approach">
                Import the <strong>specific functions</strong> you need, or import the <strong>entire module</strong>{" "}
                and use dot notation. That leads to clear code that's easy to read and understand.
              </Callout>
              <Callout dark kind="story" title="Notebook tip — reload after edits">
                In a notebook, if you edit a module file you've already imported, Python won't notice. Force a
                refresh: <code className="font-mono">import importlib</code> then{" "}
                <code className="font-mono">importlib.reload(pizza)</code>.
              </Callout>
            </div>
          </div>
        </div>
      </Reveal>

      {/* quiz */}
      <Reveal className="mt-10">
        <div className="grid gap-4 md:grid-cols-2">
          <Quiz
            q="In def make_pizza(size, *toppings): why must *toppings come last?"
            options={[
              "Tuples can only be created at the end of a function",
              "Python matches positional and keyword arguments first, then collects the leftovers into the final parameter",
              "size would otherwise become a tuple",
              "It's just a style convention with no effect",
            ]}
            answer={1}
            explain="Python fills size first, then packs every remaining value into the toppings tuple. If *toppings came earlier, size would never receive its value."
            source="Functions · arbitrary arguments"
          />
          <Quiz
            q="Your main file defines greet() to say 'Welcome home'. Then runs: from pizza import * (pizza.py also has greet()). What does greet('Neha') print?"
            options={[
              "'Welcome home, Neha!' — your version always wins",
              "'Hello, Neha! Your Pizza is ready.' — the import silently overwrote your greet()",
              "A SyntaxError — two functions can't share a name",
              "Nothing — Python asks which one you meant",
            ]}
            answer={1}
            explain="That's reason #1 to avoid import *: silent name collisions. The imported function overwrites your local one with no warning — and reason #2 is that call origins become unreadable."
            source="Functions · import styles"
          />
        </div>
      </Reveal>

      {/* practice */}
      <Reveal className="mt-8">
        <Practice
          title="Practice — scale your functions up"
          items={[
            {
              q: <>Write <code className="font-mono">greet_users(names)</code> and greet <code className="font-mono">['priyanka', 'unnati', 'anaaya']</code> in one call.</>,
              hint: "Loop over the parameter like any list.",
            },
            {
              q: <>Split the 3D-printer program into <code className="font-mono">print_models()</code> and <code className="font-mono">show_completed_models()</code>. After running, print <code className="font-mono">unprinted_designs</code> — what is it, and why?</>,
              hint: "pop() inside the function permanently removes items.",
            },
            {
              q: <>Re-run the printer with <code className="font-mono">unprinted_designs[:]</code> instead. Now what's in the original list?</>,
              hint: "The slice sent a copy — the original is untouched.",
            },
            {
              q: <>Build <code className="font-mono">make_pizza(size, *toppings)</code>. Order a 16-inch with one topping and a 12-inch with three.</>,
              hint: "First value → size; the rest → the toppings tuple.",
            },
            {
              q: <>Write <code className="font-mono">build_profile(first, last, **user_info)</code> and create albert einstein with location and field. Then add a third key of your own.</>,
              hint: "Loop user_info.items() into the profile dict.",
            },
            {
              q: <>Save <code className="font-mono">make_pizza</code> into <code className="font-mono">pizza.py</code> with <code className="font-mono">%%writefile</code>, then import it four ways: whole module, specific function, function alias <code className="font-mono">mp</code>, module alias <code className="font-mono">p</code>.</>,
              hint: "import pizza · from pizza import make_pizza · as mp · import pizza as p",
            },
            {
              q: <>Predict <code className="font-mono">process_data(10, 20, 30, 40, c=99, user='Admin', debug=True)</code> on paper — every parameter — then verify.</>,
              hint: "Positionals fill a and b, leftovers pack args, c arrives by name, the rest lands in kwargs.",
            },
          ]}
        />
      </Reveal>

      {/* takeaways */}
      <Reveal className="mt-8">
        <div style={{ display: "flex", alignItems: "center", gap: ".5rem", marginBottom: "1rem" }}>
          <Sparkles className="h-5 w-5" style={{ color: "#f5c889" }} />
          <span className="text-sm font-black uppercase tracking-[.2em] text-[#c98d4e]">
            Part 2 of the function story — scale mastered
          </span>
          <InfinityIcon className="h-4 w-4 text-[#c98d4e]" />
        </div>
        <Takeaways
          dark
          items={[
            <>Functions get <strong>direct access</strong> to any list you pass — loop it, index it, modify it.</>,
            <>List changes made inside a function are <strong>permanent</strong> — the 3D-printer pattern moves items from to-do to done.</>,
            <>Give every function <strong>one specific job</strong>; split a doing-too-much function in two, and call functions from functions.</>,
            <>Protect an original list by passing <strong>list_name[:]</strong> — a copy — but only when you truly need it.</>,
            <><strong>*args</strong> packs extra values into a tuple (even one value); it must come <strong>last</strong> after normal parameters.</>,
            <><strong>**kwargs</strong> packs name-value pairs into a dictionary — build profiles you can't fully predict.</>,
            <>Full parameter order: <strong>positional → default → *args → keyword-only → **kwargs</strong>.</>,
            <>Modules (.py files) + import statements = hidden details, reusable functions, shareable code. Prefer specific imports or whole-module dots over <strong>import *</strong>.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}
