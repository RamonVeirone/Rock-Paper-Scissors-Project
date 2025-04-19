const rockbtn = document.getElementById("rock");
const paperbtn = document.getElementById("paper");
const scissorsbtn = document.getElementById("scissors");
let playerChoice = "";

rockbtn.addEventListener("click", function () {
  playerChoice = "rock";
});

paperbtn.addEventListener("click", function () {
  playerChoice = "paper";
});

scissorsbtn.addEventListener("click", function () {
  playerChoice = "scissors";
});

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}