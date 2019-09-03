// EVENTS JS jQuery
//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// click()
// keypress()
// on()

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// Click()

//easy way to add a click listener to element(s)

//prints when item with id 'submit' is clicked
$('#submit').click(function(){
    console.log("Another click");
});

//alerts when ANY button is clicked
$('button').click(function(){
    alert("Someone clicked a button");
});

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

//keypress()

// keydown()
// keypress()
// keyup()

$("input").keypress(function(){
    if (event.which === 13){
        alert("YOU HIT ENTER");
    }
});

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// on()

// prints when item with id 'submit' is clicked
$('#submit').on('click', function(){
    console.log("Another click");
});

//alerts when ANY button is clicked
$('button').on('click', function(){
    console.log("button clicked!");
});

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// it also support all types of events

//double click event
$('button'),on('dblclick', function(){
    alert("DOUBLE CLICKED!");
});

//drag start event
$('a').on('dragstart', function(){
    console.log("DRAG STARTED");
});

//keypress event
$('input[type="text"]').on('keypress', function(){
    alert("key press in an input");
});


//in most cases, click() an d on('click') will both get the job done.
//However, there is one key difference:

// click() only adds listeners for existing elements
//
//on() will add listeners for all potencial future elements

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––