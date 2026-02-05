// Array Methods:
// forEach
// map
// filter
// some
// every
// reduce

// forEach
// arr.forEach(some function definition or name);
// aar.forEach executes a provided function once for each array element.

let arr = [1, 2, 3, 4, 5];


function print(el) {
    console.log(el);
}
arr.forEach(print);

// OR

arr.forEach(function(el) {
    console.log(el);
});

// OR

arr.forEach((el) => {
    console.log(el);
})
// for objects
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

students.forEach((student) => {
    console.log(student.name);
});