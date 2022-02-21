import { Fragment, useState } from "react";

import useInput from "../UI/Input/useInput";
import Input from "../UI/Input/Input";
import fetchMovies from "../../functions/fetchMovies";
import Button from "../UI/Button/Button";

import styles from "./Search.module.css";
import SearchResults from "./SearchResults";

function Search() {
  const { value, valid, inputProps } = useInput({ testRegex: /^[\w\s]*$/ });
  const [query, setQuery] = useState("");

  const [didSearch, setDidSearch] = useState(false);
  const [pageCount, setPageCount] = useState(0);

  const searchHandler = async (event) => {
    event.preventDefault();
    if (value.length === 0) return;
    if (!valid) return;
    const data = await fetchMovies("SEARCH", { query: value });
    setPageCount(data.total_pages);
    setDidSearch(true);
    setQuery(value);

    // console.log(data);
  };

  return (
    <Fragment>
      <form className={styles.form}>
        <Input
          id="ca"
          label="Insert text"
          errorMessage="Please use only letters and numbers"
          className={styles.input}
          {...inputProps}
        />
        <Button className={styles.button} onClick={searchHandler}>
          Search movies
        </Button>
      </form>
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
