// RPS
console.log("Welcome to a quick game of RPS");
//constants
const choices = ["rock", "paper", "scissors"];
const min = 0;
const max = 3;
// RPS game logic
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * choices.length);
  return choices[computerChoice];
}

function getHumanChoice(string) {
  let humanChoice = prompt("Pick either Rock, Paper or Scissors");
  humanChoice.toLowerCase();
  return humanChoice;
}

// Rock beats scissor
// Paper beats Rock
// Scissor beats paper
//

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  let result = "";
  if (humanChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "The human wins!";
    humanScore++;
  } else {
    result = "The computer wins!";
    computerScore++;
  }
  document.getElementById(
    "result"
  ).textContent = `Human: ${humanChoice} | Computer: ${computerChoice} | ${result}`;
  document.getElementById(
    "score"
  ).textContent = `Human: ${humanScore} - Computer: ${computerScore}`;
}

document
  .getElementById("rock")
  .addEventListener("click", () => playRound("rock"));
document
  .getElementById("paper")
  .addEventListener("click", () => playRound("paper"));
document
  .getElementById("scissors")
  .addEventListener("click", () => playRound("scissors"));
