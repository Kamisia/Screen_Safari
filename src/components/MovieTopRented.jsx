import Slider from "react-slick";
import MovieCard from "./MovieCard";
import { useGlobalContext } from "../Context";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieTopRented = () => {
  const { settings, topRated } = useGlobalContext();
  return (
    <>
      <div className="movie-container">
        <h1> Top Rented</h1>
        <Slider {...settings}>
          {topRated.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              title={movie.title}
              voteAverage={parseFloat(movie.vote_average).toFixed(2)}
              overview={movie.overview}
            />
          ))}
        </Slider>
      </div>
    </>
  );
};
export default MovieTopRented;
