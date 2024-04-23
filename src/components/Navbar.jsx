import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-links">
          <NavLink to={`${import.meta.env.BASE_URL}`} className="nav-link">
            Popular
          </NavLink>

          <NavLink
            to={`${import.meta.env.BASE_URL}toprented`}
            className="nav-link"
          >
            Top Rented
          </NavLink>
          <NavLink
            to={`${import.meta.env.BASE_URL}search`}
            className="nav-link"
          >
            Search
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
