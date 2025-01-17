import { FC, useState, MouseEvent } from 'react';
import { Typography, useTheme, useMediaQuery } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Link as CustomLink, NavItem, NavButton, SubMenuList } from '../styled';
import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon';
import Submenu from './Submenu';
import { NavigationType } from '@/types/routes.d';
import PopoverWrapper from './PopoverWrapper';

import { overallNavigation } from '@/config/routes/navigation';

interface MainMenuProps {
  title: string;
  children: NavigationType[] | null;
  activeMenu: string | null;
  onOpenMenu: (value: string) => void;
  onCloseMobileMenu?: () => void;
}

const MainMenu: FC<MainMenuProps> = ({
  title,
  children,
  activeMenu,
  onOpenMenu,
  onCloseMobileMenu,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const [anchorElement, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const { pathname } = useLocation();

  const currentLocation = pathname.split('/')[1];
  const parent = overallNavigation.find(
    (item) => item.title === currentLocation
  )?.parent;

  const langTitle = t(`navigation.${title}`);
  const isActive = activeMenu === title;

  const onCLickMenu = (e: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(e.currentTarget);
    onOpenMenu(title);
  };

  const onCloseMenu = () => {
    setAnchorEl(null);
    onOpenMenu(title);
    if (onCloseMobileMenu) onCloseMobileMenu();
  };

  const isActiveMenu = title === currentLocation || title === parent;

  if (!children) {
    return (
      <CustomLink
        component={RouterLink}
        to={`/${title}`}
        variant="navLink"
        onClick={onCloseMobileMenu}
        isActive={isActiveMenu}
      >
        {langTitle}
      </CustomLink>
    );
  }

  return (
    <NavItem expanded={isActive} square>
      <NavButton
        aria-controls={`${title}-content`}
        id={`${title}-header`}
        onClick={onCLickMenu}
        expandIcon={
          <SvgSpriteIcon icon="arrow" size={isDesktop ? 'small' : 'medium'} />
        }
        isActive={isActiveMenu}
      >
        <Typography variant="navLink">{langTitle}</Typography>
      </NavButton>

      <PopoverWrapper
        anchorEl={anchorElement}
        id={title}
        onCloseMenu={onCloseMenu}
      >
        <SubMenuList>
          {children.map(({ slug, title, onlyIn }) => (
            <Submenu
              key={slug}
              href={slug}
              title={title}
              onCloseMenu={onCloseMenu}
              onlyIn={onlyIn}
            />
          ))}
        </SubMenuList>
      </PopoverWrapper>
    </NavItem>
  );
};

export default MainMenu;
