import { useNavigate, useParams } from 'react-router-dom';

import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { urlFor } from '@/config/sanity/imageUrl';
import { PortableText } from '@portabletext/react';
import { components } from './prtableComponents';
import Breadcrumbs from '../Common/Breadcrumbs';
import { Routes } from '@/types/routes.d';
import { useLiveQuery } from '@sanity/preview-kit';
import { currentNewsQuery } from '@/api/query';
import { INews } from '@/types/newsTypes';
import { getCurrentNews } from '@/api';
import GrowView from '../Common/GrowView';
import Loader from '../Common/Loader';
import SvgSpriteIcon from '../Common/SvgSpriteIcon';
import { theme } from '@/theme';
import { parseAndFormatDate } from '@/utils/helpers';
import PageTemplate from '../Common/PageTemplate';
import { Buttons } from '@/types/translation.d';

const NewsCurrentPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const [currentNews, setCurrentNews] = useState<INews | null>(null);

  const {
    t,
    i18n: { language },
  } = useTranslation();

  useEffect(() => {
    const getData = async () => {
      if (slug) {
        const response = await getCurrentNews(language, slug);
        setCurrentNews(response);
      }
      setLoader(false);
    };
    getData();
  }, [slug, language]);

  const [data] = useLiveQuery(currentNews, currentNewsQuery, {
    slug,
    language,
  });

  const isMob = useMediaQuery(theme.breakpoints.down('md'));
  const history = [
    { title: t(`navigation.${Routes.NEWS}`), href: `/${Routes.NEWS}` },
  ];
  if (loader) return <Loader />;

  return (
    <PageTemplate>
      <Container>
        <Breadcrumbs title={data?.title || ''} mode='light' history={history} />
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
export default NewsCurrentPage;
