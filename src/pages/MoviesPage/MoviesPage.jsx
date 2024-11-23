import  { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from '../../api/tmdb';
import MovieList from '../../components/MovieList/MovieList';
import s from './MoviesPage.module.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

 
  useEffect(() => {
    if (!query) return; 

    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        const movies = await fetchMoviesByQuery(query);
        setMovies(movies);
      } catch (error) {
        setError('Failed to fetch movies. Please try again later.');
        console.log(error);
      } finally {
        setLoading(false);
        
      }
    };

    fetchMovies();
  }, [query]);


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const searchQuery = form.elements.query.value.trim();

    if (!searchQuery) {
      alert('Please enter a search query.');
      return;
    }

    setSearchParams({ query: searchQuery });
    form.reset();
  };

  return (
    <div className={s.container}>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          type="text"
          name="query"
          className={s.input}
          placeholder="Search for movies..."
          defaultValue={query}
        />
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className={s.error}>{error}</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
      {!loading && !error && movies.length === 0 && query && (
        <p>No movies found for your search query.</p>
      )}
    </div>
  );
};

export default MoviesPage;