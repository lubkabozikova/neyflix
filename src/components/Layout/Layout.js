import neyflixLogo from "./neyflix_logo";
import tmdbLogo from "./tmdb-logo.svg";
import styles from "./Layout.module.css";
import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import SignInOutButton from "../UI/SignInOutButton/SignInOutButton";

function Layout(props) {
  const path = useLocation().pathname;

  const backgroungImage = !path.includes("movies") && !path.includes("detail");

  let button = {};
  if (["detail", "login", "sign-in"].some((item) => path.includes(item))) {
    button = { show: false };
  } else {
    if (path.includes("movies")) {
      button = { show: true, auth: true };
    } else button = { show: true, auth: false };
  }

  let headerBackground = "";
  if (path.includes("detail")) {
    headerBackground = styles.half;
  } else {
    if (path.includes("movies")) {
      headerBackground = styles.full;
    } else headerBackground = styles.transparent;
  }

  return (
    <Fragment>
      <div
        className={`${backgroungImage ? styles.unauth : styles.auth} ${
          styles.main
        }`}
      >
        <div className={styles.content}>{props.children}</div>
        <div className={styles.footer}>
          <img src={tmdbLogo} alt="" />
          This page uses the TMDB API but is not endorsed or certified by TMDB
        </div>
        <div className={`${styles.header} ${headerBackground}`}>
          <div className={styles.logo}>{neyflixLogo}</div>
          {button.show && (
            <SignInOutButton className={styles.button} auth={button.auth} />
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default Layout;
