import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGNjYzJmZjNhZDVmYzBkNWQwMjg3NzBmYzUxNThkMSIsInN1YiI6IjY2MmU1ZDA0MDNiZjg0MDEyMmVhZDI0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oWZR8pTHmJiyMcGZiA79TFoT9njVy_DRtW7DZ0bCGxQ",
  },
};

export default async function getMoviesById(movieId) {
  const response = await axios.get(`movie/${movieId}`, options);

  return response.data;
}
