import { Fragment, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import fetchMovies from "../../fetch-functions/fetchMovies";
import OneInputForm from "../UI/OneInpuForm/OneInputForm";

import styles from "./Search.module.css";
import SearchResults from "./SearchResults";

function Search() {
  const params = useParams();

  const [query, setQuery] = useState(params.search || "");

  const [didSearch, setDidSearch] = useState(false);
  const [pageCount, setPageCount] = useState(params.page || 0);

  const navigate = useNavigate();

  const searchHandler = async (value) => {
    if (value.length === 0) return;
    const data = await fetchMovies("SEARCH", { query: value });
    setPageCount(data.total_pages);
    setDidSearch(true);
    setQuery(value);
    navigate(`/movies/${value}/1`);
  };

  return (
    <Fragment>
      <OneInputForm
        inputParams={{ testRegex: /^[\w\s]*$/ }}
        id="search"
        label="Insert text"
        errorMessage="Please use only letters and numbers"
        buttonText="Search movies"
        clickHandler={searchHandler}
      />
      <div className={styles.searchResults}>
        {didSearch && pageCount === 0 && (
          <p>No movies were found for this text</p>
        )}
        {pageCount > 0 && (
          <SearchResults query={query} page={params.page || 1} />
        )}
      </div>
    </Fragment>
  );
}

export default Search;
