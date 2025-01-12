import { useEffect, useState, useCallback } from "react";
import MovieCard from "./MovieCard";
import "../App.css";

const SearchMovie = () => {
  //states for query and movies
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovie = useCallback(
    async (e) => {
      alert(query);
      e.preventDefault();
      //const query = "Jurassic Park";
      const url = `https://api.themoviedb.org/3/search/movie?api_key=6fce0c32bd42aedcb2e6f07ddf929952&language=en-US&query=${query}&page=1&include_adult=false`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.success === false) {
          console.log("Error: ", data.status_message);
          return;
        }
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    },
    [query]
  );

  // const searchMovies = async (e) => {
  //   e.preventDefault();
  //   //const query = "Jurassic Park";
  //   const url = `https://api.themoviedb.org/3/search/movie?api_key=6fce0c32bd42aedcb2e6f07ddf929952&language=en-US&query=${query}&page=1&include_adult=false`;
  //   try {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     if (data.success === false) {
  //       console.log("Error: ", data.status_message);
  //       return;
  //     }
  //     setMovies(data.results);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //logging the movies
  useEffect(() => {
    console.log(movies);
  }, [movies]);

  return (
    <>
      <form action="" className="form" onSubmit={searchMovie}>
        <label htmlFor="query" className="label">
          Movie Name
        </label>
        <input
          type="text"
          name="query"
          placeholder="Enter the movie"
          className="input"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      {/* display the movies */}
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard
              title={movie.title}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
              overview={movie.overview.substring(0, 100)}
              key={movie.id}
              id={movie.id}
            />
          ))}
      </div>
    </>
  );
};

export default SearchMovie;
