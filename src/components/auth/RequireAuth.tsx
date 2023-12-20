import { Outlet, Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const RequireAuth = ({ allowedRole }) => {
  const location = useLocation();
  const { auth } = useAuth();
  return auth.sub === allowedRole ? (
    <Outlet />
  ) : auth?.sub ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to={'/login'} state={{ from: location }} replace />
  );
};

export default RequireAuth;
