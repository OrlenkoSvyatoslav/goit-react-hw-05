import getMoviesById from "../../movies-details-api";
import Loading from "../../components/Loading/Loading";
import css from "../../pages/MovieDetailsPage/MovieDetails.module.css";

import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";

export default function MovieDetailsPage() {
  const { movieId } = useParams();

  const [movieDetails, setmovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const goBackURL = useRef(location.state ?? "/movies");
  console.log(location);
  console.log(goBackURL.current);

  useEffect(() => {
    async function fetchMovieById() {
      try {
        setLoading(true);
        setError(false);
        const data = await getMoviesById(movieId);
        setmovieDetails(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieById();
  }, [movieId]);

  return (
    <div className={css.detailsContaier}>
      {loading && <Loading />}
      {error && <p>Somthing wrong!</p>}

      <NavLink className={css.link} to={goBackURL.current}>
        Go Back
      </NavLink>
      {movieDetails && (
        <div>
          <div className={css.title}>
            <img
              className={css.detailsImg}
              src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
              alt={movieDetails.title}
            />
            <ul className={css.detailsList}>
              <li>
                <h1>{movieDetails.title}</h1>
              </li>
              <li>
                <p>User Score: {movieDetails.vote_average.toFixed(1)}</p>
              </li>
              <li>
                <p>
                  <b>Overview:</b>
                  {movieDetails.overview}
                </p>
              </li>
              <li>
                <p>
                  <b>Genres:</b>
                  {movieDetails.genres.map((genre) => (
                    <span key={genre.id}>{genre.name}</span>
                  ))}
                </p>
              </li>
            </ul>
          </div>
          <hr />
          <h2>Additional information</h2>
          <ul>
            <li>
              <NavLink className={css.link} to="cast">
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink className={css.link} to="reviews">
                Reviews
              </NavLink>
            </li>
            <hr />
          </ul>
          <Outlet />
        </div>
      )}
    </div>
  );
}
