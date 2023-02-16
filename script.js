function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }
  
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
               playerSelection === 'paper' && computerSelection === 'rock' ||
               playerSelection === 'scissors' && computerSelection === 'paper') {
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
  }
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
    const maxScore = 5;
    
    while (playerScore < maxScore && computerScore < maxScore) {
      const playerSelection = prompt('Rock, Paper, or Scissors?');
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);
      console.log(result);
      
      if (result.startsWith('You Win!')) {
        playerScore++;
      } else if (result.startsWith('You Lose!')) {
        computerScore++;
      }
      
      console.log(`Score: Player ${playerScore}, Computer ${computerScore}`);
    }
    
    if (playerScore > computerScore) {
      console.log('Congratulations, you win!');
    } else {
      console.log('Sorry, you lose!');
    }
  }
  
  game();
  