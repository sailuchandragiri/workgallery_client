import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { navLinks } from '../constants/constants';
import useAuth from '../hooks/useAuth';
import useLogout from '../hooks/useLogout';
import WorkGalleryIcon from '../assets/WorkGalleryIcon.svg';
import Menu from '../assets/Menu.svg';
import NotificationIcon from '../assets/NotificationIcon.svg';
import SearchIcon from '../assets/SearchIcon.svg';
import HomeModal from './homeModals/HomeModal';
import HomeMenuModal from './mobileModals/HomeMenuModal';
import LobbyMenuModal from './mobileModals/LobbyMenuModal';
import DownArrow from '../assets/DownArrow.svg';

const Header = () => {
  const { auth } = useAuth();
  const logout = useLogout();
  const { pathname } = useLocation();

  const [homeSearch, setHomeSearch] = useState(false);
  const [homeMenu, setHomeMenu] = useState(false);

  const handleHomeSearchModal = () => {
    setHomeSearch((prev) => !prev);
  };

  const handleMenuHomeModal = () => {
    setHomeMenu((prev) => !prev);
  };

  return (
    <>
      <div onClick={handleHomeSearchModal}>
        {homeSearch && pathname === '/' && (
          <HomeModal
            groupModalStatus={homeSearch}
            onChildButtonClick={handleHomeSearchModal}
            isGroup={false}
            isWidth="xl"
            isMobile={true}
            isMenu={false}
          />
        )}
      </div>
      <div onClick={handleMenuHomeModal}>
        {homeMenu && pathname === '/' && (
          <HomeMenuModal
            groupModalStatus={homeMenu}
            onChildButtonClick={handleMenuHomeModal}
            isGroup={false}
            isWidth="xl"
            isMobile={true}
            isMenu={true}
          />
        )}
      </div>
      <div onClick={handleMenuHomeModal}>
        {homeMenu && pathname === '/lobby' && (
          <LobbyMenuModal
            groupModalStatus={homeMenu}
            onChildButtonClick={handleMenuHomeModal}
            isGroup={false}
            isWidth="xl"
            isMobile={true}
            isMenu={true}
          />
        )}
      </div>
      <header className="py-6">
        <div className="hidden md:block">
          <div className=" flex items-center justify-between">
            <NavLink to="/" className="text-lg font-bold inline-block justify-self-start	 ">
              Workgallery
            </NavLink>
            <ul className="flex gap-3   rounded-lg items-center justify-center  justify-self-center	">
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
                    className="inline-block text-white bg-gray-800 px-4 py-2 rounded-md"
                    to="/"
                    onClick={() => logout()}
                  >
                    logout
                  </NavLink>
                ) : (
                  <NavLink
                    className=" inline-block text-white bg-gray-800 px-4 py-2 rounded-md"
                    to="/register"
                  >
                    Sign up
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="block md:hidden px-2 flex justify-between ...">
          {pathname === '/lobby' ? (
            <div className="text-sm flex gap-3" onClick={handleMenuHomeModal}>
              <h3 className="mt-1">Workspace</h3> <img src={DownArrow} alt="Down_arrow" />
            </div>
          ) : (
            <img src={WorkGalleryIcon} alt="Profile_Icon" />
          )}
          <div className="flex gap-3">
            <img
              src={SearchIcon}
              alt="SearchIcon"
              className="h-[1.5rem] w-[1.5rem] mt-1"
              onClick={handleHomeSearchModal}
            />
            {pathname === '/' && <img src={NotificationIcon} alt="NotificationIcon" />}
            {pathname !== '/lobby' && (
              <img src={Menu} alt="MenuIcon" onClick={handleMenuHomeModal} />
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
