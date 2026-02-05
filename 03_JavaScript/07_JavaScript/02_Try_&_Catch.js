// try & catch
// The try statement allows you to define a block of code to be tested for errors while it is being executed.
// The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.


try {
    console.log(a);
} catch {
    console.log("variable a doesn't exist");
}


console.log("hello");
console.log("hello");
try {
    console.log(a);
} catch(error) {
    console.log("caught an error.. a is not defined");
    console.log(error.name);
    console.log(error.message);
}
console.log("hello2");
console.log("hello2");
console.log("hello2");