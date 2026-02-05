// Manipulating Style
// using classList
// obj.classList
// classList.add() to add new classes
// classList.remove() to remove classes
// classList.contains() to check if class exists
// classList.toggle() to toggle between add & remove

// let heading = document.querySelector('h1');
// undefined
// > heading.classList;
// DOMTokenList [value: '']
// > heading.classList.add("abc");
// < undefined
// > heading.classList;
// DOMTokenList ['abc', value: 'abc'] 1
// 0: "abc"
// length: 1
// value: "abc"
// [[Prototype]]: DOMTokenList

// let heading = document.querySelector('h1');
// undefined
// heading.classList.add('green');
// undefined
// heading.classList.add('underline');
// undefined
// heading.classList.remove('green');
// undefined
// heading.classList.remove('green');
// undefined
// heading.setAttribute('class', 'green');
// undefined
// heading.classList
// DOMTokenList ['green', value: 'green']
// heading.classList.contains("underline");
// false
// heading.classList.contains("green");
// true

// TOGGLE

// heading.classList
// DOMTokenList ['green', value: 'green']
// heading.classList.toggle("green");
// false
// heading.classList
// DOMTokenList [value: 'ני
// heading.classList.toggle("underline");
// true
// heading.classList.toggle("green");
// true
// heading.classList
// DOMTokenList(2) ['underline', 'green', value: 'underline green']
// heading.classList.toggle("underline");
// - false