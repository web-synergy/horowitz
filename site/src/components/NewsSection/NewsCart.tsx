import { urlFor } from '@/config/sanity/imageUrl';
import { IImage } from '@/types/commonTypes';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Buttons } from '@/types/translation.d';
import { Box, Stack, Typography, TypographyProps, styled } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import LinkBtn from '../Common/LinkBtn';

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
          xs: 1,
          md: 2,
        },
        height: '100%',
        '& img': {
          objectPosition: 'top',
          aspectRatio: { xs: 1.34, lg: 1.44 },
        },
      }}
    >
      <LazyLoadImage
        src={urlFor(img).auto('format').width(400).fit('fill').url().toString()}
        alt="news photo"
        style={{ objectFit: 'cover' }}
      />
      <CardTitle variant="subhead">{title}</CardTitle>
      <Box>
        <LinkBtn title={t(`buttons.${Buttons.READ_MORE}`)} link={slug} />
      </Box>
    </Stack>
  );
};
export default NewsCart;

// ========== PARTS ==========

const CardTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  flexGrow: 1,

  // обмеження для тексту
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 1,
  lineClamp: 1,
  WebkitBoxOrient: 'vertical',

  [theme.breakpoints.up('md')]: {
    WebkitLineClamp: 2,
    lineClamp: 2,
  },
}));
