const choices = ["rock", "scissors", "paper"];
const choiceButtons = document.querySelectorAll(".choice-btn");
const resultMessage = document.querySelector(".result-message");
const computerMoveBtn = document.querySelector(".computer-move-btn");
const scoreElements = document.querySelectorAll(".score");

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function checkWinner(player, computer) {
  if (player === computer) {
    return "draw";
  }

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

function updateScore() {
  scoreElements[0].textContent = `Комп’ютер - ${computerScore}`;
  scoreElements[1].textContent = `Ви - ${playerScore}`;
}

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  const winner = checkWinner(playerChoice, computerChoice);

  if (winner === "draw") {
    resultMessage.textContent = "Нічия!";
    resultMessage.style.color = "orange";
  } else if (winner === "player") {
    resultMessage.textContent = "Ви виграли раунд!";
    resultMessage.style.color = "green";
    playerScore++;
  } else {
    resultMessage.textContent = "Комп’ютер виграв раунд!";
    resultMessage.style.color = "red";
    computerScore++;
  }

  updateScore();
}

choiceButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const playerChoice = choices[index];
    playRound(playerChoice);
  });
});

computerMoveBtn.addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  let translated = "";

  if (computerChoice === "rock") translated = "Камінь";
  if (computerChoice === "scissors") translated = "Ножиці";
  if (computerChoice === "paper") translated = "Папір";

  alert(`Комп’ютер вибрав: ${translated}`);
});
