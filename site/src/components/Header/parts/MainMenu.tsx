import { FC, useState, MouseEvent } from 'react';
import { Link, Typography, useTheme, useMediaQuery } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { navLinkStyle, NavItem, NavButton, SubMenuList } from '../styled';
import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon';
import Submenu from './Submenu';
import { NavigationChildrenType } from '@/types/routes.d';
import PopoverWrapper from './PopoverWrapper';

interface MainMenuProps {
  title: string;
  children: NavigationChildrenType[] | null;
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

  if (!children) {
    return (
      <Link
        component={RouterLink}
        to={`/${title}`}
        variant="navLink"
        {...navLinkStyle}
        onClick={onCloseMobileMenu}
      >
        {langTitle}
      </Link>
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
      >
        <Typography variant="navLink">{langTitle}</Typography>
      </NavButton>

      <PopoverWrapper
        anchorEl={anchorElement}
        id={title}
        onCloseMenu={onCloseMenu}
      >
        <SubMenuList>
          {children.map(({ slug, title }) => (
            <Submenu
              key={slug}
              href={slug}
              title={title}
              onCloseMenu={onCloseMenu}
            />
          ))}
        </SubMenuList>
      </PopoverWrapper>
    </NavItem>
  );
};

export default MainMenu;
