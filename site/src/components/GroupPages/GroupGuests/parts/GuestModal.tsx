import { FC } from 'react';
import { Stack, Box, IconButton, Typography } from '@mui/material';
import { GuestType } from '@/types/groupTypes';
import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon';

import Image from '@/components/Common/Image';
import { urlFor } from '@/config/sanity/imageUrl';
import { useWidthBlokSize } from '@/hook/useWidthBlockSize';
import TextBlockComponent from '@/components/Templates/TextBlockComponent/TextBlockComponent';
import { getImageData } from '@/utils/getImageData';

interface GuestModalProps {
  guest: GuestType;
  onCloseModal: () => void;
}

const GuestModal: FC<GuestModalProps> = ({ guest, onCloseModal }) => {
  const { about, photo, name } = guest;
  const { containerRef, containerSize } = useWidthBlokSize();
  const {
    dimensions: { height, width },
  } = getImageData(photo.asset._ref);
  const aspectRatio = width / height;
  const imageHeight =
    aspectRatio < 1
      ? Math.max(Math.floor(window.innerHeight * 0.4), 280)
      : Math.floor(containerSize / aspectRatio);
  const imageWidth =
    aspectRatio < 1
      ? Math.max(Math.floor(imageHeight * aspectRatio), 300)
      : containerSize;

  const imageUrl = urlFor(photo)
    .auto('format')
    .width(imageWidth)
    .height(imageHeight)
    .url()
    .toString();
  return (
    <Box
      sx={{
        px: { xs: 2, md: 5, lg: 10 },
        pt: { xs: 7, md: 5 },
        pb: { xs: 3, md: '36px', lg: 5 },
        position: 'relative',
      }}
    >
      <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
        <IconButton sx={{ p: 0 }} onClick={onCloseModal}>
          <SvgSpriteIcon icon="close" />
        </IconButton>
      </Box>
      <Stack ref={containerRef} gap={{ xs: 2, lg: 3 }}>
        <Typography variant="h3">{name}</Typography>
        <Image
          src={imageUrl}
          alt={name}
          width={imageWidth}
          height={imageHeight}
          isLazyLoading={false}
          styles={{
            width: imageWidth,
            margin: '0 auto',
            minHeight: 280,
          }}
        />
        <TextBlockComponent text={about} column={1} />
      </Stack>
    </Box>
  );
};

export default GuestModal;
