// Storing values of array into multiple variables

let names = ["tony", "bruce", "steve", "peter", "natasha", "clint", "thor"];
let [winner, runnerup, ...others] = names;
console.log(winner, runnerup,); //"tony" "bruce"
console.log(others); //["steve", "peter", "natasha", "clint", "thor"]

// Skipping values while destructuring
let [first, , third, , fifth] = names;
console.log(first, third, fifth); //"tony" "steve" "natasha"