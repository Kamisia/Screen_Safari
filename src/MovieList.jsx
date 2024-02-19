import Slider from "react-slick";
import Movie from "./Movie";
import { useGlobalContext } from "../src/Context";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import Wrapper from "./assets/wrappers/CardsList.js";

const MovieList = () => {
  const { movies, settings, topRated } = useGlobalContext();
  return (
    <>
      <div className="movie-container">
        <h1> Popular Movie</h1>
        <Slider {...settings}>
          {movies.map((movie) => (
            <Movie key={movie.id} posterPath={movie.poster_path} />
          ))}
        </Slider>
      </div>
      <div className="movie-container">
        <h1> Top Rented</h1>
        <Slider {...settings}>
          {topRated.map((movie) => (
            <Movie key={movie.id} posterPath={movie.poster_path} />
          ))}
        </Slider>
      </div>
    </>
  );
};
export default MovieList;
