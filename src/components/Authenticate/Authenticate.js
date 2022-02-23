import { useContext } from "react";
import { useLocation } from "react-router-dom";
import authContext from "../../dummy_auth/authContext";
import LoginForm from "../LoginForm/LoginForm";
import ContentAuth from "../ContentAuth/ContentAuth";
import Detail from "../Detail/Detail";

function Authenticate() {
  const path = useLocation().pathname;

  const authenticate = useContext(authContext).authAccess;
  const token = localStorage.getItem("neyflixToken");
  if (!authenticate(token)) return <LoginForm />;

  if (path.includes("movies")) return <ContentAuth />;
  if (path.includes("detail")) return <Detail />;

  return <div>Page not found</div>;
}

export default Authenticate;
