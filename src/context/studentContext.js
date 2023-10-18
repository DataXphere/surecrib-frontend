import Cookies from "universal-cookie";
import { createContext, useState, useEffect } from "react";

const cookies = new Cookies();
const UserContext = createContext();


const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  

  const setUserAndTokenData = (userData, userToken) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30);
    cookies.set("TOKEN", userToken, { path: "/students", expires: expirationDate });
    cookies.set("userData", (userData), { path: "/students", expires: expirationDate });
    setUser(userData);
    setToken(userToken);
  };

  const clearUserAndTokenData = () => {
    setUser(null);
    setToken(null);
    cookies.remove("TOKEN");
    cookies.remove("userData");
  };

  useEffect(() => {
    const storedToken = cookies.get("TOKEN");
    const storedUserData = cookies.get("userData");

    if (storedToken && storedUserData) {
      setUserAndTokenData(storedUserData, storedToken);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ user, token, setUserAndTokenData, clearUserAndTokenData }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
