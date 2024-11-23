import  { useState, useEffect, useRef } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../../api/tmdb';
import s from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const goBackLink = useRef(location.state?.from || '/movies'); 
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const movieDetails = await fetchMovieDetails(movieId);
        setMovie(movieDetails);
      } catch (error) {
        setError('Failed to fetch movie details.');
         console.log(error);
      }
    };

    fetchDetails();
  }, [movieId]);

  if (error) {
    return <p className={s.error}>{error}</p>;
  }

  if (!movie) {
    return <p>Loading...</p>;
  }

  const { title, overview, genres, poster_path, vote_average } = movie;
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : 'https://via.placeholder.com/300x450?text=No+Image';

  return (
    <div className={s.container}>
      <Link to={goBackLink.current} className={s.goBack}>
        &#8592; Go back
      </Link>

      <div className={s.details}>
        <img src={posterUrl} alt={title} className={s.poster} />
        <div className={s.info}>
          <h2>{title}</h2>
          <p>
            <b>Rating:</b> {vote_average}
          </p>
          <p>
            <b>Overview:</b> {overview}
          </p>
          <p>
            <b>Genres:</b> {genres.map((genre) => genre.name).join(', ')}
          </p>
        </div>
      </div>

      <div className={s.additional}>
        <h3>Additional Information</h3>
        <ul>
          <li>
            <Link to="cast" state={{ from: goBackLink.current }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: goBackLink.current }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;