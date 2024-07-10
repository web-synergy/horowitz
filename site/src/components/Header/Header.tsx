import { useState, useEffect } from 'react';

import {
  Container,
  AppBar,
  Toolbar,
  useTheme,
  useScrollTrigger,
  useMediaQuery,
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import MobileMenu from './parts/MobileMenu';
import Content from './parts/Content';
import { Offset } from '../Common/Offset';
import { Routes } from '@/types/routes.d';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const { pathname } = useLocation();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const isHomePage = pathname === '/';
  const isSearchPage = pathname === `/${Routes.SEARCH}`;

  useEffect(() => {
    if (isDesktop && openMenu) {
      setOpenMenu(false);
    }

    if (!isDesktop && openSearchBar && !isSearchPage) {
      setOpenSearchBar(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDesktop]);

  useEffect(() => {
    if (!isSearchPage && openSearchBar) {
      setOpenSearchBar(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (isSearchPage && !openSearchBar) {
      setOpenSearchBar(true);
    }
  }, [pathname, openSearchBar, isSearchPage, isDesktop]);

  const isHeaderTransparent = isHomePage && !scrollTrigger && !openSearchBar;
  const headerStyle = isHeaderTransparent
    ? {
        backgroundColor: 'rgba(8, 7, 8, 0.40)',
        backdropFilter: 'blur(6px)',
      }
    : {
        backgroundColor: theme.palette.common.black,
      };

  const onCloseMenu = () => {
    setOpenMenu(false);
  };

  const onOpenMenu = () => {
    setOpenMenu(true);
  };

  const onToggleSearchBar = () => {
    setOpenSearchBar((prev) => !prev);
  };

  const onCloseSearchBar = () => {
    setOpenSearchBar(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          ...headerStyle,

          transition: theme.transitions.create('background-color', {
            duration: '500ms',
            delay: '200ms',
          }),
        }}
      >
        <Toolbar disableGutters>
          <Container>
            <Content
              onClickMenu={onOpenMenu}
              openSearchBar={openSearchBar}
              onToggleSearchBar={onToggleSearchBar}
              onCloseSearchBar={onCloseSearchBar}
            />
          </Container>
        </Toolbar>
      </AppBar>

      <MobileMenu open={openMenu} onClose={onCloseMenu} />
      {!isHomePage && <Offset />}
    </>
  );
};

export default Header;
