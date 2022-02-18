import Button from "../UI/Button";
import styles from "./LoginForm.module.css";

function LoginForm() {
  return (
    <form className={styles.form}>
      <h1>Sign In</h1>
      <input />
      <input />
      <Button className={styles.button}>Sign In</Button>
    </form>
  );
}

export default LoginForm;
