import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./SignInOutButton.module.css";

function SignInOutButton(props) {
  const auth = props.auth;

  const path = auth ? "/" : "/login";
  // const ClickHandler = () => {
  //   if (auth) ;
  //   if (!auth) ;
  // };

  return (
    <Link to={path}>
      <Button className={styles.button}>{`Sign ${auth ? "Out" : "In"}`}</Button>
    </Link>
  );
}

export default SignInOutButton;
