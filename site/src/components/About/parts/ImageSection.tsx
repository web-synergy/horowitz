import { urlFor } from '@/config/sanity/imageUrl';
import { Box } from '@mui/material';
import { FC } from 'react';
import { AboutCompetitionImage } from '@/types/aboutCompetitionTypes';

interface LogotypesGalleryProps {
  image: AboutCompetitionImage;
}

const ImageSection: FC<LogotypesGalleryProps> = ({ image }) => {
  return (
    <Box sx={{ alignItems: 'center', textAlign: 'center' }}>
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
    </Box>
  );
};

export default ImageSection;
