import axios from 'axios';


const trendingAnime = async (query) =>
  axios.get(`https://kitsu.io/api/edge/trending/anime`);
export default trendingAnime;