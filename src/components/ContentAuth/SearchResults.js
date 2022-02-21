import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetchMovies from "../../functions/fetchMovies";
import NavButton from "./NavButton";
import styles from "./SearchResults.module.css";

function SearchResults(props) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const { query } = props;

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMovies("SEARCH", {
        query: query,
        page: page,
      });
      const transformedData = data.results.map((movie) => {
        if (!movie.poster_path) {
          return { id: movie.id, imgUrl: false, title: movie.title };
        }
        return {
          id: movie.id,
          imgUrl: `http://image.tmdb.org/t/p/w185${movie.poster_path}`,
          title: movie.title,
        };
      });
      setMovies(transformedData);
      //   console.log(data.results);
    };

    getMovies();
  }, [page, query]);

  return (
    <Fragment>
      <div className={styles.movies} id="movies">
        {movies.map((item) => (
          <Link key={item.id} to={`/movies/${item.id}`}>
            <div className={styles.item} key={item.id}>
              {item.imgUrl && (
                <img src={item.imgUrl} alt={item.title} title={item.title} />
              )}
              {!item.imgUrl && <p>{item.title}</p>}
            </div>
          </Link>
        ))}
      </div>
      {props.pageCount > 1 && (
        <div className={styles.actions}>
          <NavButton onClick={() => setPage(1)}>&laquo;</NavButton>
          <NavButton
            onClick={() => setPage((prev) => prev - 1)}
            disable={page === 1}
          >
            &lsaquo;
          </NavButton>
          <NavButton
            onClick={() => setPage((prev) => prev + 1)}
            disable={page === props.pageCount}
          >
            &rsaquo;
          </NavButton>
          <NavButton onClick={() => setPage(props.pageCount)}>
            &raquo;
          </NavButton>
        </div>
      )}
    </Fragment>
  );
}

export default SearchResults;
