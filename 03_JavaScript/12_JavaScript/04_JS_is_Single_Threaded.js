// js is single threaded language
// means ek time pr koi code likha hua hai to ek time pr ek hi chese execute hoga


// syncronus nature
// let a = 25;
// console.log(a);
// let b = 10;
// console.log(b);
// console.log(a+b);


// asyncronus nature
setTimeout(()=>{
    console.log("apna college") // kaaam 1
}, 2000)

setTimeout(()=>{
    console.log("hello world") // kaaam 2, isme ek baar me 2 kaam print browser krvata hai, kyuki browser c++ me likkha hai jo milt threaded hai, browser apne callstack me store kr deta h
}, 2000)

console.log("hello...")