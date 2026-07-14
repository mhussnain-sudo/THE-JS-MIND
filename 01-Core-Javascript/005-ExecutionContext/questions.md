# Execution Context Questions

> Topic ID : EC
>
> This file is designed for interview preparation.
>
> Do NOT memorize answers.
>
> Follow the Thinking Path.
>
> Read the related README section before checking the answer.

---

# Theory Questions

---

## EC-Q001

### Difficulty

⭐ Easy

### Category

Definition

### Question

What is an Execution Context?

### Why is this asked?

Interviewers want to know if you understand the foundation of JavaScript execution.

Most JavaScript concepts depend on this.

### Thinking Path

```

JavaScript Starts

↓

Creates Environment

↓

Stores Variables

↓

Stores Functions

↓

Executes Code

```

### See Answer

README.md

→ EC-001 — What is Execution Context

### Related Examples

EC-E001

EC-E002

### Related Practice

EC-P001

---

## EC-Q002

Difficulty

⭐ Easy

Category

Concept

Question

Why does JavaScript create an Execution Context?

Why is this asked?

To check whether you understand WHY JavaScript prepares memory.

Thinking Path

```

Read File

↓

Prepare Memory

↓

Execution

```

See Answer

README.md

→ EC-002 — Why JavaScript Creates It

Related Examples

EC-E001

EC-E002

Related Practice

EC-P002

---

## EC-Q003

Difficulty

⭐ Easy

Category

Concept

Question

What are the two phases of an Execution Context?

Thinking Path

```

Execution Context

↓

Memory Creation

↓

Execution

```

See Answer

README.md

→ EC-003 — Memory Creation Phase

---

## EC-Q004

Difficulty

⭐ Easy

Category

Memory

Question

What happens during the Memory Creation Phase?

Thinking Path

```

Scan File

↓

Create Memory

↓

Store Functions

↓

Create Variables

```

See Answer

README.md

→ EC-003

Related Example

EC-E001

EC-E002

---

## EC-Q005

Difficulty

⭐ Easy

Category

Variables

Question

How are var variables handled during Memory Creation?

Thinking Path

```

var

↓

Created

↓

undefined

```

See Answer

README.md

→ EC-003

Related Example

EC-E001

---

## EC-Q006

Difficulty

⭐ Easy

Category

Functions

Question

Why can Function Declarations be called before they appear?

Thinking Path

```

Execution Context

↓

Memory Creation

↓

Store Function

↓

Execution

↓

Call Function

```

See Answer

README.md

→ EC-003

Related Example

EC-E002

---

## EC-Q007

Difficulty

⭐⭐ Medium

Category

Comparison

Question

How does var differ from let during Memory Creation?

Thinking Path

```

var

↓

undefined

----------------

let

↓

TDZ

```

See Answer

README.md

→ EC-003

Related Example

EC-E001

EC-E003

---

## EC-Q008

Difficulty

⭐⭐ Medium

Category

Comparison

Question

What is the difference between Global Execution Context and Function Execution Context?

Thinking Path

```

Global

↓

Entire Program

------------

Function

↓

Every Function Call

```

See Answer

README.md

→ EC-004

→ EC-005

---

## EC-Q009

Difficulty

⭐⭐ Medium

Category

Concept

Question

Does JavaScript execute code immediately?

Thinking Path

```

Memory

↓

Execution

```

See Answer

README.md

→ EC-002

---

## EC-Q010

Difficulty

⭐⭐⭐ Hard

Category

Interview

Question

Explain Execution Context to someone who has never programmed before.

Thinking Path

Use the Kitchen Analogy from README.

See Answer

README.md

→ EC-001

---

# Output Questions

---

## EC-Q011

Difficulty

⭐ Easy

Predict the output.

```javascript
console.log(a);

var a = 5;
```

Thinking Path

```

Memory

↓

a = undefined

↓

Execution

↓

console.log

```

Answer

Don't look immediately.

First explain WHY.

See

README.md

→ EC-003

Related Example

EC-E001

---

## EC-Q012

Difficulty

⭐ Easy

Predict the output.

```javascript
sayHello();

function sayHello() {
    console.log("Hello");
}
```

Thinking Path

```

Memory

↓

Function Stored

↓

Execution

↓

Function Call

```

See Answer

README.md

→ EC-003

Related Example

EC-E002

---

## EC-Q013

Difficulty

⭐⭐ Medium

Predict the output.

```javascript
console.log(age);

let age = 22;
```

Thinking Path

```

Memory

↓

TDZ

↓

Execution

↓

ReferenceError

```

See Answer

README.md

→ EC-003

Related Example

EC-E003

---

## EC-Q014

Difficulty

⭐⭐ Medium

Predict the output.

```javascript
var x = 10;

console.log(x);

x = 20;

console.log(x);
```

Thinking Path

```

Memory

↓

undefined

↓

Execution

↓

10

↓

20

```

Related Example

EC-E005

---

## EC-Q015

Difficulty

⭐⭐⭐ Hard

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

Thinking Path

```

Global Execution Context

↓

Memory

↓

Execution

↓

Function Execution Context

↓

Memory

↓

Execution

```

See Example

EC-E007

See Theory

README.md

→ EC-004

→ EC-005

---

# Interview Follow-up Questions

These questions are commonly asked after explaining Execution Context.

---

## EC-Q016

Is Hoisting the same as Execution Context?

See Theory

EC-006

---

## EC-Q017

Does JavaScript move variables to the top?

See Theory

EC-006

---

## EC-Q018

Do let and const get hoisted?

See Theory

EC-003

---

## EC-Q019

When is a Function Execution Context created?

See Theory

EC-005

---

## EC-Q020

What happens when a function finishes execution?

See Theory

EC-005

---

# Completion Checklist

Before moving to practice.js, make sure you can answer:

✅ What is an Execution Context?

✅ Why is it created?

✅ What are its two phases?

✅ Why does var print undefined?

✅ Why does let throw ReferenceError?

✅ Why do Function Declarations work before declaration?

✅ Difference between Global and Function Execution Context?

✅ Explain Execution Context without using the word "Hoisting."

If you can answer all of these without looking at the README, you're ready to move on.

---

# Next Step

👉 Open

practice.js

and solve every exercise without executing the code first.
