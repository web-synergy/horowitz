import { useParams } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { PortableText } from '@portabletext/react';

import { useLiveQuery } from '@sanity/preview-kit';
import { currentArticleQuery } from '@/api/query';
import { INews } from '@/types/newsTypes';

import { parseAndFormatDate } from '@/utils/helpers';

import Loader from '@/components/Common/Loader';
import PageTemplate from '@/components/Common/PageTemplate';

import { components } from '@/components/NewsCurrentPage/PortableNews';

import { useFetch } from '../../../hook/useFetch';
import GoBackBtn from '@/components/Common/GoBackBtn';
import { Routes } from '@/types/routes.d';
import NewsBanner from '@/components/Common/NewsBanner';

const VirtuososCurrentArticle = () => {
  const { slug } = useParams();

  const {
    i18n: { language },
  } = useTranslation();
  const { responseData, error, loading } = useFetch<INews>(
    currentArticleQuery,
    {
      language,
      slug,
    }
  );
  const [data] = useLiveQuery(responseData, currentArticleQuery, {
    slug,
    language,
  });

  if (loading) return <Loader />;
  if (error) {
    console.error(error);
  }

  return (
    <PageTemplate>
      <Container>
        {data && (
          <Box
            sx={{
              mt: { xs: '24px', md: '48px' },
              mb: { xs: '72px', md: '96px', lg: '120px' },
            }}>
            <NewsBanner img={data?.img} />

            <Box sx={{ maxWidth: '930px', mx: 'auto' }}>
              <Typography
                sx={{
                  mt: { xs: '24px', md: '48px' },
                  mb: '24px',
                  display: 'block',
                  color: theme => theme.palette.neutral[50],
                }}
                variant='bodyLight'>
                {parseAndFormatDate(data._createdAt)}
              </Typography>

              <Typography variant='h2'>{data.title}</Typography>
              <Box
                sx={{
                  mb: { xs: '40px', md: '48px', lg: '56px' },
                  mt: { xs: '24px', md: '32px' },
                }}>
                {data.description && (
                  <PortableText
                    value={data.description}
                    components={components}
                  />
                )}
              </Box>
            </Box>
          </Box>
        )}
      </Container>
      <GoBackBtn href={Routes.VIRTUOSES_ARTICLE} />
    </PageTemplate>
  );
};
export default VirtuososCurrentArticle;
