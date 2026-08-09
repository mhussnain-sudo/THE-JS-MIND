> 🏠 [THE JS MIND](../../README.md)
> →
> [01-Core-Javascript](../README.md)
> →
> **008-Scope**


# Scope

> **Topic ID:** SC
>
> **Difficulty:** ⭐⭐ Beginner-Intermediate
>
> **Estimated Reading Time:** 22 Minutes
>
> **Prerequisites**
>
> - Execution Context
> - Hoisting
> - Temporal Dead Zone (TDZ)

---

# Why are you here?

You've already brushed against this idea twice without naming it.

Back in the Hoisting lesson, we quietly said this:

```javascript
function checkStock() {
    console.log(quantity);

    var quantity = 42;
}
```

`quantity` was hoisted "to the top of the function" —

not to the top of the file.

We didn't explain why it stopped at the function boundary.

We just accepted it.

---

Then in the TDZ lesson, we said this:

```javascript
{
    console.log(city);

    let city = "Karachi";
}
```

`city` had its "own TDZ, scoped to the block."

Again — we didn't explain what actually draws that boundary line,

or why a bare `{ }` even counts as one.

---

And maybe you've seen this classic trap in an interview.

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

What does this print?

Most beginners guess `"red"` — because `changeAndPrint()` is the one calling

`printColor()`, and it just changed `color` to `"red"`.

The actual answer is `"blue"`.

If that surprises you, you don't yet have a working model of **Scope**.

---

All three of these situations have the same missing piece.

**Scope** is what decides where a variable is visible, and where it isn't.

It's the invisible boundary system your engine has been enforcing

this entire time — you just haven't seen its rules written down yet.

---

# Learning Objectives

By the end of this lesson you should be able to explain

✅ What Scope actually is

✅ Why JavaScript needs Scope at all

✅ The three types of Scope: Global, Function, and Block

✅ Why `var` ignores block boundaries but `let`/`const` don't

✅ What Lexical Scope means, and why it's decided by where you WRITE code

✅ What the Scope Chain is, and how variable lookup travels through it

✅ Predict output before running Scope-based interview code

---

# Visual Overview

See

![Scope Diagram](./assets/diagram.png)

or

[Open Editable Diagram](./assets/diagram.drawio)

The diagram summarizes everything we'll learn in this lesson.

---

# Stop Thinking "Variables Are Just... Somewhere"

Before we go further,

delete this vague idea from your mind.

```
Variables

↓

Exist Everywhere Once Declared
```

That is not how JavaScript works.

Every variable is born inside a specific **boundary**.

Outside that boundary, it simply does not exist —

as far as that outer code is concerned.

Scope is the name for that boundary system.

Once you can see the boundaries,

"why can't I access this variable here?" stops being confusing.

---

# SC-001 — What is Scope?

## 🟢 Beginner Explanation

Scope is the **area of your code** where a particular variable

is allowed to be used.

Think of Scope like rooms in a house.

Something kept in the kitchen isn't automatically available in the

bedroom — unless you deliberately carry it there.

Each function, each block, and the overall file itself

acts like a room with its own boundaries.

A variable declared inside a room is only visible

inside that room — and inside any smaller room built within it.

---

## 🟡 Technical Explanation

Scope determines the accessibility of variables, functions, and objects

in a particular part of your code during execution.

JavaScript uses **Lexical Scope**, meaning scope boundaries are determined

by **where** you physically write your code — not by how or when

a function happens to get called.

Every Execution Context you learned about earlier carries its own

Scope alongside it — Scope is essentially "which variables does this

Execution Context, and its parents, have permission to see?"

---

## 🔵 Interview Explanation

Scope is the region of a program where a given binding (variable,

function, class) is defined and accessible. JavaScript determines

scope lexically — based on the physical structure of the code at

write-time — and organizes it into Global Scope, Function Scope,

and Block Scope, connected together through the Scope Chain.

---

# Important

Scope is **NOT**

