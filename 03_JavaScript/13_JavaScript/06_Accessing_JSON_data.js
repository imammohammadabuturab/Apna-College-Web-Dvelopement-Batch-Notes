// accessing data from json 

const { jsxs } = require("react/jsx-runtime");

// json.parse(data) - method
// to parse a string data to js object , converts json data to js object

// json.stringify(json) - method
// to parse js object data into json, coverts js object to json data

// api returns json data in string fromat

let jsonResponse = '{"fact":"Female cats tend to be right pawed, while male cats are more often left pawed. Interestingly, while 90% of humans are right handed, the remaining 10% of lefties also tend to be male.","length":182}'

console.log(jsonResponse);

let validResponse = JSON.parse(jsonResponse);

console.log(validResponse);


let student = {
    name : "imam",
    marks : 76,
}
JSON.stringify(student); // console window pr check kro


