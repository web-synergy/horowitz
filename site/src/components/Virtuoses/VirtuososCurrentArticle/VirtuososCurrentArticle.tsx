import { useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { urlFor } from '@/config/sanity/imageUrl';
import { PortableText } from '@portabletext/react';

import { useLiveQuery } from '@sanity/preview-kit';
import { currentArticleQuery } from '@/api/query';
import { INews } from '@/types/newsTypes';

import { theme } from '@/theme';
import { parseAndFormatDate } from '@/utils/helpers';

import { Buttons } from '@/types/translation.d';
import Loader from '@/components/Common/Loader';
import PageTemplate from '@/components/Common/PageTemplate';
import GrowView from '@/components/Common/GrowView';
import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon';
import { components } from '@/components/NewsCurrentPage/prtableComponents';

import { useFetch } from '../../../hook/useFetch';

const VirtuososCurrentArticle = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const {
    t,
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
                {data.dateStart && parseAndFormatDate(data.dateStart)}
                {data.dateEnd && ` - ${parseAndFormatDate(data.dateEnd)}`}
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

              <Button
                variant='tertiary'
                onClick={() => navigate(-1)}
                startIcon={
                  <SvgSpriteIcon
                    icon='arrow'
                    sx={{ transform: 'rotate(90deg)' }}
                  />
                }
                sx={{ mt: 6 }}>
                {t(`buttons.${Buttons.GO_NEWS}`)}
              </Button>
            </Box>
          </Box>
        )}
      </Container>
    </PageTemplate>
  );
};
export default VirtuososCurrentArticle;
