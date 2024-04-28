import Slider from "react-slick";
import MovieCard from "./MovieCard";
import { useGlobalContext } from "../Context";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MoviePopular = () => {
  const { movies, settings } = useGlobalContext();
  return (
    <>
      <div className="movie-container">
        <h1> Popular Movie</h1>
        <div className="slider">
          <Slider {...settings}>
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                posterPath={movie.poster_path}
                voteAverage={parseFloat(movie.vote_average).toFixed(2)}
              />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
export default MoviePopular;