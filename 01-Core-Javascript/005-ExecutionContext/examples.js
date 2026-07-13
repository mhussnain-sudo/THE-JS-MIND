// Example 1

console.log(a);

var a = 10;

// Output:
// undefined

//----------------------------------------------------

// Example 2

sayHello();

function sayHello() {
  console.log("Hello");
}

// Output:
// Hello

//----------------------------------------------------

// Example 3

console.log(a);

let a = 5;

// Output:
// ReferenceError

//----------------------------------------------------

// Example 4

console.log(a);

const a = 10;

// Output:
// ReferenceError
