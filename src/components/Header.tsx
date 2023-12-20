import { NavLink } from 'react-router-dom';
import { navLinks } from '../constants/constants';

const Header = () => {
  return (
    <header className="py-9">
      <div className="nav flex items-center">
        <NavLink to="/" className="text-lg font-bold">
          The Work Gallery
        </NavLink>
        <ul className="ml-auto flex gap-3  bg-gray-100 py-4 px-4  rounded-lg items-center">
          {navLinks.map((link) => (
            <li key={link.label} className="nav_link">
              <NavLink
                className="nav_link  text-gray-800 font-medium  inline-block bg-primary px-4 py-2 rounded-md"
                to={link.href}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="nav__item">
            <NavLink
              className="nav__link inline-block text-white active bg-gray-800 px-4 py-2 rounded-md"
              to="/register"
            >
              Sign up
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
