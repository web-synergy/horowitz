import { FC } from 'react';
import { Stack, Box, IconButton, Typography } from '@mui/material';
import { GuestType } from '@/types/groupTypes';
import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon';

import Image from '@/components/Common/Image';
import { urlFor } from '@/config/sanity/imageUrl';
import { useWidthBlokSize } from '@/hook/useWidthBlockSize';
import { RegularText } from '@/components/Common/RegularText';

interface GuestModalProps {
  guest: GuestType;
  onCloseModal: () => void;
}

const GuestModal: FC<GuestModalProps> = ({ guest, onCloseModal }) => {
  const {
    about,
    avatar: { aspectRatio, image, alt },
    name,
  } = guest;
  const { containerRef, containerSize } = useWidthBlokSize();
  const imageHeight =
    aspectRatio !== '16/9'
      ? Math.max(Math.floor(window.innerHeight * 0.3), 280)
      : Math.floor(containerSize * 0.6051);
  const imageWidth =
    aspectRatio !== '16/9' ? Math.floor(containerSize * 0.5) : containerSize;

  // const imageWidth = containerSize;
  const imageUrl = urlFor(image)
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
          alt={alt || name}
          width={imageWidth}
          height={imageHeight}
          isLazyLoading={false}
          styles={{
            width: imageWidth,
            margin: '0 auto',
            minHeight: 280,
          }}
        />
        <RegularText text={about} columnCount={1} />
        {/* <PortableComponent data={about} /> */}
      </Stack>
    </Box>
  );
};

export default GuestModal;
