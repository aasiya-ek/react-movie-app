const API_KEY = "ee8e59bc";
const BASE_URL = "https://www.omdbapi.com";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/?apikey=${API_KEY}&s=batman`);
  const data = await response.json();
  return data.Search || [];
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`,
  );
  const data = await response.json();
  return data.Search || [];
};
