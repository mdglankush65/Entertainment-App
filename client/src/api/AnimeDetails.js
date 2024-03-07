import axios from 'axios';


const animeDetail = async (query) =>
  axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${query}`);
export default animeDetail;