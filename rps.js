let playerSelection;
let computerSelection;
let playerWins = 0;
let computerWins = 0;
// get input from user
const choice = document.querySelectorAll('.choice');
const results = document.querySelector('.result');
const score = document.querySelector('.score');
const winner = document.querySelector('.winner');
const title = document.querySelector('.title');

choice.forEach(choice => {
    choice.addEventListener('click', () => {
        playerSelection = choice.id;
        computerSelection = getComputerChoice();
        results.textContent = playRound(playerSelection, computerSelection);
        score.textContent = `${playerWins} - ${computerWins}`;
        checkScore();
    });
});

// get computer choice
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
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
        alert("You Win!");
    } else if (computerWins === 5) {
        alert("You Lose!");
    }
};