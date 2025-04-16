// playGame();

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
    return [`You lost this round! ${computerChoice} beats ${humanChoice}`, -1];
  }
  // if user won the round 
  else if (flag === 1) {
    return [`You won this round! ${humanChoice} beats ${computerChoice}`, 1];
  // if user had a tie
  } else if (flag === 2) {
    return [`This round is a tie. Both of you chose ${humanChoice}`, 0];
  }
}

// display result for each round
function displayResult(humanChoice, computerChoice, round) {
  // choices
  const liChoice = document.createElement('li');
  const liChoiceText = document.createTextNode(`Human: ${humanChoice}, Computer: ${computerChoice}`);
  liChoice.appendChild(liChoiceText);
  
  // round result
  const roundResult = document.createElement('ul');
  const liRound = document.createElement('li');
  const liRoundText = document.createTextNode(round);
  liRound.appendChild(liRoundText);
  roundResult.appendChild(liRound);
  
  // append them into html
  roundResults.appendChild(liChoice);
  roundResults.appendChild(roundResult);
}

// EVENT LISTENERS

// Single Round between User and Computer
const choices = document.querySelector('.choices');
const roundResults = document.querySelector('.results ul');
choices.addEventListener('click', (e) => {
  // get human, computer choices and result of match
  let humanChoice = e.target.innerText;
  let computerChoice = getComputerChoice();
  let round = playRound(humanChoice, computerChoice);
  
  // display the choices, result in html
  displayResult(humanChoice, computerChoice, round[0]);

  // update the score board
  const humanScore = document.querySelector('.human-score');
  const computerScore = document.querySelector('.computer-score');
  // user won
  if (round[1] === 1) {
    humanScore.textContent = +humanScore.textContent + 1;
  }
  // user lost 
  else if (round[1] === -1) {
    computerScore.textContent = +computerScore.textContent + 1;
  }

  watchScoreBoard(humanScore, computerScore);
});

// watch for 5 wins
function watchScoreBoard(humanScore, computerScore) {
  const status = document.querySelector('.status');
  if (humanScore.textContent === 5) {
    const textNode = document.createTextNode('`You Won The Game!`');
    status.appendChild(textNode);
  } else if (computerScore.textContent === 5) {
    const textNode = document.createTextNode(`You Lose The Game!`);
    status.appendChild(textNode);
  }
}


