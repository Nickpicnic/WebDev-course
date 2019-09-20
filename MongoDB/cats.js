var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number, 
    temperament: String
});

// adding a new cat to the DB

var Cat = mongoose.model("Cat", catSchema);

var george = new Cat({
    name: "Mrs. Norris",
    age: 7, 
    temperament: "Evil"
});

george.save((err, cat) => {
    if (err) {
        console.log("SOMETHING WENT WRONG!");
    } else {
        console.log("WE JUST SAVED A CAT TO THE DB");
        console.log(cat);
    }
});

// retrieve all cats from the DB and console.log each one

Cat.find((err, cats) => {
    if (err) {
        console.log("ERROR!");
        console.log(err);
    } else {
        console.log("Cats:\n");
        console.log(cats);
    }
});