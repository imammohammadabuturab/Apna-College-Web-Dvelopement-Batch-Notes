// let btn = document.querySelector("button");

// btn.addEventListener("click", function() {
//     console.log("Button clicked!");
// });

let inp = document.querySelector("input");
 
// inp.addEventListener("keydown", function(event) {
//     console.log(event);
//     console.log("Key: " + event.key);
//     console.log("code: " + event.code);
//     console.log("key was pressed ");
// });


// inp.addEventListener("keyup", function() {
//        console.log("key was pressed ");
// });

// inp.addEventListener("keydown", function(event) {
//     console.log("code: " + event.code);  // ArrowUp(W), ArrowDown(S), ArrowLeft(A), ArrowRight(D)
//     if(event.code == "ArrowUp") {
//         console.log("character moved forward");
//     } else if(event.code == "ArrowDown") {
//         console.log("character moved backward");
//     } else if(event.code == "ArrowLeft") {
//         console.log("character moved left");
//     } else if(event.code == "ArrowRight") {
//         console.log("character moved right");
//     }
    
// });
inp.addEventListener("keydown", function(event) {
    console.log("code: " + event.code);  // ArrowUp(W), ArrowDown(S), ArrowLeft(A), ArrowRight(D)
    if(event.code == "KeyW" || event.code == "ArrowUp") {
        console.log("character moved forward");
    } else if(event.code == "KeyS" || event.code == "ArrowDown") {
        console.log("character moved backward");
    } else if(event.code == "KeyA" || event.code == "ArrowLeft") {
        console.log("character moved left");
    } else if(event.code == "KeyD" || event.code == "ArrowRight") {
        console.log("character moved right");
    }
    
});