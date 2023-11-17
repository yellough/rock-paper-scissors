function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice]
}

function playRound (playerSelection) {
    let message
    let computerSelection = getComputerChoice();
    choice.innerText = ("Player choice: " + playerSelection + "\nComputer choice: " + computerSelection)
    if (playerSelection == computerSelection) {
        return message = "It's a tie!";
    }
    else if ((playerSelection === 'rock' && computerSelection === 'paper') 
        || (playerSelection === 'paper' && computerSelection === 'scissors') 
        || (playerSelection === 'scissors' && computerSelection === 'rock')) {
            return message = "You Lose! " + computerSelection + " beats " + playerSelection;
    }
    else if ((playerSelection === 'rock' && computerSelection === 'scissors')
        || (playerSelection === 'paper' && computerSelection === 'rock')
        || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        return message = "You Win! " + playerSelection + " beats " + computerSelection;
    }
    else {
        return message = "Error: Please enter rock, paper, or scissors"
    }
}

let i = 0;
function game (playerSelection) { 
    let score;
    let playerScore = 0;
    let computerScore = 0;
    let message;
    if (i < 5) {

    score = playRound(playerSelection); 
    roundWinner.textContent = score;
    if (score.slice(0, 6) == "You Wi") {
        playerScore = playerScore + 1;
    }
    else if (score.slice(0,6) == "You Lo") {
        computerScore = computerScore + 1;
    }
}
    i = i +1;
    console.log(i);
    totalScore.textContent = ("Player: " + playerScore + " Computer: " + computerScore)

else {
    if (playerScore === computerScore) {
        message = "It's a tie!"
    }
    else if (playerScore > computerScore) {
        message = "You win!"
    }
    else {
        message = "You lose!"
    }
    console.log(message)

}
}

const choice = document.querySelector("#choice");
const roundWinner = document.querySelector("#winner");
const totalScore = document.querySelector("#score");
const selection = document.querySelector(".container");
selection.addEventListener("click", function (e) {
    playerSelection = e.target.getAttribute("id");
    game(playerSelection);
});




