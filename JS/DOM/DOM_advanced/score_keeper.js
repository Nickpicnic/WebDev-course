// SCORE VARIABLES
var firstScore = 0;
var secondScore = 0;
var maxScore = 5;

var gameOver = false;

// BUTTONS
var pOne = document.getElementById("one");
var pTwo = document.getElementById("two");
var resetButton = document.getElementById("reset");
var maxInput = document.getElementsByTagName("input")[0];

// SCORE DISPLAY
var displayFirst = document.querySelector("#first");
var displaySecond = document.querySelector("#second");
var displayMax = document.querySelector("p span");

maxInput.addEventListener("change", function(){
    displayMax.textContent = maxInput.value;
    maxScore = parseInt(maxInput.value);
});

pOne.addEventListener("click", function(){ 
    if (!gameOver) {
        firstScore++;
        displayFirst.textContent = firstScore;
        if (firstScore === maxScore){
            displayFirst.style.color = "green";
            gameOver = !gameOver;
        };
    };
});

pTwo.addEventListener("click", function(){ 
    if (!gameOver) {
        secondScore++;
        displaySecond.textContent = secondScore;
        if (secondScore === maxScore){
            displaySecond.style.color = "green";
            gameOver = !gameOver;
        };
    };
});

resetButton.addEventListener("click", function(){
    firstScore = secondScore = 0;
    gameOver = !gameOver;
    
    displayFirst.textContent = firstScore;
    displayFirst.style.color = "black";

    displaySecond.textContent = secondScore;
    displaySecond.style.color = "black";
})