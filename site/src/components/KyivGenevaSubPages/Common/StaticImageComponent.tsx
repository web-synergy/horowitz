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
      <Dialog open={open} onClose={onCloseViewer} maxWidth={'lg'}>
        <Box
          sx={{
            padding: { xs: 2, md: 4, lg: 5 },
          }}
        >
          <ZoomImage>
            <img
              alt={alt}
              height="auto"
              src={imageUrl}
              width="100%"
              style={{ display: 'block' }}
            />
          </ZoomImage>
        </Box>
      </Dialog>
    </>
  );
};

export default StaticImageComponent;
