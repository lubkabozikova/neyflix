import Button from "../UI/Button";
import useInput from "../UI/Input/useInput";
import Input from "../UI/Input/Input";

import styles from "./LoginForm.module.css";
import { useState } from "react";

function LoginForm() {
  const {
    value: email,
    valid: emialValid,
    inputProps: emailProps,
  } = useInput(/^\w+@\w+\.[A-Z a-z]{2,3}$/);
  const {
    value: password,
    valid: passwordValid,
    inputProps: passwordProps,
  } = useInput(/^\w{4,60}$/);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <h1>Sign In</h1>
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
      <Button className={styles.button}>Sign In</Button>
    </form>
  );
}

export default LoginForm;
