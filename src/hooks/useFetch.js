import { useState, useEffect } from "react";
import key from "../key";

const myFetch = async (id) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
    headers: {
      Authorization: key,
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  const data = await response.json();

  return data;
};

const fetchMovies = async (numberOfMovies, movies) => {
  if (numberOfMovies < 10) {
    const id = Math.ceil(Math.random() * 2038);

    const data = await myFetch(id);
    const poster = data.poster_path;
    if (!!poster) return [...movies, { poster, id }];
    else return [...movies];
  } else return movies;
};

// const [movies, setMovies] = useState([]);
//   useEffect(() => {
//     const getMovies = async () => {
//       const newMovies = await fetchMovies(movies.length, movies);
//       setMovies(newMovies);
//     };
//     getMovies();
//   }, [movies]);
//   console.log(movies);

export default fetchMovies;
