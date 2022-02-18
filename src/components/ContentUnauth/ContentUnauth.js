import { Fragment, useState } from "react";
import Button from "../UI/Button";
import SignInOutButton from "../SignInOutButton/SignInOutButton";
import Input from "../Input/Input";

import styles from "./ContentUnauth.module.css";

function Content() {
  // const [email, setEmail] = useState("");
  // const [submit, setSubmit] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    // setSubmit(true);
  };

  return (
    <Fragment>
      <div className={styles.headerButton}>
        <SignInOutButton />
      </div>
      <div className={styles.content}>
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <form>
          <div>
            <Input
              label="Email address"
              className={styles.input}
              errorMessage="Please enter a valid email"
              testRegex={/^\w+@\w+\.[A-Z a-z]{2,3}/}
              // submitValue={setEmail}
              // submit={submit}
            />
            <Button className={styles.button}>Get Started &rsaquo;</Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default Content;
