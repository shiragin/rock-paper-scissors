"use strict";

const choice = ["Rock", "Paper", "Scissors"];
const playerChoice = "Rock";
const computerChoice = getComputerChoice();

function getComputerChoice() {
    return choice[Math.floor(Math.random() * choice.length)];
}

console.log(playerChoice, computerChoice);



