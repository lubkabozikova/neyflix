import authContext from "./authContext";
import initUsers from "./dummy_users";

function AuthContextProvider(props) {
  const users = initUsers;

  const tokens = [];

  const generateToken = () => {
    const token = Math.floor((Math.random() + 1) * 1000000000).toString();
    return token;
  };

  const addUser = (newUser) => {
    let unique = true;
    users.forEach((user) => {
      if (user.email === newUser.email) unique = false;
    });
    if (!unique) return false;

    const newId = "u" + Math.floor(Math.random() * 1000).toString();
    users.push({ ...newUser, id: newId });
    const newToken = generateToken() + newId;
    tokens.push(newToken);
    return newToken;
  };

  const authUser = (someUser) => {
    const foundUser = users.find((user) => user.email === someUser.email);
    if (!foundUser) return false;
    if (foundUser.password !== someUser.password) return false;

    const newToken = generateToken() + foundUser.id;
    tokens.push(newToken);
    return newToken;
  };

  const authAccess = (token) => {
    if (!token) return false;
    return true;
  };

  return (
    <authContext.Provider value={{ users, addUser, authUser, authAccess }}>
      {props.children}
    </authContext.Provider>
  );
}

export default AuthContextProvider;
