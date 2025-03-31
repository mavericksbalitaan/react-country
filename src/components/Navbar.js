import { NavLink } from 'react-router-dom';
import '../stylesheets/navbar.scss';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <NavLink to="/" className="nav-title">
        CountryApp
      </NavLink>
    </div>
  </nav>
);

export default Navbar;
