import { Box } from '@mui/material';

const ImagePerson = ({
  img,
  alt = 'photo',
  mb = 3,
}: {
  img: string;
  alt?: string;
  mb?: number;
}) => {
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
        mb: mb,
      }}
    />
  );
};

export default ImagePerson;
