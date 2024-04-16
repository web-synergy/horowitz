import { FC } from 'react';
import { Dialog, Box } from '@mui/material';
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
    <Dialog open={open} onClose={onClose} maxWidth={'lg'}>
      <Box
        sx={{
          padding: { xs: 2, md: 4, lg: 5 },
          cursor: 'pointer',
        }}
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
      </Box>
    </Dialog>
  );
};

export default ImageViewer;
