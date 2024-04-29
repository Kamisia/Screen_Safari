import Slider from "react-slick";
import MovieCard from "./MovieCard";
import { useGlobalContext } from "../Context";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalMovieCard from "../components/ModalMovieCard.jsx";
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
export default MoviePopular;
