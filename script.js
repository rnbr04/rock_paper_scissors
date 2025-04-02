let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playRound(humanChoice, computerChoice) {
  // sanitize the user input
  humanChoice = humanChoice.toLowerCase();
  
  // create flag for user's win or loss assuming default loss
  let flag = 0;

  // game logic assuming cases for user's win
  if (humanChoice === "rock" && computerChoice === "scissors") {
    flag = 1;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    flag = 1;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    flag = 1;
  } else if (humanChoice === computerChoice) {
    flag = 2;
  }

  // if user lose the round
  if (flag === 0) {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }
  // if user won the round 
  else if (flag === 1) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  // if user had a tie
  } else if (flag === 2) {
    console.log(`It's a tie. Both of you chose ${humanChoice}`)
  }
}

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
    
    case 1:
      return "paper";

    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Enter rock/paper/scissors: ");
  
  return choice;
}
