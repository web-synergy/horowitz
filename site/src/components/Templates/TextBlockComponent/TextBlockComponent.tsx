import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { TextBlock, Wrapper } from './styled';

interface TextBlockProps {
  title: string;
  textArray: string[];
  img?: string;
}

const TextBlockComponent: FC<TextBlockProps> = ({ title, textArray, img }) => {
  return (
    <Box>
      <Typography variant="h1" mb={{ xs: 3, md: 5, lg: 6 }}>
        {title}
      </Typography>

      <Wrapper>
        <Box component="img" src={img} alt={`photo of ${name}`} />
        <Box>
          {textArray.map((text, index) => (
            <TextBlock key={index}>{text}</TextBlock>
          ))}
        </Box>
      </Wrapper>
    </Box>
  );
};

export default TextBlockComponent;
