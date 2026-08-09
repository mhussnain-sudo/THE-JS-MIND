> 🏠 [THE JS MIND](../../README.md)
> →
> [01-Core-Javascript](../README.md)
> →
> [007-TDZ](./README.md)
> →
> **decision-tree.md**

# TDZ Decision Tree

> **Topic ID:** TDZ
>
> This file teaches you how to recognize Temporal Dead Zone questions before writing any code.
>
> Related Theory:
>
> - TDZ-001 — What is the Temporal Dead Zone
> - TDZ-003 — The Three-Stage Lifecycle
> - TDZ-004 — Why typeof Fails Inside the TDZ
> - TDZ-005 — TDZ Inside Blocks and Loops
>
> See: `README.md`

---

# Goal

When you see a JavaScript question, don't immediately solve it.

First identify whether a `let`/`const` variable is being touched

before its own declaration line has executed.

Your goal is to recognize TDZ questions within a few seconds —

and immediately know whether the result is a guaranteed error.

---

# Decision Tree

```
JavaScript Question

        │

        ▼

Is a variable declared with let or const involved?

        │
        ├── No (only var / function)
        │       │
        │       ▼
        │   TDZ is NOT the topic.
        │   Go back to the Hoisting decision tree.
        │
        ▼

Yes

        │

        ▼

Is the variable being ACCESSED (read, write, or typeof)
BEFORE its own declaration line runs?

        │
        ├── No — access happens AFTER the declaration line
        │       │
        │       ▼
        │   Think:
        │
        │   TDZ already ended
        │
        │   ↓
        │
        │   Behaves like a normal variable
        │
        ▼

Yes — access happens BEFORE the declaration line

        │

        ▼

Is the access a "safe-looking" operation like typeof?

        │
        ├── Yes
        │       │
        │       ▼
        │   Think:
        │
        │   typeof is NOT safe inside TDZ
        │
        │   ↓
        │
        │   ReferenceError anyway
        │
        ▼

No (plain read or write)

        │

        ▼

Think:

        │

        ▼

Still inside the Temporal Dead Zone

        │

        ▼

ReferenceError: Cannot access '<name>' before initialization
```

---

# Recognition Clues

If you notice these clues,

your brain should immediately think

```
Temporal Dead Zone
```

### Clue 1

```javascript
console.log(age);

let age = 22;
```

Think

```
Access BEFORE declaration line

↓

TDZ

↓

ReferenceError
```

Related Theory

TDZ-001

---

### Clue 2

```javascript
console.log(typeof age);

let age = 22;
```

Think

```
typeof looks safe

↓

But the variable IS hoisted (not undeclared)

↓

typeof still throws

↓

ReferenceError
```

Related Theory

TDZ-004

---

### Clue 3

```javascript
{
    console.log(city);

    let city = "Lahore";
}
```

Think

```
Block scope has its OWN TDZ

↓

Same rule applies inside { }

↓

ReferenceError
```

Related Theory

TDZ-005

---

### Clue 4

```javascript
let score = 10;

console.log(score);
```

Think

```
Access happens AFTER declaration line

↓

TDZ already ended

↓

Prints 10, no error
```

Related Theory

TDZ-003

---

# Decision Framework

Every TDZ problem should follow this order.

```
Read Question

↓

Find the let / const Declaration Line

↓

Find Every Point Where the Variable Is Touched

↓

Compare Each Touch Point's Position to the Declaration Line

↓

Before → ReferenceError (always, no exceptions)

↓

After → Normal Variable Behavior

↓

Explain WHY using the Three-Stage Lifecycle
```

Never skip locating the declaration line first.

Everything else is measured relative to it.

---

# Choosing the Correct Thinking Path

## Situation 1

Variable read before its `let`/`const` declaration line

Choose

```
Still in TDZ

↓

ReferenceError
```

---

## Situation 2

`typeof` used on a `let`/`const` variable before its declaration line

Choose

```
typeof is NOT exempt inside TDZ

↓

ReferenceError
```

---

## Situation 3

Variable read or written strictly after its declaration line has run

Choose

```
TDZ already ended

↓

Normal variable — no error
```

---

## Situation 4

Variable declared with `let`/`const` inside a nested block (`{ }`, `if`, `for`)

Choose

```
That block has its OWN independent TDZ

↓

Apply the same before/after rule,
scoped only to that block
```

---

# What NOT To Think

Wrong

```
let / const

↓

Just throws errors sometimes
```

Correct

```
Scope Begins

↓

Variable Hoisted, Uninitialized

↓

TDZ Starts

↓

Declaration Line Executes

↓

TDZ Ends, Variable Initialized

↓

Before that line → ReferenceError

↓

After that line → Normal
```

The error is a consequence of position on the timeline.

Not randomness.

---

# Fast Interview Recognition

When an interviewer writes `let`/`const` code,

don't read the code first.

Find the declaration line, then look at every access point.

### Access before declaration line

↓

`ReferenceError`, guaranteed — even for `typeof`

---

### Access after declaration line

↓

Behaves exactly like any normal variable

---

### Declared inside a nested block

↓

Apply the same rule, but scoped to that block's own TDZ

---

# The JS MIND Rule

Never ask "does this variable exist?"

`let`/`const` variables always exist once hoisted.

Always ask "has its declaration line already run — yes or no?"

That single yes/no answer decides everything.

---

# Summary

Whenever you see a `let`/`const` variable being accessed,

your thinking process should become

```
Question

↓

Find the Declaration Line

↓

Find the Access Point

↓

Before or After?

↓

Before → TDZ → ReferenceError (even for typeof)

↓

After → Normal Variable

↓

Explain WHY
```

If you can follow this process,

you'll stop being surprised by `let`/`const` errors and start predicting

them with certainty.

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