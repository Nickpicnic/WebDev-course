// Condition key words
//If
//Else If
//Else

var age = parseInt(prompt("How old are you?"));

if (age < 18) {
    alert("Sorry, you cannot pass!");
} else if (age < 21) {
    alert("You can pass, but you won't drink anything.");
} else {
    alert("Alright, feel free to do anything you want.");
}