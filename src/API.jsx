import axios from 'axios';

const api = axios.create({
  baseURL: 'http://test.technofarm.in:9090',
  withCredentials: true, // Include cookies in every request
});

export default api;
