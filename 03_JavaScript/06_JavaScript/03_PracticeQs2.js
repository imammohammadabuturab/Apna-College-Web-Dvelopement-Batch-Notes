// Create a Function to roll a dice & always display value of a dice(1 to 6)

function rollDice() {
    console.log(Math.floor(Math.random() * 6) + 1);
}

rollDice();