// Array Methods

// found -> 1 , not found -> -1

let primary = ["red", "yellow", "blue"];

// indexOf: returns index of something

primary.indexOf("yellow"); // 1
primary.indexOf("green");  // -1
primary.indexOf("Yellow"); // -1

// includes: search for a value

primary.includes("red");  // true
primary.includes("green"); // false
