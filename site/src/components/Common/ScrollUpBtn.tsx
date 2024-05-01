import { Box, Fab, Fade, Stack } from '@mui/material';
import { FC } from 'react';
import SvgSpriteIcon from './SvgSpriteIcon';

type ScrollUpBtnProps = {
  visibility: boolean;
};

const ArrowUp: FC = () => {
  return (
    <Fab>
      <Stack
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box>
          <SvgSpriteIcon
            icon="scrollUp"
            sx={{
              width: 16,
              height: 14,
            }}
          />
        </Box>
      </Stack>
    </Fab>
  );
};

const ScrollUpBtn: FC<ScrollUpBtnProps> = ({ visibility }) => {
  return (
    <Fade
      in={visibility}
      onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <Box sx={{ position: 'sticky', bottom: 0, zIndex: 100 }}>
        <Box
          sx={{
            position: 'absolute',
            bottom: { xs: 15, lg: 20 },
            right: { xs: 10, lg: 20 },
          }}
        >
          <ArrowUp />
        </Box>
      </Box>
    </Fade>
  );
};

export default ScrollUpBtn;
