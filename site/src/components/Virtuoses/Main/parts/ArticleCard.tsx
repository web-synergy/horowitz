import ShowMoreBtn from '@/components/Main/parts/NewsSection/ShowMoreBtn';
import { CardTitle } from '@/components/Main/parts/NewsSection/styled';
import { urlFor } from '@/config/sanity/imageUrl';
import { IImage } from '@/types/newsTypes';
import { Routes } from '@/types/routes.d';
import { Buttons } from '@/types/translation.d';
import { Box, Stack } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface IArticleCard {
  img: IImage;
  title: string;
  slug: string;
}

const ArticleCard: FC<IArticleCard> = ({ img, title, slug }) => {
  const path = `/${[Routes.VIRTUOSES_ARTICLE]}/${slug}`;
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
        <ShowMoreBtn title={t(`buttons.${Buttons.READ_MORE}`)} link={path} />
      </Box>
    </Stack>
  );
};
export default ArticleCard;
