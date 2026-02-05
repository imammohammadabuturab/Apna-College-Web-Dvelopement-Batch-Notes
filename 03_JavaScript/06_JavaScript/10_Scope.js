// Scope determines the accessibility of variables, objects, and functions from different parts of the code.
// Function
// Block
// Lexical


// Function Scope:

let sum = 54; // Global Scope

function calSum(a, b) {
    // let sum = a+b;  // Function Scope
    console.log(sum);
}
calSum(1, 2);

console.log(sum);