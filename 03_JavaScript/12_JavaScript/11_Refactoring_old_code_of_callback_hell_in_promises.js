// lets apply promises to our callback hell

let h1 = document.querySelector('h1');


function changeColor(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            console.log(`color changed to : ${color}!`);
            resolve("color changed!");
        }, delay)
    })
    
}

changeColor("red", 1000)
.then(()=>{
    console.log("changed to red color");
    return changeColor("orange", 1000);
})
.then(()=>{
    console.log("changed to orange color");
    return changeColor("green", 1000);
})
.then(()=>{
    console.log("changed to green color");
    return changeColor("yellow", 1000);
})
.then(()=>{
    console.log("changed to yellow color");
    return changeColor("blue", 1000);
})
.then(()=>{
    console.log("changed to blue color");
});

// convert to promises
// changeColor("red", 1000, ()=>{
//     changeColor("orange", 1000, ()=> {
//         changeColor("green", 1000, ()=> {
//             changeColor("yellow", 1000, ()=> {
//                 changeColor("blue", 1000)
//             });
//         });
//     });
// });


// using async fuction
// async function color() {
//     await changeColor("red", 1000);
//     await changeColor("orange", 1000);
//     await changeColor("green", 1000);
//     await changeColor("yellow", 1000);
//     changeColor("blue", 1000);
// }

// color();