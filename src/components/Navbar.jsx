import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Popular
          </NavLink>

          <NavLink to="/toprented" className="nav-link">
            Top Rented
          </NavLink>
          <NavLink to="/search" className="nav-link">
            Search
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
