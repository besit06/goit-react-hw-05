import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../api/tmdb";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies).catch(console.error);
  }, []);

    return <div>
    <h2>Trending today</h2> 
  <MovieList movies={movies} />
    </div>
};

export default HomePage;