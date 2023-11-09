import { NavLink, useLocation } from "react-router-dom";
import '../../styles/NavBar.css'

function NavBar() {
  let location = useLocation();

  return (
    <nav className="navBar">
      <h1>HRnet</h1>
      <div className="navBar-path">
        <NavLink to="/" className={location.pathname === '/' ? "navBar-path_current" : null}>
          Create
        </NavLink>
        <NavLink to="/list" className={location.pathname === '/list' ? "navBar-path_current" : null}>
          List
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
