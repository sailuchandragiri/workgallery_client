import { createContext, useState, ReactNode } from 'react';
//eslint-disable-next-line
export const initialAuth = {
  accessToken: null,
  userName: null,
  email: null,
};

interface IinitialAuth {
  email?: null | string;
  accessToken: null | string;
  userName: null | string;
}

interface AuthContextType {
  auth: IinitialAuth;
  setAuth: React.Dispatch<React.SetStateAction<IinitialAuth>>;
  persist: boolean;
  setPersist: React.Dispatch<React.SetStateAction<boolean>>;
}
const AuthContext = createContext<AuthContextType>({
  auth: initialAuth,
  setAuth: () => {},
  persist: false,
  setPersist: () => {},
}); //empty context
interface AuthProviderProps {
  children: ReactNode;
}

function getPersistValue(): boolean {
  const storedPersistValue = localStorage.getItem('persist');
  return storedPersistValue ? JSON.parse(storedPersistValue) : false;
}
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<IinitialAuth>(initialAuth);

  const [persist, setPersist] = useState<boolean>(getPersistValue());
  console.log(persist);
  //setAuth({ accessToken: accessToken, userName: name, email: email_r, sub: sub });

  return (
    <AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
