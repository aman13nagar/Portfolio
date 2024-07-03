import axios from 'axios';
const api = axios.create({
  baseURL: 'https://portfolio-psi-roan-71.vercel.app/api', 
});
export default api;
