> 🏠 [THE JS MIND](../../README.md)
> →
> [01-Core-Javascript](../README.md)
> →
> [008-Scope](./README.md)
> →
> **questions.md**

# Scope Questions

> Topic ID : SC
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

## SC-Q001

### Difficulty

⭐ Easy

### Category

Definition

### Question

What is Scope?

### Why is this asked?

Interviewers want to know if you can define Scope as a boundary system,

not just "where a variable works."

### Thinking Path

```

Code Is Written

↓

Boundaries Form Around Functions and Blocks

↓

A Variable Is Only Visible Inside Its Own Boundary
(and boundaries nested inside it)

```

### See Answer

README.md

→ SC-001 — What is Scope

### Related Examples

SC-E001

SC-E002

### Related Practice

SC-P001

---

## SC-Q002

Difficulty

⭐ Easy

Category

Concept

Question

Why does JavaScript need Scope at all?

Thinking Path

```

No Scope

↓

Every variable shares one giant space

↓

Constant naming collisions

----------------

With Scope

↓

Each function/block gets its own private workspace

```

See Answer

README.md

→ SC-002

---

## SC-Q003

Difficulty

⭐ Easy

Category

Types

Question

What are the three types of Scope in JavaScript?

Thinking Path

```

Global Scope

↓

Function Scope

↓

Block Scope

```

See Answer

README.md

→ SC-003

Related Practice

SC-P002

---

## SC-Q004

Difficulty

⭐⭐ Medium

Category

Comparison

Question

Why does `var` ignore block boundaries, but `let`/`const` don't?

Thinking Path

```

var

↓

Only respects FUNCTION boundaries

----------------

let / const

↓

Respect EVERY { } block

```

See Answer

README.md

→ SC-003

Related Example

SC-E003

SC-E004

---

## SC-Q005

Difficulty

⭐⭐ Medium

Category

Concept

Question

What does "Lexical Scope" mean?

Thinking Path

```

Lexical

↓

Determined by WHERE code is WRITTEN

↓

NOT by where a function is CALLED from

```

See Answer

README.md

→ SC-004

Related Example

SC-E005

---

## SC-Q006

Difficulty

⭐⭐ Medium

Category

Concept

Question

What is the Scope Chain?

Thinking Path

```

Variable not found locally?

↓

Search the ENCLOSING scope

↓

Still not found?

↓

Keep searching outward

↓

Stop at Global Scope, or throw ReferenceError

```

See Answer

README.md

→ SC-005

Related Example

SC-E006

---

## SC-Q007

Difficulty

⭐⭐ Medium

Category

Direction

Question

Can an outer Scope access a variable declared inside an inner Scope?

Thinking Path

```

Scope Chain travels OUTWARD only

↓

Inner can see Outer

↓

Outer CANNOT see Inner

```

See Answer

README.md

→ SC-005

---

## SC-Q008

Difficulty

⭐⭐⭐ Hard

Category

Concept

Question

What is Shadowing?

Thinking Path

```

Inner Scope declares a variable

with the SAME NAME as an outer one

↓

Inner variable temporarily "hides" the outer one

↓

Outer variable is untouched, still exists as-is

```

See Answer

README.md

→ SC-003

Related Example

SC-E008

---

## SC-Q009

Difficulty

⭐⭐⭐ Hard

Category

Comparison

Question

What is the difference between Scope and Execution Context?

Thinking Path

```

Execution Context

↓

The environment created when code runs
(memory, this, phases)

----------------

Scope

↓

The RULES that decide which variables
that environment is allowed to see

```

See Answer

README.md

→ SC-001

Related Theory

005-ExecutionContext

---

## SC-Q010

Difficulty

⭐⭐⭐ Hard

Category

Interview

Question

Explain Scope to someone who has never programmed before.

Thinking Path

Use the Nesting Dolls Analogy from thinking.md.

See Answer

thinking.md

---

# Output Questions

---

## SC-Q011

Difficulty

⭐ Easy

Predict the output.

```javascript
function sayHi() {
    var greeting = "Hi";

    console.log(greeting);
}

sayHi();

console.log(greeting);
```

Thinking Path

```

Inside sayHi → visible

↓

Outside sayHi → wall blocks it

↓

ReferenceError

```

Answer

Don't look immediately.

First explain WHY.

See

README.md

→ SC-003

Related Example

SC-E002

---

## SC-Q012

Difficulty

⭐⭐ Medium

Predict the output.

```javascript
for (let i = 0; i < 1; i++) {
    var x = "inside loop";
}

console.log(x);
```

Thinking Path

```

var ignores the for-loop's block boundary

↓

x is visible outside the loop

```

See Answer

