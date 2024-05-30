import { FC, useEffect, useState, useMemo } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { BannerType } from '@/types/bannerType';

import { urlFor } from '@/config/sanity/imageUrl';
import { createColor, createGradientColors } from '@/utils/createColor';
import { useWidthBlokSize } from '@/hook/useWidthBlockSize';
import { getImageData } from '@/utils/getImageData';

interface MainBannerProps {
  banner: BannerType;
}

const MainBanner: FC<MainBannerProps> = ({ banner }) => {
  const [imageWidth, setImageWidth] = useState(0);

  const { containerSize, containerRef } = useWidthBlokSize();
  const { backgroundType, fullSize, img, overlayType, authorRight } = banner;

  const imageData = getImageData(img.asset._ref);
  const {
    dimensions: { height, width },
  } = imageData;

  console.log(banner);
  useEffect(() => {
    const imageWidth = fullSize
      ? containerSize
      : Math.min(1280, Math.floor(((refHeight as number) * width) / height));

    setImageWidth(imageWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerSize]);

  const overlayEffect =
    overlayType === 'none'
      ? {}
      : overlayType === 'monochrome'
      ? {
          backgroundColor: createColor(
            banner.overlayColor,
            banner.overlayOpacity
          ),
        }
      : {
          background: `linear-gradient(${
            banner.overlayGradient.degree
          }deg, ${createGradientColors(banner.overlayGradient.colors)})`,
        };

  const refHeight = useMemo(() => {
    return fullSize
      ? `${banner.maxHeight}vh`
      : Math.min(
          Math.floor((containerSize * height) / width),
          Math.floor((1280 * height) / width),
          530
        );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerSize, fullSize]);

  const backgroundEffect =
    backgroundType === 'none'
      ? {}
      : backgroundType === 'monochrome'
      ? {
          backgroundColor: createColor(banner.backgroundColor),
        }
      : {
          background: `linear-gradient(${
            banner.backgroundGradient.degree
          }deg, ${createGradientColors(banner.backgroundGradient.colors)})`,
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
        maxHeight: '50vh',
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
              : banner.position !== 'left'
              ? 'auto'
              : 0,
            marginRight: fullSize
              ? 'unset'
              : banner.position !== 'right'
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
      {authorRight && (
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
              {authorRight}
            </Typography>
          </Container>
        </Box>
      )}
    </Box>
  );
};

export default MainBanner;
