# Common Mistakes

> **Topic ID:** EC
>
> Purpose:
>
> This file documents the most common misconceptions developers have about
> Execution Context.
>
> Every mistake references the theory explained in `README.md`.
>
> Don't memorize these mistakes.
>
> Understand WHY they are wrong.

---

# EC-M001

## Mistake

> JavaScript executes code immediately.

## Why Developers Think This

JavaScript reads code from top to bottom, so it feels like line 1 executes immediately.

## Correct Thinking

JavaScript **does not** begin executing immediately.

Before execution starts, JavaScript creates a **Global Execution Context**.

It scans the entire file, creates memory for variables, stores function declarations, and prepares the environment.

Only after preparation does execution begin.

## Visual Thinking

```
JavaScript Starts

↓

Create Global Execution Context

↓

Memory Creation Phase

↓

Execution Phase
```

## Related Theory

README.md

→ EC-001

→ EC-002

→ EC-003

## Related Example

EC-E001

## Related Practice

EC-P001

---

# EC-M002

## Mistake

> Hoisting moves variables to the top.

## Why Developers Think This

Many tutorials explain hoisting as if JavaScript physically rewrites your code.

This creates the wrong mental model.

## Correct Thinking

Nothing moves.

JavaScript simply creates memory before execution.

The code stays exactly where you wrote it.

The memory changes—not the code.

## Wrong Mental Model

```
Code Moves

↓

Hoisting
```

## Correct Mental Model

```
Code Stays

↓

Memory Is Prepared

↓

Execution Starts
```

## Related Theory

README.md

→ EC-003

## Related Example

EC-E001

---

# EC-M003

## Mistake

> var already contains its assigned value during Memory Creation.

## Wrong Thinking

```javascript
var age = 20;
```

Developers imagine

```
age

↓

20
```

during Memory Creation.

## Correct Thinking

Memory Creation only creates the variable.

The assignment happens later.

During Memory Creation

```
age

↓

undefined
```

During Execution

```
age

↓

20
```

These are two different operations.

## Related Theory

README.md

→ EC-003

---

# EC-M004

## Mistake

> Function declarations execute during Memory Creation.

## Wrong Thinking

```
Memory Creation

↓

Function Runs
```

## Correct Thinking

Functions are **stored** during Memory Creation.

They are **executed only when called**.

Memory Creation

↓

Store Function

↓

Execution

↓

Call Function

↓

Run Function

## Related Theory

README.md

→ EC-003

## Related Example

EC-E002

---

# EC-M005

## Mistake

> let is not hoisted.

## Why This Happens

People hear

> "let isn't hoisted."

This is an oversimplification.

## Correct Thinking

`let` is created during Memory Creation.

However,

it remains uninitialized until execution reaches its declaration.

This period is called the Temporal Dead Zone (TDZ).

So saying

> "let isn't hoisted"

is technically incorrect.

A better statement is

> "let is hoisted but cannot be accessed before initialization."

## Related Theory

README.md

→ EC-003

## Related Example

EC-E003

---

# EC-M006

## Mistake

> const behaves differently because it isn't hoisted.

## Correct Thinking

`const` follows the same creation process as `let`.

It is created during Memory Creation.

It remains inside the TDZ until initialization.

The only difference is that once initialized, it cannot be reassigned.

## Related Theory

README.md

→ EC-003

## Related Example

EC-E004

---

# EC-M007

## Mistake

> undefined and ReferenceError mean the same thing.

## Wrong Thinking

```
undefined

=

ReferenceError
```

## Correct Thinking

They represent two completely different situations.

### undefined

The variable exists.

Its value has not been assigned yet.

Example

```javascript
console.log(a);

var a = 10;
```

---

### ReferenceError

The variable cannot be accessed.

Example

```javascript
console.log(a);

let a = 10;
```

One means

```
Exists

↓

No Value Yet
```

The other means

```
Cannot Access
```

## Related Theory

README.md

→ EC-003

---

# EC-M008

## Mistake

> Every variable belongs to the Global Execution Context.

## Correct Thinking

Variables belong to the Execution Context in which they are declared.

Example

```javascript
var a = 10;

function test() {

    var b = 20;

}
```

```
Global Execution Context

a

--------------

Function Execution Context

b
```

Each Execution Context has its own memory.

## Related Theory

README.md

→ EC-004

→ EC-005

---

# EC-M009

## Mistake

> JavaScript only creates one Execution Context.

## Correct Thinking

JavaScript creates

- One Global Execution Context.

- One new Function Execution Context every time a function is called.

Example

```javascript
function one(){}

function two(){}

one();

two();
```

Execution Contexts

```
Global

↓

one()

↓

two()
```

Each function call creates a new environment.

## Related Theory

README.md

→ EC-005

---

# EC-M010

## Mistake

> Memorizing outputs means understanding JavaScript.

## Reality

Interviewers don't care if you remember

```
undefined
```

They care whether you can explain

```
Execution Context

↓

Memory Creation

↓

Execution

↓

Output
```

If you understand the process,

you can solve new questions you've never seen before.

That's real understanding.

---

# Self Check

Can you explain WHY these are wrong?

□ Hoisting moves code.

□ JavaScript executes immediately.

□ var gets its value during Memory Creation.

□ let isn't hoisted.

□ Functions execute during Memory Creation.

□ undefined and ReferenceError are the same.

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

# Next Step

Open:

`cheatsheet.md`

You'll condense everything you've learned into a one-page revision guide.