
//Hero button to greet the visitor!
const herobutton = document.querySelector("#herobutton");

herobutton.addEventListener("click",greet);

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
    
    else if (name.toLowerCase() === "john") {
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
    greeting.textContent = `Hello ${name},`;}

}



//Favourite turtle choices

const tmntselector = document.querySelector("#tmntSelector");
const blurb = document.querySelector("#tmntBlurb");


tmntselector.addEventListener(`change`, pickFave);

function pickFave() {
    const choice = tmntselector.value;

    if (choice === "Leo") {
        blurb.textContent = `The leader, splinters best boy?
        The dude should have been a 
        Teenage Mutant ninja Puppy.`;
        
    }
    else if (choice === "Donny") {
        blurb.textContent = `The brains, the techie?
        You big ol' nerd.`;
    }

    else if (choice === "Raph") {
        blurb.textContent = `The bad guy, the rough-houser?
        You are such an edgelord try hard.`;
    }

    else if (choice ===`Mikey`) {
        blurb.textContent = `He's the party dude, the clown?
        Frankly he's the only right answer to this,
        Everyone else need to loosen up!`;
    }

    else {
        blurb.textContent = ``;
    }

}

//changing colors for turtles! using SWITCH method!

    const info = document.querySelector(`.info`);

    tmntselector.addEventListener(`change`, () => {
    const choice = tmntselector.value;

switch (choice) {
    case `Leo`:
        update("blue", "white");
    break;
    case `Donny` :
        update(`purple`, `white`);
        break;
    case `Raph` :
        update(`red`, `black`);
        break;
    case `Mikey`:
        update(`orange`,`black`);
        break;   

    default :
    update("white", "black")
}
});

function update(bgColor, textColor) {
    info.style.backgroundColor = bgColor;
    info.style.color = textColor;
}



//Login alert  functionality take 2 
//THIS IS NOT HOW PASSWORDS SHOULD BE STORED!
//PRACTICE FOR if AND else ONLY!

const loginButton = document.querySelector (`#login`);

loginButton.addEventListener(`click`, credentials );

function credentials () {
let userName = prompt("What is your username?");

if (userName === 'Bossman') {
    let pass = prompt('what is your password?');

    if (pass === 'THEbossman!') {
        alert ('Welcome!')
    }

    else if (pass === '' || pass === null) {
        alert ('cancelled')
    }

     else  {
        alert ('Wrong Password')
    }
}

 else if (userName === '' || userName === null) {
    alert ('cancelled')
 }
  
 else {
    alert ("I don't know you")
}

 
 }



