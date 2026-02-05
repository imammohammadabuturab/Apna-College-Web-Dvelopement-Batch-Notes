let marks =75;

// logical and operator
if (marks >= 33 && marks >= 80){
    console.log("Pass")
    console.log("Grade: A+")
}

// logical or operator
if (marks >= 33 || marks >= 80){
    console.log("Pass")
    console.log("Grade: A+")
}

// logical not operator
if (!marks < 33){
    console.log("Pass")
    console.log("Grade: A+")
}

// combining logocal operators
if ((marks > 33 && marks <= 80) || !false){ // calcualtion from left to right
    console.log("Pass") //true
}