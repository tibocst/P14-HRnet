import { NavLink } from "react-router-dom";

function NavBar() {

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-path" to="/">
        Create
      </NavLink>
      <NavLink className="main-nav-path" to="/list">
        List
      </NavLink>
    </nav>
  );
}

export default NavBar;
