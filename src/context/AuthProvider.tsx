import { createContext, useState } from 'react';
const initialAuth = {
  email: null,
  accessToken: null,
  userName: null,
  sub: null,
};
const AuthContext = createContext({}); //empty context
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialAuth);
  //setAuth({ accessToken: accessToken, userName: name, email: email_r, sub: sub });
  const logout = () => {
    // Clear authentication information (replace this with your actual logic)
    setAuth(initialAuth);

    // Redirect to the login page (replace '/login' with your login page route)
    window.location.replace('/login');
  };

  return <AuthContext.Provider value={{ auth, setAuth, logout }}>{children}</AuthContext.Provider>;
};
export default AuthContext;
