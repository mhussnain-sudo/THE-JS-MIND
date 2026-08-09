> 🏠 [THE JS MIND](../../README.md)
> →
> [01-Core-Javascript](../README.md)
> →
> [008-Scope](./README.md)
> →
> **cheatsheet.md**

# Scope Cheat Sheet

> Topic ID: SC
>
> Purpose:
>
> One-page revision before interviews.
>
> If you don't understand something here,
> go back to README.md.

---

# What is Scope?

The boundary system that decides

where a variable is visible,

and where it isn't.

Related Theory

SC-001

---

# Why does it exist?

Without it, every variable would

share one giant space —

constant naming collisions.

Related Theory

SC-002

---

# The One Sentence Rule

```
A variable is visible inside

the wall it was born in —

and any wall nested deeper inside that.

Never outside. Never sideways.
```

---

# Three Types of Scope

| Type | Created By | Visible Where |
| ---- | ---------- | -------------- |
| Global | Outside all functions/blocks | Everywhere in the file |
| Function | Any function body | Inside that function (+ nested functions) |
| Block | `{ }` with `let`/`const` inside | Inside that exact block only |

Related Theory

SC-003

---

# var vs let/const — Block Behavior

```
var

↓

IGNORES if / for / bare { } blocks

↓

Only stops at nearest FUNCTION

--------------------------

let / const

↓

RESPECTS every { } block

↓

Stops at the exact block it's declared in
```

Related Theory

SC-003

---

# Lexical Scope — The Golden Rule

```
Visibility is decided by

WHERE a function is WRITTEN

↓

NOT by where it is CALLED from
```

```javascript
var color = "blue";

function printColor() {
    console.log(color); // written in Global
}

function changeAndPrint() {
    var color = "red";
    printColor(); // calling doesn't change what printColor sees
}

changeAndPrint(); // "blue"
```

Related Theory

SC-004

---

# The Scope Chain

```
Variable not found locally?

↓

Search the ENCLOSING scope

↓

Still not found?

↓

Keep going outward

↓

Reach Global Scope

↓

Found → use it

Not found → ReferenceError
```

Direction: **always outward, never inward, never sideways.**

Related Theory

SC-005

---

# Shadowing

```
Inner scope declares

SAME NAME as outer scope

↓

Inner variable temporarily HIDES the outer one

↓

Outer variable is UNCHANGED

↓

Once you leave the inner wall,
outer variable is back to normal
```

---

# Mental Model

```
File Starts

↓

Global Wall

↓

Function Wall (nested inside Global)

↓

Block Wall (nested inside Function)

↓

Inner walls see outward.

Outer walls never see inward.
```

---

# Remember

Scope

❌ Decided by who calls a function

✅ Decided by where a function is written (Lexical Scope)

❌ var respects block boundaries

✅ Only let/const respect block boundaries

❌ Outer scope can reach into inner scope

✅ Only inner scope can reach into outer scope

❌ Shadowing overwrites the outer variable

✅ Shadowing only hides it temporarily

---

# Interview Keywords

If you see

```
variable declared inside a function,

used outside it
```

Think

```
Function Scope → ReferenceError
```

---

If you see

```
let/const inside if/for,

used outside that block
```

Think

```
Block Scope → ReferenceError
```

---

If you see

```
var inside if/for,

used outside that block
```

Think

```
var ignores blocks → still visible
```

---

If you see

```
a function reading a variable

it didn't declare itself
```

Think

```
Lexical Scope → check WHERE it was written
```

---

# The Golden Thinking Process

```
Question

↓

Draw Every Wall (Global / Function / Block)

↓

Where Was It Declared?

↓

Where Is It Accessed?

↓

Same or Nested-Deeper Wall? → Visible

↓

Different/Outer Wall? → Walk Outward (Scope Chain)

↓

Found → Use It

↓

Never Found → ReferenceError

↓

Explain WHY
```

---

# Common Mistakes

❌ Scope depends on which function calls another.

❌ var respects block boundaries.

❌ A declared variable works everywhere in the file.

❌ Outer scope can read inner scope's variables.

❌ Scope and Execution Context are identical.

❌ Shadowing modifies the outer variable.

❌ Every `{ }` matters, regardless of keyword.

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

Scope

↓

Boundary system: Global, Function, Block

↓

var → function-scoped, ignores blocks

↓

let / const → block-scoped, respects every { }

↓

Lexical Scope → decided by WHERE written, not WHERE called

↓

Scope Chain → searches outward only, never inward

↓

Shadowing → inner variable hides outer, doesn't destroy it

If you can explain this flow,

you understand Scope.

# 📚 Continue Learning

**⬅ Previous:** [mistakes.md](./mistakes.md)

**➡ Next:** [009-Closures](../009-Closures/README.md)

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