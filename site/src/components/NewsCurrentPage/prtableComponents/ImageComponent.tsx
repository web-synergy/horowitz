import { urlFor } from '@/config/sanity/imageUrl';
import { IImage, IPortableImgGallery } from '@/types/newsTypes';
import { Box } from '@mui/material';
import { Suspense, lazy } from 'react';
import { PortableSwiper } from './Swiper/Swiper';

import GrowView from '@/components/Common/GrowView';
const GridGallery = lazy(() => import('./GridGallery'));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ImageComponent = ({ value }: { value: IImage }) => {
  return (
    <GrowView>
      <Box sx={{ my: { xs: '32px', md: '40px' } }}>
        <Box
          component={'img'}
          sx={{
            width: '100%',
            height: { xs: 'auto', md: '408px' },
            objectFit: { sx: 'none', md: 'cover' },
          }}
          src={
            value.asset &&
            urlFor(value)
              .auto('format')
              .width(920)
              .height(520)
              .fit('fill')
              .url()
              .toString()
          }
          alt={value.alt || ''}
          loading='lazy'
        />
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
