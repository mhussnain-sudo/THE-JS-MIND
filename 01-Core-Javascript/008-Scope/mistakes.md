> 🏠 [THE JS MIND](../../README.md)
> →
> [01-Core-Javascript](../README.md)
> →
> [008-Scope](./README.md)
> →
> **mistakes.md**

# Common Mistakes

> **Topic ID:** SC
>
> Purpose:
>
> This file documents the most common misconceptions developers have about
> Scope.
>
> Every mistake references the theory explained in `README.md`.
>
> Don't memorize these mistakes.
>
> Understand WHY they are wrong.

---

# SC-M001

## Mistake

> Scope is decided by which function CALLS another function.

## Why Developers Think This

Since `changeAndPrint()` is the function that actually calls `printColor()`,

it feels natural to assume `printColor()` should "inherit" whatever

`changeAndPrint()` has lying around locally.

## Correct Thinking

JavaScript uses **Lexical Scope** — visibility is decided by WHERE a

function is physically **written** in the source code, not by which

function happens to call it at runtime.

```javascript
var color = "blue";

function printColor() {
    console.log(color); // looks at where IT was written
}

function changeAndPrint() {
    var color = "red";

    printColor(); // calling doesn't change what printColor can see
}

changeAndPrint(); // "blue"
```

## Visual Thinking

```
Wrong

Caller's Local Variables

↓

Available To Whatever It Calls

--------------------------

Correct

Function's Visibility

↓

Locked In At The Moment It Was WRITTEN
```

## Related Theory

README.md

→ SC-004

## Related Example

SC-E005

## Related Practice

SC-P005

---

# SC-M002

## Mistake

> `var` respects block boundaries the same way `let` and `const` do.

## Wrong Thinking

```javascript
if (true) {
    var status = "active";
}

console.log(status); // developers expect an error here
```

## Correct Thinking

`var` is **function-scoped**, not block-scoped.

It completely ignores `if`, `for`, `while`, and bare `{ }` blocks.

