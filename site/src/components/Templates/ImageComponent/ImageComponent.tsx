import { FC, useState } from 'react';

import { Box } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { urlFor } from '@/config/sanity/imageUrl';
import { IImage } from '@/types/commonTypes';
import { getImageData } from '@/utils/getImageData';

import ImageViewer from './parts/ImageViewer';

import { useWidthBlokSize } from '@/hook/useWidthBlockSize';

interface ImageComponentProps {
  image: IImage;
}

const ImageComponent: FC<ImageComponentProps> = ({ image }) => {
  const [open, setOpen] = useState(false);
  const { containerRef, containerSize } = useWidthBlokSize();
  const {
    dimensions: { width, height },
  } = getImageData(image.asset._ref);

  const aspectRatio = Number((width / height).toFixed(2));
  const imageWidth = Math.floor(containerSize * 1.2);
  const imageHeight = Math.floor(imageWidth / aspectRatio);

  const imageUrl = urlFor(image)
    .auto('format')
    .width(imageWidth)
    .height(imageHeight)
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
          src={imageUrl}
          width={containerSize}
          height={Math.floor(containerSize / aspectRatio)}
        />
      </Box>
      <ImageViewer open={open} onClose={onCloseViewer} image={image} />
    </>
  );
};

export default ImageComponent;
