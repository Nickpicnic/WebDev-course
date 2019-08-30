var age = parseInt(prompt("How old are you?"));

if (age >= 0) {
    if (age == 21) {
        alert("happy 21st birthday");
    } 
    if (age % 2 ) {
        alert("Your age is odd!");
    }
    if (Number.isInteger(Math.sqrt(age))) {
        alert("Perfect square!");
    }
} else {
    alert("Sorry, you might be wrong, age cannot be negative.");
}