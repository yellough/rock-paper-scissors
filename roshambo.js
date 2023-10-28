function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let computerChoice = Math.floor(Math.random() * choices.length);
    console.log('Computer choice: ' + choices[computerChoice]);
    return choices[computerChoice]
}

function playRound (playerSelection, computerSelection) {
    let message
    playerSelection = playerSelection.toLowerCase()

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

function game () { 
    let computerSelection;
    let playerSelection;
    let score;
    let playerScore = 0;
    let computerScore = 0;
    let message;
    for ( i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        playerSelection = prompt('Enter rock, paper, or scissors');
        console.log("Player choice: " + playerSelection);
        score = playRound(playerSelection, computerSelection);
        console.log(score);
        if (score.slice(0, 6) == "You Wi") {
            playerScore = playerScore + 1;
        }
        else if (score.slice(0,6) == "You Lo") {
            computerScore = computerScore + 1;
        }
    console.log("Player: " + playerScore + " Computer: " + computerScore)
    }
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

game()


