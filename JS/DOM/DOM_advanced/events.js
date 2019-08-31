// DOM Events
//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//
// choose an object and add a LISTENER

// method = addEventListener

element.addEventListener(type, functionToCall);

var button = document.querySelector("button");
button.addEventListener("click", function() {
    console.log("SOMEONE CLICKED THE BUTTON!");
});

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

//EXAMPLE
// let's display a message when a button is clicked

// <button>Click Me</button>
// <p>No One Has Clicked Me Yet</p>

var button = document.querySelector("button");
var paragraph = document.querySelector("p");

// SETUP CLICK LISTENER
button.addEventListener("click", function(){
    paragraph.textContent = "Someone Clicked the Button!";
});

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––


