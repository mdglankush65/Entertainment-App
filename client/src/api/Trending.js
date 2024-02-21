import axios from 'axios';

const search = async (query) =>
  axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=48e86327a174416fcd7a2a5e9ddf8ab6`);
const trendingMovies = async (query) =>
  axios.get(`https://api.themoviedb.org/3/trending/movie/week?language=hi-IN&api_key=48e86327a174416fcd7a2a5e9ddf8ab6`);
const trendingToday = async (query) =>{
  // console.log("Idhar aayega api key =====> " + process.env.TMDB_API_KEY);
  return axios.get(`https://api.themoviedb.org/3/trending/all/day?language=hi-IN&api_key=48e86327a174416fcd7a2a5e9ddf8ab6`);
}
const inTheaters = async (query) =>
  axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=48e86327a174416fcd7a2a5e9ddf8ab6&language=hi-IN&page=1&region=in`);

const API = { search, trendingMovies, inTheaters, trendingToday };
export default API;
