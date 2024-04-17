import { FC } from 'react';
import { Dialog } from '@mui/material';
import { urlFor } from '@/config/sanity/imageUrl';
import ZoomImg from '@/components/Common/ZoomImage';
import { IImage } from '@/types/commonTypes';

interface ImageViewerProps {
  open: boolean;
  onClose: () => void;
  image: IImage;
}

const ImageViewer: FC<ImageViewerProps> = ({ open, onClose, image }) => {
  const imageUrl = urlFor(image).auto('format').url().toString();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{ backdropFilter: 'blur(6px)' }}
      maxWidth="md"
    >
      <ZoomImg>
        <img
          alt={image.alt}
          height="auto"
          src={imageUrl}
          width="100%"
          style={{ display: 'block' }}
        />
      </ZoomImg>
    </Dialog>
  );
};

export default ImageViewer;
