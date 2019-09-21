var mongoose = require("mongoose"); 
mongoose.connect("mongodb://localhost:27017/blog_demo_2", {useNewUrlParser: true, useUnifiedTopology: true});

// IMPORT
var Post = require("./models/post"),
    User = require("./models/user");



Post.create({
    title: "How to cook the best burger! Pt.4", 
    content: "dkflkfjslgfflgkflk ksjfglsk fjg lskfgjl sfgjlks "
}, (err, post) => {
    User.findOne({email: "bob@gmail.com"}, (err, foundUser) => {
        if (err) {
            console.log(err);
        } else {
            foundUser.posts.push(post);
            foundUser.save((err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(data);
                }
            });
        }
    });
});

// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Belcher"
// });

// Find user
// Find all posts for that user

// User.findOne({email: "bob@gmail.com"}).populate("posts").exec((err, user) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });