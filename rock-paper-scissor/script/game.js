const buttons = document.querySelectorAll("button");
const result = document.querySelector(".result");
const score = document.querySelector(".score");

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
  score.textContent = `Player : ${player} and Computer: ${computer}`;
}

function displayWinner() {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const playerSelection = button.id.toUpperCase();
      const computerSelection = computerPlay();

      result.textContent = playRound(playerSelection, computerSelection);
    });
  });
}

displayWinner();
