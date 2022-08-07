"use strict";

// Makes sure the playerChoice string is all lowercase except first letter to properly match the choice array
function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// Propmpt the player to chooce between rock paper and scissors and returns the choice
function getPlayerChoice() {
    let playerChoice = prompt("Choose - Paper, Rock or Scissors?");
    playerChoice = capitaliseFirstLetter(playerChoice);
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
        return "draw";
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Scissors" && computerChoice === "Paper") || (playerChoice === "Paper" && computerChoice === "Rock")
    ) {
        return "player";
    } else {
        return "computer";
    }
}

// Compares playerScore with computerScore and returns a win/lose/draw message to game()
function anounceWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return `You beat the evil computer ${playerScore} to ${computerScore}! You win!`;
    } else if (computerScore > playerScore) {
        return `The evil computer beat you ${computerScore} to ${playerScore}! You lose!`;
    } else {
        return `${computerScore} to ${playerScore}! It's a draw!`;
    }
}

// The main game functions that runs 5 iterations of setting player/computer choices and then running a round and keeping tab on the scores
function game() {
    let playerChoice;
    let computerChoice;
    let playerScore = 0;
    let computerScore = 0;
    let roundResult;
    for (let i = 0; i < 5; i++) {
        playerChoice = getPlayerChoice();
        computerChoice = getComputerChoice();
        roundResult = playRound(playerChoice, computerChoice);
        if (roundResult === "player") {
            console.log(`${playerChoice} vs. ${computerChoice}! You win!`);
            ++playerScore;
        } else if (roundResult === "computer") {
            console.log(`${playerChoice} vs. ${computerChoice}! You lose!`);
            ++computerScore;
        } else {
            console.log(`${playerChoice} vs. ${computerChoice}! It's a draw!`);
        }
    }
    console.log(anounceWinner(playerScore, computerScore));
}

// Globals: the choice array and the invocation of the game function
const choice = ["Rock", "Paper", "Scissors"];
game();