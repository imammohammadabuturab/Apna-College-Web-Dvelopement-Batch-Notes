//Actions that can be performed on an object.

const calculator = {
    add: function(a, b) {
        return a + b;
    },
    sub:
    function(a, b) {
        return a -b;
    },
    mul: function(a, b) {
        return a * b;
    }
};

console.log(calculator.add(5, 3)); // Outputs: 8
console.log(calculator.sub(5, 3)); // Outputs: 2
console.log(calculator.mul(5, 3)); // Outputs: 15


// OR
// Methods (Shorthand)

const calculator1 = {
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a -b;
    },
    mul(a, b) {
        return a * b;
    }
};

console.log(calculator1.add(10, 4)); // Outputs: 14
console.log(calculator1.sub(10, 4)); // Outputs: 6
console.log(calculator1.mul(10, 4)); // Outputs: 40