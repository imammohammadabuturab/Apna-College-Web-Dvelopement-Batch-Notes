const favMovie = "avatar";

let guess = prompt("guess my favorite movie"); // write "quit" to quit the game

// while ((guess != favMovie) && (guess != "quit")) {
//     guess = prompt("wrong guess. please try again");
// }

// if(guess == favMovie) {
//     console.log("congrats!!");
// } else {
//     console.log("you quit")
// }


// Using break keyword

while (guess != favMovie) {
    if (guess == "quit") {
        console.log("you quit");
        break;
    }
    guess = prompt("Wrong guess, please try again");
}

if (guess == favMovie) {
    console.log("Congrats!!");
}