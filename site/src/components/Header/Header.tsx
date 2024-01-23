import { useState } from 'react';
import {
  Container,
  AppBar,
  Toolbar,
  useTheme,
  useScrollTrigger,
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import MobileMenu from './parts/MobileMenu';
import Content from './parts/Content';
import { Offset } from '../Common/Offset';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();
  const theme = useTheme();

  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

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
