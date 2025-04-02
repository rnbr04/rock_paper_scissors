playGame();

// function to play 5 rounds of the game and declare final winner
function playGame() {
  // declare score variables
  let humanScore = 0;
  let computerScore = 0;

  // play the game for 5 rounds
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  finalWinner(humanScore, computerScore);

  // function to find winner for a single round
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
      console.log(`You lost this round! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
    // if user won the round 
    else if (flag === 1) {
      console.log(`You won this round! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    // if user had a tie
    } else if (flag === 2) {
      console.log(`This round is a tie. Both of you chose ${humanChoice}`);
    }
  }
}  

// function to find the final winner
function finalWinner(humanScore, computerScore) {
  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (humanScore < computerScore) {
    console.log("You lose the game!");
  } else {
    console.log("It's a tie!")
  }
}

// function to generate computer choice
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

// function to receive player's choice
function getHumanChoice() {
  let choice = prompt("Enter rock/paper/scissors: ");
  
  return choice;
}
