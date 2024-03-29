import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { getLangValue } from '@/utils/getLangValue';
import { IJury } from '@/types/kyivGenevaDataTypes';
import { Typography, styled, Box } from '@mui/material';

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

  const name = getLangValue(language, jury.name);

  return (
    <>
      <Typography variant="h1" mb={{ xs: 3, md: 5, lg: 6 }}>
        {name}
      </Typography>
      <Wrapper>
        <img src={jury.photo} alt={`photo of ${name}`} />
        <Box>
          {textArray.map((text, index) => (
            <TextBlock key={index}>{text}</TextBlock>
          ))}
        </Box>
      </Wrapper>
    </>
  );
};

export default Jury;

const Wrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  position: 'relative',

  '& img': {
    display: 'block',
    maxWidth: '100%',
    maxHeight: '40vh',
    margin: '0 auto',
    marginBottom: 24,
  },

  [theme.breakpoints.up('md')]: {
    '& img': {
      float: 'right',
      marginLeft: 24,
      marginBottom: 8,
      width: '50%',
      maxHeight: '50vh',
      objectFit: 'cover',
      objectPosition: 'center top',
    },
  },

  [theme.breakpoints.up('lg')]: {
    columnCount: 2,
    columnGap: 24,
    paddingTop: '46%',

    '&:before': {
      content: '""',
      display: 'block',
      marginBottom: '-95%',
    },

    '& > *': {
      backfaceVisibility: 'hidden',
    },

    '& img': {
      position: 'absolute',
      top: 0,
      right: 0,
      width: 'calc(50% - 12px)',
      height: 500,
      maxHeight: 'unset',
      margin: 0,
    },
  },
}));

export const TextBlock = styled(Typography)(() => ({
  textAlign: 'justify',
  display: 'block',

  '&:not(:last-of-type)': {
    marginBottom: 16,
  },
}));
