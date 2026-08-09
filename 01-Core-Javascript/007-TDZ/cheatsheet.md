> 🏠 [THE JS MIND](../../README.md)
> →
> [01-Core-Javascript](../README.md)
> →
> [007-TDZ](./README.md)
> →
> **cheatsheet.md**

# TDZ Cheat Sheet

> Topic ID: TDZ
>
> Purpose:
>
> One-page revision before interviews.
>
> If you don't understand something here,
> go back to README.md.

---

# What is the TDZ?

The time window between

"this variable is hoisted"

and

"this variable is initialized."

Related Theory

TDZ-001

---

# Why does it exist?

`var` failed silently with `undefined`.

`let` / `const` fail loudly instead —

exactly where the mistake happens.

Related Theory

TDZ-002

---

# The One Sentence Rule

```
Hoisted ≠ Initialized.

The gap between them

is the Temporal Dead Zone.
```

---

# The Three-Stage Lifecycle

```
Stage 1

Uninitialized

(TDZ starts)

↓

Stage 2

Initialized

(declaration line runs, TDZ ends)

↓

Stage 3

Assigned / Reassigned

(let only — const stops at Stage 2)
```

Related Theory

TDZ-003

---

# TDZ Table

| Situation | Result |
| --------- | ------ |
| Access `let`/`const` before declaration line | `ReferenceError` |
| Access `let`/`const` after declaration line | Normal value |
| `typeof` on a TDZ variable | `ReferenceError` |
| `typeof` on a truly undeclared variable | `"undefined"` (safe) |
| Access `var` before declaration line | `undefined` (no error) |
| `const` before initialization | Same as `let` — `ReferenceError` |

Remember

Before the line → error.

After the line → normal.

---

# typeof — The Trap

```
typeof on UNDECLARED variable

↓

Safe → "undefined"

--------------------------

typeof on a TDZ variable (hoisted, uninitialized)

↓

NOT safe → ReferenceError
```

The variable existing (even locked)

is enough to break `typeof`'s usual safety.

Related Theory

TDZ-004

---

# Error Message Cheat

```
"Cannot access '<name>' before initialization"

↓

TDZ error — variable EXISTS, just not ready

--------------------------

"<name> is not defined"

↓

Undeclared error — variable doesn't exist anywhere
```

Read the exact message. It tells you which situation you're in.

Related Theory

TDZ-001

---

# Scope Reminder

```
Every { } block

↓

Its OWN scope

↓

Its OWN independent TDZ

per let/const declared inside it
```

Being past one `let` declaration

does NOT make other `let`/`const` variables safe.

Related Theory

TDZ-005

---

# Loops Reminder

```
for (let i = 0; ...) { }

↓

Fresh "i" binding EVERY iteration

↓

Each has its own tiny TDZ

↓

Ends before that iteration's body runs

↓

After the loop → i is OUT OF SCOPE
(NOT a TDZ error — a scope error)
```

Related Theory

TDZ-005

---

# Mental Model

```
Scope Begins

↓

let / const Hoisted, Uninitialized

↓

━━━━━━━ TDZ ━━━━━━━

↓

Declaration Line Executes

↓

Initialized, TDZ Ends

↓

Behaves Like Any Normal Variable
```

---

# Remember

TDZ

❌ let/const are not hoisted

✅ They ARE hoisted, just not initialized

❌ typeof is always safe

✅ typeof fails inside the TDZ

❌ const skips the TDZ

✅ const has the exact same TDZ as let

❌ One global TDZ per file

✅ Every block has its own TDZ

---

# Interview Keywords

If you see

```
console.log()

before let/const declaration
```

Think

```
TDZ → ReferenceError
```

---

If you see

```
typeof

on a let/const before declaration
```

Think

```
Still throws → ReferenceError
```

---

If you see

```
access AFTER
the declaration line
```

Think

```
TDZ already ended → Normal
```

---

# The Golden Thinking Process

```
Question

↓

Find the Declaration Line

↓

Find the Access Point

↓

Before or After?

↓

Before → ReferenceError

↓

After → Normal Behavior

↓

Explain WHY
```

---

# Common Mistakes

❌ let/const are not hoisted.

❌ TDZ is a bug.

❌ typeof is always safe.

❌ const behaves differently from let before initialization.

❌ There's only one TDZ per file.

❌ TDZ error and undeclared error are the same thing.

❌ Loop's let keeps the same TDZ every iteration.

---

# Related Files

Theory

README.md

Thinking

thinking.md

Decision Tree

decision-tree.md

Examples

examples.js

Questions

questions.md

Practice

practice.js

Mistakes

mistakes.md

---

# 30 Second Revision

TDZ

↓

Gap between Hoisted and Initialized

↓

let / const → uninitialized until declaration line runs

↓

Before line → ReferenceError

↓

After line → Normal

↓

typeof does NOT protect you here

↓

const = same TDZ as let

↓

Every block has its own TDZ

↓

var never has a TDZ

If you can explain this flow,

you understand the Temporal Dead Zone.

# 📚 Continue Learning

**⬅ Previous:** [mistakes.md](./mistakes.md)

**➡ Next:** [008-Scope](../008-Scope/README.md)

---

# 🧭 Topic Learning Path

- [x] README.md
- [x] thinking.md
- [x] decision-tree.md
- [x] examples.js
- [x] questions.md
- [x] practice.js
- [x] mistakes.md
- [x] cheatsheet.md ← THE END