function moviesInfo(input) {

    let movies = [];

    input.forEach(command => {

        if (command.includes("addMovie")) {
            const [_, name] = command.split("addMovie ");
            movies.push({
                name,
            });
        } else if (command.includes("directedBy")) {

            const [movieName, directorName] = command.split(" directedBy ");
            const movie = movies.find(m => m.name === movieName);
            if (movie) {
                movie.director = directorName;
            }

        } else if (command.includes("onDate")) {

            const [movieName, date] = command.split(" onDate ");
            const movie = movies.find(m => m.name === movieName);
            if (movie) {
                movie.date = date;
            }

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