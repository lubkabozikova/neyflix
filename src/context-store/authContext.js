import { createContext } from "react";

const authContext = createContext({
  token: "",
  loggedIn: false,
  logIn: (email, password) => {},
  logOut: () => {},
});

export default authContext;
