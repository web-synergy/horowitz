import React from 'react';
import { Box, Container } from '@mui/material';
import { BannerWrapper } from '../styled';
import banner_img from '@/assets/images/bg_administration.webp';

const BannerComponent: React.FC = () => {
  return (
    <BannerWrapper img={banner_img}>
      <Container
        sx={{
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: { xs: '16px', md: '40px', lg: '80px' },
            maxWidth: '100%',
            zIndex: 1000,
          }}
        ></Box>
      </Container>
    </BannerWrapper>
  );
};

export default BannerComponent;
