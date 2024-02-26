import { urlFor } from '@/config/sanity/imageUrl';
import { Box } from '@mui/material';
import { FC } from 'react';
import { AboutCompetitionImage } from '@/types/aboutCompetitionTypes';
import ZoomImg from '@/components/Common/ZoomImage';

interface LogotypesGalleryProps {
  image: AboutCompetitionImage;
}

const ImageSection: FC<LogotypesGalleryProps> = ({ image }) => {
  return (
    <Box sx={{ alignItems: 'center', textAlign: 'center' }}>
      <ZoomImg>
        <Box
          component={'img'}
          src={urlFor(image).auto('format').url().toString()}
          alt='Зображення історії'
          sx={{
            display: 'block',
            height: 'auto',
            width: '100%',
          }}
        />
      </ZoomImg>
    </Box>
  );
};

export default ImageSection;
