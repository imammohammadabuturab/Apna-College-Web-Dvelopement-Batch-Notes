// Manipulating Style
// style Property
// obj.style

// css -> hyphen-case
// javaScript -> camelCase
// background-color -> backgroundColor



// > let img = document.querySelector('img');
// < undefined
// > console.dir(img);
// img#mainImg
// VM4272:1
// << undefined
// > img.style
// <
// CSSStyleDeclaration {accentColor: '', additive Symbols: '", alignContent: '', alignItems: '', alignSelf: '', }
// > let heading = document.querySelector('h1');
// <<< undefined
// > heading.style;
// 11 CSSStyleDeclaration {accentColor: '', additive Symbols: '', alignContent: '', alignItems: '', alignSelf: '', }
// > heading.style.color = 'purple';
// << 'purple'
// > heading.style.color = 'green';
// << 'green'

// changeing background color
// > heading.style.backgroundColor = 'lightgrey';
// << 'lightgrey'

// put it in app.js file
let links = document.querySelectorAll('.box a');
for (let i = 0; i < links.length; i++) {
    links[i].style.color = 'yellow'; // inline styling ,not in css
}

//OR

for (link of links) {
    links.style.color = 'orange';  // inline styling ,not in css
}
