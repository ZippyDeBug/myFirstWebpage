//fizzbuzz game

const fizzNumber = document.getElementById('fizzNumber')

const fizzSubmit = document.querySelector("#fizzSubmitButton")
fizzSubmit.addEventListener('click', checkNumber)

function checkNumber() { 
    let userFizzInput = Number(fizzNumber.value);
    
    for (let i =1; i <= userFizzInput; i++) {
        if ( i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz!")
        }
        else if ( i % 3 === 0) {
            console.log("Fizz");
        }
        else if ( i % 5 === 0) {
            console.log("Buzz")
        }
        else {
            console.log(i)
        }
    }

}


