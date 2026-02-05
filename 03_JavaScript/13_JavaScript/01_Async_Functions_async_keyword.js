// async & await keywords

// async keyword creates async function, by default returns promise, then we can use then and catch methods

async function greet() {
    throw "404 error weak connection page not found";
    return "hello";
}

greet()
    .then((result)=>{
        console.log("promise was resolved");
        console.log("result was: ", result);
    })
    .catch((error)=>{
        console.log("promise was rejected with error: ", error);
    });

// you can also make arrow function async

let demo = async ()=> {
    return 5;
}

demo() // call in console