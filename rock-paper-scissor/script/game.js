const weapons = document.querySelectorAll(".choice");
const computer_choice = document.querySelector(".computer__choice");
const player_choice = document.querySelector(".player__choice");
const computer__score = document.querySelector(".computer__score");
const player__score = document.querySelector(".player__score");
const winner = document.querySelector(".winner");
const modal = document.querySelector(".modal");
const modalButton = document.querySelector("#btn");
const result = document.querySelector(".result");

let roundWinner = "";
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const choices = ["ROCK", "PAPER", "SCISSOR"];
  const pick = Math.floor(Math.random() * choices.length);
  return choices[pick];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toUpperCase();
  computerSelection = computerSelection.toUpperCase();

  if (playerSelection === computerSelection) {
    displayChoice(playerSelection, computerSelection);
    roundWinner = "Tied!";
  } else if (playerSelection === "ROCK") {
    if (computerSelection === "SCISSOR") {
      displayChoice(playerSelection, computerSelection);
      updatePlayerScore();
      roundWinner = "You win the round!";
    } else {
      displayChoice(playerSelection, computerSelection);
      updateCPUScore();
      roundWinner = "You lose the round!";
    }
  } else if (playerSelection === "SCISSOR") {
    if (computerSelection === "PAPER") {
      displayChoice(playerSelection, computerSelection);
      updatePlayerScore();
      roundWinner = "You win the round!";
    } else {
      displayChoice(playerSelection, computerSelection);
      updateCPUScore();
      roundWinner = "You lose the round!";
    }
  } else if (playerSelection === "PAPER") {
    if (computerSelection === "ROCK") {
      displayChoice(playerSelection, computerSelection);
      updatePlayerScore();
      roundWinner = "You win the round!";
    } else {
      displayChoice(playerSelection, computerSelection);
      updateCPUScore();
      roundWinner = "You lose the round!";
    }
  }

  return roundWinner;
}

function displayChoice(player, computer) {
  return (
    (player_choice.innerHTML = `<img src="./images/${player}.png">`),
    (computer_choice.innerHTML = `<img src="./images/${computer}.png">`)
  );
}

function updatePlayerScore() {
  return (player__score.textContent = `Score: ${++playerScore}`);
}

function updateCPUScore() {
  return (computer__score.textContent = `Score: ${++computerScore}`);
}

function resetGame() {
  modal.style.cssText = "visibility: hidden";
  result.textContent = "Choose your weapon.";
  player_choice.innerHTML = "";
  computer_choice.innerHTML = "";
  computer__score.textContent = "Score: 0";
  player__score.textContent = "Score: 0";
}

weapons.forEach((weapon) => {
  weapon.addEventListener("click", (e) => {
    const playerChoice = e.target.id;
    result.textContent = playRound(playerChoice.toUpperCase(), computerPlay());
    if (playerScore === 5) {
      winner.textContent = "Congratulations! You won the game.";
      modal.style.cssText = "visibility: visible";
    }
    if (computerScore === 5) {
      winner.textContent = "Sorry, Computer won the game.";
      modal.style.cssText = "visibility: visible";
    }
  });
});

modalButton.addEventListener("click", () => resetGame());
