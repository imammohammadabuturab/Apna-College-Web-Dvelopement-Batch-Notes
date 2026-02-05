// Practice Qs
// Write an arrow function that returns the square of a number 'n'.
// Write a function that prints "Hello World" 5 times at intervals of 2s each.

// Answer 1
const square = n => n*n;
console.log(square(4)); // Output: 16

// Answer 2
// let count = 0;
// let id = setInterval( () => {
//     if(count < 5){
//         console.log("Hello World");
//         count++;
//     } else {
//         clearInterval(id);
//     }
// }, 2000)

let id = setInterval( () => {
    console.log("Hello World");
}, 2000);

setTimeout( () => {
    clearInterval(id);
    console.log("clearInterval ran");
}, 10000);