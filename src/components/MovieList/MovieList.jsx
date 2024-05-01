import { NavLink, useLocation } from "react-router-dom";
import css from "../MovieList/MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.movieContainer}>
      {movies.map((movie) => (
        <li className={css.movieItem} key={movie.id}>
          <NavLink
            className={css.movieLink}
            to={`/movies/${movie.id}`}
            state={location}
          >
            <img
              className={css.movieImage}
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <p className={css.movieText}>{movie.original_title}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
export default MovieList;
