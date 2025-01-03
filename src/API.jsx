import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ec2-44-197-16-239.compute-1.amazonaws.com:9090',
  withCredentials: true, // Include cookies in every request
});

export default api;
