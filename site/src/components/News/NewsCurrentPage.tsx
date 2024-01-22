import { useNavigate, useParams } from 'react-router-dom';
import PageTemplate from '../Common/PageTemplate';
import { Box, Container, Link, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { urlFor } from '@/config/sanity/imageUrl';
import { PortableText } from '@portabletext/react';
import { components } from './prtableComponents';
import { parseAndFormatDate } from '@/utils/helpers';
import Breadcrumbs from '../Common/Breadcrumbs';
import { Routes } from '@/types/routes.d';
import { useLiveQuery } from '@sanity/preview-kit';
import { currentNewsQuery } from '@/api/query';
import { INews } from '@/types/newsTypes';
import { getCurrentNews } from '@/api';
import GrowView from '../Common/GrowView';
import Loader from '../Common/Loader';
import SvgSpriteIcon from '../Common/SvgSpriteIcon';

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
    window.scrollTo({ top: 0, left: 0 });
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

  const history = [
    { title: t(`navigation.${Routes.NEWS}`), href: `/${Routes.NEWS}` },
  ];
  if (loader) return <Loader />;

  return (
    <PageTemplate>
      <Container>
        <Breadcrumbs title={data?.title || ''} mode='light' history={history} />
        {data && (
          <Box sx={{ my: '56px' }}>
            <GrowView>
              <Box
                sx={{ width: '100%', height: 'auto' }}
                src={urlFor(data.img)
                  .width(920)
                  .height(400)
                  .fit('fill')
                  .url()
                  .toString()}
                component={'img'}></Box>
            </GrowView>

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
              <Link
                sx={{ mt: { xs: '8px', md: '18px', lg: '24px' } }}
                onClick={() => navigate(-1)}>
                <SvgSpriteIcon
                  sx={{ transform: 'rotate(90deg)' }}
                  icon='arrow'
                />
                {t(`news.goBack`)}
              </Link>
            </Box>
          </Box>
        )}
      </Container>
    </PageTemplate>
  );
};
export default NewsCurrentPage;
