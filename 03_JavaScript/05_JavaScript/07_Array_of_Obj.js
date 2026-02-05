// Storing information of multiple students

const classInfo = [
    {
        name: "aman",
        grade: "A+",
        city: "Delhi"
    },
    {
        name: "shradha",
        grade: "A+",
        city: "Pune"
    },
    {
        name: "karan",
        grade: "0",
        city: "Mumbai"
    }
];

console.log(classInfo);

console.log(classInfo[0]);
console.log(classInfo[0].name);
console.log(classInfo[1].grade);

classInfo[1].gender = "Female"
console.log(classInfo[1].gender);
console.log(classInfo);