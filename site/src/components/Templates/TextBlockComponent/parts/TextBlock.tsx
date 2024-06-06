import { FC } from 'react';
import { Typography, Divider } from '@mui/material';

interface TextBlockProps {
  text: string;
  gap?: 8 | 16;
}

const TextBlock: FC<TextBlockProps> = ({ text, gap = 8 }) => {
  if (text.trim() === '*Divider*') {
    return <Divider flexItem sx={{ mt: 2, mb: 2 }} />;
  }

  return (
    <Typography
      variant="bodyRegular"
      component={'p'}
      sx={{
        textAlign: 'justify',

        '&:not(:last-child)': {
          marginBottom: `${gap}px`,
        },
      }}
    >
      {text}
    </Typography>
  );
};

export default TextBlock;
