// What will be the output?

let greet = "hello"; // global scope

function changeGreet() {
    
    let greet = "namaste"; // function scope
    console.log(greet); 

    function innerGreet() {
        console.log(greet); // lexical scope 
        // lexical scope means that innerGreet will look for greet in its own scope first, then in the outer function's scope, and finally in the global scope.
    }
}

console.log(greet);
changeGreet();