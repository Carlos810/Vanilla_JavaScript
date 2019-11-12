
function getPeliculasPopulares() {
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=445e2f1c3c3b37faf4a98b983577e886&language=en-US&page=1";
    
    fetch(url).then(response => {
        return response.json();
    }).then(result => {
        //console.log(result);
        const peliculas = result.results;

        peliculas.forEach( pelicula => {
            const {title, vote_count, vote_average, poster_path} = pelicula;

            console.log(pelicula);
        });      
    });
}

getPeliculasPopulares();
