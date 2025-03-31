import { NavLink } from 'react-router-dom';
import '../stylesheets/navbar.scss';
import reportWebVitals from '../reportWebVitals';

const Navbar = () => {
  reportWebVitals((metric) => {
    // eslint-disable-next-line
    console.log(metric);
  });

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <NavLink to="/" className="nav-title">
          CountryApp
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
