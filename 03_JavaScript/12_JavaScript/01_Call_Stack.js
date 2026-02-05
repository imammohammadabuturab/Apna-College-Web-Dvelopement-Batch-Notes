function hello(){
    console.log("Inside hello function");
    console.log("Hello!");
}

function demo(){
    console.log("calling hello fuction, inside demo fuction");
    hello();
}

console.log("calling demo function");
demo();
console.log("done, bye!")