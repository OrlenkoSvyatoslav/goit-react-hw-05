import getCastMoviesById from "../../movies-cast-api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

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
        <ul>
          {movieCast.map((cast) => (
            <li key={cast.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
                alt={cast.original_name}
              />
              <p>{cast.name}</p>
              <p>Character: {cast.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default MovieCast;
