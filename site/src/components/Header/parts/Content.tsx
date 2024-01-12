import { FC } from 'react';
import { Stack, useTheme, useMediaQuery, IconButton } from '@mui/material';
import DesktopNavigation from './Navigation';
import Search from './Search';
import LangPanel from './LangPanel';
import Logo from './Logo';
import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon';

interface ContentProps {
  onClickMenu: () => void;
}

const Content: FC<ContentProps> = ({ onClickMenu }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Logo />
      {isDesktop ? (
        <>
          <DesktopNavigation />
          <Stack direction="row" gap={4}>
            <Search />
            <LangPanel />
          </Stack>
        </>
      ) : (
        <IconButton aria-label="mobile menu" onClick={onClickMenu}>
          <SvgSpriteIcon icon="burger" size="medium" />
        </IconButton>
      )}
    </Stack>
  );
};

export default Content;
