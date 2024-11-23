import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../api/tmdb';
import MovieList from '../../components/MovieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </main>
  );
};

export default HomePage;