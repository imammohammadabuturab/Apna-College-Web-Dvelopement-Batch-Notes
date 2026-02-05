// Array Methods
// splice: removes / replaces / add elements in place
// splice(starting index, deleteCount, item0...itemN)
// item0...itemN == how many items we want to add
// changes original array

let colors = ["red", "yellow", "blue", "orange", "pink", "white"];

colors.splice(4);  //  ['pink', 'white']

console.log(colors);  //  ['red', 'yellow', 'blue', 'orange']

colors.splice(0, 1);  //  ['red']

console.log(colors);   //  ['yellow', 'blue', 'orange']

colors.splice(0, 1, "black", "grey");  //  ['yellow']

console.log(colors);   //  ['black', 'grey', 'blue', 'orange']