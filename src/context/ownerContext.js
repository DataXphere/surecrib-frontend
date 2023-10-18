import { createContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const OwnerContext = createContext();

const OwnerProvider = ({ children }) => {
  const [owner, setOwner] = useState(null);
  const [ownerToken, setOwnerToken] = useState(null);

  const setOwnerAndTokenData = (
    ownerData,
   ownerToken
  ) => {
    cookies.set("OWNERTOKEN", ownerToken, { path: "/owners" });
    cookies.set("ownerData", (ownerData), {
      path: "/owners",
    });
    setOwner(ownerData);
    setOwnerToken(ownerToken);
  };

  const clearOwnerAndTokenData = () => {
    setOwner(null);
    setOwnerToken(null);
    cookies.remove("OWNERTOKEN");
    cookies.remove("ownerData");
  };

  useEffect(() => {
    const storedOwnerToken = cookies.get("OWNERTOKEN");
    const storedOwnerData = cookies.get("ownerData");

    if (storedOwnerToken && storedOwnerData) {
      setOwnerAndTokenData(
        storedOwnerToken,
        storedOwnerData
      );
    }
  }, []);

  return (
    <OwnerContext.Provider
      value={{
        owner,
        ownerToken,
        setOwnerAndTokenData,
        clearOwnerAndTokenData,
      }}
    >
      {children}
    </OwnerContext.Provider>
  );
};

export { OwnerContext, OwnerProvider };
