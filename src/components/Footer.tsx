import { NavLink, useLocation } from 'react-router-dom';
import Home from '../assets/Home.svg';
import HomeActive from '../assets/HomeActive.svg';
import Community from '../assets/Community.svg';
import CommunityActive from '../assets/CommunityActive.svg';
import Lobby from '../assets/Lobby.svg';
import LobbyActive from '../assets/LobbyActive.svg';
import Gallery from '../assets/Gallery.svg';
import GalleryActive from '../assets/GalleryActive.svg';
import Profile from '../assets/Profile.svg';
import ProfileActive from '../assets/ProfileActive.svg';

interface NavLinkItem {
  label: string;
  href: string;
  icon: string;
  activeIcon: string;
}

export const navLinks: NavLinkItem[] = [
  { label: 'Home', href: '/', icon: Home, activeIcon: HomeActive },
  { label: 'Lobby', href: '/lobby', icon: Lobby, activeIcon: LobbyActive },
  { label: 'Gallery', href: '/gallery', icon: Gallery, activeIcon: GalleryActive },
  { label: 'Profile', href: '/profile', icon: Profile, activeIcon: ProfileActive },
];

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <footer className="py-6 block md:hidden">
      <div className=" fixed bottom-0 left-0 right-0 bg-white w-full rounded-t-2xl shadow-lg border border-gray-300">
        <ul className="flex justify-evenly ...	">
          {navLinks.map((link) => (
            <li key={link.label} className="">
              <NavLink
                className=" text-gray-800 flex flex-col gap-1 font-medium items-center inline-block  px-4 py-2 rounded-md"
                to={link.href}
                isActive={() =>
                  link.href === '/' ? pathname === '/' : pathname.includes(link.href)
                }
              >
                <img
                  src={
                    link.href === '/'
                      ? pathname === '/'
                        ? link.activeIcon
                        : link.icon
                      : pathname.includes(link.href)
                        ? link.activeIcon
                        : link.icon
                  }
                  alt="Icon"
                  className="h-[1rem] w-[1rem]"
                />
                <p className="text-xs leading-5">{link.label}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
