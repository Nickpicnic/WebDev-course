// jQuery EFFECTS
//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// .fadeOut()
// Hide the matching elements by fading them to transparent
// .fadeOut([duration][, complete])

$("button").on("click", function(){
    $("div").fadeOut(1000, function(){      // just hide
        $(this).remove();                   // totally remove after that
    });
});

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

.fadeToggle()
$("button").on("click", function(){
    $("div").fadeToggle(1000);
});

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// .slideDown  /  slideUp  /  slideToggle
// .slideDown([duration][, easing][, complete])

$("button").on("click", function(){
    $("div").slideToggle();
});

//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––