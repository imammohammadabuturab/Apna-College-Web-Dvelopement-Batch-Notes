// you can say its nameless function
// fuction is stored in variable

// const variable = function(arg1, arg2..) {
// //do or return something
// }

const sum = function(a, b) {
    return a + b;
}
console.log(sum(2, 3));

let hello = function() {
    console.log("Hello!");
}
hello();
 // its possile to change it values
hello = function() {
    console.log("Bye!");
}
hello();