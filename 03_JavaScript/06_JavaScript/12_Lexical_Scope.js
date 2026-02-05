// a variable defined outside a function can be accessible inside another function defined after the variable declaration.
// The opposite is NOT true.
// uses nested function

function outerFunc() {
    let x = 5
    let y = 6
    function innerFunc() {  // function scope
        console.log(x);
        console.log(y);
    }
    innerFunc();
}

outerFunc();