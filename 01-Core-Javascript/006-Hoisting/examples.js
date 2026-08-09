/*****************************************************************************************
THE JS MIND
└── 01-Core-Javascript
    └── 006-Hoisting
        └── examples.js

/*****************************************************************************************

THE JS MIND

Topic : Hoisting

File : examples.js

Purpose

This file demonstrates the concepts explained inside README.md.

Do NOT memorize outputs.

Understand WHY they happen.

*****************************************************************************************/

/*****************************************************************************************

Example ID : HO-E001

Difficulty : Easy

Concept

var Hoisting

Related Theory

HO-001
HO-002
HO-003

*****************************************************************************************/

console.log(score);

var score = 100;

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

score = undefined

↓

Execution Phase

↓

console.log(score)

↓

undefined

↓

score = 100

Explanation

var is hoisted AND initialized with undefined
during Memory Creation.

The assignment (100) only happens
during the Execution Phase.

Common Mistake

Thinking "hoisting" means the line

var score = 100

moved to the top with its value.

Wrong.

Only the declaration moves conceptually.

The value never does.

See

README.md

↓

HO-003

*/

//=========================================================================================

/*****************************************************************************************

Example ID : HO-E002

Difficulty : Easy

Concept

Function Declaration Hoisting

Related Theory

HO-004

*****************************************************************************************/

greet();

function greet() {
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

greet stored completely

↓

Execution

↓

greet()

↓

Function Found

↓

Executed

Explanation

Function Declarations are hoisted with their
ENTIRE definition, not just their name.

This is the only declaration type that is
immediately usable before its written position.

Common Mistake

Assuming ALL functions behave this way.

Only Function Declarations do.

Function Expressions and Arrow Functions do NOT.

See

README.md

↓

HO-004

*/

//=========================================================================================

/*****************************************************************************************

Example ID : HO-E003

Difficulty : Easy

Concept

let and the Temporal Dead Zone

Related Theory

HO-005

*****************************************************************************************/

console.log(city);

let city = "Lahore";

/*

Expected Output

ReferenceError: Cannot access 'city' before initialization

Thinking Path

Execution Context

↓

Memory Creation

↓

city exists

↓

NOT initialized

↓

Execution

↓

console.log(city)

↓

ReferenceError

Explanation

let IS hoisted — memory is reserved for it.

But it stays inside the Temporal Dead Zone
until execution reaches its declaration line.

Common Mistake

Saying "let is not hoisted."

It is hoisted.

It simply cannot be accessed yet.

See

README.md

↓

HO-005

*/

//=========================================================================================

/*****************************************************************************************

Example ID : HO-E004

Difficulty : Easy

Concept

const and the Temporal Dead Zone

Related Theory

HO-005

*****************************************************************************************/

console.log(pi);

const pi = 3.14;

/*

Expected Output

ReferenceError: Cannot access 'pi' before initialization

Thinking Path

Execution Context

↓

Memory Creation

↓

pi exists

↓

NOT initialized

↓

Execution

↓

console.log(pi)

↓

ReferenceError

Explanation

const follows the exact same hoisting rule as let.

It is created during Memory Creation.

It remains uninitialized until its declaration line executes.

See

README.md

↓

HO-005

*/

//=========================================================================================

/*****************************************************************************************

Example ID : HO-E005

Difficulty : Medium

Concept

Function Expression Hoisting (var)

Related Theory

HO-006

*****************************************************************************************/

sayBye();

var sayBye = function () {
  console.log("Bye");
};

/*

Expected Output

TypeError: sayBye is not a function

Thinking Path

Memory Creation

↓

sayBye = undefined
(because it's declared with var)

↓

Execution

↓

sayBye()

↓

undefined()

↓

TypeError

Explanation

Only the VARIABLE "sayBye" is hoisted — as undefined.

The function VALUE is assigned later,
during the Execution Phase.

Calling undefined as a function throws a TypeError.

Common Mistake

Assuming this behaves like Example HO-E002
because it "looks like" a function.

It does not.

The declaration keyword is var, not function.

See

README.md

↓

HO-006

*/

//=========================================================================================

/*****************************************************************************************

Example ID : HO-E006

Difficulty : Medium

Concept

Arrow Function Hoisting (let)

Related Theory

HO-005
HO-006

*****************************************************************************************/

sayHi();

let sayHi = () => {
  console.log("Hi");
};

/*

Expected Output

ReferenceError: Cannot access 'sayHi' before initialization

Thinking Path

Memory Creation

↓

sayHi exists

↓

NOT initialized (TDZ)
(because it's declared with let)

↓

Execution

↓

sayHi()

↓

ReferenceError

Explanation

This looks similar to HO-E005, but the ERROR TYPE is different.

var → undefined → calling it throws TypeError.

let / const → TDZ → calling it throws ReferenceError.

Same mistake (calling too early).

Two different error types.

The keyword decides which one you get.

See

README.md

↓

HO-005

↓

HO-006

*/

//=========================================================================================

/*****************************************************************************************

Example ID : HO-E007

Difficulty : Medium

Concept

Hoisting Inside Function Scope

Related Theory

HO-003

*****************************************************************************************/

function checkAge() {
  console.log(age);

  var age = 18;

  console.log(age);
}

checkAge();

/*

Expected Output

undefined

18

Thinking Path

Function Execution Context Created

↓

Memory Creation (local to checkAge)

↓

age = undefined

↓

Execution

↓

console.log(age)

↓

undefined

↓

age = 18

↓

console.log(age)

↓

18

Explanation

Hoisting is not limited to the Global Execution Context.

EVERY function call creates its own Execution Context,

with its own Memory Creation Phase,

so var hoisting happens locally inside checkAge() too.

See

README.md

↓

HO-003

Related Topic

Execution Context (Function Execution Context)

*/

//=========================================================================================

/*****************************************************************************************

Example ID : HO-E008

Difficulty : Hard

Concept

Function Declaration vs var — Priority in Memory Creation

Related Theory

HO-003
HO-004

*****************************************************************************************/

console.log(typeof identify);

function identify() {
  console.log("Function Version");
}

var identify = "String Version";

console.log(typeof identify);

/*

Expected Output

function

string

Thinking Path

Memory Creation (scans entire file first)

↓

Step 1: var identify → reserves identify, sets undefined

↓

Step 2: function identify() → OVERWRITES identify
         with the entire function
         (Function Declarations win over var
          during Memory Creation)

↓

Memory Creation Finished

identify = Entire Function

↓

Execution Begins

↓

console.log(typeof identify)

↓

"function"

↓

var identify = "String Version"
(only the ASSIGNMENT executes now —
 the declaration was already handled)

↓

console.log(typeof identify)

↓

"string"

Explanation

When a var declaration and a Function Declaration
share the same name, the Function Declaration
wins during Memory Creation — its full definition
is stored, overwriting the var's undefined.

The var line does not re-declare anything during
execution. It only performs the assignment,
which is why the second log shows "string".

Common Mistake

Assuming var identify wipes out the function
immediately, or that declaration order in the
file determines final memory — it doesn't.

Function Declarations are always fully processed
before plain var assignments during Memory Creation.

See

README.md

↓

HO-003

↓

HO-004

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

Next

questions.md

*****************************************************************************************/
