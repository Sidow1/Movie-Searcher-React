import { useEffect, useState } from "react";
import { getMovies as fetchMovies } from "../helpers/getMovies";

export const useFetchMovies = (movie) => {
  
    const [movies, setMovies] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getMovies = async() => {
        const newMovies = await fetchMovies(movie);
        setMovies(newMovies);
        setLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, []);

    return {
        movies,
        isLoading,
    }
}
