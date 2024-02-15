import React from 'react';
import { Box, Container, Typography } from '@mui/material';

import { urlFor } from '@/config/sanity/imageUrl';
import { BannerComponentProps } from '@/types/horowitzTypes';

const BannerComponent: React.FC<BannerComponentProps> = ({
  imgSrc,
  copyright,
}) => {
  return (
    <Box
      position="relative"
      sx={{
        width: '100%',
        backgroundColor: '#0D0C06',
        height: { xs: '314px', md: '468px' },

        '::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background: 'rgba(0, 0, 0, 0.6)',
          zIndex: 1,
          overflow: 'hidden',
        },
      }}
    >
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
            right: { xs: '-118px', md: '-198px', lg: 0 },
            height: '100%',
          }}
        >
          <img
            src={imgSrc && urlFor(imgSrc).auto('format').url().toString()}
            alt="banner img"
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          B
        </Box>

        <Typography
          variant="bodyMedium"
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            color: (theme) => theme.palette.neutral[60],
            padding: { xs: '16px 16px', md: '16px 40px', lg: '16px 80px' },
            width: '100%',
            zIndex: 10,
          }}
        >
          {copyright}
        </Typography>
      </Container>
    </Box>
  );
};

export default BannerComponent;
