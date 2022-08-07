"use strict";

// Makes sure the playerChoice string is all lowercase except first letter to properly match the choice array
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Propmpt the player to chooce between rock paper and scissors and returns the choice
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

// Randomly chooses the computerChoice out of the choice array
function getComputerChoice() {
    return choice[Math.floor(Math.random() * choice.length)];
}

// Plays one playRound, comparing the playerChoice and the computerChoice and returning the result
function playRound(playerChoice, computerChoice) {
    console.log(`You chose... ${playerChoice}!`);
    console.log(`The evil computer chose... ${computerChoice}!`);
    if (playerChoice === computerChoice) {
        return `${playerChoice} vs. ${computerChoice}! It's a draw!`;
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Scissors" && computerChoice === "Paper") || (playerChoice === "Paper" && computerChoice === "Rock")
    ) {
        return `${playerChoice} vs. ${computerChoice}! You win!`;
    } else {
        return `${playerChoice} vs. ${computerChoice}! You lose!`;
    }
}

// Previous version of playround code - so clumsy!

// if (playerChoice === "Rock") {
//     if (computerChoice === "Paper") {
//         return `${playerChoice} vs. ${computerChoice}! You lose!`;
//     } else {
//         return `${playerChoice} vs. ${computerChoice}! You win!`;
//     }
// } else if (playerChoice === "Paper") {
//     if (computerChoice === "Rock") {
//         return `${playerChoice} vs. ${computerChoice}! You win!`;
//     } else {
//         return `${playerChoice} vs. ${computerChoice}! You lose!`;
//     }
// } else {
//     if (computerChoice === "Rock") {
//         return `${playerChoice} vs. ${computerChoice}! You lose!`;
//     } else {
//         return `${playerChoice} vs. ${computerChoice}! You win!`;
//     }
// }


const choice = ["Rock", "Paper", "Scissors"];
const playerChoice = getPlayerChoice();
const computerChoice = getComputerChoice();

console.log(playRound(playerChoice, computerChoice));



