> 🏠 [THE JS MIND](../../README.md)
> →
> [01-Core-Javascript](../README.md)
> →
> [006-Hoisting](./README.md)
> →
> **mistakes.md**

# Common Mistakes

> **Topic ID:** HO
>
> Purpose:
>
> This file documents the most common misconceptions developers have about
> Hoisting.
>
> Every mistake references the theory explained in `README.md`.
>
> Don't memorize these mistakes.
>
> Understand WHY they are wrong.

---

# HO-M001

## Mistake

> Hoisting means JavaScript moves your variables and functions to the top of the file.

## Why Developers Think This

Because the *behavior* looks exactly like movement — you can use something

before the line where you wrote it, so it "feels" like it jumped upward.

## Correct Thinking

Nothing moves.

Not one character of your source code changes position.

JavaScript creates a **Global Execution Context**, and during its

**Memory Creation Phase**, it reserves memory for declarations in advance.

That reservation is what makes early access possible — not movement.

## Visual Thinking

```
Wrong

Code Physically Moves

↓

Hoisting

--------------------------

Correct

Code Stays Exactly Where You Wrote It

↓

Memory Is Reserved In Advance

↓

Execution Happens In Original Order
```

## Related Theory

README.md

→ HO-001

→ HO-002

## Related Example

HO-E001

## Related Practice

HO-P001

---

# HO-M002

## Mistake

> `let` and `const` are not hoisted.

## Why Developers Think This

Because accessing them early throws an error, developers assume

"error = not hoisted." That conclusion is a shortcut, and it's wrong.

## Correct Thinking

`let` and `const` **are** hoisted.

Memory is reserved for them during Memory Creation — exactly like `var`.

The difference is that they are **not initialized** with any value.

They remain locked inside the **Temporal Dead Zone** until execution

reaches their declaration line.

A more accurate statement is:

> "`let` and `const` are hoisted, but not initialized."

## Wrong Mental Model

```
let / const

↓

Not Hoisted At All
```

## Correct Mental Model

```
let / const

↓

Hoisted

↓

Left Uninitialized (TDZ)

↓

Unlocked Only At Declaration Line
```

## Related Theory

README.md

→ HO-005

## Related Example

HO-E003

HO-E004

---

# HO-M003

## Mistake

> `var` already holds its assigned value during Memory Creation.

## Wrong Thinking

```javascript
var price = 250;
```

Developers imagine

```
price

↓

250
```

already existing before execution starts.

## Correct Thinking

Memory Creation only creates the variable and sets it to `undefined`.

The actual value (`250`) is assigned later, during the Execution Phase,

only once the engine physically reaches that line.

During Memory Creation

```
price

↓

undefined
```

During Execution

```
price

↓

250
```

## Related Theory

README.md

→ HO-003

## Related Example

HO-E001

---

# HO-M004

## Mistake

> Function Expressions and Arrow Functions hoist the same way as Function Declarations.

## Wrong Thinking

```javascript
sayBye();

var sayBye = function () {
    console.log("Bye");
};
```

Developers expect this to work like a normal function call,

because "it's still a function."

## Correct Thinking

Only the **variable** (`sayBye`) is hoisted — not the function it will hold.

Since it's declared with `var`, the variable is initialized with `undefined`

during Memory Creation.

The function value is assigned later, during Execution.

Calling `undefined` as a function throws a `TypeError`.

Function Declarations are hoisted completely.

Function Expressions and Arrow Functions are not — only their container variable is.

## Related Theory

README.md

→ HO-006

## Related Example

HO-E005

HO-E006

---

# HO-M005

## Mistake

> Hoisting only happens once, at the top of the entire file.

## Correct Thinking

Hoisting happens **every time a new Execution Context is created** —

which means it happens inside every function call too, not just globally.

Each function gets its own Memory Creation Phase, scoped to that function.

Example

```javascript
function checkStock() {
    console.log(quantity);

    var quantity = 42;
}
```

`quantity` is hoisted to the top of `checkStock`, not to the top of the file.

## Related Theory

README.md

→ HO-003

## Related Example

HO-E007

---

# HO-M006

## Mistake

> `var` is hoisted to the top of the nearest block (`if`, `for`, `{}`).

## Wrong Thinking

```javascript
if (true) {
    var discount = "10%";
}

console.log(discount);
```

Developers assume `discount` only exists inside the `if` block,

similar to how `let` behaves.

## Correct Thinking

`var` is **function-scoped**, not block-scoped.

It hoists to the top of the nearest enclosing **function** (or the global scope

if there is no function) — completely ignoring block boundaries like `if`, `for`,

or bare `{}`.

`let` and `const` are block-scoped, which is one of the main reasons they

were introduced.

## Related Theory

README.md

→ HO-003

Upcoming Lesson

008-Scope

---

# HO-M007

## Mistake

> If a `var` and a `function` share the same name, whichever is written last in the file wins.

## Wrong Thinking

```javascript
console.log(typeof calculate);

function calculate() {}

var calculate = "text";

console.log(typeof calculate);
```

Developers assume file order alone decides the outcome.

## Correct Thinking

During Memory Creation, **Function Declarations always take priority**

over `var` declarations with the same name — regardless of which one

appears first or last in the file.

The `var` line, once Memory Creation is done, only performs an

**assignment** during Execution — it does not re-declare anything.

This is why `typeof calculate` is `"function"` before the `var` line executes,

and only becomes `"string"` after it.

## Related Theory

README.md

→ HO-003

→ HO-004

## Related Example

HO-E008

---

# HO-M008

## Mistake

> Accessing a hoisted `var` early and a hoisted `let` early produce the same kind of error.

## Correct Thinking

They don't.

```
var (uninitialized use)

↓

Returns undefined — NO error

--------------------------

let / const (uninitialized use)

↓

Throws ReferenceError — TDZ violation
```

These are two entirely different outcomes.

`var` gives you a placeholder value.

`let` / `const` refuse access completely until initialized.

## Related Theory

README.md

→ HO-003

→ HO-005

---

# HO-M009

## Mistake

> Hoisting is a feature you should rely on in real projects.

## Reality

Just because something is hoisted and technically "works,"

doesn't mean it should be written that way.

Relying on hoisting order makes code harder to read, harder to debug,

and easy to break during refactors.

Professional convention:

```
Declare variables and functions

↓

BEFORE using them

↓

Even though Hoisting would technically allow otherwise
```

Understanding Hoisting is about **explaining JavaScript's behavior**,

not about writing code that depends on it.

## Related Theory

README.md

→ HO-001

---

# HO-M010

## Mistake

> Memorizing "var = undefined, let/const = TDZ" means understanding Hoisting.

## Reality

Interviewers don't just want the two rules.

They want to know if you can explain **why** those two rules exist —

both are consequences of the same Memory Creation Phase, just applied

differently per keyword.

If you understand Execution Context and Memory Creation from the previous

lesson, every Hoisting rule should feel like a logical outcome —

not a separate fact to memorize.

That's the difference between reciting Hoisting

and actually understanding it.

---

# Self Check

Can you explain WHY these are wrong?

□ Hoisting physically moves code to the top of the file.

□ `let` and `const` are not hoisted at all.

□ `var` already holds its value during Memory Creation.

□ Function Expressions hoist exactly like Function Declarations.

□ Hoisting only happens once, globally.

□ `var` respects block scope like `if` and `for`.

□ File order alone decides whether `var` or `function` wins when they share a name.

□ Early access to `var` and early access to `let` throw the same kind of error.

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