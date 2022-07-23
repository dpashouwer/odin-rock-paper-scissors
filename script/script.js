
console.log(playRound("ROCK", getComputerChoice())); 

// Computer chooses
function getComputerChoice(){
    let options = ['Rock', 'Paper', 'Scissors'];
    ComputerChoice = options[Math.floor(Math.random()*options.length)];
    return ComputerChoice;
}

let playerSelection = "Rock"; 

function toTitleCase(str){
    strEnd = [];
    for (let i = 1; i < str.length; i++){
        strEnd.push(str[i]);
    }; 
    return str.charAt(0).toUpperCase() + strEnd.join("");
}

// Determine who wins
function playRound (playerSelection, computerSelection) {

    playerSelection = playerSelection.toTitleCase;
    computerSelection = computerSelection.toTitleCase;

    if (playerSelection == computerSelection) {
        return "Tied! You both picked " + playerSelection; 
    } else if(playerSelection == "Rock" && computerSelection == "Scissors") {
        return "You win! Rock beats Scissors";
    } else if(playerSelection == "Rock" && computerSelection == "Paper") {
        return "You lose! Paper beats Rock";
    } else if(playerSelection == "Paper" && computerSelection == "Rock"){
        return "You win! Paper beats Rock";
    } else if(playerSelection == "Paper" && computerSelection == "Scissors"){
        return "You lose! Scissors beats paper";
    } else if(playerSelection == "Scissors" && computerSelection == "Paper"){
        return "You win! Scissors beats Paper";
    } else if(playerSelection == "Scissors" && computerSelection == "Rock"){
        return "You lose! Rock beats Scissors"; 
    }; 
} 



let playerWinCount = 0
let computerWinCount = 0

function game(){
    if (playRound()){
        return "Player wins";
    } else {
        return "Computer wins"; 
    }
}





