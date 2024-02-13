import { Box, styled, List as MuiList } from '@mui/material';
import banner from '@/assets/images/ukr-works.jpg';

export const Banner = styled(Box)(() => ({
  width: '100%',
  height: '40vw',
  maxHeight: '40vh',
  backgroundImage: `linear-gradient(252.35deg, rgba(8, 7, 8, 0.8) 41.6%, rgba(8, 7, 8, 0) 100%), url(${banner})`,
  backgroundPosition: 'left center',
  backgroundSize: 'cover',
}));

export const List = styled(MuiList)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
}));
