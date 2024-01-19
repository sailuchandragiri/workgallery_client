import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useRefreshToken from '../../hooks/useRefreshToken';
import { Outlet } from 'react-router-dom';
//it automatically gets the access token when we don't have it
//we have to use this component before require auth component
//and we need to provide the access token or else we get kicked out by require Auth Component
const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth, persist } = useAuth();
  useEffect(() => {
    let isMounted = true;
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (e) {
        console.error(e);
      } finally {
        isMounted && setIsLoading(false);
      }

      //if we lack an access token then we should call the verifyRefreshToken function
    };
    !auth.accessToken && persist ? verifyRefreshToken() : setIsLoading(false);
    return () => {
      isMounted = false;
    };
    //eslint-disable-next-line
  }, []);
  //TODO:Remove it in production
  useEffect(() => {
    console.log('isLoading', isLoading);
    console.log('accessToken', JSON.stringify(auth?.accessToken));
    //eslint-disable-next-line
  }, [isLoading]);
  //if we don't set the persist then show outlet and rest is handled by require Auth component
  return <>{!persist ? <Outlet /> : isLoading ? <p>Loading</p> : <Outlet />}</>;
};

export default PersistLogin;
