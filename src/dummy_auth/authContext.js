import { createContext } from "react";

const authContext = createContext({
  users: [],
  addUser: () => {},
  authUser: () => {},
  authAccess: () => {},
});

export default authContext;
