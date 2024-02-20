import Header from "../components/Header";
import MovieList from "../components/MovieList";
import { Link } from "react-router-dom";
const HomeLayout = () => {
  return (
    <>
      <Header />
      <Link to="/search">Search</Link>
      <MovieList />
    </>
  );
};

export default HomeLayout;
