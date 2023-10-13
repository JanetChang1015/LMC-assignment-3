let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}


//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    const movieList = document.getElementById("movies");
    movieList.innerHTML += "<br>----------------<br>A new movie is added";
    allMovies.push(movie);
    console.log("A new movie is added");
}

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
    const movieList = document.getElementById("movies");

    console.log("Printing all movies....");
    movieList.innerHTML += "<br>Printing all movies....";
    
    for (let i = 0; i < allMovies.length; i++) {
        let movie = allMovies[i];
        console.log(movie.title + ", " + movie.rating + ", " + movie.haveWatched);
        movieList.innerHTML += "<br>" + movie.title + ", rating of: " + movie.rating + ", haveWatched: " + movie.haveWatched;
    }

    movieList.innerHTML += "<br><br> You have " + allMovies.length + " movies in total";
    console.log("You have " + allMovies.length + " movies in total");
}


//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
    const movieList = document.getElementById("movies");
    movieList.innerHTML += "<br>----------------<br>printing movie that has a rating higher than " + rating;
    console.log("printing movie that has a rating higher than " + rating);
    var total = 0;
    for (let i = 0; i<allMovies.length; i++) {
        if (allMovies[i].rating > rating) {
            total++;
            console.log(allMovies[i].title + " has a rating of " + allMovies[i].rating);
            movieList.innerHTML += "<br>" + allMovies[i].title + " has a rating of " + allMovies[i].rating;
        }
    }
    console.log("In total, there are " + total + " matches");
    movieList.innerHTML += "<br><br>In total, there are " + total + " matches";
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    const movieList = document.getElementById("movies");
    movieList.innerHTML += "<br>----------------<br>Changing the status of the movie...<br>----------------<br>";
    for (let i = 0; i<allMovies.length; i++) {
        if (allMovies[i].title == title) {
            allMovies[i].haveWatched = !allMovies[i].haveWatched;
        }
    }
    console.log("changing the status of the movie...");
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/
console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();

/*replace console.log with display on web page*/
console.log("----------------");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();
/*replace console.log with display on web page*/
console.log("----------------");

highRatings(3.5);











