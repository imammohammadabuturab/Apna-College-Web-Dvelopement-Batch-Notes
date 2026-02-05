// Event Listener CHECK MDN
// addEventListener()

// element.addEventListener(event, callback);

let btn = document.querySelectorAll('button');

for ( btn of btn){
    btn.addEventListener('click', sayHello);
    btn.addEventListener('click', sayName);
}

function sayHello(){
    alert('Hello!');
}

function sayName(){
    alert('Apna College!');
}