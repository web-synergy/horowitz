import { Box, useMediaQuery } from '@mui/material';
import GrowView from './GrowView';
import { urlFor } from '@/config/sanity/imageUrl';
import { IImage } from '@/types/newsTypes';
import { useEffect, useState } from 'react';
import { useWidthBlokSize } from '@/hook/useWidthBlockSize';
import { theme } from '@/theme';

export default function NewsBanner({ img }: { img: IImage }) {
  const [imgSize, setImgSize] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 480,
  });
  const { containerSize, containerRef } = useWidthBlokSize();
  const isMob = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    if (containerSize) {
      setImgSize({
        width: containerSize,
        height: Math.min(
          Math.floor(isMob ? containerSize / 0.93 : containerSize / 1.93),
          480
        ),
      });
    }
  }, [img, containerSize]);
  return (
    <GrowView>
      <div ref={containerRef}>
        <Box
          sx={{
            width: imgSize.width,
            height: imgSize.height,

            objectFit: 'cover',
          }}
          src={
            img?.asset &&
            urlFor(img)
              .auto('format')
              .width(imgSize.width)
              .height(imgSize.height)
              .url()
              .toString()
          }
          alt={img?.alt}
          component={'img'}></Box>
      </div>
    </GrowView>
  );
}
