import { Fragment, useState } from "react";

import fetchMovies from "../../functions/fetchMovies";
import OneInputForm from "../UI/OneInpuForm/OneInputForm";

import styles from "./Search.module.css";
import SearchResults from "./SearchResults";

function Search() {
  const [query, setQuery] = useState("");

  const [didSearch, setDidSearch] = useState(false);
  const [pageCount, setPageCount] = useState(0);

  const searchHandler = async (value) => {
    if (value.length === 0) return;
    const data = await fetchMovies("SEARCH", { query: value });
    setPageCount(data.total_pages);
    setDidSearch(true);
    setQuery(value);
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
        {didSearch && pageCount > 0 && (
          <SearchResults pageCount={pageCount} query={query} />
        )}
      </div>
    </Fragment>
  );
}

export default Search;
