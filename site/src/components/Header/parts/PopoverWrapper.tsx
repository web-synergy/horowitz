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
    >
      {children}
    </Popover>
  );
};

// const PopoverWrapper = forwardRef<Ref, PropsWithChildren<PopoverWrapperProps>>(
//   ({ open, onCloseMenu, id, children }, ref) => {
//     const theme = useTheme();
//     const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

//     if (!isDesktop) {
//       return children;
//     }

//     return (
//       <Popover
//         id={id}
//         open={open}
//         anchorEl={ref}
//         onClose={onCloseMenu}
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'left',
//         }}
//       >
//         {children}
//       </Popover>
//     );
//   }
// );

export default PopoverWrapper;
