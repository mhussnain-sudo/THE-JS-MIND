> 🏠 [THE JS MIND](../../README.md)
> →
> [01-Core-Javascript](../README.md)
> →
> [005-ExecutionContext](./README.md)
> →
> **decision-tree.md**

# Execution Context Decision Tree

> **Topic ID:** EC
>
> This file teaches you how to recognize Execution Context questions before writing any code.
>
> Related Theory:
>
> - EC-001 — What is Execution Context
> - EC-002 — Why JavaScript Creates It
> - EC-003 — Memory Creation Phase
>
> See: `README.md`

---

# Goal

When you see a JavaScript question, don't immediately solve it.

First identify what JavaScript concept is being tested.

Your goal is to recognize Execution Context questions within a few seconds.

---

# Decision Tree

```
JavaScript Question

        │

        ▼

Does the question ask for output?

        │
        ├── No
        │       │
        │       ▼
        │   Read the question normally.
        │
        ▼

Yes

        │

        ▼

Is a variable used before it is declared?

        │
        ├── Yes
        │       │
        │       ▼
        │   Think:
        │
        │   Execution Context
        │
        │   ↓
        │
        │   Memory Creation Phase
        │
        ▼

No

        │

        ▼

Is a function called before it is declared?

        │
        ├── Yes
        │       │
        │       ▼
        │   Think:
        │
        │   Function Declaration
        │
        │   ↓
        │
        │   Memory Creation
        │
        ▼

No

        │

        ▼

Is let or const being accessed before initialization?

        │
        ├── Yes
        │       │
        │       ▼
        │   Think:
        │
        │   TDZ
        │
        │   ↓
        │
        │   Execution Context
        │
        ▼

No

        │

        ▼

Execution Context is probably NOT the main topic.
```

---

# Recognition Clues

If you notice these clues,

your brain should immediately think

```
Execution Context
```

### Clue 1

```javascript
console.log(a);

var a = 10;
```

Think

```
Memory Creation
```

Related Theory

EC-003

---

### Clue 2

```javascript
hello();

function hello() {}
```

Think

```
Function stored
during Memory Creation
```

Related Theory

EC-003

---

### Clue 3

```javascript
console.log(age);

let age = 22;
```

Think

```
TDZ

↓

Execution Context
```

Related Theory

EC-003

---

### Clue 4

```
Output based questions
```

Always ask

```
Has JavaScript prepared memory yet?
```

---

# Decision Framework

Every Execution Context problem should follow this order.

```
Read Question

↓

Identify Variables

↓

Identify Functions

↓

Identify Keyword

(var / let / const)

↓

Imagine Memory

↓

Start Execution

↓

Trace Line by Line

↓

Predict Output
```

Never skip Memory Creation.

---

# Choosing the Correct Thinking Path

## Situation 1

Variable before declaration

Choose

```
Execution Context

↓

Memory Creation
```

---

## Situation 2

Function before declaration

Choose

```
Execution Context

↓

Function Declaration
```

---

## Situation 3

ReferenceError before initialization

Choose

```
Execution Context

↓

TDZ
```

---

## Situation 4

Function Execution

Choose

```
Global Execution Context

↓

Function Execution Context
```

---

# What NOT To Think

Wrong

```
console.log()

↓

undefined
```

Correct

```
Execution Context

↓

Memory Creation

↓

var

↓

undefined

↓

Execution

↓

console.log()
```

The output is a consequence.

Not the starting point.

---

# Fast Interview Recognition

When an interviewer writes code,

don't read the code first.

Look for clues.

### Variable before declaration

↓

Execution Context

---

### Function before declaration

↓

Execution Context

---

### let / const before initialization

↓

Execution Context + TDZ

---

### Output Prediction

↓

Execution Context

↓

Memory

↓

Execution

---

# The JS MIND Rule

Never predict the output first.

Always predict the memory first.

Memory explains execution.

Execution explains output.

---

# Summary

Whenever you see JavaScript code,

your thinking process should become

```
Question

↓

Execution Context?

↓

Yes

↓

Memory Creation

↓

Execution

↓

Output

↓

Explain WHY
```

If you can follow this process,

you'll stop memorizing JavaScript and start understanding it.

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