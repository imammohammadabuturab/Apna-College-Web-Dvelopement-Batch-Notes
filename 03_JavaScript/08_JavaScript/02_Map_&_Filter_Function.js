// Map
// let newArr = arr.map(some function definition or name);
// The map function creates a new array by applying a function to each element of the original array.


let num = [1, 2, 3, 4];

let double = num.map(function(el) {
    return el*2;
});

console.log(double); // [2, 4, 6, 8]

// Using arrow function syntax
let triple = num.map(el => el * 3);
console.log(triple); // [3, 6, 9, 12]

let students = [
    {
        name: "aman",
        marks: 95,
    },
    {
        name: "shradha",
        marks: 94.4,
    },
    {
        name: "rajat",
        marks: 92,
    },
]; 

let gpa = students.map((el) => {
    return el.marks/10;
})
console.log(gpa); // [9.5, 9.44, 9.2]


// Filter
// let newArr = arr.filter(some function definition or name);
// The filter function creates a new array with all elements that pass the test implemented by the provided function.

let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9];
let even = nums.filter( (el) => {
    return el % 2 == 0;
});
console.log(even); // [2, 4, 6, 2, 8]

let odd = nums.filter( (num) => (num % 2 != 0));
console.log(odd); // [1, 5, 7, 9]