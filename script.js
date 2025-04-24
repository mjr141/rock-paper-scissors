// const button = document.querySelector("button");

const playButtons = document.querySelectorAll(".playButton");
playButtons.forEach(button => button.addEventListener("click", (e) => playRound(e.target.id)));

// button.addEventListener("click", (e) => playRound(e.target.innerText));

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

/* function getHumanChoice() {
  let choice = prompt("choose rock, paper, or scissors!");
  return choice.toLowerCase();
} */

// global variables to be incremented accordingly
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  let result = checkWinner(humanChoice, computerChoice) // helper function to pick the winner
  switch (result) {
    case "win":
      console.log(`you win! ${humanChoice} beats ${computerChoice}`);
      ++humanScore;
      break;
    case "lose":
      console.log(`you lose! ${computerChoice} beats ${humanChoice}`);
      ++computerScore;
      break;
    case "tie":
      console.log(`tie! you both picked ${humanChoice}`)
      break;
    case "other":
      console.log(`you lose! '${humanChoice}' isn't a valid choice...`)
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

/* // play 5 rounds and display scores
function playGame() {
  let humanChoice;
  let computerChoice;
  let roundCount = 1;
  while (roundCount <= 5) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    console.log(`round ${roundCount}!`);
    console.log(`user pick: ${humanChoice}`);
    console.log(`computer pick: ${computerChoice}`);
    playRound(humanChoice, computerChoice);
    roundCount++;
  }
  console.log(`final score: ${humanScore}-${computerScore}`)
}

playGame(); */