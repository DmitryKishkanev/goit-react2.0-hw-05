import axios from 'axios';
import { BASE_URL, API_KEY } from '@/config';

const getImages = async (searchQuery, searchPage) => {
  const response = await axios.get(`${BASE_URL}search/photos`, {
    headers: {
      'Accept-Version': 'v1',
      Authorization: `Client-ID ${API_KEY}`,
    },
    params: {
      query: searchQuery,
      page: searchPage,
      per_page: 10,
      orientation: 'landscape',
    },
  });

  return response.data.results;
};

export default getImages;
