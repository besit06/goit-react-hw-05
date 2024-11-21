import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWRlZTk0Zjk0OTcxMzQzNTEzNzRjYzVlODg5M2RkMyIsIm5iZiI6MTczMjE3NzIwOC4zMzEwNzkyLCJzdWIiOiI2NzNjOTBjODA4ZThmZDg1MThjOTU0ZDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4dmII8ngPtuTgM5kHWUaAX2Oomjqb8F8saEJ-PzNtuI";

axios.defaults.headers.common["Authorization"] = `Bearer ${API_KEY}`;


export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(`${API_URL}/trending/movie/day`);
  return data.results;
};

export const searchMovies = async (query) => {
  const { data } = await axios.get(`${API_URL}/search/movie`, {
    params: { query, language: "en-US", page: 1 },
  });
  return data.results;
};

export const fetchMovieDetails = async (movieId) => {
    const { data } = await axios.get(`${API_URL}/movie/${movieId}`);
    console.log(data)
    return data;
    
};

export const fetchMovieCast = async (movieId) => {
    const { data } = await axios.get(`${API_URL}/movie/${movieId}/credits`);
    console.log(data.cast)
  return data.cast;
};

export const fetchMovieReviews = async (movieId) => {
    const { data } = await axios.get(`${API_URL}/movie/${movieId}/reviews`);
    console.log(data.results)
  return data.results;
};