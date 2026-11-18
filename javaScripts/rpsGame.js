// set variables for totalRounds , playerScore & CPU Score
let totalRounds = 0;
let playerScore = 0;
let cpuScore = 0; 

// Create const for finding buttons rock, paper, scissors & play again.
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const playAgainButton = document.querySelector("#playAgain");

//create const for player score divs for messages
const resultPlace = document.querySelector(".results")


let playerChoice = ""
let cpuChoice = ""
let winner = ""
let result = ""


// add event listener for rock, when clicked playGame(rock)
// add event listener for paper, when clicked playGame(paper)
// add event listener for scissors, when clicked playGame(scissors)
// Add event listener for playAgain, when clicked playAgain function
rockButton.addEventListener("click", function () {playGame("rock")} )
paperButton.addEventListener("click", function () {playGame("paper")})
scissorsButton.addEventListener("click", function () {playGame("scissors")})
playAgainButton.addEventListener("click", function () {playAgain(0)})


// create general helper function for randomIntGen

function getRandomIntGen(max) {
    return Math.floor(Math.random()*max);
    }

// create function for cpuDecision
// create const for result of randomIntGen maximum number 3.
// if 0 then return rock, if 1 then return paper, Else then return scissors
function getCpuChoice() {
    const randomNumber = getRandomIntGen(3)
    if (randomNumber === 0) { 
        return "rock";
    }
    else if (randomNumber === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}


//create function for checking winner based on player and CPU choices.
// if matching , return draw
// if player wins, return player
// if cpu wins return cpu

function checkWinner(playerChoice, cpuChoice) {
    if (playerChoice === cpuChoice) {
    return"draw"
    }
    else if ((playerChoice === "rock" && cpuChoice === "scissors") ||
(playerChoice === "paper" && cpuChoice === "rock") || 
(playerChoice === "scissors" && cpuChoice === "paper" )) {
    return "player"
    }
    else if (((playerChoice === "paper" && cpuChoice === "scissors") ||
(playerChoice === "scissors" && cpuChoice === "rock") || 
(playerChoice === "rock" && cpuChoice === "paper" ))) {
    return "cpu"
    }
    else {
        alert ("Error2")
    }

}

// create function playGame taking the playerSelection from buttons.
// Increase number or total rounds by 1 iteration
// update playerChoice to match playerSelection
// Call CPU Decision engine to set cpuChoice.
// If result is draw, set result message to draw
// If result is cpu, Increase cpuScore by 1, set result message to loss
// If result is player increase playerScore by 1, set result message to win.
// run show score function
// rune results message function

function playGame(playerSelection) {
    totalRounds++;
    playerChoice = playerSelection;
    cpuChoice = getCpuChoice();
    winner = checkWinner(playerChoice, cpuChoice);
    if (winner === "draw") {
    result = `${playerChoice} matches ${cpuChoice}. 
    A draw!`     
    }
    else if (winner === "player") {
    playerScore++; 
    result = `${playerChoice} beats ${cpuChoice}.
    You Win!`
    }
    else if (winner === "cpu") {
    cpuScore++; 
    result = `${playerChoice} is beaten by ${cpuChoice}. CPU Wins!`
    }
    showScore(playerScore,cpuScore);
    resultMessage(result)
}


// create playAgain function
// Reset totalRounds to 0
// Reset playerScore to 0
// Reset cpuScore to 0
// console state game reset , player scores and round total.
function playAgain(i) {
    totalRounds = i;
    playerScore = i;
    cpuScore = i;
    showScore("playerScore","cpuScore")
    console.log( "Game reset!")
    console.log ((playerScore), (cpuScore));
    console.log ("Total Rounds:", (totalRounds)) ;
}



//create const for finding the scorePoints "span" within cpuScore div
const displayCpuScore = document.querySelector("#cpuScore");
//create const for finding the scorePoints "span" within playerScore div
const displayPlayerScore = document.querySelector("#playerScore");
//create const for finding the totalRounds Div.
const displayTotalRounds = document.querySelector("#totalRounds");


//create function for display Score
//text content for cpuScore score points span to be "cpuScore"
//text content for playerScore score points span to be "playerScore"
//text content for total rounds to be "totalRounds"
function showScore() {
    displayCpuScore.textContent = `${cpuScore}`;
    displayPlayerScore.textContent = `${playerScore}`;
    displayTotalRounds.textContent = `${totalRounds}`;
    
}


//create function for adding win or lose message
function resultMessage(result) {
    const messageDiv = document.createElement("div");
    messageDiv.textContent = result;
    resultPlace.appendChild(messageDiv);
}



