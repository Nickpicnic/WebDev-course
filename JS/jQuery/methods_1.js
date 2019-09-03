// COMMON jQuery METHODS
//P.1
//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// val()
// text()
// attr()
// html()
// addClass()
// removeClass()
// toggleClass()

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//TEXT

$("h1").text();
// "jQuery Methods Demo Page"

$("ul").text();
// "Skittles Starburst Twix"

$("li").text();
// "SkittlesStarburstTwix"

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

$("h1").text("New Text!!!");
// [ <h1>New Text!!!</h1>]

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//HTML

$("ul").html();
// "<li>Skittles</li> <li>Starburst</li> <li>Twix</li>"

$("ul").html("<li>I Hacked Your UL!</li><li>Kottie is adorable!</li>");
//[<ul>...</ul>]

$("li").html("<a href='google.com'>CLICK ME TO GO TO GOOGLE</a>");
//[<li>...</li>, <li>...</li>]

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//P.2

//ATTR - attribute

$("img").css("width", "400px");

$("img").attr("src", "https://i.kinja-img.com/gawker-media/image/upload/s--_s4OjEY7--/c_fill,f_auto,fl_progressive,g_center,h_264,q_80,w_470/glqgyby4slfwnftbmtga.jpg");

$("input").attr("type", "color");
// [ <input type="color" placeholder="your name">]

$("input").attr("type", "checkbox");
// [ <input type="checkbox" placeholder="your name">]

$("input").attr("type", "text");
// [ <input type="text" placeholder="your name">]

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// VAL - value()
// .val()

 $("input").val("Rusty Steele");
 // [ <input type="text" placeholder="your name">]

 $("input").val("");

 $("select").val();
 // "Toad"

 //––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 //P.3
 // MANIPULATING CLASSES

 //addClass

 $("h1").addClass("correct");
 // [ <h1 class="correct">jQuery Methods Demo Page</h1>]

$("li").addClass("wrong");
// [ <li class="wrong">Skittles</li>, <li class="wrong">Starburst</li>, <li class="wrong">Twix</li>]

//removeClass

$("h1").removeClass("correct");
//[ <h1>jQuery Methods Demo Page</h1>]

$("li").removeClass("wrong");
// [ <li>Skittles</li>, <li>Starburst</li>, <li>Twix</li>]

//toggleClass
$("li").toggleClass("correct");
// add/remove

$("li").first().toggleClass("done");
//add/remove

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––