"use strict";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getPlayerChoice() {
    let playerChoice = prompt("Choose - Paper, Rock or Scissors?");
    playerChoice = capitalizeFirstLetter(playerChoice);
    if (!choice.includes(playerChoice)) {
        console.log("Your choice was invalid. Please choose again.");
        return getPlayerChoice();
    } else {
        return playerChoice;
    }
}

function getComputerChoice() {
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerChoice, computerChoice) {
    console.log(`You chose... ${playerChoice}!`);
    console.log(`The evil computer chose... ${computerChoice}!`);
    if (playerChoice === computerChoice) {
        return `${playerChoice} vs. ${computerChoice}! It's a draw!`;
    } else {
        if (playerChoice === "Rock") {
            if (computerChoice === "Paper") {
                return `${playerChoice} vs. ${computerChoice}! You lose!`;
            } else {
                return `${playerChoice} vs. ${computerChoice}! You win!`;
            }
        } else if (playerChoice === "Paper") {
            if (computerChoice === "Rock") {
                return `${playerChoice} vs. ${computerChoice}! You win!`;
            } else {
                return `${playerChoice} vs. ${computerChoice}! You lose!`;
            }
        } else {
            if (computerChoice === "Rock") {
                return `${playerChoice} vs. ${computerChoice}! You lose!`;
            } else {
                return `${playerChoice} vs. ${computerChoice}! You win!`;
            }
        }
    }
}

const choice = ["Rock", "Paper", "Scissors"];
const playerChoice = getPlayerChoice();
const computerChoice = getComputerChoice();

console.log(playRound(playerChoice, computerChoice));



