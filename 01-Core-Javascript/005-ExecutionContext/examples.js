/*****************************************************************************************
THE JS MIND
└── 01-Core-Javascript
    └── 005-ExecutionContext
        └── examples.js


/*****************************************************************************************

THE JS MIND

Topic : Execution Context

File : examples.js

Purpose

This file demonstrates the concepts explained inside README.md.

Do NOT memorize outputs.

Understand WHY they happen.

*****************************************************************************************/

/*****************************************************************************************

Example ID : EC-E001

Difficulty : Easy

Concept

Execution Context

Related Theory

EC-001
EC-002
EC-003

*****************************************************************************************/

console.log(a);

var a = 10;

/*

Expected Output

undefined

Thinking Path

JavaScript Starts

↓

Global Execution Context

↓

Memory Creation

↓

a = undefined

↓

Execution Phase

↓

console.log(a)

↓

undefined

↓

a = 10

Explanation

During Memory Creation,
JavaScript allocates memory for "a"
and initializes it with undefined.

The assignment happens later.

Common Mistake

Thinking

var a = 10

means

a already equals 10.

Wrong.

Creation and Assignment are different operations.

See

README.md

↓

EC-003

*/

//=========================================================================================

/*****************************************************************************************

Example ID : EC-E002

Difficulty : Easy

Concept

Function Declaration

Related Theory

EC-003

*****************************************************************************************/

sayHello();

function sayHello() {
  console.log("Hello JS Mind");
}

/*

Expected Output

Hello JS Mind

Thinking Path

Execution Context

↓

Memory Creation

↓

Function stored completely

↓

Execution

↓

sayHello()

↓

Function Found

↓

Execute Function

Explanation

Function Declarations are fully stored during
Memory Creation.

This is why they can be called
before they appear.

Common Mistake

Thinking functions are executed
during Memory Creation.

They are NOT.

Only stored.

See

README

↓

EC-003

*/

//=========================================================================================

/*****************************************************************************************

Example ID : EC-E003

Difficulty : Easy

Concept

let

Related Theory

EC-003

*****************************************************************************************/

console.log(age);

let age = 22;

/*

Expected Output

ReferenceError

Thinking Path

Execution Context

↓

Memory Creation

↓

age exists

↓

NOT initialized

↓

Execution

↓

console.log(age)

↓

ReferenceError

Explanation

let variables exist during Memory Creation.

However,

they remain inside the Temporal Dead Zone
until initialization.

Common Mistake

Thinking let isn't hoisted.

It IS created.

It simply cannot be accessed.

See

README

↓

EC-003

*/

//=========================================================================================

/*****************************************************************************************

Example ID : EC-E004

Difficulty : Easy

Concept

const

Related Theory

EC-003

*****************************************************************************************/

console.log(city);

const city = "Lahore";

/*

Expected Output

ReferenceError

Thinking Path

Execution Context

↓

Memory Creation

↓

city created

↓

Not initialized

↓

Execution

↓

console.log(city)

↓

ReferenceError

Explanation

const behaves similarly to let.

It exists.

It cannot be accessed before initialization.

See

README

↓

EC-003

*/

//=========================================================================================

/*****************************************************************************************

Example ID : EC-E005

Difficulty : Medium

Concept

Execution Phase

Related Theory

EC-003

*****************************************************************************************/

var x = 5;

console.log(x);

x = 20;

console.log(x);

/*

Expected Output

5

20

Thinking Path

Memory Creation

↓

x = undefined

↓

Execution

↓

x = 5

↓

console.log

↓

5

↓

x = 20

↓

console.log

↓

20

Explanation

Memory Creation only creates variables.

Assignments happen later
during Execution.

See

README

↓

EC-003

*/

//=========================================================================================

/*****************************************************************************************

Example ID : EC-E006

Difficulty : Medium

Concept

Global Execution Context

Related Theory

EC-004

*****************************************************************************************/

var language = "JavaScript";

function printLanguage() {
  console.log(language);
}

printLanguage();

/*

Expected Output

JavaScript

Thinking Path

Global Execution Context

↓

Memory Creation

↓

Function Stored

↓

Execution

↓

Function Called

↓

Function Execution Context

↓

Lookup language

↓

Global Scope

↓

JavaScript

Explanation

A new Function Execution Context
is created whenever a function is called.

If the variable doesn't exist locally,

JavaScript searches upward.

Related Theory

EC-004

EC-005

*/

//=========================================================================================

/*****************************************************************************************

Example ID : EC-E007

Difficulty : Hard

Concept

Execution Order

Related Theory

EC-004

EC-005

*****************************************************************************************/

console.log(a);

var a = 10;

function test() {
  console.log(a);

  var a = 20;

  console.log(a);
}

test();

console.log(a);

/*

Expected Output

undefined

undefined

20

10

Thinking Path

Global Execution Context

↓

Memory

↓

a = undefined

↓

test stored

↓

Execution

↓

console.log(a)

↓

undefined

↓

a = 10

↓

test()

↓

New Function Execution Context

↓

Memory

↓

a = undefined

↓

Execution

↓

console.log(a)

↓

undefined

↓

a = 20

↓

console.log(a)

↓

20

↓

Return

↓

console.log(a)

↓

10

Explanation

Every function creates a completely
new Execution Context.

The local variable "a"

has nothing to do with

the global "a".

This example introduces Scope,
which you'll learn later.

Related Topics

Scope

Closures

Hoisting

*/

//=========================================================================================
/*****************************************************************************************

THE JS MIND

Current File

examples.js

Progress

README           ✅
thinking         ✅
decision-tree    ✅
examples.js      📍
questions.md
practice.js
mistakes.md
cheatsheet.md
interview.md
companies.md
real-world.md

Next

questions.md

*****************************************************************************************/