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
  const choices = ["rock", "papers", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determineWinner(player, computer) {
  if (player === computer) {
    return "draw";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "you won!";
  } else {
    return "computer won!";
  }
}

function displayResult(player, computer, result) {
  const iconMap = {
    rock: "fa-hand-back-fist",
    paper: "fa-hand",
    scissors: "fa-hand-scissors",
  };

  const playerIcon = document.getElementById("player-icon");
  const computerIcon = document.getElementById("computer-icon");
  const resultIcon = document.getElementById("result-icon");
  const resultText = document.getElementById("result-text");

  playerIcon.className = "fa-solid";
  computerIcon.className = "fa-solid";
  resultIcon.className = "fa-solid";
  resultIcon.style.color = "";

  resultText.textContent = result;

  if (result === "draw") {
    resultIcon.classList.add("fa-handshake");
    resultIcon.style.color = "yellow";
    playerIcon.style.display = "none";
    computerIcon.style.display = "none";
  } else {
    playerIcon.classList.add(iconMap[player]);
    computerIcon.classList.add(iconMap[computer]);
    playerIcon.style.display = "inline";
    computerIcon.style.display = "inline";
    resultIcon.style.display = "none";

    if (result === "you won!") {
      playerIcon.style.color = "green";
      computerIcon.style.color = "lightgrey";
    } else {
      playerIcon.style.color = "lightgrey";
      computerIcon.style.color = "red";
    }
  }
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
