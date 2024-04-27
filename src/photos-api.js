import axios from "axios";

const API_KEY = "VN4nbUP_hfzbJNwtE2nXDUOucJUNV3xTi83bBU-LB08";

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";

export const fetchImages = async (currentPage, searchQuery) => {
  const response = await axios.get("", {
    params: {
      query: searchQuery,
      page: currentPage,
      per_page: 10,
      orientation: "landscape",
      client_id: API_KEY,
    },
  });

  return response.data.results;
};
