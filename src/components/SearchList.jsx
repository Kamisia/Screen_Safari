import MovieCard from "./MovieCard";
import { useGlobalContext } from "../Context";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SearchList = () => {
  const { searchQuery, query, settings } = useGlobalContext();

  return (
    <>
      <div className="results-container slider">
        <Slider {...settings}>
          {searchQuery.length > 0 ? (
            searchQuery.map((item) => (
              <MovieCard
                key={item.id}
                posterPath={item.poster_path}
                title={item.title}
                voteAverage={parseFloat(item.vote_average).toFixed(2)}
                overview={item.overview}
              />
            ))
          ) : query !== "" ? (
            <p>No matching results </p>
          ) : (
            <p>Write title to search...</p>
          )}
        </Slider>
      </div>
    </>
  );
};

export default SearchList;
