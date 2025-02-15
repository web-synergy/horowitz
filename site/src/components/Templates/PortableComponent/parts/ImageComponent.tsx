import { urlFor } from '@/config/sanity/imageUrl';
import { IImage } from '@/types/commonTypes';
import { IPortableImgGallery } from '@/types/newsTypes';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { Suspense, lazy, useEffect, useState } from 'react';
import { PortableSwiper } from '../Swiper/Swiper';

import GrowView from '@/components/Common/GrowView';
import { theme } from '@/theme';
import { useWidthBlokSize } from '@/hook/useWidthBlockSize';

const GridGallery = lazy(() => import('./GridGallery'));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ImageComponent = ({ value }: { value: IImage }) => {
  const [imgSize, setImgSize] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });

  const isMob = useMediaQuery(theme.breakpoints.down('md'));

  const { width, aspectRatio, asset, alt, position, isEmbed } = value;
  const { containerSize, containerRef } = useWidthBlokSize();

  useEffect(() => {
    if (containerSize) {
      const imgWidth = Math.floor(containerSize / 100) * (isMob ? 100 : width);
      setImgSize({
        width: imgWidth,
        height: Math.floor(imgWidth / aspectRatio),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerSize, value]);

  return (
    <GrowView>
      <Box
        sx={{
          display: isEmbed && position !== 'center' ? 'block' : 'flex',

          justifyContent: { xs: 'center', md: position },
          mb: 1,
          flexDirection: 'column',
        }}
        ref={containerRef}
      >
        <Box
          component={'img'}
          sx={{
            float: isEmbed || position === 'center' ? position : ' none',
            justifyContent: { xs: 'center', md: position },
            width: `${width}%`,
            // minWidth: '260px',
            ml:
              position === 'left' || position === 'center'
                ? '0px'
                : { xs: '8px', md: '16px' },

            mr:
              position === 'right' || position === 'center'
                ? '0px'
                : { xs: '8px', md: '16px' },

            mt: { xs: 0, md: '8px' },
            objectFit: 'cover',
          }}
          src={
            asset &&
            urlFor(value)
              .auto('format')
              .width(imgSize.width)
              .height(imgSize.height)
              .url()
              .toString()
          }
          alt={alt || 'foto'}
          loading="lazy"
        />
        {alt && (
          <Typography
            component={'p'}
            sx={{ mt: 1 }}
            variant="smallText"
            color={(theme) => theme.palette.neutral[60]}
          >
            {alt}
          </Typography>
        )}
      </Box>
    </GrowView>
  );
};

export const ImagesArray = ({ value }: { value: IPortableImgGallery }) => {
  if (value.option) {
    return (
      <Suspense>
        <GridGallery value={value} />
      </Suspense>
    );
  } else {
    return (
      <Suspense>
        <PortableSwiper value={value} />
      </Suspense>
    );
  }
};
