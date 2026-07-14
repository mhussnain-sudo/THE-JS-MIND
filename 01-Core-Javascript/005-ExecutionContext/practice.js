/*****************************************************************************************
THE JS MIND
└── 01-Core-Javascript
    └── 005-ExecutionContext
        └── practice.js

/****************************************************************************************

THE JS MIND

Topic : Execution Context

File : practice.js

Purpose

This file trains your brain.

Never execute the code immediately.

Follow the thinking process.

Only after predicting the output,
run the code and compare your answer.

****************************************************************************************/

//========================================================================================
// EC-P001
//========================================================================================

/*

Difficulty

⭐ Easy

Concept

Execution Context

Related Theory

EC-001
EC-002
EC-003

Related Example

EC-E001

--------------------------------------------------------------------------------

Question

Predict the output.

*/

console.log(a);

var a = 10;

/*

Your Thinking

1.

2.

3.

4.

Memory Creation Phase



Execution Phase



Expected Output



WHY?



After Solving

See

README.md

↓

EC-003

*/

//========================================================================================
// EC-P002
//========================================================================================

/*

Difficulty

⭐ Easy

Concept

Function Declaration

Related Theory

EC-003

Related Example

EC-E002

*/

hello();

function hello() {
  console.log("Hello");
}

/*

Thinking Path

Memory Creation



Execution



Output



WHY?



See

README.md

↓

EC-003

*/

//========================================================================================
// EC-P003
//========================================================================================

/*

Difficulty

⭐ Easy

Concept

let

Related Theory

EC-003

Related Example

EC-E003

*/

console.log(age);

let age = 25;

/*

Before writing the answer

Ask yourself

Which phase am I in?

What exists inside memory?

Can I access it?

Output



WHY?



*/

//========================================================================================
// EC-P004
//========================================================================================

/*

Difficulty

⭐ Easy

Concept

const

Related Theory

EC-003

Related Example

EC-E004

*/

console.log(city);

const city = "Lahore";

/*

Memory Creation



Execution



Output



WHY?



*/

//========================================================================================
// EC-P005
//========================================================================================

/*

Difficulty

⭐⭐ Medium

Concept

Execution Phase

Related Theory

EC-003

Related Example

EC-E005

*/

var x = 5;

console.log(x);

x = 20;

console.log(x);

/*

Memory Creation



Execution Trace



Output



WHY?



*/

//========================================================================================
// EC-P006
//========================================================================================

/*

Difficulty

⭐⭐ Medium

Concept

Global Execution Context

Related Theory

EC-004

Related Example

EC-E006

*/

var language = "JavaScript";

function printLanguage() {
  console.log(language);
}

printLanguage();

/*

How many Execution Contexts are created?



Which Execution Context is active here?



Output



WHY?



*/

//========================================================================================
// EC-P007
//========================================================================================

/*

Difficulty

⭐⭐⭐ Hard

Concept

Function Execution Context

Related Theory

EC-004
EC-005

Related Example

EC-E007

*/

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

Memory Creation

(Global)





Execution

(Global)





Memory Creation

(Function)





Execution

(Function)





Final Output





Explain WHY





*/

//========================================================================================
// EC-P008
//========================================================================================

/*

Difficulty

⭐⭐⭐ Hard

Concept

Multiple Functions

Related Theory

EC-004
EC-005

*/

var name = "JS";

function one() {
  console.log(name);
}

function two() {
  var name = "Mind";

  one();
}

two();

/*

Question

How many Execution Contexts are created?



Which Execution Context prints "name"?



Does one() use the local variable of two()?

WHY?



*/

//========================================================================================
// EC-P009
//========================================================================================

/*

Difficulty

⭐⭐⭐ Hard

Concept

Prediction

*/

var a = 10;

function test() {
  console.log(a);

  a = 50;

  console.log(a);
}

test();

console.log(a);

/*

Draw Memory



Trace Execution



Output



WHY?



*/

//========================================================================================
// EC-P010
//========================================================================================

/*

Difficulty

⭐⭐⭐ Hard

Concept

Interview Challenge

Without executing,

draw the complete Memory Creation Phase.

*/

var first = "JS";

var second = "Mind";

function hello() {
  console.log(first);
}

function bye() {
  console.log(second);
}

hello();

bye();

/*

Draw Memory Here





Execution Trace





Output





WHY?



*/

//========================================================================================
// Reflection
//========================================================================================

/*

Don't continue until you can answer YES.

□ I understand WHY var becomes undefined.

□ I understand WHY let throws ReferenceError.

□ I understand WHY functions work before declaration.

□ I understand the difference between Memory Creation
  and Execution.

□ I can draw the Memory Creation Phase on paper.

□ I can explain Execution Context to another person.

□ I can predict outputs before running the code.

□ I no longer guess.

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
