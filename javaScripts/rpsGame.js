// set variables for totalRounds , playerScore & CPU Score
let totalRounds = 0;
let playerScore = 0;
let cpuScore = 0; 

// Create const for finding buttons rock paper & scissors
const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")

// Create Const for finding play again button
//const playAgainButton = document.getElementById("#playAgain")

// add event listener for rock, when clicked playGame(rock)
rockButton.addEventListener("click", function () {playGame("rock")} )
// add event listener for paper, when clicked playGame(paper)
paperButton.addEventListener("click", function () {playGame("paper")})
// add event listener for scissors, when clicked playGame(scissors)
scissorsButton.addEventListener("click", function () {playGame("scissors")})
// Add event listener for playAgain, when clicked playAgain function
//playAgainButton.addEventListener("click", playAgain())


// create function for randomIntGen
function getRandomIntGen(max) {
    return Math.floor(Math.random()*max);
    }

// create function for cpuDecision
// create const for result of randomIntGen maximum number 3.
// if 0 then return rock, if 1 then return paper, Else then return scissors
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
function playGame(playerChoice) {
    totalRounds++;
    const cpuDecision = getCpuDecision();

    if (playerChoice === cpuDecision) {
    console.log (playerChoice)
    console.log (cpuDecision);
    console.log ("A Draw!");
    console.log ((playerScore), (cpuScore))       
    }

    else if ((playerChoice === "rock" && cpuDecision === "scissors") ||
(playerChoice === "paper" && cpuDecision === "rock") || 
(playerChoice === "scissors" && cpuDecision === "paper" )) {
    playerScore++; 
    console.log (playerChoice)
    console.log (cpuDecision);
    console.log ("You win!")
    console.log ((playerScore), (cpuScore))
    }

    else {
    cpuScore++; 
    console.log (playerChoice)
    console.log (cpuDecision);
    console.log ("CPU wins!")
    console.log ((playerScore), (cpuScore))
    }

}
// set const for getCpuDecision = cpuDecision()
// Increase totalRounds by 1
// If values match 
// fire Draw message
// Else if cpu decision beats human 
// Increase cpuScore by 1
// fire loss message
// Else if human decision beats cpu
// Increase playerScore by 1
// fire win message
// Else return alert "error".


// create playAgain function
// Reset playerScore to 0
// Reset cpuScore to 0
// Reset totalRounds to 0


