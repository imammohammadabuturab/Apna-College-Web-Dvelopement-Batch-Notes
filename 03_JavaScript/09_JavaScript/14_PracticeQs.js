// Practice Qs
// Add the following elements to the container using only JavaScript and the DOM methods.
// i) a <p> with red text that says "Hey I'm red!"
// ii) an <h3> with blue text that says "I'm a blue h3!"
// iii) a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says "I'm in a div"
// a <p> that says "ME TOO!"


// Solution
// i)
let p1 = document.createElement('p');
p1.innerText = "Hey I'm red!";
document.querySelector('body').append(p1);
p1.classList.add('red');

// ii)
let h3 = document.createElement('h3');
h3.innerText = "I'm a blur h3!";
document.querySelector('body').append(h3);
h3.classList.add('blue');

// iii)
let div = document.createElement('div');
let h1 = document.createElement('h1');
let p2 = document.createElement('p');

h1.innerText = "I'm in a div";
p2.innerText = "ME TOO!";

div.appendChild(h1);
div.appendChild(p2);

div.classList.add('box');

document.querySelector('body').append(div);