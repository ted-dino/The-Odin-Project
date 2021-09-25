const buttons = document.querySelectorAll("button");
const result = document.querySelector(".result");
const computer_score = document.querySelector(".computer__score");
const player_score = document.querySelector(".player__score");
const computer_choice = document.querySelector(".computer__choice");
const player_choice = document.querySelector(".player__choice");

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const choices = ["rock", "paper", "scissor"];
  const pick = Math.floor(Math.random() * choices.length);
  return choices[pick];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
    displayChoice(
      playerSelection.toLowerCase(),
      computerSelection.toLowerCase()
    );
    getScore(playerScore, computerScore);
    return "Draw.";
  }

  if (playerSelection.toUpperCase() == "ROCK") {
    if (computerSelection.toUpperCase() == "SCISSOR") {
      displayChoice(
        playerSelection.toLowerCase(),
        computerSelection.toLowerCase()
      );
      playerScore++;
      getScore(playerScore, computerScore);
      return "You Win! rock beats scissor.";
    } else {
      displayChoice(
        playerSelection.toLowerCase(),
        computerSelection.toLowerCase()
      );
      computerScore++;
      getScore(playerScore, computerScore);
      return `You Lose! ${computerSelection} beats rock.`;
    }
  }

  if (playerSelection.toUpperCase() == "PAPER") {
    if (computerSelection.toUpperCase() == "SCISSOR") {
      displayChoice(
        playerSelection.toLowerCase(),
        computerSelection.toLowerCase()
      );
      computerScore++;
      getScore(playerScore, computerScore);
      return "You Lose! scissor beats paper.";
    } else {
      displayChoice(
        playerSelection.toLowerCase(),
        computerSelection.toLowerCase()
      );
      playerScore++;
      getScore(playerScore, computerScore);
      return `You Win! paper beats ${computerSelection}`;
    }
  }

  if (playerSelection.toUpperCase() == "SCISSOR") {
    if (computerSelection.toUpperCase() == "ROCK") {
      displayChoice(
        playerSelection.toLowerCase(),
        computerSelection.toLowerCase()
      );
      computerScore++;
      getScore(playerScore, computerScore);
      return "You Lose! rock beats scissor.";
    } else {
      displayChoice(
        playerSelection.toLowerCase(),
        computerSelection.toLowerCase()
      );
      playerScore++;
      getScore(playerScore, computerScore);
      return `You Win! scissor beats ${computerSelection}.`;
    }
  }
}

function displayChoice(player, computer) {
  return (
    (player_choice.innerHTML = `<img src="./images/${player}.png">`),
    (computer_choice.innerHTML = `<img src="./images/${computer}.png">`)
  );
}

function getScore(player, computer) {
  computer_score.textContent = `Score: ${computer}`;
  player_score.textContent = `Score: ${player}`;
}

function displayWinner() {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const playerSelection = button.id.toUpperCase();
      const computerSelection = computerPlay();

      if (playerScore == 5) {
        alert("You Win!");
      } else if (computerScore == 5) {
        alert("You Lose!");
      } else {
        result.textContent = playRound(playerSelection, computerSelection);
      }
    });
  });
}

displayWinner();
