// Navigation
// parentElement
// children
// previousElementSibling / nextElementSibling

// let h4 = document.querySelector('h4');
// undefined
// h4.parentElement
// <div class="box"> </div>
// h4.children
// HTMLCollection []
// let box = document.querySelector('.box');
// undefined
// box.children;
// HTMLCollection(2) [h4, ul]
// box.childElementCount;
// 2
// let ul = document.querySelector('ul');
// undefined
// ul.parentElement
// <div class="box">...</div>
// ul.childElementCount;
// 3
// ul.children;
// HTMLCollection(3) [1, li, li]


// > ul
// < <ul> ...</ul>
// > ul.children
// <
// HTMLCollection (3) [li, li, li]
// > ul.children[0];
// <
// <li>... </li>
// > ul.children [1];
// <li>...</li>
// > ul.children [2];
// <li>... </li>
// > ul.children [2].previousElementSibling;
// <<li>. </li>
// > ul.children [1]. previous ElementSibling;
// <
// <li>... </li>
// > ul.children[1].nextElementSibling;
// <li>... </li>

// > let img = document.querySelector('img');
// < undefined
// > img.previousElementSibling;
// <
// <h1>Spider Man</h1>
// > img.previous ElementSibling.style;
// <
// 11 CSSStyleDeclaration {accentColor: '', additive Symbols: '', alignContent: '', alignItems: '', alignSelf: '', }
// > img.previousElementSibling.style.color = "green";
// 'green'
// ></undefined>