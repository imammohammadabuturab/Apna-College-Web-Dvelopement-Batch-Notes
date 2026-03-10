// Factory Functions

// A function that creates objects


function PersonMaker (name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hi, my name is ${this.name}`);
        },
    };
    return person;
};

let p1 = PersonMaker("adam",25);

console.log(p1);
console.log(p1.talk());

let p2 = PersonMaker("eve",21);

console.log(p2);
console.log(p2.talk());

// disadvantage of factory function 
// p1.talk === p2.talk // false
// p1.talk and p2.talk have different copy stored in memmory whcih is inefficient
// so we use new operator function