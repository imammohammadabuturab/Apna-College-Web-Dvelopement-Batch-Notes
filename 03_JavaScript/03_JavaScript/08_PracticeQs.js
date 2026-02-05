// Practice Qs

// Qs. For the Give String :
// let msg = "help!";
// Trim it & convert it to uppercase.
let msg = "help!";
console.log(msg.trim().toUpperCase());

// Qs. For the String -> let str = "ApnaCollege", predict the output for following
// str.slice(4, 9)
// str.indexOf("na")
// str.replace("Apna","Our")
let str = "ApnaCollege"
console.log(str.slice(4, 9)) //'Colle'
console.log(str.indexOf("na")) //2
console.log(str.replace("Apna", "Our")) //'OurCollege'

// Qs. Separate the "College" part in above string & replace 'l' with 't' in it.
console.log(str.slice(4)) //'College'
console.log(str.slice(4).replace('l', 't')) //'Cotlege'
console.log(str.slice(4).replace('l', 't').replace('l', 't')) 

let newStr = str.slice(4).replace('l', 't')
console.log(newStr.replace('l', 't')) //'Cotlege'
