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

// play a round and increment score accordingly
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
    case 3:
      console.log(`you lose! '${humanChoice}' isn't a valid choice...`)
  }
}

// function that takes both rps picks and checks if user wins (returns 0) loses (returns 1) draws (returns 2) or had input something weird (returns 3)
function checkWinner (humanChoice, computerChoice) {
  switch(humanChoice) {
    case "rock":
      if (computerChoice === "scissors") {
        return 0;
        break;
      } else if (computerChoice === "paper") {
        return 1;
        break;
      } else {
        return 2;
        break;
      }
    
    case "paper":
      if (computerChoice === "rock") {
        return 0;
        break;
      } else if (computerChoice === "scissors") {
        return 1;
        break;
      } else {
        return 2;
        break;
      }
  
    case "scissors":
      if (computerChoice === "paper") {
        return 0;
        break;
      } else if (computerChoice === "rock") {
        return 1;
        break;
      } else {
        return 2;
        break;
      }

    default:
      return 3;
      break;
  }
}

// play 5 rounds and display scores
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

playGame();