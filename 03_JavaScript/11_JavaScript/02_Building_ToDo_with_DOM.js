let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function() {
    console.log("Task Added : " + inp.value);
    
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);


    inp.value = "";
});

ul.addEventListener("click", function(event) {  // event delegation or event bubbling
    if(event.target.nodeName == "BUTTON") {
        console.log("Task Deleted");
        let listItem = event.target.parentElement;
        console.log(listItem);
        listItem.remove();
    }

});

// let deleteBtns = document.querySelectorAll(".delete");
// for (deleteBtns of deleteBtns) {
//     console.log("Task Deleted");
//     let parent = this.parentElement;
//     console.log(parent);
//     parent.remove();
// }
