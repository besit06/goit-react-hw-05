import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
     const location = useLocation();
    return (
         <ul className={s.list}>
      {movies.map(({ id, title }) => (
        <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;