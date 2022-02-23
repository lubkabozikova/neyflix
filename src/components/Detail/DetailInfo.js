import RatingStars from "./RatingStars";
import styles from "./DetailInfo.module.css";

function DetailInfo(props) {
  const movie = { ...props.movie };
  // console.log(movie);

  const relDate = movie.release_date.substring(0, 4) || "";

  const genres = !!movie.genres
    ? movie.genres.map((genre) => <li key={genre.id}>{genre.name}</li>)
    : [];

  return (
    <div className={`${styles.info} ${props.className}`}>
      <div className={styles.title}>{movie.title}</div>
      <div className={styles.wrapper}>
        <RatingStars rating={movie.vote_average * 10} />
        <div className={styles.relDate}>{relDate}</div>
      </div>
      <div className={styles.genres}>
        <ul>{genres}</ul>
      </div>
    </div>
  );
}

export default DetailInfo;
