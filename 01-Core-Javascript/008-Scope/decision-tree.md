> 🏠 [THE JS MIND](../../README.md)
> →
> [01-Core-Javascript](../README.md)
> →
> [008-Scope](./README.md)
> →
> **decision-tree.md**

# Scope Decision Tree

> **Topic ID:** SC
>
> This file teaches you how to recognize Scope questions before writing any code.
>
> Related Theory:
>
> - SC-001 — What is Scope
> - SC-003 — The Three Types of Scope
> - SC-004 — Lexical Scope
> - SC-005 — The Scope Chain
>
> See: `README.md`

---

# Goal

When you see a JavaScript question, don't immediately solve it.

First identify every wall (Global, Function, Block) in the code,

then locate where the variable in question was declared.

Your goal is to recognize Scope questions within a few seconds —

and immediately know whether a lookup succeeds or fails.

---

# Decision Tree

```
JavaScript Question

        │

        ▼

Is a variable being accessed from a DIFFERENT
location than where it was declared?

        │
        ├── No (same exact location/scope)
        │       │
        │       ▼
        │   Scope is probably NOT the focus.
        │
        ▼

Yes

        │

        ▼

Was the variable declared with var, let, or const?

        │
        ├── var
        │       │
        │       ▼
        │   Think:
        │
        │   Function-scoped only
        │
        │   ↓
        │
        │   Ignores if / for / bare { } blocks
        │
        │   ↓
        │
        │   Visible anywhere in the
        │   nearest enclosing FUNCTION
        │
        ▼

let / const

        │

        ▼

Is the access point INSIDE the same block
where the variable was declared
(or a block nested even deeper inside it)?

        │
        ├── Yes
        │       │
        │       ▼
        │   Visible — normal lookup applies
        │
        ▼

No — access is OUTSIDE that block

        │

        ▼

Think:

        │

        ▼

Block Scope violation

        │

        ▼

ReferenceError: variable is not defined
```

---

# A Second Tree — Lexical Scope (Call Site vs Write Site)

```
Does a function access a variable
that is NOT declared inside itself?

        │
        ├── No
        │       │
        │       ▼
        │   Not a Lexical Scope question.
        │
        ▼

Yes

        │

        ▼

Look at WHERE that function was WRITTEN
(not where it is being CALLED from)

        │

        ▼

Walk OUTWARD from the function's own
physical location in the source code

        │

        ▼

Find the variable in an enclosing wall?

        │
        ├── Yes
        │       │
        │       ▼
        │   That value is used — regardless
        │   of which function called this one
        │
        ├── No
        │       │
        │       ▼
        │   Continue walking outward to
        │   the next enclosing wall
        │
        ▼

Reached Global Scope, still not found?

        │

        ▼

ReferenceError: variable is not defined
```

---

# Recognition Clues

If you notice these clues,

your brain should immediately think

```
Scope
```

### Clue 1

```javascript
function greet() {
    var message = "Hi";
}

console.log(message);
```

Think

```
message is Function-Scoped to greet()

↓

Accessed OUTSIDE that function

↓

ReferenceError
```

Related Theory

SC-003

---

### Clue 2

```javascript
if (true) {
    let status = "active";
}

console.log(status);
```

Think

```
let is Block-Scoped

↓

Accessed OUTSIDE the if block

↓

ReferenceError
```

Related Theory

SC-003

---

### Clue 3

```javascript
if (true) {
    var status = "active";
}

console.log(status);
```

Think

```
var IGNORES block boundaries

↓

Still Function/Global-Scoped

↓

Prints "active", no error
```

Related Theory

SC-003

---

### Clue 4

```javascript
var color = "blue";

function printColor() {
    console.log(color);
}

function changeAndPrint() {
    var color = "red";
    printColor();
}

changeAndPrint();
```

Think

```
printColor was WRITTEN inside Global Scope

↓

Lexical Scope — not affected by WHO calls it

↓

Prints "blue", not "red"
```

Related Theory

SC-004

---

# Decision Framework

Every Scope problem should follow this order.

```
Read Question

↓

Draw Every Wall (Global, Function, Block)

↓

Mark Where Each Variable Was Declared

↓

Mark Where Each Variable Is Accessed

↓

Same Wall or Nested Deeper? → Visible

↓

Different/Outer Wall? → Walk outward from the ACCESS point

↓

Found in an outer wall? → Use that value

↓

Never found, even at Global? → ReferenceError
```

Never confuse "who calls this function" with "where this function

was written." Only the second one matters for Scope.

---

# Choosing the Correct Thinking Path

## Situation 1

`var` declared inside a block (`if`, `for`, bare `{ }`), accessed outside that block

Choose

```
var ignores block boundaries

↓

Still visible (function/global scoped)
```

---

## Situation 2

`let`/`const` declared inside a block, accessed outside that block

Choose

```
let/const respects block boundaries

↓

NOT visible → ReferenceError
```

---

## Situation 3

A function reads a variable it didn't declare itself

Choose

```
Lexical Scope

↓

Look at WHERE the function was written

↓

Walk outward from there — ignore who called it
```

---

## Situation 4

A variable isn't found in the current or immediate outer scope

Choose

```
Keep walking the Scope Chain outward

↓

Check next enclosing wall

↓

Repeat until Global Scope

↓

Still not found → ReferenceError
```

---

# What NOT To Think

Wrong

```
Whoever CALLS a function

↓

Decides what that function can see
```

Correct

```
WHERE a function is WRITTEN

↓

Decides what that function can see

↓

(This is Lexical Scope — fixed at write-time)
```

---

# Fast Interview Recognition

When an interviewer writes Scope code,

don't read the code top to bottom first.

Draw the walls first.

### var inside a block, used outside it

↓

Still visible — var ignores blocks

---

### let/const inside a block, used outside it

↓

ReferenceError — block scope enforced

---

### Function reading an outer variable

↓

Lexical Scope — based on where it's WRITTEN

---

### Variable not found locally

↓

Walk the Scope Chain OUTWARD until found or Global runs out

---

# The JS MIND Rule

Never ask "does this variable exist somewhere in my program?"

Always ask "does this variable exist inside a wall my current code

can see — either directly, or by walking outward?"

---

# Summary

Whenever you see a variable being accessed from a different location,

your thinking process should become

```
Question

↓

Draw the Walls

↓

Where Declared vs Where Accessed

↓

var → function-scoped, ignores blocks

↓

let/const → block-scoped, respects every { }

↓

Function reading outer variable? → Lexical Scope (write-site, not call-site)

↓

Not found locally? → Walk outward (Scope Chain)

↓

Output or ReferenceError

↓

Explain WHY
```

If you can follow this process,

you'll stop guessing at Scope questions and start solving them by

drawing walls with certainty.

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