// Array Methods
// slice: copies a portion of an array  
// same as slice in string
// slice(strting index, ending index);
// ending index is exclusive(not included)

let colors = ["red", "yellow", "blue", "orange", "pink", "white"];


colors.slice()  //['red', 'yellow', 'blue', 'orange', 'pink', 'white']

colors.slice(2);  //['blue', 'orange', 'pink', 'white']

colors.slice(2, 3);  //['blue']

colors.slice(-2);  //['pink', 'white']