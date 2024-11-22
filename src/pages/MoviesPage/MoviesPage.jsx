import { useState } from "react";
import { searchMovies } from "../../api/tmdb";
import MovieList from "../../components/MovieList/MovieList";
import s from "./MoviesPage.module.css"

const MoviesPage = () => {
  const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovies(query).then(setMovies).catch(console.error);
  };

  return (
    <>
      <form className={s.formSearch} onSubmit={handleSubmit}>
              <input className={s.inputSearch} value={query} onChange={(e) => setQuery(e.target.value)} />
        <button className={s.btnSearch} type="submit">Search</button>
      </form>
          <MovieList movies={movies}  />
    </>
  );
};

export default MoviesPage;