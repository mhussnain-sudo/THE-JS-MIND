/*****************************************************************************************
THE JS MIND
└── 01-Core-Javascript
    └── 008-Scope
        └── examples.js

/*****************************************************************************************

THE JS MIND

Topic : Scope

File : examples.js

Purpose

This file demonstrates the concepts explained inside README.md.

Do NOT memorize outputs.

Understand WHY they happen.

*****************************************************************************************/

/*****************************************************************************************

Example ID : SC-E001

Difficulty : Easy

Concept

Global Scope

Related Theory

SC-001
SC-003

*****************************************************************************************/

var appName = "THE JS MIND";

function showApp() {
  console.log(appName);
}

showApp();

/*

Expected Output

THE JS MIND

Thinking Path

appName declared OUTSIDE every function

↓

Global Scope

↓

Visible to ANY function in the file

↓

showApp() can see it directly

Explanation

Global Scope has no walls around it other than
the file itself. Every function written anywhere
in that file can see straight into it.

See

README.md

↓

SC-003

*/

//=========================================================================================

/*****************************************************************************************

Example ID : SC-E002

Difficulty : Easy

Concept

Function Scope

Related Theory

SC-003

*****************************************************************************************/

function greet() {
  var message = "Hello";

  console.log(message);
}

greet();

console.log(message);

/*

Expected Output

Hello

ReferenceError: message is not defined

Thinking Path

message declared INSIDE greet()

↓

Function Scope — walled off to greet() only

↓

console.log(message) INSIDE greet() → visible

↓

console.log(message) OUTSIDE greet() → wall blocks it

↓

ReferenceError

Explanation

Function Scope means the variable simply does not
exist once you step outside the function's wall.

See

README.md

↓

SC-003

*/

//=========================================================================================

/*****************************************************************************************

Example ID : SC-E003

Difficulty : Medium

Concept

Block Scope with let

Related Theory

SC-003

*****************************************************************************************/

if (true) {
  let status = "active";

  console.log(status);
}

console.log(status);

/*

Expected Output

active

ReferenceError: status is not defined

Thinking Path

status declared with let INSIDE the if block

↓

Block Scope — walled off to that { } only

↓

console.log INSIDE the block → visible

↓

console.log OUTSIDE the block → wall blocks it

↓

ReferenceError

Explanation

let creates a wall at EVERY { }, including a plain
if block. Once execution leaves that block, the
variable is completely gone from view.

See

README.md

↓

SC-003

*/

//=========================================================================================

/*****************************************************************************************

Example ID : SC-E004

Difficulty : Medium

Concept

var Ignores Block Scope

Related Theory

SC-003

*****************************************************************************************/

if (true) {
  var status = "active";
}

console.log(status);

/*

Expected Output

active

Thinking Path

status declared with var INSIDE the if block

↓

var does NOT respect block boundaries

↓

Only respects the nearest FUNCTION (or Global,
since there's no function here)

↓

console.log OUTSIDE the block → still visible

↓

"active", no error

Explanation

Compare this directly to SC-E003. Same code shape.
Different keyword. Completely different outcome —
because var and let follow different wall rules.

See

README.md

↓

SC-003

*/

//=========================================================================================

/*****************************************************************************************

Example ID : SC-E005

Difficulty : Medium

Concept

Lexical Scope — Write Site, Not Call Site

Related Theory

SC-004

*****************************************************************************************/

var color = "blue";

function printColor() {
  console.log(color);
}

function changeAndPrint() {
  var color = "red";

  printColor();
}

changeAndPrint();

/*

Expected Output

blue

Thinking Path

printColor is WRITTEN inside Global Scope

↓

Its visibility is locked in at WRITE time

↓

changeAndPrint() CALLS printColor(),
but calling does NOT move printColor
into changeAndPrint's wall

↓

printColor still only sees the Global "color"

↓

"blue", not "red"

Explanation

This is the single most common Scope trap in
interviews. JavaScript uses Lexical (write-time)
Scope, not Dynamic (call-time) Scope.

Common Mistake

Assuming the function that CALLS another function
can inject its own local variables into it.

See

README.md

↓

SC-004

*/

//=========================================================================================

/*****************************************************************************************

Example ID : SC-E006

Difficulty : Hard

Concept

The Scope Chain

Related Theory

SC-005

*****************************************************************************************/

var country = "Pakistan";

function outer() {
  var city = "Lahore";

  function inner() {
    var street = "Main Blvd";

    console.log(street);
    console.log(city);
    console.log(country);
  }

  inner();
}

outer();

/*

Expected Output

Main Blvd

Lahore

Pakistan

Thinking Path

inner's own Scope

↓

street → found immediately

↓

city → not found in inner, step OUT to outer's Scope → found

↓

country → not found in inner or outer,
step OUT to Global Scope → found

Explanation

Every unresolved variable triggers a search
OUTWARD through the Scope Chain — inner to
outer to Global — stopping at the first
scope where the variable is found.

See

README.md

↓

SC-005

*/

//=========================================================================================

/*****************************************************************************************

Example ID : SC-E007

Difficulty : Hard

Concept

Scope Chain Failure

Related Theory

SC-005

*****************************************************************************************/

function outer() {
  function inner() {
    console.log(secret);
  }

  var secret = "hidden";

  inner();
}

outer();

/*

Expected Output

hidden

Thinking Path

secret declared inside outer's Scope

↓

inner is WRITTEN inside outer, so inner
can see outer's wall (Lexical Scope)

↓

Even though "var secret" appears AFTER
the "function inner(){}" declaration in
the file, by the time inner() actually
RUNS, Memory Creation has already
finished for outer()

↓

secret is fully available by execution time

↓

"hidden", no error

Explanation

Don't confuse Scope with Hoisting. secret being
declared "later in the file" doesn't matter here,
because inner() isn't CALLED until after
"var secret" has already executed. Scope answers
"CAN I see it," Hoisting/TDZ answer "IS it ready
yet at this exact moment."

See

README.md

↓

SC-005

Related Topic

Hoisting (006), TDZ (007)

*/

//=========================================================================================

/*****************************************************************************************

Example ID : SC-E008

Difficulty : Hard

Concept

Same Name, Different Scopes (Shadowing)

Related Theory

SC-003

SC-005

*****************************************************************************************/

var name = "Global Name";

function outer() {
  var name = "Outer Name";

  function inner() {
    var name = "Inner Name";

    console.log(name);
  }

  inner();

  console.log(name);
}

outer();

console.log(name);

/*

Expected Output

Inner Name

Outer Name

Global Name

Thinking Path

Three completely separate "name" variables,
one per Scope wall

↓

inner() looks in ITS OWN wall first

↓

Found immediately → "Inner Name"
(never even checks outer or Global)

↓

outer()'s own console.log looks in ITS wall

↓

Found → "Outer Name"

↓

Global console.log looks in the Global wall

↓

Found → "Global Name"

Explanation

This is called Shadowing — an inner scope
declaring a variable with the SAME NAME as an
outer one. The inner variable temporarily
"hides" the outer one for any code inside that
inner wall, but the outer variable is untouched
and still exists exactly as it was.

See

README.md

↓

SC-003

↓

SC-005

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
