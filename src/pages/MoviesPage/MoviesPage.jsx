import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import MovieList from "../../components/MovieList/MovieList";
import fetchSearchMovie from "../../movies-search-api";
import css from "../../pages/MoviesPage/MoviePage.module.css";

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
        const data = await fetchSearchMovie(filmQuery);
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
    <div className={css.searchContainer}>
      <form onSubmit={handleSearchFilms}>
        <input
          className={css.searchInput}
          name="search"
          type="text"
          autoComplete="off"
          placeholder="Search any films..."
        />
        <button className={css.btn} type="submit">
          Search films
        </button>
      </form>
      {loading && <Loading />}
      <MovieList movies={movies} />
      {error && <p>Error!</p>}
    </div>
  );
};
export default MoviesPage;
