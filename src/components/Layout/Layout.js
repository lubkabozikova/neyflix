import logo from "./netflix_logo";
import styles from "./Layout.module.css";

function TitlePage(props) {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>{logo}</div>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}

export default TitlePage;
