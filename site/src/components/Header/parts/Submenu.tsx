import { FC } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { SubmenuLink } from '../styled';

interface SubmenuItemProps {
  href: string;
  title: string;
  onCloseMenu: () => void;
  onlyIn?: 'ua' | 'en';
}
const SubmenuItem: FC<SubmenuItemProps> = ({
  href,
  title,
  onCloseMenu,
  onlyIn,
}) => {
  const { pathname } = useLocation();
  const {
    i18n: { language },
  } = useTranslation();

  const currentLocation = pathname.split('/')[1];
  const isActiveMenu = href === currentLocation;

  if (onlyIn && onlyIn !== language) {
    return null;
  }
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