❌ The same thing as Execution Context (though they're closely linked)

❌ Decided by which function CALLS another function

❌ A single flat list of every variable in your program

Scope **IS**

✅ A nested boundary system, decided by where code is WRITTEN

✅ The reason `var`, `let`, and `const` behave differently near `{ }`

✅ What Execution Context uses to know which variables are visible where

---

Related Topics

- Execution Context
- Hoisting
- Closures (next major topic)

---

# SC-002 — Why Does Scope Exist?

Imagine a program with zero scope boundaries —

every variable, in every function, visible to every other piece of code.

```javascript
function calculateTax() {
    var rate = 0.15;
}

function calculateDiscount() {
    var rate = 0.10; // collides with the one above?
}
```

Without Scope, these two `rate` variables would fight over the same

name, silently overwriting each other.

Scope exists to give each function, each block, and the global program

its own **private workspace** — so variables with the same name can

coexist safely, without interfering with one another.

```
No Scope

↓

One giant shared list of variables

↓

Constant naming collisions

--------------------------------

With Scope

↓

Each function/block gets its own workspace

↓

Same names can safely coexist
```

---

# Think Like JavaScript

A file arrives.

↓

The entire file is the outermost boundary — Global Scope.

↓

Every function creates a NEW boundary inside it — Function Scope.

↓

Every `{ }` block (with `let`/`const` inside) creates another

boundary — Block Scope.

↓

Boundaries can nest inside boundaries, like rooms inside a house.

↓

Code inside an inner boundary can see variables from outer boundaries.

↓

Code in an outer boundary CANNOT see variables from inner boundaries.

If you can visualize these nested rooms,

Scope becomes geometry — not memorization.

---

# SC-003 — The Three Types of Scope

## Global Scope

Declared outside every function and every block.

Accessible from anywhere in the file.

```javascript
var appName = "THE JS MIND"; // Global Scope

function show() {
    console.log(appName); // ✅ visible here
}
```

---

## Function Scope

Declared inside a function using `var`, `let`, or `const`.

Only accessible **inside** that function (and any functions nested inside it).

```javascript
function greet() {
    var message = "Hello"; // Function Scope

    console.log(message); // ✅ visible here
}

console.log(message); // ❌ ReferenceError — not visible outside
```

`var` is ALWAYS function-scoped — it completely ignores any `{ }`

blocks inside that function (`if`, `for`, bare blocks).

---

## Block Scope

Declared inside any `{ }` using `let` or `const`.

Only accessible **inside** that specific block.

```javascript
if (true) {
    let status = "active"; // Block Scope

    console.log(status); // ✅ visible here
}

console.log(status); // ❌ ReferenceError — not visible outside the if block
```

`var` does NOT respect block scope — only `let` and `const` do.

This is the exact mechanic behind the Hoisting and TDZ block examples

from the previous two lessons.

---

# SC-004 — Lexical Scope

"Lexical" means

> "determined by where something is physically written in the code."

JavaScript decides scope **lexically** — at the time you write the code,

not at the time a function happens to run or get called from somewhere else.

```javascript
var color = "blue";

function printColor() {
    console.log(color); // looks UP to where printColor is WRITTEN
}

function changeAndPrint() {
    var color = "red";

    printColor(); // calling printColor does NOT change what IT can see
}

changeAndPrint(); // "blue"
```

`printColor` was **written** inside the Global Scope, so it can only see

the Global `color`. It doesn't matter that `changeAndPrint` is the one

calling it, or that `changeAndPrint` has its own local `color` —

`printColor`'s visibility was locked in the moment it was **written**,

not the moment it was **called**.

This is exactly why the trap from the introduction prints `"blue"`,

not `"red"`.

---

# SC-005 — The Scope Chain

When JavaScript looks for a variable, it doesn't just check the current

Scope and give up. It walks **outward**, one boundary at a time,

until it finds the variable — or runs out of boundaries entirely.

```javascript
var country = "Pakistan";

function outer() {
    var city = "Lahore";

    function inner() {
        var street = "Main Blvd";

        console.log(street);  // found in inner's own scope
        console.log(city);    // not found in inner → look in outer
        console.log(country); // not found in inner or outer → look in Global
    }

    inner();
}

outer();
```

```
inner's Scope

↓ (not found, look outward)

outer's Scope

↓ (not found, look outward)

Global Scope

↓ (found, or ReferenceError if nowhere)
```

This outward-searching path is called the **Scope Chain**.

It only travels outward — inner scopes can see outer variables,

but outer scopes can never reach into an inner scope to grab a variable.

---

# Scope Summary

| Concept | Behavior |
|----------|--------------|
| Global Scope | Declared outside all functions/blocks — visible everywhere |
| Function Scope | Declared inside a function — visible only inside it (and nested functions) |
| Block Scope | Declared inside `{ }` with `let`/`const` — visible only inside that block |
| `var` | Function-scoped only — ignores block boundaries |
| `let` / `const` | Block-scoped — respects every `{ }` |
| Lexical Scope | Decided by WHERE code is written, not where it's called from |
| Scope Chain | Lookup travels outward: inner → outer → Global, never inward |

This table is worth memorizing — but more importantly, understanding.

If you can draw the nested boundaries of any piece of code on paper,

you'll never be confused by a Scope question again.

---

# 📚 Continue Learning

**⬅ Previous:** [007-TDZ](../007-TDZ/README.md)

**Next →** [thinking.md](./thinking.md)

---

# 🧭 Topic Learning Path

- [x] README.md ← You are here
- [ ] thinking.md
- [ ] decision-tree.md
- [ ] examples.js
- [ ] questions.md
- [ ] practice.js
- [ ] mistakes.md
- [ ] cheatsheet.md