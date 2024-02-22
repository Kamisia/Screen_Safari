import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
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
