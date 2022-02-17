import styles from "./Layout.module.css";
import logo from "./netflix_logo";
import SignInOutButton from "./SignInOutButton";

function TitlePage(props) {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.logo}>{logo}</div>
        <SignInOutButton />
      </div>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}

export default TitlePage;
