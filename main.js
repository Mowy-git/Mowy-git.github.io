var rps = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return rps[Math.floor(Math.random() * rps.length)];
}

function getHumanChoice() {
    return prompt("rock, paper, or scissors?").toLowerCase();
}

function playRound(getHumanChoice, getComputerChoice) {
    

    const h = document.querySelector("#humanscore");
    const c = document.querySelector("#computerscore");
    const result = document.querySelector("#result");

    if (humanScore >= 5) {
        result.innerHTML = "Human wins";
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore >= 5) {
        result.innerHTML = "Computer wins";
        humanScore = 0;
        computerScore = 0;
    }

    h.innerHTML = `Human score: ${humanScore}`;
    c.innerHTML = `Computer score: ${computerScore}`;
    if (!rps.includes(getHumanChoice)) {
        result.innerHTML = "Invalid";
    } else if (getHumanChoice == "rock" && getComputerChoice == "scissors" || getHumanChoice == "paper" && getComputerChoice == "rock" || getHumanChoice == "scissors" && getComputerChoice == "paper") {
        humanScore++;
    } else if (getComputerChoice == getHumanChoice) {
        result.innerHTML = "Draw";
    } else {
        computerScore++;
    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click" , () => {
    playRound("rock", getComputerChoice());
});

paper.addEventListener("click" , () => {
    playRound("paper", getComputerChoice());
});

scissors.addEventListener("click" , () => {
    playRound("scissors", getComputerChoice());
});
