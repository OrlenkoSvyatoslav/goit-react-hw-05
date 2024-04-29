import getMoviesById from "../../movies-details-api";
import Loading from "../../components/Loading/Loading";

import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

export default function MovieDetailsPage() {
  const { movieId } = useParams();

  const [movieDetails, setmovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
    <div>
      {loading && <Loading />}
      {error && <p>Somthing wrong!</p>}
      <hr />
      <NavLink to="/movies">Go Back</NavLink>
      {movieDetails && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
            alt={movieDetails.title}
          />
          <ul>
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
            <hr />
          </ul>
          <h2>Additional information</h2>
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
            <hr />
          </ul>
          <Outlet />
        </div>
      )}
    </div>
  );
}
