import { useEffect, useState } from "react";
import getMovies from "../../movies-api";
import MovieList from "../../components/MovieList/MovieList";
import Loading from "../../components/Loading/Loading";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setError(false);
        setLoading(true);
        const data = await getMovies();
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);
  return (
    <div>
      {loading && <Loading />}
      {movies.length > 0 && <MovieList movies={movies} />}

      {error && <p>Ooops... Somthing wrong!</p>}
    </div>
  );
};
export default HomePage;
