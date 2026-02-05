// Referece = address in memory

// [1] = [1]  //  false
// [1] = [1]  //  false
// [] == []  //  false
// [] === []  //  false
// this is becaues both array's addresses are different

let arr = ['a', 'b'];

let arrCopy = arr;

arrCopy  //['a', 'b']

arrCopy.push('c');  //3

console.log(arr);  //  ['a', 'b', 'c']
arr = arrCopy  //  true
