import { FC } from 'react';
import {
  Stack,
  useTheme,
  useMediaQuery,
  IconButton,
  Collapse,
  Box,
} from '@mui/material';
import DesktopNavigation from './Navigation';

import LangPanel from './LangPanel';
import Logo from './Logo';
import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon';
import DesktopSearchBar from './SearchBar';

interface ContentProps {
  onClickMenu: () => void;
  openSearchBar: boolean;
  onToggleSearchBar: () => void;
  onCloseSearchBar: () => void;
}

const Content: FC<ContentProps> = ({
  onClickMenu,
  onToggleSearchBar,
  openSearchBar,
  onCloseSearchBar,
}) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Logo />
        {isDesktop ? (
          <>
            <DesktopNavigation />
            <Stack direction="row" gap={4}>
              <IconButton sx={{ padding: 0 }} onClick={onToggleSearchBar}>
                <SvgSpriteIcon icon="search" />
              </IconButton>
              <LangPanel />
            </Stack>
          </>
        ) : (
          <IconButton aria-label="mobile menu" onClick={onClickMenu}>
            <SvgSpriteIcon icon="burger" size="medium" />
          </IconButton>
        )}
      </Stack>
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: 0,
          top: '100%',
          left: 0,
        }}
      >
        <Collapse in={openSearchBar} timeout={500} easing={'ease-in'}>
          <Box
            py={2}
            sx={{ backgroundColor: (theme) => theme.palette.common.black }}
          >
            <DesktopSearchBar onCloseSearchBar={onCloseSearchBar} />
          </Box>
        </Collapse>
      </Box>
    </>
  );
};

export default Content;
