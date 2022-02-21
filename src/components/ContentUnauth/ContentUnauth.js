import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import SignInOutButton from "../UI/SignInOutButton/SignInOutButton";

import styles from "./ContentUnauth.module.css";
import OneInputForm from "../UI/OneInpuForm/OneInputForm";

function Content() {
  const navigate = useNavigate();

  const formHandler = (email) => navigate(`/sign-in/${email}`);

  return (
    <Fragment>
      <SignInOutButton auth={false} />
      <div className={styles.content}>
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <OneInputForm
          inputParams={{ testRegex: /^\w+@\w+\.[A-Z a-z]{2,3}/ }}
          id="signIn"
          label="Email address"
          errorMessage="Please enter a valid email"
          buttonText="Get Started &rsaquo;"
          clickHandler={formHandler}
        />
      </div>
    </Fragment>
  );
}

export default Content;
