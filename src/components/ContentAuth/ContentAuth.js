import { Fragment, useEffect, useState } from "react";
import fetchTen from "../../fetch-functions/fetchTen";
import Carousel from "./Carousel";
import Search from "./Search";

import styles from "./ContentAuth.module.css";

function MainPage() {
  const [carouselMovies, setCarouselMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchTen();
      // console.log(data);
      const transformedData = data.map((movie) => {
        return {
          id: movie.id,
          imgUrl: `http://image.tmdb.org/t/p/w185${movie.poster_path}`,
          title: movie.title,
          key: movie.id,
        };
      });
      setCarouselMovies(transformedData);
    };
    getMovies();
  }, []);

  const carouselMoviesLoaded = carouselMovies.length > 0;

  return (
    <Fragment>
      {carouselMoviesLoaded && (
        <Carousel items={carouselMovies} path="/movies/detail" />
      )}
      {!carouselMoviesLoaded && <div className={styles.carouselPlaceholder} />}
      <Search />
    </Fragment>
  );
}

export default MainPage;
