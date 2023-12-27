import { createContext, useState } from 'react';
export const initialAuth = {
  accessToken: null,
  userName: null,
};

interface IinitialAuth {
  email: null | string;
  accessToken: null | string;
  userName: null | string;
}
const AuthContext = createContext({}); //empty context
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState<IinitialAuth>(initialAuth);

  const [persist, setPersist] = useState(JSON.parse(localStorage.getItem('persist')) || false);
  console.log(persist);
  //setAuth({ accessToken: accessToken, userName: name, email: email_r, sub: sub });

  return (
    <AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
