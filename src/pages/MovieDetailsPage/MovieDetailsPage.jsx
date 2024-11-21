import { useEffect, useState, useRef } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { fetchMovieDetails } from "../../api/tmdb";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
    
    const goBackLink = useRef(location.state ?? '/movies');

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(setMovie)
      .catch(console.error);
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  const { title, overview, genres, poster_path } = movie;

  return (
    <div className={s.container}>
      <Link to={goBackLink.current} className={s.goBack}>
        Go back
      </Link>
      <div className={s.details}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          className={s.poster}
        />
        <div className={s.info}>
          <h1>{title}</h1>
          <p><strong>Overview:</strong> {overview}</p>
          <p><strong>Genres:</strong> {genres.map(genre => genre.name).join(", ")}</p>
        </div>
      </div>

      <nav className={s.nav}>
        <Link to="cast" state={{ from: goBackLink }} className={s.link}>
          Cast
        </Link>
        <Link to="reviews" state={{ from: goBackLink }} className={s.link}>
          Reviews
        </Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;