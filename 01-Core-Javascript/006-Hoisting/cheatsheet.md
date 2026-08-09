> 🏠 [THE JS MIND](../../README.md)
> →
> [01-Core-Javascript](../README.md)
> →
> [006-Hoisting](./README.md)
> →
> **cheatsheet.md**

# Hoisting Cheat Sheet

> Topic ID: HO
>
> Purpose:
>
> One-page revision before interviews.
>
> If you don't understand something here,
> go back to README.md.

---

# What is Hoisting?

The observable result of the Memory Creation Phase.

Declarations are reserved in memory

before execution begins.

Nothing moves.

Related Theory

HO-001

---

# Why does it exist?

Because JavaScript scans the entire file

before running any line.

By the time execution starts,

memory is already prepared.

Related Theory

HO-002

---

# The One Sentence Rule

```
Hoisting is not a separate step.

It is the NAME for what

Memory Creation already does.
```

---

# Hoisting Table

| Declaration | Hoisted? | Value Before Execution | Early Access |
| ----------- | -------- | ----------------------- | ------------ |
| var | Yes | undefined | undefined |
| function (Declaration) | Yes | Entire Function | Works normally |
| let | Yes | Uninitialized (TDZ) | ReferenceError |
| const | Yes | Uninitialized (TDZ) | ReferenceError |
| var f = function(){} | Only the variable | undefined | TypeError |
| let/const f = () => {} | Only the variable | TDZ | ReferenceError |

Remember

Hoisted ≠ Usable

---

# Function Declaration vs var (Same Name)

```
Function Declaration

↓

ALWAYS wins during Memory Creation

↓

var line only performs
the ASSIGNMENT later
```

Related Theory

HO-003

HO-004

---

# var Scope Reminder

```
var

↓

Function-Scoped

↓

Ignores if / for / block { }

↓

Hoists to top of nearest FUNCTION
```

Not to the top of the block.

Related Theory

HO-003

---

# Mental Model

```
Read File

↓

Prepare Memory

↓

var → undefined

↓

function → stored fully

↓

let/const → TDZ

↓

Execute Code In Original Order
```

---

# Remember

Hoisting

❌ Code moves

✅ Memory is prepared

❌ Every declaration behaves the same

✅ Each keyword has its own rule

---

# undefined vs ReferenceError vs TypeError

undefined

↓

var accessed early. Exists, no value yet.

---

ReferenceError

↓

let / const accessed early (TDZ).

Also: calling a let/const function value too early.

---

TypeError

↓

var holding a function, called before assignment.

`undefined is not a function`

---

# Interview Keywords

If you see

```
console.log()

before var declaration
```

Think

```
Hoisting → undefined
```

---

If you see

```
console.log()

before let/const declaration
```

Think

```
Hoisting → TDZ → ReferenceError
```

---

If you see

```
Function called

before it appears
```

Think

```
Is it a Function Declaration?

Yes → works

No (expression/arrow) → check the keyword
```

---

# The Golden Thinking Process

```
Question

↓

Identify Declaration Keyword

↓

Recall Its Memory Creation Rule

↓

Predict Value At Access Point

↓

Trace Execution

↓

Output

↓

Explain WHY
```

---

# Common Mistakes

❌ Hoisting moves code to the top.

❌ let and const are not hoisted.

❌ var already holds its value during Memory Creation.

❌ Function Expressions hoist like Function Declarations.

❌ var respects block scope.

❌ File order alone decides var vs function priority.

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

Hoisting

↓

Name for Memory Creation Phase

↓

var → undefined

↓

function → fully stored

↓

let / const → TDZ

↓

function value in var/let → only variable hoisted

↓

Function Declaration beats var (same name)

↓

var is function-scoped, not block-scoped

↓

Nothing ever moves

If you can explain this flow,

you understand Hoisting.

# 📚 Continue Learning

**⬅ Previous:** [mistakes.md](./mistakes.md)

**➡ Next:** [007-TDZ](../007-TDZ/README.md)

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