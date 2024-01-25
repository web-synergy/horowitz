import { Box, Typography } from '@mui/material';
import { urlFor } from '@/config/sanity/imageUrl';
import { FC, useState } from 'react';
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './sliderStyles.css';
import { IPortableImgGallery } from '@/types/newsTypes';
import GrowView from '@/components/Common/GrowView';

export const PortableSwiper: FC<IPortableImgGallery> = ({ value }) => {
  const { images, title } = value;
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();

  return (
    <GrowView>
      <Box sx={{ my: '24px' }}>
        <Swiper
          modules={[FreeMode, Navigation, Thumbs]}
          loop={true}
          spaceBetween={50}
          navigation={true}
          slidesPerView={1}
          thumbs={{ swiper: thumbsSwiper }}
          className='mySwiper'>
          {images.map(item => {
            if (item.asset)
              return (
                <SwiperSlide key={item._key}>
                  <img
                    loading='lazy'
                    src={
                      item &&
                      urlFor(item)
                        .width(980)
                        .height(480)
                        .auto('format')
                        .fit('fill')
                        .url()
                    }
                  />
                </SwiperSlide>
              );
          })}
        </Swiper>

        <Swiper
          modules={[FreeMode, Navigation, Thumbs]}
          watchSlidesProgress
          spaceBetween={8}
          slidesPerView={4}
          loop={true}
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
        <Typography
          sx={{
            display: 'block',
            my: '16px',
            color: theme => theme.palette.neutral[50],
          }}
          variant='smallText'>
          {title}
        </Typography>
      </Box>
    </GrowView>
  );
};