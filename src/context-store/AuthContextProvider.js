import { useState } from "react";
import authContext from "./authContext";

function AuthContextProvider(props) {
  const [token, setToken] = useState("");
  const loggedIn = !!token;

  const logIn = (email, password) => {
    setToken(Math.random().toString());
  };

  const logOut = () => {
    setToken("");
  };

  return (
    <authContext.Provider value={{ token, loggedIn, logIn, logOut }}>
      {props.children}
    </authContext.Provider>
  );
}

export default AuthContextProvider;
