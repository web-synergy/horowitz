import { urlFor } from '@/config/sanity/imageUrl';
import { IImage } from '@/types/newsTypes';
import { Box } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ImageComponent = ({ value }: { value: IImage }) => {
  return (
    <Box
      sx={{ width: '100%', mb: { xs: '32px', md: '40px' } }}
      component={'img'}
      src={urlFor(value).auto('format').fit('scale').url().toString()}
      alt={value.alt || ' '}
      loading='lazy'
    />
  );
};
