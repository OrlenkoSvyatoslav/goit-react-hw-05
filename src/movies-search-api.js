import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export default async function fetchSearchMovie(query) {
  const response = await axios.get("search/movie", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGNjYzJmZjNhZDVmYzBkNWQwMjg3NzBmYzUxNThkMSIsInN1YiI6IjY2MmU1ZDA0MDNiZjg0MDEyMmVhZDI0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oWZR8pTHmJiyMcGZiA79TFoT9njVy_DRtW7DZ0bCGxQ",
    },
    params: {
      query: query,
      include_adult: false,
      language: "en-US",
    },
  });

  return response.data;
}
