import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import { useParams } from "react-router-dom";
import getReviewsMoviesById from "../../movies-reviews-api";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchReviewMovie() {
      try {
        setError(false);
        setLoading(true);
        const data = await getReviewsMoviesById(movieId);
        setReviews(data.results);
        console.log(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchReviewMovie();
  }, [movieId]);

  return (
    <div>
      {loading && <Loading />}
      {error && <p>Error</p>}
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>Review: {review.content}</p>
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry. We have not any reviews for this movie</p>
      )}
    </div>
  );
};
export default MovieReviews;
