let computerChoice = ["rock", "paper", "scissors"];
let points = 0;
const rock = document.querySelector('#btn-rock');
const paper = document.querySelector('#btn-paper');
const scissors = document.querySelector('#btn-sci');
const result = document.querySelector('#container')

const pointCounter = document.createElement('div')
pointCounter.classList.add('pointCounter')
pointCounter.textContent = 'Points are:';

result.appendChild(pointCounter);



rock.addEventListener('click', () => {
    playRound("rock");
});
paper.addEventListener('click', () => {
    playRound("paper");
});
scissors.addEventListener('click', () => {
    playRound("scissors");
});



function playRound(playsel) {

    function computerSelection() {
        let random = Math.floor(Math.random() * computerChoice.length);
        let choice = computerChoice[random];
        return choice;
    }

    let compuSel = computerSelection();

    if (playsel === compuSel) {
        console.log("tie")
        result.textContent = 'Tie!'
        points = points + 0

    } else if (playsel === "rock" && compuSel === "scissors") {
        console.log("you win rock vs sci")
        result.textContent = 'You Win!'
        pointCounter.textContent = "Points are:", points + 1;

    } else if (playsel === "rock" && compuSel === "paper") {
        console.log("you lose rock vs pap")
        result.textContent = 'You Lose!'
        pointCounter.textContent = "Points are:", points - 1;

    } else if (playsel === "scissors" && compuSel === "rock") {
        console.log("you lose sci vs rock")
        result.textContent = 'You Lose!'
        pointCounter.textContent = "Points are:", points - 1;

    } else if (playsel === "scissors" && compuSel === "paper") {
        console.log("you win sci vs pap")
        result.textContent = 'You Win!'
        pointCounter.textContent = "Points are:", points + 1;

    } else if (playsel === "paper" && compuSel === "rock") {
        console.log("you win pap vs rock")
        result.textContent = 'You Win!'
        pointCounter.textContent = "Points are:", points + 1;

    } else if (playsel === "paper" && compuSel === "scissors") {
        console.log("you lose pap vs sci")
        result.textContent = 'You Lose!'
        pointCounter.textContent = "Points are:", points - 1;

    }
    else {
        console.log("wtf")
    }

    return points;
}



