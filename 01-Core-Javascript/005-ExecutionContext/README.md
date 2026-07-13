# Execution Context

## Why are you here?

If you're reading this lesson, you're probably wondering one of these things:

- Why does `var` become `undefined` before assignment?
- Why can I call a function before it's written?
- What actually happens before JavaScript executes my code?
- What is Hoisting really?
- What is an Execution Context?

By the end of this lesson, you'll understand all of these questions.

---

# Visual Overview

![Execution Context](diagram.png)

---

# Imagine This

Imagine JavaScript is a new employee entering an empty office.

Before starting any work, the employee first prepares the office.

He creates drawers for future files.

He arranges important documents.

He labels every cabinet.

Only after everything is prepared does he begin working.

JavaScript behaves exactly the same way.

Before executing your code,
it first prepares memory.

This preparation is called the **Memory Creation Phase**.

The entire office where this work happens is called the **Execution Context**.

---

# What is an Execution Context?

Execution Context is the environment in which JavaScript prepares and executes code.

Every JavaScript program starts by creating a **Global Execution Context (GEC).**

Whenever a function is called,
JavaScript creates another Execution Context for that function.

Every execution context has two phases.

1. Memory Creation Phase
2. Execution Phase

---

# Memory Creation Phase

Before a single line executes,

JavaScript scans the entire file.

During this scan:

- `var` variables are created and initialized with `undefined`.
- Function declarations are fully stored in memory.
- `let` and `const` are created but remain uninitialized (this leads to the Temporal Dead Zone, which we'll study later).

No code has executed yet.

JavaScript is only preparing memory.

---

# Execution Phase

Once memory is ready,

JavaScript starts executing code from top to bottom.

Each statement is executed one by one.

Assignments happen.

Functions are called.

Expressions are evaluated.

The program continues until the last line is reached.

---

# Global vs Function Execution Context

Global Execution Context

- Created once for the entire program.

Function Execution Context

- Created every time a function is called.

When the function finishes,
its execution context is destroyed.

---

# Why Does JavaScript Do This?

Because JavaScript needs to know what exists before execution begins.

Without this preparation:

- Functions couldn't be called before declaration.
- Variables wouldn't exist until encountered.
- Scope couldn't be established.

Memory preparation makes execution predictable.

---

# Common Misconceptions

❌ JavaScript executes code immediately.

✅ It prepares memory first.

---

❌ Hoisting moves code.

✅ Nothing moves.

Memory is prepared before execution.

---

❌ Functions execute during the memory phase.

✅ They are only stored.

---

# Interview Questions

- What is Execution Context?
- Explain Memory Creation Phase.
- Explain Execution Phase.
- Difference between Global and Function Execution Context.
- Does JavaScript execute code immediately?
- What is created during the memory phase?

---

# Summary

Execution Context is the environment where JavaScript prepares and executes code.

Every execution context has:

- Memory Creation Phase
- Execution Phase

Understanding Execution Context makes Hoisting, TDZ, Scope and Closures much easier to understand.