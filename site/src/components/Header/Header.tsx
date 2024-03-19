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

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  useEffect(() => {
    if (isDesktop && openMenu) {
      setOpenMenu(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDesktop]);

  const isHomePage = location.pathname === '/';
  const isHeaderTransparent = isHomePage && !scrollTrigger;
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

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          ...headerStyle,
          // boxShadow:
          //   '0 1px 1px rgba(0,0,0,0.15), 0 2px 2px rgba(0,0,0,0.15), 0 4px 4px rgba(0,0,0,0.15), 0 8px 8px rgba(0,0,0,0.15)',
          transition: theme.transitions.create('background-color', {
            duration: '500ms',
            delay: '200ms',
          }),
        }}
      >
        <Toolbar disableGutters>
          <Container>
            <Content onClickMenu={onOpenMenu} />
          </Container>
        </Toolbar>
      </AppBar>

      <MobileMenu open={openMenu} onClose={onCloseMenu} />
      {!isHomePage && <Offset />}
    </>
  );
};

export default Header;
