import axios from 'axios';
import { BASE_URL, TMDB_API_KEY } from '@/config';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Authorization'] = `Bearer ${TMDB_API_KEY}`;

const fetchMovies = async (endpoint, params = {}) => {
  const response = await axios.get(endpoint, {
    params: {
      language: 'en-US',
      page: 1,
      ...params,
    },
  });

  return response.data;
};

export default fetchMovies;
