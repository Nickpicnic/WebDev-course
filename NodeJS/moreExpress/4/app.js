var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    phoneNumbers = [
        {Name: "John", LastName: "Parker", Age: 23, City: "London", PhoneNumber: "938493843984"},
        {Name: "Sarah", LastName: "Hejwig", Age: 47, City: "Dublin", PhoneNumber: "83457938457"},
        {Name: "Jared", LastName: "Parkoff", Age: 19, City: "Prague", PhoneNumber: "93483948394"},
        {Name: "Marie", LastName: "Smith", Age: 31, City: "LA", PhoneNumber: "348394893483"},
    ];
    
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

// HomePage
app.get("/", function(req, res){
    res.render("home");
});

app.post("/newPerson", function(req, res){
    var newPerson = {
        Name: req.body.Name,
        LastName: req.body.LastName,
        Age: req.body.Age,
        City: req.body.City,
        PhoneNumber: req.body.PhoneNumber 
    };
    phoneNumbers.push(newPerson);
    res.redirect("/phonebook");
});

// PhoneBook Page
app.get("/phonebook", function(req, res){
    res.render("phonebook",{peoples: phoneNumbers});
});

// Error Page
app.get("*", function(req, res){
    res.render("error");
})

app.listen("3000", function(){
    console.log("Server is running!");
});
