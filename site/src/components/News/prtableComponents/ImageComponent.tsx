import { urlFor } from '@/config/sanity/imageUrl';
import { IImage, IPortableImgGallery } from '@/types/newsTypes';
import { Box, useMediaQuery } from '@mui/material';
import { FC, Suspense, lazy } from 'react';
import { PortableSwiper } from './Swiper';
import { theme } from '@/theme';
import GrowView from '@/components/Common/GrowView';
const GridGallery = lazy(() => import('./GridGallery'));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ImageComponent = ({ value }: { value: IImage }) => {
  return (
    <GrowView>
      <Box sx={{ my: { xs: '32px', md: '40px' } }}>
        <img
          width={'100%'}
          height={'auto'}
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
export const ImagesArray: FC<IPortableImgGallery> = ({ value }) => {
  const { option } = value;

  const isMob = useMediaQuery(theme.breakpoints.down('md'));
  if (option && !isMob) {
    return (
      <Suspense fallback={<p>load</p>}>
        <GridGallery value={value} />
      </Suspense>
    );
  } else {
    return (
      <Suspense fallback={<p>load</p>}>
        <PortableSwiper value={value} />
      </Suspense>
    );
  }
};
