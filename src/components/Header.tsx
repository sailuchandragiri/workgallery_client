import { NavLink } from "react-router-dom";
import { navLinks } from "../constants/constants";
import useAuth from "../hooks/useAuth";
import useLogout from "../hooks/useLogout";

const Header = () => {
  const { auth } = useAuth();
  const logout = useLogout();
  return (
    <header className="py-6">
      <div className="flex items-center justify-between">
        <NavLink to="/" className="text-lg font-bold inline-block justify-self-start">
          The Work Gallery
        </NavLink>
        <ul className="flex gap-3   rounded-lg items-center justify-center  justify-self-center">
          {navLinks.map((link) => (
            <li key={link.label} className="">
              <NavLink
                className=" text-gray-800 font-medium  inline-block  px-4 py-2 rounded-md"
                to={link.href}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul>
          <li className="">
            {auth?.userName ? (
              <NavLink
                className="inline-block text-white active bg-gray-800 px-4 py-2 rounded-md"
                to="/"
                onClick={() => logout()}
              >
                logout
              </NavLink>
            ) : (
              <NavLink
                className=" inline-block text-white active bg-gray-800 px-4 py-2 rounded-md"
                to="/register"
              >
                Sign up
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
