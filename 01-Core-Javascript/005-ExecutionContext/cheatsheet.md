# Execution Context Cheat Sheet

> Topic ID: EC
>
> Purpose:
>
> One-page revision before interviews.
>
> If you don't understand something here,
> go back to README.md.

---

# What is Execution Context?

JavaScript's execution environment.

It stores

- Variables
- Functions
- Scope
- this

Related Theory

EC-001

---

# Why does JavaScript create it?

To prepare memory before executing code.

Related Theory

EC-002

---

# Two Phases

```
Execution Context

↓

Memory Creation

↓

Execution
```

Related Theory

EC-003

---

# Memory Creation

JavaScript scans the entire file.

Creates memory.

Does NOT execute code.

---

# Memory Table

| Keyword  | Memory Creation |
| -------- | --------------- |
| var      | undefined       |
| function | Entire Function |
| let      | TDZ             |
| const    | TDZ             |

Remember

Creation ≠ Assignment

---

# Execution Phase

Runs code line by line.

Assignments happen here.

Functions execute only when called.

---

# Global Execution Context

Created once.

Exists until the program finishes.

---

# Function Execution Context

Created

Every

Single

Function Call

Destroyed after the function returns.

---

# Mental Model

```
Read File

↓

Prepare Memory

↓

Execute Code
```

---

# Remember

Hoisting

❌ Code moves

✅ Memory is prepared

---

# undefined vs ReferenceError

undefined

↓

Variable exists.

No value yet.

---

ReferenceError

↓

Cannot access variable.

Usually because of TDZ.

---

# Interview Keywords

If you see

```
console.log()

before declaration
```

Think

Execution Context

---

If you see

```
Function

before declaration
```

Think

Memory Creation

---

If you see

```
let

before declaration
```

Think

TDZ

---

# The Golden Thinking Process

```
Question

↓

Execution Context

↓

Memory Creation

↓

Execution

↓

Output

↓

Explain WHY
```

---

# Common Mistakes

❌ Hoisting moves code.

❌ let isn't hoisted.

❌ JavaScript executes immediately.

❌ Functions execute during Memory Creation.

---

# Related Files

Theory

README.md

Practice

practice.js

Examples

examples.js

Questions

questions.md

Mistakes

mistakes.md

---

# 30 Second Revision

Execution Context

↓

Memory Creation

↓

var → undefined

↓

function → stored

↓

let → TDZ

↓

const → TDZ

↓

Execution

↓

Assignment

↓

Function Call

↓

Output

If you can explain this flow,

you understand Execution Context.
