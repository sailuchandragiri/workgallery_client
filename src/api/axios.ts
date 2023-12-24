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

//we are going to attach the interceptor to the private request object it will actually attaches the jwt tokens
//and it even retry's the request when we get a failure the first time the failure will come back with the status of 403

//interceptor :: interceptors are going work with jwt tokens to refresh the token if our initial request is denied due to an expired token
//this will all work in the background this wont affect the user inside of the app and but it will keep everything secure and will continue to refresh those tokens  on a set schedule
