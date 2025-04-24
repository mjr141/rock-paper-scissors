const playButtons = document.querySelectorAll(".playButton");
playButtons.forEach(button => button.addEventListener("click", (e) => playRound(e.target.id)));

function getComputerChoice() {
  let randomInt = Math.floor(Math.random() * 3); // generate a random integer from 0 to 2
  let choice;
  if (randomInt === 0) {
    choice = "rock";
  } else if (randomInt === 1) {
    choice = "paper";
  } else if (randomInt === 2) {
    choice = "scissors"
  }
  return choice;
}

// global variables to be incremented accordingly
let userScore = 0;
let computerScore = 0;
let roundCount = 1;

// putting initial scores in the scorecard
const scoreCard = document.querySelector(".scoreCard");
let userDisplayScore = document.createElement("p");
scoreCard.appendChild(userDisplayScore);
let computerDisplayScore = document.createElement("p");
scoreCard.appendChild(computerDisplayScore);
let roundDisplayCount = document.createElement("p");
scoreCard.appendChild(roundDisplayCount);
updateScore();

function updateScore() {
  userDisplayScore.textContent = `your score: ${userScore}`;
  computerDisplayScore.textContent = `computer score: ${computerScore}`;
  // roundDisplayCount.textContent = `round: ${roundCount}`;
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  let result = checkWinner(humanChoice, computerChoice) // helper function to pick the winner
  switch (result) {
    case "win":
      console.log(`you win! ${humanChoice} beats ${computerChoice}`);
      ++userScore;
      updateScore()
      break;
    case "lose":
      console.log(`you lose! ${computerChoice} beats ${humanChoice}`);
      ++computerScore;
      updateScore()
      break;
    case "tie":
      console.log(`tie! you both picked ${humanChoice}`)
      updateScore()
      break;
    case "other":
      console.log(`you lose! '${humanChoice}' isn't a valid choice...`)
      updateScore()
  }
}

// check who wins, return a different string according to the result
function checkWinner (humanChoice, computerChoice) {
  switch(humanChoice) {
    case "rock":
      if (computerChoice === "scissors") {
        return "win";
        break;
      } else if (computerChoice === "paper") {
        return "lose";
        break;
      } else {
        return "tie";
        break;
      }
    
    case "paper":
      if (computerChoice === "rock") {
        return "win";
        break;
      } else if (computerChoice === "scissors") {
        return "lose";
        break;
      } else {
        return "tie";
        break;
      }
  
    case "scissors":
      if (computerChoice === "paper") {
        return "win";
        break;
      } else if (computerChoice === "rock") {
        return "lose";
        break;
      } else {
        return "tie";
        break;
      }

    default:
      return "other";
      break;
  }
}