import { useContext } from "react";
import authContext from "../../context-store/authContext";
import Button from "../UI/Button";
import styles from "./SignInOutButton.module.css";

function SignInOutButton() {
  const auth = useContext(authContext);

  const ClickHandler = () => {
    if (auth.loggedIn) auth.logOut();
    if (!auth.loggedIn) auth.logIn();
  };

  return (
    <Button className={styles.button} onClick={ClickHandler}>{`Sign ${
      auth.loggedIn ? "Out" : "In"
    }`}</Button>
  );
}

export default SignInOutButton;
