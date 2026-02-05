// Variables declared inside a {} block cannot be accessed from outside the block.
// Block means curly braces {}
// Dosent work in var keyword(old), only works on let, const keyword becaues its new(after 2015).

{
    let a = 25;
}
console.log(a);

{
    const a = 25;
}
console.log(a);

{
    var a = 25; // var is not recomended to use 
}
console.log(a);

for(let i = 1; i <= 5; i++) {
    consote.log(i); //block scope
}
console.log(i);

let age = 25;
if (age >= 18) {
    let str = "adult"; //block scope
    console.log(str); // will not give error coz within the scope
}
console.log(str);
