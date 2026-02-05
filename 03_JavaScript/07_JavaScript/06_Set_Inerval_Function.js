// Set Interval
// setInterval is a function in JavaScript that allows you to execute a piece of code or a function repeatedly at specified intervals (in milliseconds).
// setInterval(function, timeout)


let id = setInterval( () => {
    console.log("Apna College");
}, 2000);
// To stop the interval, you can use
clearInterval(id)