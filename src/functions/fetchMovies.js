import TMDBkey from "../key";

const fetchMovies = async (type, searchParams) => {
  let url = "https://api.themoviedb.org/3/";
  const key = `?api_key=${TMDBkey}`;

  try {
    if (type === "ID") url = `${url}movie/${searchParams}${key}&language=en-US`;
    if (type === "SEARCH") {
      if (!searchParams.query)
        throw new Error("'SEARCH' type must provide query parameter");
      const page = !!searchParams.page ? searchParams.page : 1;
      url = `${url}search/movie${key}&query=${searchParams.query}&page=${page}&language=en-US`;
    }
    if (type !== "ID" && type !== "SEARCH")
      throw new Error("invalid type: avilable types: 'ID', 'SEARCH'");

    const response = await fetch(url);
    const data = await response.json();

    // const confResponse = await fetch(
    //   `https://api.themoviedb.org/3/configuration?api_key=${TMDBkey}`
    // );
    // const confData = await confResponse.json();
    // console.log(confData);

    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export default fetchMovies;
