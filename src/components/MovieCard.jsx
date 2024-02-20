const MovieCard = ({ posterPath }) => {
  return (
    <div className="single-movie">
      <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} />
    </div>
  );
};
export default MovieCard;
