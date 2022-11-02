let playerScoreDisplay = document.querySelector("#player-score");
let computerScoreDisplay = document.querySelector("#computer-score");
let resultRound = document.querySelector("#result-round");

let rock = document.querySelector("#btn-rock");
let paper = document.querySelector("#btn-paper");
let scissors = document.querySelector("#btn-scissors");

let playerSelection = "";
let computerSelection = "";

//Get player's selection using addEventListener
rock.addEventListener("click", () => {
  playerSelection = "rock";
  computerSelection = getComputerChoice().toLowerCase();
  resultRound.innerHTML = playRound(playerSelection, computerSelection);
  gameResult();
});

paper.addEventListener("click", () => {
  playerSelection = "paper";
  computerSelection = getComputerChoice().toLowerCase();
  resultRound.innerHTML = playRound(playerSelection, computerSelection);
  gameResult();
});

scissors.addEventListener("click", () => {
  playerSelection = "scissors";
  computerSelection = getComputerChoice().toLowerCase();
  resultRound.innerHTML = playRound(playerSelection, computerSelection);
  gameResult();
});

//Get computer's selection using a random number and return a string. Ex: 1 = rock, 2 = paper, 3 = scissors
function getComputerChoice() {
  let randomChoice = randomNumber(1, 4);

  if (randomChoice === 1) {
    return "Rock";
  } else if (randomChoice === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

//Function for generating a random number from 1 to 3
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//Declare variables
let pScore = 0;
let cScore = 0;
let winningScore = 5;
let isGameOver = false;

//Check who is the round's winner and update score
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    //If draw, return a string
    return "Draw! Choose your weapon";
  } else if (
    //If player wins the round, return a string and update player score
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    //check if isGameOver is not true, if not, add player score
    if (!isGameOver) {
      pScore++;

      //if player score is equals to winning score, set isGameOver to true
      if (pScore === winningScore) {
        isGameOver = true;
      }
    }
    //call displayScore function to display score
    displayScore();
    return "You won the round! Choose your weapon";
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    //check if isGameOver is not true, if not, add computer score
    if (!isGameOver) {
      cScore++;

      //if computer score is equals to winning score, set isGameOver to true
      if (cScore === winningScore) {
        isGameOver = true;
      }
    }
    //call displayScore function to display score
    displayScore();
    return "Computer won the round! Choose your weapon";
  }
}

//Set function to display both player and computer scores
function displayScore() {
  playerScoreDisplay.innerHTML = pScore;
  computerScoreDisplay.innerHTML = cScore;
}

//Set function to display the endgame result
function gameResult() {
  if (pScore === winningScore) {
    resultRound.innerHTML = "Player won!";
  } else if (cScore === winningScore) {
    resultRound.innerHTML = "Computer won!";
  }
}

function reset() {
  pScore = 0;
  cScore = 0;
  playerScoreDisplay.innerHTML = pScore;
  computerScoreDisplay.innerHTML = cScore;
  resultRound.innerHTML = "Choose your weapon. First to score 5 points wins the game";
  isGameOver = false;
}
