> 🏠 [THE JS MIND](../../README.md)
> →
> [01-Core-Javascript](../README.md)
> →
> [006-Hoisting](./README.md)
> →
> **decision-tree.md**

# Hoisting Decision Tree

> **Topic ID:** HO
>
> This file teaches you how to recognize Hoisting questions before writing any code.
>
> Related Theory:
>
> - HO-001 — What is Hoisting
> - HO-003 — Hoisting of var
> - HO-004 — Hoisting of Function Declarations
> - HO-005 — Hoisting of let and const
> - HO-006 — Hoisting of Function Expressions and Arrow Functions
>
> See: `README.md`

---

# Goal

When you see a JavaScript question, don't immediately solve it.

First identify what is being accessed, and how it was declared.

Your goal is to recognize Hoisting questions within a few seconds —

and immediately know which of the four outcomes applies.

---

# Decision Tree

```
JavaScript Question

        │

        ▼

Is something used before its declaration line?

        │
        ├── No
        │       │
        │       ▼
        │   Hoisting is probably NOT the main topic.
        │
        ▼

Yes

        │

        ▼

What keyword declared it?

        │
        ├── function (Declaration)
        │       │
        │       ▼
        │   Think:
        │
        │   Fully stored during Memory Creation
        │
        │   ↓
        │
        │   Works normally, no error
        │
        ▼

var

        │

        ▼

Is it assigned a plain value (var x = 5) or a function (var f = function(){})?

        │
        ├── Plain value
        │       │
        │       ▼
        │   Think:
        │
        │   var → undefined
        │
        │   ↓
        │
        │   Prints undefined, no error
        │
        ├── Function value
        │       │
        │       ▼
        │   Think:
        │
        │   Only the VARIABLE is hoisted (undefined)
        │
        │   ↓
        │
        │   Calling it early → TypeError
        │
        ▼

let or const

        │

        ▼

Think:

        │

        ▼

Hoisted but NOT initialized

        │

        ▼

Temporal Dead Zone (TDZ)

        │

        ▼

Accessing it early → ReferenceError
```

---

# Recognition Clues

If you notice these clues,

your brain should immediately think

```
Hoisting
```

### Clue 1

```javascript
console.log(a);

var a = 10;
```

Think

```
var

↓

undefined
```

Related Theory

HO-003

---

### Clue 2

```javascript
hello();

function hello() {}
```

Think

```
Function Declaration

↓

Fully stored during Memory Creation

↓

Works normally
```

Related Theory

HO-004

---

### Clue 3

```javascript
console.log(age);

let age = 22;
```

Think

```
TDZ

↓

ReferenceError
```

Related Theory

HO-005

---

### Clue 4

```javascript
greet();

var greet = function () {};
```

Think

```
Variable hoisted, function value is NOT

↓

undefined is not a function

↓

TypeError
```

Related Theory

HO-006

---

# Decision Framework

Every Hoisting problem should follow this order.

```
Read Question

↓

Identify What Is Accessed Early

↓

Identify the Declaration Keyword

↓

Recall Its Memory Creation Rule

↓

Imagine Memory Before Execution

↓

Trace Execution Line by Line

↓

Predict Output
```

Never skip identifying the keyword.

The keyword is what decides everything.

---

# Choosing the Correct Thinking Path

## Situation 1

Variable accessed before declaration, declared with `var`

Choose

```
Memory Creation

↓

var → undefined

↓

No error, prints undefined
```

---

## Situation 2

Function called before its declaration, written as a Function Declaration

Choose

```
Memory Creation

↓

Entire function stored

↓

Works normally
```

---

## Situation 3

Variable accessed before declaration, declared with `let` or `const`

Choose

```
Memory Creation

↓

Created but uninitialized

↓

Temporal Dead Zone

↓

ReferenceError
```

---

## Situation 4

Function called before declaration, but assigned to a `var` / `let` / `const`
(Function Expression or Arrow Function)

Choose

```
Memory Creation

↓

Only the variable is hoisted

↓

Function body assigned later, during Execution

↓

Early call → TypeError (var) or ReferenceError (let/const)
```

---

# What NOT To Think

Wrong

```
Hoisting

↓

Code physically moves to the top
```

Correct

```
Execution Context

↓

Memory Creation

↓

Declarations reserved in advance

↓

Execution

↓

Values filled in, line by line

↓

Hoisting is just the NAME for this preparation
```

The output is a consequence of memory rules.

Not of anything moving.

---

# Fast Interview Recognition

When an interviewer writes code that accesses something early,

don't read the code first.

Look for the keyword.

### `var` used before assignment

↓

Prints `undefined`

---

### `function` declaration called before it appears

↓

Works normally

---

### `let` / `const` used before declaration

↓

`ReferenceError` (TDZ)

---

### `var`/`let`/`const` holding a function, called before assignment

↓

`TypeError` (var) or `ReferenceError` (let/const)

---

# The JS MIND Rule

Never assume "it's hoisted" answers the question.

Always ask **hoisted as what?**

`undefined`, a full function, or locked in the TDZ — the keyword decides.

---

# Summary

Whenever you see early access to a declaration,

your thinking process should become

```
Question

↓

Hoisting?

↓

Yes

↓

Which keyword?

↓

var → undefined

function → full value

let/const → TDZ

variable holding a function → variable rule applies, not function rule

↓

Trace Execution

↓

Output

↓

Explain WHY
```

If you can follow this process,

you'll stop guessing at Hoisting questions and start solving them with certainty.

---

# 📚 Continue Learning

**⬅ Previous:** [thinking.md](./thinking.md)

**➡ Next:** [examples.js](./examples.js)

---

# 🧭 Topic Learning Path

- [x] README.md
- [x] thinking.md
- [x] decision-tree.md ← You are here
- [ ] examples.js
- [ ] questions.md
- [ ] practice.js
- [ ] mistakes.md
- [ ] cheatsheet.md