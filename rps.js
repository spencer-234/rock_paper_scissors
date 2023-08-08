// get input from user
let playerChoice;
let playerChoices = ["rock", "paper", "scissors"];
while (playerChoices.indexOf(playerChoice) === -1) {
    playerChoice = prompt("Select 'rock', 'paper', or 'scissors': ").toLowerCase();
};

// get computer choice
function computerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return choice;
};

// compare two choices to declare winner

// loop 5 times and declare winner