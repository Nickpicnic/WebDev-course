var answer_1 =  "n";
var answer_2 = "n";
var steps = 1;
var search = 500;
var min = 0;
var max = 1000;

var list_of_search = "";

alert("Choose some number from 1 to 999");

while (answer_1 == "n") {
    list_of_search += steps + ". Min = " + min + ". Max = " + max + "\n";
    answer_1 = prompt("Is " + search + " your number? [y/n]\n\n" + list_of_search);
    if (answer_1 == "n") {
        answer_2 = prompt("Is it larger than " + search + "? [y/n]\n\n" + list_of_search);
        if (answer_2 == "y") {
            min = search;
            search = search + Math.floor((max - search) / 2);
        } else {
            max = search;
            search = search - Math.floor((search - min) / 2);
        }
        steps++;
    }
}
alert("Amazing! I guessed it by " + steps + " step(s)!\n" + list_of_search + "Don't you want to play again?");
