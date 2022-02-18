import neyflixLogo from "./neyflix_logo";
import tmdbLogo from "./tmdb-logo.svg";
import styles from "./Layout.module.css";
import { Fragment } from "react";

function TitlePage(props) {
  return (
    <Fragment>
      <div className={styles.auth}>
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

export default TitlePage;
