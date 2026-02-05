// From 1 to 10

// Step1: 
let num = Math.random();  // 0.46747741318127045
// Step2: multiply by last number
num = num * 10;  // 4.674774131812704
// Step3: 
num = Math.floor(num);  // 4
// Step4: because last digit is exclusive in Math.random, we will not get 1*10 = 10
num = num + 1;  // 5


let step1 = Math.random();  // 0.3411372252248379

let step2 = step1 * 10  // 3.411372252248379

let step3 = Math.floor(step2);  // 3

let step4 = step3 + 1; // 4

// OR

let random = Math.floor(Math.random() * 10) + 1
console.log(random);