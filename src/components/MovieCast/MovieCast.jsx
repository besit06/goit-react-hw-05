import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../api/tmdb";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId).then(setCast).catch(console.error);
  }, [movieId]);

  if (!cast.length) return <p>No cast information available.</p>;

  return (
    <ul className={s.list}>
      {cast.map(({ id, name, character, profile_path }) => (
        <li key={id} className={s.item}>
          {profile_path && (
            <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt={name}
              className={s.image}
            />
          )}
          <p><strong>{name}</strong> as {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;