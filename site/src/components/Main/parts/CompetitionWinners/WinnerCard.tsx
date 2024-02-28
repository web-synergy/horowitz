import { Box, Typography, Zoom } from '@mui/material';
import { FC } from 'react';

interface WinnerCardProps {
  image: string;
  winnerName: string;
  prizePlace: string;
  isVisible: boolean;
  delay: number;
}

const WinnerCard: FC<WinnerCardProps> = ({
  image,
  winnerName,
  prizePlace,
  isVisible,
  delay,
}) => {
  return (
    <Zoom
      in={isVisible}
      style={{ transitionDelay: isVisible ? `${delay}00ms` : '0ms' }}
    >
      <Box
        sx={{
          maxWidth: {
            xs: '100%',
            md: '332px',
            lg: '358px',
          },
          lineHeight: 0,
        }}
      >
        <Box
          component={'img'}
          src={image}
          alt="winner photo"
          sx={{ width: '100%' }}
        />
        <Typography
          variant="subhead"
          component={'p'}
          sx={{
            margin: '24px 0px 16px',
          }}
        >
          {winnerName}
        </Typography>
        <Typography
          variant="bodyRegular"
          component={'p'}
          sx={{ color: (theme) => theme.palette.primary.dark }}
        >
          {prizePlace}
        </Typography>
      </Box>
    </Zoom>
  );
};

export default WinnerCard;
