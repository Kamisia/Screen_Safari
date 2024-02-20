import { Link } from "react-router-dom";
import MovieList from "../components/MovieList";

const Landing = () => {
  return (
    <div>
      <Link to="/search">Search</Link>
      <MovieList />
    </div>
  );
};

export default Landing;
