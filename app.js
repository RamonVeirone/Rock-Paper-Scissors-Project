const rockbtn = document.getElementById("rock");
const paperbtn = document.getElementById("paper");
const scissorsbtn = document.getElementById("scissors");
let playerChoice = '';
let lastPlayerChoice = ''

rockbtn.addEventListener("click", function () {
  playerChoice = "rock";
});

paperbtn.addEventListener("click", function () {
  playerChoice = "paper";
});

scissorsbtn.addEventListener("click", function () {
  playerChoice = "scissors";
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determineWinner() {
  if (player === computer) {
    return "Draw";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "You won!";
  } else {
    return "Computer won!";
  }
}

function displayResult(player, computer, result) {
  document.getElementById(
    "player-choice"
  ).textContent = `Your choice is ${player}`;

  document.getElementById(
    "computer-choice"
  ).textContent = `The computer's choice is ${computer}`;

  document.getElementById("result").textContent = `The result is ${result}`;
}