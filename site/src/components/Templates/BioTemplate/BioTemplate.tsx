import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { TextBlock, Wrapper } from './styled';

interface BioTemplateProps {
  title: string;
  textArray: string[];
  img: string;
}

const BioTemplate: FC<BioTemplateProps> = ({ title, textArray, img }) => {
  return (
    <>
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
    </>
  );
};

export default BioTemplate;
