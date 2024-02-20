import Slider from "react-slick";
import MovieCard from "./MovieCard";
import { useGlobalContext } from "../Context";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieList = () => {
  const { movies, settings, topRated } = useGlobalContext();
  return (
    <>
      <div className="movie-container">
        <h1> Popular Movie</h1>
        <Slider {...settings}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </Slider>
      </div>
      <div className="movie-container">
        <h1> Top Rented</h1>
        <Slider {...settings}>
          {topRated.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </Slider>
      </div>
    </>
  );
};
export default MovieList;
