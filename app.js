let computerChoice = ["rock", "paper", "scissors"];
let points = 0;




function playRound() {

    let playsel = prompt("Rock, Paper, Scissors!", "Write your choice");

    function computerSelection() {
        let random = Math.floor(Math.random() * computerChoice.length);
        let choice = computerChoice[random];
        return choice;
    }

    let compuSel = computerSelection();

    if (playsel.toLowerCase() === compuSel) {
        console.log("tie")
        points = points + 0

    } else if (playsel.toLowerCase() === "rock" && compuSel === "scissors") {
        console.log("you win rock vs sci")
        points = points + 1

    } else if (playsel.toLowerCase() === "rock" && compuSel === "paper") {
        console.log("you lose rock vs pap")
        points = points - 1

    } else if (playsel.toLowerCase() === "scissors" && compuSel === "rock") {
        console.log("you lose sci vs rock")
        points = points - 1

    } else if (playsel.toLowerCase() === "scissors" && compuSel === "paper") {
        console.log("you win sci vs pap")
        points = points + 1

    } else if (playsel.toLowerCase() === "paper" && compuSel === "rock") {
        console.log("you win pap vs rock")
        points = points + 1

    } else if (playsel.toLowerCase() === "paper" && compuSel === "scissors") {
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

function winner() {

    if (points => 0) {
        console.log("yo win")
    } else {
        console.log("you lose")
    }
    return;
}




console.log(game(playRound()));
console.log(winner());


