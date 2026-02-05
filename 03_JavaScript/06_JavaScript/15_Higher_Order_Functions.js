// A function that does one or both :
// takes one or multiple functions as arguments
// returns a function

// example- Takes one or multiple functions as arguments

function multipleGreet(func, n) {
    for(let i = 1 ; i<=n; i++) {
        func();
    }
}
let greet = function() {
    console.log("hello");
}
multipleGreet(greet, 4);

// or

multipleGreet(function() {console.log("hi");}, 3); // creating a function inside a function call
