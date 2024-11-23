import axios from 'axios';

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWRlZTk0Zjk0OTcxMzQzNTEzNzRjYzVlODg5M2RkMyIsIm5iZiI6MTczMjM2NTQ5NC41MjY4OTg5LCJzdWIiOiI2NzNjOTBjODA4ZThmZDg1MThjOTU0ZDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.lXi5u-frrtZ1bkkV7tr_qwgiQdlvZzTUoGf_60IDI6A';
const BASE_URL = 'https://api.themoviedb.org/3';

const headers = {
  Authorization: `Bearer ${API_KEY}`,
};

export const fetchTrendingMovies = async () => {
  const url = `${BASE_URL}/trending/movie/day`;
  const { data } = await axios.get(url, { headers });
  return data.results;
};

export const fetchMoviesByQuery = async (query) => {
  const url = `${BASE_URL}/search/movie?query=${query}`;
  const { data } = await axios.get(url, { headers });
  return data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const url = `${BASE_URL}/movie/${movieId}`;
  const { data } = await axios.get(url, { headers });
  return data;
};

export const fetchMovieCast = async (movieId) => {
  const url = `${BASE_URL}/movie/${movieId}/credits`;
  const { data } = await axios.get(url, { headers });
  return data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const url = `${BASE_URL}/movie/${movieId}/reviews`;
  const { data } = await axios.get(url, { headers });
  return data.results;
};