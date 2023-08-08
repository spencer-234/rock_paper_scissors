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
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {
        let round = playRound(playerSelection, computerSelection);
        if ((round === "You win! Rock beats scissors.") || (round === "You win! Paper beats rock.") || (round === "You win! Scissors beats paper.")) {
            playerWins++;
        } else if (round === "It's a tie!") {
            computerWins += 0;
        } else {
            computerWins++;
        }
    }
    
    if (playerWins > computerWins) {
        return "You Win!";
    } else if (playerWins < computerWins) {
        return "You lose!";
    } else {
        return "It's a tie!";
    }
};

// get input from user
let playerSelection;
let playerChoices = ["rock", "paper", "scissors"];
while (playerChoices.indexOf(playerSelection) === -1) {
    playerSelection = prompt("Select 'rock', 'paper', or 'scissors': ").toLowerCase();
}

let computerSelection = getComputerChoice();