import { Fragment, useEffect, useState } from "react";
import fetchMovies from "../../fetch-functions/fetchMovies";
import NavButton from "./NavButton";
import Image from "./Image";
import styles from "./SearchResults.module.css";

function SearchResults(props) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(parseInt(props.page));
  const [pageCount, setPageCount] = useState(0);
  const query = props.query;

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMovies("SEARCH", {
        query: query,
        page: page,
      });
      setPageCount(data.total_pages);
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
    };

    if (!!query) getMovies();
  }, [page, query]);

  return (
    <Fragment>
      <div className={styles.movies} id="movies">
        {movies.map((item) => (
          <Image image={item} key={item.id} className={styles.item} />
        ))}
      </div>
      {pageCount > 1 && (
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
            disable={page === pageCount}
          >
            &rsaquo;
          </NavButton>
          <NavButton onClick={() => setPage(pageCount)}>&raquo;</NavButton>
        </div>
      )}
    </Fragment>
  );
}

export default SearchResults;
