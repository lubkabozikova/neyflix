import styles from "./DetailOverview.module.css";

function DetailOverview(props) {
  return (
    <div className={`${props.className} ${styles.container}`}>
      {!!props.tagline && <div className={styles.tagline}>{props.tagline}</div>}
      {!!props.overview && (
        <div className={styles.overview}>{props.overview}</div>
      )}
    </div>
  );
}

export default DetailOverview;
