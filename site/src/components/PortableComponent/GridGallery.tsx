import {
  Box,
  Dialog,
  ImageList,
  ImageListItem,
  Typography,
} from '@mui/material';
import { useLayoutEffect, useState } from 'react';
import GrowView from '@/components/Common/GrowView';

import { urlFor } from '@/config/sanity/imageUrl';
import { IPortableImgGallery } from '@/types/newsTypes';

import { Navigation, Keyboard, Zoom } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useWidthBlokSize } from '@/hook/useWidthBlockSize';

const GridGallery = ({ value }: { value: IPortableImgGallery }) => {
  const { images, title, quantity } = value;
  const [open, setOpen] = useState(false);

  const [sliderIndex, setSliderIndex] = useState(0);
  const [imgSize, setSize] = useState(0);
  const { containerSize, containerRef } = useWidthBlokSize();

  const QTY_COLUMN = 6;

  useLayoutEffect(() => {
    if (containerSize) {
      const imgWidth = Math.floor(containerSize / QTY_COLUMN);
      setSize(imgWidth);
    }
  }, [containerSize]);

  const handleClickOpen = (index: number) => {
    setSliderIndex(index);

    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  if (!images) return null;
  return (
    <Box ref={containerRef} sx={{ mb: '24px' }}>
      <ImageList variant='quilted' cols={QTY_COLUMN} rowHeight={imgSize}>
        {images.slice(0, quantity || images.length).map((item, index) => {
          if (item.asset)
            return (
              <GrowView key={item._key}>
                <ImageListItem
                  cols={item.photoLayout.cols}
                  rows={item.photoLayout.rows}>
                  <img
                    style={{
                      cursor: 'pointer',
                    }}
                    onClick={() => handleClickOpen(index)}
                    src={urlFor(item)
                      .width(imgSize * item.photoLayout.cols)
                      .height(imgSize * item.photoLayout.rows)
                      .auto('format')
                      .url()}
                    alt={item.title || ''}
                    loading='lazy'
                  />
                </ImageListItem>
              </GrowView>
            );
        })}
      </ImageList>

      <Dialog
        sx={{
          '& .MuiDialog-paper': {
            backgroundColor: 'inherit',
            boxShadow: 'none',
          },
        }}
        fullWidth={true}
        maxWidth={'md'}
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}>
        <Swiper
          modules={[Zoom, Navigation, Keyboard]}
          zoom={true}
          initialSlide={sliderIndex}
          loop={true}
          autoHeight={true}
          keyboard={{
            enabled: true,
          }}
          spaceBetween={50}
          navigation={true}
          slidesPerView={1}
          className='mySwiper'>
          {images.map(item => {
            if (item.asset)
              return (
                <SwiperSlide key={item._key}>
                  <div className='swiper-zoom-container'>
                    <img
                      loading='lazy'
                      style={{
                        width: '100%',
                        maxHeight: '90vh',
                        objectFit: 'contain',
                      }}
                      src={
                        item &&
                        urlFor(item)
                          .width(900)
                          .auto('format')
                          .fit('scale')
                          .url()
                      }
                    />
                  </div>
                </SwiperSlide>
              );
          })}
        </Swiper>
      </Dialog>

      <Typography
        sx={{ color: theme => theme.palette.neutral[50] }}
        variant='smallText'>
        {title}
      </Typography>
    </Box>
  );
};

export default GridGallery;
