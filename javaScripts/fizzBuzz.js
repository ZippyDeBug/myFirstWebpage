//fizzbuzz game setup

const fizzNumber = document.getElementById('fizzNumber')

const fizzSubmit = document.querySelector("#fizzSubmitButton")
fizzSubmit.addEventListener('click', checkNumber)

const fizzResult = document.querySelector("#fizzResult")

function checkNumber() { 
    let userFizzInput = Number(fizzNumber.value);

    // Guard rails for long numbers and zero
    if (userFizzInput > 9999) {
            console.log("Number is too big!")
            fizzResult.textContent = `Chill dude, 
            pick a smaller number! 
            9999 is the max.`
            return
    }

    else if (userFizzInput <= 0) {
        fizzResult.textContent = ""
        return
    }

    // and now the proper fizzbuzz
    else {
    
    for (let i =1; i <= userFizzInput; i++) {
        
        if ( i % 3 === 0 && i % 5 === 0) {
           console.log("FizzBuzz!");
           fizzResult.textContent = "FizzBuzz!"
        }
        else if ( i % 3 === 0) {
            console.log("Fizz");
            fizzResult.textContent = "Fizz!"
        }
        else if ( i % 5 === 0) {
            console.log("Buzz")
            fizzResult.textContent = "Buzz!"
        }
        else {
            console.log(i)
            fizzResult.textContent = `No Fizz, No Buzz,
            No FizzBuzz!`;
        }
    }

}

}


