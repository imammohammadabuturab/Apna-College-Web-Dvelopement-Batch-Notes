// Using Properties & Methods

// innerText
// Shows the visible text contained in a node

// textContent
// Shows all the full text

// innerHTML
// Shows the full markup

let para = document.querySelector("p");
para.innerText = "Hello World!"; // Sets the visible text

// > para.innerText = "abc";
// 'abc'
// > para.innerText = "Hi, I am Peter Parker!";
// <'Hi, I am Peter Parker!'
// > para.innerText = "Hi, I am <b>Peter Parker</b>!";
// << 'Hi, I am <b>Peter Parker</b>!'
// > para.innerHTML = "Hi, I am <b>Peter Parker</b>!";
// << 'Hi, I am <b>Peter Parker</b>!'
// > let heading = document.querySelector('h1');
// << undefined
// > heading.innerText;
// << 'Spider Man'
// > heading.innerHTML =
// Uncaught SyntaxError: Invalid or unexpected token
// VM3393:1
// > heading.innerHTML = "<u>Spider Man</u>";
// <><> '<u>Spider Man</u>'

// heading.innerHTML = `<u>${heading.innerText}</u>`; 
// '<u>Spider Man</u>'