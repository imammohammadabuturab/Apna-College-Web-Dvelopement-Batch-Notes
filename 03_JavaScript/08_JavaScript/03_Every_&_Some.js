// Every
// Returns true if every element of array gives true for some function. Else returns false
// arr.every (some function definition or name);


[1, 2, 3, 4].every( (el) => (el%2 == 0));  //false

[2, 4].every( (el) => (el%2 == 0));  //true


// Some
// Returns true if some elements of array give true for some function. Else returns false.
// arr.some (some function definition or name);

[1, 2, 3, 4].some( (el) => (el%2 == 0));  //true

[1, 3].some( (el) => (el%2 == 0));  //false