import { useEffect } from 'react';
import { axiosPrivate } from '../../api/axios';
import { useNavigate, useLocation } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
const OAuthController = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromLocation = location.state?.from?.pathname || '/';
  const { setAuth } = useAuth();
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    (async () => {
      try {
        const response = await axiosPrivate.get('/auth/oauth/userInfo');
        isMounted && console.log(response.data);
        const accessToken: string = response?.data?.accessToken;
        const userName: string = response?.data?.userName;
        // const id: string = response?.data?.id;
        // const email_r: string = response?.data?.email;
        setAuth({ accessToken: accessToken, userName: userName });
        if (response.status === 200) {
          navigate(fromLocation, { replace: true });
        }
      } catch (err) {
        console.log(err);
        navigate('/login', { state: { from: location }, replace: true }); //navigating to this same page
        // if user needs to be logged again
      }
    })();

    return () => {
      isMounted = false;
      controller.abort();
    };
    //eslint-disable-next-line
  }, []);
  return <div>Loading</div>;
};

export default OAuthController;
