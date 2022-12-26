import { createContext, useState, useLayoutEffect } from "react";
import jwtDecode from "jwt-decode";

interface User{
  email: string;
  token?: string;
  isLoggedIn?: boolean;
}

interface UserContextData {
  user: User,
  setLogin: (token : string) => void,
  logout : () => void
}

export const UserContext = createContext({} as UserContextData);

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<User>({
    email: "",
  });

  const setLogin = (token: string) => {
    const decodedToken: any = jwtDecode(token);    
    localStorage.setItem("token", token);
    setUser({ ...decodedToken, token, isLoggedIn: true });
  };
  
  const logout = () => {
    localStorage.removeItem("token");
    setUser({ email: "", isLoggedIn: false });
  }

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) { setLogin(token); }
  }, []);

  return (
    <UserContext.Provider value={{ user, setLogin, logout }}>
      {children}
    </UserContext.Provider>
  );
}