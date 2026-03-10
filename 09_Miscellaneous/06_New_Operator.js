// New operator

// The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.

// Constructors - doesnt return anything and starts with ca;ptal letter
function Person (name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.talk = function () {
    console.log(`Hi, my name is ${this.name}`);
};

// instance
let p1 = new Person("adam", 25);
let p2 = new Person("eve", 25);



console.log(p1);
console.log(p1.talk());

console.log(p2);
console.log(p2.talk());

// p1.talk === p2.talk // true