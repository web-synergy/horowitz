import { FC } from 'react';
import { Box } from '@mui/material';
import { IImageReference } from '@/types/commonTypes';
import { useWidthBlokSize } from '@/hook/useWidthBlockSize';
import { urlFor } from '@/config/sanity/imageUrl';
import Image from '@/components/Common/Image';

interface PersonPhotoProps {
  image: IImageReference | undefined;
  alt: string;
}

const PersonPhoto: FC<PersonPhotoProps> = ({ image, alt }) => {
  const { containerRef, containerSize } = useWidthBlokSize();

  const aspectRatio = 3 / 4;
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
