import getCastMoviesById from "../../movies-cast-api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import css from "../../components/MovieCast/MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchCastMovie() {
      try {
        setLoading(true);
        const data = await getCastMoviesById(movieId);
        setMovieCast(data.cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchCastMovie();
  }, [movieId]);
  return (
    <div>
      {loading && <Loading />}
      {error && <p>E</p>}
      {movieCast && (
        <ul className={css.castList}>
          {movieCast.map((cast) => (
            <li className={css.castItem} key={cast.id}>
              <img
                className={css.castImg}
                src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
                alt={cast.original_name}
              />
              <h3 className={css.castName}>{cast.name}</h3>
              <p className={css.castText}>Character: {cast.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default MovieCast;
