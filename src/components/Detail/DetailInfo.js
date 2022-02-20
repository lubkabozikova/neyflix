import styles from "./DetailInfo.module.css";

function DetailInfo(props) {
  const movie = { ...props.movie };
  // console.log(movie);

  const relDate = movie.release_date.substring(0, 4);
  console.log(movie.genres);

  const genres = !movie.genres
    ? []
    : movie.genres.map((genre) => <li key={genre.id}>{genre.name}</li>);

  return (
    <div className={styles.info}>
      <div className={styles.title}>{movie.title}</div>
      <div className={styles.wrapper}>
        <div className={styles.rating}></div>
        <div className={styles.relDate}>{relDate}</div>
      </div>
      <div className={styles.genres}>
        <ul>{genres}</ul>
      </div>
      <div className={styles.tagline}>{movie.tagline}</div>
      <div className={styles.overview}>{movie.overview}</div>
    </div>
  );
}

export default DetailInfo;
