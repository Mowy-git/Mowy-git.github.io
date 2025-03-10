var rps = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let draw = 0;

function getComputerChoice() {
    return rps[Math.floor(Math.random() * rps.length)];
}

function getHumanChoice() {
    return prompt("rock, paper, or scissors?").toLowerCase();
}

function playRound(getHumanChoice, getComputerChoice) {
    if (!rps.includes(getHumanChoice)) {
        console.log("Invalid");
    } else if (getHumanChoice == "rock" && getComputerChoice == "scissors" || getHumanChoice == "paper" && getComputerChoice == "rock" || getHumanChoice == "scissors" && getComputerChoice == "paper") {
        humanScore++;
    } else if (getHumanChoice == getComputerChoice) {
        draw++;
    } else {
        computerScore++;
    }
}

function playGame() {
    
    for (let i=0;i<5;i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        console.log(humanSelection);
        console.log(computerSelection);
        console.log("\n");
        playRound(humanSelection, computerSelection);
    }

    console.log(`Score: \nHuman: ${humanScore} \nComputer: ${computerScore}`);

    if (draw > 0)
        console.log(`Draw: ${draw}`)

    if (humanScore > computerScore)
        console.log("Human wins");
    else if (humanScore < computerScore)
        console.log("Computer wins");
    else
        console.log("Draw");
}


playGame();


