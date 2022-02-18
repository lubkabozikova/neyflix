import Button from "../UI/Button";
import Input from "../Input/Input";
import styles from "./LoginForm.module.css";
import { useState } from "react";

function LoginForm() {
  // const [email, setEmail] = useState({ value: "", valid: false });
  // const [password, setPassword] = useState({ value: "", valid: false });
  // const [submit, setSubmit] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    // setSubmit(true);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <h1>Sign In</h1>
      <Input
        label="Email"
        className={styles.input}
        errorMessage="Please enter a valid email"
        testRegex={/^\w{4,60}$/}
        // sumbitValue={setEmail}
        // submit={submit}
      />
      <Input
        label="Password"
        className={styles.input}
        errorMessage="Your password must contain between 4 and 60 characters"
        testRegex={/^\w+@\w+\.[A-Z a-z]{2,3}$/}
        // sumbitValue={setPassword}
        // submit={submit}
      />
      <Button className={styles.button}>Sign In</Button>
    </form>
  );
}

export default LoginForm;
