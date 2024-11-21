import { Link } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  return (
    <ul className={s.list}>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;