// SELECTOR METHODS
//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// document.URL;
// document.head;
// document.body;
// document.links;

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// 5 MAIN METHODS
//
// document.getElementById()
//
// document.getElementsByClassName()
//
// document.getElementsByTagName()
//
// document.querySelector()
//
// document.querySelectorAll()
//

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// 1 - getElementById
// Takes a string argument and returns the one element with a matching ID

var tag = document.getElementById("highlight");         // <li id="highlight">List Item 1</li>

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// 2 - getElementsByClassName
// Takes a string argument and returns a list of elements that have a matching class

var tags = document.getElementsByClassName("bolded");   // returns a list of all the elements
console.log(tags[0]);                                   // returns the first item

// NOT ARRAY - NODE LIST

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// 3 - getElementsByTagName
//Returns a list of all elements of a given tag name, like <li> or <h1>

var tags = document.getElementsByTagName("li");         // returns a list of all the elements
console.log(tags[0]);                                   // returns the first item

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// 4 - querySelector
//Returns the first element that matches a given CSS-style selector

var tag = document.querySelector("#highlight");         // <li id="highlight">List Item 1</li>
var tag = document.querySelector(".bolded");            // <li class="bolded">Second Item 2</li>

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// 5 - querySelectorAll
//Returns a list of all elements that matches a given CSS-style selector

var tag = document.querySelectorAll("h1");              // <h1>Hello</h1>
                                                        // <h1>Goodbye</h1>

var tag = document.querySelectorAll(".bolded");         // <li class="bolded">Second Item 2</li>
                                                        // <li class="bolded">Third Item 3</li>

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––