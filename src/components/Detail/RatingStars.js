import styles from "./RatingStars.module.css";

const baseRectangle = "M 0 0 v 55 h 275 v -55 z";
const star =
  "h 20 l 6.2 -19 l 6.2 19 h 20 l -16.2 11.8 l 6.2 19 l -16.2 -11.8 l -16.2 11.8 l 6.2 -19 z";

function RatingStars(props) {
  const ratingStars = (
    <svg viewBox="0 0 275 55" height="25px" fill="#151515">
      <path
        strokeWidth="0px"
        d={`${baseRectangle} m 2 20 ${star} m 54.4 0 ${star} m 54.4 0 ${star} m 54.4 0 ${star} m 54.4 0 ${star}`}
      />
    </svg>
  );

  return (
    <div className={styles.rating}>
      <div className={styles.bar} style={{ width: `${props.rating}%` }}>
        {" "}
      </div>
      <div className={styles.stars}>{ratingStars}</div>
    </div>
  );
}

export default RatingStars;
