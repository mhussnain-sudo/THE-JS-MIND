> 🏠 [THE JS MIND](../../README.md)
> →
> [01-Core-Javascript](../README.md)
> →
> [007-TDZ](./README.md)
> →
> **mistakes.md**

# Common Mistakes

> **Topic ID:** TDZ
>
> Purpose:
>
> This file documents the most common misconceptions developers have about
> the Temporal Dead Zone.
>
> Every mistake references the theory explained in `README.md`.
>
> Don't memorize these mistakes.
>
> Understand WHY they are wrong.

---

# TDZ-M001

## Mistake

> `let` and `const` are not hoisted — that's why they throw errors.

## Why Developers Think This

The error message doesn't mention "hoisting," and the variable seems

completely inaccessible, so it feels like it simply isn't there yet.

## Correct Thinking

`let` and `const` **are** hoisted — memory is reserved for them during

Memory Creation, exactly like `var`.

The difference is that they are not **initialized**.

They remain uninitialized inside the Temporal Dead Zone until their

declaration line runs.

If they weren't hoisted at all, JavaScript would throw

`"<name> is not defined"` — the error for a truly undeclared variable.

Instead it throws

`"Cannot access '<name>' before initialization"` —

proof that the engine already knows the variable exists.

## Visual Thinking

```
Wrong

let / const

↓

Not hoisted at all

--------------------------

Correct

let / const

↓

Hoisted

↓

Uninitialized (TDZ)

↓

Initialized once declaration line runs
```

## Related Theory

README.md

→ TDZ-001

## Related Example

TDZ-E001

## Related Practice

TDZ-P001

---

# TDZ-M002

## Mistake

> The TDZ is a bug or an inconsistency in JavaScript.

## Why Developers Think This

`var` never behaves this way, so `let`/`const` throwing errors can feel

like an unnecessary complication layered on top of a "simpler" language feature.

## Correct Thinking

The TDZ is a **deliberate safety mechanism**.

`var`'s silent `undefined` behavior allowed real bugs to hide —

code would run without crashing, but behave incorrectly.

`let`/`const` intentionally fail loudly and immediately, at the exact

point where a variable is used too early, instead of letting the mistake

slip through silently.

## Related Theory

README.md

→ TDZ-002

---

# TDZ-M003

## Mistake

> `typeof` is always a 100% safe way to check if a variable exists.

## Wrong Thinking

```javascript
console.log(typeof balance);

let balance = 1000;
```

Developers expect `typeof` to safely return `"undefined"` here,

the same way it would for a variable that was never declared.

## Correct Thinking

`typeof` is only safe for variables that don't exist **anywhere** in the

accessible scope chain.

`balance` **does** exist — it was hoisted by `let` — it's simply

uninitialized. `typeof` still has to touch that binding to determine its

type, and touching a TDZ binding always throws, no matter which operator

is doing the touching.

## Related Theory

README.md

→ TDZ-004

## Related Example

TDZ-E003

---

# TDZ-M004

## Mistake

> `const` behaves differently from `let` inside the TDZ.

## Correct Thinking

Before initialization, `const` and `let` are **identical**.

Both are hoisted.

Both are uninitialized.

Both throw the exact same `ReferenceError` if accessed early.

The only difference between them appears **after** initialization:

`let` can be reassigned, `const` cannot.

That difference has nothing to do with the TDZ itself.

## Related Theory

README.md

→ TDZ-003

## Related Example

TDZ-E002

---

# TDZ-M005

## Mistake

> The Temporal Dead Zone only exists once, at the top of the file.

## Correct Thinking

Every scope — the global scope, a function body, or even a bare `{ }`

block — creates its **own** TDZ for any `let`/`const` declared inside it.

```javascript
{
    console.log(city); // ReferenceError — this block's own TDZ

    let city = "Karachi";
}
```

There isn't one global TDZ. There are as many TDZs as there are

