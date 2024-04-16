import { FC, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Box, Dialog } from '@mui/material';
import { useWidthBlokSize } from '@/hook/useWidthBlockSize';
import ZoomImage from '@/components/Common/ZoomImage';

interface StaticImageComponentProps {
  imageUrl: string;
  alt: string;
}

const StaticImageComponent: FC<StaticImageComponentProps> = ({
  alt,
  imageUrl,
}) => {
  const [open, setOpen] = useState(false);
  const { containerRef, containerSize } = useWidthBlokSize();

  const onOpenViewer = () => setOpen(true);

  const onCloseViewer = () => setOpen(false);
  return (
    <>
      <Box
        sx={{
          alignItems: 'center',
          textAlign: 'center',
          cursor: 'pointer',
          width: '100%',
        }}
        ref={containerRef}
        onClick={onOpenViewer}
      >
        <LazyLoadImage
          alt={alt}
          height="auto"
          src={imageUrl}
          width={containerSize}
        />
      </Box>
      <Dialog
        open={open}
        onClose={onCloseViewer}
        sx={{ backdropFilter: 'blur(6px)' }}
        maxWidth="md"
      >
        <ZoomImage>
          <img
            alt={alt}
            height="100%"
            src={imageUrl}
            width="auto"
            style={{ display: 'block', objectFit: 'fill' }}
          />
        </ZoomImage>
      </Dialog>
    </>
  );
};

export default StaticImageComponent;
