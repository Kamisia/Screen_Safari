import MovieCard from "./MovieCard";
import { useGlobalContext } from "../Context";

const SearchList = () => {
  const { searchQuery } = useGlobalContext();

  return (
    <>
      <div className="results-container">
        {searchQuery.map((item) => (
          <MovieCard
            key={item.id}
            posterPath={item.poster_path}
            title={item.title}
            voteAverage={parseFloat(item.vote_average).toFixed(2)}
            overview={item.overview}
          />
        ))}
      </div>
    </>
  );
};

export default SearchList;
