import MovieCard from "./MovieCard";
import { useGlobalContext } from "../Context";

const SearchList = () => {
  const { searchQuery, query } = useGlobalContext();

  return (
    <>
      <div className="results-container">
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
      </div>
    </>
  );
};

export default SearchList;
