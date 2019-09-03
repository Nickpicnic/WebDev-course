// SELECT WITH jQuery 
//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//
// $("selectorGoesHere")            RETURN A LIST
//

// to select all img tags
$("img")

// to select all elements with class "sale"
$(".sale")

// to select element with id "bonus"
$("#bonus")

// to select all a tags inside of li's
$("li a")

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// MANIPULATING STYLE

$(selector)
.css(property, value)

// select elem with id "special" and give it a border
$("#special").css("border", "2px solid red");

// we can also pass in an object with styles
var styles = {
    background : "pink";
    fontWeight: "bold";
};
$("#special").css(styles);

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// We can style multiple elements at once
$("li").css("color", "yellow");

// select all elements with class "big"
// and give them an orange border
$(".big").css("border", "1px dashed orange");

// you also can give object-property inside the brackets
$("li").css({
    fontSize : "10px",
    border : "3px dashed purple",
    background : "rgba(89, 45, 20, 0.5)"
});

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––