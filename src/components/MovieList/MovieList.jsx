import { Link, useLocation } from 'react-router-dom';
import s from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={s.list}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            className={s.link}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;