import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Box } from '@mui/material';
import { urlFor } from '@/config/sanity/imageUrl';
import { GridGallery } from './GridGallery';
import { FC } from 'react';
import { IPortableImgGallery } from '@/types/newsTypes';

const PortableSwiper: FC<IPortableImgGallery> = ({ value }) => {
  const { images, option } = value;

  if (option) {
    return <GridGallery value={value} />;
  }
  return (
    <Box>
      <Swiper spaceBetween={50} slidesPerView={1}>
        {images &&
          images.map(item => (
            <SwiperSlide key={item._key}>
              <img
                width={'100%'}
                height={'500px'}
                src={urlFor(item).crop('focalpoint').url()}
              />
            </SwiperSlide>
          ))}
        ...
      </Swiper>
    </Box>
  );
};
export default PortableSwiper;
