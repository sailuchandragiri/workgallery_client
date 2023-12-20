//in this we have to send the refresh token in the cookie to backend and grab the access token
import useAuth from './useAuth';
import axios, { axiosPrivate } from '../api/axios';
const useRefreshToken = () => {
  const { setAuth } = useAuth();
  const refresh = async () => {
    const response = await axios.get(`/auth/refresh`, { withCredentials: true });
    console.log(response);
    setAuth((prev) => {
      console.log(prev);
      return {
        ...prev,
        accessToken: response.data.accessToken,
      };
    });
    return response.data.accessToken;

    //because this function also needs to return this new access token so we can use it with our request
    //because well call this function when our initial request fails,
    //when out at is is expired then it will refresh and get a new access token we ll retry the request
  };

  //we are not calling this function we are just returning it
  return refresh;
};

export default useRefreshToken;
