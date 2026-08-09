> 🏠 [THE JS MIND](../../README.md)
> →
> [01-Core-Javascript](../README.md)
> →
> [007-TDZ](./README.md)
> →
> **questions.md**

# TDZ Questions

> Topic ID : TDZ
>
> This file is designed for interview preparation.
>
> Do NOT memorize answers.
>
> Follow the Thinking Path.
>
> Read the related README section before checking the answer.

---

# Theory Questions

---

## TDZ-Q001

### Difficulty

⭐ Easy

### Category

Definition

### Question

What is the Temporal Dead Zone?

### Why is this asked?

Interviewers want to know if you can define TDZ precisely — as a time

window, not just "an error that happens with let."

### Thinking Path

```

Scope Begins

↓

let / const Hoisted, Uninitialized

↓

That Window = Temporal Dead Zone

↓

Ends When Declaration Line Executes

```

### See Answer

README.md

→ TDZ-001 — What is the Temporal Dead Zone

### Related Examples

TDZ-E001

TDZ-E002

### Related Practice

TDZ-P001

---

## TDZ-Q002

Difficulty

⭐ Easy

Category

Concept

Question

If `let` is hoisted, why does it still throw an error before its declaration line?

Why is this asked?

This is the question that connects Hoisting and TDZ directly.

If you can't answer this, you've memorized both topics separately

instead of understanding how they connect.

Thinking Path

```

let IS hoisted

↓

But hoisted ≠ initialized

↓

Uninitialized state = TDZ

↓

Accessing an uninitialized binding → ReferenceError

```

See Answer

README.md

→ TDZ-001

→ TDZ-002

Related Practice

TDZ-P002

---

## TDZ-Q003

Difficulty

⭐ Easy

Category

Concept

Question

Why doesn't `var` have a Temporal Dead Zone?

Thinking Path

```

var

↓

Hoisted AND immediately initialized with undefined

↓

Never "uninitialized" at any point

↓

No TDZ possible

```

See Answer

README.md

→ TDZ-001

Related Example

TDZ-E007

---

## TDZ-Q004

Difficulty

⭐⭐ Medium

Category

Concept

Question

What are the three stages every `let`/`const` variable passes through?

Thinking Path

```

Stage 1: Uninitialized (TDZ starts)

↓

Stage 2: Initialized (declaration line runs, TDZ ends)

↓

Stage 3: Assigned / Reassigned (let only)

```

See Answer

README.md

→ TDZ-003

Related Example

TDZ-E005

---

## TDZ-Q005

Difficulty

⭐⭐ Medium

Category

Comparison

Question

Does `const` have a TDZ just like `let`?

Thinking Path

```

const

↓

Same Stage 1 and Stage 2 as let

↓

Only difference: skips Stage 3 (no reassignment)

```

See Answer

README.md

→ TDZ-003

Related Example

TDZ-E002

---

## TDZ-Q006

Difficulty

⭐⭐ Medium

Category

Operators

Question

Why does `typeof` throw a `ReferenceError` on a variable inside its TDZ,
when `typeof` is normally considered "safe"?

Thinking Path

```

typeof on an UNDECLARED variable

↓

Nothing to touch → safely returns "undefined"

----------------------------------

typeof on a variable INSIDE its TDZ

↓

The binding exists, just uninitialized

↓

typeof still has to touch it → ReferenceError

```

See Answer

README.md

→ TDZ-004

Related Example

TDZ-E003

---

## TDZ-Q007

Difficulty

⭐⭐ Medium

Category

Scope

Question

Is the Temporal Dead Zone global, or does each block have its own?

Thinking Path

```

Every { } block, if, for, or function body

↓

Creates its own scope

↓

Each let/const inside it

↓

Has its OWN independent TDZ

```

See Answer

README.md

→ TDZ-005

Related Example

TDZ-E004

---

## TDZ-Q008

Difficulty

⭐⭐⭐ Hard

Category

Loops

Question

Does a `let` declared inside a `for` loop have a TDZ on every iteration?

Thinking Path

```

Each iteration

↓

Gets a FRESH let binding

↓

Each fresh binding has its own tiny TDZ

↓

But it starts and ends before the loop body runs

↓

So the loop body itself never observes the TDZ directly

```

See Answer

README.md

→ TDZ-005

Related Example

TDZ-E006

---

## TDZ-Q009

Difficulty

⭐⭐⭐ Hard

Category

Comparison

Question

What is the difference between a `ReferenceError` from the TDZ, and a
`ReferenceError` from accessing a variable that was never declared at all?

Thinking Path

```

TDZ ReferenceError

↓

Variable EXISTS in memory (hoisted), just uninitialized

↓

Message: "Cannot access '<name>' before initialization"

----------------------------------

Undeclared ReferenceError

↓

Variable does NOT exist anywhere in the scope chain

↓

Message: "<name> is not defined"

```

See Answer

README.md

→ TDZ-001

Related Practice

TDZ-P009

---

## TDZ-Q010

Difficulty

⭐⭐⭐ Hard

Category

Interview

Question

Explain the Temporal Dead Zone to someone who has never programmed before —
without using the word "hoisting."

Thinking Path

Use the Courier Timeline Analogy from thinking.md.

See Answer

thinking.md

---

# Output Questions

---

## TDZ-Q011

Difficulty

⭐ Easy

Predict the output.

```javascript
console.log(city);

let city = "Lahore";
```

Thinking Path

