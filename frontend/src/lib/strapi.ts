import axios from 'axios';

const strapiClient = axios.create({
  baseURL: `${import.meta.env.VITE_STRAPI_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// ✅ Vérification du token injecté au moment du build
console.log("✅ VITE_STRAPI_TOKEN dans strapi.ts :", import.meta.env.VITE_STRAPI_TOKEN);

console.log("Base URL:", import.meta.env.VITE_STRAPI_URL);
console.log("Token:", import.meta.env.VITE_STRAPI_TOKEN);

// Add request interceptor for authentication
strapiClient.interceptors.request.use((config) => {
  const token = import.meta.env.VITE_STRAPI_TOKEN;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Add response interceptor for error handling
strapiClient.interceptors.response.use(
  (response) => {
    // Log successful responses in development
    if (import.meta.env.DEV) {
      console.log('API Response:', {
        url: response.config.url,
        method: response.config.method,
        status: response.status,
        data: response.data
      });
    }
    return response;
  },
  (error) => {
    if (error.response) {
      // Log detailed error information in development
      if (import.meta.env.DEV) {
        console.error('API Error Response:', {
          status: error.response.status,
          data: error.response.data,
          headers: error.response.headers,
          config: {
            url: error.config.url,
            method: error.config.method,
            headers: error.config.headers,
            baseURL: error.config.baseURL
          }
        });
      }

      // Handle specific error cases
      switch (error.response.status) {
        case 401:
          console.error('Authentication error: Invalid or missing token');
          break;
        case 403:
          console.error('Authorization error: Insufficient permissions');
          break;
        case 404:
          console.error('Resource not found');
          break;
        case 500:
          console.error('Server error');
          break;
        default:
          console.error('API request failed');
      }
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Request error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default strapiClient;