import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuthenticateAccess from "../../dummy_auth/useAuthenticateAccess";
import fetchMovies from "../../fetch-hooks/fetchMovies";
import styles from "./Detail.module.css";
import DetailInfo from "./DetailInfo";

function Detail() {
  useAuthenticateAccess();

  const movieId = useParams().movieId;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      const data = await fetchMovies("ID", movieId);
      setMovie(data);
    };

    getMovie();
  }, [movieId]);
  console.log(movie);

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
