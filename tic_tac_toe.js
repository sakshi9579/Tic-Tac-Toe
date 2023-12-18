const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5');
const btn6 = document.querySelector('.btn6');
const btn7 = document.querySelector('.btn7');
const btn8 = document.querySelector('.btn8');
const btn9 = document.querySelector('.btn9');
const restart = document.querySelector('.restart');
const player = document.querySelector('.player');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const newStart = document.querySelector('.new');
const image = document.querySelector('.img1');


var num = 1;

function chance(){
    if(num%2==0){
        player.innerHTML = "Player2";
    }
    else{
        player.innerHTML = "Player1"
    }
}

// var p1 = 0;
// var p2 = 0;
let score = {
    p1: 0,
    p2: 0,
    displayScore: function(){
        player1.innerHTML = `Player 1 = ${this.p1}`;
        player2.innerHTML = `Player 2 = ${this.p2}`;
    }
}

// function displayScore(){
//     player1.innerHTML = `Player 1 = ${p1}`;
//     player2.innerHTML = `Player 2 = ${p2}`;
// }


function win(){
    btn1.innerHTML = ""
    btn2.innerHTML = ""
    btn3.innerHTML = ""
    btn4.innerHTML = ""
    btn5.innerHTML = "🏆"
    btn6.innerHTML = ""
    btn7.innerHTML = ""
    btn8.innerHTML = ""
    btn9.innerHTML = ""
}

function check(){
    if(btn1.innerHTML=="X" && btn5.innerHTML=="X" && btn9.innerHTML=="X"){
        player.innerHTML = "🏆 Player 2 Win 🏆";
        score.p2 = score.p2 + 1;
        score.displayScore();
        win();
    }

    else if(btn1.innerHTML=="X" && btn4.innerHTML=="X" && btn7.innerHTML=="X"){
        player.innerHTML = "🏆 Player 2 Win 🏆";
        score.p2 = score.p2 + 1;
        score.displayScore();
        win();
    }

    else if(btn1.innerHTML=="X" && btn2.innerHTML=="X" && btn3.innerHTML=="X"){
        player.innerHTML = "🏆 Player 2 Win 🏆";
        score.p2 = score.p2 + 1;
        score.displayScore();
        win();
    }

    else if(btn3.innerHTML=="X" && btn6.innerHTML=="X" && btn9.innerHTML=="X"){
        player.innerHTML = "🏆 Player 2 Win 🏆";
        score.p2 = score.p2 + 1;
        score.displayScore();
        win();
    }

    else if(btn7.innerHTML=="X" && btn8.innerHTML=="X" && btn9.innerHTML=="X"){
        player.innerHTML = "🏆 Player 2 Win 🏆";
        score.p2 = score.p2 + 1;
        score.displayScore();
        win();
    }

    else if(btn4.innerHTML=="X" && btn5.innerHTML=="X" && btn6.innerHTML=="X"){
        player.innerHTML = "🏆 Player 2 Win 🏆";
        score.p2 = score.p2 + 1;
        score.displayScore();
        win();
    }

    else if(btn2.innerHTML=="X" && btn5.innerHTML=="X" && btn8.innerHTML=="X"){
        player.innerHTML = "🏆 Player 2 Win 🏆";
        score.p2 = score.p2 + 1;
        score.displayScore();
        win();
    }

    else if(btn3.innerHTML=="X" && btn5.innerHTML=="X" && btn7.innerHTML=="X"){
        player.innerHTML = "🏆 Player 2 Win 🏆";
        score.p2 = score.p2 + 1;
        score.displayScore();
        win();
    }

    // Player1

    else if(btn1.innerHTML=="O" && btn5.innerHTML=="O" && btn9.innerHTML=="O"){
        player.innerHTML = "🏆 Player 1 Win 🏆";
        score.p1 = score.p1 + 1;
        score.displayScore();
        win();
    }

    else if(btn1.innerHTML=="O" && btn4.innerHTML=="O" && btn7.innerHTML=="O"){
        player.innerHTML = "🏆 Player 1 Win 🏆";
        score.p1 = score.p1 + 1;
        score.displayScore();
        win();
    }

    else if(btn1.innerHTML=="O" && btn2.innerHTML=="O" && btn3.innerHTML=="O"){
        player.innerHTML = "🏆 Player 1 Win 🏆";
        score.p1 = score.p1 + 1;
        score.displayScore();
        win();
    }

    else if(btn3.innerHTML=="O" && btn6.innerHTML=="O" && btn9.innerHTML=="O"){
        player.innerHTML = "🏆 Player 1 Win 🏆";
        score.p1 = score.p1 + 1;
        score.displayScore();
        win();
    }

    else if(btn7.innerHTML=="O" && btn8.innerHTML=="O" && btn9.innerHTML=="O"){
        player.innerHTML = "🏆 Player 1 Win 🏆";
        score.p1 = score.p1 + 1;
        score.displayScore();
        win();
    }

    else if(btn4.innerHTML=="O" && btn5.innerHTML=="O" && btn6.innerHTML=="O"){
        player.innerHTML = "🏆 Player 1 Win 🏆";
        score.p1 = score.p1 + 1;
        score.displayScore();
        win();
    }

    else if(btn2.innerHTML=="O" && btn5.innerHTML=="O" && btn8.innerHTML=="O"){
        player.innerHTML = "🏆 Player 1 Win 🏆";
        score.p1 = score.p1 + 1;
        score.displayScore();
        win();
    }

    else if(btn3.innerHTML=="O" && btn5.innerHTML=="O" && btn7.innerHTML=="O"){
        player.innerHTML = "🏆 Player 1 Win 🏆";
        score.p1 = score.p1 + 1;
        score.displayScore();
        win();
    }
    
}

