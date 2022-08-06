"use strict";

const choice = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return choice[Math.floor(Math.random() * choice.length)];
}

console.log(getComputerChoice());

