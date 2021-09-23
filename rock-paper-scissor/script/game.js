let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const choices = ["Rock", "Paper", "Scissor"];
  const pick = Math.floor(Math.random() * choices.length);
  return choices[pick];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
    getScore(playerScore, computerScore);
    return "Tie.";
  }

  if (playerSelection.toUpperCase() == "ROCK") {
    if (computerSelection.toUpperCase() == "SCISSOR") {
      playerScore++;
      getScore(playerScore, computerScore);
      return "You Win! Rock beats Scissor.";
    } else {
      computerScore++;
      getScore(playerScore, computerScore);
      return `You Lose! ${computerSelection} beats Rock.`;
    }
  }

  if (playerSelection.toUpperCase() == "PAPER") {
    if (computerSelection.toUpperCase() == "SCISSOR") {
      computerScore++;
      getScore(playerScore, computerScore);
      return "You Lose! Scissor beats Paper.";
    } else {
      playerScore++;
      getScore(playerScore, computerScore);
      return `You Win! Paper beats ${computerSelection}`;
    }
  }

  if (playerSelection.toUpperCase() == "SCISSOR") {
    if (computerSelection.toUpperCase() == "ROCK") {
      computerScore++;
      getScore(playerScore, computerScore);
      return "You Lose! Rock beats Scissor.";
    } else {
      playerScore++;
      getScore(playerScore, computerScore);
      return `You Win! Scissor beats ${computerSelection}.`;
    }
  }
}

function getScore(player, computer) {
  return `Player : ${player} and Computer: ${computer}`;
}

// function game(){
//     const playerSelection = "scissor";
//     const computerSelection = computerPlay();
//     console.log(playRound(playerSelection, computerSelection));

//     const playerSelection2 = "scissor";
//     const computerSelection2 = computerPlay();
//     console.log(playRound(playerSelection2, computerSelection2));

//     const playerSelection3 = "scissor";
//     const computerSelection3 = computerPlay();
//     console.log(playRound(playerSelection3, computerSelection3));

//     const playerSelection4 = "scissor";
//     const computerSelection4 = computerPlay();
//     console.log(playRound(playerSelection4, computerSelection4));

//     const playerSelection5 = "scissor";
//     const computerSelection5 = computerPlay();
//     console.log(playRound(playerSelection5, computerSelection5));
// }

// game()
