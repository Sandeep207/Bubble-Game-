var timer =60;
var score =0;
var hitrn =0;




function increaseScore(){
    score +=10;
    document.querySelector("#incscore").textContent = score;
}

function getHitval(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}
function makeBubble(){
    var clutter ="";
    for(i=1;i<=160;i++){
        var ran =Math.floor(Math.random()*10);
        clutter += `<div class="bubb">${ran}</div>`;
    }
document.querySelector(".panelbtm").innerHTML=clutter ;
}
function runTimer(){
    var timerint = setInterval(function (){
        if(timer>0){
            timer --;
            document.querySelector("#runtime") .textContent = timer;   
        }else{
            clearInterval(timerint);
            document.querySelector(".panelbtm").innerHTML = `<h1>GAME OVER ,  YOUR SCORE  = ${score} </h1>`;
            document.querySelector(".hide").classList.remove("hide");
        }
    },1000);
}

document.querySelector(".panelbtm").addEventListener("click" , function(dets){
    var getNum = Number(dets.target.textContent);
    if(getNum === hitrn){
        increaseScore();
        makeBubble();
        getHitval();
    }
})

function newGame(){
    restart()
    
}

function restart(){
    document.querySelector("#newgame").addEventListener("click",function(det){
        timer = 60;
        score= 0;
        document.querySelector("#incscore").textContent = score ;
        runTimer();
        makeBubble();
        getHitval();
    })
}

runTimer();
makeBubble();
getHitval();
newGame();