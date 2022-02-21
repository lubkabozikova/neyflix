import { Fragment, useState } from "react";
import Button from "../UI/Button";
import SignInOutButton from "../SignInOutButton/SignInOutButton";
import useInput from "../UI/Input/useInput";
import Input from "../UI/Input/Input";

import styles from "./ContentUnauth.module.css";

function Content() {
  const {
    value: email,
    valid: emailValid,
    inputProps: emailProps,
  } = useInput(/^\w+@\w+\.[A-Z a-z]{2,3}/);

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Fragment>
      <SignInOutButton auth={false} />
      <div className={styles.content}>
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <form>
          <div>
            <Input
              id="cua"
              label="Email address"
              className={styles.input}
              errorMessage="Please enter a valid email"
              {...emailProps}
            />
            <Button className={styles.button} onClick={submitHandler}>
              Get Started &rsaquo;
            </Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default Content;
