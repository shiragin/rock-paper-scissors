"use strict";

// Randomly chooses the computerChoice out of the choice array
function getComputerChoice() {
    return choice[Math.floor(Math.random() * choice.length)];
}

// Compares the playerChoice and the computerChoice and returning the result
function roundWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return `${playerChoice} vs. ${computerChoice}! It's a draw!`;
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Scissors" && computerChoice === "Paper") || (playerChoice === "Paper" && computerChoice === "Rock")
    ) {
        ++playerScore;
        return `${playerChoice} vs. ${computerChoice}! You win!`
    } else {
        ++computerScore;
        return `${playerChoice} vs. ${computerChoice}! You lose!`;
    }
}

// Compares playerScore with computerScore and returns a win/lose/draw message
function anounceWinner(playerScore, computerScore) {
    let winner;
    if (playerScore > computerScore) {
        winner = `You beat the evil computer ${playerScore} to ${computerScore}! You win!`;
    } else if (computerScore > playerScore) {
        winner = `The evil computer beat you ${computerScore} to ${playerScore}! You lose!`;
    } else {
        winner = `${computerScore} to ${playerScore}! It's a draw!`;
    }
    gameWinner.textContent = winner;
    container.appendChild(gameWinner);
}

// Checks if the player wants to play again
function playAgain() {
    container.appendChild(replay);
    replay.addEventListener('click', resetGame);
}

// Resets the game 

function resetGame() {
    container.removeChild(results);
    results.textContent = '';
    container.removeChild(gameWinner);
    container.removeChild(replay);
    roundNumber = 1;
    playerScore = 0;
    computerScore = 0;
    buttons.addEventListener('click', playRound);
}

// Plays one round and displays choices

function playRound(e) {

    // Gets the player choice from button press
    console.log(e.target, e.target.textContent);
    if (e.target.nodeName !== 'BUTTON') return;

    let playerChoice = e.target.textContent;

    // Gets the computer choice for function
    let computerChoice = getComputerChoice();

    // Gets the round result 
    let result = roundWinner(playerChoice, computerChoice);

    // Displays the results div
    container.appendChild(results);

    // Displays the player choice
    let playerResult = document.createElement('h3');
    playerResult.className = 'player';
    playerResult.textContent = `You chose... ${playerChoice}!`
    results.appendChild(playerResult);

    // Displays the computer choice
    let computerResult = document.createElement('h3');
    computerResult.className = 'computer';
    computerResult.textContent = `The evil computer chose... ${computerChoice}!`
    results.appendChild(computerResult);

    // Displays the round winner
    let roundResult = document.createElement('h3');
    roundResult.className = 'result';
    roundResult.textContent = result;
    results.appendChild(roundResult);

    // Returns round number
    console.log(roundNumber, playerScore, computerScore);

    if (roundNumber == 5) {
        anounceWinner(playerScore, computerScore);
        buttons.removeEventListener('click', playRound);
        playAgain();
    } else return roundNumber += 1;
}

// Globals

// Computer choice array 
const choice = ["Rock", "Paper", "Scissors"];

// Declares rounds counter, computer win, player win
let roundNumber = 1;
let playerScore = 0;
let computerScore = 0;

// Create results div
const container = document.querySelector('.container');

const results = document.createElement('div');
results.className = 'results';

const gameWinner = document.createElement('h1');
gameWinner.className = 'winner';

const replay = document.createElement('button');
replay.className = 'again';
replay.textContent = 'Play again?';

// Add event listener for all buttons
const buttons = document.querySelector('.buttons');
buttons.addEventListener('click', playRound);