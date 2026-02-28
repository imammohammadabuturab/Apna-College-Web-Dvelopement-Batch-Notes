// module.exports

// requiring directories


// require() - a built-in function to include external modules that exist in separate files.
// module.exports - a special object

// whenever we require in directory it tries to search for index.js file which is entry point for that directory

const info = require("./Fruits");

console.log(info);