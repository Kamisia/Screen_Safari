import { SlMagnifier } from "react-icons/sl";
import { useGlobalContext } from "../Context";
const SearchForm = () => {
  const { handleInputChange } = useGlobalContext();

  return (
    <div className="search">
      <form>
        <input type="text" onChange={handleInputChange} />
      </form>
    </div>
  );
};

export default SearchForm;