import { urlFor } from '@/config/sanity/imageUrl';
import { IImage } from '@/types/newsTypes';

import { Buttons } from '@/types/translation.d';
import { Box, Stack, Typography, TypographyProps, styled } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ShowMoreBtn } from './ShowMoreBtn';

interface INewsCart {
  img: IImage;
  title: string;
  slug: string;
}

const NewsCart: FC<INewsCart> = ({ img, title, slug }) => {
  const { t } = useTranslation();
  return (
    <Stack
      sx={{
        gap: {
          xs: '16px',
          md: '24px',
        },
      }}>
      <Box
        component={'img'}
        src={urlFor(img)
          .auto('format')
          .width(400)
          .height(248)
          .fit('fill')
          .url()
          .toString()}
        alt='news photo'
      />
      <CardTitle>{title}</CardTitle>
      <Box>
        <ShowMoreBtn title={t(`buttons.${Buttons.READ_MORE}`)} link={slug} />
      </Box>
    </Stack>
  );
};
export default NewsCart;

const CardTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 400,
  fontStyle: 'normal',
  [theme.breakpoints.up('xs')]: {
    fontSize: '1rem',
    lineHeight: 1.5,
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.375rem',
    lineHeight: 1.36,
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.5rem',
    lineHeight: 1.333,
  },
}));
