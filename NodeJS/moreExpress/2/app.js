var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

// if else statement
app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;

    res.render("love", {thingVariable: thing});
});

// loops
app.get("/posts", function(req, res){
    var posts = [
        {title: "Post_1", author: "Susy"},
        {title: "My adorable pet bunny!", author: "Charlie"},
        {title: "Can you believe it?", author: "Nick"},
    ];
    res.render("posts", {postsVariable: posts});
})

app.listen(3000, function(){
    console.log("Server is running!");
});
