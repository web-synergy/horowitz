import { FC, useEffect, useState, useMemo } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { IBanner } from '@/types/bannerType';
import { IColorField } from '@/types/commonTypes';
import { urlFor } from '@/config/sanity/imageUrl';
import { createColor } from '@/utils/createColor';
import { useWidthBlokSize } from '@/hook/useWidthBlockSize';

interface MainBannerProps {
  banner: IBanner;
}

const MainBanner: FC<MainBannerProps> = ({ banner }) => {
  const [imageWidth, setImageWidth] = useState(0);

  const { containerSize, containerRef } = useWidthBlokSize();
  const { background, size, img, overlay, copyright } = banner;

  const { overlayType } = overlay;
  const { backgroundType } = background;
  const { fullSize } = size;

  useEffect(() => {
    const imageWidth = fullSize
      ? containerSize
      : Math.min(
          1280,
          Math.floor(
            ((refHeight as number) * size.format.width) / size.format.height
          )
        );

    setImageWidth(imageWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerSize]);

  const createGradientColors = (
    colors: { value: IColorField; position: number }[] | undefined
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
      ? { backgroundColor: createColor(overlay.overlayColor) }
      : {
          background: `linear-gradient(${
            overlay.linearGradient.degree
          }deg, ${createGradientColors(overlay.linearGradient.colors)})`,
        };

  const refHeight = useMemo(() => {
    return fullSize
      ? `${size.maxHeight}vh`
      : Math.min(
          Math.floor((containerSize * size.format.height) / size.format.width),
          Math.floor((1280 * size.format.height) / size.format.width),
          530
        );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerSize, fullSize]);

  const backgroundEffect =
    backgroundType === 'none'
      ? {}
      : backgroundType === 'monochrome'
      ? {
          backgroundColor: createColor(background.backgroundColor),
        }
      : {
          background: `linear-gradient(${
            background.backgroundGradient.degree
          }deg, ${createGradientColors(background.backgroundGradient.colors)})`,
        };

  const image = fullSize
    ? urlFor(img).auto('format').width(imageWidth).url()
    : urlFor(img)
        .auto('format')
        .width(imageWidth)
        .height(refHeight as number)
        .url();

  return (
    <Box
      ref={containerRef}
      sx={{
        height: refHeight,
        position: 'relative',
        ...backgroundEffect,
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: fullSize ? 'unset' : 1280,
          mx: 'auto',
          height: '100%',
        }}
      >
        <img
          src={image}
          alt=""
          style={{
            width: fullSize ? '100%' : 'auto',
            height: '100%',
            maxHeight: refHeight,
            objectFit: fullSize ? 'cover' : 'contain',
            marginLeft: fullSize
              ? 'unset'
              : size.location.position !== 'left'
              ? 'auto'
              : 0,
            marginRight: fullSize
              ? 'unset'
              : size.location.position !== 'right'
              ? 'auto'
              : 0,
          }}
          width={imageWidth}
          height={refHeight}
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
