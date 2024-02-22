import Slider from "react-slick";
import MovieCard from "./MovieCard";
import { useGlobalContext } from "../Context";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleMovie from "./SingleMovie";
const MovieList = () => {
  const { movies, settings, topRated } = useGlobalContext();
  return (
    <>
      <SingleMovie />
      <div className="movie-container">
        <h1> Popular Movie</h1>
        <Slider {...settings}>
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              title={movie.title}
              voteAverage={parseFloat(movie.vote_average).toFixed(2)}
            />
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
