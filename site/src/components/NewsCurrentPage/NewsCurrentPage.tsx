import { useParams } from 'react-router-dom';

import { Box, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { useLiveQuery } from '@sanity/preview-kit';
import { currentNewsQuery } from '@/api/query';
import { INews } from '@/types/newsTypes';

import Loader from '../Common/Loader';

import { parseAndFormatDate } from '@/utils/helpers';
import PageTemplate from '../Common/PageTemplate';

import { useFetch } from '@/hook/useFetch';
import { Routes } from '@/types/routes.d';
import NewsBanner from '../Common/NewsBanner';
import PortableComponent from '../Templates/PortableComponent/PortableComponent';

const NewsCurrentPage = () => {
  const { slug } = useParams();

  const {
    i18n: { language },
  } = useTranslation();

  const { responseData, loading, error } = useFetch<INews>(currentNewsQuery, {
    slug,
    language,
  });

  const [data] = useLiveQuery(responseData, currentNewsQuery, {
    slug,
    language,
  });

  if (loading) return <Loader />;
  if (error) {
    console.error(error);
  }

  console.log(responseData);
  if (data)
    return (
      <PageTemplate goBackUrl={Routes.NEWS}>
        <Container>
          <NewsBanner img={data?.img} />
          <Box sx={{ maxWidth: '930px', mx: 'auto' }}>
            <Typography
              sx={{
                mt: { xs: '24px', md: '48px' },
                mb: '24px',
                display: 'block',
                color: (theme) => theme.palette.neutral[50],
              }}
              variant="bodyLight"
            >
              {parseAndFormatDate(data.date)}
            </Typography>
            <Typography variant="h2">{data.title}</Typography>
            <Box
              sx={{
                '*:last-child': {
                  marginBottom: '0px',
                },
                mt: { xs: '24px', md: '32px' },
              }}
            >
              {data.description && (
                <PortableComponent data={data.description} />
              )}
            </Box>
          </Box>
        </Container>
      </PageTemplate>
    );
};
export default NewsCurrentPage;
