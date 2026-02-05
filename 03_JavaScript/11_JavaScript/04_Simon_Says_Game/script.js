let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let highScore = 0;

let btns = ["yellow", "red", "green", "purple"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false){
        console.log("Game Started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 300);
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 300);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;


    // random button
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.getElementById(`${randColor}`);
    // console.log(randBtn);
    // console.log(randColor);
    // console.log(randIdx);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx) {
    // let idx = level - 1;
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else {
        if (level > highScore){
            highScore = level;
        }
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br> and your higest score was ${highScore}<br> Press Any Key to Restart`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector('body').style.backgroundColor = "white";
        }, 150)
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length -1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}