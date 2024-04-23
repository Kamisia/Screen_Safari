//import { SlMagnifier } from "react-icons/sl";
import { useGlobalContext } from "../Context";
const SearchForm = () => {
  const { handleInputChange, handleSearch } = useGlobalContext();

  return (
    <div className="search">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSearch();
        }}
      >
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="Write title to search..."
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
