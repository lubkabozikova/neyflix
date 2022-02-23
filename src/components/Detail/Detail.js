import { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import fetchMovies from "../../fetch-functions/fetchMovies";
import DetailImage from "./DetailImage";
import DetailInfo from "./DetailInfo";
import DetailOverview from "./DetailOverview";
import Button from "../UI/Button/Button";

import styles from "./Detail.module.css";

function Detail() {
  const navigate = useNavigate();
  const movieId = useParams().movieId;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      const data = await fetchMovies("ID", movieId);
      setMovie(data);
    };

    getMovie();
  }, [movieId]);

  // console.log(movie);

  return (
    <Fragment>
      {Object.keys(movie).length === 0 && <div />}
      {Object.keys(movie).length > 0 && (
        <div className={styles.detail}>
          <DetailInfo movie={movie} className={styles.info} />
          <DetailOverview
            tagline={movie.tagline}
            overview={movie.overview}
            className={styles.overview}
          />
          <DetailImage
            imgUrl={`http://image.tmdb.org/t/p/w780${movie.poster_path}`}
            className={styles.image}
          />
          <Button className={styles.backButton} onClick={() => navigate(-1)}>
            Back
          </Button>
        </div>
      )}
    </Fragment>
  );
}

export default Detail;
