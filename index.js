const computerChoiceDisplay = document.getElementById("computer-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const resultDisplay = document.getElementById("result");
const choices = document.querySelectorAll("button");

let playerChoice;
let computerChoice;
let result;

choices.forEach((choice) =>
  choice.addEventListener("click", function (e) {
    playerChoice = e.target.id;
    playerChoiceDisplay.innerHTML = playerChoice;

    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  let randomNumber = Math.floor(Math.random() * choices.length) + 1;

  if (randomNumber === 1) {
    computerChoice = "Rock";
  }
  if (randomNumber === 2) {
    computerChoice = "Paper";
  }
  if (randomNumber === 3) {
    computerChoice = "Scissors";
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (playerChoice === "Rock" && computerChoice === "Rock") {
    result = "Draw!";
  }
  if (playerChoice === "Rock" && computerChoice === "Paper") {
    result = "You Lost!";
  }
  if (playerChoice === "Rock" && computerChoice === "Scissors") {
    result = "You Win!";
  }
  if (playerChoice === "Paper" && computerChoice === "Rock") {
    result = "You Win!";
  }
  if (playerChoice === "paper" && computerChoice === "Paper") {
    result = "Draw!";
  }
  if (playerChoice === "Paper" && computerChoice === "Scissors") {
    result = "You Lost!";
  }
  if (playerChoice === "Scissors" && computerChoice === "Rock") {
    result = "You Lost!";
  }
  if (playerChoice === "Scissors" && computerChoice === "Paper") {
    result = "You Win!";
  }
  if (playerChoice === "Scissors" && computerChoice === "Scissors") {
    result = "Draw!";
  }

  resultDisplay.innerHTML = result;
}
