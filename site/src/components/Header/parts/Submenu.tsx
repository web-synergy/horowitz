import { FC } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { SubmenuLink } from '../styled';

interface SubmenuItemProps {
  href: string;
  title: string;
  onCloseMenu: () => void;
}
const SubmenuItem: FC<SubmenuItemProps> = ({ href, title, onCloseMenu }) => {
  const { pathname } = useLocation();

  const currentLocation = pathname.split('/')[1];
  const isActiveMenu = href === currentLocation;
  return (
    <SubmenuLink
      component={RouterLink}
      to={`/${href}`}
      onClick={onCloseMenu}
      isActive={isActiveMenu}
    >
      {title}
    </SubmenuLink>
  );
};

export default SubmenuItem;
