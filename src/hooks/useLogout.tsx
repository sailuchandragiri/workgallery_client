import axios from '../api/axios';
import useAuth from './useAuth';
import { initialAuth } from '../context/AuthProvider';
const useLogout = () => {
  const { setAuth } = useAuth();

  const logout = async () => {
    //TODO:Navigate to brand page
    setAuth(initialAuth);

    try {
      await axios.get('/auth/logout', { withCredentials: true });
    } catch (err) {
      console.error(err);
    }
  };

  return logout;
};

export default useLogout;