README.md

→ SC-003

---

## SC-Q013

Difficulty

⭐⭐ Medium

Predict the output.

```javascript
for (let i = 0; i < 1; i++) {
    let y = "inside loop";
}

console.log(y);
```

Thinking Path

```

let respects the for-loop's block boundary

↓

y is NOT visible outside the loop

↓

ReferenceError

```

See Answer

README.md

→ SC-003

---

## SC-Q014

Difficulty

⭐⭐ Medium

Predict the output.

```javascript
var team = "Blue";

function announce() {
    console.log(team);
}

function switchTeam() {
    var team = "Red";

    announce();
}

switchTeam();
```

Thinking Path

```

announce is WRITTEN inside Global Scope

↓

Lexical Scope — unaffected by who calls it

↓

Prints "Blue", not "Red"

```

See Answer

README.md

→ SC-004

Related Example

SC-E005

---

## SC-Q015

Difficulty

⭐⭐⭐ Hard

Predict the output.

```javascript
var a = "Global";

function level1() {
    var a = "Level1";

    function level2() {
        console.log(a);
    }

    level2();
}

level1();
```

Thinking Path

```

level2 is WRITTEN inside level1

↓

Scope Chain: level2 → level1 → Global

↓

"a" found in level1's Scope first

↓

"Level1"

```

See Answer

README.md

→ SC-005

Related Example

SC-E006

---

## SC-Q016

Difficulty

⭐⭐⭐ Hard

Predict the output.

```javascript
var value = "Outer";

function show() {
    console.log(value);

    var value = "Inner";

    console.log(value);
}

show();
```

Thinking Path

```

value is declared with var INSIDE show()

↓

Hoisted to the top of show()'s Function Scope

↓

First console.log → undefined (not "Outer" —
show() has its OWN local "value")

↓

var value = "Inner" (assignment happens)

↓

Second console.log → "Inner"

```

See Answer

README.md

→ SC-003

Related Topic

Hoisting (006)

---

## SC-Q017

Difficulty

⭐⭐⭐ Hard

Predict the output.

```javascript
function outer() {
    var msg = "Outer Message";

    function inner() {
        console.log(msg);
    }

    return inner;
}

var myFunc = outer();

myFunc();
```

Thinking Path

```

inner is WRITTEN inside outer

↓

inner "remembers" outer's Scope,
even after outer() has finished running

↓

myFunc() (which IS inner) still sees msg

↓

"Outer Message"

```

See Answer

README.md

→ SC-004

→ SC-005

Related Topic

Closures (009 — upcoming lesson)

---

## SC-Q018

Difficulty

⭐⭐⭐ Hard

Predict the output.

```javascript
var x = "Global";

function outer() {
    console.log(x);

    var x = "Outer";

    if (true) {
        var x = "Block";

        console.log(x);
    }

    console.log(x);
}

outer();
```

Thinking Path

```

ALL of these "var x" declarations are the SAME
variable — var is function-scoped, so the if
block does NOT create a new one

↓

x hoisted to top of outer() → undefined

↓

console.log(x) → undefined (not "Global")

↓

x = "Outer"

↓

Enter if block, x = "Block"
(still the SAME function-scoped x)

↓

console.log(x) → "Block"

↓

console.log(x) after the if → "Block"
(the if block never created its own x)

```

See Answer

README.md

→ SC-003

---

# Interview Follow-up Questions

These questions are commonly asked after explaining Scope.

---

## SC-Q019

Does JavaScript support block scope for `var`?

See Theory

SC-003

---

## SC-Q020

Is Lexical Scope decided at write-time or run-time?

See Theory

SC-004

---

## SC-Q021

Can the Scope Chain travel inward, from an outer function into an inner one?

See Theory

SC-005

---

## SC-Q022

What is Shadowing, and does it modify the outer variable?

See Theory

SC-003

---

## SC-Q023

How is Scope different from Execution Context?

See Theory

SC-001

---

## SC-Q024

What happens when a function is returned and called later — does it still

remember the Scope it was written in?

See Theory

SC-004

Related Topic

Closures (009)

---

## SC-Q025

Can you explain Scope using only the word "written," and never the word "called"?

See Theory

thinking.md

---

# Completion Checklist

Before moving to practice.js, make sure you can answer:

✅ What is Scope?

✅ Why does JavaScript need it?

✅ What are the three types of Scope?

✅ Why does `var` ignore block boundaries but `let`/`const` don't?

✅ What does Lexical Scope mean?

✅ What is the Scope Chain, and which direction does it search?

✅ Can an outer scope reach into an inner scope? Why or why not?

✅ What is Shadowing?

✅ Explain Scope without ever using the word "called."

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