import React, { useState } from 'react'
import { MovieSearcher } from './components/MovieSearcher';
import { MovieGrid } from './components/MovieGrid';
import { getMovies } from './helpers/getMovies';

export const MovieSearcherApp = () => {

    const [movies, setMovies] = useState([]);

    const onNewMovie = async(newMovie) => {
      const movies = await getMovies(newMovie);
      setMovies(movies);
    }

    return (
      <div className='page'>
        <h1>Buscador de Películas</h1>
        <MovieSearcher onNewMovie={onNewMovie}/>

        <main className='main'>
        <MovieGrid movies={movies}/>
        {/* {
          movies.map(movie => (
            <MovieGrid key={movie.id} {...movie}/>
          ))
        } */}
        </main>
      </div>
    )
}
