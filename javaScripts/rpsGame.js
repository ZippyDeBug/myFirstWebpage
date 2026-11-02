// set variables for totalRounds , playerScore & CPU Score
let totalRounds = 0;
let playerScore = 0;
let cpuScore = 0; 

// Create const for finding buttons rock, paper, scissors & play again.
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const playAgainButton = document.querySelector("#playAgain");

// add event listener for rock, when clicked playGame(rock)
// add event listener for paper, when clicked playGame(paper)
// add event listener for scissors, when clicked playGame(scissors)
// Add event listener for playAgain, when clicked playAgain function
rockButton.addEventListener("click", function () {playGame("rock")} )
paperButton.addEventListener("click", function () {playGame("paper")})
scissorsButton.addEventListener("click", function () {playGame("scissors")})
playAgainButton.addEventListener("click", function () {playAgain(0)})


// create function for randomIntGen
// create function for cpuDecision
// create const for result of randomIntGen maximum number 3.
// if 0 then return rock, if 1 then return paper, Else then return scissors
function getRandomIntGen(max) {
    return Math.floor(Math.random()*max);
    }
function getCpuDecision() {
    const randomNumber = getRandomIntGen(3)
    if (randomNumber === 0) { 
        return "rock"
    }
    else if (randomNumber === 1) {
        return "paper"
    }
    else {
        return "scissors"
    }
}


// create function playGame(playerChoice)
// Increase number or total rounds by 1 iteration
// set const for getCpuDecision = cpuDecision()
// If values match fire Draw message
// If cpu decision beats human, Increase cpuScore by 1, fire loss message
// If human decision beats cpu increase playerScore by 1 fire win message
// Else return alert "error".
function playGame(playerChoice) {
    totalRounds++;
    const cpuDecision = getCpuDecision();
    if (playerChoice === cpuDecision) {
    console.log (playerChoice)
    console.log (cpuDecision);
    console.log ("A Draw!");
    console.log ((playerScore), (cpuScore))
    console.log ("Total Rounds:",(totalRounds))       
    }
    else if ((playerChoice === "rock" && cpuDecision === "scissors") ||
(playerChoice === "paper" && cpuDecision === "rock") || 
(playerChoice === "scissors" && cpuDecision === "paper" )) {
    playerScore++; 
    console.log (playerChoice)
    console.log (cpuDecision);
    console.log ("You win!")
    console.log ((playerScore), (cpuScore))    
    console.log ("Total Rounds:", (totalRounds))
    }
    else if (((playerChoice === "paper" && cpuDecision === "scissors") ||
(playerChoice === "scissors" && cpuDecision === "rock") || 
(playerChoice === "rock" && cpuDecision === "paper" ))) {
    cpuScore++; 
    console.log (playerChoice)
    console.log (cpuDecision);
    console.log ("CPU wins!");
    console.log ((playerScore), (cpuScore));
    console.log ("Total Rounds:", (totalRounds)) ;
    }
    else {
        Alert ("Error")
    }
    showScore("playerScore","cpuScore")
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
function showScore(player,cpu) {
    displayCpuScore.textContent = `${cpuScore}`;
    displayPlayerScore.textContent = `${playerScore}`;
    displayTotalRounds.textContent = `${totalRounds}`;
    
}



