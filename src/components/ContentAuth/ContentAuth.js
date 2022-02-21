import { Fragment, useEffect, useState } from "react";
import fetchTen from "../../functions/fetchTen";
import SignInOutButton from "../SignInOutButton/SignInOutButton";
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
        };
      });
      setCarouselMovies(transformedData);
    };
    getMovies();
  }, []);

  const carouselMoviesLoaded = carouselMovies.length > 0;

  return (
    <Fragment>
      <SignInOutButton auth={true} />
      {carouselMoviesLoaded && (
        <Carousel items={carouselMovies} path="/movies/detail" />
      )}
      {!carouselMoviesLoaded && <div className={styles.carouselPlaceholder} />}
      <Search />
    </Fragment>
  );
}

export default MainPage;
