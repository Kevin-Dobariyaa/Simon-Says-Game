let gameSeq = [];
let userSeq = [];
let hightScore = localStorage.getItem(KevinGameHighScore);
if(hightScore == null) hightScore = 0;
let started = false;
let level = 0;

let red = document.querySelector('.red');
let yellow = document.querySelector('.yellow');
let purple = document.querySelector('.purple');
let green = document.querySelector('.green');
let h3 = document.querySelector('h3');

let btns = [red,yellow,purple,green];
document.addEventListener("keypress",()=>{
    if(started == false){
        console.log("Game is Started");
        started = true;
        levelUp();
    }
});

function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        if(hightScore < level) {
            hightScore = level;
            localStorage.setItem("KevinGameHighScore",hightScore);
            h3.innerHTML = `Game over!! You create New High Score <i>${hightScore}</i> 🎉🎊
            <br> Press Any key to restart`;
        }else{
            h3.innerHTML = `Game over!! Your score was <i>${level}</i>. 
            Hight score is <i>${hightScore}</i>. 👏
            <br> Press Any key to restart`;
        }
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor = "white";
        },250);
        reset();
    }
}


function botFlash(btn){
    btn.classList.add("flash");
    console.log("clicked");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },500);
}

function userFlash(btn){
    btn.classList.add("userflash");
    // console.log("clicked");
    setTimeout(()=>{
        btn.classList.remove("userflash");
    },100);
}

function levelUp(){
    level++;
    userSeq = [];
    h3.innerText = `Level ${level}`;


    let randIdx = Math.floor(Math.random()*3);
    gameSeq.push(btns[randIdx]);
    console.log(gameSeq);
    botFlash(btns[randIdx]);
}

function btnPress(){
    // console.log(this);
    let btn = this;
    userSeq.push(btn);
    // console.log(userSeq);
    userFlash(btn);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}


function reset(){
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}