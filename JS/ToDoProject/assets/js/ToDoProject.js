//check off some specific lines
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//click X to delete a line
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//hide input line
$(".fa-plus").click(function(){
    $("input").slideToggle(500);
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        // new todo from input
        var Text = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + Text + "</li>");
    }
});

