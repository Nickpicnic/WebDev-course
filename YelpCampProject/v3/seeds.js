var mongoose        = require("mongoose"), 
    Campground      = require("./models/campground"),
    Comment         = require("./models/comment"),
    data            = [
        {
            name: "Clouds Rest", 
            image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            description: "blah blah blah"
        },
        {
            name: "Desert Mesa", 
            image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=698&q=80",
            description: "blah blah blah"
        },
        {
            name: "Stars Dome", 
            image: "https://images.unsplash.com/photo-1517824806704-9040b037703b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            description: "blah blah blah"
        }
    ];

function seedDB(){
    // Remove all campgrounds
    Campground.remove({}, (err) => {
        if (err) {
            console.log(err);
        }
        console.log("removed campgrounds!");
        Comment.remove({}, (err) => {
            if (err) {
                console.log(err);
            }
            console.log("removed comments");
        });
        // add a few campgrounds
        data.forEach((seed) => {
            Campground.create(seed, (err, campground) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Added a Campground!");
                    // create a comment
                    Comment.create(
                        {
                            text: "This place is great!",
                            author: "Homer!"
                        }, (err, comment) => {
                            if (err) {
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created a new comment!");
                            }
                        });
                }
            });
        });
    });
}   

module.exports = seedDB;