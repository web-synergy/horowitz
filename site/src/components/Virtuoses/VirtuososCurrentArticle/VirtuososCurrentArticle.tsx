import { useParams } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { useLiveQuery } from '@sanity/preview-kit';
import { currentArticleQuery } from '@/api/query';
import { INews } from '@/types/newsTypes';

import { parseAndFormatDate } from '@/utils/helpers';

import Loader from '@/components/Common/Loader';
import PageTemplate from '@/components/Common/PageTemplate';

import { useFetch } from '@/hook/useFetch';
import { Routes } from '@/types/routes.d';
import NewsBanner from '@/components/Common/NewsBanner';
import PortableComponent from '@/components/Templates/PortableComponent/PortableComponent';

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
    <PageTemplate goBackUrl={Routes.VIRTUOSES_ARTICLE}>
      <Container>
        {data && (
          <>
            <NewsBanner img={data?.img} />

            <Box sx={{ maxWidth: '930px', mx: 'auto' }}>
              <Typography
                sx={{
                  mt: { xs: 3, md: 6 },
                  mb: 3,
                  display: 'block',
                  color: (theme) => theme.palette.neutral[50],
                }}
                variant="bodyLight"
              >
                {parseAndFormatDate(data.date)}
              </Typography>

              <Typography variant="h3" component="h1">
                {data.title}
              </Typography>
              <Box
                sx={{
                  mt: { xs: '24px', md: '32px' },
                  '*:last-child': {
                    marginBottom: '0px',
                  },
                }}
              >
                {data.description && (
                  <PortableComponent data={data.description} />
                )}
              </Box>
            </Box>
          </>
        )}
      </Container>
    </PageTemplate>
  );
};
export default VirtuososCurrentArticle;
