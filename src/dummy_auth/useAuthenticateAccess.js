import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import authContext from "./authContext";

function useAuthenticateAccess() {
  const authenticate = useContext(authContext).authAccess;
  const token = localStorage.getItem("neyflixToken");
  const navigate = useNavigate();
  if (!authenticate(token)) navigate("/denied");
}

export default useAuthenticateAccess;
