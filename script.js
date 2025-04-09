// randomly pick rock/paper/scissors and return as string
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

// get user pick of rock/paper/scissors
function getHumanChoice() {
  let choice = prompt("choose rock, paper, or scissors!");
  return choice.toLowerCase();
}

// global variables to track scores
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  let result = checkWinner(humanChoice, computerChoice) // helper function to pick the winner
  switch (result) {
    case 0:
      console.log(`you win! ${humanChoice} beats ${computerChoice}`);
      ++humanScore;
      break;
    case 1:
      console.log(`you lose! ${computerChoice} beats ${humanChoice}`);
      ++computerScore;
      break;
    case 2:
      console.log(`draw! you both picked ${humanChoice}`)
      break;
  }
}