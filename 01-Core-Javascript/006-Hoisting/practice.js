/*****************************************************************************************
THE JS MIND
└── 01-Core-Javascript
    └── 006-Hoisting
        └── practice.js

/****************************************************************************************

THE JS MIND

Topic : Hoisting

File : practice.js

Purpose

This file trains your brain.

Never execute the code immediately.

Follow the thinking process.

Only after predicting the output,
run the code and compare your answer.

****************************************************************************************/

//========================================================================================
// HO-P001
//========================================================================================

/*

Difficulty

⭐ Easy

Concept

var Hoisting

Related Theory

HO-001
HO-002
HO-003

Related Example

HO-E001

--------------------------------------------------------------------------------

Question

Predict the output.

*/

console.log(price);

var price = 250;

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

HO-003

*/

//========================================================================================
// HO-P002
//========================================================================================

/*

Difficulty

⭐ Easy

Concept

Function Declaration Hoisting

Related Theory

HO-004

Related Example

HO-E002

*/

announce();

function announce() {
  console.log("Announcement!");
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

HO-004

*/

//========================================================================================
// HO-P003
//========================================================================================

/*

Difficulty

⭐ Easy

Concept

let

Related Theory

HO-005

Related Example

HO-E003

*/

console.log(country);

let country = "Pakistan";

/*

Before writing the answer

Ask yourself

Is this variable hoisted?

Is it initialized yet?

Can I access it right now?

Output



WHY?



*/

//========================================================================================
// HO-P004
//========================================================================================

/*

Difficulty

⭐ Easy

Concept

const

Related Theory

HO-005

Related Example

HO-E004

*/

console.log(taxRate);

const taxRate = 0.15;

/*

Memory Creation



Execution



Output



WHY?



*/

//========================================================================================
// HO-P005
//========================================================================================

/*

Difficulty

⭐⭐ Medium

Concept

Function Expression Hoisting

Related Theory

HO-006

Related Example

HO-E005

*/

subtract();

var subtract = function () {
  console.log("Subtracting...");
};

/*

Is the VARIABLE hoisted, or the FUNCTION?



What value does "subtract" hold
at the moment it's called?



Output



WHY?



*/

//========================================================================================
// HO-P006
//========================================================================================

/*

Difficulty

⭐⭐ Medium

Concept

Arrow Function Hoisting with let

Related Theory

HO-005
HO-006

Related Example

HO-E006

*/

multiply();

let multiply = () => {
  console.log("Multiplying...");
};

/*

Compare this to HO-P005.

Same mistake (calling too early).

Is the ERROR the same?



Which keyword changes the error type?



Output



WHY?



*/

//========================================================================================
// HO-P007
//========================================================================================

/*

Difficulty

⭐⭐ Medium

Concept

Hoisting Inside a Function

Related Theory

HO-003

Related Example

HO-E007

*/

function checkStock() {
  console.log(quantity);

  var quantity = 42;

  console.log(quantity);
}

checkStock();

/*

How many Execution Contexts exist here?



Where does "quantity" get hoisted to —
the top of the FILE, or the top of the FUNCTION?



Output



WHY?



*/

//========================================================================================
// HO-P008
//========================================================================================

/*

Difficulty

⭐⭐⭐ Hard

Concept

Function Declaration vs var Priority

Related Theory

HO-003
HO-004

Related Example

HO-E008

*/

console.log(typeof calculate);

function calculate() {
  console.log("Calculating");
}

var calculate = "Not a function";

console.log(typeof calculate);

/*

During Memory Creation, which wins —
the var declaration or the function declaration?

Draw Memory Before Execution Starts



Trace Execution Line By Line



First console.log output



Second console.log output



WHY?



*/

//========================================================================================
// HO-P009
//========================================================================================

/*

Difficulty

⭐⭐⭐ Hard

Concept

var and Block Scope

Related Theory

HO-003

*/

function testDiscount() {
  console.log(discount);

  if (true) {
    var discount = "10%";
  }

  console.log(discount);
}

testDiscount();

/*

Is var scoped to the "if" block,
or to the entire function?



Where in memory does "discount" get created?



First console.log output



Second console.log output



WHY?



*/

//========================================================================================
// HO-P010
//========================================================================================

/*

Difficulty

⭐⭐⭐ Hard

Concept

Interview Challenge — Combining Everything

Without executing,

draw the complete Memory Creation Phase.

*/

console.log(a);
console.log(b);
console.log(c);

var a = "first";

let b = "second";

function c() {
  console.log("I am a function");
}

/*

Draw Memory Here
(three separate rows: a, b, c)



Which line(s) throw an error
BEFORE the console.logs even finish running?



Output (or error)





WHY?



*/

//========================================================================================
// Reflection
//========================================================================================

/*

Don't continue until you can answer YES.

□ I understand WHY "hoisting" does not mean code moves.

□ I understand WHY var becomes undefined before assignment.

□ I understand WHY let and const throw ReferenceError before
  their declaration line (TDZ).

□ I understand WHY Function Declarations work before
  their written position, and Function Expressions don't.

□ I understand that Function Declarations override var
  declarations of the same name during Memory Creation.

□ I understand that var hoists to the top of the nearest
  FUNCTION, not the nearest block.

□ I can draw the Memory Creation Phase on paper for
  mixed var / let / const / function code.

□ I can predict outputs before running the code.

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
