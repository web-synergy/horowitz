import { FC, useMemo } from 'react';
import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { getLangValue } from '@/utils/getLangValue';
import { Wrapper, TextBlock } from './styled';

import { IJury } from '@/types/kyivGeneva';

interface JuryProps {
  jury: IJury;
}

const Jury: FC<JuryProps> = ({ jury }) => {
  const {
    i18n: { language },
  } = useTranslation();

  const textArray = useMemo(() => {
    const text = getLangValue(language, jury.text);
    return text.split('\n');
  }, [jury.text, language]);

  return (
    <>
      <Typography variant="h1" mb={{ xs: 3, lg: 6 }}>
        {getLangValue(language, jury.name)}
      </Typography>
      <Box>
        <Wrapper>
          <Box component="img" src={jury.photo} />
          {textArray.map((text, index) => (
            <TextBlock key={index}>{text}</TextBlock>
          ))}
        </Wrapper>
      </Box>
    </>
  );
};

export default Jury;