chance();

btn1.addEventListener("click", play1);

function play1(){
    if(btn1.innerHTML=="X" || btn1.innerHTML=="O"){
        alert("You cannot change")
    }
    else {
        if(num%2==0){
            btn1.innerHTML = "X";
            num = num + 1;
            chance();
            check();
        }
        else{
            btn1.innerHTML = "O";
            num = num + 1;
            chance();
            check();
        }
    }
    
}




btn2.addEventListener("click", play2);

function play2(){
    if(btn2.innerHTML=="X" || btn2.innerHTML=="O"){
        alert("You cannot change")
    }
    else {
        if(num%2==0){
            btn2.innerHTML = "X";
            num = num + 1;
            chance();
            check();
        }
        else{
            btn2.innerHTML = "O";
            num = num + 1;
            chance();
            check();
        }
    }
}

btn3.addEventListener("click", play3);

function play3(){
    if(btn3.innerHTML=="X" || btn3.innerHTML=="O"){
        alert("You cannot change")
    }
    else {
        if(num%2==0){
            btn3.innerHTML = "X";
            num = num + 1;
            chance();
            check();
        }
        else{
            btn3.innerHTML = "O";
            num = num + 1;
            chance();
            check();
        }
    }
    
}

btn4.addEventListener("click", play4);

function play4(){
    if(btn4.innerHTML=="X" || btn4.innerHTML=="O"){
        alert("You cannot change")
    }
    else {
        if(num%2==0){
            btn4.innerHTML = "X";
            num = num + 1;
            chance();
            check();
        }
        else{
            btn4.innerHTML = "O";
            num = num + 1;
            chance();
            check();
        }
    }
    
}

btn5.addEventListener("click", play5);

function play5(){
    if(btn5.innerHTML=="X" || btn5.innerHTML=="O"){
        alert("You cannot change")
    }
    else {
        if(num%2==0){
            btn5.innerHTML = "X";
            num = num + 1;
            chance();
            check();
        }
        else{
            btn5.innerHTML = "O";
            num = num + 1;
            chance();
            check();
        }
    }
    
}

btn6.addEventListener("click", play6);

function play6(){
    if(btn6.innerHTML=="X" || btn6.innerHTML=="O"){
        alert("You cannot change")
    }
    else {
        if(num%2==0){
            btn6.innerHTML = "X";
            num = num + 1;
            chance();
            check();
        }
        else{
            btn6.innerHTML = "O";
            num = num + 1;
            chance();
            check();
        }
    }
    
}

btn7.addEventListener("click", play7);

function play7(){
    if(btn7.innerHTML=="X" || btn7.innerHTML=="O"){
        alert("You cannot change")
    }
    else {
        if(num%2==0){
            btn7.innerHTML = "X";
            num = num + 1;
            chance();
            check();
        }
        else{
            btn7.innerHTML = "O";
            num = num + 1;
            chance();
            check();
        }
    }
    
}

btn8.addEventListener("click", play8);

function play8(){
    if(btn8.innerHTML=="X" || btn8.innerHTML=="O"){
        alert("You cannot change")
    }
    else {
        if(num%2==0){
            btn8.innerHTML = "X";
            num = num + 1;
            chance();
            check();
            
        }
        else{
            btn8.innerHTML = "O";
            num = num + 1;
            chance();
            check();
        }
    }
    
}

btn9.addEventListener("click", play9);

function play9(){
    if(btn9.innerHTML=="X" || btn9.innerHTML=="O"){
        alert("You cannot change")
    }
    else {
        if(num%2==0){
            btn9.innerHTML = "X";
            num = num + 1;
            chance();
            check();
        }
        else{
            btn9.innerHTML = "O";
            num = num + 1;
            chance();
            check();
        }
    }
    
}

restart.addEventListener("click", restartg);

function restartg(){
    player.innerHTML = "Player 1";
    btn1.innerHTML = ""
    btn2.innerHTML = ""
    btn3.innerHTML = ""
    btn4.innerHTML = ""
    btn5.innerHTML = ""
    btn6.innerHTML = ""
    btn7.innerHTML = ""
    btn8.innerHTML = ""
    btn9.innerHTML = ""
}

newStart.addEventListener("click", newS);

function newS(){
    player.innerHTML = "Player 1";
    btn1.innerHTML = ""
    btn2.innerHTML = ""
    btn3.innerHTML = ""
    btn4.innerHTML = ""
    btn5.innerHTML = ""
    btn6.innerHTML = ""
    btn7.innerHTML = ""
    btn8.innerHTML = ""
    btn9.innerHTML = ""
    score.p1 = 0;
    score.p2 = 0;
    score.displayScore();
}
