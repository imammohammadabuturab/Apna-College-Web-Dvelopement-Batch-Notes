// Rest
// Allows a function to take an indefinite number of arguments and bundle them in an array

function sum1(...args) {  // arguments
    return args.reduce((add, el) => add + el);
} 
console.log(sum1(1, 2, 3, 4)); // 10


function sum(...numbers) {
    // arguments
    for(let i = 0; i < numbers.length; i++) {
        console.log("you gave us:", numbers[i]);
    }
}
sum(1, 2, 3, 4, 5); // values stored in numbers array

function min(msg, ...args) {
    console.log(msg);
    return args.reduce((min, el) => {
        if (el < min) {
            return el;
        } else {
            return min;
        }
    });
}
console.log(min("The minimum is:", 5, 3, 9, 1, 4)); // 1
