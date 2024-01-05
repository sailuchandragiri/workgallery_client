import { createContext, useState } from 'react';
const AuthContext = createContext({ userName: '', email: '', accessToken: '', sub: null }); //empty context
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ email: null, userName: null });
  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};
export default AuthContext;
