// Practice Qs

// Qs. For the given start state of an array, change it to final form using splice.
// start: ['january', 'july', 'march', 'august']
// final: ['july', 'june', 'march', 'august']

let months = ['january', 'july', 'march', 'august'];
months.splice(0 ,2, 'july', 'june');
console.log(months);

// Qs. Return the index of the "javascript" from the given array, if it was reversed.
// ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql']

let language = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];

console.log(language.reverse().indexOf('javascript'));
