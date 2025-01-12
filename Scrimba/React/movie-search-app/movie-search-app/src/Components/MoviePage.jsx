import { useParams } from "react-router";
import { useEffect, useState } from "react";
const MoviePage = () => {
  const { title, id } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    console.log(title, id);
    async function fetchData() {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=6fce0c32bd42aedcb2e6f07ddf929952&language=en-US&query=${title}&page=1&include_adult=false`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.success === false) {
          console.log("Error: ", data.status_message);
        } else {
          console.log(data.results);
          const theMovie = data.results.find(
            (movie) => movie.id.toString() === id
          );
          console.log(theMovie);
          setMovie(theMovie);
        }
      } catch (error) {
        console.log(error);
      }
    }
    if (title && id) {
      fetchData();
    } else return;
  }, [title, id]);

  //after learning tailwind use it create a card out of the same
  return <>{movie && <span>{movie.overview}</span>}</>;
};

export default MoviePage;
