import { useState } from 'react';
import { Container, AppBar, Toolbar } from '@mui/material';
import MobileMenu from './parts/MobileMenu';
import Content from './parts/Content';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const onCloseMenu = () => {
    setOpenMenu(false);
  };

  const onOpenMenu = () => {
    setOpenMenu(true);
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar disableGutters>
          <Container>
            <Content onClickMenu={onOpenMenu} />
          </Container>
        </Toolbar>
      </AppBar>
      <MobileMenu open={openMenu} onClose={onCloseMenu} />

      {/* {!isOffsetRender && <Offset />} */}
    </>
  );
};

export default Header;
