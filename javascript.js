// RPS
console.log("Welcome to a quick game of RPS");
//constants
const choices = ["rock", "paper", "scissor"];
const min = 0;
const max = 3;
// RPS game logic
const humanScore = 0
const computerScore = 0



function getComputerChoice() {
  let computerChoice = 10; // arbitrary number
  computerChoice = Math.floor(Math.random() * (max - min) + min);
  gameAnswer = choices[computerChoice];
  return gameAnswer;
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

function playRound (humanChoice, computerChoice) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    
    if ()

}
