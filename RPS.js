function computerPlay(){

    // this function picks a random number between 0,1,2
    function getRandomInt(max) {
       return Math.floor(Math.random() * Math.floor(max));
     }  

    let max = 3;
    let randnum = parseInt(getRandomInt(max));

  // conditions to output rock/paper/scissors
    if(randnum === 0){
       let rock = "Rock";
       return rock;
    }
    else if(randnum === 1){
        let paper = "Paper";
        return paper;
    }
    else {
        let scissors = "Scissor";
        return scissors;
    }
  }

// variables to count the score
let com = 0;
let player = 0;

const reset = document.querySelector('#reset');
reset.addEventListener('click',() => {
com = 0;
player = 0;
const Element = document.getElementById("par"); 
Element.innerHTML = String(player + " - " + com); 
})
function playRound(playerSelection , computerSelection){
const container = document.querySelector('#container');

// making the string lowercase so that they are case insensitive while comparision 
let str1 = playerSelection.toLowerCase();
console.log("You: " + str1);
let str2 = computerSelection.toLowerCase();
console.log("Com: " + str2);

const Element1 = document.getElementById("par1"); 
Element1.innerHTML = String("You: " + str1);

const Element2 = document.getElementById("par2"); 
Element2.innerHTML = String("Com: " + str2);

// string for the win
let win = "You Win!" + " " + str1 + " beats " + str2;
//string for the losing scenario
let lose = "You Lose!" + " " + str2 + " beats " + str1;
//string for the draw
let draw = "Draw it is sire";

// comparisons and score counting
if(str1 == str2){
  const Element3 = document.getElementById("par3"); 
  Element3.innerHTML = String(draw);
  return draw;
}
else if(str1 === "paper" && str2 === "rock" || str1 === "rock" && str2 === "scissor" || str1 === "scissor" && str2 === "paper" ){
  player++ ;
  const Element3 = document.getElementById("par3"); 
  Element3.innerHTML = String(win);
  return win;
   }
else{
  com++;
  const Element3 = document.getElementById("par3"); 
  Element3.innerHTML = String(lose);
  return lose;
}
}

function Score(){
if(player == 5 || com == 5){
//declaration statements
  if(com > player){
    return alert("*** YOU LOSE! COMPUTER WINS! ***");
  }
  else if (com === player){
    return alert("... IT'S A DRAW ..."); 
  }
  else{
    return alert("*** YOU WIN! COMPUTER LOSES ***");
  }
}
else{
  const Element = document.getElementById("par"); 
  Element.innerHTML = String(player + " - " + com); 
}
}

const btn1 = document.querySelector('#btn1')
btn1.addEventListener('click', () => { 
const playerSelection = "Rock";
const computerSelection = computerPlay();
playRound(playerSelection, computerSelection);

return Score();
});

const btn2 = document.querySelector('#btn2')
btn2.addEventListener('click', () => {
const playerSelection = "Paper";
const computerSelection = computerPlay();
playRound(playerSelection, computerSelection);
return Score();
});

const btn3 = document.querySelector('#btn3')
btn3.addEventListener('click',() => {
const playerSelection = "Scissor";
const computerSelection = computerPlay();
playRound(playerSelection, computerSelection);
return Score();

});
