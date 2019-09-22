var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"), 
    mongoose    = require("mongoose"),
    Campground  = require("./models/campground"),
    seedDB      = require("./seeds");

seedDB();
// create and connect mongo database named yelp_camp
mongoose.connect("mongodb://localhost:27017/yelp_camp_v4", {useNewUrlParser: true, useUnifiedTopology: true});

// parse string req into the object
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("landing");
});

// INDEX - show all campgrounds
app.get("/campgrounds", (req, res) => {
    // Get all campgrounds from DB
    Campground.find({}, (err, allCampgrounds) => {
        if (err) {
            console.log(err);
        } else {
            res.render("index", {campgrounds: allCampgrounds});
        }
    })
});

// CREATE - add new campground to DB
app.post("/campgrounds", (req, res) => {
    // get data from form and add to campgounds array
    var name = req.body.name,
        image = req.body.image,
        desc = req.body.description,
        newCampground = {name: name, image: image, description: desc};

    // Create a new campground and save to DB
    Campground.create(newCampground, (err, newlyCreated) => {
        if (err) {
            console.log(err);
        } else {
            // redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    });
});

// NEW - show form to create new campground
app.get("/campgrounds/new", (req, res) => {
    res.render("new");
});

// SHOW - Shows more info about one campground
app.get("/campgrounds/:id", (req, res) => {
    // find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec((err, foundCampground) => {
        if (err) {
            console.log(err);
        } else {
            console.log(foundCampground);
            // render show template with that campground
            res.render("show", {campground: foundCampground});
        }
    });
})

app.listen("3000", () => {console.log("Server has started!");});
