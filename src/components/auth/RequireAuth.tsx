import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import useAuth from '../../hooks/useAuth';
const RequireAuth = ({ allowedRole }) => {
  const location = useLocation();
  const { auth } = useAuth();
  const decoded = auth?.accessToken ? jwtDecode(auth?.accessToken) : null;
  const role = decoded?.role || null;
  return role === allowedRole ? (
    <Outlet />
  ) : auth?.sub ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to={'/login'} state={{ from: location }} replace />
  );
};

export default RequireAuth;
