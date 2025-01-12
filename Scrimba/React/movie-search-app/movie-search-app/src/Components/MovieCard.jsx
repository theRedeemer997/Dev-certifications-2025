import { Link } from "react-router-dom";
const MovieCard = (props) => {
  const { title, poster_path, release_date, vote_average, overview, id } =
    props;
  return (
    <>
      <div className="card">
        <img
          className="card--image"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`}
          alt={title + " poster"}
        />
        <div className="card--content">
          <h3 className="card--title">{title}</h3>
          <p>
            <small>RELEASE DATE: {release_date}</small>
          </p>
          <p>
            <small>RATING: {vote_average}</small>
          </p>
          <p className="card--desc">{overview}</p>
          <Link to={`/movie/title/${title}/id/${id}`}>
            <span>Read More</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
