> 🏠 [THE JS MIND](../../README.md)
> →
> [01-Core-Javascript](../README.md)
> →
> [006-Hoisting](./README.md)
> →
> **questions.md**

# Hoisting Questions

> Topic ID : HO
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

## HO-Q001

### Difficulty

⭐ Easy

### Category

Definition

### Question

What is Hoisting?

### Why is this asked?

Interviewers want to know if you can define Hoisting without using the word "moves."

Most beginners fail this exact question.

### Thinking Path

```

JavaScript Starts

↓

Memory Creation Phase

↓

Declarations Reserved In Advance

↓

That Behavior = Hoisting

```

### See Answer

README.md

→ HO-001 — What is Hoisting

### Related Examples

HO-E001

HO-E002

### Related Practice

HO-P001

---

## HO-Q002

Difficulty

⭐ Easy

Category

Concept

Question

Does JavaScript actually move code to the top of the file?

Why is this asked?

To check whether you believe the popular myth or understand the real mechanism.

Thinking Path

```

Code Position

↓

Never Changes

↓

Only Memory Is Prepared Early

```

See Answer

README.md

→ HO-001

Related Practice

HO-P002

---

## HO-Q003

Difficulty

⭐ Easy

Category

Concept

Question

Is Hoisting a separate step from the Execution Context?

Thinking Path

```

Execution Context

↓

Memory Creation Phase

↓

Hoisting IS this phase, not a separate one

```

See Answer

README.md

→ HO-002

---

## HO-Q004

Difficulty

⭐ Easy

Category

Variables

Question

Is `var` hoisted? If yes, what value does it hold before assignment?

Thinking Path

```

var

↓

Hoisted

↓

undefined

```

See Answer

README.md

→ HO-003

Related Example

HO-E001

---

## HO-Q005

Difficulty

⭐⭐ Medium

Category

Variables

Question

Are `let` and `const` hoisted?

### Why is this asked?

This is the single most common Hoisting trap in interviews.

Thinking Path

```

let / const

↓

YES, hoisted

↓

But NOT initialized

↓

Temporal Dead Zone

```

See Answer

README.md

→ HO-005

Related Example

HO-E003

HO-E004

---

## HO-Q006

Difficulty

⭐⭐ Medium

Category

Functions

Question

Why can Function Declarations be called before they appear in the file?

Thinking Path

```

Memory Creation

↓

Entire Function Stored

↓

Execution

↓

Function Already Exists

```

See Answer

README.md

→ HO-004

Related Example

HO-E002

---

## HO-Q007

Difficulty

⭐⭐ Medium

Category

Comparison

Question

What is the difference between how `var` and `let` behave during Hoisting?

Thinking Path

```

var

↓

undefined

----------------

let

↓

TDZ (uninitialized)

```

See Answer

README.md

→ HO-003

→ HO-005

Related Example

HO-E001

HO-E003

---

## HO-Q008

Difficulty

⭐⭐ Medium

Category

Functions

Question

Are Function Expressions hoisted the same way as Function Declarations?

Thinking Path

```

Function Declaration

↓

Entire function hoisted

----------------

Function Expression

↓

Only the variable is hoisted (as undefined, or TDZ)

↓

Function value assigned later

```

See Answer

README.md

→ HO-006

Related Example

HO-E005

HO-E006

---

## HO-Q009

Difficulty

⭐⭐⭐ Hard

Category

Comparison

Question

If you call a hoisted `var` function expression too early, you get a `TypeError`.
If you call a hoisted `let` function expression too early, you get a `ReferenceError`.
Why the difference?

Thinking Path

```

var

↓

Hoisted as undefined

↓

Calling undefined() → TypeError

----------------

let

↓

Hoisted but uninitialized (TDZ)

↓

Accessing it at all → ReferenceError

```

See Answer

README.md

→ HO-005

→ HO-006

Related Example

HO-E005

HO-E006

---

## HO-Q010

Difficulty

⭐⭐⭐ Hard

Category

Interview

Question

Explain Hoisting to someone who has never programmed before — without using the word "hoisting."

Thinking Path

Use the Furnished Room Analogy from thinking.md.

See Answer

thinking.md

---

# Output Questions

---

## HO-Q011

Difficulty

⭐ Easy

Predict the output.

```javascript
console.log(score);

var score = 50;
```

Thinking Path

```

Memory

↓

score = undefined

↓

Execution

↓

console.log

```

Answer

Don't look immediately.

First explain WHY.

See

README.md

→ HO-003

Related Example

HO-E001

---

## HO-Q012

Difficulty

⭐ Easy

Predict the output.

```javascript
welcome();

function welcome() {
    console.log("Welcome");
}
```

Thinking Path

```

Memory

↓

Function Stored

↓

Execution

↓

Function Called

```

See Answer

README.md

→ HO-004

Related Example

HO-E002

---

## HO-Q013

Difficulty

