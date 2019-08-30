//movie data base 

var movieDB = [
    {
        title: "In Bruges",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Frozen",
        rating: 4.5,
        hasWatched: false
    },
    {
        title: "Mad Mux Furry Road",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Les Miserables",
        rating: 3.5,
        hasWatched: false
    }
];

movieDB.forEach(function(movie){
    if (movie.hasWatched) {
        console.log("You have watched \"" + movie.title + "\" - " + movie.rating + " stars");
    } else {
        console.log("You have not seen \"" + movie.title + "\" - " + movie.rating + " stars");
    }     
});