import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useHomeStore } from '@/store/homeStore';
import { useWidthBlokSize } from '@/hook/useWidthBlockSize';
import { urlFor } from '@/config/sanity/imageUrl';
import { createColor, createGradientColors } from '@/utils/createColor';
import { getImageData } from '@/utils/getImageData';

const HolidayCard = () => {
  const [imageWidth, setImageWidth] = useState(1);
  const [refHeight, setReHeight] = useState(1);
  const { banner } = useHomeStore();
  const { containerRef, containerSize } = useWidthBlokSize();

  const imageData = banner
    ? getImageData(banner.img.asset._ref)
    : { dimensions: { height: 0, width: 0 } };

  const {
    dimensions: { height, width },
  } = imageData;

  useEffect(() => {
    if (!banner) {
      return;
    }

    const heightForRef = Math.floor((containerSize * height) / width);
    const imageWidth = Math.min(
      1280,
      Math.floor((heightForRef * width) / height)
    );

    setImageWidth(imageWidth);
    setReHeight(heightForRef);
  }, [banner, containerSize, height, width]);

  if (!banner) {
    return;
  }

  const { background, img } = banner;
  const { backgroundType } = background;

  const backgroundEffect =
    backgroundType === 'monochrome'
      ? {
          backgroundColor: createColor(background.backgroundColor),
        }
      : {
          background: `linear-gradient(${
            background.backgroundGradient.degree
          }deg, ${createGradientColors(background.backgroundGradient.colors)})`,
        };

  const imageUrl = urlFor(img)
    .auto('format')
    .width(imageWidth)
    .height(refHeight)
    .url()
    .toString();

  return (
    <Box
      component={'section'}
      sx={{
        lineHeight: 0,
        width: '100%',
        height: refHeight,
        ...backgroundEffect,
      }}
    >
      <Box
        sx={{
          maxWidth: 1280,
          margin: '0 auto',
        }}
        ref={containerRef}
      >
        <LazyLoadImage
          alt="holiday card"
          height={refHeight}
          src={imageUrl}
          width={imageWidth}
          style={{ margin: '0 auto' }}
        />
      </Box>
    </Box>
  );
};

export default HolidayCard;
