import "../css/MovieCard.css";

const MovieCard = ({ movie }) => {
  const onFavouriteClick = () => {
    alert("Clicked!");
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.Poster} alt={movie.Title} />
        <div className="movie-overlay">
          <button className="favourite-btn" onClick={onFavouriteClick}>
            🤍
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
