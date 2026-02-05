// Spread with Object Literals
// You can use the spread operator to create a new object by combining existing objects or adding new properties.

let data = {
    email: "user@example.com",
    password: "securepassword",

};

let dataCopy = { 
    ...data, 
    id: 123,
    country: "India"
};

console.log(dataCopy);
// Output: { email: 'user@example.com', password: 'securepassword', id: 123, country: 'India' }

let arr = [1, 2, 3, 4, 5]; // val
let obj1 = { ...arr }; // obj -> key:val

console.log(obj1);
// Output: { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }

let obj2 = { ..."hello" }; // obj -> key:val

console.log(obj2);
// Output: { '0': 'h', '1': 'e', '2': 'l', '3': 'l', '4': 'o' }