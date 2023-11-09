import { NavLink } from "react-router-dom";

function NavBar() {

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        List
      </NavLink>
    </nav>
  );
}

export default NavBar;
