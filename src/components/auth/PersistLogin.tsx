import useAuth from '../../hooks/useAuth';
import useRefreshToken from '../../hooks/useRefreshToken';
const PersistLogin = () => {
  const refresh = useRefreshToken();
  const { auth } = useAuth();
  return <div>PersistLogin</div>;
};

export default PersistLogin;
