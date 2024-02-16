export const BASE_URL = 'https://pixabay.com/api/';
export const API_KEY = '42395416-365c7c1d9b0e5b6ec2f614578';
export const options = {
  params: {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page: 1,
    q: '',
  },
};