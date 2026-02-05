// This with Arrow Function
// In JavaScript, arrow functions do not have their own 'this' context. Instead, they inherit 'this' from the surrounding lexical scope at the time they are defined.
// arrow functions have lexical scoping for 'this'
// while regular functions have dynamic scoping for 'this'

const obj = {
    name: "Apna College",
    regularFunction: function() {
        console.log(this.name);
    },
    arrowFunction: () => {
        console.log(this.name);
    }
};

obj.regularFunction(); // Output: "Apna College"
obj.arrowFunction();   // Output: undefined becaues this refers to the global object/window object


