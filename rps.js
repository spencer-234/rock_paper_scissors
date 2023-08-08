// get computer choice
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let choice= choices[Math.floor(Math.random() * choices.length)];
    return choice;
};


// compare two choices to declare winner
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock.";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats paper.";
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        return "You lose! Rock beats scissors.";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        return "You lose! Paper beats rock.";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return "You lose! Scissors beats paper.";
    } else {
        return "It's a tie!";
    }
};

// loop 5 times and declare winner
function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
    }
};

// get input from user
let playerSelection;
let playerChoices = ["rock", "paper", "scissors"];
while (playerChoices.indexOf(playerSelection) === -1) {
    playerSelection = prompt("Select 'rock', 'paper', or 'scissors': ").toLowerCase();
}

let computerSelection = getComputerChoice();