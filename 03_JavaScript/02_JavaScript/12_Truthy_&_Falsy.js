// truthy & falsy

// Everything in JS is true or false (in boolean context).
// This doesn't mean their value itself is false or true, but they are treated as false or true if taken in boolean context.

// Falsy values:- false, 0, -0, On (BigInt value), "" (empty string), null, undefined, NaN

// Truthy values:- Everything else

let data = true;
// let data = false;
// let data = 0;
// let data = 1;
// let data = "";
// let data = " ";
// let data = "apnacollege";
// let data = null;
// let data = undefined;

if (data) {
    console.log("It has true value")
} else {
    console.log("It has false value")
}


let string = "";

if (string) {
  console.log("string is not empty");
} else {
  console.log("string is empty");
}

let num = 0;

if (num) {
  console.log("num is not equal to 0");
} else {
  console.log("num is equal to 0");
}
