var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res){
    res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!");
});

// "/cat" => "MEOW!"
app.get("/cat", function(res, req){
    req.send("MEOW!");
});

// Tell Express to listen for request (start server)
app.listen(3000, function(){
    console.log("Server has started!");
});
