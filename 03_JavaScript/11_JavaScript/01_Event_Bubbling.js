let div = document.querySelector("div");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");

div.addEventListener("click", function() {
    console.log("DIV CLICKED");
});
ul.addEventListener("click", function() {
    console.log("UL CLICKED");
});
for (li of li){
    li.addEventListener("click", function(event) {
        event.stopPropagation(); // removes event bubbling for this element
        console.log("LI CLICKED");
    });
}