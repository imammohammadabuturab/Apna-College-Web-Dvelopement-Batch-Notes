// when 'this' is used in a callback of event handler of something, it refers to that something.

let btn = document.querySelector('button');
let h1 = document.querySelector('h1');
let h3 = document.querySelector('h3');
let p = document.querySelector('p');

btn.addEventListener('click', changeColor);
h1.addEventListener('click', changeColor);
h3.addEventListener('click', changeColor);
p.addEventListener('click', changeColor);


function changeColor() {
    console.log(this.innerText); 
    this.style.backgroundColor = 'lightblue';
}