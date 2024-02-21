import axios from 'axios';
import openai from 'openai';
const searchTv = async (query) =>
  axios.get(`https://api.themoviedb.org/3/tv/${query}?api_key=48e86327a174416fcd7a2a5e9ddf8ab6&language=en-IN`);
const tvVideos = async (query) =>
  axios.get(`https://api.themoviedb.org/3/tv/${query}/videos?api_key=48e86327a174416fcd7a2a5e9ddf8ab6&language=en-IN`);
const searchMovies = async (query) =>
  axios.get(`https://api.themoviedb.org/3/movie/${query}?api_key=48e86327a174416fcd7a2a5e9ddf8ab6&language=en-IN`);
const movieVideos = async (query) =>
  axios.get(`https://api.themoviedb.org/3/movie/${query}/videos?api_key=48e86327a174416fcd7a2a5e9ddf8ab6&language=en-IN`);
const generateText = async (prompt) => {
  const openaiClient = new openai.OpenAI(`${process.env.REACT_APP_AI_API_KEY}`);
  const response = await openaiClient.completions.create({
      engine: 'davinci-codex',
      prompt: prompt,
      maxTokens: 128,
    });
    return response.choices[0].text;
  };
// const Details = { searchTv, tvVideos, searchMovies, movieVideos, generateText };
// export default Details;
export default { searchTv, tvVideos, searchMovies, movieVideos, generateText };