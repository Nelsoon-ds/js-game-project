console.log("Welcome to a quick game of RPS");

// Constants
const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

// DOM manipulation
document
  .getElementById("rock")
  .addEventListener("click", () => playRound("rock"));
document
  .getElementById("paper")
  .addEventListener("click", () => playRound("paper"));
document
  .getElementById("scissors")
  .addEventListener("click", () => playRound("scissors"));

// Functions

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * choices.length);
  return choices[computerChoice];
}

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
  ).textContent = `Human: ${humanChoice} | Computer: ${computerChoice} |
   ${result}`;
  document.getElementById(
    "score"
  ).textContent = `Human: ${humanScore} - Computer: ${computerScore}`;

  // Check if game over
  if (humanScore === 5 || computerScore === 5) {
    document.getElementById("result").textContent +=
      humanScore === 5 ? " Human wins the game!" : " Computer wins the game!";
    // Reset scores for a new game
    humanScore = 0;
    computerScore = 0;
  }
}

function playGame() {
  let humanChoice = "";
  while (humanScore < 5 && computerScore < 5) {
    humanChoice = prompt("Pick either Rock, Paper, or Scissors").toLowerCase();
    playRound(humanChoice);
  }
}
