/*****************************************************************************************
THE JS MIND
└── 01-Core-Javascript
    └── 007-TDZ
        └── examples.js

/*****************************************************************************************

THE JS MIND

Topic : Temporal Dead Zone (TDZ)

File : examples.js

Purpose

This file demonstrates the concepts explained inside README.md.

Do NOT memorize outputs.

Understand WHY they happen.

*****************************************************************************************/

/*****************************************************************************************

Example ID : TDZ-E001

Difficulty : Easy

Concept

Basic TDZ with let

Related Theory

TDZ-001
TDZ-003

*****************************************************************************************/

console.log(age);

let age = 22;

/*

Expected Output

ReferenceError: Cannot access 'age' before initialization

Thinking Path

Scope Begins

↓

age hoisted, uninitialized

↓

TDZ starts

↓

console.log(age)

↓

Still inside TDZ

↓

ReferenceError

↓

(TDZ would have ended here, at "let age = 22")

Explanation

age exists in memory the moment the scope begins,
but it is not initialized until its declaration
line actually executes. The access happens BEFORE
that line, so it's still inside the TDZ.

Common Mistake

Thinking the error means "age doesn't exist yet."

It exists. It's simply locked.

See

README.md

↓

TDZ-001

↓

TDZ-003

*/

//=========================================================================================

/*****************************************************************************************

Example ID : TDZ-E002

Difficulty : Easy

Concept

TDZ with const

Related Theory

TDZ-001

*****************************************************************************************/

console.log(pi);

const pi = 3.14;

/*

Expected Output

ReferenceError: Cannot access 'pi' before initialization

Thinking Path

Scope Begins

↓

pi hoisted, uninitialized

↓

TDZ starts

↓

console.log(pi)

↓

Still inside TDZ

↓

ReferenceError

Explanation

const follows the exact same TDZ rule as let.

The only difference between let and const appears
AFTER initialization — const simply can't be
reassigned. Before initialization, they behave
identically.

See

README.md

↓

TDZ-001

*/

//=========================================================================================

/*****************************************************************************************

Example ID : TDZ-E003

Difficulty : Medium

Concept

typeof Inside the TDZ

Related Theory

TDZ-004

*****************************************************************************************/

console.log(typeof user);

let user = "Bilal";

/*

Expected Output

ReferenceError: Cannot access 'user' before initialization

Thinking Path

typeof on an UNDECLARED variable

↓

Safe, returns "undefined"

----------------------------------

typeof on a HOISTED-BUT-UNINITIALIZED variable (TDZ)

↓

NOT safe

↓

ReferenceError

Explanation

"user" is not undeclared — it already exists in
memory because let hoists it. typeof still has to
touch that binding to check its type, and touching
a TDZ binding always throws, regardless of which
operator is doing the touching.

Common Mistake

Assuming typeof is always a safe way to "test" if
a variable exists before using it. It's only safe
for variables that were NEVER declared anywhere in
the accessible scope chain.

See

README.md

↓

TDZ-004

*/

//=========================================================================================

/*****************************************************************************************

Example ID : TDZ-E004

Difficulty : Medium

Concept

TDZ Inside a Block Scope

Related Theory

TDZ-005

*****************************************************************************************/

{
  console.log(city);

  let city = "Karachi";
}

/*

Expected Output

ReferenceError: Cannot access 'city' before initialization

Thinking Path

Block { } creates its OWN scope

↓

city hoisted within THIS block, uninitialized

↓

TDZ starts (scoped to the block)

↓

console.log(city)

↓

Still inside this block's TDZ

↓

ReferenceError

Explanation

Every standalone { } block, if statement, for loop,
or function body creates its own independent scope
— and therefore its own independent TDZ for any
let/const declared inside it.

See

README.md

↓

TDZ-005

*/

//=========================================================================================

/*****************************************************************************************

Example ID : TDZ-E005

Difficulty : Medium

Concept

TDZ Ends After Declaration — Normal Behavior Resumes

Related Theory

TDZ-003

*****************************************************************************************/

let score = 10;

console.log(score);

score = 20;

console.log(score);

/*

Expected Output

10

20

Thinking Path

Scope Begins

↓

score hoisted, uninitialized (TDZ starts)

↓

let score = 10 → TDZ ENDS, score is initialized

↓

console.log(score) → 10 (AFTER the declaration line)

↓

score = 20 (reassignment, allowed for let)

↓

console.log(score) → 20

Explanation

This example has NO error, on purpose. Both
accesses happen AFTER the declaration line, so the
TDZ has already ended by the time either log runs.
This proves TDZ is a TEMPORARY window, not a
permanent restriction on let/const.

See

README.md

↓

TDZ-003

*/

//=========================================================================================

/*****************************************************************************************

Example ID : TDZ-E006

Difficulty : Hard

Concept

TDZ Inside a for Loop

Related Theory

TDZ-005

*****************************************************************************************/

for (let i = 0; i < 3; i++) {
  console.log(i);
}

console.log(typeof i);

/*

Expected Output

0

1

2

undefined

Thinking Path

Each loop iteration gets a FRESH "let i" binding

↓

Each iteration's TDZ starts and ends
before the loop body even runs

↓

Inside the loop → i is already initialized, safe to use

↓

console.log(typeof i) AFTER the loop

↓

"i" declared with let is scoped to the for-loop only

↓

Outside the loop, "i" doesn't exist at all

↓

typeof on a variable that's simply NOT in scope

↓

Safe → "undefined" (this is NOT a TDZ case)

Explanation

Two different reasons can produce "no crash, but no
value either." Inside the loop, i is initialized and
usable. Outside the loop, i is out of scope entirely
— which is a completely different situation from
TDZ, even though typeof "protects" you in both
non-TDZ cases.

Common Mistake

Confusing "out of scope" with "in the TDZ." Only the
latter throws a ReferenceError.

See

README.md

↓

TDZ-005

Related Topic

Scope (008-Scope)

*/

//=========================================================================================

/*****************************************************************************************

Example ID : TDZ-E007

Difficulty : Hard

Concept

var vs let — Same Pattern, Different Outcome

Related Theory

TDZ-001

TDZ-003

*****************************************************************************************/

console.log(oldWay);

var oldWay = "I am forgiving";

console.log(newWay);

let newWay = "I am strict";

/*

Expected Output

undefined

(then throws before reaching the second console.log)

ReferenceError: Cannot access 'newWay' before initialization

Thinking Path

var oldWay

↓

Hoisted AND initialized with undefined

↓

console.log(oldWay) → undefined, no error

↓

oldWay = "I am forgiving" (assignment)

↓

let newWay

↓

Hoisted, but NOT initialized (TDZ)

↓

console.log(newWay) → still in TDZ

↓

ReferenceError (program stops here)

Explanation

This example places both keywords side by side to
make the contrast unmistakable. var never has a
TDZ — it always hands you undefined. let and const
always have a TDZ — they always refuse access until
their declaration line runs.

See

README.md

↓

TDZ-001

Related Topic

Hoisting (006-Hoisting)

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