`let`/`const` declarations, each scoped to where that declaration lives.

## Related Theory

README.md

→ TDZ-005

## Related Example

TDZ-E004

---

# TDZ-M006

## Mistake

> Once you're past one `let` declaration in a file, you're "safe" for the rest of the code.

## Wrong Thinking

```javascript
let a = 1;

console.log(b); // developers assume this is now "safe" too

let b = 2;
```

## Correct Thinking

Every `let`/`const` variable has its **own independent** declaration line

and its own TDZ. Being past `a`'s declaration line says nothing about `b`.

`console.log(b)` above still throws, because it happens before `b`'s own

declaration line — regardless of what already happened with `a`.

## Related Theory

README.md

→ TDZ-003

---

# TDZ-M007

## Mistake

> A TDZ error and an "undeclared variable" error are the same thing.

## Wrong Thinking

```javascript
console.log(x); // let x = 1; declared later

console.log(y); // y is never declared anywhere
```

Developers assume both produce the same kind of failure —

"the variable isn't ready."

## Correct Thinking

These are two **different** errors with two different meanings.

```
TDZ Error

↓

"Cannot access 'x' before initialization"

↓

The variable EXISTS (hoisted), just not initialized yet

--------------------------

Undeclared Error

↓

"y is not defined"

↓

The variable does NOT exist anywhere in the scope chain
```

Reading the exact error message tells you which situation you're in.

## Related Theory

README.md

→ TDZ-001

---

# TDZ-M008

## Mistake

> A `let` declared inside a `for` loop keeps the same TDZ across every iteration.

## Correct Thinking

Each iteration of a loop using `let` creates a **fresh** binding,

with its own tiny TDZ that starts and ends before that iteration's

loop body even runs.

```javascript
for (let i = 0; i < 3; i++) {
    console.log(i); // safe — this iteration's TDZ already ended
}
```

This is why the loop body itself never actually "feels" the TDZ —

by the time you're inside the body, that iteration's `i` is already

initialized. The TDZ only matters if you try to access the loop

variable from somewhere **outside** the loop's own scope.

## Related Theory

README.md

→ TDZ-005

## Related Example

TDZ-E006

---

# TDZ-M009

## Mistake

> Accessing a `let` variable after its loop has finished is a TDZ error.

## Wrong Thinking

```javascript
for (let i = 0; i < 3; i++) {}

console.log(i); // developers assume: TDZ error
```

## Correct Thinking

This throws `ReferenceError: i is not defined` — **not** a TDZ error.

`let` is block-scoped to the `for` statement itself.

Once the loop finishes, `i` doesn't just become "uninitialized" —

it goes **completely out of scope**. It no longer exists at all in the

surrounding code, which is a scope issue, not a TDZ issue.

## Related Theory

README.md

→ TDZ-005

Upcoming Lesson

008-Scope

---

# TDZ-M010

## Mistake

> Memorizing "let/const throw before declaration" means understanding the TDZ.

## Reality

Interviewers don't just want the rule.

They want to know if you can explain **why** the rule exists, trace the

exact three-stage lifecycle, and distinguish a TDZ error from an

undeclared-variable error using the actual error message.

If you understand Hoisting and Execution Context from the previous

lessons, TDZ should feel like an obvious extension —

not a brand-new rule to memorize on top of everything else.

That's the difference between reciting the TDZ

and actually understanding it.

---

# Self Check

Can you explain WHY these are wrong?

□ `let`/`const` are not hoisted at all.

□ The TDZ is a bug or design flaw.

□ `typeof` is always 100% safe, even inside the TDZ.

□ `const` behaves differently from `let` before initialization.

□ There is only one global TDZ per file.

□ Being past one `let` declaration makes the rest of the file "safe."

□ A TDZ error and an undeclared-variable error are the same thing.

□ A loop's `let` keeps the same TDZ across every iteration.

□ Accessing a loop's `let` variable after the loop ends is a TDZ error.

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