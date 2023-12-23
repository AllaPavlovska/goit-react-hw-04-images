import axios from 'axios';

const API_KEY = '40576419-28b6c5efeaf1f3d7724b485b7';

export const fetchImages = (query, page) => {
  return axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
};