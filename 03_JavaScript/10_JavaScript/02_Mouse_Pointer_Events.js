// onclick (when an element is clicked)
// onmouseenter (when mouse enters an element)


// let btn = document.querySelector('button');
// console.dir(btn);

// btn.onclick = function(){
//     console.log('Button was clicked!');
// }
// btn.onclick = function(){
//     alert('Button was clicked!');
// }

let btn = document.querySelectorAll('button');

for( btn of btn ){
    btn.onclick = sayHello;
    btn.onmouseenter = function(){
        console.log('you entered a button'); // hover effect
    }
    console.dir(btn);
}


function sayHello(){
    alert('Hello!');
}

