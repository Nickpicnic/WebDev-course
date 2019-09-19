var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"), 
    campgrounds = [
        {name: "Salmon Creek", image: "https://cdn.vox-cdn.com/thumbor/-JoPdcgAuLTUsWiDZ62CX4wb33k=/0x0:5225x3479/1200x800/filters:focal(2195x1322:3031x2158)/cdn.vox-cdn.com/uploads/chorus_image/image/54137643/camping_tents.0.jpg"},
        {name: "Granite Hill", image: "https://www.reserveamerica.com/webphotos/racms/articles/images/bca19684-d902-422d-8de2-f083e77b50ff_image2_GettyImages-677064730.jpg"},
        {name: "Mountain Goat's Rest", image: "https://static.bergzeit.de/out/pictures-imago/generated/magazin_prod/05/a2/bz_mag_thumbnail_headline/2017_05_outdoor-camping-europe_exped.jpg"},
        {name: "Salmon Creek", image: "https://cdn.vox-cdn.com/thumbor/-JoPdcgAuLTUsWiDZ62CX4wb33k=/0x0:5225x3479/1200x800/filters:focal(2195x1322:3031x2158)/cdn.vox-cdn.com/uploads/chorus_image/image/54137643/camping_tents.0.jpg"},
        {name: "Granite Hill", image: "https://www.reserveamerica.com/webphotos/racms/articles/images/bca19684-d902-422d-8de2-f083e77b50ff_image2_GettyImages-677064730.jpg"},
        {name: "Mountain Goat's Rest", image: "https://static.bergzeit.de/out/pictures-imago/generated/magazin_prod/05/a2/bz_mag_thumbnail_headline/2017_05_outdoor-camping-europe_exped.jpg"},
        {name: "Salmon Creek", image: "https://cdn.vox-cdn.com/thumbor/-JoPdcgAuLTUsWiDZ62CX4wb33k=/0x0:5225x3479/1200x800/filters:focal(2195x1322:3031x2158)/cdn.vox-cdn.com/uploads/chorus_image/image/54137643/camping_tents.0.jpg"},
        {name: "Granite Hill", image: "https://www.reserveamerica.com/webphotos/racms/articles/images/bca19684-d902-422d-8de2-f083e77b50ff_image2_GettyImages-677064730.jpg"},
        {name: "Mountain Goat's Rest", image: "https://static.bergzeit.de/out/pictures-imago/generated/magazin_prod/05/a2/bz_mag_thumbnail_headline/2017_05_outdoor-camping-europe_exped.jpg"}
    ];

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/campgrounds", (req, res) => {
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", (req, res) => {
    // get data from form and add to campgounds array
    var name = req.body.name,
        image = req.body.image,
        newCampground = {name: name, image: image};

    campgrounds.push(newCampground);
    
    // redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", (req, res) => {
    res.render("new");
});

app.listen("3000", () => {console.log("Server has started!");});
