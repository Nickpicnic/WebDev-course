// DOM Manipulation
//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// STYLE
//the style property is one way to manipulate an element's style (not very usefull)

var tag = document.getElementById("highlight");     // SELECT

//
// MANIPULATION
//
tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// SEPARATION OF CONCERNS:
    // STRUCTURE
    // BEHAVIOR
    // PRESENTATION
    
    // rather than directly manip. style with JS 
    // we can define a CSS class and then toggle it on or off with JS


    // INSTEAD OF THIS 
    var tqg = document.getElementById("highlight");
    tag.style.color = "blue";
    tag.style.border = "10px solid red";

    //DEFINE A CLASS IN CSS
        //.some-class {
        //    color: blue;
        //    border: 10px solid red; 
        //}

    var tag = document.getElementById("highlight");
    //ADD THE NEW CLASS TO THE SELECTED ELEMENT
    tag.classList.add("some-class");

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// classList
// a little bit more productive way
//
// A read-only list that contains the classes for a given element. It is NOT AN ARRAY!
//
// DEFINE A CLASS IN CSS
// .another-class {
//      color: purple;
//      fontSize: 76px;   
// }

var tag = document.querySelector("h1");

// ADD A CLASS TO THE SELECTES ELEMENTS
tag.classList.add("another-class");

// REMOVE A CLASS
tag.classList.remove("another-class");

// TOGGLE A CLASS
tag.classList.toggle("another-class");