⭐⭐ Medium

Predict the output.

```javascript
console.log(country);

let country = "Pakistan";
```

Thinking Path

```

Memory

↓

TDZ

↓

Execution

↓

ReferenceError

```

See Answer

README.md

→ HO-005

Related Example

HO-E003

---

## HO-Q014

Difficulty

⭐⭐ Medium

Predict the output.

```javascript
run();

var run = function () {
    console.log("Running");
};
```

Thinking Path

```

Memory

↓

run = undefined

↓

Execution

↓

run()

↓

undefined()

↓

TypeError

```

See Answer

README.md

→ HO-006

Related Example

HO-E005

---

## HO-Q015

Difficulty

⭐⭐⭐ Hard

Predict the output.

```javascript
console.log(typeof stop);

function stop() {
    console.log("Stopped");
}

var stop = "Not a function anymore";

console.log(typeof stop);
```

Thinking Path

```

Memory Creation

↓

var stop → undefined (reserved first)

↓

function stop → OVERWRITES with full function

↓

Execution

↓

typeof stop → "function"

↓

stop = "Not a function anymore" (assignment only)

↓

typeof stop → "string"

```

See Example

HO-E008

See Theory

README.md

→ HO-003

→ HO-004

---

## HO-Q016

Difficulty

⭐⭐⭐ Hard

Predict the output.

```javascript
function outer() {
    console.log(value);

    if (true) {
        var value = "inside if block";
    }

    console.log(value);
}

outer();
```

Thinking Path

```

var is function-scoped, NOT block-scoped

↓

Memory Creation (function outer)

↓

value = undefined
(hoisted to the TOP OF THE FUNCTION,
 not just the top of the if block)

↓

Execution

↓

console.log(value) → undefined

↓

value = "inside if block"

↓

console.log(value) → "inside if block"

```

See Theory

README.md

→ HO-003

Related Topic

Scope (upcoming lesson: 008-Scope)

---

## HO-Q017

Difficulty

⭐⭐⭐ Hard

Predict the output.

```javascript
console.log(a);
console.log(b);

var a = 1;

function b() {}

var b = 2;

console.log(b);
```

Thinking Path

```

Memory Creation (scans whole file first)

↓

var a → undefined

↓

var b → undefined (reserved)

↓

function b() → OVERWRITES b with full function

↓

Memory Creation Finished

a = undefined
b = Entire Function

↓

Execution

↓

console.log(a) → undefined

↓

console.log(b) → the function itself (logged as code)

↓

a = 1

↓

var b = 2 → only ASSIGNMENT executes

↓

console.log(b) → 2

```

See Theory

README.md

→ HO-003

→ HO-004

Related Example

HO-E008

---

## HO-Q018

Difficulty

⭐⭐ Medium

Predict the output.

```javascript
function greetUser() {
    console.log(name);

    var name = "Ayesha";

    console.log(name);
}

greetUser();
```

Thinking Path

```

Function Execution Context Created

↓

Memory Creation (local)

↓

name = undefined

↓

Execution

↓

console.log(name) → undefined

↓

name = "Ayesha"

↓

console.log(name) → "Ayesha"

```

See Answer

README.md

→ HO-003

Related Example

HO-E007

---

# Interview Follow-up Questions

These questions are commonly asked after explaining Hoisting.

---

## HO-Q019

Is Hoisting the same thing as Execution Context?

See Theory

HO-002

---

## HO-Q020

Why does `var` print `undefined` instead of throwing an error?

See Theory

HO-003

---

## HO-Q021

Why does `let` throw a `ReferenceError` instead of printing `undefined`?

See Theory

HO-005

---

## HO-Q022

If a Function Declaration and a `var` share the same name, which one wins during Memory Creation?

See Theory

HO-003

HO-004

---

## HO-Q023

Are Arrow Functions hoisted the same way as Function Declarations?

See Theory

HO-006

---

## HO-Q024

Is `var` hoisting scoped to the file, or to the nearest function?

See Theory

HO-003

Related Example

HO-E007

---

## HO-Q025

What is the practical reason senior developers avoid relying on Hoisting in real code (even though it's technically safe)?

See Theory

mistakes.md

---

## HO-Q026

Can you explain Hoisting fully without ever saying the word "moves" or "moved"?

See Theory

thinking.md

---

# Completion Checklist

Before moving to practice.js, make sure you can answer:

✅ What is Hoisting?

✅ Why doesn't JavaScript actually move code?

✅ Why does `var` print `undefined` before assignment?

✅ Why does `let`/`const` throw a `ReferenceError` before assignment?

✅ Why do Function Declarations work before their written position?

✅ Why do Function Expressions and Arrow Functions NOT work the same way?

✅ Why does a Function Declaration override a `var` of the same name during Memory Creation?

✅ Is `var` hoisting scoped to the block, or to the whole function?

✅ Explain Hoisting without using the word "moved."

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