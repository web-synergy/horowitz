import { Box, Stack } from '@mui/material';
import { FC } from 'react';

import ShowMoreBtn from './ShowMoreBtn';

import { Buttons } from '@/types/translation.d';
import { useTranslation } from 'react-i18next';
import { CardTitle } from './styled';

interface NewsCardProps {
  title: string;
  image: string;
  link: string;
}

const NewsCard: FC<NewsCardProps> = ({ image, title, link }) => {
  const { t } = useTranslation();
  return (
    <Stack
      sx={{
        maxWidth: {
          xs: '247px',
          md: '332px',
          lg: '357px',
        },
        gap: {
          xs: '16px',
          md: '24px',
        },
      }}
    >
      <Box component={'img'} src={image} alt="news photo" />
      <CardTitle>{title}</CardTitle>
      <Box>
        <ShowMoreBtn title={t(`buttons.${Buttons.READ_MORE}`)} link={link} />
      </Box>
    </Stack>
  );
};

export default NewsCard;
