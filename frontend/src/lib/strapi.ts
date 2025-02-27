import axios from 'axios';

const strapiClient = axios.create({
  baseURL: import.meta.env.VITE_STRAPI_URL || 'https://api.analytechs.tech/api',
  headers: {
    'Content-Type': 'application/json',
  }
});

strapiClient.interceptors.request.use((config) => {
  const token = import.meta.env.VITE_STRAPI_TOKEN;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default strapiClient;