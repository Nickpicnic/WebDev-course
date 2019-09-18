var express = require("express"),
    app = express(),
    request = require("request");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("search");
});

// results page
app.get("/results", (req, res) => {
    var query = req.query.search,
        url = `https://omdbapi.com/?s=${query}&apikey=thewdb`;
    request(url, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            if (data.Response == 'True') {
                res.render("results", {data: data});
            } else {
                res.send("Sorry...");
            }
        }
    });
});

app.listen("3000", () => {console.log("Server is running!");});
