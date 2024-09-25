import { Box, Typography, Zoom } from '@mui/material';
import { useWidthBlokSize } from '@/hook/useWidthBlockSize';
import Image from '@/components/Common/Image';
import { FC } from 'react';
import { HomeWinners } from '@/types/homeTypes';
interface WinnerCardProps {
  item: HomeWinners;
  isVisible: boolean;
  delay: number;
}

const WinnerCard: FC<WinnerCardProps> = ({ item, isVisible, delay }) => {
  const { containerRef, containerSize } = useWidthBlokSize();
  const { name, photo, title } = item;
  return (
    <Zoom
      in={isVisible}
      style={{ transitionDelay: isVisible ? `${delay}00ms` : '0ms' }}
    >
      <Box
        ref={containerRef}
        sx={{
          maxWidth: {
            xs: '357px',
            md: '100%',
          },
          lineHeight: 0,
          m: { xs: '0 auto' },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Typography
          variant="bodyRegular"
          component={'p'}
          sx={{
            color: (theme) => theme.palette.primary.dark,
            mb: { xs: 1, md: 3 },
          }}
        >
          {title}
        </Typography>
        <Image
          src={photo}
          height={containerSize}
          width={containerSize}
          alt={name}
          isLazyLoading={true}
        />
        <Typography
          variant="subhead"
          component={'p'}
          sx={{
            mt: { xs: 1, md: 2, lg: 3 },
          }}
        >
          {name}
        </Typography>
      </Box>
    </Zoom>
  );
};

export default WinnerCard;
