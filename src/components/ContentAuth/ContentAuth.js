import { Fragment, useEffect, useState } from "react";
import fetchTen from "../../functions/fetchTen";
import SignInOutButton from "../SignInOutButton/SignInOutButton";
import Button from "../UI/Button";
import Input from "../UI/Input/Input";
import Carousel from "./Carousel";

import styles from "./ContentAuth.module.css";

function MainPage() {
  const [movies, setMovies] = useState([]);

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
      setMovies(transformedData);
    };
    getMovies();
  }, []);

  console.log(movies);

  const carouselClickHandler = (id) => {};

  const searchHandler = () => {};

  return (
    <Fragment>
      <SignInOutButton />
      {movies.length > 0 && (
        <Carousel items={movies} clickHanlder={carouselClickHandler} />
      )}
      {movies.length === 0 && <div className={styles.carouselPlaceholder} />}
      <form className={styles.form}>
        <Input label="Insert text" className={styles.input} />
        <Button className={styles.button} onClick={searchHandler}>
          Search movies
        </Button>
      </form>
      <div className={styles.searchResults}></div>
    </Fragment>
  );
}

export default MainPage;
