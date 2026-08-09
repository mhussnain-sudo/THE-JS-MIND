> 🏠 [THE JS MIND](../../README.md)
> →
> [01-Core-Javascript](../README.md)
> →
> [006-Hoisting](./README.md)
> →
> **thinking.md**

# Thinking Like JavaScript

> **Topic ID:** HO
>
> This file is not about syntax.
>
> This file is about killing a myth permanently.

---

# The Goal

Most developers repeat a sentence.

> "It's hoisted."

Great developers can explain **what actually moved** — which is nothing —

and **what actually happened** — memory was prepared.

Whenever you see a Hoisting question, don't think:

> "What gets hoisted?"

Instead ask:

> "What did Memory Creation already prepare, and what is still missing?"

That single shift removes the magic from Hoisting entirely.

---

# The JavaScript Mindset

Whenever you see early access to a variable or function,

your brain should automatically visualize this.

```
JavaScript Starts

        ↓

Global Execution Context Created

        ↓

Memory Creation Phase

        ↓

(this is where "Hoisting" happens)

        ↓

Execution Phase

        ↓

Program Ends
```

Don't memorize this.

Visualize it.

Hoisting is not a separate box in this diagram.

It lives entirely inside Memory Creation.

---

# The First Question

Whenever you see code accessing something early,

your first question should NOT be

> Is this hoisted?

Everything with `var`, `let`, `const`, and `function` is hoisted.

That question has already been answered — always yes.

Instead ask

> **What value does it hold right now, in memory?**

---

# The Second Question

Once you know something is hoisted,

ask the question that actually matters.

```
Is it hoisted with a usable value?

OR

Is it hoisted but empty / locked?
```

`var` → hoisted, filled with `undefined`.

`function` declaration → hoisted, filled with the entire function.

`let` / `const` → hoisted, but locked (TDZ).

`var` holding a function expression → the **variable** is hoisted, not the function.

Four different declarations.

Four different outcomes.

One single mechanism underneath all of them: Memory Creation.

---

# Mental Model

Imagine moving into a new apartment.

Before you arrive, the landlord already:

- labeled every room with your name ("this room is now yours")
- left some rooms completely empty
- fully furnished one room in advance
- locked some doors until you personally unlock them on move-in day

Every room exists.

Every room has your name on it.

But not every room is usable the moment you walk in.

That's Hoisting.

The **existence** of the room is guaranteed.

The **usability** of the room depends on which kind of room it is.

---

# What Should Your Brain See?

When you see

```javascript
console.log(x);

console.log(y);

foo();

var x = 1;

let y = 2;

function foo() {}
```

Don't read it top to bottom like a human reading a sentence.

Instead visualize the Memory Creation Phase happening **first, for the whole file**:

```
Scan Entire File

↓

x → undefined

↓

y → TDZ (uninitialized)

↓

foo → entire function stored

↓

NOW Execution Begins

↓

console.log(x) → undefined

↓

console.log(y) → ReferenceError (still in TDZ)
```

Notice: execution never even reaches `foo()` or the assignments,

because `y` throws before that.

This is why order matters even though everything was "hoisted."

---

# Every Question Has a Hidden Story

Interviewers don't actually care about

```javascript
console.log(a);

var a = 10;
```

printing `undefined`.

They care whether you can explain

```
Execution Context

↓

Memory Creation

↓

var → undefined

↓

Execution

↓

console.log

↓

undefined
```

without ever saying

> "because it moved to the top."

If your explanation includes the word "moved,"

you have not understood Hoisting yet — you've memorized a myth.

---

# Stop Memorizing "What Hoists"

Wrong mindset

```
Question

↓

Recall: "var hoists as undefined, let doesn't hoist"
```

That second half is **false**, and memorizing it will fail you the moment

the interviewer asks *why* `let` throws instead of returning `undefined`.

Correct mindset

```
Question

↓

Identify the declaration type

↓

Recall what Memory Creation does for THAT type

↓

Predict the value at the point of access

↓

Explain WHY
```

---

# Your Internal Checklist

Every time you see early access to a variable or function,

ask yourself these questions.

### Question 1

What keyword created it?

`var` / `let` / `const` / `function`

---

### Question 2

Is it a Function Declaration, or a variable holding a function value?

This distinction breaks more interview answers than any other single mistake.

---

### Question 3

At the exact line being accessed —

has Memory Creation finished?

(Always yes, for the whole file, before any execution.)

---

### Question 4

At the exact line being accessed —

has Execution reached the assignment yet?

This is the only question that actually determines the output.

---

### Question 5

If it's `let` or `const` — has execution passed the declaration line yet?

If not: TDZ. `ReferenceError`.

---

# The Furnished Room Analogy

Imagine four rooms in that new apartment again.

**Room 1 (`var`)** — empty, but the door is unlocked. You can walk in and see nothing (`undefined`).

**Room 2 (`function`)** — fully furnished and unlocked. You can use it immediately.

**Room 3 (`let` / `const`)** — the room exists, but the door is locked until moving day. Try the handle early, and it refuses you (`ReferenceError`).

**Room 4 (`var f = function(){}`)** — same as Room 1 until you personally bring the furniture in later during execution. Try to use it early, and you find an empty room, not a function (`TypeError` when called).

Four rooms.

One landlord (Memory Creation).

Four different rules for each.

---

# How THE JS MIND Solves Hoisting Questions

Whenever you solve a Hoisting question, follow this order.

```
Read Question

↓

Identify Declaration Type

↓

Recall Memory Creation Rule For That Type

↓

Imagine Memory Before Execution Starts

↓

Trace Execution Line By Line

↓

Predict Output

↓

Explain WHY — without using the word "moved"
```

---

# Common Thinking Mistakes

❌ Hoisting moves declarations to the top of the file.

✔ Nothing moves. Memory is simply prepared before execution.

---

❌ `let` and `const` are not hoisted.

✔ They ARE hoisted. They're just left uninitialized, inside the TDZ.

---

❌ Function expressions behave like function declarations.

✔ Only the variable is hoisted (as `undefined`); the function value is assigned later.

---

❌ Hoisting is a separate phase from Execution Context.

✔ Hoisting is simply the name given to what the Memory Creation Phase already does.

---

# Recognition Pattern

If a question contains

```
variable accessed
before its declaration line
```

Immediately think

```
Which keyword?

↓

var → undefined

let/const → TDZ → ReferenceError

function declaration → works normally

var + function value → TypeError when called early
```

This is called Pattern Recognition.

Our goal is to make this automatic — not memorized, reasoned.

---

# Your Goal

Don't become someone who repeats

> "It's hoisted."

Become someone who can say

> "The variable exists in memory as `undefined` because of `var`'s Memory Creation rule — but it hasn't been assigned yet, because Execution hasn't reached that line."

That sentence alone tells an interviewer you understand JavaScript,

not just its vocabulary.

---

# Related Theory

- HO-001 — What is Hoisting?
- HO-002 — Why Hoisting Exists
- HO-003 — Hoisting of var
- HO-004 — Hoisting of Function Declarations
- HO-005 — Hoisting of let and const
- HO-006 — Hoisting of Function Expressions and Arrow Functions

See: `README.md`

---

# 📚 Continue Learning

**⬅ Previous:** [README.md](./README.md)

**➡ Next:** [decision-tree.md](./decision-tree.md)

---

# 🧭 Topic Learning Path

- [x] README.md
- [x] thinking.md ← You are here
- [ ] decision-tree.md
- [ ] examples.js
- [ ] questions.md
- [ ] practice.js
- [ ] mistakes.md
- [ ] cheatsheet.md