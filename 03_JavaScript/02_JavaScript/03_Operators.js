//01 Arithmetic_Operators(+,-,*,/,%,**)
let a = 10;
let b = 5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

//02 Unary_Operators(++,--)
let c = 10;
console.log(c++); //10
console.log(++c); //12

//03 Assignment_Operators(=,+=,-=,*,/=,%=,etc)
let d = 77;
let e = 66;
e = d;
console.log(e); //77

//04 Comparison_Operators(>,>=,<,<=,==,!=,===) - to compare 2 values
let age = 16;
console.log(age>18);

// == compares value, not type
"123" == 123  // true  
1 == '1'  // true  
0 == ''   // true  
0 == false  // true  
null == undefined  // true

// === compares type & value
"123" === 123  //false  
1 === '1'  //false  
0 === ''   //false  
0 === false  //false  
null === undefined //false  

// Comparison for non Numbers(Unicode comparison)
'a'>'A'//true
'a'>'b'//false
'p'>'P'//true
