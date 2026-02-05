// Array Methods

// push: add to end
// pop: delete from end & returns it

// unshift: add to start
// shift: delete from start & returns it

let cars = ["audi","bmw","xuv","maruti"];

cars.push("toyota");
console.log(cars);

cars.push("ferrari");
console.log(cars);

cars.pop();
console.log(cars);
cars.pop();
console.log(cars);


cars.unshift("toyota");
console.log(cars);

cars.unshift("ferrari");
console.log(cars);

cars.shift();
console.log(cars);
cars.shift();
console.log(cars);

// you can also block using shift
let followers = ["a", "b", "c"];
let blocked = followers.shift();

console.log(followers);
console.log(blocked);