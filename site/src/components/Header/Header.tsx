import { useState } from 'react';

import {
  Container,
  AppBar,
  Toolbar,
  Stack,
  useTheme,
  useMediaQuery,
  IconButton,
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import { Offset } from './styled';
import Logo from './parts/Logo';
import DesktopContent from './parts/Content';
import SvgSpriteIcon from '../Common/SvgSpriteIcon';
import MobileMenu from './parts/MobileMenu';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { pathname } = useLocation();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const isOffsetRender = pathname === '/';
  console.log('isOffsetRender', isOffsetRender);

  const onCloseMenu = () => {
    setOpenMenu(false);
  };
  return (
    <>
      <AppBar position="fixed">
        <Toolbar disableGutters>
          <Container>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Logo />
              {isDesktop ? (
                <DesktopContent />
              ) : (
                <IconButton
                  aria-label="mobile menu"
                  onClick={() => setOpenMenu(true)}
                >
                  <SvgSpriteIcon icon="burger" size="medium" />
                </IconButton>
              )}
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
      <MobileMenu open={openMenu} onClose={onCloseMenu} />

      <Offset />
      {/* {!isOffsetRender && <Offset />} */}
    </>
  );
};

export default Header;
