# Interview Traps

> **THE JS MIND Framework**
>
> Purpose
>
> This document collects the most common JavaScript interview traps.
>
> These are not difficult because of syntax.
>
> They are difficult because they expose incorrect mental models.
>
> Every trap links back to the lesson where it is fully explained.
>
> Never memorize the answer.
>
> Understand the reasoning.

---

# How To Use This File

Every trap contains

- Difficulty
- What the interviewer is testing
- Common Wrong Answer
- Correct Thinking
- Related Lesson
- Related Theory
- Follow-up Questions

If you cannot explain **WHY**,

you haven't mastered the topic yet.

---

# Trap EC-T001

## Difficulty

⭐ Easy

## Topic

Execution Context

## Interview Question

Predict the output.

```javascript
console.log(a);

var a = 10;
```

---

## Most Common Wrong Answer

```
10
```

or

```
JavaScript moved var to the top.
```

---

## Correct Thinking

JavaScript created memory first.

During Memory Creation

```
a

↓

undefined
```

Execution begins later.

```
console.log(a)

↓

undefined

↓

a = 10
```

Nothing moved.

Memory was prepared.

---

## Interviewer Is Testing

- Execution Context
- Memory Creation Phase
- var
- Hoisting

---

## Follow-up Questions

Why isn't the output 10?

Why isn't it a ReferenceError?

What exists in memory before execution begins?

---

## Related Lesson

01-Core-Javascript/

005-ExecutionContext/

README.md

Sections

- EC-001
- EC-002
- EC-003

Related Example

EC-E001

Related Practice

EC-P001

---

# Trap EC-T002

## Difficulty

⭐ Easy

## Topic

Execution Context

## Interview Question

Predict the output.

```javascript
sayHello();

function sayHello() {
  console.log("Hello");
}
```

---

## Most Common Wrong Answer

```
Error
```

---

## Correct Thinking

Function Declarations are stored completely during Memory Creation.

Execution starts afterward.

The function already exists.

---

## Interviewer Is Testing

- Function Declaration
- Memory Creation
- Execution Context

---

## Follow-up Questions

Would this still work if it were a Function Expression?

Why?

---

## Related Lesson

Execution Context

README

EC-003

Related Example

EC-E002

---

# Trap EC-T003

## Difficulty

⭐⭐ Medium

## Topic

Execution Context + TDZ

## Interview Question

Predict the output.

```javascript
console.log(age);

let age = 22;
```

---

## Most Common Wrong Answer

```
undefined
```

---

## Correct Thinking

The variable exists.

It has NOT been initialized.

It is inside the

Temporal Dead Zone.

Accessing it throws

```
ReferenceError
```

---

## Interviewer Is Testing

- Execution Context
- TDZ
- let
- Initialization

---

## Follow-up Questions

Does let get hoisted?

Why does var behave differently?

---

## Related Lesson

Execution Context

README

EC-003

Next Lesson

007-TDZ

Related Example

EC-E003

---

# Trap EC-T004

## Difficulty

⭐⭐ Medium

## Topic

Execution Context

## Interview Question

Is Hoisting real?

---

## Most Common Wrong Answer

```
JavaScript moves variables to the top.
```

---

## Correct Thinking

Nothing moves.

The source code never changes.

JavaScript prepares memory before execution.

Hoisting is a way to describe that preparation.

---

## Interviewer Is Testing

Mental Model

Not syntax.

---

## Follow-up Questions

If nothing moves,

why does var become undefined?

---

## Related Lesson

Execution Context

README

EC-003

Mistakes

EC-M002

---

# Trap EC-T005

## Difficulty

⭐⭐⭐ Hard

## Topic

Execution Context

## Interview Question

Predict the output.

```javascript
console.log(a);

var a = 10;

function test() {
  console.log(a);

  var a = 20;

  console.log(a);
}

test();

console.log(a);
```

---

## Most Common Wrong Answer

```
undefined

10

20

20
```

---

## Correct Thinking

There are TWO Execution Contexts.

Global

↓

Function

Each has its own Memory Creation Phase.

The local

```
var a
```

inside

```
test()
```

shadows the global variable.

---

## Interviewer Is Testing

- Global Execution Context
- Function Execution Context
- Variable Shadowing
- Memory Creation
- Hoisting

---

## Follow-up Questions

How many Execution Contexts are created?

Why doesn't the function use the global variable?

---

## Related Lesson

Execution Context

README

EC-004

EC-005

Related Example

EC-E007

Related Practice

EC-P007

---

# Golden Rule

When an interviewer asks

```
Predict the Output
```

Do NOT think

```
Output
```

Think

```
Execution Context

↓

Memory Creation

↓

Execution

↓

Output

↓

WHY
```

That is how senior developers solve JavaScript questions.

---

# Next Traps

This file grows as THE JS MIND grows.

Upcoming Topics

- Variables
- Data Types
- Type Conversion
- Hoisting
- TDZ
- Scope
- Closures
- Objects
- Arrays
- this
- Promises
- Event Loop
- Async/Await
- Prototypes
