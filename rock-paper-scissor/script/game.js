// const weapons = document.querySelectorAll(".choice");
// const result = document.querySelector(".result");
// const computer_score = document.querySelector(".computer__score");
// const player_score = document.querySelector(".player__score");
// const computer_choice = document.querySelector(".computer__choice");
// const player_choice = document.querySelector(".player__choice");
// const winner = document.querySelector(".winner");

// let playerScore = 0;
// let computerScore = 0;
// let message = "";

// function computerPlay() {
//   const choices = ["rock", "paper", "scissor"];
//   const pick = Math.floor(Math.random() * choices.length);
//   return choices[pick];
// }

// function playRound(playerSelection, computerSelection) {
//   if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
//     displayChoice(
//       playerSelection.toLowerCase(),
//       computerSelection.toLowerCase()
//     );
//     getScore(playerScore, computerScore);
//     message = "Draw.";
//   }
//   if (playerSelection.toUpperCase() == "ROCK") {
//     if (computerSelection.toUpperCase() == "SCISSOR") {
//       displayChoice(
//         playerSelection.toLowerCase(),
//         computerSelection.toLowerCase()
//       );
//       playerScore++;
//       getScore(playerScore, computerScore);
//       message = "You Win! rock beats scissor.";
//     } else {
//       displayChoice(
//         playerSelection.toLowerCase(),
//         computerSelection.toLowerCase()
//       );
//       computerScore++;
//       getScore(playerScore, computerScore);
//       message = `You Lose! ${computerSelection} beats rock.`;
//     }
//   }
//   if (playerSelection.toUpperCase() == "PAPER") {
//     if (computerSelection.toUpperCase() == "SCISSOR") {
//       displayChoice(
//         playerSelection.toLowerCase(),
//         computerSelection.toLowerCase()
//       );
//       computerScore++;
//       getScore(playerScore, computerScore);
//       message = "You Lose! scissor beats paper.";
//     } else {
//       displayChoice(
//         playerSelection.toLowerCase(),
//         computerSelection.toLowerCase()
//       );
//       playerScore++;
//       getScore(playerScore, computerScore);
//       message = `You Win! paper beats ${computerSelection}`;
//     }
//   }
//   if (playerSelection.toUpperCase() == "SCISSOR") {
//     if (computerSelection.toUpperCase() == "ROCK") {
//       displayChoice(
//         playerSelection.toLowerCase(),
//         computerSelection.toLowerCase()
//       );
//       computerScore++;
//       getScore(playerScore, computerScore);
//       message = "You Lose! rock beats scissor.";
//     } else {
//       displayChoice(
//         playerSelection.toLowerCase(),
//         computerSelection.toLowerCase()
//       );
//       playerScore++;
//       getScore(playerScore, computerScore);
//       message = `You Win! scissor beats ${computerSelection}.`;
//     }
//   }
//   return message;
// }

// function displayChoice(player, computer) {
//   return (
//     (player_choice.innerHTML = `<img src="./images/${player}.png">`),
//     (computer_choice.innerHTML = `<img src="./images/${computer}.png">`)
//   );
// }

// function getScore(player, computer) {
//   computer_score.textContent = `Score: ${computer}`;
//   player_score.textContent = `Score: ${player}`;
// }

// function displayWinner() {
//   weapons.forEach((weapon) => {
//     weapon.addEventListener("click", () => {
//       const playerSelection = weapon.id.toUpperCase();
//       const computerSelection = computerPlay();

//       if (playerScore == 5) {
//         winner.textContent = "You win!";
//       } else if (computerScore == 5) {
//         winner.textContent = "You Lose!";
//       } else {
//         result.textContent = playRound(playerSelection, computerSelection);
//       }
//     });
//   });
// }

// displayWinner();

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
