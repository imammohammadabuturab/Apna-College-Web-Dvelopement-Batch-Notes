// Adding Elements
// document.createElement('p') // creates a new paragraph element
// appendChild(element)  // adds element as last child
// append(element)  // edits and adds element in existing elemets as last child
// prepend(element)  // adds element as first child
// insertAdjacent(where, element) // adds element at specified position

// > document.createElement('p');
// <p></p>
// let newP = document.createElement('p');
// undefined
// > console.dir(newP);
// p
// V
// <<< undefined
// newP.innerText = "Hi, I am a new p";
// << 'Hi, I am a new p'
// > console.dir(newP);
// p
// V
// undefined
// > let body = document.querySelector('body')=
// << undefined
// body.appendChild(newP);
// <p>Hi, I am a new p</p>


// newP
// <p>Hi, I am a new p</p>
// > let box = document.querySelector('.box');
// << undefined
// > box.appendChild(newP);
// <
// <p>Hi, I am a new p</p>
// > let btn = document.createElement('button');
// <><>< undefined
// > console.dir('btn');
// btn
// VM8
// <<< undefined
// > console.dir(btn);
// button
// VM8
// <<< undefined
// > btn.innerText = "click me!";
// <'click me!'
// > box.appendChild(btn);
// <button>click me!</button>



// newP
// <p>Hi, I am a new p</p>
// newP.append("this is new text");
// undefined
// newP.append(btn);
// undefined
// newP.append(" do not click this button");
// undefined



