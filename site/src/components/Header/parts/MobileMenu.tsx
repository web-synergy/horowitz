import { FC, forwardRef } from 'react';
import { Dialog, Slide, IconButton } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import SvgSpriteIcon from '../../Common/SvgSpriteIcon';

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
    >
      <IconButton onClick={onClose}>
        <SvgSpriteIcon icon="close" />
      </IconButton>
      MobileMenu
    </Dialog>
  );
};

export default MobileMenu;
