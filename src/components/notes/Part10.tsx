"use client";

import React, { useState } from "react";
import {
  Dog,
  Car,
  BatteryCharging,
  GitFork,
  Boxes,
  Network,
  Library,
  MousePointerClick,
  RotateCcw,
  Gauge,
  Sparkles,
  AlertTriangle,
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
  StepsFlow,
} from "./ui";

/* ============================================================
   Virtual modules & hidden setups for the LIVE Python runner.
   Import demos get `files` (real .py modules written into the
   runtime), illustration snippets get `pre` (hidden definitions
   from the previous step) so every Run produces the real output.
   ============================================================ */
const DOG_PRE = `class Dog():
    """A simple attempt to model a dog."""
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def sit(self):
        print(self.name.title() + " is now sitting.")

    def roll_over(self):
        print(self.name.title() + " rolled over!")`;

const CAR_MODULE = `class Car():
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
        self.odometer_reading = 0

    def get_descriptive_name(self):
        long_name = str(self.year) + ' ' + self.make + ' ' + self.model
        return long_name.title()

    def read_odometer(self):
        print("This car has " + str(self.odometer_reading) + " miles on it.")

    def update_odometer(self, mileage):
        if mileage >= self.odometer_reading:
            self.odometer_reading = mileage
        else:
            print("You can't roll back an odometer!")

    def increment_odometer(self, miles):
        self.odometer_reading += miles`;

const BATTERY_PRE = `class Battery():
    def __init__(self, battery_size=70):
        self.battery_size = battery_size

    def describe_battery(self):
        print("This car has a " + str(self.battery_size) + "-kWh battery.")

    def get_range(self):
        if self.battery_size == 70:
            range = 240
        elif self.battery_size == 85:
            range = 270
        message = "This car can go approximately " + str(range)
        message += " miles on a full charge."
        print(message)`;

const COMPOSE_PRE = CAR_MODULE + "\n\n" + BATTERY_PRE;

const CAR_TRIO_MODULE =
  CAR_MODULE +
  "\n\n" +
  BATTERY_PRE +
  `

class ElectricCar(Car):
    """Represent aspects of a car, specific to electric vehicles."""
    def __init__(self, make, model, year):
        super().__init__(make, model, year)
        self.battery = Battery()`;

const ELECTRIC_CAR_MODULE =
  "from car import Car  # ElectricCar needs its parent\n\n" +
  BATTERY_PRE +
  `

class ElectricCar(Car):
    """Represent aspects of a car, specific to electric vehicles."""
    def __init__(self, make, model, year):
        super().__init__(make, model, year)
        self.battery = Battery()`;

/* ============================================================
   DogInstantiator — class → independent instances
   ============================================================ */
type DogInst = { varName: string; name: string; age: number };

