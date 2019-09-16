var express = require("express");
var app = express();

// basic url
app.get("/", function(req, res){
    res.send("Hello world!");
}); 
app.get("/bye", function(req, res){
    res.send("Bye!");
});
app.get("/cat", function(req, res){
    res.send("MEOW!");
});

// sub url
app.get("/:anySub", function(req, res){
    var anysub = req.params.anySub;
    console.log(req.params);
    res.send("Welcome to the " + anysub + " subspace!");
});

// comments url
app.get("/:anySub/:id/comment/:title", function(req, res){
    console.log(req.params);
    res.send("Welcome to comments!");
});

// error message
app.get("*", function(req, res){
    res.send("Sorry, wrong URL!");
});

app.listen("3000", function(){
    console.log("Server has started!");
});