
// Change the city to "Mumbai"
// Add a new property, gender: "Female"
// Change the marks to "A"

const student = {
    name: "shradha",
    age: 27,
    marks: 94.4,
    city: "Delhi"
};

// update
student.city = "Mumbai";
console.log(student.city);

student.marks = "A";
console.log(student.marks);

// add
student.gender = "Female";
console.log(student.gender);

// delete
delete student.marks;

console.log(student);
