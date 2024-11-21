import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../api/tmdb";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews).catch(console.error);
  }, [movieId]);

  if (!reviews.length) return <p>No reviews available.</p>;

  return (
    <ul className={s.list}>
      {reviews.map(({ id, author, content }) => (
        <li key={id} className={s.item}>
          <h3>{author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieReviews;