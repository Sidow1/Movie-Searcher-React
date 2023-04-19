export const getMovies = async(movie) => {
    const url = `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=${movie}`;
    const resp = await fetch(url);
    const {Search} = await resp.json();

    const movies = Search.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
    }));

    return movies;
}