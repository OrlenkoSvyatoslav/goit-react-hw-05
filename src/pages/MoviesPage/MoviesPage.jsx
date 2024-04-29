import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const filmQuery = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!filmQuery) {
      return;
    }

    async function fetchSearchFilms() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchSearchFilms(filmQuery);
        setMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchSearchFilms();
  }, [filmQuery]);

  const handleSearchFilms = (e) => {
    e.preventDefault();
    setMovies([]);
    const form = e.target;
    const qweryFilm = form.elements.search.value;
    setSearchParams({ query: qweryFilm });
    setError(false);
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSearchFilms}>
        <input
          name="search"
          type="text"
          autoComplete="off"
          placeholder="Search any films..."
        />
        <button type="submit">Search films</button>
      </form>
      {loading && <Loading />}
      <MovieList movies={movies} />
      {error && <p>Error!</p>}
    </div>
  );
};
export default MoviesPage;
