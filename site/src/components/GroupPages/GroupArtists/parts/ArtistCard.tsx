import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { ArtistType } from '@/types/groupTypes';
import CommonStackWrapper from '@/components/Common/CommonStackWrapper';
import TextBlockComponent from '@/components/Templates/TextBlockComponent/TextBlockComponent';
import { urlFor } from '@/config/sanity/imageUrl';
import { getImageData } from '@/utils/getImageData';
import { useWidthBlokSize } from '@/hook/useWidthBlockSize';

const ArtistCard: FC<ArtistType> = ({
  description,
  image,
  title,
  copyRight,
}) => {
  const { containerRef, containerSize } = useWidthBlokSize();

  const {
    dimensions: { height, width },
  } = getImageData(image.asset._ref);

  const imageHeight = Math.floor((containerSize * height) / width);

  const imageUrl = urlFor(image)
    .auto('format')
    .width(containerSize)
    .height(imageHeight)
    .url()
    .toString();

  return (
    <CommonStackWrapper>
      <Typography variant="h3">{title}</Typography>
      <TextBlockComponent textArray={description} />
      <Box sx={{ width: '100%' }} ref={containerRef}>
        <img
          src={imageUrl}
          width={containerSize}
          height={imageHeight}
          style={{ display: 'block' }}
        />
        {copyRight && (
          <Typography
            component={'p'}
            mt={'2px'}
            fontSize={{ xs: 8, md: 12 }}
            lineHeight={{ xs: 2, md: 1.333 }}
            color={(theme) => theme.palette.neutral[60]}
          >
            {copyRight}
          </Typography>
        )}
      </Box>
    </CommonStackWrapper>
  );
};

export default ArtistCard;
