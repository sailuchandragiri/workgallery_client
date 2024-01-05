import axios from 'axios';
const BASE_URL: string = 'http://localhost:3000/api/v1';

export default axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' }, //include it to send body as json
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true, //to send cookies
});
