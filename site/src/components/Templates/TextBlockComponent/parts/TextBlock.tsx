import { FC } from 'react';
import { Divider, Typography, Link } from '@mui/material';
import { formatText } from '@/utils/fomatText';

interface TextBlockProps {
  text: string;
  gap?: 8 | 16;
}

const TextBlock: FC<TextBlockProps> = ({ text, gap = 8 }) => {
  //Додавання горизонтальної лінії
  if (text.trim() === '*Divider*') {
    return <Divider flexItem sx={{ mt: 2, mb: 2 }} />;
  }

  const formattedText = formatText(text);

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
      {formattedText.map((item) => {
        if (item.type === 'nowrap') {
          return (
            <Typography component={'span'} style={{ textWrap: 'nowrap' }}>
              {item.value}
            </Typography>
          );
        }

        if (item.type === 'link') {
          return (
            <Link href={item.url} target="_blank" variant="linkBlock">
              {item.value}
            </Link>
          );
        }

        if (item.type === 'bold') {
          return (
            <Typography component={'span'} variant="bodyMedium">
              {item.value}
            </Typography>
          );
        }

        return item.value;
      })}
    </Typography>
  );
};

export default TextBlock;
