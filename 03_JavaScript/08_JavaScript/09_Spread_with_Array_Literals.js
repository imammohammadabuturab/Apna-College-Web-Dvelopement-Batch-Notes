// Spread with Array Literals
// You can use the spread operator to create a new array by combining existing arrays or adding new elements.

let arr = [1, 2, 3, 4, 5];
let newArr = [...arr];
console.log(newArr);  // [1, 2, 3, 4, 5]


let chars = [..."hello"];
console.log(chars);  // ['h', 'e', 'l', 'l', 'o']

let odds = [1, 3, 5];
let evens = [2, 4, 6];
let nums = [...odds, ...evens];
console.log(nums);  // [1, 3, 5, 2, 4, 6]

let arr3 = [0, ...odds, 7, 8, ...evens, 9];
console.log(arr3);  // [0, 1, 3, 5, 7, 8, 2, 4, 6, 9]


let nestedArr = [[1, 2], [3, 4], [5, 6]];
let flatArr = [].concat(...nestedArr);
console.log(flatArr);  // [1, 2, 3, 4, 5, 6]

