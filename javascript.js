
//Hero button to greet the visitor!
const herobutton = document.querySelector("#herobutton");



function greet() {
    let name = prompt(`What is your name?`);
    
    // preventing null entries
    if (name === null) {
        return;        
    }
    
    //Re-assigning name to apply  formatting here
    name = name.charAt(0).toUpperCase() +
    name.slice(1).toLowerCase();


    
    //list of names we care about for custom messages!

    if (name.toLowerCase() === "susan") {
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Hello ${name}, My mums name is ${name}!`;
    }

    else if (name.toLowerCase() === "simon") {
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Hello ${name}, My dads name is ${name}!`;
    }

    else if (
    name.toLowerCase() === "dan"||
    name.toLowerCase() === "danz"||
    name.toLowerCase() === "daniel"
    ) {
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Action Dan!?
    The greatest hero of them all!?`;
    }

    else if (name.toLowerCase() === "charlie") {
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Is that Cecil Thundersausage?!`;
    }

    else if (name.toLowerCase() === "willow") {
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Hey ${name}! You're the best!`;
    }

    else if (name.toLowerCase() === "beth") {
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Hey Beanie! Thanks for coming!`;
    }

    else if (name.toLowerCase() === "becky") {
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Hey Becky Boo! Thanks for coming!`;
    }

    else if (name.toLowerCase() === "asha") {
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Hey baby! 
    Thanks for coming!`;
    }

    else if (name.toLowerCase() === "jenny") {
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Don't worry, I did one for you too Jenny!`;
    }

    else if (name.toLowerCase() === "hamit") {
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Awww Hammy, I knew you cared!`;
    }
    
    else if (name.toLowerCase() === "John") {
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Sup' John, cheers for popping by mate.`;
    }

    else if (name.toLowerCase() === "patri") {
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Hola, Patricio.
Gracias por venir!`;
    }

        
    else {
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Hello ${name},Welcome to my page!`;}

}

herobutton.addEventListener("click",greet);

