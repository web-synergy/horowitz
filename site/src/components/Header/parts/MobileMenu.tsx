import { FC, forwardRef } from 'react';
import { Slide, IconButton, Dialog, Stack } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import SvgSpriteIcon from '../../Common/SvgSpriteIcon';
import Search from './Search';
import LangPanel from './LangPanel';
import Navigation from './Navigation';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="right" ref={ref} {...props} />;
});

const MobileMenu: FC<MobileMenuProps> = ({ open, onClose }) => {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      PaperProps={{
        sx: {
          backgroundColor: (theme) => theme.palette.neutral[90],
          color: (theme) => theme.palette.text.secondary,
          padding: '40px 40px 56px 40px',
          gap: 5,
        },
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <LangPanel />
        <IconButton onClick={onClose} sx={{ padding: 0 }}>
          <SvgSpriteIcon icon="close" />
        </IconButton>
      </Stack>
      <Search />
      <Navigation onCloseMobileMenu={onClose} />
    </Dialog>
  );
};

export default MobileMenu;
