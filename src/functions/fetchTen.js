import fetchMovies from "./fetchMovies";

async function fetchTen() {
  const movies = [];

  const randomInt = (maxNotIncluded) =>
    Math.floor(Math.random() * maxNotIncluded);

  const frequentLetters = ["a", "e", "o", "i"];

  const getRandom = (array) => array[randomInt(array.length)];

  const data = await fetchMovies("SEARCH", {
    query: getRandom(frequentLetters),
    page: randomInt(500) + 1,
  });

  const loadedMovies = [...data.results];

  while (movies.length < 10 && loadedMovies.length > 0) {
    const index = randomInt(loadedMovies.length);
    if (!!loadedMovies[index].poster_path) movies.push(loadedMovies[index]);
    loadedMovies.splice(index, 1);
  }

  return movies;
}

export default fetchTen;
