import { FC, PropsWithChildren } from 'react';
import { Popover, useTheme, useMediaQuery } from '@mui/material';

interface PopoverWrapperProps {
  onCloseMenu: () => void;
  id: string;
  anchorEl: HTMLDivElement | null;
}

const PopoverWrapper: FC<PropsWithChildren<PopoverWrapperProps>> = ({
  onCloseMenu,
  id,
  children,
  anchorEl,
}) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const open = !!anchorEl;

  if (!isDesktop) {
    return children;
  }

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={onCloseMenu}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      PaperProps={{ sx: { borderRadius: 0 } }}
    >
      {children}
    </Popover>
  );
};

export default PopoverWrapper;
