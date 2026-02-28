// require v/s import

// new es6 version of js can also use impot while old onle can only require

// import { sum } from "./math.js"

// We can't selectively load only the pieces we need with require but with import, we can selectively load only the pieces we need, which can save memory.

// Loading is synchronous for 'require' but can be asynchronous for 'import'.

// we can either import or require in same project we cant do both

// you have to make your own package.json (use npm inint command) before using import module and add "type" : "module"

import {sum, PI} from "./math.js"


console.log(sum(2, 3));
console.log(PI);

// mam told us to install 
// npm install random-words

import { generate, count } from "random-words";
console.log(generate());
console.log(generate(5));
console.log(generate({ minLength: 2 }));
console.log(generate({ maxLength: 6 }));