```

Access BEFORE declaration line

↓

TDZ

↓

ReferenceError

```

Answer

Don't look immediately.

First explain WHY.

See

README.md

→ TDZ-001

Related Example

TDZ-E001

---

## TDZ-Q012

Difficulty

⭐ Easy

Predict the output.

```javascript
let total = 100;

console.log(total);
```

Thinking Path

```

Declaration line already ran

↓

TDZ already ended

↓

Normal variable

```

See Answer

README.md

→ TDZ-003

Related Example

TDZ-E005

---

## TDZ-Q013

Difficulty

⭐⭐ Medium

Predict the output.

```javascript
console.log(typeof rate);

let rate = 5;
```

Thinking Path

```

rate is hoisted (exists), but uninitialized

↓

typeof still touches the binding

↓

ReferenceError

```

See Answer

README.md

→ TDZ-004

Related Example

TDZ-E003

---

## TDZ-Q014

Difficulty

⭐⭐ Medium

Predict the output.

```javascript
console.log(typeof neverDeclared);
```

Thinking Path

```

neverDeclared doesn't exist ANYWHERE in scope

↓

No TDZ involved at all

↓

typeof safely returns "undefined"

```

See Answer

README.md

→ TDZ-004

Related Example

TDZ-E003 (contrast case)

---

## TDZ-Q015

Difficulty

⭐⭐ Medium

Predict the output.

```javascript
{
    console.log(discount);

    let discount = "10%";
}
```

Thinking Path

```

Block { } creates its own scope

↓

discount hoisted within this block, uninitialized

↓

console.log happens BEFORE the declaration line

↓

ReferenceError

```

See Answer

README.md

→ TDZ-005

Related Example

TDZ-E004

---

## TDZ-Q016

Difficulty

⭐⭐⭐ Hard

Predict the output.

```javascript
console.log(a);

var a = "var value";

console.log(b);

let b = "let value";
```

Thinking Path

```

var a

↓

Hoisted, initialized with undefined

↓

console.log(a) → undefined, no error

↓

a = "var value"

↓

let b

↓

Hoisted, uninitialized (TDZ)

↓

console.log(b) → still in TDZ

↓

ReferenceError (program stops here)

```

See Example

TDZ-E007

See Theory

README.md

→ TDZ-001

---

## TDZ-Q017

Difficulty

⭐⭐⭐ Hard

Predict the output.

```javascript
for (let i = 0; i < 2; i++) {
    console.log(i);
}

console.log(i);
```

Thinking Path

```

Loop body: i is freshly initialized each iteration

↓

console.log(i) inside loop → 0, then 1

↓

After the loop, i is OUT OF SCOPE entirely
(let is block-scoped to the for statement)

↓

console.log(i) after the loop

↓

ReferenceError: i is not defined
(NOT a TDZ error — a scope error)

```

See Theory

README.md

→ TDZ-005

Related Example

TDZ-E006

---

## TDZ-Q018

Difficulty

⭐⭐⭐ Hard

Predict the output.

```javascript
function checkout() {
    console.log(total);

    let total = 500;

    console.log(total);
}

checkout();
```

Thinking Path

```

Function Execution Context Created

↓

Memory Creation (local to checkout)

↓

total hoisted, uninitialized (TDZ)

↓

console.log(total) → still in TDZ

↓

ReferenceError (function stops here,
second console.log never runs)

```

See Answer

README.md

→ TDZ-001

→ TDZ-005

---

# Interview Follow-up Questions

These questions are commonly asked after explaining TDZ.

---

## TDZ-Q019

Is the TDZ a bug, or a deliberate design decision?

See Theory

TDZ-002

---

## TDZ-Q020

Does the TDZ apply to function parameters declared with default values?

See Theory

TDZ-005

---

## TDZ-Q021

What's the difference in error message between a TDZ violation and accessing
a completely undeclared variable?

See Theory

TDZ-001

---

## TDZ-Q022

Why does `typeof` fail to protect you inside a TDZ, when it protects you
everywhere else?

See Theory

TDZ-004

---

## TDZ-Q023

Is TDZ scoped globally per file, or independently per block?

See Theory

TDZ-005

---

## TDZ-Q024

Can you have a TDZ inside a `for` loop even though the loop runs multiple times?

See Theory

TDZ-005

---

## TDZ-Q025

Can you explain TDZ fully using only the words "before" and "after" — no
technical jargon?

See Theory

thinking.md

---

# Completion Checklist

Before moving to practice.js, make sure you can answer:

✅ What is the Temporal Dead Zone?

✅ Why does `let` throw an error even though it IS hoisted?

✅ Why doesn't `var` have a TDZ?

✅ What are the three stages every `let`/`const` passes through?

✅ Does `const` behave the same as `let` inside the TDZ?

✅ Why does `typeof` fail inside the TDZ when it's normally safe?

✅ Is TDZ scoped to the whole file, or to individual blocks?

✅ What's the difference between a TDZ error and an "undeclared variable" error?

✅ Explain TDZ without using the word "hoisting."

If you can answer all of these without looking at the README,

you're ready to move on.

---

# 📚 Continue Learning

**⬅ Previous:** [examples.js](./examples.js)

**➡ Next:** [practice.js](./practice.js)

---

# 🧭 Topic Learning Path

- [x] README.md
- [x] thinking.md
- [x] decision-tree.md
- [x] examples.js
- [x] questions.md ← You are here
- [ ] practice.js
- [ ] mistakes.md
- [ ] cheatsheet.md