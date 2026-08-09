/*****************************************************************************************
THE JS MIND
└── 01-Core-Javascript
    └── 008-Scope
        └── practice.js

/****************************************************************************************

THE JS MIND

Topic : Scope

File : practice.js

Purpose

This file trains your brain.

Never execute the code immediately.

Follow the thinking process.

Only after predicting the output,
run the code and compare your answer.

****************************************************************************************/

//========================================================================================
// SC-P001
//========================================================================================

/*

Difficulty

⭐ Easy

Concept

Global Scope

Related Theory

SC-001
SC-003

Related Example

SC-E001

--------------------------------------------------------------------------------

Question

Predict the output.

*/

var siteName = "THE JS MIND";

function displaySite() {
  console.log(siteName);
}

displaySite();

/*

Your Thinking

1.

2.

3.

4.

Where was siteName declared?



Which functions can see it?



Expected Output



WHY?



After Solving

See

README.md

↓

SC-003

*/

//========================================================================================
// SC-P002
//========================================================================================

/*

Difficulty

⭐ Easy

Concept

Function Scope

Related Theory

SC-003

Related Example

SC-E002

*/

function calculate() {
  var total = 500;

  console.log(total);
}

calculate();

console.log(total);

/*

Thinking Path

Is "total" visible OUTSIDE calculate()?



First output



Second output (or error)



WHY?



See

README.md

↓

SC-003

*/

//========================================================================================
// SC-P003
//========================================================================================

/*

Difficulty

⭐⭐ Medium

Concept

Block Scope with let

Related Theory

SC-003

Related Example

SC-E003

*/

if (true) {
  let discount = "10%";

  console.log(discount);
}

console.log(discount);

/*

Before writing the answer

Ask yourself

Does the if block create its own wall for let?

Output inside the block



Output outside the block



WHY?



*/

//========================================================================================
// SC-P004
//========================================================================================

/*

Difficulty

⭐⭐ Medium

Concept

var Ignoring Block Scope

Related Theory

SC-003

Related Example

SC-E004

*/

if (true) {
  var discount = "10%";
}

console.log(discount);

/*

Compare this to SC-P003.

Same shape. Different keyword.

Output



WHY is it different from SC-P003?



*/

//========================================================================================
// SC-P005
//========================================================================================

/*

Difficulty

⭐⭐ Medium

Concept

Lexical Scope

Related Theory

SC-004

Related Example

SC-E005

*/

var theme = "light";

function showTheme() {
  console.log(theme);
}

function switchTheme() {
  var theme = "dark";

  showTheme();
}

switchTheme();

/*

Was showTheme WRITTEN inside switchTheme,
or inside the Global Scope?



Does CALLING showTheme from inside switchTheme
change what showTheme can see?



Output



WHY?



*/

//========================================================================================
// SC-P006
//========================================================================================

/*

Difficulty

⭐⭐⭐ Hard

Concept

The Scope Chain

Related Theory

SC-005

Related Example

SC-E006

*/

var continent = "Asia";

function countryFn() {
  var country = "Pakistan";

  function cityFn() {
    var city = "Lahore";

    console.log(city);
    console.log(country);
    console.log(continent);
  }

  cityFn();
}

countryFn();

/*

Draw the three nested walls.

Which wall is each variable found in?



Output (all three lines)



WHY?



*/

//========================================================================================
// SC-P007
//========================================================================================

/*

Difficulty

⭐⭐⭐ Hard

Concept

Shadowing

Related Theory

SC-003
SC-005

Related Example

SC-E008

*/

var role = "Guest";

function admin() {
  var role = "Admin";

  function superAdmin() {
    var role = "SuperAdmin";

    console.log(role);
  }

  superAdmin();

  console.log(role);
}

admin();

console.log(role);

/*

How many separate "role" variables exist here?



Does the inner one overwrite the outer ones,
or just temporarily hide them?



Output (all three lines)



WHY?



*/

//========================================================================================
// SC-P008
//========================================================================================

/*

Difficulty

⭐⭐⭐ Hard

Concept

Scope vs Hoisting Combined

Related Theory

SC-003

Related Topic

Hoisting (006)

*/

var status = "Global";

function checkStatus() {
  console.log(status);

  var status = "Local";

  console.log(status);
}

checkStatus();

/*

Is "status" inside checkStatus the SAME variable
as the Global "status", or a completely
separate one?



What does Hoisting do to the local "status"
BEFORE the first console.log runs?



First output



Second output



WHY?



*/

//========================================================================================
// SC-P009
//========================================================================================

/*

Difficulty

⭐⭐⭐ Hard

Concept

var Across Multiple Blocks in One Function

Related Theory

SC-003

*/

function processOrder() {
  var total = "Start";

  if (true) {
    var total = "Inside If";

    console.log(total);
  }

  for (var i = 0; i < 1; i++) {
    var total = "Inside For";
  }

  console.log(total);
}

processOrder();

/*

How many DIFFERENT "total" variables exist
inside processOrder?



Does the if block or the for block create
a new one?



First output



Second output



WHY?



*/

//========================================================================================
// SC-P010
//========================================================================================

/*

Difficulty

⭐⭐⭐ Hard

Concept

Interview Challenge — Combining Everything

Without executing,

draw every wall and trace every lookup.

*/

var env = "Production";

function setupApp() {
  console.log(env);

  var env = "Development";

  function loadConfig() {
    console.log(env);

    if (true) {
      let env = "Testing";

      console.log(env);
    }

    console.log(env);
  }

  loadConfig();
}

setupApp();

/*

Draw Every Wall Here
(Global, setupApp, loadConfig, the if block)



Mark which "env" belongs to which wall



Output (all four lines, in order)





WHY?



*/

//========================================================================================
// Reflection
//========================================================================================

/*

Don't continue until you can answer YES.

□ I understand WHY var ignores block boundaries
  but let/const do not.

□ I understand WHY Lexical Scope depends on where
  a function is WRITTEN, not where it's CALLED from.

□ I can trace a variable lookup outward through
  the Scope Chain, wall by wall.

□ I understand that an outer scope can NEVER
  reach into an inner scope.

□ I understand Shadowing — an inner variable
  temporarily hiding an outer one with the
  same name, without modifying it.

□ I can combine Scope with Hoisting to explain
  "why undefined instead of the outer value."

□ I can draw the nested walls of any piece of
  code on paper before predicting its output.

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
