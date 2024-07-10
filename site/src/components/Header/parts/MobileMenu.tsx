import { FC, forwardRef } from 'react';
import { Slide, IconButton, Dialog, Stack } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import SvgSpriteIcon from '../../Common/SvgSpriteIcon';
import SearchInput from './SearchInput';
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
      sx={{
        '& .MuiDialog-container': {
          justifyContent: { md: 'flex-start' },
        },
      }}
      PaperProps={{
        sx: {
          backgroundColor: (theme) => theme.palette.neutral[90],
          color: (theme) => theme.palette.text.secondary,
          padding: '40px 40px 56px 40px',
          gap: 5,
          width: { md: '60%' },
          maxWidth: { md: '50vw' },
          minWidth: { md: '430px' },
        },
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <LangPanel additionalClickFn={onClose} />
        <IconButton onClick={onClose} sx={{ padding: 0 }}>
          <SvgSpriteIcon icon="close" />
        </IconButton>
      </Stack>
      <SearchInput onCloseMenu={onClose} type="burger" />
      <Navigation onCloseMobileMenu={onClose} />
    </Dialog>
  );
};

export default MobileMenu;
