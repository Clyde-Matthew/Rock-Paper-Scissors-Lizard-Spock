import { startConfetti, stopConfetti, removeConfetti } from "./confetti.js";
("use strict");

// player
const playerContainer = document.getElementById("player");
const playerScoreEL = document.getElementById("player-score");
const playerChoiceEL = document.getElementById("player-choice");
const playerRock = document.getElementById("player-rock");
const playerPaper = document.getElementById("player-paper");
const playerScissors = document.getElementById("player-scissors");
const playerLizard = document.getElementById("player-lizard");
const playerSpock = document.getElementById("player-spock");

// computer
const computerContainer = document.getElementById("computer");
const computerScoreEL = document.getElementById("computer-score");
const computerChoiceEL = document.getElementById("computer-choice");
const computerRock = document.getElementById("computer-rock");
const computerPaper = document.getElementById("computer-paper");
const computerScissors = document.getElementById("computer-scissors");
const computerLizard = document.getElementById("computer-lizard");
const computerSpock = document.getElementById("computer-spock");

// all icons
const allGameIcons = document.querySelectorAll(".far");

// reset
const reset = document.getElementById("reset-icon");

// message
const resultText = document.getElementById("result-text");

let playerChoiceNumber = "";
let computerChoiceNumber = "";
let playerScoreNumber = 0;
let computerScoreNumber = 0;

const choices = {
  rock: { name: "Rock", defeats: ["scissors", "lizard"] },
  paper: { name: "Paper", defeats: ["rock", "spock"] },
  scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
  lizard: { name: "Lizard", defeats: ["paper", "spock"] },
  spock: { name: "Spock", defeats: ["scissors", "rock"] },
};

// reset all selceted icons
function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove("selected");
    stopConfetti();
    removeConfetti();
  });
}

// computer random choice
function computerRandomChoice() {
  computerChoiceNumber = Math.floor(Math.random() * 5);

  if (computerChoiceNumber === 0) {
    computerRock.classList.add("selected");
    computerChoiceEL.textContent = " --- Rock";
    computerChoiceNumber = "rock";
  } else if (computerChoiceNumber === 1) {
    computerPaper.classList.add("selected");
    computerChoiceEL.textContent = " --- Paper";
    computerChoiceNumber = "paper";
  } else if (computerChoiceNumber === 2) {
    computerScissors.classList.add("selected");
    computerChoiceEL.textContent = " --- Scissors";
    computerChoiceNumber = "scissors";
  } else if (computerChoiceNumber === 3) {
    computerLizard.classList.add("selected");
    computerChoiceEL.textContent = " --- Lizard";
    computerChoiceNumber = "lizard";
  } else if (computerChoiceNumber === 4) {
    computerSpock.classList.add("selected");
    computerChoiceEL.textContent = " --- Spock";
    computerChoiceNumber = "spock";
  }
}

window.select = select;

// check result, increase score and display result
function updateScore(playerChoice) {
  if (playerChoice === computerChoiceNumber) {
    resultText.textContent = "It's a Tie!";
  } else if (choices[playerChoice].defeats.includes(computerChoiceNumber)) {      
    startConfetti();
      resultText.textContent = `You win! \n${choices[playerChoice].name} beats ${choices[computerChoiceNumber].name}`;
      playerScoreNumber++;
      playerScoreEL.textContent = playerScoreNumber;
   
  } else {
    resultText.textContent = `You lose!
     ${choices[computerChoiceNumber].name} beats ${choices[playerChoice].name}`;
    computerScoreNumber++;
    computerScoreEL.textContent = computerScoreNumber;
  }
}

// call  functions to process turn
function checkResult(playerChoice) {
  resetSelected();
  computerRandomChoice();
  updateScore(playerChoice);
}

// passing player selection value and styling
function select(playerChoice) {
  checkResult(playerChoice);
  switch (playerChoice) {
    case "rock":
      playerRock.classList.add("selected");
      playerChoiceEL.textContent = " --- Rock";
      break;
    case "paper":
      playerPaper.classList.add("selected");
      playerChoiceEL.textContent = " --- Paper";
      break;
    case "scissors":
      playerScissors.classList.add("selected");
      playerChoiceEL.textContent = " --- Scissors";
      break;
    case "lizard":
      playerLizard.classList.add("selected");
      playerChoiceEL.textContent = " --- Lizard";
      break;
    case "spock":
      playerSpock.classList.add("selected");
      playerChoiceEL.textContent = " --- Spock";
      break;
    default:
      break;
  }
}

// reset game
function resetGame() {
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerScoreEL.textContent = playerScoreNumber;
  computerScoreEL.textContent = computerScoreNumber;
  playerChoiceEL.textContent = "";
  computerChoiceEL.textContent = "";
  resultText.textContent = "Good Luck!!";
  resetSelected();
}
window.resetGame = resetGame;
// event listeners
reset.addEventListener("click", resetGame);
