import { Outlet, Navigate, useLocation } from "react-router-dom";
import { jwtDecode, JwtPayload } from "jwt-decode";
import useAuth from "../../hooks/useAuth";
interface RequireAuthProps {
  allowedRole: number;
}

interface MyJwtPayload extends JwtPayload {
  role?: number; // Assuming 'role' is an optional string
  // Add other custom properties here if needed
}

const RequireAuth: React.FC<RequireAuthProps> = ({ allowedRole }) => {
  const location = useLocation();
  const { auth } = useAuth();
  const decoded = auth?.accessToken ? jwtDecode<MyJwtPayload>(auth?.accessToken) : null;
  const role = decoded?.role || null;
  return role === allowedRole ? (
    <Outlet />
  ) : auth?.userName ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};

export default RequireAuth;
