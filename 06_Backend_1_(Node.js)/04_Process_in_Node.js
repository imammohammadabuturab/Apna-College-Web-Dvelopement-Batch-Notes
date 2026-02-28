// Process

// process: This object provides information about, and control over, the current Node.js process.

// process.argv: returns an array containing the command-line arguments passed when the Node.js process was launched.

console.log(process.argv);
// output 
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\imam0\\Downloads\\PENDRIVE\\WEB DEV\\06_Backend_1_(Node.js)\\04_Process_in_Node.js',
//   'imam',
//   'shradha',
//   'rahul',
//   'neha',
//   'manisha'
// ]


let args = process.argv;

for(let i = 2; i<args.length; i++) {
    console.log("hello & welcome to ", args[i]);
}

// run this in node terminal using command : node 04_Process_in_Node.js imam shradha rahul neha manisha 
// names are given as argument
// Output:
// hello & welcome to  imam
// hello & welcome to  shradha
// hello & welcome to  rahul
// hello & welcome to  neha
// hello & welcome to  manisha