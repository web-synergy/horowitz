import { Box } from '@mui/material';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useHomeStore } from '@/store/homeStore';
import { useWidthBlokSize } from '@/hook/useWidthBlockSize';
import { urlFor } from '@/config/sanity/imageUrl';
import { createColor } from '@/utils/createColor';

const HolidayCard = () => {
  const banner = useHomeStore((state) => state.banner);
  const { containerRef, containerSize } = useWidthBlokSize();

  const imageHeight = Math.floor((containerSize * 9) / 16);

  const color = createColor(banner?.background);
  const url = banner
    ? urlFor(banner.img)
        .auto('format')
        .width(containerSize)
        .height(imageHeight)
        .toString()
    : '';

  return (
    <Box component={'section'} sx={{ lineHeight: 0, backgroundColor: color }}>
      <Box sx={{ maxWidth: 1280, margin: '0 auto' }} ref={containerRef}>
        <LazyLoadImage
          alt="holiday card"
          height={imageHeight}
          src={url}
          width={containerSize}
          effect="blur"
        />
      </Box>
    </Box>
  );
};

export default HolidayCard;
