let playerSelection;
let computerSelection;
let playerWins = 0;
let computerWins = 0;
// get input from user
const buttons = document.querySelectorAll('button');
const results = document.querySelector('.container');
const score = document.querySelector('.score');
const winner = document.querySelector('.winner');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        playerSelection = button.textContent.toLowerCase();
        computerSelection = getComputerChoice();
        results.textContent = playRound(playerSelection, computerSelection);
        score.textContent = `${playerWins} - ${computerWins}`;
        checkScore();
    });
});

// get computer choice
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let choice= choices[Math.floor(Math.random() * choices.length)];
    return choice;
};


// compare two choices to declare winner
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerWins++
        return "You win! Rock beats scissors.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerWins++
        return "You win! Paper beats rock.";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerWins++
        return "You win! Scissors beats paper.";
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        computerWins++
        return "You lose! Rock beats scissors.";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        computerWins++
        return "You lose! Paper beats rock.";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        computerWins++
        return "You lose! Scissors beats paper.";
    } else {
        return "It's a tie!";
    }
};

// check score function
function checkScore() {
    if (playerWins === 5) {
        winner.textContent = 'You Won!';
    } else if (computerWins === 5) {
        winner.textContent = 'You Lose!';
    }
};