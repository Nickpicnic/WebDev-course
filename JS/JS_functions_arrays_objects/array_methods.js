//ARRAY METHODS
//
//push / pop
//
//shift / unshift
//
//indexOf
//
//slice

//––––––––––––––––––––––––

// PUSH / POP
//
var colors = ["red", "green", "blue"];
colors[3] = "orange";   //orange
//
//push - add smth to the end of the array
//
colors.push("orange");  // another way to do the same, but shorter
//
//pop - in opposite delete the last item in the array
//

//––––––––––––––––––––––––

//SHIFT AND UNSHIFT
//
var colors = ["red", "green", "blue"];
colors.unshift("infared");  //["infared", "red", "green", "blue"]
//
//unshift - add smth to the front of an array
//
var colors = ["infared", "red", "green", "blue"];
colors.shift(); //["red", "green", "blue"]
//
//shift - to remove first item
//it also returns the removed element
var col = colors.shift();   //red
//

//––––––––––––––––––––––––

//SLICE
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
//
// includs first index but doesn't include the second
//citrus contains ["Orange", "Lemon"]
//fruits contains ["Banana", "Orange", "Lemon", "Apple", "Mango"]
//
var nums = [1, 2, 3];
var otherNums = nums.slice();
//
//both are [1, 2, 3]
//

//––––––––––––––––––––––––

//SPLICE
//
nums.splice(1, 1); //[1, 3];
//
//delete item by index (second argument - how much items after index do you want to delete)
//
