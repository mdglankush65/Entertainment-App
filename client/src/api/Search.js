import axios from 'axios';

const search = async (query,prompt) =>
  axios.get(`https://api.themoviedb.org/3/search/${prompt}?api_key=48e86327a174416fcd7a2a5e9ddf8ab6&language=en-IN&query=${query}&page=1&include_adult=false`);
export default { search };
