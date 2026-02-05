// Destructuring Objects

const student = {
    name: "karan",
    class: 9,
    age: 14,
    subjects: ["hindi", "english", "math", "science", "social studies"],
    username: "karan123",
    password: 1234,
};

console.log(student.age); // old way to access age

// Destructuring to access age
const { age } = student;
console.log(age); //14

const { username: user, password: pass, city = "Delhi" } = student;
console.log(user); //"karan123"
console.log(pass); //1234
console.log(city); //"Delhi" (default value since city is not in student object)

// Destructuring nested objects
const address = {
    street: "123 Main Street",
    city1: "New York",
    state: "NY",
    zip: "10001"
};

const { street, city1, state, zip } = address;
console.log(street); // "123 Main Street"
console.log(city1); // "New York"
console.log(state); // "NY"
console.log(zip); // "10001"