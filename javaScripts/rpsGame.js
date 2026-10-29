



//this controls the number of round we want to play.
const gameRounds = 5

//Create a function to generate a random integer number between 0 and 2.
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}
//Create a function to getComputerChoice select R P or S.
//Call Random integer generate for a number between 0-2
//if 0 then return rock
//if 1 then return paper
//if 2 then return scissors
function getComputerChoice() {
    const cpuChoice = getRandomInt(3); 
    if (cpuChoice === 0) {
        return "Rock";
    }
    
    else if (cpuChoice === 1) {
        return "Paper";
    }

    else {
        return "Scissors";
    }
        
}


//create constant to find text field for userInput
const rpsChoice = document.getElementById("#rpsChoice");
//create constant to look for clicks on Submit button and start humanChoice function.
const inputSubmitted = document.querySelector("#rpsInputButton");
/* inputSubmitted.addEventListener('click', testInput ) */



