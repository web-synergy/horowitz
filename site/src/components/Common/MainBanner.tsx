import { FC } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { IBanner, ColorField } from '@/types/bannerType';
import { urlFor } from '@/config/sanity/imageUrl';
import { createColor } from '@/utils/createColor';
import { useWidthBlokSize } from '@/hook/useWidthBlockSize';

interface MainBannerProps {
  banner: IBanner;
}

const MainBanner: FC<MainBannerProps> = ({ banner }) => {
  const { containerSize, containerRef } = useWidthBlokSize();
  const {
    background,
    fullSize,
    img,
    maxHeight,
    overlayType,
    location,
    copyright,
  } = banner;

  const createGradientColors = (
    colors: { value: ColorField; position: number }[] | undefined
  ) => {
    if (!colors) {
      return 'transparent';
    }
    return colors
      .map(({ value, position }) => `${createColor(value)} ${position}%`)
      .join(', ');
  };

  const overlayEffect =
    overlayType === 'none'
      ? {}
      : overlayType === 'monochrome'
      ? { backgroundColor: createColor(banner.overlayColor) }
      : {
          background: `linear-gradient(${
            banner.linearGradient?.degree
          }deg, ${createGradientColors(banner.linearGradient?.colors)})`,
        };

  const imageWidth = containerSize;
  const imageHeight = containerRef.current?.offsetHeight || 408;

  const image = fullSize
    ? urlFor(img).auto('format').width(imageWidth).height(imageHeight).url()
    : urlFor(img).auto('format').height(imageHeight).url();

  const imageLocation = location ? location : { position: 'center' };

  return (
    <Box
      ref={containerRef}
      sx={{
        backgroundColor: createColor(background),
        height: `${maxHeight}vh`,
        position: 'relative',
        '&::before': {
          content: `url(${image})`,
          display: 'none',
        },
      }}
    >
      <Box
        sx={{
          maxWidth: fullSize ? '100%' : '1280px',
          height: '100%',
          margin: '0 auto',
          display: 'flex',
          justifyContent: imageLocation.position,
        }}
      >
        <Box
          component={'img'}
          src={image}
          width={imageWidth}
          height={imageHeight}
          sx={{
            width: fullSize ? '100%' : 'auto',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          ...overlayEffect,
        }}
      ></Box>
      {copyright && (
        <Box
          sx={{
            position: 'absolute',
            bottom: 16,
            left: 0,
            right: 0,
          }}
        >
          <Container>
            <Typography
              variant="smallText"
              fontSize={{ xs: '0.75rem' }}
              lineHeight={1}
              color={(theme) => theme.palette.neutral[60]}
              sx={{
                backdropFilter: 'blur(6px)',
                display: 'inline-block',
              }}
            >
              {copyright}
            </Typography>
          </Container>
        </Box>
      )}
    </Box>
  );
};

export default MainBanner;
