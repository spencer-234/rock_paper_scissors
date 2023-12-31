let playerSelection;
let computerSelection;
let playerWins = 0;
let computerWins = 0;
// get input from user
const choice = document.querySelectorAll('.choice');
const results = document.querySelector('.result');
const score = document.querySelector('.score');
const title = document.querySelector('.title');

const comChoice = document.querySelector('#com-choice');
const comImg = document.createElement('img');

const playerChoice = document.querySelector('#player-choice');
const playerImg = document.createElement('img');

const alertBtn = document.querySelector('.alert');
const winner = document.querySelector('.winner');
const resetBtn = document.querySelector('#reset');

const choiceDisplay = document.querySelector('.choices');


choice.forEach(choice => {
    choice.addEventListener('click', () => {
        playerSelection = choice.id;
        computerSelection = getComputerChoice();
        showComChoice();
        results.textContent = playRound(playerSelection, computerSelection);
        score.textContent = `${playerWins} - ${computerWins}`;
        checkScore();
    });
});

resetBtn.addEventListener('click', reset);

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
        choiceDisplay.style.display = 'none';
        winner.textContent = 'Congratulations! You Won!';
        alertBtn.style.backgroundColor = 'gold';
        alertBtn.style.display = 'flex';
        choice.forEach(choice => {
            choice.disabled = true;
        })
    } else if (computerWins === 5) {
        choiceDisplay.style.display = 'none';
        winner.textContent = 'You Lost!';
        alertBtn.style.backgroundColor = 'red';
        alertBtn.style.display = 'flex';
        choice.forEach(choice => {
            choice.disabled = true;
            choice.classList.add('no-events');
        })
    }
};

// display image of computer choice
function showComChoice () {
    switch (computerSelection) {
        case 'rock':
            comImg.setAttribute('src', './img/rock.png');
            comImg.setAttribute('alt', 'rock');
            comChoice.appendChild(comImg);
            break;
        case 'paper':
            comImg.setAttribute('src', './img/paper.png');
            comImg.setAttribute('alt', 'paper');
            comChoice.appendChild(comImg);
            break;
        case 'scissors':
            comImg.setAttribute('src', './img/scissors.png');
            comImg.setAttribute('alt', 'scissors');
            comChoice.appendChild(comImg);
            break;
        
    }

    switch (playerSelection) {
        case 'rock':
            playerImg.setAttribute('src', './img/rock.png');
            playerImg.setAttribute('alt', 'rock');
            playerChoice.appendChild(playerImg);
            break;
        case 'paper':
            playerImg.setAttribute('src', './img/paper.png');
            playerImg.setAttribute('alt', 'paper');
            playerChoice.appendChild(playerImg);
            break;
        case 'scissors':
            playerImg.setAttribute('src', './img/scissors.png');
            playerImg.setAttribute('alt', 'scissors');
            playerChoice.appendChild(playerImg);
            break;
        
    }
};

function reset() {
    playerWins = 0;
    computerWins = 0;
    score.textContent = `${playerWins} - ${computerWins}`;
    alertBtn.style.display = 'none';
    choiceDisplay.style.display = 'flex';
    comChoice.removeChild(comImg);
    playerChoice.removeChild(playerImg);
    results.textContent = "";
    choice.forEach(choice => {
        choice.disabled = false;
        choice.classList.remove('no-events');
    })
};