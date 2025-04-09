// console.log("Hello World!");

// randomly pick rock, paper, or scissors (return as a string)
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

// console.log(getComputerChoice());

function getHumanChoice() {
  let choice = prompt("choose rock, paper, or scissors!");
  return choice;
}

// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;