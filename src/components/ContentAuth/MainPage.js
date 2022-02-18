import { useEffect, useState } from "react";
import fetchMovies from "../../hooks/useFetch";
import styles from "./MainPage.module.css";

function MainPage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const newMovies = await fetchMovies(movies.length, movies);
      setMovies(newMovies);
    };
    getMovies();
  }, [movies]);
  console.log(movies);

  // setInterval(
  //   () =>
  //     setMovies((prev) => {
  //       const [first, ...rest] = prev;
  //       return [...rest, first];
  //     }),
  //   500
  // );

  return (
    <div className={styles.main}>
      <div className={styles.carousel}>
        {movies.map((movie) => (
          <div className={styles.item} key={movie.id}>
            <img src={`http://image.tmdb.org/t/p/w185${movie.poster}`} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
