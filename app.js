const rockbtn = document.getElementById("rock");
const paperbtn = document.getElementById("paper");
const scissorsbtn = document.getElementById("scissors");
let playerChoice = "";
let lastPlayerChoice = "";

rockbtn.addEventListener("click", function () {
  playerChoice = "rock";
  playGame();
});

paperbtn.addEventListener("click", function () {
  playerChoice = "paper";
  playGame();
});

scissorsbtn.addEventListener("click", function () {
  playerChoice = "scissors";
  playGame();
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determineWinner(player, computer) {
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
  ).textContent = `Your choice is: ${player}`;

  document.getElementById(
    "computer-choice"
  ).textContent = `The computer's choice is: ${computer}`;

  document.getElementById("game-result").textContent = `The result is: ${result}`;
}

function playGame() {
  if (playerChoice === "rock" && lastPlayerChoice === "rock") {
    alert("Rock can not be selected two times in a row!");
    return;
  }

  lastPlayerChoice = playerChoice;
  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);
  displayResult(playerChoice, computerChoice, result);
}

const rulesbtn = document.getElementById("rules-btn");
rulesbtn.addEventListener("click", function () {
  alert(
    "Rules: \n -Rock beats scissors \n -Scissors beats paper \n -Paper beats rock"
  );
});
