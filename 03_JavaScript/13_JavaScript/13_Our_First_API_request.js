// Our First Request
// using Fetch

// fetch(url)

// before we used to use, XMLHTTPRequest object, we have to make object //it have some issues like async and prmises dosnet work so now we use fetch

let url = "https://catfact.ninja/fact";

fetch(url) // now check in inpect-> network, it also returns promise if you run this in console
    .then((res) => {
        return res.json(); // if you dont write this then it will show body: ReadableStream in console, it alsor returns promise 
    })
    .then((data) => {
        console.log("data1 : ",data.fact);
        return fetch(url);
    })
    .then((res) => {
        return res.json();
    })
    .then((data2) => {
        console.log("data2 : ",data2.fact);
    })
    .catch((err) => {
        console.log("error : ", err);
    });