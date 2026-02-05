// Arrow Functions
// Arrow functions provide a concise syntax for writing functions in JavaScript.
// They are often used for short functions or as callbacks.
// const func = (arg1, arg2..) => { function definition }


const sum = (a, b) => {
    console.log(a + b)
};

sum(5, 10); // Output: 15

const cube = (n) => {
    return n * n * n
}

console.log(cube(3)); // Output: 27

// If there is only one parameter, parentheses can be omitted
const square = n => {
    console.log(n * n)
}