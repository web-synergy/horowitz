import { useParams } from 'react-router-dom';
import PageTemplate from '../Common/PageTemplate';
import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useNewsStore } from '@/store/newsStore';
import { useTranslation } from 'react-i18next';
import { urlFor } from '@/config/sanity/imageUrl';
import { PortableText } from '@portabletext/react';
import { components } from './prtableComponents';
import { parseAndFormatDate } from '@/utils/helpers';
import Breadcrumbs from '../Common/Breadcrumbs';
import { Routes } from '@/types/routes.d';
import { useLiveQuery } from '@sanity/preview-kit';
import { currentNewsQuery } from '@/api/query';

const NewsCurrentPage = () => {
  const { slug } = useParams();

  const { getCurrentNews, currentNews } = useNewsStore();
  const {
    t,
    i18n: { language },
  } = useTranslation();

  useEffect(() => {
    if (slug) getCurrentNews(language, slug);
  }, [slug, language]);

  const [data] = useLiveQuery(currentNews, currentNewsQuery, {
    slug,
    language,
  });

  const history = [
    { title: t(`navigation.${Routes.NEWS}`), href: `/${Routes.NEWS}` },
  ];

  return (
    <PageTemplate>
      <Container>
        <Breadcrumbs title={data?.title || ''} mode='light' history={history} />
        {data && (
          <Box sx={{ mt: '56px' }}>
            <Box
              sx={{ width: '100%', height: '408px' }}
              src={urlFor(data.img)
                .auto('format')
                .width(980)
                .height(408)
                .fit('fill')
                .url()
                .toString()}
              component={'img'}></Box>
            <Box sx={{ maxWidth: '930px', mx: 'auto' }}>
              <Typography
                sx={{ mt: '54px', mb: '24px', display: 'block' }}
                variant='bodyLight'>
                {parseAndFormatDate(data._createdAt)}
              </Typography>
              <Typography sx={{ mb: '32px' }} variant='h2'>
                {data.title}
              </Typography>
              <PortableText
                value={data.description[0]}
                components={components}
              />
            </Box>
          </Box>
        )}
      </Container>
    </PageTemplate>
  );
};
export default NewsCurrentPage;
