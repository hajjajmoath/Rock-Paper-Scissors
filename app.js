const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
const resultOutput = document.getElementById('result');

let playerScoreCounter = 0;
let computerScoreCounter = 0;
const maxScore = 5;

function getComputerChoice() {
  const options = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random()*3);
  return options[randomIndex];
}

function playround(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    resultOutput.textContent = "Its Tie , try again";
  }
  else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
  (playerSelection === 'paper' && computerSelection === 'rock') ||
  (playerSelection === 'scissors' && computerSelection === 'paper')) {
    playerScoreCounter++;
    resultOutput.textContent = `You Won! , ${playerSelection} beats ${computerSelection}`;
    playerScore.textContent = playerScoreCounter;
    getwinner();
  }
  else {
    computerScoreCounter++;
    resultOutput.textContent = `You Lose , ${playerSelection} beats ${computerSelection}`;
    computerScore.textContent = computerScoreCounter;
    getwinner();
  }
}

rockBtn.addEventListener('click', () => playround('rock', getComputerChoice()));
paperBtn.addEventListener('click', () => playround('paper', getComputerChoice()));
scissorsBtn.addEventListener('click', () => playround('scissors', getComputerChoice()));

function getwinner() {
  if (playerScoreCounter === 5) {
    resultOutput.textContent = 'Finished! the winner is Player';
    disableButtons();
  }
  else if (computerScoreCounter === 5) {
    resultOutput.textContent = 'Finished! the winner is Computer';
    disableButtons();
  }
}

function disableButtons() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}
