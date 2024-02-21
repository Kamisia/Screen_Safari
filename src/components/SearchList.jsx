import MovieCard from "./MovieCard";
import { useGlobalContext } from "../Context";
const SearchList = () => {
  const { searchQuery } = useGlobalContext();

  return (
    <div className="results-container">
      {searchQuery.map((item) => (
        <MovieCard key={item.id} posterPath={item.poster_path} />
      ))}
    </div>
  );
};

export default SearchList;
