import { FC, useState } from 'react';
import { Box } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { urlFor } from '@/config/sanity/imageUrl';
import { IImage } from '@/types/commonTypes';

import ImageViewer from './parts/ImageViewer';

import { useWidthBlokSize } from '@/hook/useWidthBlockSize';

interface ImageComponentProps {
  image: IImage;
}

const ImageComponent: FC<ImageComponentProps> = ({ image }) => {
  const [open, setOpen] = useState(false);
  const { containerRef, containerSize } = useWidthBlokSize();

  const imageUrl = urlFor(image)
    .format('webp')
    .width(containerSize * 1.2)
    .url()
    .toString();

  const onOpenViewer = () => setOpen(true);

  const onCloseViewer = () => setOpen(false);

  return (
    <>
      <Box
        sx={{ alignItems: 'center', textAlign: 'center', cursor: 'pointer' }}
        ref={containerRef}
        onClick={onOpenViewer}
      >
        <LazyLoadImage
          alt={image.alt}
          height="auto"
          src={imageUrl}
          width={containerSize}
        />
      </Box>
      <ImageViewer open={open} onClose={onCloseViewer} image={image} />
    </>
  );
};

export default ImageComponent;
