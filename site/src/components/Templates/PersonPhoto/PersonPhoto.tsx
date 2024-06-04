import { FC } from 'react';
import { useTheme, useMediaQuery, Box } from '@mui/material';
import { IImageReference } from '@/types/commonTypes';
import { useWidthBlokSize } from '@/hook/useWidthBlockSize';
import { urlFor } from '@/config/sanity/imageUrl';
import Image from '@/components/Common/Image';

interface PersonPhotoProps {
  image: IImageReference | undefined;
  alt: string;
}

const MOBILE_ASPECT = 0.97;
const TABLET_ASPECT = 1;
const DESKTOP_ASPECT = 0.7;

const PersonPhoto: FC<PersonPhotoProps> = ({ image, alt }) => {
  const theme = useTheme();
  const { containerRef, containerSize } = useWidthBlokSize();

  const isTablet = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const aspectRatio = isDesktop
    ? DESKTOP_ASPECT
    : isTablet
    ? TABLET_ASPECT
    : MOBILE_ASPECT;

  const imageHeight = Math.floor(containerSize / aspectRatio);

  if (!image) {
    return (
      <Box
        sx={{
          width: '100%',
          height: imageHeight,
          backgroundColor: (theme) => theme.palette.neutral[30],
        }}
        ref={containerRef}
      ></Box>
    );
  }

  const imageSrc = urlFor(image)
    .auto('format')
    .width(containerSize)
    .height(imageHeight)
    .url()
    .toString();

  return (
    <Box sx={{ width: '100%' }} ref={containerRef}>
      <Image
        src={imageSrc}
        isLazyLoading={true}
        alt={alt}
        height={imageHeight}
        width={containerSize}
      />
    </Box>
  );
};

export default PersonPhoto;
