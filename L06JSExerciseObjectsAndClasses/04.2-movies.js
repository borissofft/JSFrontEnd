function moviesInfo(input) {

    let movies = [];

    const movieLibrary = {

        addMovie: (command) => {
            const [_, name] = command.split("addMovie ");
            movies.push({ name });
        },

        addDirector: (command) => {
            const [movieName, directorName] = command.split(" directedBy ");
            const movie = movies.find(m => m.name === movieName);
            if (movie) {
                movie.director = directorName;
            }
        },

        addDate: (command) => {
            const [movieName, date] = command.split(" onDate ");
            const movie = movies.find(m => m.name === movieName);
            if (movie) {
                movie.date = date;
            }
        }

    }

    input.forEach(command => {

        if (command.includes("addMovie")) {
            movieLibrary.addMovie(command);
        } else if (command.includes("directedBy")) {
            movieLibrary.addDirector(command);
        } else if (command.includes("onDate")) {
            movieLibrary.addDate(command);
        }

    });

    movies.filter(m => m.name && m.date && m.director).forEach(m => console.log(JSON.stringify(m)));

}

moviesInfo([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);

moviesInfo(['addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]);

// 1. parsing data

//  2. storing data
// { name, director, date }