It only stops at the nearest enclosing **function** (or Global Scope,

if there's no function).

`let` and `const`, by contrast, respect every single block boundary.

## Related Theory

README.md

→ SC-003

## Related Example

SC-E003

SC-E004

---

# SC-M003

## Mistake

> Once a variable is declared, it's available everywhere in the file.

## Correct Thinking

A variable is only visible inside the wall (Global, Function, or Block)

it was declared in — and inside any walls nested deeper within that one.

Step outside that wall, and the variable simply does not exist as far

as that outer code is concerned.

```javascript
function greet() {
    var message = "Hi";
}

console.log(message); // ReferenceError — outside greet()'s wall
```

## Related Theory

README.md

→ SC-001

→ SC-003

## Related Example

SC-E002

---

# SC-M004

## Mistake

> An outer function can reach into an inner function and grab its local variables.

## Wrong Thinking

```javascript
function outer() {
    function inner() {
        var secret = "hidden";
    }

    inner();

    console.log(secret); // developers expect this to work
}
```

## Correct Thinking

The Scope Chain only travels **outward** — inner scopes can see outer

variables, but outer scopes can **never** reach into an inner scope.

`secret` belongs entirely to `inner()`'s wall and disappears the moment

`inner()` finishes running (unless a Closure is involved — a topic for

the next lesson).

## Related Theory

README.md

→ SC-005

---

# SC-M005

## Mistake

> Scope and Execution Context are the same thing.

## Correct Thinking

They are closely related, but distinct.

```
Execution Context

↓

The environment created when code RUNS
(memory, `this`, Memory Creation, Execution phases)

--------------------------

Scope

↓

The RULES that decide which variables
that environment is allowed to SEE
```

Every Execution Context carries a Scope with it, but Scope itself is

determined by the physical structure of your code — it exists even

before any code actually runs.

## Related Theory

README.md

→ SC-001

Related Lesson

005-ExecutionContext

---

# SC-M006

## Mistake

> Shadowing overwrites or destroys the outer variable.

## Wrong Thinking

```javascript
var role = "Guest";

function admin() {
    var role = "Admin";

    console.log(role);
}

admin();

console.log(role); // developers expect "Admin" here too
```

## Correct Thinking

Shadowing creates a **separate** variable inside the inner scope with

the same name. It temporarily **hides** the outer variable for any code

running inside that inner wall — it does not modify or destroy it.

Once you step back outside that inner wall, the outer variable is

completely untouched.

Output above: `"Admin"`, then `"Guest"` — two independent variables.

## Related Theory

README.md

→ SC-003

## Related Example

SC-E008

---

# SC-M007

## Mistake

> Every `{ }` in JavaScript creates a new Scope, regardless of keyword.

## Correct Thinking

A `{ }` block only creates a meaningful boundary for `let` and `const`.

For `var`, that same `{ }` is completely transparent — `var` walks

straight through it as if it wasn't there.

```javascript
{
    var a = 1; // NOT block-scoped — leaks out
    let b = 2; // IS block-scoped — stays inside
}

console.log(a); // 1
console.log(b); // ReferenceError
```

## Related Theory

README.md

→ SC-003

---

# SC-M008

## Mistake

> If a variable "isn't found," it means it was never declared anywhere.

## Correct Thinking

A `ReferenceError` from a Scope issue doesn't always mean the variable

was never declared — it might exist perfectly fine, just inside a wall

your current code can't see into.

This is a different situation from accessing a truly undeclared

variable, even though both can throw similarly worded errors.

Always ask: "does this variable exist ANYWHERE that my current

position's Scope Chain can reach?" — not just "does it exist at all,

somewhere in the file?"

## Related Theory

README.md

→ SC-005

---

# SC-M009

## Mistake

> Function parameters follow different Scope rules than regular variables.

## Correct Thinking

Function parameters are simply variables scoped to that function —

they follow the exact same Function Scope rules as anything declared

with `var` inside that function's body.

```javascript
function greet(name) {
    console.log(name); // Function-scoped, same as "var name"
}

console.log(name); // ReferenceError — outside greet()'s wall
```

There's no separate rulebook for parameters — they're just pre-filled

local variables.

## Related Theory

README.md

→ SC-003

---

# SC-M010

## Mistake

> Memorizing "var is function-scoped, let/const are block-scoped" means understanding Scope.

## Reality

That sentence gets you through easy questions, but collapses the

moment you're asked to trace a lookup through three or four nested

functions and blocks at once, or explain why a function still "remembers"

variables from where it was written even when called somewhere else entirely.

If you can draw the actual nested walls of any piece of code — Global,

each function, each block — and trace a lookup outward wall by wall,

you understand Scope. If you can only recite the one-line rule,

you've memorized a fact, not built a mental model.

---

# Self Check

Can you explain WHY these are wrong?

□ Scope is decided by which function calls another function.

□ `var` respects block boundaries the same way `let`/`const` do.

□ A declared variable is available everywhere in the file.

□ An outer function can reach into an inner function's local variables.

□ Scope and Execution Context are the exact same thing.

□ Shadowing overwrites or destroys the outer variable.

□ Every `{ }` creates a meaningful boundary, regardless of keyword.

□ A "not found" variable always means it was never declared anywhere.

□ Function parameters follow different rules than regular local variables.

If you answered "No" to any of them,

go back to the corresponding section in `README.md`.

---

# Related Files

📖 Theory

README.md

---

💻 Examples

examples.js

---

❓ Questions

questions.md

---

✍ Practice

practice.js

---

# 📚 Continue Learning

**⬅ Previous:** [practice.js](./practice.js)

**➡ Next:** [cheatsheet.md](./cheatsheet.md)

---

# 🧭 Topic Learning Path

- [x] README.md
- [x] thinking.md
- [x] decision-tree.md
- [x] examples.js
- [x] questions.md
- [x] practice.js
- [x] mistakes.md ← You are here
- [ ] cheatsheet.md