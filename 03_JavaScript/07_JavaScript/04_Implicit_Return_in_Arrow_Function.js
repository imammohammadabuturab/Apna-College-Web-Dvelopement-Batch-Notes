// Arrow Functions Implicit return, implcit means automatic return without using the return keyword explicitly.
// const func = (arg1, arg2..) => ( value )
// agar arrow function ke body mein sirf ek expression ho, toh curly braces aur return keyword ko hata sakte hain. aur woh expression automatically return ho jata hai. without explicitly using the return statement.
// If there is only one expression in the function body, you can omit the curly braces and the return keyword.

const sum = (a, b) => a + b;

const mul = (a, b) => (
    a * b
);

console.log(sum(2, 3)); // Output: 5
console.log(mul(2, 3)); // Output: 6

const cube = n => n * n * n; // single parameter bhi parentheses ke bina likh sakte hain.
console.log(cube(3)); // Output: 27