function DogInstantiator() {
  const [dogs, setDogs] = useState<DogInst[]>([]);
  const actions: { label: string; d: DogInst }[] = [
    { label: "my_dog  = Dog('willie', 6)", d: { varName: "my_dog", name: "willie", age: 6 } },
    { label: "your_dog = Dog('lucy', 3)", d: { varName: "your_dog", name: "lucy", age: 3 } },
    { label: "t_dog   = Dog('willie', 6)  ← same values!", d: { varName: "t_dog", name: "willie", age: 6 } },
  ];

  return (
    <div className="card-warm overflow-hidden p-6 md:p-8">
      <div className="flex items-center gap-2">
        <MousePointerClick className="h-5 w-5" style={{ color: "#c2410c" }} />
        <h3 className="text-lg font-bold">
          Try it: one blueprint, <span className="grad-text">independent instances</span>
        </h3>
      </div>
      <p className="mt-1 text-[.88rem] text-muted-warm">
        Each call to Dog() runs __init__() and returns a brand-new object. Watch the third dog: same name, same age
        — still a completely separate instance.
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {actions.map((a) => (
          <button
            key={a.d.varName}
            onClick={() => setDogs((ds) => (ds.length >= 4 ? ds : [...ds, a.d]))}
            className="rounded-full px-4 py-1.5 font-mono text-[.76rem] font-bold text-white shadow-sm transition-transform duration-150 hover:scale-[1.03]"
            style={{ background: "linear-gradient(135deg,#ea580c,#c2410c)" }}
          >
            {a.label}
          </button>
        ))}
        <button
          onClick={() => setDogs([])}
          className="flex items-center gap-1.5 rounded-full border border-[#ecd9bd] px-3 py-1.5 text-[.78rem] font-bold text-[#8a6a44] transition-colors hover:border-[#e0a45e]"
        >
          <RotateCcw className="h-3.5 w-3.5" /> reset
        </button>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {dogs.length === 0 ? (
          <p className="col-span-full rounded-xl border border-dashed border-[#e4d3b4] bg-[#fffaf1] px-4 py-6 text-center text-[.84rem] text-muted-warm">
            No instances yet — the blueprint exists, but no dogs have been made. Click a call above.
          </p>
        ) : (
          dogs.map((d, i) => (
            <div
              key={d.varName + i}
              className="anim-pop rounded-2xl border border-[#ecd9bd] bg-gradient-to-b from-[#fffaf1] to-[#fdeed6] p-4"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <p className="font-mono text-[.72rem] font-bold text-[#b45309]">{d.varName}</p>
              <div className="mt-1 flex items-center gap-2">
                <Dog className="h-5 w-5" style={{ color: "#c2410c" }} />
                <p className="font-mono text-[.82rem] font-bold text-[#3e2c1d]">
                  name='{d.name}' · age={d.age}
                </p>
              </div>
              <p className="mt-2 font-mono text-[.72rem] leading-relaxed text-[#6f5438]">
                {d.varName}.sit() →<br />
                <span className="text-[#2b2014]">{d.name.charAt(0).toUpperCase() + d.name.slice(1)} is now sitting.</span>
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

/* ============================================================
   OdometerLab — modify attributes three ways
   ============================================================ */
function OdometerLab() {
  const [reading, setReading] = useState(0);
  const [log, setLog] = useState<string[]>(["__init__() → odometer_reading = 0"]);

  const push = (msg: string) => setLog((l) => [msg, ...l].slice(0, 5));

  const direct = () => {
    setReading(23);
    push("my_new_car.odometer_reading = 23   → read_odometer(): 'This car has 23 miles on it.'");
  };
  const update = (v: number) => {
    if (v >= reading) {
      setReading(v);
      push(`update_odometer(${v}) → mileage >= reading → set → 'This car has ${v} miles on it.'`);
    } else {
      push(`update_odometer(${v}) → ⚠ "You can't roll back an odometer!"`);
    }
  };
  const increment = (m: number) => {
    setReading((r) => r + m);
    push(`increment_odometer(${m}) → reading += ${m} → now ${reading + m} miles`);
  };

  const rejected = log[0]?.includes("roll back");

  return (
    <div className="card-warm overflow-hidden p-6 md:p-8">
      <div className="flex items-center gap-2">
        <Gauge className="h-5 w-5" style={{ color: "#c2410c" }} />
        <h3 className="text-lg font-bold">
          Try it: three ways to change <span className="grad-text">odometer_reading</span>
        </h3>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-5">
        {/* dashboard */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-[#4a3020] bg-gradient-to-b from-[#332214] to-[#2b1b10] p-5 text-center">
            <p className="text-[.62rem] font-bold uppercase tracking-[.22em] text-[#b98d5f]">
              my_new_car · read_odometer()
            </p>
            <p
              key={reading + (rejected ? "-r" : "")}
              className={`anim-pop mt-2 font-mono text-4xl font-black ${rejected ? "anim-shake" : ""}`}
              style={{ color: rejected ? "#e4674a" : "#ffd28a" }}
            >
              {reading}
            </p>
            <p className="mt-1 font-mono text-[.72rem] text-[#8c2f2f]">miles</p>
          </div>
          <div className="mt-3 h-32 overflow-y-auto rounded-xl border border-[#f3e2c8] bg-[#fffaf1] p-3 font-mono text-[.68rem] leading-relaxed text-[#2b2014]">
            {log.map((l, i) => (
              <p key={i} className={`border-b border-[#f3e2c8] py-1 last:border-0 ${i === 0 ? "anim-pop font-semibold text-[#b45309]" : "opacity-70"}`}>
                {l}
              </p>
            ))}
          </div>
        </div>

        {/* controls */}
        <div className="grid content-start gap-2.5 lg:col-span-3">
          {[
            {
              label: "1 · Directly:  my_new_car.odometer_reading = 23",
              hint: "dot notation reaches the attribute and sets it — quick, but no safety net",
              fn: direct,
            },
            {
              label: "2 · Method:  update_odometer(42)",
              hint: "sets the value through the car's own logic",
              fn: () => update(42),
            },
            {
              label: "3 · Try rollback:  update_odometer(18)",
              hint: "mileage < reading → the method refuses",
              fn: () => update(18),
            },
            {
              label: "4 · Increment:  increment_odometer(100)",
              hint: "adds miles to the current reading — the used-car move",
              fn: () => increment(100),
            },
          ].map((b) => (
            <button
              key={b.label}
              onClick={b.fn}
              className="group rounded-xl border border-[#ecd9bd] bg-[#fffaf1] px-4 py-2.5 text-left transition-all duration-200 hover:border-[#e0a45e] hover:shadow-md"
            >
              <p className="font-mono text-[.78rem] font-bold text-[#b45309]">{b.label}</p>
              <p className="text-[.74rem] text-muted-warm">{b.hint}</p>
            </button>
          ))}
          <button
            onClick={() => {
              setReading(0);
              push("fresh instance → __init__() resets odometer_reading to 0");
            }}
            className="flex items-center justify-center gap-1.5 rounded-xl border border-[#ecd9bd] px-3 py-2 text-[.78rem] font-bold text-[#8a6a44] transition-colors hover:border-[#e0a45e]"
          >
            <RotateCcw className="h-3.5 w-3.5" /> buy a new car (reset to 0)
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   PART 10 — CLASSES (object-oriented programming)
   ============================================================ */
export function ClassesSection() {
  return (
    <Section id="classes">
      <SectionHead
        eyebrow="Python · classes · object-oriented programming"
        title={
          <>
            Classes — <span className="grad-text">blueprints for objects</span>
          </>
        }
        lead="You've used dictionaries and lists to hold information — now you'll design your own. A class defines what a thing is and what it can do; every object made from it is an instance with its own data. This is object-oriented programming, and it scales from pet dogs to real software."
      />

      {/* 1 — Dog class */}
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <Dog className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">Creating and using a class — Dog</h3>
          </div>
          <p className="mt-2 max-w-3xl text-[.92rem] leading-relaxed text-muted-warm">
            Write a class representing <em>any</em> dog — not one dog in particular. What do we know about most pet
            dogs? They all have a <strong>name</strong> and an <strong>age</strong>, and most dogs{" "}
            <strong>sit</strong> and <strong>roll over</strong>. Those two pieces of information (data) and two
            behaviors (methods) go in the class because they're common to most dogs. The class tells Python how to
            make an object representing a dog.
          </p>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="dog.py — 1. THE CLASS (Blueprint)"
              code={`class Dog():
    """A simple attempt to model a dog."""

    def __init__(self, name, age):  # Initializing values
        """Initialize name and age attributes."""
        self.name = name
        self.age = age
        # __init__() has no explicit return — Python
        # automatically returns an instance representing this dog.

    def sit(self):
        """Simulate a dog sitting in response to a command."""
        print(self.name.title() + " is now sitting.")

    def roll_over(self):
        """Simulate rolling over in response to a command."""
        print(self.name.title() + " rolled over!")`}
            />
            <div className="grid content-start gap-3">
              <KV k="convention" v="By convention, capitalized names refer to classes in Python — Dog, not dog." />
              <KV k="empty ( )" v="The parentheses in the class definition are empty because we're creating this class from scratch. The docstring describes what the class does." />
              <KV k="__init__()" v="A special method Python runs automatically whenever we create a new instance. Two leading + two trailing underscores prevent conflicts with your own method names." />
              <KV k="method" v="A function that's part of a class. Everything you know about functions applies — the only difference (for now) is how we call them." />
              <KV k="self" v="Required in the method definition, first in the parameter list. Python passes it automatically — a reference to the instance itself, giving it access to the class's attributes and methods." />
              <KV k="attributes" v="Variables prefixed with self (self.name, self.age) are available to every method in the class and accessible through any instance. self.name = name attaches the value to the instance being created." />
            </div>
          </div>
          <Callout kind="story" title="Scale it up">
            If this class were part of a computer game, sit() and roll_over() would contain code to{" "}
            <strong>animate</strong> a dog. If it controlled a robot, they would <strong>direct movements</strong>{" "}
            that make a dog-robot sit and roll over. Same structure — bigger consequences.
          </Callout>
        </div>
      </Reveal>

      {/* 2 — making an instance */}
      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <h3 className="text-2xl font-bold">
            Making an instance — <span className="grad-text">instantiation</span>
          </h3>
          <p className="mt-2 max-w-3xl text-[.92rem] leading-relaxed text-muted-warm">
            A class defines the structure and behavior (the <strong>template</strong>); an instance is the physical
            object holding data in <strong>memory</strong>. Creating one from a class is called{" "}
            <strong>instantiation</strong>.
          </p>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="dog.py — 2. THE INSTANCES (Objects)"
              pre={DOG_PRE}
              code={`my_dog = Dog('willie', 6)
# Python reads this line → calls __init__() in Dog
# with arguments 'willie' and 6 → sets name and age
# → automatically RETURNS an instance → stored in my_dog

# Accessing instance attributes
print("My dog's name is " + my_dog.name.title() + ".")
print("My dog is " + str(my_dog.age) + " years old. \\n")

# Calling instance methods
my_dog.sit()
my_dog.roll_over()`}
              output={"My dog's name is Willie.\nMy dog is 6 years old.\n\nWillie is now sitting.\nWillie rolled over!"}
              note="Dot notation reaches attributes (my_dog.name) and calls methods (my_dog.sit())."
            />
            <div className="grid content-start gap-3">
              <div className="rounded-2xl border border-[#f3e2c8] bg-[#fffaf1] p-5">
                <p className="text-[.72rem] font-extrabold uppercase tracking-[.18em] text-[#8a5a10]">
                  the naming dance
                </p>
                <p className="mt-2 text-[.88rem] leading-relaxed text-[#2b2014]">
                  The <strong>parameter</strong> is <code className="font-mono text-[.8rem]">name</code>, the{" "}
                  <strong>attribute</strong> is <code className="font-mono text-[.8rem]">self.name</code>, and the{" "}
                  <strong>argument</strong> you pass is <code className="font-mono text-[.8rem]">'willie'</code>.
                  When you call <code className="font-mono text-[.8rem]">Dog()</code>, you provide values only for
                  name and age — self arrives automatically.
                </p>
              </div>
              <Callout kind="insight" title="Why __init__ needs no return">
                __init__() has no explicit return statement, but Python <strong>automatically returns an
                instance</strong> representing this dog — that's what lands in my_dog.
              </Callout>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 3 — dog instantiator */}
      <Reveal className="mt-8">
        <DogInstantiator />
      </Reveal>

      {/* 4 — multiple instances */}
      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <h3 className="text-2xl font-bold">Creating multiple instances</h3>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="dogs.py — three dogs, one class"
              pre={DOG_PRE}
              code={`my_dog = Dog('willie', 6)
your_dog = Dog('lucy', 3)
t_dog = Dog('willie', 6)   # same values as my_dog!

print("My dog's name is " + my_dog.name.title() + ".")
print("My dog is " + str(my_dog.age) + " years old.")
my_dog.sit()

print("\\nYour dog's name is " + your_dog.name.title() + ".")
print("Your dog is " + str(your_dog.age) + " years old.")
your_dog.sit()
your_dog.roll_over()

t_dog.sit()`}
              output={"My dog's name is Willie.\nMy dog is 6 years old.\nWillie is now sitting.\n\nYour dog's name is Lucy.\nYour dog is 3 years old.\nLucy is now sitting.\nLucy rolled over!\nWillie is now sitting."}
            />
            <div className="grid content-start gap-3">
              <Callout kind="insight" title="Separate lives">
                Even if we used the <strong>same name and age</strong> for the second dog, Python would still create
                a <strong>separate instance</strong>. We can make as many instances as we need — as long as each has
                a unique variable name, or occupies a unique spot in a list or dictionary.
              </Callout>
              <div className="rounded-xl border border-[#f3e2c8] bg-[#fffaf1] px-4 py-3 text-[.86rem] leading-relaxed text-[#2b2014]">
                <strong>my_dog.sit()</strong> prints Willie sitting; <strong>your_dog.sit()</strong> prints Lucy
                sitting. Each instance carries its own attributes — methods read <em>that instance's</em>{" "}
                <code className="font-mono text-[.8rem]">self</code>.
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 5 — Car class */}
      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <Car className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">Working with classes and instances — Car</h3>
          </div>
          <p className="mt-2 max-w-3xl text-[.92rem] leading-relaxed text-muted-warm">
            A class storing the kind of car we're working with, plus a method that summarizes it.
          </p>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="car.py — __init__ + get_descriptive_name()"
              code={`class Car():
    """A simple attempt to represent a car."""
    def __init__(self, make, model, year):
        """Initialize attributes to describe a car."""
        self.make = make
        self.model = model
        self.year = year

    def get_descriptive_name(self):
        """Return a neatly formatted descriptive name."""
        long_name = str(self.year) + ' ' + self.make + ' ' + self.model
        return long_name.title()

my_new_car = Car('audi', 'a4', 2016) # creating an instance
print(my_new_car.get_descriptive_name())`}
              output={"2016 Audi A4"}
              note="__init__() takes self first, then make, model, year — and stores each in attributes. get_descriptive_name() combines them via self.make, self.model, self.year so we never print attributes one by one."
            />
            <div className="grid content-start gap-4">
              <CodeBlock
                title="car.py — a default value + read_odometer()"
                code={`class Car():
    def __init__(self, make, model, year):
        """Initialize attributes to describe a car."""
        self.make = make
        self.model = model
        self.year = year
        self.odometer_reading = 0   # default, not a parameter

    def read_odometer(self):
        """Print a statement showing the car's mileage."""
        print("This car has " + str(self.odometer_reading) + " miles on it.")

my_new_car = Car('audi', 'a4', 2016)
print(my_new_car.get_descriptive_name() + '\\n')
my_new_car.read_odometer()`}
                output={"2016 Audi A4\n\nThis car has 0 miles on it."}
              />
              <Callout kind="why" title="Every attribute needs an initial value">
                Every attribute in a class needs an initial value — even 0 or an empty string. Set it directly in{" "}
                <strong>__init__()'s body</strong> and you don't need a parameter for it: every new car starts at 0
                miles.
              </Callout>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 6 — odometer lab */}
      <Reveal className="mt-8">
        <OdometerLab />
      </Reveal>

      {/* 7 — three ways code */}
      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <h3 className="text-2xl font-bold">The three ways, in code</h3>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="car.py — update_odometer with rollback protection"
              pre={CAR_MODULE}
              code={`def update_odometer(self, mileage):
    """
    Set the odometer reading to the given value.
    Reject the change if it attempts to roll the odometer back.
    """
    if mileage >= self.odometer_reading:
        self.odometer_reading = mileage
    else:
        print("You can't roll back an odometer!")

# --- driving it ---
my_new_car1 = Car('audi', 'a4', 2016)
my_new_car1.update_odometer(20)   # set to 20
my_new_car1.read_odometer()

my_new_car1.update_odometer(18)   # 18 < 20 → rejected!
my_new_car1.read_odometer()

my_new_car1.update_odometer(25)   # 25 >= 20 → accepted
my_new_car1.read_odometer()`}
              output={"This car has 20 miles on it.\nYou can't roll back an odometer!\nThis car has 20 miles on it.\nThis car has 25 miles on it."}
              note="Now update_odometer() checks that the new reading makes sense before modifying the attribute — a method can guard its own data."
            />
            <CodeBlock
              title="car.py — increment_odometer"
              pre={CAR_MODULE}
              code={`def increment_odometer(self, miles):
    """Add the given amount to the odometer reading."""
    self.odometer_reading += miles

# --- the used-car story ---
my_used_car = Car('subaru', 'outback', 2013)
print(my_used_car.get_descriptive_name())

my_used_car.update_odometer(23500)
my_used_car.read_odometer()

# We buy it and put 100 miles on it
# between buying and registering:
my_used_car.increment_odometer(100)
my_used_car.read_odometer()`}
              output={"2013 Subaru Outback\nThis car has 23500 miles on it.\nThis car has 23600 miles on it."}
              note="Increment rather than set — add a certain amount to the existing value instead of replacing it."
            />
          </div>
        </div>
      </Reveal>

      {/* 8 — inheritance */}
      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <GitFork className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">
              Inheritance — <span className="grad-text">child classes</span>
            </h3>
          </div>
          <p className="mt-2 max-w-3xl text-[.92rem] leading-relaxed text-muted-warm">
            You don't always have to start from scratch. If the class you're writing is a specialized version of
            another, use <strong>inheritance</strong>: the new class automatically takes on all attributes and
            methods of the original. The original is the <strong>parent class</strong>; the new one is the{" "}
            <strong>child class</strong> — it inherits everything and is free to add its own attributes and methods.
          </p>

          {/* diagram */}
          <div className="mt-6 grid items-center gap-3 md:grid-cols-[1fr_auto_1fr]">
            <div className="rounded-2xl border-2 border-[#e8cfa5] bg-gradient-to-b from-[#fffaf1] to-[#fdeed6] p-5 text-center">
              <Car className="mx-auto h-7 w-7" style={{ color: "#b45309" }} />
              <p className="mt-1 font-mono text-[.9rem] font-black text-[#3e2c1d]">Car</p>
              <p className="text-[.7rem] font-bold uppercase tracking-widest text-[#8a5a10]">parent / superclass</p>
              <p className="mt-2 text-[.78rem] leading-relaxed text-muted-warm">make · model · year<br />get_descriptive_name()</p>
            </div>
            <svg viewBox="0 0 60 24" className="mx-auto h-6 w-14 md:h-8 md:w-20" aria-hidden>
              <path d="M2 12 H50" className="flow-arrow-line" stroke="#c2410c" strokeWidth="2.5" fill="none" />
              <path d="M46 5 L56 12 L46 19" stroke="#c2410c" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="rounded-2xl border-2 border-[#e8cfa5] bg-gradient-to-b from-[#fdeed6] to-[#fbd9a8] p-5 text-center">
              <Boxes className="mx-auto h-7 w-7" style={{ color: "#c2410c" }} />
              <p className="mt-1 font-mono text-[.9rem] font-black text-[#3e2c1d]">ElectricCar(Car)</p>
              <p className="text-[.7rem] font-bold uppercase tracking-widest text-[#8a5a10]">child / subclass</p>
              <p className="mt-2 text-[.78rem] leading-relaxed text-muted-warm">inherits everything<br />+ battery-specific code</p>
            </div>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="electric_car.py — the child's __init__"
              pre={CAR_MODULE}
              code={`class ElectricCar(Car):
    """Represent aspects of a car, specific to electric vehicles."""

    def __init__(self, make, model, year):
        """Initialize attributes of the parent class."""
        super().__init__(make, model, year)

my_tesla = ElectricCar('tesla', 'model s', 2016)
print(my_tesla.get_descriptive_name())`}
              output={"2016 Tesla Model S"}
              note="Parent class must appear before the child in the file, and its name goes in the child's parentheses. super() is the special function connecting parent and child — super().__init__(make, model, year) calls Car's __init__, giving an ElectricCar instance all parent attributes."
            />
            <div className="grid content-start gap-3">
              <Callout kind="insight" title="super = superclass">
                The name super comes from the convention of calling the parent class a{" "}
                <strong>superclass</strong> and the child a <strong>subclass</strong>.
              </Callout>
              <Callout kind="story" title="Testing the wiring">
                We test inheritance by creating an electric car with the same information a regular car needs. The
                call runs ElectricCar.__init__(), which invokes Car's __init__(). Aside from __init__(), nothing
                electric-specific exists yet — we're just confirming the Car behaviors arrived.
              </Callout>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 9 — child additions + override */}
      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <h3 className="text-2xl font-bold">
            Child attributes, methods — and <span className="grad-text">overriding</span>
          </h3>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="electric_car.py — making it electric"
              pre={CAR_MODULE}
              code={`class ElectricCar(Car):
    """Represent aspects of a car, specific to electric vehicles."""
    def __init__(self, make, model, year):
        """
        Initialize attributes of the parent class.
        Then initialize attributes specific to an electric car.
        """
        super().__init__(make, model, year)
        self.battery_size = 70        # child-only attribute

    def describe_battery(self):        # child-only method
        """Print a statement describing the battery size."""
        print("This car has a " + str(self.battery_size) + "-kWh battery.")

my_tesla = ElectricCar('tesla', 'model s', 2016)
print(my_tesla.get_descriptive_name())  # from Car ✓
my_tesla.describe_battery()             # from ElectricCar ✓

my_maruti = Car('swift', 'XLI', 2018)
print(my_maruti.get_descriptive_name())
# my_maruti.describe_battery()  # ← Car has no battery! AttributeError`}
              output={"2016 Tesla Model S\nThis car has a 70-kWh battery.\n2018 Swift Xli"}
              note="battery_size belongs to every ElectricCar instance — and to no Car instance. my_maruti can't describe_battery(): plain cars don't have one."
            />
            <div className="grid content-start gap-4">
              <CodeBlock
                title="overriding fill_gas_tank()"
                runnable={false}
                code={`# In Car:
def fill_gas_tank(self):
    """Filling the gas tank of a car"""
    print("Filling the gas tank!")

# In ElectricCar — same name, new behavior:
def fill_gas_tank(self):
    """Electric cars don't have gas tanks."""
    print("This car doesn't need a gas tank!")

my_byd = ElectricCar('BYD', 'Seal', 2026)
my_byd.fill_gas_tank()`}
                output={"This car doesn't need a gas tank!"}
              />
              <Callout kind="insight" title="Override = same name, child wins">
                Define a method in the child with the <strong>same name</strong> as the parent's — Python
                disregards the parent version and only uses the child's. (In the notebook the override was
                commented out — so my_byd.fill_gas_tank() printed "Filling the gas tank!", the inherited behavior.
                Uncomment it and the child answers instead.) Override any parent method that doesn't fit what
                you're modeling.
              </Callout>
              <Callout kind="why" title="Where should a method live?">
                Anything that could belong to <strong>any car</strong> goes in <strong>Car</strong> — then every
                user of Car gets it, and ElectricCar holds only what's specific to electric vehicles.
              </Callout>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 10 — instances as attributes */}
      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <BatteryCharging className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">Instances as attributes — the Battery class</h3>
          </div>
          <p className="mt-2 max-w-3xl text-[.92rem] leading-relaxed text-muted-warm">
            Modeling the real world, your class keeps growing — more attributes, more methods, longer files. When
            you notice a chunk of detail clustering around one part (the battery), <strong>break the large class
            into smaller classes that work together</strong>: move battery code into its own{" "}
            <strong>Battery</strong> class, then use a Battery <em>instance</em> as an attribute of ElectricCar.
          </p>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="battery.py — its own class"
              code={`class Battery():
    """A simple attempt to model a battery for an electric car."""

    def __init__(self, battery_size=70):
        """Initialize the battery's attributes."""
        self.battery_size = battery_size

    def describe_battery(self):
        """Print a statement describing the battery size."""
        print("This car has a " + str(self.battery_size) + "-kWh battery.")

    def get_range(self):
        """Print a statement about the range this battery provides."""
        if self.battery_size == 70:
            range = 240
        elif self.battery_size == 85:
            range = 270
        message = "This car can go approximately " + str(range)
        message += " miles on a full charge."
        print(message)`}
              note="Battery inherits from nothing — it's its own class. battery_size=70 is an optional parameter (a default again!)."
            />
            <CodeBlock
              title="electric_car.py — composition"
              pre={COMPOSE_PRE}
              code={`class ElectricCar(Car):
    """Represent aspects of a car, specific to electric vehicles."""
    def __init__(self, make, model, year):
        """
        Initialize attributes of the parent class.
        Then initialize attributes specific to an electric car.
        """
        super().__init__(make, model, year)
        self.battery = Battery(85)   # an INSTANCE as an attribute

my_tata = ElectricCar('TATA', 'Tiago', 2026)
print(my_tata.get_descriptive_name()) # attribute of the Car class ✓
my_tata.battery.describe_battery()    # Battery instance as attribute ✓
my_tata.battery.get_range()`}
              output={"2026 Tata Tiago\nThis car has a 85-kWh battery.\nThis car can go approximately 270 miles on a full charge."}
              note="Every ElectricCar now gets a Battery instance created automatically in __init__. Reading the battery means working through the car's battery attribute — my_tata.battery.describe_battery()."
            />
          </div>
          <div className="mt-6">
            <StepsFlow
              steps={[
                { label: "my_tata", sub: "ElectricCar instance", icon: <Car className="h-5 w-5" style={{ color: "#c2410c" }} /> },
                { label: ".battery", sub: "Battery instance stored as attribute", icon: <BatteryCharging className="h-5 w-5" style={{ color: "#c2410c" }} /> },
                { label: ".describe_battery()", sub: "85-kWh battery", icon: <Sparkles className="h-5 w-5" style={{ color: "#c2410c" }} /> },
                { label: ".get_range()", sub: "≈ 270 miles on a full charge", icon: <Gauge className="h-5 w-5" style={{ color: "#c2410c" }} /> },
              ]}
            />
          </div>
          <Callout kind="insight" title="Why bother?">
            Now we can describe the battery in as much detail as we want — new attributes, new methods like
            get_range() — <strong>without cluttering ElectricCar</strong>. The dotted chain reads like a sentence:
            my car's battery's range.
          </Callout>
        </div>
      </Reveal>

      {/* 11 — importing classes */}
      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <Network className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">Importing classes</h3>
          </div>
          <p className="mt-2 max-w-3xl text-[.92rem] leading-relaxed text-muted-warm">
            As functionality grows, files get long even with proper inheritance. Python lets you store classes in
            modules and import the ones you need — keeping files uncluttered, in keeping with Python's overall
            philosophy.
          </p>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="car.py — a module with one class"
              code={`%%writefile car.py

class Car():
    def __init__(self, make, model, year):
        """Initialize attributes to describe a car."""
        self.make = make
        self.model = model
        self.year = year
        self.odometer_reading = 0

    def get_descriptive_name(self):
        long_name = str(self.year) + ' ' + self.make + ' ' + self.model
        return long_name.title()

    def read_odometer(self):
        print("This car has " + str(self.odometer_reading) + " miles on it.")

    def update_odometer(self, mileage):
        """
        Set the odometer reading to the given value.
        Reject the change if it attempts to roll the odometer back.
        """
        if mileage >= self.odometer_reading:
            self.odometer_reading = mileage
        else:
            print("You can't roll back an odometer!")

    def increment_odometer(self, miles):
        """Add the given amount to the odometer reading."""
        self.odometer_reading += miles`}
              note="Importing a single class. Any program using this module takes a more specific filename, like my_car.py."
            />
            <div className="grid content-start gap-4">
              <CodeBlock
                title="my_car.py — from car import Car"
                files={{ "car.py": CAR_MODULE }}
                code={`from car import Car  # open the car module, import the class Car

my_new_car = Car('audi', 'a4', 2016)
print(my_new_car.get_descriptive_name())

my_new_car.odometer_reading = 23  # set directly, as usual
my_new_car.read_odometer()`}
                output={"2016 Audi A4\nThis car has 23 miles on it."}
              />
              <Callout kind="why" title="Why importing classes is effective">
                Picture how long my_car.py would be with the entire class inside. Move the class to a module,
                import it — same functionality, but the main program stays clean and readable. Once the classes
                work, leave those files alone and focus on higher-level logic.
              </Callout>
            </div>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="one module, many related classes"
              code={`%%writefile car.py
# Module car.py — writing three classes: Car, Battery, ElectricCar
class Car():
    ...   # (the full Car class from above)

class Battery():
    """A simple attempt to model a battery for an electric car."""
    def __init__(self, battery_size=70):
        self.battery_size = battery_size
    def describe_battery(self):
        print("This car has a " + str(self.battery_size) + "-kWh battery.")
    def get_range(self):
        if self.battery_size == 70:
            range = 240
        elif self.battery_size == 85:
            range = 270
        message = "This car can go approximately " + str(range)
        message += " miles on a full charge."
        print(message)

class ElectricCar(Car):
    """Represent aspects of a car, specific to electric vehicles."""
    def __init__(self, make, model, year):
        super().__init__(make, model, year)
        self.battery = Battery()`}
              note="Store as many classes as you need in a single module — each class in a module should be related in some way. Battery and ElectricCar both help represent cars, so they join Car in car.py."
            />
            <div className="grid content-start gap-4">
              <CodeBlock
                title="my_electric_car.py — import one from the trio"
                files={{ "car.py": CAR_TRIO_MODULE }}
                code={`import importlib
import car
importlib.reload(car)  # force Python to reload the updated module

from car import ElectricCar

my_tesla = ElectricCar('tesla', 'model s', 2016)
print(my_tesla.get_descriptive_name())
my_tesla.battery.describe_battery()
my_tesla.battery.get_range()`}
                output={"2016 Tesla Model S\nThis car has a 70-kWh battery.\nThis car can go approximately 240 miles on a full charge."}
              />
              <Callout dark kind="story" title="Notebook habit">
                After rewriting car.py in a notebook, <code className="font-mono">importlib.reload(car)</code> makes
                Python pick up the changes — a Colab-specific step the notebook runs before importing.
              </Callout>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 12 — import styles for classes */}
      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <h3 className="text-2xl font-bold">Import styles for classes</h3>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="multiple + entire module"
              files={{ "car.py": CAR_TRIO_MODULE }}
              code={`# Import multiple classes — separate with commas:
from car import Car, ElectricCar

my_beetle = Car('volkswagen', 'beetle', 2016)
print(my_beetle.get_descriptive_name())

my_tesla = ElectricCar('tesla', 'roadster', 2016)
print(my_tesla.get_descriptive_name())

# Import an entire module — dot notation:
import car

my_beetle = car.Car('volkswagen', 'beetle', 2016)
print(my_beetle.get_descriptive_name())

my_tesla = car.ElectricCar('tesla', 'roadster', 2016)
print(my_tesla.get_descriptive_name())`}
              output={"2016 Volkswagen Beetle\n2016 Tesla Roadster\n2016 Volkswagen Beetle\n2016 Tesla Roadster"}
              note="module_name.class_name is simple, readable, and immune to naming conflicts with the current file."
            />
            <div className="grid content-start gap-4">
              <CodeBlock
                title="from car import * — not recommended"
                files={{ "car.py": CAR_MODULE }}
                code={`from car import *

my_beetle = Car('volkswagen', 'beetle', 2016)
print(my_beetle.get_descriptive_name())`}
                output={"2016 Volkswagen Beetle"}
                note="Every class copied in — works, but read why the notebook warns against it."
              />
              <div className="rounded-2xl border border-[#ecd9bd] bg-[#fffaf1] p-4 text-[.86rem] leading-relaxed text-[#2b2014]">
                <p className="font-bold text-[#3e2c1d]">Two reasons to avoid it:</p>
                <p className="mt-2">
                  <strong>1 · Unclear inventory</strong> — reading the import statements should reveal which
                  classes a program uses; with <code className="font-mono text-[.8rem]">*</code> it's unclear what
                  you're using from the module.
                </p>
                <p className="mt-2">
                  <strong>2 · Name collisions</strong> — accidentally importing a class with the same name as
                  another in the file creates hard-to-diagnose errors.
                </p>
                <p className="mt-2">
                  You'll still see it in other people's code — know it, don't ship it. If you need many classes,
                  <strong> import the whole module and use module_name.class_name</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 13 — module into module */}
      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <h3 className="text-2xl font-bold">Importing a module into a module</h3>
          <p className="mt-2 max-w-3xl text-[.92rem] leading-relaxed text-muted-warm">
            Sometimes you'll want to spread classes across several modules — keep any one file from growing too
            large, avoid storing unrelated classes together. A class in one module may depend on a class in
            another: just import the required class <em>into</em> that module.
          </p>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="car.py — only the Car class"
              code={`%%writefile car.py

class Car():
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
        self.odometer_reading = 0

    def get_descriptive_name(self):
        long_name = str(self.year) + ' ' + self.make + ' ' + self.model
        return long_name.title()

    def read_odometer(self):
        print("This car has " + str(self.odometer_reading) + " miles on it.")

    def update_odometer(self, mileage):
        if mileage >= self.odometer_reading:
            self.odometer_reading = mileage
        else:
            print("You can't roll back an odometer!")

    def increment_odometer(self, miles):
        self.odometer_reading += miles`}
            />
            <CodeBlock
              title="electric_car.py — Battery + ElectricCar"
              code={`%%writefile electric_car.py

from car import Car  # ElectricCar needs its parent — import Car INTO the module

class Battery():
    """A simple attempt to model a battery for an electric car."""
    def __init__(self, battery_size=70):
        self.battery_size = battery_size
    def describe_battery(self):
        print("This car has a " + str(self.battery_size) + "-kWh battery.")
    def get_range(self):
        if self.battery_size == 70:
            range = 240
        elif self.battery_size == 85:
            range = 270
        message = "This car can go approximately " + str(range)
        message += " miles on a full charge."
        print(message)

class ElectricCar(Car):
    """Represent aspects of a car, specific to electric vehicles."""
    def __init__(self, make, model, year):
        super().__init__(make, model, year)
        self.battery = Battery()`}
            />
          </div>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="my_cars.py — the main program"
              files={{ "car.py": CAR_MODULE, "electric_car.py": ELECTRIC_CAR_MODULE }}
              code={`from car import Car
from electric_car import ElectricCar

my_beetle = Car('volkswagen', 'beetle', 2016)
print(my_beetle.get_descriptive_name())

my_tesla = ElectricCar('tesla', 'roadster', 2016)
print(my_tesla.get_descriptive_name())`}
              output={"2016 Volkswagen Beetle\n2016 Tesla Roadster"}
              note="The ElectricCar class needs access to its parent class Car, so we import Car directly into the electric_car module. Forget that line and Python raises an error the moment you try to make an ElectricCar instance."
            />
            <div className="grid content-start gap-3">
              <div className="rounded-xl border border-[#f3e2c8] bg-[#fffaf1] px-4 py-3 text-[.86rem] leading-relaxed text-[#2b2014]">
                <strong>module → module imports</strong> are invisible from the main program:{" "}
                <code className="font-mono text-[.8rem]">electric_car.py</code> quietly pulls in{" "}
                <code className="font-mono text-[.8rem]">Car</code> so that <code className="font-mono text-[.8rem]">super().__init__()</code>{" "}
                works. Each module stays small and focused.
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 14 — standard library */}
      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <Library className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">The Python standard library — OrderedDict</h3>
          </div>
          <p className="mt-2 max-w-3xl text-[.92rem] leading-relaxed text-muted-warm">
            The standard library is a set of modules <strong>included with every Python installation</strong>. Use
            any function or class in it with a simple import at the top of your file. Regular dictionaries connect
            pieces of information but don't track the order you add pairs in — the{" "}
            <strong>OrderedDict</strong> class from the <strong>collections</strong> module keeps insertion order.
          </p>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="poll.py — remember the voting order"
              code={`from collections import OrderedDict

favorite_languages = OrderedDict() # making an instance of the class

favorite_languages['jen'] = 'python'
favorite_languages['sarah'] = 'c'
favorite_languages['edward'] = 'ruby'
favorite_languages['phil'] = 'python'

for name, language in favorite_languages.items():
    print(name.title() + "'s favorite language is " +
        language.title() + ".")`}
              output={"Jen's favorite language is Python.\nSarah's favorite language is C.\nEdward's favorite language is Ruby.\nPhil's favorite language is Python."}
              note="Notice there are no curly brackets — OrderedDict() creates the empty ordered dictionary for us. Add pairs one at a time; the loop always returns responses in the order they were added."
            />
            <div className="grid content-start gap-3">
              <KV k="what it is" v="A set of modules included with every Python installation — free superpowers, one import away." />
              <KV k="OrderedDict()" v="Behaves almost exactly like a dictionary, except it keeps track of the order in which key-value pairs are added — here, the order people answered the poll." />
              <Callout kind="insight" title="The pattern repeats">
                You already know this move: <strong>import a class, make an instance, use it</strong> — the exact
                flow you learned with Dog and Car now applies to classes other programmers wrote. That's the whole
                point of OOP.
              </Callout>
            </div>
          </div>
        </div>
      </Reveal>

      {/* quiz */}
      <Reveal className="mt-10">
        <div className="grid gap-4 md:grid-cols-2">
          <Quiz
            q="What exactly does super().__init__(make, model, year) do inside ElectricCar.__init__()?"
            options={[
              "Creates a second, independent Car instance",
              "Calls the parent Car's __init__() so the child instance receives all parent attributes",
              "Renames the ElectricCar class to Car",
              "Copies the Car class source code into ElectricCar",
            ]}
            answer={1}
            explain="Python's first task with a child instance is assigning the parent's attributes — super().__init__() delegates that to Car. super() = superclass (parent), and it must be called before adding child-specific attributes."
            source="Classes · inheritance"
          />
          <Quiz
            q="my_maruti = Car('swift', 'XLI', 2018) — what happens with my_maruti.describe_battery()?"
            options={[
              "It prints 'This car has a 70-kWh battery.' — all cars have batteries",
              "It prints nothing — Car has a silent battery attribute",
              "AttributeError — describe_battery() is defined on ElectricCar, and Car instances don't have it",
              "It works only if my_maruti is electric",
            ]}
            answer={2}
            explain="battery_size and describe_battery() belong to the child class only — they're associated with ElectricCar instances, never with plain Car instances. (And over in the Battery composition version, it's my_tesla.battery.describe_battery() — through the battery attribute.)"
            source="Classes · child attributes"
          />
        </div>
      </Reveal>

      {/* practice */}
      <Reveal className="mt-8">
        <Practice
          title="Practice — think in objects"
          items={[
            {
              q: <>Build <code className="font-mono">Dog</code> exactly as shown (name, age, sit, roll_over), then create <code className="font-mono">my_dog</code>, <code className="font-mono">your_dog</code>, and a third dog with <em>identical</em> values to your first. Prove they're separate.</>,
              hint: "Change one dog's attribute; the other is untouched.",
            },
            {
              q: <>Add <code className="font-mono">odometer_reading = 0</code> to Car's __init__ body — why is there no <code className="font-mono">odometer</code> parameter?</>,
              hint: "Defaults live in the body; every instance starts at 0.",
            },
            {
              q: <>Set <code className="font-mono">my_new_car.odometer_reading = 23</code> directly, then replicate the result using <code className="font-mono">update_odometer()</code>. Which way lets you add a safety check?</>,
              hint: "Only the method can inspect and reject a rollback.",
            },
            {
              q: <>Roll a reading of 20 back to 18 and read the message. Then increment from 23,500 by 100 like the used Subaru.</>,
              hint: "mileage >= reading → accept; else refuse.",
            },
            {
              q: <>Write <code className="font-mono">ElectricCar(Car)</code> with <code className="font-mono">super().__init__(make, model, year)</code>, then add <code className="font-mono">battery_size = 70</code> and <code className="font-mono">describe_battery()</code>. Why does <code className="font-mono">my_maruti.describe_battery()</code> crash?</>,
              hint: "Child-only members don't exist on parent instances.",
            },
            {
              q: <>Override <code className="font-mono">fill_gas_tank()</code> in ElectricCar. Before the override, what did my_byd.fill_gas_tank() print — and why?</>,
              hint: "Same name in the child → Python disregards the parent's version.",
            },
            {
              q: <>Extract Battery into its own class (default size 70), give it <code className="font-mono">get_range()</code> (70→240 mi, 85→270 mi), and store <code className="font-mono">self.battery = Battery(85)</code> in ElectricCar. Print the TATA Tiago's name, battery, and range.</>,
              hint: "Chain the dots: my_tata.battery.get_range().",
            },
            {
              q: <>Split Car into <code className="font-mono">car.py</code> and Battery+ElectricCar into <code className="font-mono">electric_car.py</code>. Which import line does electric_car.py need, and what breaks without it?</>,
              hint: "from car import Car — super() needs the parent.",
            },
            {
              q: <>Use <code className="font-mono">OrderedDict()</code> to record the favorite-languages poll, then loop it. What guarantees the output order?</>,
              hint: "OrderedDict remembers insertion order; plain dicts don't promise it here.",
            },
          ]}
        />
      </Reveal>

      {/* takeaways */}
      <Reveal className="mt-8">
        <div style={{ display: "flex", alignItems: "center", gap: ".5rem", marginBottom: "1rem" }}>
          <Sparkles className="h-5 w-5" style={{ color: "#c2410c" }} />
          <span className="text-sm font-black uppercase tracking-[.2em] text-[#8a5a10]">
            Classes mastered — you're writing object-oriented Python
          </span>
        </div>
        <Takeaways
          items={[
            <>A <strong>class</strong> is a blueprint; an <strong>instance</strong> is a specific object in memory. Creating one = <strong>instantiation</strong>.</>,
            <><strong>__init__()</strong> runs automatically on every new instance; <strong>self</strong> is passed automatically and must come first.</>,
            <>Variables prefixed with <strong>self.</strong> are attributes — reachable from every method and every instance.</>,
            <>Instances are independent, even with identical values — each holds its own data at its own spot.</>,
            <>Give attributes default values in __init__'s body (odometer_reading = 0) — no parameter needed.</>,
            <>Change attributes <strong>three ways</strong>: directly, set via a method, increment via a method — methods can guard the data ("You can't roll back an odometer!").</>,
            <>Inheritance: child gets everything from the parent via <strong>super().__init__()</strong>, adds its own members, and can <strong>override</strong> any parent method by redefining the name.</>,
            <>When a class grows too detailed, split it — a <strong>Battery instance as an attribute</strong> keeps ElectricCar clean (my_tesla.battery.get_range()).</>,
            <>Classes live in modules too: import one, many, the whole module (dots!), or — never — <strong>import *</strong>. Modules can import modules.</>,
            <>The <strong>standard library</strong> ships with Python: <code className="font-mono">from collections import OrderedDict</code> keeps insertion order. Same pattern you already know.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}
