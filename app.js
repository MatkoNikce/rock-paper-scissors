let computerChoice = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let random = Math.floor(Math.random() * computerChoice.length);
    let choice = computerChoice[random];
    return choice;
}


function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        console.log("tie")

    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("you win rock vs sci")
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("you lose rock vs pap")
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("you lose sci vs rock")
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("you win sci vs pap")
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("you win pap vs rock")
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("you lose pap vs sci")
    }
    else {
        console.log("wtf")
    }

    return playerSelection && computerSelection;
}



const playerSelection = "scissors";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));


