
//Hero button to greet the visitor!
const herobutton = document.querySelector("button");



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
    greeting.textContent = `Hello ${name}, My mums name is ${name}! Welcome to my page!`;
    }

    if (
    name.toLowerCase() === "dan"||
    name.toLowerCase() === "danz"||
    name.toLowerCase() === "daniel"
    ) {
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Action Dan!?
    The greatest hero of them all!?
     Welcome to my page!`;
    }


    else {
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Hello ${name},Welcome to my page!`;}

}

herobutton.addEventListener("click",greet);

