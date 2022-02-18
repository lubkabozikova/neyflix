import { Fragment } from "react";
import Button from "../UI/Button";
import SignInOutButton from "../SignInOutButton/SignInOutButton";
import styles from "./ContentUnauth.module.css";

function Content() {
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
            <input />
            <Button className={styles.button}>Get Started &rsaquo;</Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default Content;
