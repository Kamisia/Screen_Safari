import MovieCard from "./MovieCard";
import { useGlobalContext } from "../Context";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SearchList = () => {
  const { searchQuery, query, settings } = useGlobalContext();
  const isSingleElement = searchQuery.length === 1;
  return (
    <>
      <div className="results-container slider">
        {searchQuery.length > 0 ? (
          isSingleElement ? (
            <MovieCard
              key={searchQuery[0].id}
              posterPath={searchQuery[0].poster_path}
              voteAverage={parseFloat(searchQuery[0].vote_average).toFixed(2)}
            />
          ) : (
            <Slider {...settings}>
              {searchQuery.map((item) => (
                <MovieCard
                  key={item.id}
                  posterPath={item.poster_path}
                  voteAverage={parseFloat(item.vote_average).toFixed(2)}
                />
              ))}
            </Slider>
          )
        ) : query !== "" ? (
          <p>No matching results</p>
        ) : (
          <p>Write title to search...</p>
        )}
      </div>
    </>
  );
};

export default SearchList;
