//in this we have to send the refresh token in the cookie to backend and grab the access token

import axios from '../api/axios';
import useAuth from './useAuth';
const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    try {
      const response = await axios.get('/refresh', { withCredentials: true });
      console.log(response);
      //make sure to use the normal instance of axios because
      //in the axios Private it will be going infinite when we call this refresh method
      setAuth((prev) => {
        console.log(JSON.stringify(prev), 'Prev Context');
        console.log(response.data);
        return {
          ...prev,
          accessToken: response?.data?.accessToken,
          sub: response?.data?.role,
        };
      });
      return response.data.accessToken;
    } catch (error) {
      console.log(error);
    }
    //because this function also needs to return this new access token so we can use it with our request
    //because well call this function when our initial request fails,
    //when out at is is expired then it will refresh and get a new access token we ll retry the request
  };
  //we are not calling this function we are just returning it
  return refresh;
};

export default useRefreshToken;
