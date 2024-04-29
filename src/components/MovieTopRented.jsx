import Slider from "react-slick";
import MovieCard from "./MovieCard";
import { useGlobalContext } from "../Context";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalMovieCard from "./ModalMovieCard";
const MovieTopRented = () => {
  const { settings, topRated } = useGlobalContext();
  return (
    <>
      <div className="movie-container">
        <h1> Top Rented</h1>
        <div className="slider">
          <Slider {...settings}>
            {topRated.map((movie) => (
              <MovieCard
                key={movie.id}
                posterPath={movie.poster_path}
                voteAverage={parseFloat(movie.vote_average).toFixed(2)}
                title={movie.title}
                description={movie.overview}
              />
            ))}
          </Slider>
        </div>
      </div>
      <ModalMovieCard />
    </>
  );
};
export default MovieTopRented;
