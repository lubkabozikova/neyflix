import { Fragment, useEffect, useState } from "react";
import fetchMovies from "../../fetch-functions/fetchMovies";
import NavButton from "./NavButton";
import Image from "./Image";
import styles from "./SearchResults.module.css";
import { useNavigate } from "react-router-dom";

function SearchResults(props) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(parseInt(props.page));
  const [pageCount, setPageCount] = useState(0);
  const query = props.query;

  const navigate = useNavigate();

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

  const navButtonHandler = (changeFunction) => {
    const newPage = changeFunction(page);
    setPage((prev) => changeFunction(prev));
    navigate(`/movies/${query}/${newPage}`);
  };

  return (
    <Fragment>
      <div className={styles.movies} id="movies">
        {movies.map((item) => (
          <Image image={item} key={item.id} className={styles.item} />
        ))}
      </div>
      {pageCount > 1 && (
        <div className={styles.actions}>
          <NavButton onClick={() => navButtonHandler((page) => 1)}>
            &laquo;
          </NavButton>
          <NavButton
            onClick={() => navButtonHandler((page) => page - 1)}
            disable={page === 1}
          >
            &lsaquo;
          </NavButton>
          <NavButton
            onClick={() => navButtonHandler((page) => page + 1)}
            disable={page === pageCount}
          >
            &rsaquo;
          </NavButton>
          <NavButton onClick={() => navButtonHandler((page) => pageCount)}>
            &raquo;
          </NavButton>
        </div>
      )}
    </Fragment>
  );
}

export default SearchResults;
