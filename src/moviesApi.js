import axios from 'axios';
import { BASE_URL, TMDB_API_KEY } from '@/config';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Authorization'] = `Bearer ${TMDB_API_KEY}`;

const fatchMovies = async (endpoint, query = '') => {
  const response = await axios.get(endpoint, {
    params: {
      query,
      language: 'en-US',
      page: 1,
    },
  });

  return response.data;
};

export default fatchMovies;
