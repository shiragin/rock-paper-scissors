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

// function playRound(playerChoice, computerChoice) {
//     if (playerChoice === "")
// }

const choice = ["Rock", "Paper", "Scissors"];
const playerChoice = getPlayerChoice();
const computerChoice = getComputerChoice();

console.log(playerChoice, computerChoice);



