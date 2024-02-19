const Movie = ({ posterPath }) => {
  return (
    <div className="slick-container">
      <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} />
    </div>
  );
};
export default Movie;
