import React, { useState } from 'react'

export const MovieSearcher = ({onNewMovie}) => {

    const [movie, setMovie] = useState('');

    const onInputChange = ({target}) => {
        setMovie(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const newValue = movie.trim();
        if(newValue.length < 1) return;

        onNewMovie(newValue);
        setMovie('');
    }

  return (
    <form className='form' onSubmit={onSubmit}>
        <input 
          	type="text" 
            placeholder='Star Wars, Harry Potter, Avengers...' 
            value={movie}
            onChange={onInputChange}  
        />
        <button>Buscar</button>
    </form>
  )
}
