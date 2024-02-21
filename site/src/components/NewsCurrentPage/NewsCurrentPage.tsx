import { useParams } from 'react-router-dom';

import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { urlFor } from '@/config/sanity/imageUrl';
import { PortableText } from '@portabletext/react';
import { components } from './prtableComponents';
import { useLiveQuery } from '@sanity/preview-kit';
import { currentNewsQuery } from '@/api/query';
import { INews } from '@/types/newsTypes';
import GrowView from '../Common/GrowView';
import Loader from '../Common/Loader';

import { theme } from '@/theme';
import { parseAndFormatDate } from '@/utils/helpers';
import PageTemplate from '../Common/PageTemplate';

import { useFetch } from '@/hook/useFetch';
import GoBackBtn from '../Common/GoBackBtn';
import { Routes } from '@/types/routes.d';

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

  const isMob = useMediaQuery(theme.breakpoints.down('md'));

  if (loading) return <Loader />;
  if (error) {
    console.error(error);
  }
  return (
    <PageTemplate>
      <Container>
        {data && (
          <Box sx={{ my: { xs: '40px', md: '48px', lg: '56px' } }}>
            <GrowView>
              <Box
                sx={{
                  width: '100%',
                }}
                src={
                  data.img?.asset &&
                  urlFor(data.img)
                    .width(isMob ? 400 : 920)
                    .height(isMob ? 340 : 408)
                    .fit('fill')
                    .url()
                    .toString()
                }
                alt={data.img?.alt}
                component={'img'}></Box>
            </GrowView>

            <Box sx={{ maxWidth: '930px', mx: 'auto' }}>
              <Typography
                sx={{
                  mt: '54px',
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
      <GoBackBtn href={Routes.NEWS} />
    </PageTemplate>
  );
};
export default NewsCurrentPage;
