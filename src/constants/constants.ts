export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Lobby', href: '/lobby' },
  { label: 'Gallery', href: '/gallery' },
];

export const USER_REGEX = /^[a-z0-9-_]{4,23}$/;
export const subscription = {
  free: 2300,
  premium: 5150,
};

export interface ModalProps {
  isOpened: boolean;
  onRequestClose: () => void;
  isGroup: boolean;
  width: string;
  isMobile?: boolean;
  isMenu?: boolean;
}
