import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./SignInOutButton.module.css";

function SignInOutButton(props) {
  const auth = props.auth;

  const navigate = useNavigate();
  const path = auth ? "/" : "/login";

  const clickHandler = () => {
    if (auth) localStorage.removeItem("neyflixToken");
    navigate(path);
  };

  return (
    <Button
      className={`${props.className} ${styles.button}`}
      onClick={clickHandler}
    >{`Sign ${auth ? "Out" : "In"}`}</Button>
  );
}

export default SignInOutButton;
