let computerChoice = ["rock", "paper", "scissors"];
let points = 0;




function playRound() {

    let playsel = prompt("Rock, Paper, Scissors!", "Write your choice");

    function computerSelection() {
        let random = Math.floor(Math.random() * computerChoice.length);
        let choice = computerChoice[random];
        return choice;
    }

    if (playsel.toLowerCase() === computerSelection()) {
        console.log("tie")
        points = points + 0

    } else if (playsel.toLowerCase() === "rock" && computerSelection() === "scissors") {
        console.log("you win rock vs sci")
        points = points + 1

    } else if (playsel.toLowerCase() === "rock" && computerSelection() === "paper") {
        console.log("you lose rock vs pap")
        points = points - 1

    } else if (playsel.toLowerCase() === "scissors" && computerSelection() === "rock") {
        console.log("you lose sci vs rock")
        points = points - 1

    } else if (playsel.toLowerCase() === "scissors" && computerSelection() === "paper") {
        console.log("you win sci vs pap")
        points = points + 1

    } else if (playsel.toLowerCase() === "paper" && computerSelection() === "rock") {
        console.log("you win pap vs rock")
        points = points + 1

    } else if (playsel.toLowerCase() === "paper" && computerSelection() === "scissors") {
        console.log("you lose pap vs sci")
        points = points - 1

    }
    else {
        console.log("wtf")
    }

    return points;
}

let game = () => {

    playRound();

    playRound();

    playRound();

    playRound();

    return;
}






console.log(game(playRound()));
console.log(points);


