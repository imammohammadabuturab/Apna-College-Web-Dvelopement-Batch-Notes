let age =14;
if (age>=18) {
    console.log("You can vote")
}
else if (age<18){
    console.log("You cannot vote")
}
// If there's only an "if", the condition will be checked every time.
// In "else-if", if the above condition is true, the rest won't even be checked or executed.


let marks = 75;

if (marks >= 80) {
  console.log("A+");
} else if (marks >= 60) {
  console.log("A");
} else if (marks >= 33) {
  console.log("B");
} else if (marks < 33) {
  console.log("F");
}


// (more efficient version) create a traffic light systme that shows what to do based on color.
let color = "red";

if (color === "red") {
    console.log("Stop!, Signal is red.")
} else if (color === "yellow") {
    console.log("Slow Down, Signal is yellow")
} else if (color === "green") {
    console.log("Go, Signal is green")
}