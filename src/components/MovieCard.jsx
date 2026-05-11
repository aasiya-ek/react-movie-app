import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const MovieCard = ({ movie }) => {
  const { isFavourite, addToFavourites, removeFromFavourites } =
    useMovieContext();

  const favourite = isFavourite(movie.imdbID);

  const onFavouriteClick = (e) => {
    e.preventDefault();
    if (favourite) removeFromFavourites(movie.imdbID);
    else addToFavourites(movie);
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.Poster} alt={movie.Title} />
        <div className="movie-overlay">
          <button
            className={`favourite-btn ${favourite ? "active" : ""}`}
            onClick={onFavouriteClick}
          >
            <FontAwesomeIcon icon = {faHeart} />
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
