import { Box } from '@mui/material';

const ImagePerson = ({ img, alt = 'photo' }: { img: string; alt?: string }) => {
  return (
    <Box
      component={'img'}
      src={img}
      alt={alt}
      loading='lazy'
      sx={{
        display: 'block',
        width: '100%',
        height: 'auto',
        aspectRatio: { xs: '1/1', lg: '2/2.9' },
        objectFit: 'cover',
        mb: 3,
      }}
    />
  );
};

export default ImagePerson;
