import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Button from "../UI/Button/Button";
import useInput from "../UI/Input/useInput";
import Input from "../UI/Input/Input";

import styles from "./LoginForm.module.css";
import authContext from "../../dummy_auth/authContext";

function LoginForm() {
  const path = useLocation().pathname;
  const navigate = useNavigate();

  useEffect(() => {
    if (!["login", "sign"].some((item) => path.includes(item)))
      navigate("/login");
  }, [path, navigate]);

  const signUp = path.includes("sign");
  const params = useParams();

  const [showError, setShowError] = useState(false);

  const initEmail = signUp ? params.email : "";
  const errorMessage = signUp
    ? "Account for this email exists already"
    : "Wrong email or password";

  const auth = useContext(authContext);
  const authenticate = signUp ? auth.addUser : auth.authUser;

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
      <h1>Sign {signUp ? "Up" : "In"}</h1>
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
        Sign {signUp ? "Up" : "In"}
      </Button>
      {showError && <p className={styles.errorText}>{errorMessage}</p>}
    </form>
  );
}

export default LoginForm;
