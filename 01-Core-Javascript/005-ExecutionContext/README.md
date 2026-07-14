# Execution Context

> **Topic ID:** EC
>
> **Difficulty:** ⭐ Beginner
>
> **Estimated Reading Time:** 25 Minutes
>
> **Prerequisites**
>
> - Variables
> - Functions
> - Basic JavaScript Syntax

---

# Why are you here?

If you're reading this lesson, chances are you've experienced one of these situations.

```javascript
console.log(a);

var a = 10;
```

Output

```text
undefined
```

You expected

```text
ReferenceError
```

or maybe

```text
10
```

Instead JavaScript printed

```text
undefined
```

Then someone told you

> "It's because of Hoisting."

You accepted the answer.

But...

Did you actually understand WHY?

Probably not.

---

Maybe you've also seen this.

```javascript
sayHello();

function sayHello() {
    console.log("Hello");
}
```

Output

```text
Hello
```

How?

The function hasn't even appeared yet.

Why did JavaScript know about it?

---

Or maybe this.

```javascript
console.log(age);

let age = 22;
```

Output

```text
ReferenceError
```

But wait...

Didn't we just learn JavaScript hoists variables?

So why didn't this work?

---

These questions all have one common answer.

**Execution Context.**

If you understand Execution Context properly,

you'll understand

- Hoisting
- TDZ
- Scope
- Closures
- Function Calls
- Call Stack

without memorizing them.

Execution Context is the foundation of how JavaScript runs.

---

# Learning Objectives

By the end of this lesson you should be able to explain

✅ What an Execution Context is

✅ Why JavaScript creates one

✅ Memory Creation Phase

✅ Execution Phase

✅ Difference between Global and Function Execution Context

✅ Why Hoisting exists

✅ Why `var`, `let` and `const` behave differently

✅ Predict output before running code

---

# Visual Overview

See

**assets/diagram.png**

or

**assets/diagram.drawio**

The diagram summarizes everything we'll learn in this lesson.

---

# Stop Thinking Like a Programmer

Before we talk about JavaScript,

I want you to stop thinking like a programmer.

Instead,

become the JavaScript Engine.

Imagine someone hands you a file.

```javascript
var name = "Hussnain";

function greet() {
    console.log("Hello");
}

console.log(name);
```

Would you immediately start executing line one?

No.

You don't even know what's inside the file yet.

Instead,

you'd first read the entire document.

You'd make notes.

You'd remember where every function is.

You'd reserve space for variables.

Only after preparation would you begin execution.

That preparation step

is called

**Execution Context.**

---

# EC-001 — What is an Execution Context?

## 🟢 Beginner Explanation

Execution Context is JavaScript's workspace.

Before JavaScript starts working,

it prepares a workspace.

Inside that workspace,

it keeps

- Variables
- Functions
- Scope Information
- The value of `this`

Only after the workspace is ready

does JavaScript begin executing code.

Think of it like preparing a kitchen before cooking.

You don't immediately start frying food.

First you

- arrange ingredients
- place utensils
- heat the pan
- prepare everything

Then cooking begins.

JavaScript behaves exactly the same way.

---

## 🟡 Technical Explanation

Execution Context is the environment in which JavaScript evaluates and executes code.

Every Execution Context contains

- Variable Environment
- Lexical Environment
- `this` Binding

Each execution context goes through two phases.

1. Memory Creation Phase
2. Execution Phase

---

## 🔵 Interview Explanation

Execution Context is the environment created by JavaScript whenever it executes a script or invokes a function.

It stores variables, functions, lexical scope and the `this` reference.

Every execution context has

- Memory Creation Phase
- Execution Phase

---

# Important

Execution Context is **NOT**

❌ Hoisting

Execution Context explains Hoisting.

Execution Context happens first.

Hoisting is simply a result of the Memory Creation Phase.

---

Related Topics

- Variables
- Hoisting
- Scope
- TDZ

---

# EC-002 — Why Does JavaScript Create an Execution Context?

Imagine reading a book.

Would you read one word,

forget it,

then continue?

No.

You understand the structure first.

JavaScript also needs structure.

Imagine this code.

```javascript
hello();

function hello() {
    console.log("Hello");
}
```

If JavaScript started executing immediately,

line one would fail.

Because the function hasn't been read yet.

Instead,

JavaScript first scans the file.

It remembers every function.

Now,

when execution begins,

the function already exists.

That's why JavaScript creates an Execution Context.

It prepares everything before execution starts.

---

# Think Like JavaScript

A file arrives.

↓

Read the file.

↓

Prepare memory.

↓

Remember functions.

↓

Reserve variables.

↓

Now begin execution.

If you can visualize this,

Execution Context becomes easy.

---

# EC-003 — Memory Creation Phase

This is the phase most developers misunderstand.

JavaScript has **NOT executed anything yet.**

Read that again.

Nothing has executed.

It is only preparing memory.

During this phase JavaScript scans the entire file.

While scanning,

it performs several tasks.

---

## Task 1

Every `var` variable is created.

Example

```javascript
var age = 22;
```

JavaScript creates

```text
age
```

and assigns

```text
undefined
```

Not

22.

The assignment hasn't happened yet.

Only memory allocation.

---

Memory

```text
age

↓

undefined
```

---

## Task 2

Function declarations are stored completely.

Example

```javascript
function greet() {
    console.log("Hello");
}
```

Memory

```text
greet

↓

Entire Function
```

Notice

The whole function is stored.

Not undefined.

This is why functions can be called before they appear in the file.

---

## Task 3

`let`

is created.

But

it is **NOT initialized.**

It exists.

But cannot be accessed.

This is called the

**Temporal Dead Zone (TDZ).**

We'll study it in the next lesson.

---

## Task 4

`const`

behaves similarly.

Memory exists.

Initialization does not.

Accessing it before initialization throws

```text
ReferenceError
```

---

# Memory Creation Summary

| Keyword | Memory Phase |
|----------|--------------|
| var | Created + initialized with `undefined` |
| function | Entire function stored |
| let | Created but uninitialized (TDZ) |
| const | Created but uninitialized (TDZ) |

This table is worth memorizing—but more importantly, understanding.

If you know *why* each behaves this way, you'll be able to predict the output of code instead of guessing.

---

> **Continue reading:** The next sections (`EC-004` onward) cover the Execution Phase, Global vs Function Execution Context, why Hoisting exists, common misconceptions, and interview summaries. These will build directly on the concepts introduced above.