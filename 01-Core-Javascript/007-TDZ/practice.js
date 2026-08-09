/*****************************************************************************************
THE JS MIND
└── 01-Core-Javascript
    └── 007-TDZ
        └── practice.js

/****************************************************************************************

THE JS MIND

Topic : Temporal Dead Zone (TDZ)

File : practice.js

Purpose

This file trains your brain.

Never execute the code immediately.

Follow the thinking process.

Only after predicting the output,
run the code and compare your answer.

****************************************************************************************/

//========================================================================================
// TDZ-P001
//========================================================================================

/*

Difficulty

⭐ Easy

Concept

Basic TDZ

Related Theory

TDZ-001
TDZ-003

Related Example

TDZ-E001

--------------------------------------------------------------------------------

Question

Predict the output.

*/

console.log(country);

let country = "Pakistan";

/*

Your Thinking

1.

2.

3.

4.

Is this access BEFORE or AFTER the declaration line?



Expected Output



WHY?



After Solving

See

README.md

↓

TDZ-001

*/

//========================================================================================
// TDZ-P002
//========================================================================================

/*

Difficulty

⭐ Easy

Concept

const TDZ

Related Theory

TDZ-001

Related Example

TDZ-E002

*/

console.log(taxRate);

const taxRate = 0.15;

/*

Thinking Path

Is const treated any differently from let
BEFORE initialization?



Output



WHY?



See

README.md

↓

TDZ-001

*/

//========================================================================================
// TDZ-P003
//========================================================================================

/*

Difficulty

⭐⭐ Medium

Concept

typeof Inside TDZ

Related Theory

TDZ-004

Related Example

TDZ-E003

*/

console.log(typeof balance);

let balance = 1000;

/*

Before writing the answer

Ask yourself

Does typeof protect you from EVERY kind of
missing variable, or only some kinds?

Is "balance" undeclared, or hoisted-but-uninitialized?

Output



WHY?



*/

//========================================================================================
// TDZ-P004
//========================================================================================

/*

Difficulty

⭐⭐ Medium

Concept

typeof on a Truly Undeclared Variable

Related Theory

TDZ-004

*/

console.log(typeof neverExists);

/*

Compare this to TDZ-P003.

Same operator. Different result. Why?



Output



WHY?



*/

//========================================================================================
// TDZ-P005
//========================================================================================

/*

Difficulty

⭐⭐ Medium

Concept

TDZ Inside a Block

Related Theory

TDZ-005

Related Example

TDZ-E004

*/

{
  console.log(username);

  let username = "hussnain_dev";
}

/*

Does this block create its own scope?



Does that scope have its own TDZ,
separate from the outer file?



Output



WHY?



*/

//========================================================================================
// TDZ-P006
//========================================================================================

/*

Difficulty

⭐⭐ Medium

Concept

TDZ Ends After Declaration

Related Theory

TDZ-003

Related Example

TDZ-E005

*/

let inventory = 50;

console.log(inventory);

inventory = 30;

console.log(inventory);

/*

Is either console.log happening
before the declaration line?



First output



Second output



WHY?



*/

//========================================================================================
// TDZ-P007
//========================================================================================

/*

Difficulty

⭐⭐⭐ Hard

Concept

let Inside a for Loop

Related Theory

TDZ-005

Related Example

TDZ-E006

*/

for (let index = 0; index < 3; index++) {
  console.log(index);
}

console.log(typeof index);

/*

Inside the loop — is "index" ever in its TDZ
at the point where console.log runs?



After the loop — does "index" still exist at all?



Is that an "out of scope" issue,
or a TDZ issue? What's the difference?



Output (all lines)



WHY?



*/

//========================================================================================
// TDZ-P008
//========================================================================================

/*

Difficulty

⭐⭐⭐ Hard

Concept

var vs let Side by Side

Related Theory

TDZ-001
TDZ-003

Related Example

TDZ-E007

*/

console.log(legacy);

var legacy = "old style";

console.log(modern);

let modern = "new style";

/*

Does "legacy" throw an error? Why or why not?



Does the program even REACH the
"modern" declaration line before crashing?



Output (or where it stops)



WHY?



*/

//========================================================================================
// TDZ-P009
//========================================================================================

/*

Difficulty

⭐⭐⭐ Hard

Concept

TDZ vs Undeclared Variable — Error Message Difference

Related Theory

TDZ-001

*/

function scenarioOne() {
  console.log(x);

  let x = 1;
}

function scenarioTwo() {
  console.log(y);
}

scenarioOne();

scenarioTwo();

/*

Which function throws
"Cannot access before initialization"?



Which function throws
"is not defined"?



WHY are these two different error messages,
even though both "look like" a variable
that isn't ready yet?



*/

//========================================================================================
// TDZ-P010
//========================================================================================

/*

Difficulty

⭐⭐⭐ Hard

Concept

Interview Challenge — Combining Hoisting and TDZ

Without executing,

draw the complete Memory Creation Phase and TDZ boundaries.

*/

console.log(a);
console.log(b);

var a = "first";

function b() {
  console.log("I am a function");
}

let c = "third";

console.log(c);

console.log(d);

const d = "fourth";

/*

Draw Memory Here
(a, b, c, d — note WHICH ones are in a TDZ
 at the very start, and which are not)



Which line throws the FIRST error?



Does execution ever reach "console.log(c)"?



Final Output (or error, and where it happens)





WHY?



*/

//========================================================================================
// Reflection
//========================================================================================

/*

Don't continue until you can answer YES.

□ I understand WHY let/const throw errors even though
  they ARE hoisted.

□ I understand WHY var never has a TDZ.

□ I can name the three stages every let/const passes through.

□ I understand WHY typeof is not a safe escape hatch
  inside the TDZ.

□ I understand the difference between a TDZ error
  ("before initialization") and an undeclared variable
  error ("is not defined").

□ I understand that every block { } creates its own
  independent TDZ.

□ I understand that TDZ inside a loop resets every
  iteration, but the loop body itself is usually safe.

□ I can predict TDZ outputs before running the code.

I no longer guess.

I reason.

*/

/*****************************************************************************************

THE JS MIND

Current File

practice.js

Progress

README           ✅
thinking         ✅
decision-tree    ✅
examples.js      ✅
questions.md     ✅
practice.js      📍
mistakes.md
cheatsheet.md

Next

mistakes.md

*****************************************************************************************/
