import neyflixLogo from "./neyflix_logo";
import tmdbLogo from "./tmdb-logo.svg";
import styles from "./Layout.module.css";
import { Fragment } from "react";
import { useLocation } from "react-router-dom";

function Layout(props) {
  const path = useLocation().pathname;
  const backgroungImage = !path.includes("movies");
  console.log(backgroungImage);

  return (
    <Fragment>
      <div className={props.auth ? styles.auth : styles.unauth}>
        <div className={styles.logo}>{neyflixLogo}</div>
        <div className={styles.content}>{props.children}</div>
      </div>
      <div className={styles.footer}>
        <img src={tmdbLogo} alt="" />
        This page uses the TMDB API but is not endorsed or certified by TMDB
      </div>
    </Fragment>
  );
}

export default Layout;
