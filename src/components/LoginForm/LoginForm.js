import { useContext, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Button from "../UI/Button/Button";
import useInput from "../UI/Input/useInput";
import Input from "../UI/Input/Input";

import styles from "./LoginForm.module.css";
import authContext from "../../dummy_auth/authContext";

function LoginForm() {
  const [showError, setShowError] = useState(false);

  const path = useLocation().pathname;
  const login = path.includes("login");
  const params = useParams();

  const initEmail = login ? "" : params.email;
  const errorMessage = login
    ? "Wrong email or password"
    : "Account for this email exists already";

  const auth = useContext(authContext);
  const authenticate = login ? auth.authUser : auth.addUser;

  const {
    value: email,
    valid: emialValid,
    inputProps: emailProps,
  } = useInput({
    testRegex: /^\w+@\w+\.[A-Z a-z]{2,3}$/,
    initValue: initEmail,
  });
  const {
    value: password,
    valid: passwordValid,
    inputProps: passwordProps,
  } = useInput({ testRegex: /^\w{4,60}$/ });

  const valid = emialValid && passwordValid;

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    setShowError(false);
    const token = authenticate({ email, password });

    if (!token) {
      setShowError(true);
    } else {
      localStorage.setItem("neyflixToken", token);
      navigate("/movies");
    }
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <h1>Sign {login ? "In" : "Up"}</h1>
      <Input
        id="lf1"
        label="Email"
        className={styles.input}
        errorMessage="Please enter a valid email"
        {...emailProps}
      />
      <Input
        id="lf2"
        label="Password"
        className={styles.input}
        errorMessage="Your password must contain between 4 and 60 characters"
        type="password"
        {...passwordProps}
      />
      <Button className={styles.button} disabled={valid ? undefined : true}>
        Sign {login ? "In" : "Up"}
      </Button>
      {showError && <p className={styles.errorText}>{errorMessage}</p>}
    </form>
  );
}

export default LoginForm;
