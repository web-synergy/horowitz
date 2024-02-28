import { Box, Typography, useMediaQuery } from '@mui/material';
import { urlFor } from '@/config/sanity/imageUrl';
import { useState } from 'react';
import { Navigation, Thumbs, FreeMode, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './sliderStyles.css';
import { IPortableImgGallery } from '@/types/newsTypes';
import GrowView from '@/components/Common/GrowView';
import { theme } from '@/theme';

export const PortableSwiper = ({ value }: { value: IPortableImgGallery }) => {
  const { images, title } = value;
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  const isMob = useMediaQuery(theme.breakpoints.down('md'));
  if (!images) return null;

  const imagesLength = images.length;

  const countSlidesPer = isMob ? 2 : imagesLength > 4 ? 4 : imagesLength;

  return (
    <GrowView>
      <Box sx={{ my: { xs: '40px', md: '48px', lg: '56px' } }}>
        <Swiper
          modules={[Navigation, Thumbs, Keyboard]}
          loop={true}
          spaceBetween={50}
          navigation={true}
          slidesPerView={1}
          thumbs={{ swiper: thumbsSwiper }}
          keyboard={{
            enabled: true,
          }}
          className='mySwiper'>
          {images.map(item => {
            if (item.asset)
              return (
                <SwiperSlide key={item._key}>
                  <Box
                    component={'img'}
                    loading='lazy'
                    src={
                      item &&
                      urlFor(item)
                        .width(isMob ? 288 : 930)
                        .height(isMob ? 309 : 480)
                        .auto('format')
                        .fit('fill')
                        .url()
                    }
                  />
                </SwiperSlide>
              );
          })}
        </Swiper>
        <Box sx={{ my: { xs: '14px', md: '24px' } }}>
          <Swiper
            modules={[FreeMode, Navigation, Thumbs]}
            watchSlidesProgress
            spaceBetween={16}
            slidesPerView={countSlidesPer}
            loop={imagesLength > countSlidesPer ? true : false}
            slideToClickedSlide
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            onSwiper={setThumbsSwiper}
            className='my_thumbs'>
            {images &&
              images.map(item => {
                if (item.asset)
                  return (
                    <SwiperSlide key={item._key}>
                      <img
                        src={urlFor(item)
                          .width(223)
                          .height(130)
                          .auto('format')
                          .fit('fill')
                          .url()}
                      />
                    </SwiperSlide>
                  );
              })}
          </Swiper>
        </Box>
        <Typography
          sx={{
            display: 'block',
            mt: { xs: '16px', md: '24px' },
            color: theme => theme.palette.neutral[50],
          }}
          variant='caption'>
          {title}
        </Typography>
      </Box>
    </GrowView>
  );
};
