import { Fragment, useEffect, useState } from "react";
import fetchMovies from "../../functions/fetchMovies";
import styles from "./Detail.module.css";
import DetailInfo from "./DetailInfo";

function Detail() {
  const tempId = 6;

  const [movie, setMovie] = useState({});

  useEffect(() => {
    console.log("effect");
    const getMovie = async () => {
      const data = await fetchMovies("ID", tempId);
      setMovie(data);
      console.log(tempId);
    };

    getMovie();
  }, []);
  // console.log(movie);

  return (
    <Fragment>
      {Object.keys(movie).length === 0 && <div />}
      {Object.keys(movie).length > 0 && (
        <div className={styles.detail}>
          <div className={styles.image}>
            <img
              src={`http://image.tmdb.org/t/p/w780${movie.poster_path}`}
              alt=""
            />
            <div> </div>
          </div>
          <DetailInfo movie={movie} />
        </div>
      )}
    </Fragment>
  );
}

export default Detail;
