import { urlFor } from '@/config/sanity/imageUrl';
import { IImage } from '@/types/commonTypes';
import { LazyLoadImage } from 'react-lazy-load-image-component';
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
        height: '100%',
        '& img': {
          // height: {
          //   xs: '185px',
          //   md: '248px',
          // },
          objectPosition: 'top',
          aspectRatio: 1.5,
        },
      }}
    >
      <LazyLoadImage
        src={urlFor(img).auto('format').width(400).fit('fill').url().toString()}
        alt="news photo"
        style={{ objectFit: 'cover' }}
      />
      <CardTitle>{title}</CardTitle>
      <Box>
        <ShowMoreBtn title={t(`buttons.${Buttons.READ_MORE}`)} link={slug} />
      </Box>
    </Stack>
  );
};
export default NewsCart;

// ========== PARTS ==========

const CardTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 400,
  fontStyle: 'normal',
  flexGrow: 1,

  // обмеження для тексту
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  lineClamp: 2,
  WebkitBoxOrient: 'vertical',

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
